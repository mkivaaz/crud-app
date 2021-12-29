import { useState } from "react";
import AddUser from "./Component/AddUser";
import TopBar from "./Component/TopBar";
import Users from "./Component/Users";

function App() {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        {/* <AddUser/> */}
      </header>
      
      <Users />
      

    </div>
  );
}

export default App;
