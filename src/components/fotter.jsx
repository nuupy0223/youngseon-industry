import React from "react";
import logo from "../image/LOGO.png";

export default function footer() {
  return (
    <footer className="bg-black pt-12 pb-20 ">
      <form className="area flex items-end justify-between px-28 ">
        <div>
          <div className="flex items-center pb-7">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <span className="text-white text-lg font-semibold pl-2.5">영 선 산 업</span>
          </div>
          <div>
            <div>
              <span className="text-white text-sm font-semibold pr-2.5">주소</span>
              <span className="text-white text-xs">대전 동구 가양 2동 408-7</span>
            </div>
            <div className="py-3.5">
              <span className="text-white text-sm font-semibold pr-2.5">사업자 번호</span>
              <span className="text-white text-xs">305-26-32033</span>
            </div>
            <div className="flex items-center">
              <span className="text-white text-sm font-semibold pr-2.5">제품 및 샘플문의 전화</span>
              <span className="text-white text-xs pr-2.5"> 010-4945-7422</span>
              <div>
                <span className="text-white text-sm font-semibold pr-2.5">팩스</span>
                <span className="text-white text-xs">042-632-4442</span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-white text-xs ">ⓒ 2022 영선산업™.All rights reserved</span>
      </form>
    </footer>
  );
}
