import React from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./header/header";
import { FooterLinks } from "./footer/footer";
import { Subgrid } from "./body/body";

function App() {
  const menuitems = [
    {
      link: "/pay",
      label: "결제하기",
    },
  ];

  const footeritems = [
    {
      title: "Website Map",
      links: [
        { label: "홈", link: "https://www.naver.com" },
        { label: "결제하기", link: "https://www.naver.com" },
      ],
    },
  ];

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <HeaderSimple links={menuitems} />
        <Subgrid />
        <FooterLinks data={footeritems} />
      </MantineProvider>
    </>
  );
}

export default App;
