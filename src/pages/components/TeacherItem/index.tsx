import React from 'react';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/16416999?s=460&u=2bf768b62dae56f8691599e4dc9164241754a363&v=4" alt="Gabriel Castro" />
                <div>
                    <strong>Gabriel Castro</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Aprendeu química avançada em casa.
                <br /><br />
                Apaixonado por expolodir coisas em laboratório e por mudar a vida das pessoas ensinando o que há de melhor na química.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;