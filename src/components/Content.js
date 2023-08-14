import React, { useEffect, useState } from 'react'
import './content.css'

function Content() {

    const [movie, setMovie] = useState([])

   
    const getData = () => {
        fetch('https://api.themoviedb.org/4/list/1?api_key=4e44d9029b1270a757cddc766a1bcb63')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setMovie(data.results);
            // console.log(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    useEffect (() => {
      getData();
    }, [])

  return (
    <>
    {/* {console.log(movie)} */}
    <div className='movie'>
    {
      movie.map((pic) => {
        // console.log(pic)
        return(
          <>
            <div key={pic.id} className='dis' >
              <img src={`https://image.tmdb.org/t/p/original${pic.poster_path}`} alt='movie'  />
              <div className='bold'>
              <p> Title: {pic.title}</p>
              <p>Popularity: {pic.popularity} </p>
              <p>Release-Date: {pic.release_date} </p>
              </div>
            </div>
          </>
        )
      })
    }
    
    </div>
    </>
  )
}

export default Content