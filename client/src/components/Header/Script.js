

function Script() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl =
    "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    
}

