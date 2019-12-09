import React, {useState, useEffect} from 'react'

const useTransitionHeight = () => {

    const [height, setHeight] = useState()

    useEffect(()=> {

    })
   
    const Container = ({children}) => {
    return (<div style={{--height: height}}>{children}</div>)
    }
    

    return [Container]
}