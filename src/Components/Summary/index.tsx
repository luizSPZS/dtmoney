import React, {useContext} from 'react'
import entradasImg from '../../assets/Entradas.svg';
import saidaImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {

    const { transactions } = useContext(TransactionsContext);
        console.log(transactions);

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidaImg} alt="Saidas"/>
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}