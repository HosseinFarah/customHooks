import { useNavigate, useParams } from "react-router";
import { useApi } from "../Hooks/useApi";
import { Link } from "react-router-dom";

export const Pubpic = () => {
  const navigate = useNavigate();
  const { ID } = useParams();
  const { data, info, isLoading, setInfo } = useApi();
  {isLoading && <h5>Loading ...!</h5>}
  return (
    <>
      <div className=" container col col-3">
        API : with Custom Hook useAPI
        <h5>{ID}</h5>
        <br />
        {info.map((select,index)=>{
          if(select.API === ID) return           <div className="card">
          <img
            src="https://via.placeholder.com/50"
            className="card-img-top"
            alt="Book Cover"
          />
          <div className="card-body">
          <button onClick={()=>{navigate("/publics/")}}>Back</button>
            <h5 className="card-title">{select.API}</h5>
            <h5 className="card-title">{ select.Category}</h5>
            <p className="card-text">{select.Description}</p>
            <Link to={select.Link} target="_blank"><p className="card-text">{select.Link}</p></Link>
          </div>
        </div>
        else return false
        })}
      </div>
    </>
  );
};
