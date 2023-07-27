import React from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./header/header";
import { FooterLinks } from "./footer/footer";
import { Subgrid } from "./body/body";
import { RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import { SuccessPage } from "./pages/Success";
import { FailPage } from "./pages/Fail";

function App() {
  const menuitems = [
    {
      link: "/",
      label: "결제하기",
    },
  ];

  //수정 - 주소 바꾸기
  const footeritems = [
    {
      title: "Website Map",
      links: [
        { label: "홈", link: "/" },
        { label: "결제하기", link: "/" },
      ],
    },
  ];

  return (
    <>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderSimple links={menuitems} />
                  <Subgrid />
                  <FooterLinks data={footeritems} />
                </>
              }
            />
            <Route
              path="/success"
              element={
                <>
                  <HeaderSimple links={menuitems} />
                  <SuccessPage />
                  <FooterLinks data={footeritems} />
                </>
              }
            />
            <Route
              path="/fail"
              element={
                <>
                  <HeaderSimple links={menuitems} />
                  <FailPage />
                  <FooterLinks data={footeritems} />
                </>
              }
            />
            <Route path="/pay" element={<Checkout />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
