import { MyContextProvider } from "../MyContext";
import AddNewPost from "./AddNewPost";
import PostContainr from "./PostContainr";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglPost from "./SinglPost";

function App() {
  return (
  <MyContextProvider>
    <Router>
      <Routes>
        <Route path="/post/:id" element={<SinglPost></SinglPost>}></Route>
        <Route path="/" element={<><AddNewPost></AddNewPost> <PostContainr/></>}></Route>
      </Routes>
      </Router>
  </MyContextProvider>
  );
}


export default App;
