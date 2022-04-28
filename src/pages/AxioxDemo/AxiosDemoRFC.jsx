import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../util/setting';

export default function AxiosDemoRFC() {

  const [mangPhim, setMangPhim] = useState([]);

  useEffect(() => {
    let promise = axios({
      url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET',
      headers: {
        "TokenCybersoft": TOKEN_CYBERSOFT
      }
    })

    promise.then(result => {
      console.log('result', result.data)
      // Sau khi call api thành công lấy dữ liệu api set vào state mang Phim
      setMangPhim(result.data.content)
    })

    promise.catch(error => {
      console.log('error', error.response.data)
    })
  }, [])

  const renderPhim = () => {
    return mangPhim.map((phim,index)=>{
      return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt="" height={300}/>
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
      <button onClick={() => {

      }}>Lấy danh sách phim</button>
      <h3 className="text-center">Danh sách phim</h3>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}
