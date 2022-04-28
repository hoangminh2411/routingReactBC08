import { ADD_COMMENT } from "../types/FakeBookType";

export const addCommentAction = (userComment) => {
    return {
        type:ADD_COMMENT,
        userComment: {...userComment,img:`https://i.pravatar.cc/50?u=${userComment.name}`}
    }   
}