import React from "react";

class State extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
        render(){
            const increment =()=>{
                this.setState({count: this.state.count+1})
            }

            const decrement =()=>{
                if(this.state.count>0){
                    this.setState({count: this.state.count -1 && this.state.count ==0 }) 
                }
            }
            return(
                <div>
                   <h1>Products: {this.state.count}</h1>
                   <button onClick={increment}>+</button>  
                   <button onClick={decrement}>-</button>  
                </div>
            )
}
}
export default State