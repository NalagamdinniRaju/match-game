import './index.css'

const Header = props => {
  const {time, score} = props
  return (
    <nav className="nav-container">
      <div className="nav-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-list-items-container">
          <li className="nav-item">
            <p className="score-title">
              Score:<span className="span-text">{score}</span>
            </p>
          </li>
          <li className="nav-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p className="span-text">{time} Sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
