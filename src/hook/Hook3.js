import React ,{useState,useEffect}from 'react'

export default function Hook3() {
    const [width,setWidth]=useState(window.innerWidth)
    const [isActive,setIsActive]=useState(true)
    //dùng use này để khi khởi tạo nó hiển thị đúng k bị ảnh hưởng bởi use thứ 2
    useEffect(()=>{
        if(width<700){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    },[])
    useEffect(()=>{
        const handleResize=()=>{
            setWidth(window.innerWidth)
            console.log(window.innerWidth)
            if(window.innerWidth<700){
                setIsActive(true)
            }else{
                setIsActive(false)
            }
        }

        window.addEventListener("resize",handleResize)
        return()=>{
            window.removeEventListener("resize",handleResize)
        }


    },[])
  return (
    <div>
        <p>width:{width}</p>
        <div className={isActive?"active sidebar":"sidebar"}></div>
    </div>
  )
}
