import React ,{useDispatch}from 'react'
import "./Todo.css"

import { deleteTodo } from "../../redux/actions/index"
const ShowList = ({ele,time}) => {

    const dispatch = useDispatch()

    return (
        <div>

            <div className='eachItem' key={ele.id}>

                <h3>{ele.data}</h3>

                <div className='iconContainer'>

                    <h4>
                        {/*  minute */}
                        <span>{(Math.floor(time / 60)) < 10 ? ("0" + Math.floor(time / 60)) : (Math.floor(time / 60))}:</span>
                        {/*  second */}
                        <span>{(time % 60) < 10 ? ("0" + time % 60) : (time % 60)}</span>
                    </h4>
                    <input type="checkbox" value="checked" />

                    <button
                        onClick={() => {
                            dispatch(deleteTodo(ele.id))
                        }}
                    >Delete</button>


                </div>



            </div>

        </div>
    )
}

export default ShowList