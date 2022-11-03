import React from "react";
import Designer from "../components/designer";
import Editor from "../components/editor";

import designBack from "../image/designBack.png";

const initial = {
  color: "white",
  designs: [
    {
      label: "main_logo",
      preview: "",
      positions: {
        isDragging: false,
        width: 144,
        height: 139,
        x: 0,
        y: 0,
      },
    },
    {
      label: "setOne_logo",
      preview: "",
      positions: {
        isDragging: false,
        width: 144,
        height: 139,
        x: 0,
        y: 0,
      },
    },
    {
      label: "setTwo_logo",
      preview: "",
      positions: {
        isDragging: false,
        width: 144,
        height: 139,
        x: 0,
        y: 0,
      },
    },
  ],
};

function Design() {
  const [initialItem, setInitialItem] = React.useState(initial);
  const [selected, setSelected] = React.useState(false);
  const [modal, setModal] = React.useState({
    isOpen: false,
    message: "anjay",
  });
  const elStage = React.useRef();

  // React.useEffect(() => {
  //   // console.log(tshirt)
  // }, [])

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelected(false);
    }
  };

  function closeModal() {
    setModal({
      isOpen: false,
      message: null,
    });
  }

  return (
    <div>
      {modal.isOpen && (
        <div className="modal z-10 absolute min-h-screen w-full flex justify-center items-center">
          <div className="z-20 w-1/3 container bg-white p-5 rounded-sm">
            <p className="mb-5">{modal.message}</p>
            <button onClick={() => closeModal()} className="bg-primary w-full rounded-sm text-white p-2 outline-none">
              ok
            </button>
          </div>
          <div onClick={() => closeModal()} className="bg-modal min-h-full absolute w-full"></div>
        </div>
      )}
      <div className="relative mb-20">
        <img src={designBack} alt="design background"></img>
        <div className="px-28 mt-14 mb-20 absolute top-0">
          <p className="text-blue pb-5 text-3xl  font-semibold">디자인</p>
          <p className="pb-2.5">자유롭게 이미지를 넣고 색상을 선택하여</p>
          <p>원하는 상품의 디자인을 손쉽게 구현할 수 있습니다.</p>
        </div>
      </div>
      <div className="mx-28 mb-20">
        <div className="flex">
          <div className="w-full mr-5">
            <p className="mb-6 font-semibold">디자인 미리보기</p>
            <Designer
              selected={selected}
              setSelected={setSelected}
              checkDeselect={checkDeselect}
              elStage={elStage}
              initialItem={initialItem}
              initialOnChange={setInitialItem}
            />
          </div>
          <div className="w-full ml-5">
            <p className="mb-6 font-semibold">색상 선택</p>
            <Editor
              setModal={setModal}
              selected={selected}
              setSelected={setSelected}
              elStage={elStage}
              initialItem={initialItem}
              initialOnChange={setInitialItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
