import React from 'react'
import { connect } from 'react-redux';

class UpdateElement extends React.Component{ 
    state={
        id:null,
        nameTask:'',
        creationDate:'',
        dueDate:'',
        status:''

    }

 handleSubmit = (event)=>{ event.preventDefault();
     const data = this.state; 
     this.props.updateTask(data.id , data.nameTask , data.creationDate , data.dueDate , data.status)
    this.props.history.push(`/task/${this.props.id}`)

}

    handleEvent1 = (event)=>{
        const { id } =  this.props;
        let task = this.props.task.find( element =>{ return element.id === id })
        let { nameTask } = task;
        nameTask= event.target.value;
          this.setState({id:task.id , creationDate: task.creationDate, nameTask:nameTask })

    }
    handleEvent2 = (event)=>{
        const { id } =  this.props;
        let task = this.props.task.find( element =>{ return element.id === id })
        let { dueDate } = task;
        dueDate= event.target.value;
          this.setState({dueDate:dueDate })

    }
    handleEvent3 = (event)=>{
        const { id } =  this.props;
        let task = this.props.task.find( element =>{ return element.id === id })
        let { status } = task;
        status= event.target.value;
          this.setState({status:status })

    }


    render(){
      return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="task" onChange={this.handleEvent1}/>
                  <input type="text" name="dueDate" onChange={this.handleEvent2}/>
                  <select  name="status" onChange={this.handleEvent3}>
                      <option value="progress">Progress</option>
                      <option value="completed">Completed</option>
                      <option value="pendient">Pendient</option>
                      </select>
                 <button type="submit">Update</button>
                  </form>
          </div>
      )
    }
}

const bringPropsToUpdate = (state , ownProps )=>{
    const { id } = ownProps.match.params;
   
 return { task: state.task , id:parseInt(id)}
}

const disptachUpdatedElement = (dispatch) =>{
    return{
        updateTask: (id , nameTask , creationDate , dueDate , status )=>{ dispatch({type:'UPDATE_TASK' , id , nameTask , creationDate, dueDate , status})}
    }
}

export default connect(bringPropsToUpdate , disptachUpdatedElement)(UpdateElement);