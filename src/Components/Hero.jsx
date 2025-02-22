import React, { useState , useEffect} from 'react'
import EyeClosedIcon from '../assets/eye-closed.svg'; 
import EyeOpenIcon from '../assets/eye.svg';
import Manager from './Manager';
import { v4 as uuidv4 } from 'uuid';



const Hero = () => {
    const [isEyeOpen, setIsEyeOpen] = useState(false); 
    const [password, setPassword] = useState('');
    const toggleEyeIcon = () => {
      setIsEyeOpen(!isEyeOpen);
   
      setPassword(isEyeOpen ? 'password' : 'text');
    };

const [passwordArray, setpasswordArray] = useState([])

useEffect(() => {
     if (localStorage.getItem("passwords")) {
        setpasswordArray(JSON.parse(localStorage.getItem("passwords")))
     }
}, [])

const [data, setData] = useState({
    website : '',
    username : '',
    password : ''
})

const handleChange = (e) => {
  setData({...data, [e.target.name]: e.target.value});
}

const savePassword = () => {
    
    setpasswordArray([...passwordArray,{...data, id:uuidv4()}])
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...data, id:uuidv4()}])) 
}

const deletePassword = ()=>{
   
}

const handleSubmit = (e) => {
  e.preventDefault();
  savePassword(); 
}



  return (
    <div className="container mx-auto mt-50 px-4">
      <form className='max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg 
        transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center 
         ">Save your Password</h1>
        <div className="space-y-4">
          <div className="form-group">
            <h2 className="text-sm font-medium text-gray-700 mb-1 
              transform transition-all duration-200 hover:translate-x-1">Add your website</h2>
            <input className='w-full px-4 py-2 rounded-md border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 hover:border-blue-400
              transform hover:-translate-y-0.5' name='website' id='website' type="url" placeholder='Enter your website URL' value={data.website} onChange={handleChange} />
          </div>
          <div className="form-group">
            <h2 className="text-sm font-medium text-gray-700 mb-1 
              transform transition-all duration-200 hover:translate-x-1">Add your username</h2>
            <input className='w-full px-4 py-2 rounded-md border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 hover:border-blue-400
              transform hover:-translate-y-0.5' name='username' id='username' type="email" placeholder='Enter your email' value={data.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <h2 className="text-sm font-medium text-gray-700 mb-1 
              transform transition-all duration-200 hover:translate-x-1">Add your password</h2>
            <div className='relative'>
            <input className='w-full px-4 py-2 rounded-md border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 hover:border-blue-400 
              transform hover:-translate-y-0.5' name='password' id='password' type={isEyeOpen ? 'text' : 'password'} placeholder='Enter your password' value={data.password} onChange={handleChange}
               /> <img src={isEyeOpen ? EyeOpenIcon : EyeClosedIcon} alt="eye" className='eye w-5 h-5 absolute right-2 top-3' onClick={toggleEyeIcon} />
          </div>
        </div>
        <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-md 
          hover:bg-blue-600 transition-all duration-300 
          transform hover:scale-[1.02] hover:shadow-lg
          active:scale-95" type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>

<Manager passwordArray={passwordArray}/>


</div>
  )
}

export default Hero ;
