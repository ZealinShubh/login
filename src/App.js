import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
// import SignUp from "./pages/Signup/SignUp";
import useBearStore from "./state/state";
import Header from "./UI/Header/Header";
import Sidebar from "./UI/Sidebar/Sidebar";

function App() {
  const isUserValid = useBearStore((state) => state.isUserValid);

  // return <div>{isUserValid ? <Outlet /> : <Navigate to={"login"} />}</div>;

  return isUserValid ? (
    <div>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default App;
