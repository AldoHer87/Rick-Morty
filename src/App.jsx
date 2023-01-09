import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './components/CharacterCard';
import rickmortyphoto from '/src/assets/rickmortyphoto.png';
import rickmortytitle from '/src/assets/rickmortytitle.png';

function App() {

  const [location, setLocation] = useState({})
  const [searchLocation, setSearchLocation] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => {
        setLocation(res.data)
        setIsLoading(!isLoading)
      })
  }, []);



  console.log(location)

  const searchId = () => {
    // if (Number(searchLocation) < 126)
    axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
      .then(res => setLocation(res.data))
  }

  return (
    <div className="App">
      {
        isLoading ? (

          <h1>Está cargando...</h1>

        ) : (
          <>
            <div className='startPhoto'>
              <img src={rickmortyphoto} alt="" />
            </div>
            <img className='rickTitle' src={rickmortytitle} alt="" />
            <div className='btton'>
              <input
                className='input'
                type="text"
                placeholder='Type ID from 1 to 126'
                value={searchLocation}
                onChange={e => setSearchLocation(e.target.value)}
              />
              <button className='search' onClick={searchId}>Search location</button>
            </div>
            <br />
            <br />
            <h1 className='title'>Rick and Morty's Locations</h1>
            <br />
            <br />
            <div className='infoLocation'>
              <ul className='listInfo'>
                <li><b>Name</b><br />{location.name}</li>
                <li><b>ID</b><br />{location?.id}</li>
                <li><b>Type</b><br />{location.type}</li>
                <li><b>Dimension</b><br />{location.dimension}</li>
                <li><b>Residents</b><br />{location.residents?.length}</li>
              </ul>
            </div>
            <br />
            <br />
            <div>
              <ul >
                {
                  location.residents?.map(character => (
                    <CharacterCard
                      characterUrl={character}
                      key={character}
                    />
                  ))
                }
              </ul>
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
