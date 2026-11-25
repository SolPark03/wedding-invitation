import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { ShareButton } from "./component/shareButton"
import { STATIC_ONLY } from "./env"
import { COVER_IMAGE } from "./images"

/**
 * 메인 애플리케이션 컴포넌트입니다.
 * 초대장의 각 섹션을 조합하여 화면을 구성합니다.
 *
 * @returns {JSX.Element} 애플리케이션 화면
 */
function App() {
  return (
    <div className="background">
      <div className="card-view">
        <Cover />
        <Invitation />
        <section className="quote-band">
          <img src={COVER_IMAGE} alt="" />
          <div className="quote-copy">
            <div className="quote-title">
              Two hearts,
              <br />
              one horizon
            </div>
            <p>같은 노을을 바라보며 함께 걸어갑니다.</p>
          </div>
        </section>
        <Calendar />
        <Gallery />
        <Location />
        <Information />
        {!STATIC_ONLY && <GuestBook />}
        <section className="closing-section">
          <img src={COVER_IMAGE} alt="" />
          <div className="closing-copy">
            <div className="eyebrow">Thank you</div>
            <p>저희의 새로운 시작을 함께 축복해 주셔서 감사합니다.</p>
            <ShareButton />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
