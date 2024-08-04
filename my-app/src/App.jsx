import { useState } from 'react'
import MovieSeat from './components/BaiTapMovieSeat/MovieSeat'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <MovieSeat/>
  )
}

export default App;
