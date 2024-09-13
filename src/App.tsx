import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Route'
import Movie from './components';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Slider />
    //   <GenreMovieList/>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}>
        <Route index element={<Movie/>}/>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
