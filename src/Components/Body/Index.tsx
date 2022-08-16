import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Index";
import RecoverPassword from "../../Pages/RecoverPassword/Index";
import Register from "../../Pages/Register/Index";
import Login from "../../Pages/Login/Index";

function Body() {
  return (
    <BrowserRouter>
      <div /*className={styles.body}*/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Body;
