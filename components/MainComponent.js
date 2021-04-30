import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //import react browser in order to do routing to the other components
import DisplayTasks from './DisplayTasks';//display tasks is where all the task will be displayed in the home tab
import DetailTask from './DetailTask';//detail task shows the extra information for tasks
import AddTask from './AddTask';//this component add a new task in the reducer and render it 
import UpdateElement from './UpdateElement';//this component update a task 
import NavBar from './NavBar';


class MainComponent extends React.Component{


    render(){
//the return method basically is bringing the components and also the routings
        return(
        
        <Router> 
             <div className="mainContainer">
             <NavBar />
                 <Switch> 
                 <Route exact path="/" component={DisplayTasks} />  
                 <Route path="/task/:id" component={DetailTask} />
                 <Route path="/addTask" component={AddTask} />
                 <Route path="/updatetask/:index" component={UpdateElement}/>
                 </Switch>   
           </div>
             </Router>
            
             )


    }//end of the render method
}//end of the classComponent

export default MainComponent;