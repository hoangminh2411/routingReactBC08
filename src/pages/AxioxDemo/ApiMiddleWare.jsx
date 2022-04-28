import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LayDanhSachPhimAction } from '../../redux/actions/PhimAction'



export default function ApiMiddleWare() {

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
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} onError={(e) => (e.target.onerror = null, e.target.src ="https://picsum.photos/200/200")}/>
                    <div className="card-body">
                        <h3>{phim.tenPhim}</h3>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>

        </div>
    )
}
