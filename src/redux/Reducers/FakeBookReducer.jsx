import { ADD_COMMENT } from "../types/FakeBookType";

const initialState = {
    arrComment: [
        {name:'Si',content:'Ahihi', img:'https://picsum.photos/id/1/200/300'},
        {name:'Tuan',content:'hello', img:'https://picsum.photos/id/2/200/300'}
    ]
}

export const FakeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
        state.arrComment = [...state.arrComment, action.userComment];

        return {...state};
    }
  
    default:
        return state
  }
}
