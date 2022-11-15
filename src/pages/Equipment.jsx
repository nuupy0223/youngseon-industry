import img from "../image/equipment1.png";

function Equipment() {
  return (
      <div className="wrap">
        <div className="eq_bg h-[30vh] md:h-[300px]">
          <div className="area px-3.5 ms:px-0 mb-20">
          <p className="pt-[5rem] text-3xl leading-[2.8rem] text-blue pb-5 font-bold">포트폴리오</p>
            <p className="text-subgray pb-2.5 leading-[1.8rem]">영선산업은 이미지 홍보 단체 상품에 기업의 아이덴티티를 녹여내어<br/>
            외적 이미지 및 기업이 주는 인상에 크게 기여할 수 있는 최상급 품질의 상품을 제작해드립니다.</p>
          </div>
        </div>
        <div className="area pb-12 grid sm:grid-cols-3 sm:gap-8 gap-4 content-start justify-items-stretch px-3.5 md:px-0">
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
            <img src={img} alt="img1" />
        </div>
      </div>
  );
}

export default Equipment;
