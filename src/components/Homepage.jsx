import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage(props) {
    return (
        <div>
            {props.roomList.map((val, index) => {
                return <Link to={`/room${val.name}`} > <button className='button-17'  style={{ backgroundColor: val.color }}> {val.name} </button></Link>
            })} <br />


            <Link to={'/addroom'}><button className='button-17' >+</button></Link>

            




        </div>
    )
}
