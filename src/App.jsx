import CatCard from "./Components/Card";
import Catdetails from "./Components/Catdetails";
import { Routes, Route } from "react-router";


function App() {
    
   
  return (
    <>
      <h1 className="text-center fw-bolder mt-5 mb-5">Cat Info App</h1>
    
      {/* <Button onClick={HandleRefresh}>Refresh</Button> */}
      <Routes>
        <Route path="/" element={<CatCard />} />
        <Route path = "/cats/:id" element={<Catdetails />} />
      </Routes>
    </>
  );
}

export default App;
