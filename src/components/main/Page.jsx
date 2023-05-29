import './Page.css';
import MovieList from "./MovieList";
import MovieDetail from './MovieDetail';
import CreateMovie from './CreateMovie';
import EditMovie from './EditMovie';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page(){

    const [movie, setMovie] = useState({"id":1,"movieName":"Pathaan","releaseYear":2023,"imdbRating":6.1,"starCast":"Shahrukh Khan, Deepika Padukone","genre":"Action"});
    const [newId,setNewId] = useState("");
    const openEditForm = (movie) => {
      changeDetcrt(<EditMovie movie={movie} />);
}
    const [detcrt,changeDetcrt] = useState(<MovieDetail openEditForm={openEditForm} movie={movie}/>)

    useEffect(() => {

      async function getMovie(id){
     const response = await axios.get(`http://localhost:5078/api/Movies/${id}`); 
    setMovie(response.data);
      }

       getMovie(newId);
    },[newId]);
    
    const chooseId = (childId) => {
      setNewId(childId);
      if(detcrt!==<MovieDetail movie={movie}/>){
        changeDetcrt(<MovieDetail openEditForm={openEditForm} movie={movie}/>)
      }
    }

    const openAddForm = () => {
          changeDetcrt(<CreateMovie/>);
    }

    return (
        <main id="Main">
            <div id='Main-movie-list' className="Main-cont-item">
               <MovieList chooseId={chooseId} openAddForm={openAddForm} /> 
            </div>
            <div id='Main-movie-det' className="Main-cont-item">
              {detcrt}
            </div>
        </main>
    );
}