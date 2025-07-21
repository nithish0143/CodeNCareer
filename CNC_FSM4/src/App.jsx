import { useState } from 'react'
import axios from 'axios'

function App() {
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  const get=()=>{
    axios.get('http://localhost:3000/welcome/'+name)
    .then(res=>setMsg(res.data.msg))
    .catch(err=>console.log(err))
  }
  return (
    <>
      <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)} value={name}/>
      <button onClick={get}>send</button>
      <div>{(msg?msg:null)}</div>
    </>
  )
}

export default App
