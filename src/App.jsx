import { useState } from "react";

import Tabs from "./components/Tabs";
import TabButton from "./components/TabButton";

import "./styles/App.css";

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
