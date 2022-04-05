import { useEffect, useState } from "react"

const UseData=(url)=>{
    const [data,setData]= useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])

    return [data,setData];
}

export default UseData;

