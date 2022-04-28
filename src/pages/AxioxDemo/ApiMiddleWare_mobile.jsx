import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LayDanhSachPhimAction } from '../../redux/actions/PhimAction'



export default function ApiMiddleWare_mobile() {

    const { mangPhim } = useSelector(state => state.PhimReducer)

    const dispatch = useDispatch()

    useEffect(() => {

        // Redux có  2 loại action trong redux
        // Loại 1: {type:'TYPE_name', data: {}}
        // Loại 2: action là function 
        const action = LayDanhSachPhimAction();

        

        // Trong trường hợp action là function thì, thì redux đợi function thực thi xong=> Gửi dữ liệu đi
        dispatch(action)



    }, [])

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="d-flex mt-2" key={index}>
                <div  style={{width:'100px'}}>
                   <img className="w-100" style={{width:100}} src={phim.hinhAnh} onError={(e) => (e.target.onerror = null, e.target.src ="https://picsum.photos/200/200")} />
                </div>
                <div className="ml-2">
                    <p>{phim.moTa?.length>100 ? phim.moTa.substr(0,100)+'...': phim.moTa}</p>
                    <button class="btn btn-outline-success">Đặt vé</button>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="mt-2">
                {renderPhim()}
            </div>

        </div>
    )
}
