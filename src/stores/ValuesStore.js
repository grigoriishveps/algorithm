import { action, observable } from 'mobx'

class ValuesStore {
  @observable
  x = 1
  @observable
  y = 1

  constructor() {
    this.x =Number(window.localStorage.getItem('x') ?? 1)
    this.y =Number(window.localStorage.getItem('y') ?? 1)
  }

  @action
  setValues = (x, y) => {
    this.x = x
    this.y = y
    window.localStorage.setItem('x', this.x)
    window.localStorage.setItem('y', this.y)
  }
}

export default ValuesStore
