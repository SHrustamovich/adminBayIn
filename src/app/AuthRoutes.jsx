import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";

const AuthRouters = () => {
    return (
        <Routes>
            <Route path='/login' element={LoginPage} />
            <Route path='/' element={<Navigate to={"/login"} replace />} />
            <Route path='*' element={<Navigate to={"/login"} replace />} />
        </Routes>
    );
};
export default AuthRouters;
