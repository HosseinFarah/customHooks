import { useContext, useState } from "react";
import { siteName } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";
import { useCounter } from "../Hooks/useCounter";
export const Home = () => {
  const {state ,reset, inc,dec} = useCounter();
  const [show,setShow] = useState(true);
  const { name } = useContext(siteName);
  const { data } = useQuery(["name"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <ul className="mt-5">
            <li>NavLink chnage menu items when isActive= true</li>
            <li>Change button text with state(Show|Hide)</li>
            <li>Custom hook in Counter and useApi in ApiList Child page!</li>
            <li>Manage state with useContext</li>
            <li>Change default QueryClient Options  to => refetchOnWindowFocus:false,refetchOnMount:false</li>
            <li>Manage state's with useQuery</li>
            <li>Manage Form with react-hook-form , yup and @hookform/resolvers</li>
            <li>useState,useEffect,useParams,useNavigate</li>
          </ul>
          <div className="alert alert-primary col-5" role="alert">
            Main Page .<h5>setName: {name}</h5>
          </div>
          <div className="alert alert-primary col-6 mx-1">
            {show && <h5>{data?.fact}</h5>}
            <button onClick={()=>{setShow(!show)}}>{show?"Hide":"Show"}</button>
            
            <h5> Used with Custom hook(useCounter)</h5>
            <h3>{state}</h3>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>C</button>
          </div>
        </div>
      </div>
    </>
  );
};
