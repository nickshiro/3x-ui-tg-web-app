import React, { useEffect } from "react";
import Input from "../../components/Input/Input";
import { useTelegram } from "../../hooks/useTelegram";

// Components
import Header from "../Header/Header";
import Subtitle from "../Subtitle/Subtitle";

const AddDevice: React.FC = () => {
  const { tg } = useTelegram();

  tg.MainButton.show();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Добавить устройство",
    });
  });

  useEffect(() => {
    tg.onEvent("mainButtonClicked", () => {
      window.location.href = "/add";
    });
  });

  return (
    <div>
      {/* <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Add
        </button> */}
      <Header>Добавьте устройство</Header>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        soluta voluptas maiores dolorum possimus delectus amet, earum quos
        voluptatem? Perferendis autem consequatur porro quod, officiis quae
        molestiae quos nostrum unde.
      </Subtitle>
      <Input />
    </div>
  );
};

export default AddDevice;
