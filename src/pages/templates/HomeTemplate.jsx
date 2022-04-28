import Header from "../../components/HomePage/Header"
import { Fragment, useState,useEffect } from "react"
// Fragment giống thẻ div mà không hiển thị chỉ dùng để bao bọc trang

import { Route } from "react-router-dom"

export const HomeTemplate = (props) =>{
    //props (path, component)
    const [state,setState] = useState ({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=>{
        // Chạy khi window load lần đầu
        window.onload = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        //chạy mỗi khi thay đổi kích thước
        window.onresize = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    },[])

    const renderComponent = (propsRoute) => {
        if(state.width <=768) {
            if(props.mobileComponent) {
                return <props.mobileComponent {...propsRoute} />
            }
            return <props.component {...propsRoute} />
        }
        return <props.component {...propsRoute} />
    }


    return <div>
       
       <Route path={props.path} render={(propsRoute)=>{
           return <Fragment>
               <Header />
               {renderComponent()}
           </Fragment> 
       }} />
    </div>
}