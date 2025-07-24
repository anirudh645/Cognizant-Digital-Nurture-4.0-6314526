
import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div class="App">
      <CalculateScore Name={"Steeve"}
      School={"DNV Public School"}
      total={284}
      goal={3}/>
    </div>
  );
}
export default App;