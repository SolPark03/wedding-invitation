import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <LazyDiv className="card location">
      <h2 className="english">Location</h2>
      <div className="addr">
        {LOCATION}
        <div className="detail">{LOCATION_ADDRESS}</div>
      </div>
      <Map />

      <div className="location-directions">
        <div className="way-card">
          <div className="heading">지하철</div>
          <div className="content">
            예식장 인근 역과 출구 정보는 지도 앱에서 확인해 주세요.
          </div>
        </div>
        <div className="way-card">
          <div className="heading">버스</div>
          <div className="content">
            예식장 인근 정류장과 노선은 지도 앱에서 확인해 주세요.
          </div>
        </div>
        <div className="way-card">
          <div className="heading">자가용 · 주차</div>
          <div className="content">
            주차 가능 여부와 요금은 예식장에 문의해 주세요.
          </div>
        </div>
      </div>
    </LazyDiv>
  )
}
