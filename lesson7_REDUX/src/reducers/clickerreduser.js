
//action => type, payLoad(даные)
const clicerReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCRIMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}
export default clicerReducer;