import AddList from './views/AddList';
import ListDetail from './views/ListDetail';
import MyDay from './views/MyDay';
import NotFound from './views/NotFound';

export type ViewProps = {
  pathParams: { [key: string]: string };
  queryParams: { [key: string]: string };
};

type Route = {
  path: string;
  view: (props: ViewProps) => string;
};

type Match = {
  route: Route;
  result: RegExpMatchArray;
};

export function router() {
  const routes: Route[] = [
    { path: '/', view: MyDay },
    { path: '/lists/add', view: AddList },
    { path: '/lists/:id', view: ListDetail },
  ].map(route => {
    route.path = process.env.BASE_PATH + route.path;
    return route;
  });

  // match path from beginning to end
  // escape forward slashes
  // replace path placeholders
  // with capture groups
  const matches: Match[] = routes.map(route => ({
    route,
    result: location.pathname.match(
      new RegExp(
        '^' + route.path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$'
      )
    ),
  }));

  let match = matches.find(match => match.result !== null);

  if (match === null || match === undefined) {
    match = {
      route: {
        path: location.pathname,
        view: NotFound,
      },
      result: [location.pathname],
    };
  }

  const pathParams = [...match.route.path.matchAll(/:(\w+)/g)]
    .map(result => result[1])
    .reduce(
      (prev, curr, i) => ({ ...prev, [curr]: match.result.slice(1)[i] }),
      {}
    );

  const queryString = match.route.path.split('?')[1];
  const queryParams =
    queryString === undefined
      ? {}
      : queryString.split('&').reduce((prev, curr) => {
          const [key, value] = curr.split('=');

          if (key === undefined || value === undefined) {
            return prev;
          }

          return (prev[key] = decodeURIComponent(value.replace(/\+/g, ' ')));
        }, {});

  const view = match.route.view({ pathParams, queryParams });
  document.getElementById('app').innerHTML = view;
}

export function navigate(url: string) {
  history.pushState(null, null, url);
  router();
}
