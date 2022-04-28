import React, {useState,useEffect} from 'react'

export default function UserEffectDemo(props) {

    const [number,setNumber] = useState(1);
    const [like,setLike] = useState(1);
    // useEffect(()=>{
    //     //callback function chạy sau khi giao diện render 
    //     //thay thế cả didmount và didupdate úng với lifecycle reactjs
    //     console.log('didmount');
    //     console.log('didupdate');
    // })

    useEffect(()=>{
        // Thay thế component didmount thường gọi api hoặc sử dụng thư viện trong hàm này
        console.log('didmount')
    },[]) //Tham số 2 mảng [] => chạy 1 lần sau render
    
    useEffect(()=>{
        // Chạy lần đầu và Khi nào state (like) thay đổi thì hàm này sẽ tự động kích hoạt 
        console.log('didUpdate Like',like)
    },[like]) //Biến like thay đổi thì hàm này kích hoạt

    useEffect(()=>{
        return () => {
            // Trước khi component biến mất khỏi giao diện thì hàm này sẽ kích hoạt
            console.log('Will unmount')
        }
    })
   
  
    return (
    <div className="container"> 
        <h3>UseEffect demo</h3>
        <h3>Number: {number}</h3>
        <button className="btn btn-outline-danger" onClick={()=>{
            
            setNumber(number+1);
            
        }}>UP</button>
        <hr />
        <h3>Like: {like}</h3>
        <button className="btn btn-outline-danger" onClick={()=>{
            
            setLike(like+1);
            
        }}>UP</button>
    </div>
  )
}
