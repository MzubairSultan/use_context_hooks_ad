import React, { useContext } from 'react'
import { ChanelContext, NameContext } from './App'

function CompC() {
    // yaha py hum namcontext ko access kry gy 
    const myname =  useContext(NameContext);
    const mychannel =  useContext(ChanelContext);
  return (
    <div>
      <h1>hi i am a component c</h1>
      <h2>{myname}</h2>
      <h2>{mychannel}</h2>
    </div>
  )
}

export default CompC
