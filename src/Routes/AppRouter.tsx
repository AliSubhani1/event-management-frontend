import { Route, Routes } from 'react-router-dom';
import { Pages } from '../Utils/constants';
import Home from '../Pages/Home';
import AllEvents from '../Pages/AllEvents';
import Contact from '../Pages/Contact';
import EventDetails from '../Pages/EventDetails';

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
      </Routes>
)
export default AppRouter;
