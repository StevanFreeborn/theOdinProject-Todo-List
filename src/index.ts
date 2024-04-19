import './assets/index.css';
import { ids } from './constants/elements';
import Layout from './Layout';
import { navigate, router } from './router';

const root = document.getElementById(ids.ROOT);
root.appendChild(Layout());

window.addEventListener('popstate', router);

document.body.addEventListener(
  'click',
  (e: Event & { target: HTMLElement }) => {
    const link = e.target.closest('a');
    if (link !== null && link.matches('[data-link]')) {
      e.preventDefault();
      navigate(link.href);
    }
  }
);

router();
