import React, { Component } from 'react';
import Post from './Post';
import "./post.css";
import "./PostCreator";
import PostCreator from './PostCreator';

const postArray = [
  {
      content: 'meu post',
      time:'16:23',
      author:'Daniel',
      initialLikes: 0
  },
  {
    content: 'meu post 2',
    time:'18:00',
    author:'Daniel',
    initialLikes: 0
  }
]

class TimeLine extends Component{

  constructor(){
    super();
    this.state = {
      posts: postArray
    }
  }

  insertPost(post){
    const myPosts = this.state.posts;
    myPosts.unshift(post);
    this.setState({posts: myPosts});
    this.saveInStorage();
  }

  saveInStorage(){
    const posts = JSON.stringify(this.state.posts);
    localStorage.setItem('posts',posts);
  }

  readStorage(){
    const savedPosts = localStorage.getItem('posts');
    if(savedPosts){
      this.setState({posts: JSON.parse(savedPosts)});
    }
  }

  componentDidMount(){
    console.log('COMPONENT DID MOUNT');
    this.readStorage();
  }
  onNavigation(post){
    this.props.history.push('/post/'+post.time);
  }
  render(){
    return(
      <div align="center">
        <h1>Minha rede social</h1>
        <PostCreator onCreate={this.insertPost.bind(this)} />
        <button onClick={()=>this.props.history.push('/sobre')}>Ver Sobre</button>
        {this.state.posts.map((post,i)=> {
          console.log(post.content)
          return <Post
          onNavigation={()=>this.onNavigation(post)}
           key={post.time}
          post={post}
           />
        })}
        {/* <Post texto={'Meu primeiro POST'} time={'17:00'} />
        <Post texto={'Meu segundo POST'} time={'13:00'} />
        <Post texto={'Meu terceiro POST'} time={'16:00'} /> */}
      </div>
    )
  }
}

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default TimeLine;
