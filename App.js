import React from 'react';



 class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
       data:0
     }
     this.setNewNumber =this.setNewNumber.bind(this)
   };
   setNewNumber(){
     this.setState({data:this.state.data+1})
   }

 render(){
   return(
     <div>
       <button onClick={this.setNewNumber}>Increment</button>
       <Content myNumber ={this.state.data}></Content>
     </div>
   );
 }
}

class Content extends React.Component{
  componentWillMount(){
    console.log('companrnet Will Mount 1')
  }
  componentDidMount(){
    console.log('component DID MOUNT')
  }
  componentWillReceiveProps(newProps){
    console.log('component Will REcieve props')
  }
   shouldComponentUpdate(newProps, newState){
     return true;
   }
   componentWillUpdate(nextProps,newState){
     console.log('componet Will Update');
   }
   componentDidUpdate(preProps,preState){
     console.log('componet DID UPDATE');
   }
   componentWillUnmount(){
     console.log('component Will UNmount');
   }

render()  {
  return(
    <div>
      <h3>{this.props.myNumber}</h3>
    </div>
  );
}
}

export default App;
