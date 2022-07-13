import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Todo.css"

import { deleteTodo } from "../../redux/actions/index"


const ShowList = () => {

    const dispatch = useDispatch()

    const list = useSelector((state) => state.todoReducers.list)

    


    



return (
    <div>

        {
            list.map((ele) => {
                return (
                    <div className='eachItem' key={ele.id}>

                        <h3>{ele.data}</h3>

                        <div className='iconContainer'>

                            <h4>
                               {ele.time}
                            </h4>
                             

                            <button
                                onClick={() => {dispatch(deleteTodo(ele.id))} }
                            >Delete</button>


                        </div>



                    </div>

                )
            })
        }



    </div>
)
}

export default ShowList