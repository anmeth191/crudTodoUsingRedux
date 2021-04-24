
const initialSate = {
    task:[
        { id:1, nameTask:'Shopping', creationDate:'04/30/2021' , dueDate:'05/05/2021' , status:['Progress' , 'Completed' , 'Pendient']} ,
        { id:2, nameTask:'Take Dog', creationDate:'04/30/2021' , dueDate:'04/31/2021' , status:['Progress' , 'Completed' , 'Pendient']}
    ]
}


const crudReducer = (state = initialSate , action)=>{
return state;
}

export default crudReducer;