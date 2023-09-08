import {  useEffect, useState } from "react";
import  Axios  from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
export const Books = () => {
  const [todo,setTodo]= useState([]);
  const {data,isLoading} = useQuery(["name"],()=>{
    return getData()
  })
  const getData=async ()=>{
    const res = await Axios.get("https://jsonplaceholder.typicode.com/todos/");
    return setTodo(res.data);
  }
  useEffect(()=>{
      getData()
  },[todo])
  {isLoading && <h5>Loading ... !</h5>}
  return (
    <>
    <div className="container">
      <h1>Fetch Data from {<Link to={"https://jsonplaceholder.typicode.com/todos/"} target="_blank">This Api</Link>}</h1>   
      <div className="row">
            <div className="col-md-4 my-5" >
              {todo.map((info,index)=>{
                return <div key={index} className="card">
                <div className="card-body">
                  <Link to={`/books/${info.id}`}><h5 className="card-title">{info.id}</h5></Link>
                  <h6 className="card-subtitle mb-2 text-muted">{info.title}
                  </h6>
                  <p className="card-text">{info.completed}</p>
                </div>
              </div>
              })}
            </div>
      </div>
    </div>
    </>
  );
};
