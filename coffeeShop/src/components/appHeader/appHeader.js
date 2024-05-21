import './appHeader.scss'
const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>Characters</li>/<li>Comics</li>
        </ul>
      </nav>
    </header>
  )
}
export default AppHeader
