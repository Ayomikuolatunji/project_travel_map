import React, { useEffect, useState } from 'react'
import Address from './components/address/Address'
import Footer from './components/footer/Footer'
import KeepMountedModal from './components/modal/Modal'
import AttractionHotelsRes from './pages/AttractionHotelsRes'

const App = () => {
    const [condition,setCondition]=useState(false)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCondition(true)
        },10000)
    },[])


  return (
    <div>
      <KeepMountedModal condition={condition}/>
      <AttractionHotelsRes/>
      <Address/>
      <Footer/>
    </div>
  )
}

export default App