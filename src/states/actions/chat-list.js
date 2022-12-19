import {CHANGEACTIVECHATLIST} from "../actions-type/chat-list";

export const ChangeActiveChatList = (data) => ({
    type: CHANGEACTIVECHATLIST,
    payload: data
})

export const SetUAtiveChatList = (dispatch, data) => {
    return dispatch(ChangeActiveChatList(data))
}