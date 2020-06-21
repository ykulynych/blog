import { action, observable } from 'mobx'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'

export interface IArticle {
  id?: string
  title: string
  description: string
}

export class ArticlesState {
  @observable public articles: Record<string, IArticle> = {}

  @action.bound
  public add(article: IArticle) {
    const generateId = uuidv4
    const withNewArticle = R.assoc(generateId(), article)
    this.articles = withNewArticle(this.articles)
  }

  @action.bound
  public remove(id: string) {
    this.articles = R.dissoc(id, this.articles)
  }
}
