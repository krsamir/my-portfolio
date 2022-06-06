import "./App.css";
import "./Assets/Font/static/JetBrainsMono-Regular.ttf";
import Skill from "./Components/skills/Skill";
import Project from "./Components/Projects/Project";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div>
      <div>
        <Skill />
        <Project />
      </div>
    </div>
  );
}

export default App;
