import React from 'react';
import { connect } from 'react-redux';
class DetailTask extends React.Component{

    state = {
        id:null
    }

componentDidMount(){
    this.setState({id:this.props.id})

}

render(){
    const { id } = this.state;
    const { task } = this.props;
   
    return(
   
        <div>{
                   task.map( element => {
                     if(element.id === id){
                         return(
                             <div key={element.id}>
                             <h4>Task: {element.nameTask}</h4>
                             <h4>Creation Date: {element.creationDate}</h4>
                             <h4>Due Date: {element.dueDate}</h4>
                             <h4>Status: {element.status}</h4>
                             
                             </div>
                         )
                     }//end of the if
                   })//end of the map
            }</div>
    )//end of the return
}//end of the render
}//end of the class 

const setPropsToMap = (state , ownProps)=>{
  const { id } = ownProps.match.params;
    return{
      task: state.task , id:parseInt(id)
    }//end of the return 

}

export default connect(setPropsToMap)(DetailTask);