import './randomChar.scss'
import thor from '../../resources/img/Thumbnail.jpg'
import shield from '../../resources/img/shield.png'
import mjolnir from '../../resources/img/mjolnir.png'
const RandomChar = () => {
  return (
    <div className="randomchar">
      <div className="randomchar__block">
        <img src={thor} alt="Thumbnail" />
        <img src={shield} alt="Thumbnail" />
        <img src={mjolnir} alt="Thumbnail" />
        <div className="randomchar__info">
          <div className="randomchar__name">THOR</div>
          <div className="randomchar__descr">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </div>
          <div className="randomchar__btns">
            <a href="#" className="button button__main">
              HOMEPAGE
            </a>
            <a href="#" className="button button__secondary">
              WIKI
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RandomChar
