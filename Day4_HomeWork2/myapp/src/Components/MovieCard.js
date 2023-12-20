import "./MovieCard.css";

export default (props) => {
    console.log(props);
  return (
    <div className="movieCard">
      <img src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`} alt="" />
      <div className="movieCardDetails">
        <div className="imageAndTitle">
          <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="" />
          <div className="movieTitle">
            <h2>{props.original_title}</h2>
            <p>{props.release_date}</p>
            <span>{props.runtime}</span> <span>Genere</span>
          </div>
        </div>
        <p>
         {props.overview}
        </p>
        <div className="movieIcons">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share-nodes"></i>
          <i class="fa-solid fa-message"></i>
        </div>
      </div>
    </div>
  );
};
