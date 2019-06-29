import {Delete_Type,Change_Type,Add_Type} from './actionType'
export const DeleteAction = (index)=>{
    return {
        type:Delete_Type,
        index
    }
}
export const ChangeAction = (value)=>{
    return {
        type:Change_Type,
        value
    }
}
export const AddAction = ()=>{
    return {
        type:Add_Type
    }
}