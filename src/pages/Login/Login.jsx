import React, {useState} from 'react'
import {Prompt} from 'react-router-dom';
import {useFormik} from 'formik'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAtions';
import { useDispatch } from 'react-redux';


export default function Login(props) {
    // const [state, setState] = useState({isSaveForm: true, taiKhoan: '', matKhau: '' })
    // console.log('state',state);
   
    // const handleChangeInput =  (event) => {
    //     let {value,name} = event.target;

    //     setState({
    //         ...state,
    //         [name]: value
    //     })
    // }
    
    // const handleSubmit = (event) => {
        
    //     event.preventDefault();
    //     if(state.taiKhoan ==='cybersoft') {
    //         // Xử lý nghiệp vụ thành công mới chuyển trang
            

    //         props.history.replace('/home');//Thay đổi trang hiện tại thành trang có path tương ứng
    //     }
    //     else alert('Tài khoản hoặc mật khẩu không đúng!')
    // }

    const dispatch = useDispatch();
    const formik = useFormik({
        
        initialValues: {
            taiKhoan:'',
            matKhau:''
        },
        onSubmit: (values)=>{
            const action = dangNhapAction(values);
            dispatch(action);
            console.log(values);
        }
    })

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Tài Khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange}/>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau"  onChange={formik.handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-outline-danger mr-2" type="submit">Login</button>

                <button className="btn btn-outline-danger" type="button" onClick={()=>{
                  props.history.goBack()
                }}>Go Back</button>
            </div>



            {/* <Prompt when={state.isSaveForm} message ={(location)=>{
                return 'Bạn có chắc muốn rời khỏi trang';
            }} /> */}
        </form>
    )
}
