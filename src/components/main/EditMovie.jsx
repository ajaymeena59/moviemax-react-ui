import axios from 'axios';
import './EditMovie.css';

export default function EditMovie(props){

    const editHandler = (evt) => {
        evt.preventDefault();
        if (evt.target.releaseyear.defaultValue<1900){
         window.alert("You can add movie released after 1900");
         return false;
        }
 
      const movieName = evt.target.moviename.defaultValue;
      const releaseYear =  evt.target.releaseyear.defaultValue;
      const imdbRating = evt.target.imdbrating.defaultValue;
      const starCast = evt.target.starcast.defaultValue;
      const genre = evt.target.moviegenre.defaultValue;
 
       const response = axios.put(`http://localhost:5078/api/Movies/${props.movie.id}`,{
        id:props.movie.id,
        movieName:movieName,
         releaseYear:releaseYear,
         imdbRating:imdbRating,
         starCast:starCast,
         genre:genre
        });
        response.then((res)=>{
         console.log(res);
         window.alert("Edited");
        });
 
     }
 
     return(
         <form method='POST' onSubmit={editHandler} >
           <fieldset>
             <legend>Enter movie's new details:</legend>
             <label className="Edit-movie-lab" htmlFor="name"> Movie name: </label>
             <input className="Edit-movie-inp" type="text" id="name" name="moviename" placeholder='Enter movie name' required defaultValue={props.movie.movieName} />
             <br />
             <label className="Edit-movie-lab" htmlFor="year">Release year: </label>
             <input className="Edit-movie-inp" type="number" id="year" name="releaseyear" placeholder='Enter release year' defaultValue={props.movie.releaseYear} />
              <br/>
              <label className="Edit-movie-lab" htmlFor="rating">IMDB Rating: </label>
              <input className="Edit-movie-inp" type="number" id="rating" name="imdbrating"  placeholder='Tell IMDB rating' defaultValue={props.movie.imdbRating} />
              <br />
              <label className="Edit-movie-lab" htmlFor="cast">Star cast: </label>
              <input className="Edit-movie-inp" type="text" id="cast" name="starcast" placeholder='Enter name of stars' defaultValue={props.movie.starCast} />
              <br />
              <label className="Edit-movie-lab" htmlFor="genre">Genre: </label>
              <input className="Edit-movie-inp" type="text" id="genre" name="moviegenre" placeholder='Enter genre' defaultValue={props.movie.genre}/>
              <br />
              <input className="Edit-movie-inp-butt" type="reset" value="Reset" />
              <input className="Edit-movie-inp-butt" type="submit" value="Save" />
           </fieldset>
         </form>
     );
 }