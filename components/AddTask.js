import React from 'react';
import { connect } from 'react-redux';

class AddTask extends React.Component{

    state={
        task:'',
        creationDate:null,
         dueDate:'',
         status:'',
    
    }
 
    handleSubmit = (event)=>{
        event.preventDefault();
        const data  = this.state;
        const { task , creationDate , dueDate ,status } = data;
        this.props.addTask(task, creationDate , new Date(dueDate).toDateString() ,status);
        this.props.history.push('/');
}//end of the handleSubmit
    
handleChange = (event)=>{
     this.setState({
         [event.target.name]:event.target.value,
          creationDate:new Date().toDateString(),
         [event.target.name]:event.target.value,
         [event.target.name]:event.target.value
     })
}//end of the handleChange

render(){
return(
    <div className="addTask item">
        <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.task}  name="task" placeholder="Task name" onChange={this.handleChange} />
         <input type="text"  value={this.state.dueDate} name="dueDate" placeholder="MM/DD/YYYY" onChange={this.handleChange}/>
         <select name="status" onChange={this.handleChange}>
         <option value="progress">Progress</option>
         <option value="completed">Completed</option>
         <option value="pendient">Pendient</option>
         </select>
         <button type="submit">Submit</button>
        </form>
    </div>
)
}//end of the render
}//end of the AddTask 

const sendPropsToReducer = (dispatch) =>{

    return {
         addTask: (task , creationDate , dueDate , status)=>{ dispatch({type:'ADD_TASK' , task , creationDate , dueDate , status}) }
    }
}
export default connect(null,sendPropsToReducer)(AddTask);