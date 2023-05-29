import axios from 'axios';
import './MovieDetail.css';

export default function MovieDetail(props){
  
  const deleteHandler = (dltId) => {
    const deleteSurity = window.prompt("Dangerous Operation! Type 'yes' to delete");

    if(deleteSurity==="yes"){
     const response = axios.delete(`http://localhost:5078/api/Movies/${dltId}`);
     response.then((res)=>{
      window.alert("you deleted!");
      console.log(res);
     });
    }  else {
      window.alert("not deleted!");
    }
  }

    return (
        <div className='Mov-det-cont'>
          <div>
          <h1>{props.movie.movieName}</h1>
          </div>
          <div>
          <h3>Release year: {props.movie.releaseYear} </h3>
          </div>
          <div>
          <h4>IMDB rating: {props.movie.imdbRating+"/10"} </h4>
          </div>
          <div>
            <h3>Star Cast: {props.movie.starCast} </h3>
          </div>
          <div>
            <h4>Genre: {props.movie.genre} </h4>
          </div>
          <div className='Md-butt-cont'>
             <button id='Md-butt-edt' className='Md-butt' onClick={() => props.openEditForm(props.movie)} ><b>Edit</b></button>
             <button id='Md-butt-dlt' className='Md-butt' onClick={()=>deleteHandler(props.movie.id)} ><b>Delete</b></button>
          </div>
        </div>
    );
}