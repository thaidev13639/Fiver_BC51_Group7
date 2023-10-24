import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countAction } from '../redux-toolkit/reducer/count'

export default function Header() {
    const dispatch = useDispatch()
    const stateNumber = useSelector((state) => state.countReducer.value)

    return (
        <>
            <div className='ml-2'>Header</div>
            <p>Number : {stateNumber}</p>
            <button className='btn btn-success' onClick={() => dispatch(countAction.increNumber())}>Incre</button>
            <button className='btn btn-warning' onClick={() => dispatch(countAction.decreNumber())} >Decre</button>
        </>
    )
}
