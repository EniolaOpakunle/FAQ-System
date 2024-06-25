import React, { useEffect,useState } from 'react';
import { generateData} from './actions/index';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function FAQ() {
    const dispatch = useDispatch();
    const {data, error} = useSelector(state => state.fagsReducers)
    useEffect(() => {
        dispatch(generateData())
        
    }, [dispatch])
    
  return (
    <div>
        <div>
            <p>FAQs</p>
            <div>
                {error}
                {data.map((val, index)=> (
                    
                    <div key={index}>
                        <p>{val.question}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}


export default FAQ