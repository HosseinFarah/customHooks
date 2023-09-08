import {  useEffect, useState } from "react";
import  Axios  from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
export const Book = () => {
  const navigate = useNavigate()
  const {book}=useParams();
  const [todo,setTodo]= useState([]);
  const {data} = useQuery(["name"],()=>{
    return getData()
  })
  const getData=async ()=>{
    const res = await Axios.get("https://jsonplaceholder.typicode.com/todos/");
    return setTodo(res.data);
  }
  useEffect(()=>{
      getData()
  },[todo])
  return (
    <>
      {todo.map((info,index)=>{
        if(info.id === parseInt(book)) return <div className=" container col col-3">
      User ID:{info.id}
      <br />
      <div className="card">
        <img
          src="https://via.placeholder.com/50"
          className="card-img-top"
          alt="Book Cover"
        />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
    else return false
      })}
      <button onClick={()=>{navigate("/books")}}>Back</button>
    </>
    
  )
};
