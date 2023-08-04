import './assets/index.css';
import { ids } from './constants/elements';
import Layout from './layout';
import { navigate, router } from './router';

const root = document.getElementById(ids.ROOT);
Layout({ parent: root });

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
