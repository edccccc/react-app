import React, { Component, Fragment } from 'react'
import TodoItem from './components/todoItem'
import AddTodoItem from './components/addTodoItem'
import './css/index.css'
import { DeleteAction, ChangeAction, AddAction } from '../../store/storeCreator'
import store from '../../store'
export default class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            store: store.getState()
        }
        store.subscribe(() => {
            this.handleStoreChange()
        })
        this.handleDelete.bind(this)
        this.handleChange.bind(this)
        this.handleChange.bind(this)
    }
    render() {
        return (<div className="todolist">
            <AddTodoItem handleChange={this.handleChange} inputVal={this.state.store.inputVal} handleAdd={this.handleAdd} />
            <TodoItem handleDelete={this.handleDelete} list={this.state.store.list} /></div>)
    }
    handleDelete(index) {
        store.dispatch(DeleteAction(index))
    }
    handleStoreChange() {
        this.setState(() => {
            return {
                store: store.getState()
            }
        })
    }
    handleChange(e) {
        const value = e.target.value
        store.dispatch(ChangeAction(value))
    }
    handleAdd() {
        store.dispatch(AddAction())
    }
}

