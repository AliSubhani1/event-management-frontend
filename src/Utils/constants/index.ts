export enum ButtonColor {
    DARK_BLUE = 'text-white-0 bg-blue-0 border border-blue-0 hover:opacity-90',
    White = 'text-blue-1 bg-white-0 hover:opacity-80 border border-blue-1',
    Red = 'text-red-0 bg-white-0 hover:opacity-80 border border-red-0',
  }

  export enum Pages {
    Home = '/',
    ContactUs = '/contact-us',
    SignUp = '/signup',
    Login = '/login',
    AllEvents = '/all-events',
    EventDetails = '/event-details/:eventId',
    ManageEvents = '/manage-events',
  }

  export const navbarItems = [
    {title: 'Home', path: Pages.Home},
    {title: 'Manage', path: Pages.ManageEvents},
    {title: 'Contact Us', path: Pages.ContactUs},
]

export const BASE_URL = 'http://16.170.65.191/'