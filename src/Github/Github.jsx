import React ,{useState,useEffect} from 'react'

function Github() {
    const [datas, setdata] = useState([])
    useEffect(() => {
      fetch(`https://api.github.com/users/mairaj001`)
      .then(res=>res.json())
      .then(data=>setdata(data))
    }, [])
    
  return (
    <div className='text-center m-4 text-black p-4 text-3xl'>
        Github Followers:{datas.followers} <br/>
        <img src={datas.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github