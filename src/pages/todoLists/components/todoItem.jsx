import React, { Component } from 'react'
import { List, Typography } from 'antd';
export default class TodeItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<List
            size="small"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => <List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>}
        />)
    }
}