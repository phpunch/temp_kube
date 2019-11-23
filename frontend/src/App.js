import React from 'react';
import './App.css';
import axios from 'axios'
// import API_ENDPOINT from './utils'



class App extends React.Component {
  state = {
    text: '',
    author: 'Adam'
  }
  
  get = async () => {
    console.log("GET!")
    console.log(process.env)
    // const res = await axios.get('http://' + API_ENDPOINT + '/api/comments')
    const res = await axios.get('/api/comments')
    console.log(res)
  }

  post = async () => {
    const data = {
      text: this.state.text,
      author: this.state.author
    }
    console.log(data)
    // const res = await axios.post('http://' + API_ENDPOINT + '/api/comments', data)
    const res = await axios.post('/api/comments', data)
    console.log(res)
  }
  
  inputHandler = e => {
    this.setState({text: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.get}>Click me</button>
        <input onChange={this.inputHandler}></input>
        <button onClick={this.post}>Send</button>
      </div>
      
    );
  }
  
}

export default App;
