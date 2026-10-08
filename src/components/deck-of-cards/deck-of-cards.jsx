import "@/App.css";
import { useEffect, useState } from "react";


const DeckOfCards = () => {

    const [deckId, setDeckId] = useState(null);
    const [cartas, setCartas] = useState([]);

    useEffect(() => {
        async function criarBaralho() {
            try {
                const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
                const response = await fetch(url);
                const baralho = await response.json();

                setDeckId(baralho.deck_id);
            } catch (error) {
                console.error("Erro ao criar o baralho:", error);
            }
        }
        criarBaralho();
    }, []);


    async function tirarUmaCarta(carta) {
        if (!deckId) return;
        try {
            const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
            const response = await fetch(url);
            const carta = await response.json();
            console.log('A carta é', carta.cards[0]);
            const novaCarta = carta.cards[0];
            setCartas((cartasAnteriores) => [...cartasAnteriores, novaCarta]);
        } catch (error) {
            console.error("Erro ao tirar carta", error);
        }

    };




    return (
        <>
            <div id="center">
                <button onClick={tirarUmaCarta} style={{ cursor: 'pointer' }} disabled={!deckId}>{deckId ? "Tirar uma carta" : "Carregando baralho..."} </button>
                <section>
                    <ul>
                        {cartas.map((carta, index) => (
                            <li key={index}>
                                <img src={carta.image} />
                                {carta.value} OF {carta.suit}
                            </li>
                        ))}
                    </ul>

                </section>
            </div>
        </>
    )
}


export default DeckOfCards;