import React, { Component, Fragment } from 'react'
import TodoItem from './components/todoItem'
import AddTodoItem from './components/addTodoItem'
import './css/index.css'
import { DeleteAction, ChangeAction, AddAction } from '../../store/storeCreator'
import store from '../../store'
import { connect } from 'react-redux'
// class Todolist extends Component {
//     constructor(props) {
//         super(props)
//         // store.subscribe(() => {
//         //     this.handleStoreChange()
//         // })
//         this.handleDelete.bind(this)
//         this.handleChange.bind(this)
//         this.handleChange.bind(this)
//     }
//     render() {
//         const { inputVal, handleChange, handleAdd, handleDelete, list } = this.props
//         return (<div className="todolist">
//             <AddTodoItem handleChange={handleChange} inputVal={inputVal} handleAdd={handleAdd} />
//             <TodoItem handleDelete={handleDelete} list={list} /></div>)
//     }
//     handleDelete(index) {
//         store.dispatch(DeleteAction(index))
//     }
//     handleStoreChange() {
//         this.setState(() => {
//             return {
//                 store: store.getState()
//             }
//         })
//     }
//     handleChange(e) {
//         const value = e.target.value
//         store.dispatch(ChangeAction(value))
//     }
//     handleAdd() {
//         store.dispatch(AddAction())
//     }
// }
const Todolist = (props) => {
    const { inputVal, handleChange, handleAdd, handleDelete, list } = props
    return (<div className="todolist">
        <AddTodoItem handleChange={handleChange} inputVal={inputVal} handleAdd={handleAdd} />
        <TodoItem handleDelete={handleDelete} list={list} /></div>)

}
const mapStateToProps = (state) => {
    return {
        inputVal: state.inputVal,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete(index) {
            dispatch(DeleteAction(index))
        },
        handleChange(e) {
            const value = e.target.value
            dispatch(ChangeAction(value))
        },
        handleAdd() {
            dispatch(AddAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
