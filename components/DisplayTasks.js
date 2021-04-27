import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class DisplayTasks extends React.Component{

    state={
        tasks:[]
        
    }
componentDidMount = ()=>{ 
 this.setState({tasks:this.props.tasks} , ()=>{ return this.state.tasks})
}

render(){

    const { tasks } = this.state;
   
    return( 
        <div> <Link to='/addTask'><button>Add Task </button></Link>
            {tasks.map( task => {
            return(
                <div className="listTask" key={task.id}>
                <Link to={`/task/${task.id}`}>{task.nameTask}</Link> 
                </div>
            )
        })}</div>
    )
}//end of the render method
}//end of the class Component

const setPropsToMap = (state) =>{return {tasks: state.task}}

export default connect(setPropsToMap)(DisplayTasks);