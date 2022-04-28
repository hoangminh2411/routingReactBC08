import React, {useState} from 'react'

export default function UseStateDemo(props) {
    
    
    const [like,setLike] = useState(1)
    
    const [imgCar,setImgCar] = useState("./img/CarBasic/products/red-car.jpg")
    
    // const [userLogin,setUserLogin] = useState({
    //     taiKhoan: '', 
    //     matKhau:''
    // })

    // const [state,setState] = useState({like:1}) //=>[pt1,pt2]

    const changeColor = (color) =>{
        setImgCar(`./img/CarBasic/products/${color}-car.jpg`)
    }
    


    return (
    <div>
        
        <h3>Demo UseState</h3>
        <div className="card w-25">
            <img src="https://picsum.photos/200" alt="" className="w-100" />
            <div className="card-body">
                <p>{like} like</p>
                <button className="btn btn-outline-danger" onClick={()=>{
                    setLike(like+1)
                }}>like</button>
            </div>
        </div>
        <hr />
        <h3>Bài tập chọn xe</h3>
        <div className="container-lg">
            <div className="row">
                <div className="col-6">
                    <img src={imgCar} alt="blackcar"  className="w-100"/>
                </div>

                <div className="col-6">
                    <div className="row">
                        <button className="bg-dark text-white col-3" onClick ={()=>{
                            changeColor('steel');
                        }}   >Steel</button>
                        <button className="bg-dark text-white col-3" onClick ={()=>{
                            changeColor('black');
                        }} >Black</button>
                        <button className="bg-danger text-white col-3" onClick ={()=>{
                            changeColor('red')
                        }}>Red</button>
                        <button className="bg-dark text-white col-3"  onClick ={()=>{
                            changeColor('silver')
                        }} >Silver</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
