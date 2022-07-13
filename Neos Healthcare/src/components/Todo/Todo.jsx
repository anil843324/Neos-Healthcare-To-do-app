import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../../redux/actions/index"
import ShowList from './ShowList'
import Timer from "../Timer/Timer"
import "./Todo.css"
const Todo = () => {

    const [inputData, setInputData] = useState('')



    const dispatch = useDispatch()

    const handleAddData = () => {

        if(inputData){
            const timerInput = {
                id: new Date().getTime().toString(),
                data: inputData,
                time: <Timer />
    
            }
    
            dispatch(addTodo(timerInput), setInputData(''))
        }else{
            alert("fill the Data")
        }
       



    }


    return (
        <div>
            <h2>Todo List</h2>

            <div className='addItems'>

                <input type="text"
                    value={inputData}
                    onChange={(e) => { setInputData(e.target.value) }}
                    placeholder='✍🏻  Add Items... ' />
                <button
                    onClick={() => { handleAddData() }}
                >Add</button>
            </div>
            {/*   show data */}

            <ShowList


            />

        </div>
    )
}

export default Todo