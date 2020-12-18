import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './modal.css'

import logo from '../../assets/logo.svg'

const Home = () => {
    <div id="modal" class="hide">
        <div class="content">
            <div class="header">
                <h1>Pontos de Coleta</h1>
                <Link to = "#">Fechar</Link>
            </div>
            <form action="/search">
                <label for="search">Cidade</label>
                <div class="search field">
                    <input 
                        type="text" 
                        name="search"
                        placeholder="Pesquise por Cidade"
                        />
                    <button>
                        <img src="/assets/search.svg" alt="Buscar"/>
                    </button>
                </div>
            </form>
        </div>
    </div> 
}