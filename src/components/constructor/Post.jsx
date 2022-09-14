import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super()
    }
    state = {
        content:[
            {title:'post 1', data:'The content of the post description 1 '},
            {title: 'post2', data: 'The content of the post description 2'},
        ],
        UpdateContent:"Palaya Content",
    };

    // updateTitleHandler =(e)=>{
    //     e.prevantDefault();
    //     console.log(this)
    //     console.log("Summa Poda Venna");
    //     this.setState({
    //         UpdateContent: 'Ithu Puthu Content ..'
    //     })
    // }
  render() {
    return (
      <div>
        <h4>A post content nothing to say ...</h4>
        <button className='btn btn-primary btn-lg' onClick={this.UpdateTitleHandler}>Hai Press pannunga ...</button>
        <h4>{this.state.content[0].title}</h4>
        <p>{this.state.content[0].data} </p>
        <h3>
            {/* {(e) =>this.updateTitleHandler()} */}
        </h3>
      </div>
    );
  }
}

export default Post;
