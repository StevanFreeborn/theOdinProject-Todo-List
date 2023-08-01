import Layout from './Layout.js';
import { navigate, router } from './router.js';

const root = document.getElementById('root');
root.innerHTML = Layout();

window.addEventListener('popstate', router);

document.body.addEventListener(
  'click',
  (e: Event & { target: HTMLAnchorElement }) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigate(e.target.href);
    }
  }
);

router();
