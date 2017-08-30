import React, {Component} from 'react';
import {SearchBar} from 'antd-mobile';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder="搜索" maxLength={8}/>
            </div>
        );
    }
}

export default App;
