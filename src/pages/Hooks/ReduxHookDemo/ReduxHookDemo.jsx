import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../../redux/actions/FakeBookActions';

export default function ReduxHookDemo(props) {

    // useSelector là hook tương đương với hàm mapStateToProps
    const { arrComment } = useSelector(state => state.FakeBookReducer);
    console.log(arrComment);

    const [userComment, setUserComment] = useState({
        name:'',
        comment: ''
    })

    //useDispatch giống với this.props.dispatch bên rcc
    const dispatch =useDispatch();

    const handleChange =  (event) => {
        let {value,name} = event.target;
        setUserComment({
            ...userComment,
            [name]: value
        })
    }

    const renderComment = () => {
        return arrComment.map((comment, index) => {
            return <div className="row" index={index}>
                
                <div className="col-1">
                    <img src={comment.img} width="50" height="50" alt="" />
                </div>
                <div className="col-11">
                    <h3 className="text-danger">{comment.name}</h3>
                    <p>{comment.content}</p>
                </div>

            </div>
        }

        )
    }

    const handleSubmit = (event) => {
        // chặn sự kiện submit browser
        event.preventDefault();
        // action creator
        const action = addCommentAction(userComment)
        
        dispatch(action);
     }



    return (
        <div className="container">
            <h3>Facebook App!</h3>
            <div className="card">
                <div className="card-header">
                    {renderComment()}
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>Name</p>
                        <input className="form-control" name="name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <p>Content</p>
                        <input className="form-control" name="content" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-success" type="submit">Send</button>

                    </div>
                </form>
            </div>

        </div>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         arrComment: state.FakeBookReducer.arrComment
//     }
// }



// export default connect(mapStateToProps)(ReduxHookDemo)

