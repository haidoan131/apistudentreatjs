import React ,{useState,useEffect}from 'react'
import axios from "axios";
import {Button,Container,Table,Input} from 'reactstrap'


export default function Students() {
    const [data,setData]=useState([])
    const [mesage,setMessage]=useState(null)
    const[text,setText]=useState("")
    const [flag,setFlag]=useState({id:"",flag:false})
    const [textEdit,setTextEdit]=useState("")
    const url="https://66a07b887053166bcabb8cd6.mockapi.io/student"
    const getStudents=()=>{
        axios.get(url).then(function (res) {
            console.log(res.data)
            setData(res.data)
            console.log(data)
        }).catch(function (err) {
            console.log(err)
        })

        
    }

    const fetchAPI=()=>{
        const url="https://66a07b887053166bcabb8cd6.mockapi.io/student"
        axios.get(url).then(function (res) {
            setData(res.data)
        }).catch(function (params) {
            console.log(params)
        })
    }
    const deleteStudent=(id)=>{
        axios.delete(url+"/"+id)
        .then(function (res) {
            setMessage("delete successful")
            setData(data.filter(item=>item.id!==id))
        }).catch(function (err) {
            console.log(err)
        })
    }
    const addNewStudent=(txt)=>{
        axios.post(url,{
            name:txt
        })
        .then(function (res) {
            setMessage("add successful")
           setData([...data,{id:res.data.id,name:txt}])
        })
        .catch(function (err) {
            console.log(err)
        })
    }

   const updateStudent=(id,txt)=>{
        axios.put(url+"/"+id,{
            name:txt
        })
        .then(function (res) {
            setMessage("update successful")
          setData(data.map(item=>item.id===id?{...item,name:txt}:item))
        }).catch(function (err) {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchAPI();
    },[])
   
   
  return (
    <div>
        <Container>

            
            {
                mesage&&<p>{mesage}</p>
            }
            <h1>student list</h1>
            <Input type="text" value={text} onChange={(e)=>setText(e.target.value)}
                onKeyDown={
                    (e)=>{
                        if(e.key==="Enter"){
                            console.log("enter")
                            addNewStudent(text)
                            setText("")
                        }
                    }
                }
            />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                
                    
                
                    {
                        data.map((item,index)=>(
                           <tr>
                             <td>{item.id}</td>
                            
                            
                             
                          <td>
                            {
                                flag.id===item.id&&flag.flag===true?<Input type="text" value={textEdit} onChange={(e)=>setTextEdit(e.target.value)}
                                onKeyDown={
                                    (e)=>{
                                        if(e.key==="Enter"){
                                            updateStudent(item.id,textEdit)
                                            setFlag({id:"",flag:false})
                                        }
                                    }
                                }
                                />:<p onDoubleClick={()=>{
                                    
                                    setFlag({id:item.id,flag:true})
                                    setTextEdit(item.name)
                                }}> {item.name}</p>
                            }
                           
                            
                            
                            
                        </td>
                         
                           
                            
                         

                             <td>
                                <Button onClick={()=>deleteStudent(item.id)} className="btn btn-danger"> delete</Button>
                                <Button onClick={()=>updateStudent(item.id)} className="btn btn-success"> update</Button>
                             </td>
                           </tr>
                        ))
                    }
               
                   
                   
                  
                 
             

            
                

                </tbody>


            </Table>
      
        </Container>
    </div>
  )
}
