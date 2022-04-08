import React from 'react'

function UseStorageListener(sincronized) {
  const [storageChange, SetStoragechange] = React.useState(false)

  window.addEventListener('storage',()=>{
    SetStoragechange(true)
  })
    const toogleShow =()=>{
        sincronized()
        SetStoragechange(false)
    }

      return {
        show:storageChange,
        toogleShow
      }
}
export {UseStorageListener}