import React from "react";
import './style.css'
import Add from './adder'
class Homework extends React.Component{
    constructor(props){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="main-container">
                <div className="container">
                    <div className="top">
                        <h2 className="topTitle" >4Tasks</h2>
                        <h3 className="remain">4Remain</h3>
                    </div>
                    <div className="header">
                    <Add type="checkbox" title="Something Here" btnName="delete" />
                    <Add type="checkbox" title="CSS" btnName="delete" />
                    <Add type="checkbox" title="HTML" btnName="delete"/>
                    <Add type="checkbox" title="VUE" btnName="delete"/>
                    <Add type="text" btnName="Add"/>

                    </div>

                </div>

            </div>
        )
    }
}
export default Homework