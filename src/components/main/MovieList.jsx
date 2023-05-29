import './MovieList.css';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieList(props) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

/*    useEffect(() => {

        async function getMovies() {
          try{  const response = await axios.get("http://localhost:5078/api/Movies")

          setMovies(response.data);
             setIsLoading(false);
        }catch(error){
            console.log(error);
        }
        }

        getMovies();
    }, []);  */
      
    const x = movies.length > 0 ? movies.map((movie) => <Movie key={movie.id} chooseId={props.chooseId} myMovie={movie} />) : <h4>No movies available</h4>;

    return (
        <div className='Ml-cont'>
            <ul className='Ml-ul'>

                <AddNewMovie openAddForm={props.openAddForm} />

                { isLoading===true ? <h3>Loading so please wait...</h3>:x}

            </ul>
        </div>
    );
}

function AddNewMovie(props){ 

    return <li className='Ml-item'> <button style={{backgroundColor:'blueviolet'}} onClick={()=> props.openAddForm() }><h3>Add new movie</h3> </button> </li>;
}

export default MovieList;
