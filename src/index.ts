import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app/App'
import { banquetSingleSpaReact } from '@toasttab/banquet-single-spa-react'
import './index.css'

const reactLifecycles = banquetSingleSpaReact({
  React,
  ReactDOM,
  cssScope: 'crdis',
  rootComponent: App
})

export const bootstrap = reactLifecycles.bootstrap
export const mount = reactLifecycles.mount
export const unmount = reactLifecycles.unmount
