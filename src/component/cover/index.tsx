import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

/**
 * 초대장의 메인 커버 섹션입니다.
 * 예식 일시, 신랑/신부 이름, 장소를 표시합니다.
 *
 * @returns {JSX.Element} 커버 섹션
 */
export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="image-wrapper">
        <img
          src={COVER_IMAGE}
          alt={`${GROOM_FULLNAME}과 ${BRIDE_FULLNAME}의 웨딩 사진`}
        />
        <div className="hero-top">
          <div className="hero-date">
            {WEDDING_DATE.format("YYYY · MM · DD")} ·{" "}
            {WEDDING_DATE.locale("en").format("ddd").toUpperCase()}
          </div>
          <h1 className="hero-title">
            Golden
            <br />
            Hour Vow
          </h1>
        </div>
        <div className="cover-info">
          <div className="names">
            {GROOM_FULLNAME} <span>&amp;</span> {BRIDE_FULLNAME}
          </div>
          <div className="wedding-details">
            <div>{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
            <div>{LOCATION}</div>
          </div>
        </div>
      </div>
    </LazyDiv>
  )
}
