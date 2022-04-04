import { useEffect, useState } from "react"

const UseData=()=>{
    const [data,setData]= useState([]);

    useEffect(()=>{
        fetch('comments.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])

    return [data,setData];
}

export default UseData;

