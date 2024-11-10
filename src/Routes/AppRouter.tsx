import { Route, Routes } from 'react-router-dom';
import { Pages } from '../Utils/constants';
import Home from '../Pages/Home';
const AppRouter = () => (
    <Routes>
      <Route
        path={Pages.Home}
        element={
            <Home />
        }
      />
      </Routes>
)
export default AppRouter;
