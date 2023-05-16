import molehill from '../embeded/molehill.png'
import {useEffect} from 'react'


export default function Mole ({setIsShowing}) {
    useEffect(() => {
        let randMillis =  Math.ceil(Math.random() * 3000 + 1000)
        let timer = setTimeout(() => {
            setIsShowing(true)
        }, randMillis)

        return () => clearTimeout(timer)
    }, [])



    return <div>
        <img 
            src={molehill} 
            style={
                {width: '30vw'}
            }
        />
    </div>
}