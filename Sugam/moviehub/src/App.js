import React, {Component} from 'react';
import MovieTile from './MovieTile'
import logo from './movie-camera-logo.svg';
import $ from "jquery"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies  = [
      {id: 0,  title: "Avengers: Infinity War", overview: "Lorem ipsum jashdfjadk",poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
      {id: 1,  title: "Avengers: lolol", overview: "Lorem ipsum jashdfjadk", poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"}
    ]

    this.performSearch()
    // this.state = {rows: <p>This is my row</p>}

    var movieRows = []

    movies.forEach((movie) => {
      console.log(movie.id)
      movieRows.push(<MovieTile movie={movie}/>)  
    });

    this.state = {rows: movieRows}
    // this.performSearch()
  }

  performSearch(){
    console.log("Performing search using ombd API")
    const urlString = "http://www.omdbapi.com/?s=avengers&apikey=1c2191fa"
    $.ajax({
      url : urlString,
      success:(searchResults) => {
        console.log("Movie feteched successfully")
        // console.log(searchResults)
        const results = searchResults.Search
        // console.log(results)
        
        var movieInfo = []

        results.forEach((movie) => {
          // console.log(movie.Title)
          const movies = <MovieTile movie={movie}/>
          movieInfo.push(movies)
        });

      },
      error: (xhr,error,err) => {
        console.error("Failed to fetch movie")
      }
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <strong>MovieHub</strong>
        </nav>
    
        <div className="App-search">
          <input type="text" placeholder="Search Movie here" />
        </div>

        {this.state.rows}

      </div>
    ); 
  }
  
}

export default App;
