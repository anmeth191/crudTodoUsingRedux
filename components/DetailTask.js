import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class DetailTask extends React.Component{

    state = {
        id:null
    }

componentDidMount(){
    this.setState({id:this.props.id})

}

deleteElement = ()=>{
 const { id } = this.props;
 this.props.deleteTask(id);
 this.props.history.push('/')

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
                             <button onClick={this.deleteElement}>Delete</button>
                             <Link to={`/updatetask/${element.id}`}>Update</Link>
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

const setPropToDelete = (dispatch)=>{ 
    return{
        deleteTask: (id)=>{ dispatch({type:'DELETE_TASK' , id })}
    }
}
export default connect(setPropsToMap , setPropToDelete)(DetailTask);