const GET_TOPSTORIES = (category = "home") => {
    return {
      url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=tin5YXiHTKYfG6yFAoeA2gO03qxZh1Sd`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
  export default GET_TOPSTORIES;
  