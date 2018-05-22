import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        return (
            <div><Comment comment={this.props.username}/></div>
        )
    }
}

export default CommentList