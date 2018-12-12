import React, {Component} from 'react';

const likeline ={
    'display':'flex',
    'justifyContent': 'space-around'
}
class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.initialLikes
        }
        console.log('likes:',this.likes);
        this.doLike = this.doLike.bind(this);
    }
    doLike(){
        this.setState({likes: this.state.likes + 1},()=>{
            this.saveLikesInStorage();
            console.log("doLike state",this.state);
        });

    }
    saveLikesInStorage(){
        let attposts = JSON.parse(localStorage.getItem('posts'));
        let updatePosts = attposts.map(posts =>{
            if(posts.time === this.props.post.time){
                posts.initialLikes += this.state.likes;
            }
            return posts;
        }); 
        localStorage.setItem('posts', JSON.stringify(updatePosts));
        console.table(updatePosts);
    }
    render(){
        const post = this.props.post;
        console.log(this.state.likes);
        return(
            <div>
                <div align="left" className={"post"}>
                    <h3 className={"titulo"} onClick={this.props.onNavigation}>{post.content}</h3>
                    <small>{post.author}</small>
                    <div style={likeline}>
                        <small>{post.time}</small>
                        <p>likes: {post.initialLikes}</p>
                        <button 
                            onClick={this.doLike}
                            style={{
                                'backgroundColor':'aqua',
                                'borderRadius':'10px',
                                'fontSize':'larger',

                                }}>Like</button>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Post;