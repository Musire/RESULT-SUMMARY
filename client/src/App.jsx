import InfoCard from "./component/InfoCard"
import ResultCard from "./component/ResultCard"

const cardTypes = ["error", "warning", "success", "info" ]

const cardInfo = {
  error: {
    title: "Reaction",
    score: 80
  },
  warning: {
    title: "Memory",
    score: 92
  },
  success: {
    title: "Verbal",
    score: 61
  },
  info: {
    title: "Visual",
    score: 72
  }
}

const cards = cardTypes.map(item => <InfoCard key={item} variant={item} title={cardInfo[item].title} score={cardInfo[item].score} /> )

export default function App() {
  return (
    <section className=" w-screen min-h-screen h-auto centered">
      <section className="xs:w-full xs:h-full xs:centered-col lg:flex-row lg:w-3/5 lg:h-full lg:rounded-[3rem] lg:shadow-2xl lg:shadow-lightlavender">
        <div className="w-full xs:h-1/2 lg:h-full bg-gradient-to-b from-slateblue to-royalblue rounded-bl-[3rem] rounded-br-[3rem] lg:rounded-tl-[3rem] lg:rounded-tr-[3rem] xs:p-8 lg:p-0">
          <ResultCard />
        </div>
        <div className="xs:w-full lg:w-5/6 h-1/2 p-8 bg-white evenly-col items-start gap-y-4 lg:rounded-[3rem]">
          <h3 className="text-darkgrayblue bg-white font-bold text-2xl">Summary</h3>
          <div className="centered-col gap-y-4 w-full">
            {cards}
          </div>
          <button className="bg-darkgrayblue w-full rounded-full py-6 font-bold text-2xl centered hover:bg-gradient-to-b from-slateblue to-royalblue easy-transition hover:cursor-pointer">Continue</button>
        </div>
      </section>
    </section>
  )
}