import React from 'react'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import RouteMap from './router/routeMap'

import './static/css/reset.css'
import './static/fonts/iconfont.css'

// 创建 Redux 的 store 对象
const store = configureStore()

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
