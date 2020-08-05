import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Menu } from "semantic-ui-react";
import { store } from "../store/store";
import Jumper from "../utils/Jumper";

const menuData = [
  {
    label: "Home",
    loc: "Home",
  },
  {
    label: "Last Night",
    loc: "LastNight",
  },
  {
    label: "Apparatus",
    loc: "Apparatus",
  },
  {
    label: "Between",
    loc: "Between"
  },
  {
    label: "Beast",
    loc: "Beast"
  },

  {
    label: "Technology",
    loc:"technology"
  },
];

const CoreMenu = () => {
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const activeLabel = globalState.state.menu;

  const handleClick = (label) => {
    dispatch({ type: "menuUpdate", payload: { menu: label } });
    const item = menuData.find((item) => item.label === label);
    if (!item) return;
    if (item.loc) Jumper.getInstance().jumpTo(item.loc,history);
  }

  const items = menuData.map((item, i) => (
    <Menu.Item
      as="a"
      key={item.label}
      active={item.label === activeLabel}
      onClick={() => {
        handleClick(item.label);
      }}
    >
      {item.label}
    </Menu.Item>
  ));
  return <>{items}</>;
};

export default CoreMenu;
