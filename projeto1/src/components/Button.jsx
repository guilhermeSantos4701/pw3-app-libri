import style from './Button.module.css'

const Button = ({rotulo}) => {
    return(
        <div className={style.buttonContainer}>
            <button>{rotulo}</button>
        </div>
    )
}

export default Button