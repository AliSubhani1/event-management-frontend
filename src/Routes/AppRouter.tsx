import { Route, Routes } from 'react-router-dom';
import { Pages } from '../Utils/constants';
import Home from '../Pages/Home';
import AllEvents from '../Pages/AllEvents';
import Contact from '../Pages/Contact';

const AppRouter = () => (
    <Routes>
      <Route
        path={Pages.Home}
        element={
            <Home />
        }
      />
      <Route
        path={Pages.AllEvents}
        element={
            <AllEvents />
        }
      />
      <Route
        path={Pages.ContactUs}
        element={
            <Contact />
        }
      />
      </Routes>
)
export default AppRouter;
