import style from './CardBooks.module.css'
import Button from './Button'
// props é igual ao json -- parametros titulos e autor são json// props são variaveis dentro da areon function(tipo isso)
const CardBooks = ({titulo,autor,imagem}) => {



    return(
        <div className={style.CardBooks}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt={titulo} title={titulo}></img>
            <div>
                <Button label='Detelhe'></Button>
            </div>
        </div>
    )

}

export default CardBooks