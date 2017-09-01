import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../containers'
import Home from '../containers/Home'
import News from '../containers/News'
import Yule from '../containers/Yule'
import Sports from '../containers/Sports'
import Toutiao from '../containers/Toutiao'

export default class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/news' component={News}></Route>
                    <Route path='/yule' component={Yule}></Route>
                    <Route path='/sports' component={Sports}></Route>
                    <Route path='/toutiao' component={Toutiao}></Route>
                </Route>
            </Router>
        )
    }
}
