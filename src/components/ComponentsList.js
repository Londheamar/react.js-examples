import { Calculator } from "./Calculator/Calculator";
import { Counter } from "./Counter/Counter";
import { Home } from "./Home";
import { Meme } from "./MemeGenerator/Meme";
import { UseEffectExample } from "./useEffect/UseEffectExample";
import { ShowBoxes } from "./useState/showBoxes";
import { SignUp } from "./SignUp/SignUp";
import { NoteApp } from "./NoteApp/NoteApp";
import { DarkNightMode } from "./DarkLightMode/DarkNightMode";

export const componentsList = {
  home: {
    comp: <Home />,
    heading: "Home",
  },
  error: {
    comp: "Sorry, This function is not created...",
    heading: "Error",
  },
  counter: { comp: <Counter />, heading: "Counter" },
  useState: { comp: <ShowBoxes />, heading: "UseState Example" },
  useEffect: { comp: <UseEffectExample />, heading: "UseEffect Example" },
  signup: { comp: <SignUp />, heading: "Sign Up - Form Example" },
  "meme generator": { comp: <Meme />, heading: "Meme Generator" },
  "note app": { comp: <NoteApp />, heading: "Meme Generator" },
  "dark night mode": { comp: <DarkNightMode />, heading: "Meme Generator" },
  calculator: { comp: <Calculator />, heading: "Calculator" },
};
