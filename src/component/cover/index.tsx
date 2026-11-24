import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  LOCATION_ADDRESS,
  WEDDING_DATE,
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
      </div>
      <div className="cover-info">
        <div className="names">
          <span>{GROOM_FULLNAME}</span>
          <span className="divider" aria-hidden="true" />
          <span>{BRIDE_FULLNAME}</span>
        </div>
        <div className="wedding-details">
          <div className="info">
            {WEDDING_DATE.format("YY년 M월 D일")}{" "}
            {WEDDING_DATE.format("h:mm")}{" "}
            {WEDDING_DATE.hour() >= 12 ? "PM" : "AM"}
          </div>
          <div className="info">{LOCATION}</div>
          <div className="address">{LOCATION_ADDRESS}</div>
        </div>
      </div>
    </LazyDiv>
  )
}
