import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class DisplayTasks extends React.Component{

    state={tasks:[]} //state for the tasks
componentDidMount = ()=>{ 
 this.setState({tasks:this.props.tasks} , ()=>{ return this.state.tasks}) //here we set the state wit the data that is coming from the redicer in setPropsToMap
}

render(){

    const { tasks } = this.state; // destructure the tasks from the state to loop the elements
    // the link button Add Task call the component addTask where you can submit a new Task
    return( 
        <div> <Link to='/addTask'><button>Add Task </button></Link>
            {tasks.map( task => { //map the tasks and return the elements in a div
            return(
                <div className="listTask" key={task.id}>
                <Link to={`/task/${task.id}`}>{task.nameTask/*this link sends as props the id to show details with component DetailTask*/ }</Link>  
                </div>
            )
        })}</div>
    )
}//end of the render method
}//end of the class Component

const setPropsToMap = (state) =>{return {tasks: state.task}}//this function brings the state from the reducer and sends it this component as props to use whatever is in storage
export default connect(setPropsToMap)(DisplayTasks);//export the Display and also connect the function setPropstoMap with redux and the DisplayTask component 