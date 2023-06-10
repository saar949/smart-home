import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Addroom(props) {
    const [roomType, setRoomType] = useState('')
    const [roomName, setRoomName] = useState('')
    const [roomColor, setRoomColor] = useState('')

    const nav = useNavigate()


    const addRoom = () => {
        if (roomType == "chooes room" || roomType == '') {
            alert('pless choose type room')
            return
        }


        if (roomName == '') {
            alert('pless enter room name')
            return
        }


        else {
            props.addroom(roomType, roomName, roomColor)
            nav('/')
        }



    }







    return (
        <div>

            <select onChange={(e) => { setRoomType(e.target.value) }}  >
                <option value="chooes room">chooes room</option>
                <option value="bethroom">bethroom</option>
                <option value="bedroom">bedroom</option>
                <option value="kitchen">kitchen</option>
            </select> <br />
            <input maxLength={5} type="text" placeholder='room name' onChange={(e) => { setRoomName(e.target.value) }} /> <br />
            <input id='inptcolor' type="color" onChange={(e) => { setRoomColor(e.target.value) }} /> <br />

            <button className='button-17' onClick={addRoom}>add</button>
          

        </div>
    )
}
