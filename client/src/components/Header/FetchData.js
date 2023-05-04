import React from 'react'


function FetchData() {


    const apiGet = () => {
        fetch('http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
            .then(response => response.json())
            .then((json) => console.log(json))
            .catch(err => console.log(err))
    }

    return (
        <div>
            My API <br />
            <button onClick={apiGet}>Fetcch API</button>
        </div>
    );
}

    export default FetchData
