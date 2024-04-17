export default function Header({ currentScore, currentBestScore }) {
    return(
        <div>
            <header className="p-2 bg-gray-100 shadow-md flex flex-row justify-between">
                <div>
                    <h1 className="text-xl font-bold">Flack's Memory Game</h1>
                    <p className="text-base font-semibold">Get points by clicking on an image, don't click on any more than once!</p>
                </div>
                <div className="px-4">
                    <p>Score: {currentScore}</p>
                    <p>Best Score: {currentBestScore}</p>
                </div>
            </header>
        </div>
    )
}