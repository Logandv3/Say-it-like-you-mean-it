export const submitEntry = (content, cleanResponse) => {
  return fetch("https://textprobe.p.rapidapi.com/feelings", {
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

export const getAllEntries = () => {
  return fetch("https://say-it-like-you-mean-it-api.herokuapp.com/entries")
  .then(response => response.json())
  .then(data => data.entriesObj )
  .catch(error => console.log(error))
}

export const postEntry = (entry) => {
  return fetch("https://say-it-like-you-mean-it-api.herokuapp.com/entries", {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
      id: entry.id,
      title: entry.title,
      content: entry.content,
      flagged: entry.flagged,
      entry_analysis: entry.entryAnalysis
    })
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error))
}