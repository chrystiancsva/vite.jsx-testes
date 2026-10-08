import "@/App.css";
import { useEffect } from "react";


const DeckOfCards = () => {

    useEffect(() => {
        async function criarBaralho() {
            const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
            const response = await fetch(url);
            try {
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Erro ao buscar o deck:", error);
            }

        }



    }, []);

    return (
        <>
            <section>
                <ul>
                    <li>ceiopwomcvewcvec</li>
                </ul>
            </section>
        </>
    )
}


export default DeckOfCards;