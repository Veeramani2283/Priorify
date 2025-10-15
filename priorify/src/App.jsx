import Progresstracker from "./Components/Progresstracker"
import Tasklist from "./Components/Tasklist"
import Taskform from "./Components/Traskform"


export default function App() {
  return(
    <div>
      <h1>PrioriFy</h1>
      <p> Our friendly task manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}