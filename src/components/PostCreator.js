import React,{Component} from 'react'

class PostCreator extends Component{
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    onCreate(){
        let d = new Date();
        let date = d.getHours()+':'+d.getMinutes();//d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
        const newPost = {
            content: this.state.text,
            author: 'Daniel',
            time: /*date,*/new Date().getTime(),
            initialLikes: 0
        }
        // console.log(newPost);
        this.props.onCreate(newPost);
    }

    render(){
        console.log(this.props.onCreate);
        return(
            <div style={{padding:15}}>
                <h3>Novo Post</h3>
                <div>
                    <input style={{width: '100%'}}
                        onChange={(event)=>{
                            const value = event.target.value;
                            this.setState({text: value});
                            console.log(event.target.value);
                        }}
                        value={this.state.text}/>
                    <button 
                        onClick={()=>this.onCreate()}
                    >Publicar</button>
                </div>
            </div>
        )
    }
}

export default PostCreator;