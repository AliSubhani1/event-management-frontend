import { Route, Routes } from 'react-router-dom';
import { Navigation } from '../Utils/constants';
import Dashboard from '../Pages/Home';
const AppRouter = () => (
    <Routes>
      <Route
        path={Navigation.DASHBOARD}
        element={
            <Dashboard/>
        }
      />
      </Routes>
)
export default AppRouter;
