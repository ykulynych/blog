import { action, computed } from 'mobx'
import { TAppContext } from '../../AppContext'
import { ArticlesState } from '../../states'

export class ArticlesVm {
  private articlesState: ArticlesState

  constructor({ articlesState }: TAppContext) {
    this.articlesState = articlesState
  }

  @action.bound
  public addArticle() {
    this.articlesState.add({
      title: 'Oh',
      description: 'New article!'
    })
  }

  @action.bound
  public removeArticle(id: string) {
    this.articlesState.remove(id)
  }

  @computed
  public get articles() {
    return this.articlesState.articles
  }
}
