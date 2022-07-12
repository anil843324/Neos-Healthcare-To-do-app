export const addTodo=(data)=>{

     return {
         type:"Add-To-Do",
         payload:{
            id:new Date().getTime().toString(),
            data,
         }
     }
}
export const deleteTodo=(id)=>{

    return {
        type:"Delete-To-Do",
        id
    }
}

export const completeTodo=()=>{

    return {
        type:"Complete-Todo"
    }
}

