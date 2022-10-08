import { useState, useEffect } from 'react';
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logoImg from './assets/logo-nlw-sports.svg';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

function App() {

    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/games')
        .then(resp => resp.json())
        .then((data) => {setGames(data)})
    }, [])
            
    return (
        <div className= "max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <img src={logoImg} alt="" />
            <h1 className="text-6xl text-white font-black mt-20 "> Seu <span className=" text-transparent bg-gradient-to-r from-indigo-500 via-green-300 to-yellow-400  bg-clip-text "> dou </span>está aqui</h1>

            <div className=" grip grid-cols-6 gap-6 flex flex-row mt-16">
                {games.map(game => {
                    
                    return (  

                        <GameBanner 
                       key={game.id}
                        title={game.title}
                        bannerUrl={game.bannerUrl}
                        adsCount={5} />
                    )
                })}
            </div>
            <CreateAdBanner />
        </div>

    )
}


export default App
