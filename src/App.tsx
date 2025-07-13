
import './App.css'
import { useState } from 'react'

function App() {

  type userData = {
    firstname: String;
    surname: string;
    age: number,
    Address: string;

  }

  const [user, setUser] =useState<userData | null>(null);

  const fetchUser = () =>{
    fetch('http://127.0.0.1:5000/api/name')
    .then((response) => (response.json()))
    .then((data) =>{
      setUser(data)
    })
  }

  type WeatherData = {
  City: string;
  Country: string;
  Main_Weather: string;
  Temperature: number;
  Weather: string;
};

  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = () =>{
    fetch("http://127.0.0.1:5000/api/weather")
    .then((response) => response.json())
    .then((data) =>{
      setWeather(data);
    })
  }

  return (
    <>
    <div className='max-w-7xl mx-auto h-screen px-10'>
      <h1 className='text-3xl text-center text-gray-950'>Random Weather Generator Dependant on your region</h1>
      <button onClick={fetchWeather} className='shaddow-sm bg-green-900 text-white py-2 px-3 rounded-xl'>Check Weather</button>

      {weather &&(
      <div className='bg-gray-50 shadow-xl py-10 px-10 mt-10 rounded-xl'>
          <h2 className='text-center'>{weather.City}, {weather.Country}</h2>
          <p>Main: {weather.Main_Weather}</p>
          <p>Description: {weather.Weather}</p>
          <p>Temperature: {weather.Temperature}°C</p>
    </div>
      )}
      <button onClick= {fetchUser}className='bg-blue-600 text-white rounded-sm'>Check User</button>
      {user &&(
        <div className='hover:scale-110 py-10 px-10 mx-20 my-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl rounded-xl'>
          <p className='text-3xl font-bold text-center'>
            Logged in user
          </p>
          <hr />
          <h1 className='font-light text-start'>User: {user.firstname} {user.surname}</h1>
          <h2>Address:{user.Address}</h2>
          <h3>Age: {user.age}</h3>
        </div>
      )

      }
    </div>
      
    </>
  )
}

export default App
