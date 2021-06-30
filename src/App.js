import React,{Component} from 'react';
import Stock from './Stock';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {symbol :'', isThere:false,count:1}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value){
    this.setState({count:this.state.count+1})
    if(this.state.count>1){
      window.location.reload(true)
    }
    this.setState({symbol : value, isThere:true})
  }
  render(){
  return (
    <div className="App">
     <button value="MSFT" onClick={()=>this.handleClick('MSFT')}>MSFT</button> 
     <button onClick={()=>this.handleClick('AMD')} >AMD</button>
      {this.state.isThere && <Stock name={this.state.symbol}></Stock>}
    </div>
  );
  }
}

export default App;
