import React, { useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchData;
