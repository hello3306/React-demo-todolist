
const defaultStatus = {
    inputValue: '',
    list: []

}
export default (state = defaultStatus, action) => {
    if (action.type === "change_input_value") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === "add_todo_item"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue="";
        return newState;
    }
    if(action.type === "delete_todo_item"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        console.log(action)
        return newState;
    }
    return state;
}