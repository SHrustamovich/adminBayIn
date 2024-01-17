import AppRouter from "./AppRoutes"
import AuthRouters from "./AuthRoutes"

const App = () => {
    const isAuth = false
    return isAuth ? <AppRouter/> : <AuthRouters/>
}

export default App;