import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DisplayTasks from './DisplayTasks';
import DetailTask from './DetailTask';
import AddTask from './AddTask';

class MainComponent extends React.Component{


    render(){

        return(
        
        <Router>
             <div>
                 <Switch>
                 <Route exact path="/" component={DisplayTasks} />  
                 <Route path="/task/:id" component={DetailTask} />
                 <Route path="/addTask" component={AddTask} />
                 </Switch>   
           </div>
             </Router>
            
             )


    }//end of the render method
}//end of the classComponent

export default MainComponent;