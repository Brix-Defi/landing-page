import { styles } from "./style";
import {
  Home,
  NavBar,
  NavBar2,
  OurTeam,
  Contact,
  WhyMazig,
  OurService,
  Archivements,
} from "./components/layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-blue-500 w-full overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Home />
                  <WhyMazig />
                  <OurTeam />
                  <OurService />
                  {/* <Archivements /> */}
                  <Contact />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
