import React from 'react';
import axios from 'axios';

// export const Movies = ({ name }) => {
//   return (
//     <h1>Movies will be here {name}!</h1>
    
//   )
// };

export default class MovieList extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/{movie_id}?api_key=a3985a26801867ab5587f3065e74d2b2').then(res => {
      console.log(res)
        this.setState({ movies: res.data});
      });
  }
  render() {
    return <ul>{this.state.movies.map(movie => <li>{movie.name}</li>)}</ul>
    }
  
  }
