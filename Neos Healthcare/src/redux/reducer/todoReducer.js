const initialData = {
    list: []
}

const todoReducers = (state = initialData, action) => {


    switch (action.type) {

        case "Add-To-Do":
          
            return {
                ...state,
                list: [...state.list,action.payload]

            }

            case "Delete-To-Do":

              const newList=state.list.filter((el)=> el.id!==action.id)
            return {
                ...state,
                list: newList

            }

        default: return state;
    }





}

export default todoReducers