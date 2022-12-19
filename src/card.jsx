import React  from 'react'
import './card.css'

class Card extends React.Component{
    render(){
        const {data} = this.props
        return(
            <div className='container'>
               <img className='img' src={data.img} />
               <h5 className='title'>{data.name}</h5>

               
            </div>
        )
    }
}

export default Card