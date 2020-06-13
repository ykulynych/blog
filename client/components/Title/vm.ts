import { TAppContext } from '../../AppContext'

export class TitleVm {
  public title: string

  constructor({ appState }: TAppContext) {
    this.title = appState.title
  }
}
