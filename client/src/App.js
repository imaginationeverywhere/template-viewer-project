import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
import "./App.css";
import { LargeTemplate } from "./components/large-template";
import { Thumbnails } from "./components/thumbnails";

function App() {
  const [currentWindow, setCurrentWindow] = useState(1);
  const [pages, setPages] = useState(null);

  const [templates, setTemplates] = useState([]);
  const [activeTemplate, setActiveTemplate] = useState();
  const [activeThumbnail, setActiveThumbnail] = useState();

  useEffect(() => {
    (async function () {
      try {
        const resp = await fetch(
          `http://localhost:5000/api/v1/templates?page=${currentWindow}`
        );
        const data = await resp.json();
        const currentTemplates = data?.data;
        setPages(data?.meta?.pages);
        setTemplates(currentTemplates);
        setActiveTemplate(currentTemplates[0]);
        setActiveThumbnail(currentTemplates[0]?.thumbnail);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentWindow]);

  return (
    <div>
      <header></header>
      <main>
        <section>
          <LargeTemplate template={activeTemplate} />
          <Thumbnails
            templates={templates}
            setActiveThumbnail={setActiveThumbnail}
            setActiveTemplate={setActiveTemplate}
            activeThumbnail={activeThumbnail}
            currentWindow={currentWindow}
            setCurrentWindow={setCurrentWindow}
            pages={pages}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
