import React, { Component } from 'react'
import { Input } from 'antd';
const { Search } = Input;
export default class AddTodoItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Search
            placeholder="input search text"
            enterButton="新增"
            size="large"
            onSearch={()=>(this.props.handleAdd())}
            value={this.props.inputVal}
            onChange={(e)=>{this.props.handleChange(e)}}
        />)
    }
}