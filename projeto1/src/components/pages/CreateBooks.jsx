import React from "react"
import { useState, useEffect } from "react"

import style from './CreateBooks.module.css'

import Input from '../forms/Input'
import Select from '../forms/Select'
import Button2 from "../forms/Button2"
// import Button from '../forms/Button'

const CreateBooks = () => {

    /* Define o state de dados das categorias */
    const[categorias, setCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
    setBook({...book, [event.target.name] : event.target.value});
    console.log(book)
}

    //Recupera os dados de categorias da apirest
    useEffect(()=>{ //useEffect busca dado, traz dado e permite que use esse dado
        
        fetch('http://localhost:5000/listagemCateorias',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                'Acess-Control-Allow-Headers':'*',
            }
        }).then( //then => resposta de uma ação assincrona
            (resp)=>
                // console.log('RESPOSTA:' + resp)
                resp.json()
        ).then(
            (data)=>{
                console.log('DATA:' + data.data)
                setCategorias(data.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[]);

    /* INSERÇÃO DOS DADOS DE LIVRO */
    function createBook(book) {
        
        // console.log(JSON.stringify(book))

        fetch('http://localhost:5000/inserirLivro', {
                method:'POST',
                mode:'cors',
                headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
                },
                body: JSON.stringify(book)
        })
        .then(
                (resp)=>resp.json()
        )
        .then(
                (data)=>{
                console.log(data);
                // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                }
        )
        .catch(
                (err)=>{ console.log(err) }
        )
}

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createBook(book);
        }

    return(
        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVROS</h1>

            <form submit={submit}>

            <Input
                type='text'
                name='nome_livro'
                placeHolder='Digite o nome do seu livro aqui...'
                text='Título do livro'
                handlerChangeBook={handlerChangeBook} //props = {função}
            />

            <Input
                type='text'
                name='autor_livro'
                placeHolder='Digite o nome do autor...'
                text='Nome do autor'
                handlerChangeBook={handlerChangeBook} //props = {função}
            />

            <Input
                type='text'
                name='descricao_livro'
                placeHolder='Digite a descrição do livro...'
                text='Descrição do livro'
                handlerChangeBook={handlerChangeBook} //props = {função}
            />

            <Select 
                name='categoria'
                text='Escolha uma categoria de livro...'
                options={categorias}
            />      

        <Button2
            rotulo='Cadastrar Livro'
        />

        </form>

        </section>
    )
}

export default CreateBooks