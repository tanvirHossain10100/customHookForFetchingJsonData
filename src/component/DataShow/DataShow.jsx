import "./DataShow.css";
const DataShow = ({ data: { name, title, body, id }, data }) => {
  return (
    <>
      <div className="data">
        <h2>
          {data ? (
            name || title || body || id
          ) : (
            <h3>
              You have to modify on the DataShowComponent accoding to data
            </h3>
          )}
        </h2>
      </div>
    </>
  );
};
export default DataShow;
