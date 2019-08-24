
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionType';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddTodoItem = () => ({
    type: ADD_TODO_ITEM,
})
export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
export const getTodoList = () => {
    return (dispatch)=>{
        const data = ['44', '45', '46'];
        console.log(data)
        const action = initListAction(data);
        dispatch(action)
   

        // axios.get('/list.json').then(
        //     (res) => {
        //         const data = ['44', '45', '46'];
        //         const action = initListAction(data);
        //     }
        // ).catch(
        //     (err) => {
        //         console.log(err)
        //     })
    }
}