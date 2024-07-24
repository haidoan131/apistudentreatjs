import React,{useState,useEffect} from 'react'
import axios from "axios";

export default function Apibai1() {
    const [data,setData]=useState([])
    const fetchAPI=()=>{
        const url="https://66a07b887053166bcabb8cd6.mockapi.io/student"
        axios.get(url).then(function (res) {
            setData(res.data)
        }).catch(function (params) {
            console.log(params)
        })
    }



    useEffect(()=>{
        fetchAPI()
    },[])


  return (
    <div>
        Apibai1
        {
            data.map((item,index)=>(
                <h1>{item.name} , {item.age}</h1>
            ))
        }
    </div>
  )
}
