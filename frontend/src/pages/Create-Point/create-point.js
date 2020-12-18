import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';
import api from '../../services/api';

//import Dropzone from '../../components/Dropzone';

import './styles.css';

import logo from '../../assets/logo.svg';

// interface Item {
//     id: number;
//     title: string;
//     image_url: string;
//   }
  
//   interface IBGEUFResponse {
//     sigla: string;
//   }
  
//   interface IBGECityResponse {
//     nome: string;
//   }
  
  const CreatePoint = () => { //React.FC = () => {

    function populateUFs() {
        const ufSelect = document.querySelector("select[name = uf]")

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( (res) => { return res.json() }) /*ou  .then( res => res.json()) */
        .then( states => {

            for( const state of states){
                ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`

            }

        })
    }
    populateUFs()

    function getCities(event) {
        const citySelect = document.querySelector("select[name = city]")
        const stateInput = document.querySelector("input[name = state]") /*pode ser só  ("[name=state]")*/

        const ufValue = event.target.value

        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfSelectedState].text

        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

        citySelect.innerHTML = "<option value>Selecione a cidade</option>"
        citySelect.disabled = true

        fetch(url)
        .then( (res) => { return res.json() }) /*ou  .then( res => res.json()) */
        .then( cities => {
            
            for( const city of cities){
                citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })
    }


    document
        .querySelector("select[name = uf")
        .addEventListener("change", getCities)  
        
    /*Itens de coleta
    *pegar todos os li's
    */
    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for(const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)//callback function
    }

    const collectedItems = document.querySelector("input[name = items]")

    let selectedItems = []

    function handleSelectedItem(event) {
        const itemLi = event.target
        /*adicionar ou remover uma classe com javascript*/
        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.id

        // console.log('ITEM ID ', itemId)

        // verificar se existem itens selecionados
        // se sim: pegar os itens  selecionados
        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId  //se for igual encontrou o item, ai o itemFound = true
            return itemFound  //se retornar false, ele irá procurar novamente

            //forma mais limpa de fazer isto
            // const alreadySelected = selectedItems.findIndex( item => item == itemId)
        })

        //se já estiver selecionado: 
        if( alreadySelected >= 0 ) {
            //tirar da seleção
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId
                return itemIsDifferent 
            })
            selectedItems = filteredItems
        } else {
            //se não estiver selecionado: 
            //adicionar à  seleção
            selectedItems.push(itemId)
        }

        // console.log('selectedItems ', selectedItems)

        
        //por fim:
        //atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItems
        

    }
}





// <header>
//     <img src = "/assets/logo.svg" alt = "Logomarca">
//     <a href="/">
//         <span></span>
//         Voltar para home
//     </a>
// </header>