import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor () {
        super()
        // this.state = {
        //    comments:[]
        // }
    }
    static defaultProps = {
        comments: []
    }
    handleSubmitComment (comment) {
        if(this.props.onSub)
        {
            this.props.onSub(comment)
        }
        // this.state.comments.push(comment);
        // this.setState({
        //     comments:  this.state.comments
        // })
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}  />
                <CommentList comments={this.props.comments}/>
            </div>
        )
    }
}
//this.state.comments

export default CommentApp