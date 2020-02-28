export const getTrivia = (team, level) => {
  return fetch(`https://opentdb.com/api.php?amount=10&category=${team}&difficulty=${level}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Error while fetching.')
      }
      return response.json()
    })
};
