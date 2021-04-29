import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class DetailTask extends React.Component{

    state = {id:null} // this is the state that receives the id coming as props from DisplayTask

componentDidMount(){
    this.setState({id:this.props.id}) //here we set the state id 

}

deleteElement = ()=>{
 this.props.deleteTask(this.state.id); // here use the props that is coming from setPropToDelete this function receives the item that should be removed from the state
 this.props.history.push('/')//once the button delete is clicked this line routes address home

}


render(){
    const { id } = this.state; //destructure the id from the state
    const { task } = this.props;//destructure the task array from the props coming from setPropsToMatch and the reducer
   
    return(
        <div>{   /*we loop thru task array*/ task.map((element,index) => {
                     if(element.id === id){ //if the current element is equal to the id in the props then render all the information for that task
                         return(
                             <div key={element.id}>
                             <h4>Task: {element.nameTask}</h4>
                             <h4>Creation Date: {element.creationDate}</h4>
                             <h4>Due Date: {element.dueDate}</h4>
                             <h4>Status: {element.status}</h4>
                             <button onClick={this.deleteElement}>Delete</button>
                             <Link to={`/updatetask/${index}`/*in this line a link is created in order to take you to the component UpdateElement and sendind the current index 
                            of the task*/}>Update</Link>
                             </div>
                         )
                     }//end of the if
                   })//end of the map
            }</div>
    )//end of the return
}//end of the render
}//end of the class 

const setPropsToMap = (state , ownProps)=>{//this function calls the state in the reducer and sends it as props to the class DetailTask
  const { id } = ownProps.match.params; //destructure the id sent as props from displayTasks 
    return{
      task: state.task , id:parseInt(id) // return the array of tasks in the task variable and also convert to integer the id because once is passed as props it is a string
    }//end of the return 

}

const setPropToDelete = (dispatch)=>{ // this function dispatch the action and the of the task that need to be deleted in the list
    return{
        deleteTask: (id)=>{ dispatch({type:'DELETE_TASK' , id })}
    }
}
export default connect(setPropsToMap , setPropToDelete)(DetailTask); //here we connect both function the state and dispatch