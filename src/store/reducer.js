import {
    Delete_Type,
    Change_Type,
    Add_Type
} from './actionType'
const data = {
    list: ['test'],
    inputVal: "123"
}
const reducer = (state = data, action) => {

    // return state
    const actionType = action.type
    switch (actionType) {
        // eslint-disable-next-line no-lone-blocks
        case Delete_Type: {
            const newState = {
                ...state
            }
            newState.list.splice(action.index, 1)
            return newState
        }
        case Change_Type: {
            const newState = {
                ...state
            }
            newState.inputVal = action.value
            return newState
        }
        case Add_Type: {
            const newState = {
                ...state
            }
            const value = newState.inputVal
            if(!value)return newState
            newState.list.push(value)
            newState.inputVal = ''
            return newState
        }
        default: {
            return state
        }
    }
}
export default reducer