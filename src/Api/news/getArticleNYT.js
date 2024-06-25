const GET_ARTICLE = () => {
  return {
    url: 'https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=tin5YXiHTKYfG6yFAoeA2gO03qxZh1Sd',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}
export default GET_ARTICLE;