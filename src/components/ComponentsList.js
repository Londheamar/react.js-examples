import { Calculator } from "./Calculator/Calculator";
import { Counter } from "./Counter/Counter";
import { Home } from "./Home";
import { Meme } from "./MemeGenerator/Meme";
import { UseEffectExample } from "./useEffect/UseEffectExample";
import { ShowBoxes } from "./useState/showBoxes";

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
  calculator: { comp: <Calculator />, heading: "Calculator" },
  meme: { comp: <Meme />, heading: "Meme Generator" },
};
