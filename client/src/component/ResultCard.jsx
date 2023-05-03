const ResultCard = () => {
    return ( 
        <div className="centered-col gap-y-4 text-center py-7 lg:h-144">
            <h2 className="text-lightlavender text-2xl font-bold">Your Result</h2>
            <div className="rounded-full w-44 h-44 centered-col bg-gradient-to-b from-violetblue to-persianblue gap-y-2">
                <h2 className="text-7xl font-bold">76</h2>
                <h3 className="text-xl font-extrabold text-slateblue">of 100</h3>
            </div>
            <h1 className="text-3xl font-semibold">Great</h1>
            <h3 className="text-lightlavender w-4/5 text-xl">You scored higher than 65% of the people who have taken these tests.</h3>
        </div>
     );
}
 
export default ResultCard;