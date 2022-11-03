import { Map, MapMarker } from "react-kakao-maps-sdk";
import mapBg from "../image/mapBg.png";

function HomeMap() {
  return (
    <>
      <div className="relative mb-20">
        <img src={mapBg} alt="map background"></img>
        <div className="px-28 mt-14 mb-20 absolute top-0">
          <p className="text-blue pb-5 text-3xl font-semibold">오시는 길</p>
          <p className="pb-2.5">영선산업은 가양네거리 근처</p>
          <p>큰길거리에 위치하여 쉽게 찾아오실 수 있습니다.</p>
        </div>
      </div>
      <div className="px-28">
        <div className="flex pb-20">
          <div className="w-full">
            <p className="text-blue pb-4">주소</p>
            <div className="flex">
              <div className="font-semibold">
                <p className="pb-2.5">지번주소</p>
                <p>도로명 주소</p>
              </div>
              <div className="pl-6">
                <p className="pb-2.5">대전 동구 가양2동 408-7</p>
                <p>대전 광역시 동구 우암로 246번길 9-16</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-blue pb-4">주소</p>
            <div className="flex">
              <div className="font-semibold">
                <p className="pb-2.5">지번주소</p>
                <p>도로명 주소</p>
              </div>
              <div className="pl-6">
                <p className="pb-2.5">대전 동구 가양2동 408-7</p>
                <p>대전 광역시 동구 우암로 246번길 9-16</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <Map center={{ lat: 36.34416288797099, lng: 127.44461677147773 }} style={{ width: "100%", height: "360px" }}>
            <MapMarker position={{ lat: 36.34416288797099, lng: 127.44461677147773 }}></MapMarker>
          </Map>
        </div>
      </div>
    </>
  );
}

export default HomeMap;
