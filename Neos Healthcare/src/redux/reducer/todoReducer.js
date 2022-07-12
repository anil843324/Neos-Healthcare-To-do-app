const initialData = {
    list: []
}

const todoReducers = (state = initialData, action) => {


    switch (action.type) {

        case "Add-To-Do":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        data,

                    }]

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