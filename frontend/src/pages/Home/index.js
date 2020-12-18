import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'
import '../'

import logo from '../../assets/logo.svg'

const Home = () => {
    <div id = "page-home">
        <div class = "content">
            <header>
                <img src = "/assets/logo.svg" alt = "Logomarca"/>
                <Link to = "/create-point">
                    <span></span>
                    Cadastre um ponto de coleta
                </Link>
            </header>
            
            <main>
                <h1>Seu marketplace de coleta de resíduos</h1>

                <p>Ajudamos pessoas a encontrarem seus pontos de coleta de maneira inteligente</p>
        
                <Link to = "#"><span></span><strong>Pesquisar pontos de coleta</strong></Link>
            </main>
        
        </div>
    </div>
}