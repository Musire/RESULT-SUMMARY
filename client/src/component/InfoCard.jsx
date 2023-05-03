const styling = {
    error: "bg-red-50 text-lightred",
    warning: "bg-yellow-50 text-orangeyellow",
    success: "bg-green-50 text-greenteal",
    info: "bg-paleblue text-cobaltblue",
}

const images = {
    error: "bg-icon-reaction",
    warning: "bg-icon-memory",
    success: "bg-icon-verbal",
    info: "bg-icon-visual",
}

const InfoCard = ({variant, title, score}) => {
    return ( 
        <div className={`rounded-xl w-full px-4 py-6 spaced ${styling[variant]}`}>
            <div className={`centered gap-x-3`}>
                <div className={`bg-img bg-cover w-6 h-6 ${images[variant]}`}></div>
                <h4 className="text-xl font-bold">{title}</h4>
            </div>
            <div className="spaced gap-x-2">
                <h4 className="text-darkgrayblue font-extrabold text-xl">{score}</h4>
                <h4 className="text-mid font-extrabold text-xl">/ 100</h4>
            </div>
        </div>
     );
}
 
export default InfoCard;