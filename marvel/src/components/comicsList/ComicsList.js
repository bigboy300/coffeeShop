import './comicsList.scss'
import '../../style/button.scss'
import UW from '../../resources/img/UW.png'
import xmen from '../../resources/img/x-men-mini.png'
const ComicsList = () => {
  return (
    <div className="comics__list">
      <ul className="comics__grid">
        <li className="comics__item">
          <a href="#">
            <img src={UW} alt="uw" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xmen} alt="uw" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={UW} alt="uw" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xmen} alt="uw" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={UW} alt="uw" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xmen} alt="uw" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={UW} alt="uw" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xmen} alt="uw" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">LOAD MORE</div>
      </button>
    </div>
  )
}
export default ComicsList
