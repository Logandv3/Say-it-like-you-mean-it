export const submitEntry = (content, cleanResponse) => {
  fetch("https://textprobe.p.rapidapi.com/feelings", {
    method: "POST",
    headers: {
    "content-type": "application/json",
    "x-rapidapi-host": "textprobe.p.rapidapi.com",
    "x-rapidapi-key": "901d9d0655msh1fba2dffe35295fp126567jsn97bcd09ec379"
      },
    body: JSON.stringify({
      text: content
    })
  })
  .then(response => response.json())
  .then(data => cleanResponse(data))
  .catch(err => {
    console.error(err);
  })
}