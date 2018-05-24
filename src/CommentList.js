import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {

            return (
                <div>
                { this.props.comments.map((comment, i) =>
                <div><Comment comment={comment} key={i}/></div>
                )}
                </div>
            )
    }
}

export default CommentList