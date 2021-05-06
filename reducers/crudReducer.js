
const initialSate = { // this is a initial value used as reference 
    task:[
        { id:1, nameTask:'Shopping', creationDate:'04/30/2021' , dueDate:'05/05/2021' , status:'pending'} ,
        { id:2, nameTask:'Take Dog', creationDate:'04/30/2021' , dueDate:'04/31/2021' , status:'pending'}
    ]
}


const crudReducer = (state = initialSate /*the state is assigned with the initial state var that has 2 elements*/ , action/*this is the one that
    updates the reducer*/)=>{
    
    if(action.type === 'ADD_TASK'){ // this is coming from the AddTask component and add a task with the method concat,
        //that returns a new array REMEMEBER THAT REDUX THE STATE HAS TO BE INMUTABLE   
       
        let newTask = state.task.concat({id:state.task.length + 1 , nameTask:action.task , creationDate:action.creationDate,
        dueDate: action.dueDate, status:action.status}) // it creates a new var that maps thre the state task and return a new array

        return{ ...state , task:newTask }// return the spread operator of the state with the other elements and also the new one
    }
    else if(action.type === 'DELETE_TASK'){ // this methid evaulates if the type is to delete
        let newTasks = state.task.filter( element => { // you must create a var that maps the state.task and returns all the elements that are different od the id 
            //you clicked to delete TO THIS METHOD IS DONE ONLY WITH FILTER you must not splice the state BECAUSE IT HAS TO INMUTABLE WAY
            return element.id !== action.id // return all the elements that are differents than the id sent in the action
        })

        return{
            ...state,task:newTasks
        }
    }else if(action.type === 'UPDATE_TASK'){ // this evaluates the action type 
    
       let updateNameTask = state.task[action.index].nameTask = action.nameTask; // create a new variable that looks the state.task with index passed and assign the new value passed 
       // in the action too AGAIN WE ARE NOT TOUCHING THE STATE DIRECTLY  is making a new reference to a variable and then that variable send it in the return with the current state
       let updateDueDate = state.task[action.index].dueDate = action.dueDate;
       let updateStatus = state.task[action.index].status = action.status;
      
       return{...state , updateNameTask , updateDueDate , updateStatus}
    }
    return state;//return the state
}

export default crudReducer; // return the reducer in the index