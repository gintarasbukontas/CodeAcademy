import { useEffect, useState } from "react";
import "./App.css";
import SingleProduct from "./components/SingleProduct";

function App() {
  //   const [data, setData] = useState(null);

  //   function getJoke() {
  //     fetch("https://api.chucknorris.io/jokes/random")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setData(res);
  //       });
  //   }

  //   return (
  //     <div>
  //       <div>{data && <div>{data.value}</div>}</div>

  //       <button onClick={getJoke}>Get Joke</button>
  //     </div>
  //   );
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData(res);
  //         console.log(res);
  //       });
  //   }, []);

  //   return (
  //     <div>
  //       <div>
  //         {data.map((x) => (
  //           <div key={x.id} className="card">
  //             <img src={x.image}></img>
  //             <h3>{x.title}</h3>
  //             <h3>{x.price}</h3>
  //             <h3>{x.category}</h3>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <div>
        {data.map((x) => (
          <SingleProduct key={x.id} comment={x} />
        ))}
      </div>
    </div>
  );
}

export default App;
