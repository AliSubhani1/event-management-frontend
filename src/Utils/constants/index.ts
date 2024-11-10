export enum ButtonColor {
    DARK_BLUE = 'text-white-0 bg-blue-0 border border-blue-0 hover:opacity-90',
    White = 'text-blue-1 bg-white-0 hover:opacity-80 border border-blue-1',
    Red = 'text-red-0 bg-white-0 hover:opacity-80 border border-red-0',
  }

  export enum Pages {
    Home = '/',
    About = '/about',
    ContactUs = '/contact-us',
    SignUp = '/signup',
    Login = '/login',
  }


  export const navbarItems = [
    {title: 'Home', path: Pages.Home},
    {title: 'About', path: Pages.About},
    {title: 'Contact Us', path: Pages.ContactUs},
]