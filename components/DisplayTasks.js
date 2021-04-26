import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class DisplayTasks extends React.Component{

    state={
        tasks:[]
    }
componentDidMount = ()=>{
    this.setState({tasks:this.props.tasks})
}

deleteElement = (event)=>{
console.log(event.target.parentElement)
}
render(){
    const { tasks } = this.state;
    return( 
        <div> <Link to='/addTask'><button>Add Task </button></Link>
            {tasks.map( task => {
            return(
                //CHECK THE EVENT IN THE BUTTON TO SEDN AS PARAM AND DELETE THE CLICKED ELEMENT
                <div key={task.id}>
                <Link to={`/task/${task.id}`}>{task.nameTask}</Link> <button type="button" onClick={this.deleteElement}>delete</button>
                </div>
            )
        })}</div>
    )
}//end of the render method
}//end of the class Component

const setPropsToMap = (state) =>{return {tasks: state.task}}

export default connect(setPropsToMap)(DisplayTasks);