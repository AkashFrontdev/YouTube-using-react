import { useEffect, useState } from "react"

export const Home = () => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    const apiKey = "AIzaSyBb0CkwLc4gQhVo-aDN2tFRRTnaQ5heeb4"
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=your_query_here`

    fetch(url, {
      headers:{
       'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }, [])

  return null;
}
