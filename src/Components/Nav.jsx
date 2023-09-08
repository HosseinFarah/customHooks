import { NavLink, useParams } from "react-router-dom";

export const Nav = () => {
  const {data} = useParams();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavLink style={({isActive})=>{return { color: isActive? "#fb0960":""}}} className="navbar-brand" to="/">
            {" "}
            Home
          </NavLink>
          <NavLink style={({isActive})=>{return { color: isActive? "#fb0960":""}}} className="navbar-brand" to="/about">
            {" "}
            CatFact API
          </NavLink>
          <NavLink style={({isActive})=>{return { color: isActive? "#fb0960":""}}} className="navbar-brand" to="/books" >Users</NavLink>
          <NavLink style={({isActive})=>{return{color:isActive?"#fb0960":""}}} className="navbar-brand" to="/publics">API List</NavLink> 
          <NavLink style={({isActive})=>{return{color: isActive?"#fb0960":""}}} className="navbar-brand" to="/register">Register</NavLink>
        </ul>
      </div>
    </nav>
  );
};
