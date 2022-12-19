import React from "react";
import './style.css'

class State extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0,
            username: '',
            language: ''
        }
    }
    render(){
            const increment = ()=>{
                if (this.state.count <5) {
                    this.setState({count: this.state.count + 1})
                }
            }
            const decrement = ()=>{
            if (this.state.count > 0) {
                this.setState({count: this.state.count -1})
            }
            }
            const onChange =(e)=>{
                this.setState({
                    username: e.target.value
                })
            }
            const selectItem =(e)=>{ 
                this.setState({language:e.target.value})
            }


        return(
            <div className="top">
              <div>
                <h1>Products {this.state.count} </h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
               </div>
               <div className="inp">
                   <h3>Username: {this.state.username}</h3>
                   <input type="text" placeholder="username" onChange={onChange} />
               </div>
               <div className="check">
                   <h1>language: {this.state.language}</h1>
                   <select onChange={selectItem}>
                       <option value="uz">UZB</option>
                       <option value="ru">Ru</option>
                       <option value="en">En</option>
                   </select>
               </div>
            </div>
        )
    }
}

export default State