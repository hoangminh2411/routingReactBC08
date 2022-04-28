import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../util/setting';
import { http } from '../../util/setting';




// Closure function: connect()()

export const LayDanhSachPhimAction  = (maNhom='GP01') => {
    return (dispatch2) => {

        let promise = http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
        // let promise = axios({
        //     url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        //     method: 'GET',
        //     headers: {
        //         "TokenCybersoft": TOKEN_CYBERSOFT
        //     }
        // })
    
        promise.then(result => {
            console.log('result', result.data)
            // Sau khi call api thành công lấy dữ liệu api set vào state mang Phim
            dispatch2({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim: result.data.content
            })
        })
    
        promise.catch(error => {
            console.log('error', error.response.data)
        })
    }
    
    
}