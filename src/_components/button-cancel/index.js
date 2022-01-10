import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function ButtonFilledCancel({route, text}){
    return(
        <buttom className="btn-cancel">
            <Link className="cancelar" to={route}>{text}</Link>
        </buttom> 
    )
  }
  