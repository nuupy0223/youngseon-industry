import { Map, MapMarker } from "react-kakao-maps-sdk";
// import mapBg from "../image/mapBg.png";

function HomeMap() {
  return (
    <>
        <div className="wrap">
          <div className="hm_bg h-[30vh] md:h-[300px]">
              <div className="area px-3.5 ms:px-0">
                <p className="pt-[5rem] md:pt-[112px] text-3xl leading-[2.8rem] text-blue pb-5 font-bold">오시는 길</p>
                <p className="text-subgray pb-2.5 leading-[1.8rem]">영선산업은 가양네거리 근처<br/>
                큰길거리에 위치하여 쉽게 찾아오실 수 있습니다.</p>
              </div>
          </div>
        </div>
        {/* 본문 시작 */}
        <div className="area">
        <div>
          <article className="grid grid-cols-[1.5fr_1fr] px-3.5 sm:px-0 mt-10 gap-4">
            <dl className="text-lg leading-8">
              <h6 className="text-blue font-bold pb-8">주소</h6>
                <div className="flex items-center">
                  <dt className="font-bold md:w-24 pr-3">지번 주소</dt>
                  <dd className="text-base">대전 동구 가양2동 408-7</dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-bold md:w-24 pr-3">도로명 주소</dt>
                  <dd className="text-base">대전 광역시 동구 우암로 246번길 9-16</dd>
                </div>
            </dl>
            <dl className="text-lg leading-8"><h6 className="text-blue font-bold pb-8">연락처</h6>
              <div className="flex items-center">
                <dt className="font-bold md:w-24 pr-3">전화</dt>
                <dd className="text-base">010-4945-7422</dd>
              </div>
              <div className="flex items-center">
                <dt className="font-bold md:w-24 pr-3">팩스</dt>
                <dd className="text-base">042-632-4442</dd>
              </div>
            </dl>
          </article>

          
          <div className="pt-10 pb-20">
            <Map center={{ lat: 36.34416288797099, lng: 127.44461677147773 }} style={{ width: "100%", height: "360px" }}>
              <MapMarker position={{ lat: 36.34416288797099, lng: 127.44461677147773 }}></MapMarker>
            </Map>
          </div>
        </div>
        </div>
    </>
  );
}

export default HomeMap;
