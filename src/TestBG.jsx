import React, { useEffect } from "react";
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";

import "./App.css";
const SLIDE_CHANGE_TIME_MS = 5000;

function TestBG() {
  const [currentScene, setCurrentScene] = useCycle(
    hedgehogScene,
    raccoonScene,
    squirrelScene
  );

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <div className="hero">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        className="animal-image animal-image__one"
      />
      <ImageHolder
        img={currentScene.image2}
        className="animal-image animal-image__two"
      />
      <ImageHolder
        img={currentScene.image3}
        className="animal-image animal-image__three"
      />
    </div>
  );
}

export default TestBG;