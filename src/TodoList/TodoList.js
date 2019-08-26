import React from "react";

import { connect } from 'react-redux';


const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick,DeleteItem } = props;
    return (
        <div>
    <div>
        <input value={inputValue} onChange={changeInputValue}></input>
        <button onClick={handleClick}>提交</button>
    </div>
    <ul>
        {
            props.list.map((item, index) => {
                return <li key={index} onClick={()=>{DeleteItem(index)}}>{item}</li>
            })
        }
    </ul>
        </div >
    )
}



const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        changeInputValue(e) {
            const action = {
                type: "change_input_value",
                value: e.target.value
            }
            dispath(action)

        },

        handleClick() {
            const action = {
                type: "add_item",
            }
            dispath(action)
        },
        DeleteItem(index) {
            console.log(index)
            const action = {
                type: "delete_item",
                index
            }
            dispath(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);