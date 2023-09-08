import Axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export const Publics = () => {
  const [info, setInfo] = useState([]);
  const { data,isLoading,isFetching } = useQuery(["Name"], () => {
    return getData();
  });

  const getData = () => {
    Axios.get(
      "https://api.publicapis.org/entries"
    ).then((res) => {
      setInfo(res.data.entries);
    });
  };
  useEffect(()=>{
    isLoading && alert("Loading")
  },[])

  useEffect(() => {
    
    getData();
  }, [setInfo]);
 
  return (
    <>
     
          
          <div className="container">
        {isLoading ? <h5>Loading ...!</h5>:<h1>API Lists</h1>}
        <div className="row">
          <div className="col-md-4 my-5">
              {info.map((pubinfo,index)=>{return <div key={index} className="card">
              <div className="card-body">
                <Link to={`/publics/${pubinfo.API}`}><h5 className="card-title">{ pubinfo.API}</h5></Link>
                <h5 className="card-title">{ pubinfo.Category}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{pubinfo.Description}</h6>
                </div>
            </div>})}
          </div>
        </div>
      </div>
    </>
  );
};
