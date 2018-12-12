import React, {Component} from 'react';
import Post from './Post';

class PostDetails extends Component{
    constructor(){
        super();
        this.state = {
            post: null
        }
    }
    
    componentDidMount(){
        const lsposts = JSON.parse(localStorage.getItem('posts'));
        const post = lsposts.filter(posts => {
            return posts.time == this.props.match.params.time;
        })[0];
        this.setState({post});
    }

    render(){
        console.log(this.state);
        if(this.state.post === null || this.state.post == undefined){
            return(<div>Loding</div>)
        }else{
            return(
                <div>
                    <Post post={this.state.post} />                    
                </div>
            )
        }
    }
}

export default PostDetails;