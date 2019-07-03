import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Todolist from './pages/todoLists'
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import store from './store'
import RouterDom from './pages/router'
const App = (
<Provider store={store}>
    <Todolist/>
</Provider>
)
ReactDOM.render(<RouterDom/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
