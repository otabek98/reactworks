import React from 'react'
import Card from './card'
import  './Fruit.css'
import Btn from './Button/Button'
import State from './State/index.jsx'
import Apple from './fruits/apple.jpeg'
import Avocado from './fruits/avocado.jpeg'

class Fruit extends React.Component{
    render(){
        const Meva =[
            {img: Apple, name: 'Apple'},
            {img: Avocado, name: 'Orange'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'strawberry'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'grape'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'banana'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'peach'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'avocado'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'coconut'},
            {img: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'cherry'},
        ]
        return(
            <div className='wrapper'>
               {
                 Meva.map((value)=>{
                       return(
                           <Card data={value} />
                           )
                        })
                    }
                <Btn title="Press" />
                <Btn title="push" />
                <Btn title="pull" />
                <Btn  />
                    
                    <State />



            </div>
        )
    }
}
export default Fruit