import React from 'react'
import './style.css'
class Btn extends React.Component{
    render(){
        console.log(this.props.title);
        return(
            <div>
                <button className='btn'>{this.props.title || 'Click'} </button>
            </div>
        )
    }
}

export default Btn