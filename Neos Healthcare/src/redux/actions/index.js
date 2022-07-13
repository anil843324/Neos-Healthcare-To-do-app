export const addTodo=(data)=>{

     return {
         type:"Add-To-Do",
         payload:data
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

