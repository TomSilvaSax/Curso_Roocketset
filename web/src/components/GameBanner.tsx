interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className="relative rounded-lg ouverfow-hidden">
            <img src={props.bannerUrl} />

            <div className="  w-full pt-16 pb-4 px-4 via-green-300 absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{props.title}</strong>
                <span className="text-zinc-300 text-sm block "> {props.adsCount} anuncio(s)</span>
            </div>
        </a>
    )
}