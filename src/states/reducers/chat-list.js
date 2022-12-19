import {CHANGEACTIVECHATLIST} from "../actions-type/chat-list";

const initialState = {
    back_page: undefined
}
const ReducerTicket = (state = initialState, action) => {
    let width = window.innerWidth
    if (width <= 992) {
        if (action.type == CHANGEACTIVECHATLIST) return {back_page: action.payload}; else return state;
    } else return state;
}
export default ReducerTicket