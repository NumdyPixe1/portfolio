import "./App.css";
import ActivitiePage from "./components/activitie";
import ExperiencePage from "./components/Experience";
import MainPage from "./components/Main";
import WorkPage from "./components/Work";

function App() {
  return (
    <>
      <MainPage />
      <ActivitiePage />
      <ExperiencePage />
      <WorkPage />

      <footer>
        <span>NUMDAO / 2026</span>
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
