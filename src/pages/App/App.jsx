import "./App.css";
import useFetch from "../../customHooks/useFetch/useFetch";
import DataShow from "../../component/DataShow/DataShow";

function App() {
  const urlOfTheFethc = `https://jsonplaceholder.typicode.com/comments`;
  const { fetchDAta, error } = useFetch(urlOfTheFethc);
  return (
    <>
      {fetchDAta ? (
        error ? (
          <h2 style={{ textAlign: "center" }}>Nothing to show</h2>
        ) : (
          <h1 style={{ textAlign: "center" }}>
            Total length of the data is {fetchDAta.length}
          </h1>
        )
      ) : (
        ""
      )}
      {error ? (
        <h1 style={{ textAlign: "center" }}>{error.message}</h1>
      ) : (
        <div className="datas">
          {fetchDAta.map((data) => (
            <DataShow key={data.id} data={data}></DataShow>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
