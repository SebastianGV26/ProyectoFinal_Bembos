import '../index.css'
import { Link } from 'react-router-dom'

export const Cards_Menu = ({prod}) => {

    return (
        <article className='card_menu'>
            <div className='contenido_card_menu'>
                <header>
                    <h2 className='titulo_card_menu'>{prod.nombre}</h2>
                </header>
                <Link to="#"><img className='img_card_menu' src={prod.img} alt="" /></Link>
            </div>
            <div className='container_btn_menu'>
                <button>Ver Todos</button>
            </div>
        </article>
    )
}
