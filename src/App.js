import { useState } from "react";
import AddUser from "./Component/AddUser";
import Alert from "./Component/Alert";
import TopBar from "./Component/TopBar";
import Users from "./Component/Users";

function App() {
  const [alert, setAlert] = useState(null)
  const [toggleAdd, setToggleAdd] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <TopBar toggleAdd={toggleAdd} setToggleAdd = {setToggleAdd}/>
        {toggleAdd && <AddUser setAlert={setAlert} />}
      </header>
      
      <Users setAlert={setAlert}/>
      {alert && <Alert alert={alert} setAlert = {setAlert} />}

    </div>
  );
}

export default App;
