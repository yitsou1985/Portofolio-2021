import React,{Component} from "react";


class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
increment=()=>{
    this.setState({count: this.state.count +1});
}
decrement=()=>{
    this.setState({count: this.state.count -1});
}

    render(){
        return(
            <div className="Counter">
           <p ><button onClick={this.increment} className="counter" >+</button></p>
                <h2>{this.state.count}</h2>
                <button onClick={this.decrement} className="counter">_</button>
            
            </div>
        )
    }
}

export default Counter;