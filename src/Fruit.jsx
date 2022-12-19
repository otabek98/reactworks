import React from 'react'
import  './Fruit.css'
import Btn from './Button/Button'
import State from './State/index.jsx'
import Homework from './Homework/index'


class Fruit extends React.Component{
    render(){
      
        return(
            <div className='wrapper'>
                <div className='btnWrapper'>
                <Btn title="Press" />
                <Btn title="push" />
                <Btn title="pull" />
                <Btn  />
                </div>
                <div className='stateWrapper' >
                    <State />
                </div>    
                <div className='Home'>
                    
                </div>  



            </div>
        )
    }
}
export default Fruit