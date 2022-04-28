import { USER_LOGIN } from "../../util/setting";

let usLogin = null;
if(localStorage.getItem(USER_LOGIN)) {
   usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: usLogin
}

export const QuanLyNguoiDungReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'LOGIN': {
            state.userLogin = action.userLogin;
            console.log('Thành công');
            return {...state}
        }
        default: { return { ...state } }
    }
}