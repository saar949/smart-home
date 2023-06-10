import React, { useState } from 'react'
import Addprodoct from './Addprodoct'

export default function Room(props) {

  const [flag, setFlag] = useState(false)

  const show = () => { // פונציקה שמציגה/מעילמה את קומפננת הוספת מוצר...  ומעלימה/מחזירה את כפותר הוספת המוצר
    if (flag) {
      return <Addprodoct addProduct={props.addProduct} val={props.val} index={props.index} setFlag={setFlag} />
    }
    else{
      return <button className='button-17' style={{display:false}}  onClick={() => { setFlag(true) }} >Add product</button> // החזרת כפתור הוספת המוצר כל הוד פלג נמצא בפולס
    }

  }




  return (
    <div>
      <h2 style={{margin:'0px'}} > room type:{props.val.type}</h2>
      <h2 style={{marginTop:'30px'}} >room name:  {props.val.name}</h2>
      {show()}
      {props.val.product.map((val, index) => {  // לולאה המיצרת לי כפתור עם השם של המוצר ... הלולאה רצה על המערך של המוצרים

        // let color = val.conidtion ?  'green' : 'red'   //if מקוצר הערך הראשון נכנס עם המצב הוא אמת ערך השני נכנס עם המצב הוא שקר 
        let color1;
        if (val.conidtion) {
          color1 = 'green'
        }
        else {
          color1 = 'red'
        }
        return <div> 
          <button className='button-17' style={{ backgroundColor: color1 }} onClick={() => { props.checgConidtion(props.index, index) }} >{val.pr}</button>  
          {/*  כפתור המוצר שלוח לפונקציה המשנה את מצב המוצר את האינקס של החדר ושל המוצר עליו לחצתי */}
        </div>
      })}









    </div>
  )
}
