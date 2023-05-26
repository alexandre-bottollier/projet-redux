import TaskList from "./component/TaskList/index.jsx";
import AddTask from "./component/AddTask/index.jsx";
import Nav from "./component/Nav/index.jsx";
import {Routes, Route} from "react-router-dom";

import './App.css'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
          <Route path={'/'} element={<AddTask />} />
          <Route path={'/list'} element={<TaskList />} />
      </Routes>
    </div>
  )
}

export default App
