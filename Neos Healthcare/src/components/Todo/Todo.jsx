import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, completeTodo, deleteTodo } from "../../redux/actions/index"
import useTimer from '../CustomHooks/useTimer'
import ShowList from './ShowList'
import "./Todo.css"
const Todo = () => {

    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducers.list)

    const { time, setTimerOn } = useTimer(2)



    return (
        <div>
            <h2>Todo List</h2>

            <div className='addItems'>

                <input type="text"
                    value={inputData}
                    onChange={(e) => { setInputData(e.target.value) }}
                    placeholder='✍🏻  Add Items... ' />
                <button
                    onClick={() => { dispatch(addTodo(inputData), setInputData(''), setTimerOn(true)) }}
                >Add</button>
            </div>
            {/*   show data */}
            <div className='showItems'>

                {
                    list.map((ele) => {

                        return (
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
                                            dispatch(deleteTodo(ele.id), setTimerOn(false))
                                        }}
                                    >Delete</button>


                                </div>



                            </div>

                        )
                    })
                }

            </div>




        </div>
    )
}

export default Todo