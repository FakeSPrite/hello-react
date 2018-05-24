import React, { Component } from 'react'
// import CommentList from "./CommentList";


class Comment extends Component {
    // commentData = [
    //     {'username':'Anvis','content':'this is nice'},
    //     {'username':'Anvis','content':'this is nice'},
    //     {'username':'Anvis','content':'this is nice'},
    // ]
    // static defaultProps = {
    //     comment: []
    // }

    render() {

        return (
            <div>
                    <div className='comment' >
                        <div className='comment-user' >
                            <span>{this.props.comment.username}：</span>
                        </div>
                        <div><p>{this.props.comment.content}</p>
                    </div>
                    </div>
         </div>
        )
    }
}
export default Comment