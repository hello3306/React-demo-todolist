import React, { Component } from "react";
import { Input, List, Button } from 'antd';
import 'antd/dist/antd.css';
import store from "../store/index";
import { getInputChangeAction,getAddTodoItem,getDeleteTodoItem } from "../store/actionCreators"


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonChange = this.handleButtonChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div>
                <div>
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.inputValue}
                        placeholder="請輸入內容"
                        size="large"
                        style={{ width: '300px', margin: "10px", }}>
                    </Input>
                    <Button type="primary" onClick={this.handleButtonChange}>提交</Button>
                </div>

                <List
                    style={{ margin: "10px", width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleListItemChange.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>

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