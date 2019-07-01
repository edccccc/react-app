import React from 'react'
import { List} from 'antd';
// export default class TodeItem extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (<List
//             size="small"
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => <List.Item onClick={() => { this.props.handleDelete(index) }}>{item}</List.Item>}
//         />)
//     }
// }
const TodeItem = (props) => {
    return (<List
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => { props.handleDelete(index) }}>{item}</List.Item>}
    />)
}
export default TodeItem