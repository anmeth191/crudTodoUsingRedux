import React from 'react'
import { connect } from 'react-redux';

class UpdateElement extends React.Component{  
    state = { //create the state that is going the dispatch with the new values of the item that needs to be modified
        nameTask:'',
        dueDate:'',
        status:'',
        index:null

    }

 handleSubmit = (event)=>{ event.preventDefault(); //this function is called when the button submit is clicked
    const { index } = this.props; // destructure the index that is coming as props from DetailTask
     const data = this.state;  //destructure the data that has been saved in the state in the handleEvents functions
     this.props.updateTask(data.nameTask , data.dueDate , data.status , index) // call the method updateTask that is coming as props from the dispatch method ,
     //here we pass the new data that has been saved in the state
    this.props.history.push(`/`)//this line routes the component to the home page

}

    handleEvent1 = (event)=>{ //this function captures the value coming from the input name and set the sate for nameTask property
      let nameTask= event.target.value;
          this.setState({ nameTask:nameTask })

    }
    handleEvent2 = (event)=>{ //this function captures the value coming from the input dueDate and set the state for dueDate property
        let dueDate= event.target.value;
        this.setState({dueDate:dueDate })

    }
    handleEvent3 = (event)=>{ //this function captures the value coming from the input status and set the sate for status property
        let status= event.target.value;
          this.setState({status: status })

    }


    render(){
        const { index } = this.props;  //destructure the index coming as props
        const { task } = this.props // destructure the task array coming as props
       
       
      return(
          <div className="updateItem item">
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder={task[index].nameTask /*this line sets the old value so the user can have a reference*/ } name="task" onChange={this.handleEvent1}/>
                  <input type="text" placeholder={task[index].dueDate /*this line sets the old value so the user can have a reference*/} name="dueDate" onChange={this.handleEvent2}/>
                  <select  name="status" onChange={this.handleEvent3}>
                      <option value="progress">Progress</option>
                      <option value="done">Done</option>
                      <option value="pending">Pending</option>
                      </select>
                 <button type="submit">Update</button>
                  </form>
          </div>
      )
    }
}

const bringPropsToUpdate = (state , ownProps )=>{ // this method brings the information from the reducer and also receives the props that is coming from DetailTask
const { index } = ownProps.match.params;
return { task: state.task , index:parseInt(index)}
}

const disptachUpdatedElement = (dispatch) =>{ //this function disptach the new information for the element that has to be updated with the action UPDATE_TASK
return{
        updateTask: ( nameTask , dueDate , status , index )=>{ dispatch({type:'UPDATE_TASK' , nameTask , dueDate , status ,index})}
    }
}

export default connect(bringPropsToUpdate , disptachUpdatedElement)(UpdateElement);// connect the state and the dispatch