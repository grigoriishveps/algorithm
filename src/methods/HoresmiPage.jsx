import React from 'react'
import { inject, observer } from 'mobx-react'
import * as R from 'ramda'

import styles from './methods.module.scss'
import Otherwise from 'ramda/src/otherwise'

const preload = (x, y) => {
  const steps = []
  let a = Math.min(x,y)
  let b = Math.max(x,y)

  if(a < 1 || b < 1)
    return [{
      a: 'null',
      b: 'null',
      odd: a%2 === 1
    }]

  let result = 0
  while(a !== 0){
    steps.push({
      a,
      b,
      odd: a%2 === 0
    })
    result += a%2 !== 0 ? b : 0
    a= Math.floor(a/2)
    b*=2
  }

  return { steps, result}
}

const HoresmiPage = ({ valuesStore }) => {
  const data = preload(valuesStore.x, valuesStore.y)

  return (
    <div className={styles.horesmi}>
      <For of={data.steps} body={(step) => (
        <div className={styles.row}>
          <div>{step.a}</div>
          <div>
            <Choose>
              <When condition={step.odd}>
                <s>{step.b}</s>
              </When>
              <Otherwise>
                {step.b}
              </Otherwise>
            </Choose>
          </div>
        </div>
      )}/>
      <div className={styles.result}>
        {data.result}
      </div>
    </div>
  )
}

export default HoresmiPage|> observer |> inject('valuesStore')
