import React, { Component } from 'react'
import CommentList from "./CommentList";


class Comment extends Component {
    commentData = [
        {'username':'Anvis','content':'this is nice'},
        {'username':'Anvis','content':'this is nice'},
        {'username':'Anvis','content':'this is nice'},
    ]
    static defaultProps = {
        comment: []
    }

    render() {

        return (
            <div>{this.commentData.map((comment, i) => {
                return (
                    <div key={i}>
                        {comment.username}：{comment.content}
                        {console.log(this.props.comment)}
                    </div>
                )
            })}</div>
        )
    }
}
export default Comment