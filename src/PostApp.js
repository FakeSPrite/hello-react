import React, { Component } from 'react'
import CommentApp from './CommentApp'
import SideFun from './SideFun'

class PostApp extends Component {
    constructor () {
        super()
        this.state = {
           comments:[],
            count:0
        }
    }
    handleSubmitComment (comment) {
        this.state.comments.push(comment);
        this.setState({
            comments:  this.state.comments
        })
    }

    deleteAll (){
        console.log(this.state.comments);
        this.setState({
            comments:  []
        })
    }
    countAll (){
        this.setState({
            count:   this.state.comments.length
        })
    }
    render() {
        return (
            <div className='wrapsper'>
                <CommentApp
                    onSub={this.handleSubmitComment.bind(this)} comments={this.state.comments} />
               <SideFun countAll={this.countAll.bind(this)} deleteAll={this.deleteAll.bind(this)} />
                <div>ther are {this.state.count} in the comments</div>
            </div>
        )
    }
}
//this.state.comments

export default PostApp