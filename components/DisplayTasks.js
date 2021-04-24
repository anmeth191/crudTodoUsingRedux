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
render(){
    const { tasks } = this.state;
    return(
        <div>{tasks.map( task => {
            return(
                <div key={task.id}>
                    <Link to={`/task/${task.id}`}>{task.nameTask}</Link>
                </div>
            )
        })}</div>
    )
}//end of the render method
}//end of the class Component

const setPropsToMap = (state) =>{return {tasks: state.task}}

export default connect(setPropsToMap)(DisplayTasks);