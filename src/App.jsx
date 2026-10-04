import { useState } from "react";

import Tabs from "./Tabs";
import TabButton from "./TabButton";

import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import "./App.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
    <>
      <section id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                onActive={selectedTopic === "Home"}
                onClick={() => handleSelect("Home")}
              >
                Home
              </TabButton>
              <TabButton
                onActive={selectedTopic === "About"}
                onClick={() => handleSelect("About")}
              >
                About
              </TabButton>
              <TabButton
                onActive={selectedTopic === "Projects"}
                onClick={() => handleSelect("Projects")}
              >
                Projects
              </TabButton>
            </>
          }
        ></Tabs>
        {selectedTopic}
      </section>
    </>
  );
}

export default App;
