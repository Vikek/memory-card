function Header({score}) {
    return (
        <header className="header">
            <h1 className="title">Pokémon Memory Game</h1>
            <div className="score">Score: {score}</div>
        </header>
    )
}

export default Header;