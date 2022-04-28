import React from 'react'
import AxiosDemoRFC from '../../AxioxDemo/AxiosDemoRFC';

export default function Films(props) {
  return (
    <div>
        <h3>Films</h3>
        <button className="btn btn-primary"onClick={()=>{
            props.history.push('/admin/addfilms');
        }}>Thêm phim</button>
        <AxiosDemoRFC/>
    </div>
  )
}
