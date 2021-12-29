const INITIAL_STATE = {
    sort: 'name'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "Sort":
            return action.payload
        default:
            return "name"
    }
}


export default reducer;