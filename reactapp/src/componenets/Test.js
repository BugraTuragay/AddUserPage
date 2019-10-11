import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            a : 10
        }
        console.log("Constructor");
    }
    componentDidMount = () => {
        console.log("componentDidMount");
        this.setState = {
            a : 90
        }
        //Api istekleri
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDiUpdate");
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("should");
        return false;
    }
    
    render() {

        console.log("Render");

        return (
            <div>
                
            </div>
        )
    }
}
export default Test;