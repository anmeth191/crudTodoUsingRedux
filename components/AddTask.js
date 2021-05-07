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
        
        <form className="addTask-form" onSubmit={this.handleSubmit}>
        
            <div className="addTask-form-container"> 
            <h1 className="addTask-form-container-title">ADD TASK</h1>
            
         <input required className="addTask-form-container-textField textField " id="task" type="text" value={this.state.task}  name="task" placeholder="Task name" onChange={this.handleChange} />
         <label className="addTask-form-container-label" for="task">Enter task</label>
         <input required className="addTask-form-container-textField textField" id="dueDate" type="text"  value={this.state.dueDate} name="dueDate" placeholder="MM/DD/YYYY" onChange={this.handleChange}/>
         <label  className="addTask-form-container-label"for="dueDate">Due Date</label>
         <select className="addTask-form-container-select status" id="status" name="status" onChange={this.handleChange}>
         <option value="progress">Progress</option>
         <option value="done">Done</option>
         <option value="pending">Pending</option>
         </select>
      
        <button className="addTask-form-container-button button" type="submit">Submit</button>
        </div>
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