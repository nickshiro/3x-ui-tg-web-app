import React, { useEffect } from "react";
import { backButton } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router";

const Add: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    backButton.mount();
    backButton.show();
  });

  const backButtonListener = () => {
    navigate("/");
    backButton.hide();
  };

  useEffect(() => {
    backButton.onClick(backButtonListener);
  });

  return <div>g</div>;
};

export default Add;
