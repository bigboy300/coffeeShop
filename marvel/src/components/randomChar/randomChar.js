import './randomChar.scss'
import thor from '../../resources/img/Thumbnail.jpg'
import decoration from '../../resources/img/Decoration.png'

const RandomChar = () => {
  return (
    <div className="randomchar">
      <div className="randomchar__block">
        <img src={thor} alt="Thumbnail" className="randomchar__img" />

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
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today! <br /> Do you want to get to know him
          better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <img
          src={decoration}
          alt="decoration"
          className="randomchar__decoration"
        />
        <button href="#" className="button button__main">
          TRY IT
        </button>
      </div>
    </div>
  )
}
export default RandomChar
