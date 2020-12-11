import { precompileString } from 'nunjucks'
import React from 'react'
import './style.css'

export default function Headers(props) {
    return (
        <header id = 'main-header'>
        <h1>{props.title}</h1>
        </header>
    )
}