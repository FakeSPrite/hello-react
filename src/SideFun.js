import React, { Component } from 'react'
// import CommentApp from './CommentApp'

class SideFun extends Component {
    // constructor () {
    //     super()
    //     this.state = {
    //        comments:[]
    //     }
    // }
    // handleSubmitComment (comment) {
    //     this.state.comments.push(comment);
    //     this.setState({
    //         comments:  this.state.comments
    //     })
    // }

    deleteAll (){
       if(this.props.deleteAll){
           this.props.deleteAll();
       }
    }
    countAll (){
        if(this.props.countAll){
            this.props.countAll();
        }
    }
    render() {
        return (
            <div className='wrapsper'>
                sadsad
                <button onClick={()=>this.deleteAll()}> CLICK HERE to delete</button>
                <button onClick={()=>this.countAll()}> CLICK HERE to count</button>
            </div>
        )
    }
}
//this.state.comments

export default SideFun