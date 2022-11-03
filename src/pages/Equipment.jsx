import img from "../image/equipment1.png";

function Equipment() {
  return (
    <div className="px-28 mt-14 mb-20">
      <div className="mb-20">
        <p className="text-blue pb-5 text-3xl font-semibold">포트폴리오</p>
        <p className="pb-2.5">영선산업은 이미지 홍보 단체 상품에 기업의 아이덴티티를 녹여내어</p>
        <p>외적 이미지 및 기업이 주는 인상에 크게 기여할 수 있는 최상급 품질의 상품을 제작해드립니다.</p>
      </div>
      <div className="flex justify-between mb-20">
        <img src={img} alt="img1" />
        <img src={img} alt="img1" />
        <img src={img} alt="img1" />
      </div>
      <div className="flex justify-between mb-20">
        <img src={img} alt="img1" />
        <img src={img} alt="img1" />
        <img src={img} alt="img1" />
      </div>
      <div className="flex justify-between mb-20">
        <img src={img} alt="img1" />
        <img src={img} alt="img1" />
        <img src={img} alt="img1" />
      </div>
    </div>
  );
}

export default Equipment;
