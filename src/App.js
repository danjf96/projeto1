import React, { Component } from 'react';
//import Post from './components/Post';
// import "./post.css";
// import "./components/PostCreator";
// import PostCreator from './components/PostCreator';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import TimeLine from './components/TimeLine';
import PostDetails from './components/PostDetails';

// const postArray = [
//   {
//       content: 'meu post',
//       time:'16:23',
//       author:'Daniel',
//       initialLikes: 0
//   },
//   {
//     content: 'meu post 2',
//     time:'18:00',
//     author:'Daniel',
//     initialLikes: 0
//   }
// ]

class App extends Component{
  
  showNotFound(){
    return (
      <div style={{color:'red'}}>
        <h1><i>Página não encontrada :(</i></h1>
      </div>
    )
  }

  abountPage(){
    const page = (
      <div align="center">
        <h1>Sobre esse sistema</h1>
        <h3>Sistema feito com muito café</h3>
      </div>
    )
    return page;
  }
  
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={TimeLine}/>
            <Route exact path='/sobre' component={this.abountPage}/>
            <Route exact path='/post/:time' component={PostDetails}/>
            <Route  path='*' component={this.showNotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
