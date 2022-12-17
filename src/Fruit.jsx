import React from 'react'
import Card from './card'
import  './Fruit.css'
class Fruit extends React.Component{
    render(){
        const Meva =[
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'Apple'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'Orange'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'strawberry'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'grape'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'banana'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'peach'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'avocado'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'coconut'},
            {src: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-1000x1000.jpg', name: 'cherry'},
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

            </div>
        )
    }
}
export default Fruit