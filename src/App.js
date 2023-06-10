
import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Addroom from './components/Addroom';
import Room from './components/Room';
import { useState } from 'react';
function App() {

  const [roomList,setRoomList] = useState([])
  

  const addroom =(type,name,color)=>{
    setRoomList([...roomList,{type,name,color,product:[]}])
  }

  const addProduct =(index,pr)=>{ // הוספת מוצר הפוצקינה מקבלת את האינדקס של החדר,את שם המוצר ,והמצב המוצר: כבוי,דלוק
    roomList[index].product.push({conidtion:false,pr})
    setRoomList([...roomList])
  }


  const checgConidtion =(roomIndex,productIndex)=>{ // משנה את המצב המוצר ... הפצונקיה משנה את המצב כל פעם מהפוך שהמצב נמצא
    roomList[roomIndex].product[productIndex].conidtion = !roomList[roomIndex].product[productIndex].conidtion
    setRoomList([...roomList])
  }











  return (
    <div className="App">
      <h1 style={{margin:'0px',}} >smart home</h1>
      <BrowserRouter>
     <Link to={'/'}><button className='button-17' >home</button></Link> 
      <Routes>
        <Route path='/' element={<Homepage  roomList={roomList} />}/>
        <Route path='/addroom' element={<Addroom addroom={addroom}  />}/>
        {roomList.map((val,index)=>{
          return <Route path={`/room${val.name}`} element={<Room   val={val}  index={index}  addProduct={addProduct}  checgConidtion={checgConidtion} />}/>
        })}







      </Routes>
      
      
      
      
      
      </BrowserRouter>







 
    </div>
  );
}

export default App;
