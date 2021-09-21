import Common from "./components/Common/Common";
import { Marginer } from "./components/Marginer";
import Mission from "./components/Mission/Mission";
import Vision from "./components/Vision/Vision";
import TeamMembers from "./components/TeamMembers/TeamMembers";

function App() {
  return (
    <div className="App">
      <TeamMembers />
      <Marginer direction="vertical" margin="4em" />
      <Mission />
      <Marginer direction="vertical" margin="4em" />
      <Vision />
    </div>
  );
}

export default App;
