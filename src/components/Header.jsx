export default function Header({ score, bestScore }) {
    return(
        <div>
            <header className="p-2 bg-gray-100 shadow-md flex flex-row justify-between">
                <div>
                    <h1 className="text-xl font-bold">Flack's Memory Game</h1>
                    <p className="text-base font-semibold">Get points by clicking on an image, don't click on any more than once!</p>
                </div>
                <div className="px-4">
                    <p>Score: {score}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </header>
        </div>
    )
}