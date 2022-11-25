import { Layout } from "antd";
import React from "react";
import { useMatchMedia } from "../../hook";
import { SiderMenu, Footer, HeaderMenu } from "../index";
const { Content } = Layout;

export default function LayoutSiglepage({ children }) {
  let isMobileResolution = useMatchMedia("(min-width:725px)", true);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        {isMobileResolution ? <></> : <SiderMenu />}

        <Layout className="site-layout">
          {isMobileResolution ? <HeaderMenu /> : <></>}

          <Content style={{ overflow: "initial", marginTop: "2rem" }}>
            <div className="site-layout-background">{children}</div>
          </Content>
          <section>
            <Footer style={{ textAlign: "center" }}></Footer>
          </section>
        </Layout>
      </Layout>
    </>
  );
}
