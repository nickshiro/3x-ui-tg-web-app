import React from "react";
import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";

// Components
import Input from "../../components/Input/Input";

const Home: React.FC = () => {
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
      <button>Главная страница</button>
      <Input />
    </div>
  );
};

export default Home;
