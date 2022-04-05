import React from 'react'

export default function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props){
      const [storageChange, SetStoragechange] = React.useState(false)

    window.addEventListener('storage',()=>{
        SetStoragechange(true)
    })
    const toogleShow =()=>{
        props.sincronized()
        SetStoragechange(false)
    }

      return (<WrappedComponent 
        show={storageChange} 
        toogleShow={toogleShow}/>)
  } 
}
export {WithStorageListener}