import AppHeader from '../appHeader/appHeader'
import RandomChar from '../randomChar/randomChar'
import CharList from '../charList/charList'
import CharInfo from '../charInfo/CharInfo'
import bgAsset from '../../resources/img/bgAsset.png'
import SingleComic from '../singleComic/SingleComic'
import AppBanner from '../../components/appBanner/appBanner'
import ComicsList from '../comicsList/ComicsList'
function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>
        <img className="bg-decoration" src={bgAsset} alt="vision" />
        {/* <ComicsList /> */}
      </main>
    </div>
  )
}

export default App
