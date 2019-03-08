import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};

const Header = () => {
    return (
      <div>
        <h1>Header Component</h1>
        <Nav/>
      </div>
    )
  }

export default Header;
