import { Route, Routes } from 'react-router-dom';
import { Pages } from '../Utils/constants';
import Home from '../Pages/Home';
import AllEvents from '../Pages/AllEvents';
import Contact from '../Pages/Contact';
import EventDetails from '../Pages/EventDetails';
import ManageEvents from '../Pages/ManageEvents';

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
      <Route
        path={Pages.EventDetails}
        element={
            <EventDetails />
        }
      />
      <Route
        path={Pages.ManageEvents}
        element={
            <ManageEvents />
        }
      />
      </Routes>
)
export default AppRouter;
