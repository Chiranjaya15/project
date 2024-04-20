import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
     
        this.state={
            number:0
        }
    }

    decrement=()=>{
        this.setState({

            number:this.state.number-1
        })
    }

   increment=()=>{    
    this.setState({

        number:this.state.number+1
    })
   }

    render(){
        return(
        <div>
            <h1>Counter = {this.state.number}</h1>
            <button onClick={this.increment}>INCREMENT</button>
            <button onClick={this.decrement}>DECREMENT</button>
            <hr/>

        </div>
        )

    }

}


export default CounterClass;