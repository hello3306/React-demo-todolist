
import React from 'react';
import { Input, List, Button } from 'antd';

// 无状态组件
const TodoListUI=(props)=>{
    return (
        <div>
            <div>
                <Input
                    onChange={props.handleInputChange}
                    value={props.inputValue}
                    placeholder="請輸入內容"
                    size="large"
                    style={{ width: '300px', margin: "10px", }}>
                </Input>
                <Button type="primary" onClick={props.handleButtonChange}>提交</Button>
            </div>

            <List
                style={{ margin: "10px", width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => { props.handleListItemChange(index) }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>

    )
}

export default TodoListUI;