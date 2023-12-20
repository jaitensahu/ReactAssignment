import logo from './logo.svg';
import './App.css';
import MovieCard from './Components/MovieCard';
import MovieData from './Components/MovieData.json'
function App() {
  let movied=[{
    "adult": false,
    "backdrop_path": "/l94l89eMmFKh7na2a1u5q67VgNx.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "homepage": "",
    "id": 3,
    "imdb_id": "tt0092149",
    "original_language": "fi",
    "original_title": "Varjoja paratiisissa",
    "overview": "Nikander, a rubbish collector and would-be entrepreneur finds his plans for success dashed when his business associate dies. One evening, he meets Ilona, a down-on-her luck cashier in a local supermarket—and, falteringly, a bond begins to develop between them.",
    "popularity": 9.266,
    "poster_path": "/nj01hspawPof0mJmlgfjuLyJuRN.jpg",
    "production_companies": [
      {
        "id": 2303,
        "logo_path": null,
        "name": "Villealfa Filmproductions",
        "origin_country": "FI"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "FI",
        "name": "Finland"
      }
    ],
    "release_date": "1986-10-17",
    "revenue": 0,
    "runtime": 74,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      },
      {
        "english_name": "Finnish",
        "iso_639_1": "fi",
        "name": "suomi"
      },
      {
        "english_name": "Swedish",
        "iso_639_1": "sv",
        "name": "svenska"
      }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Shadows in Paradise",
    "video": false,
    "vote_average": 7.258,
    "vote_count": 312
  }]
  return (
    <div className="App">
     { MovieData.map(ele=>{
          return <MovieCard key={ele.id} {...ele}/>
      })
      }
    
    </div>
  );
}

export default App;
