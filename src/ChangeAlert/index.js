import React from 'react'

import {WithStorageListener} from "./WithStorageListener.js"

function ChangeAlert({show, toogleShow }) {
  if(show){
  return (
      <div>
        <p>Hubo cambios!!!</p>
        <button onClick={()=> toogleShow()}>Recaragar lista</button>
      </div>
      )}else{
        return null
      }
}

  const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}