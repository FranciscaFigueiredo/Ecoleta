import React, {useState,useEffect} from 'react'
import api from '../../services/api.js'
import {Link} from 'react-router-dom'
import './style.css'

export default function User() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div id = "user-container">
            <h1>Lista de usuários</h1>
            <button className = 'button' id = 'create-button' type = 'button'>Criar</button>

            <ul className = "user-list">
                {users.map(user => (
                    <li key = {user.id}>
                        <strong>Nome</strong>
                        <p>{user.name}</p>
                        <strong>Email</strong>
                        <p>{user.email}</p>
                        <strong>Ocupação</strong>
                        <p>{user.ocupacao}</p>
                        <strong>Empresa</strong>
                        <p>{user.empresa}</p>

                        <div className = "actions">
                            <button className = 'button' type = 'button'>Deletar</button>
                            <button className = 'button' type = 'button'>Acessar</button>
                        </div>
                    </li>
                ))}
                 
            </ul>
            
        </div>
    )
}