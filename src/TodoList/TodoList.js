import React, { Component } from "react";
import 'antd/dist/antd.css';
import store from "../store/index";
import {getInitList, getInputChangeAction, getAddTodoItem, getDeleteTodoItem } from "../store/actionCreators";
import TodoListUI from './TodoListUI';


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonChange = this.handleButtonChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleListItemChange = this.handleListItemChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        const action=getInitList()
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleButtonChange={this.handleButtonChange}
                handleStoreChange={this.handleStoreChange}
                handleListItemChange={this.handleListItemChange}
            />
        )
    }


    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleButtonChange() {
        const action = getAddTodoItem();
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleListItemChange(index) {
        const action = getDeleteTodoItem(index);
        store.dispatch(action)
    }

}

export default TodoList;