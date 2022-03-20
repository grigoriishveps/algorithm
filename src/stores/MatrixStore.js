import * as R from 'ramda'
import { action, observable } from 'mobx'

class MatrixStore {
  @observable
  matrix = [[0]]
  @observable
  size = 1

  constructor() {
    const arr1 = window.localStorage.getItem('matrix')?.split(',')

    const size = Number(window.localStorage.getItem('size'))
    this.size = Number(window.localStorage.getItem('size') ?? 1)
    if (arr1) {
      const arr = arr1.map(Number)

      const res = []
      for(let i=0; i<arr.length;i += size){
        res.push(arr.slice(i, i +size))
      }
      this.matrix = res
    }
  }

  @action
  setValues = (size, matrix) => {
    this.size = size
    this.matrix = matrix
    window.localStorage.setItem('matrix', matrix)
    window.localStorage.setItem('size', size)
  }
}

export default MatrixStore
