import  Axios  from "axios";
import { useQuery } from "react-query";
export const About = () => {
  const {data,isLoading,refetch} = useQuery(["name"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const imgadd =
    "https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2021-10/Bathing%20Cats%20Everything%20You%20Need%20to%20Know1.jpg?itok=cixxswTb";

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Fetch api with CatFact-api</h2>
          <p>
            Set the new fact in home page!
          </p>
        </div>
        <div className="col-md-6">
          <img src={imgadd} alt="img" style={{borderRadius: "5px",width: "251px",paddingBottom:"5px"}}/><br/>
          <button onClick={refetch}>New Fact about Cats</button>
          {isLoading? <h5>Loading ...</h5>:<p>{data?.fact}</p>}
        </div>
      </div>
    </div>
  );
};
