function DifficultySelection({setDifficulty, restartGame}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const selectedDifficulty = formData.get('difficulty');
        setDifficulty(selectedDifficulty);
        restartGame();
    }

    return (
        <div className="difficulty-selection">
            <form onSubmit={handleSubmit}>
                <h3>Chose your difficulty</h3>
                <input type="radio" id="easyDifficulty" name="difficulty" value="easy" defaultChecked/>
                <label htmlFor="easyDifficulty">Easy</label>

                <input type="radio" id="mediumDifficulty" name="difficulty" value="medium"/>
                <label htmlFor="mediumDifficulty">Medium</label>

                <input type="radio" id="hardDifficulty" name="difficulty" value="hard"/>
                <label htmlFor="hardDifficulty">Hard</label>

                <button className="start-game" type="submit">Start</button>
            </form>
        </div>
    )
}

export default DifficultySelection;