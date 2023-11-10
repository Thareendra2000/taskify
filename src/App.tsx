import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import TasksList from "./components/tasks/TasksList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CreateTask from "./components/tasks/CreateTask";
import UpdateTask from "./components/tasks/UpdateTask";

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="createTask" element={<CreateTask />} />
        <Route path="updateTask/:id" element={<UpdateTask />} />
      </Routes>
      <Footer />
    </Router>
  </>
  )
}

export default App
