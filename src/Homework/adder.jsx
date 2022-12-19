import React from 'react'
import './addStyle.css'
class Add extends React.Component{
    render(){
        return(
            <div className='main'>
                <input type={this.props.type} />
                <h3 className='title'>{this.props.title} </h3>
                <button  className='btn'>{this.props.btnName}</button>
            </div>
        )
    }
}
export default Add 