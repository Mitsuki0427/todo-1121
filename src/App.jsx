import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [task,setTask] = useState([]);
  const [newTask,setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
const handleAddTask = () =>{
  if(newTask.trim() !==''){
    setTask((prevTask)=>[...prevTask,newTask])
    setNewTask('');
  }
}
  const handleResetTask= () => setTask([]);
  return (
    <>
    <h1>ToDoリスト</h1>
    <ul>
      {task.map((list,index)=>(
        <li key={index}>{list}</li>
      ))}
    </ul>
    <input
    type="text"
    placeholder="新しいタスクを入力してください"
    value={newTask}
    onChange={handleChange} />
    <button onClick={handleAddTask}>追加</button>
    <button onClick={handleResetTask}>リセット</button>
    </>
  )
}

// }
// const WeatherComponent = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   useEffect(()=>{
//     const fetchData = async () =>{
//       try{
//         const response = await fetch ( "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json")
//         const data = await response.json();
//         setWeatherData(data);
//         console.log(data);
//       }
//       catch (error){
//         console.error("Error fetching weather data:", error);
//       }
//     }
//     fetchData();
//   },{})
//   return(
//     <>
//     <h1>天気</h1>
//     <pre>{JSON.stringify(weatherData, null , 2)}</pre>
//     </>
//   )
// }
// function App() {
//   const [selectedCity, setSelectedCity] = useState('');
//   const handleChange = (e) =>{
//   useEffect(()=>{},{
//     alert(`${selectedCity}を選択`)
//   },[selectedCity]);
//   }
//   return (
    
//     <>
//       <select onChange={handleChange}>
//         <option value="tokyo">東京</option>
//         <option value="osaka">大阪</option>
//         <option value="sapporo">札幌</option>
//   </select>

//     </>
//   )
// }

export default App
