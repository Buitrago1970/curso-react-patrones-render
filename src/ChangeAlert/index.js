import React from 'react'

import {WithStorageListener} from "./WithStorageListener.js"
import "./ChangeAlert.css"

function ChangeAlert({show, toogleShow }) {
  if(show){
  return (
      <div className='container-alert-sincronized'>
        <div className='container-info-alert'>
        <p>Parce que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
        <p>Quieres sincronizartus TODOs?</p>
        <button onClick={()=> toogleShow()}>SI</button>
        </div>
      </div>
      )}else{
        return null
      }
}

  const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}