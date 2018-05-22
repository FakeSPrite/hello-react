import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    handleSubmitComment (comment) {
        console.log(comment)
        this.setState({
            username: comment.username
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comment={this.state.username}/>
            </div>
        )
    }
}

export default CommentApp