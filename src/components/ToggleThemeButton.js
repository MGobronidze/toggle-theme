import {useState, useEffect} from 'react'

const ToggleThemeButton = ({setLightMode}) => {
    const [worning, setWorning] = useState(false)
    function clickHandler ( ){
        if(window.innerWidth <= 576){
            setWorning(true);
            setLightMode(true);
        }else{
            setLightMode( (prev) => !prev)
        }
    }
    useEffect(() => {
        const unsubscribe = setTimeout(()=>{
            setWorning(false);
        }, 3000)
        
        return ()=> clearTimeout(unsubscribe)
    }, [worning])


  return (
    <div className='btn-div'>
        <button onClick={clickHandler} className='toggle-btn'>
            Toggle For Theme
        </button>
        <span
            style={{
                visibility: `${worning ? "visible" : "hidden"}`,
                color:"#dc143c"
            }}
        >
            Dark theme not allowed for mobile
        </span>
    </div>
  )
}

export default ToggleThemeButton