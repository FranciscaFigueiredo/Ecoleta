import { precompileString } from 'nunjucks'
import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default function Headers() {
    return (
        <div id = 'main-header'>
            <img src = "./assets/logo.svg" alt = "Logomarca"></img>
            <Link id = 'create-link' to = {'/create'}>Voltar para home</Link>
        </div>
        
        
    )
}