import { useEffect, useState } from "react"

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const Counter=()=>{

    const [count,setCount] = useState(0)
    const [textP,setTextP] = useState('')
    const [ghazi,setGhazi] = useState(0)
    const increment =()=> setCount(count+1)
    const decrement =()=> count>0 && setCount(count-1)
    // Mount
    useEffect(()=>{
        // console.log('Mount')
        document.title = 'Hi'
    },[])
    //Update
    useEffect(()=>{
        document.title = count
        // console.log('Update')
    })
    // useEffect(()=>{
    //     console.log('Update')
    // },[count])
    //Unmount
    useEffect(()=>{
        // return ()=> alert('Bye Basma')
        return ()=> document.title = 'Bye'
    })


    return(
        <>
            <h2>Counter Component</h2>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <br/> 
            <br/>
            <input type='text' onChange={(event)=> setTextP(event.target.value)}/>
            <h2>{textP}</h2>
            <Rating
            name="simple-controlled"
            value={ghazi}
            onChange={(e)=>setGhazi(e.target.value)}
        />
        <h3>{ghazi}</h3>

        </>
    )
}

export default Counter