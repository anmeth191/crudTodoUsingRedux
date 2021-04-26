
const initialSate = {
    task:[
        { id:1, nameTask:'Shopping', creationDate:'04/30/2021' , dueDate:'05/05/2021' , status:'Progress'} ,
        { id:2, nameTask:'Take Dog', creationDate:'04/30/2021' , dueDate:'04/31/2021' , status:'Progress'}
    ]
}


const crudReducer = (state = initialSate , action)=>{
    console.log(action)
    if(action.type === 'ADD_TASK'){
       
        let newTask = state.task.concat({id:state.task.length + 1 , nameTask:action.task , creationDate:action.creationDate,
        dueDate: action.dueDate, status:action.status})

        return{ ...state , task:newTask }
    }
    return state;
}

export default crudReducer;