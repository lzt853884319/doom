import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx';

export class AppState {
  @observable count = 0;

  @observable name = 'lzt';

  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }

  constructor() {
    autorun(() => {
      console.log(this.msg)
    })
  }

  @action add() {
    this.count++
  }

  @action changeName(name) {
    this.name = name
  }
}


const appState = new AppState();

export default appState
