import React from "react";
import logo from "./images/logougb.png";
import "./App.css";
import { Layout } from "antd";
const { Header } = Layout;

function App(props) {
  const { params } = props.match;
  return (
    <>
      <Layout>
        <Header className="header-ugb">
          <img src={logo} alt="Logo UGB" className="logo" />
        </Header>
        <iframe
          title="Videoconferencia"
          src={`https://meet.jit.si/${params.id}`}
          allow="camera;microphone"
          className="videoconferencia"
        ></iframe>
      </Layout>
    </>
  );
}

export default App;
