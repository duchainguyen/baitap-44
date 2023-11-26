import { renderPage, routerNa } from "./src/Utils/Router.js";
import { App } from "./src/App.js";

const { root: roots, DefaultLayout } = App();
const app = document.querySelector("#app");

const render = (component, DefaultLayout, params = null) => {
  app.innerHTML = DefaultLayout.replace(
    /{body}/,
    params ? component(params) : component()
  );
};

roots.forEach(({ path, component }) => {
  routerNa.on(path, (params) => render(component, DefaultLayout, params));
});

routerNa.notFound(() => (app.innerHTML = Error())).resolve();
