import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment, decrement } from '../features/CounterSlice'
const Counter = () => {

  const count = useSelector((state)=>state.counter.value)

  const dispatch = useDispatch()


  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter