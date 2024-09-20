import React from "react"
import { useState, useEffect } from "react"

import style from './CreateBooks.module.css'

import Input from '../forms/Input'
import Select from '../forms/Select'
import Button2 from "../forms/Button2"
// import Button from '../forms/Button'

const CreateBooks = () => {

    //Recupera os dados de categorias da apirest
    useEffect(() => { //useEffect busca dado, traz dado e permite que use esse dado
        fetch('http://localhost:5000/listagemCateorias',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                'Acess-Control-Allow-Headers':'*',
            }
        }).then( //then => resposta de uma ação assincrona
            (resp)=>
                //console.log('RESPOSTA:' + resp)
                resp.json()
        ).then(
            (data)=>{
                console.log('DATA:' + data.data[3].nome_categoria)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[]);

    return(
        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVROS</h1>

            <Input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do seu livro aqui...'
                text='Título do livro'
            />

            <Input
                type='text'
                name='txt_autor'
                placeHolder='Digite o nome do autor...'
                text='Nome do autor'
            />

            <Input
                type='text'
                name='txt_descricao_livro'
                placeHolder='Digite a descrição do livro...'
                text='Descrição do livro'
            />

            <Select 
                name='categoria'
                text='Escolha uma categoria de livro...'
            />      

        <Button2
            rotulo='Cadastrar Livro'
        />

        </section>
    )
}

export default CreateBooks