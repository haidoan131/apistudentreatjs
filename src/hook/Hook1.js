import React ,{useState,useEffect}from 'react'

export default function Hook1() {
    const[count,setCount]=useState(1)
    const[number,setNumber]=useState(1)
    //khi bỏ biến count vào mảng khi nhấn coune useeffect sẻ dc render khi ấn number k render useeffect
    useEffect(()=>{
        console.log("side effect")
        const x=setInterval(() => {
            console.log("load count")
            setCount(preState=>preState+1)   
        });
        //clearn up giúp khi component unmount thì ko chạy nữa
        return ()=>{
            clearInterval(x)
            console.log("đây là clean up")
        }

    },[])
    console.log("render hook1")
  return (
    <div>
      <h1>tìm hiểu use effect</h1>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>count up</button>
      <p>number:{number}</p>
      <button onClick={()=>setNumber(number+1)}>count up</button>
    </div>
  )
}
