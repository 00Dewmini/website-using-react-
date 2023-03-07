import "bulma/css/bulma.min.css";
import "./App.css";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import NavBar from "./screens/NavBar";
import Profile from "./screens/Profile";
import Services from "./screens/Services";
import Work from "./screens/Work";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Profile />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
