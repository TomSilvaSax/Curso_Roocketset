export function CreateAdBanner() {
    return (

        <div className="pt-1 bg-gradient-to-r from-indigo-500 via-green-300 to-yellow-400 self-stretch rounded-xl overflow-hidden mt-7 ">  
            
            <div className="bg-[#2A2634] px-8 py-6  mt-1 self-stretch  flex justify-between items-center" >

            <div>
                <strong className="text-2xl text-white font-bold block">Nao encontrou seu duo?</strong>
                <span className=" text-zinc-400 block">Publique um anuncio para encontrat novos players!</span>
            </div>
            <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600">Publicar anuncio</button>
            </div>
            
            </div>
    )
}