import React, { useState } from 'react'

export default function Addprodoct(props) {
  const [product, setProcuct] = useState('')

  const addprodoct = () => {
    if (product == '' || product == "choose product" ) {
      alert('pless choose product')
      return 
    }


    for (let i = 0; i < props.val.product.length; i++) {
      if (props.val.product[i].pr.indexOf("streo") != -1 && product == "streo") {
        alert('only 1')
        return
      }
    }

    if (props.val.type != "bethroom" && product == "boiler") {
      alert('boiler can by add only to bethroom ')
      return
    }
    if(props.val.product.length == 5){
      alert('only 5 product')
      return
    }

    else {
      props.addProduct(props.index, product)
      props.setFlag(false)
    }


  }





  return (
    <div>
      <select onChange={(e) => { setProcuct(e.target.value) }}  >
        <option value="choose product">choose product</option>
        <option value='Air-Conditioner'>Air-Conditioner</option>
        <option value="boiler">boiler</option>
        <option value="streo">streo</option>
        <option value="lamp">lamp</option>
      </select>
      <button onClick={addprodoct} className='button-17' >add product</button>



    </div>
  )
}
