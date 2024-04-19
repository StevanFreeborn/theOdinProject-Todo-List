/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 810:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* BEGIN RESETS */

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

img {
  max-width: 100%;
  display: block;
}

table {
  width: 100%;
  border-collapse: collapse;
}

/* END RESETS */

* {
  font-family: 'Roboto', sans-serif;
}

html,
body,
#root {
  height: 100%;
}

input#dueDate::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

input#dueDate::-webkit-datetime-edit-month-field:focus,
input#dueDate::-webkit-datetime-edit-day-field:focus,
input#dueDate::-webkit-datetime-edit-year-field:focus {
  background-color: #424242;
}`, "",{"version":3,"sources":["webpack://./src/assets/index.css"],"names":[],"mappings":"AAEA,iBAAiB;;AAEjB;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA,eAAe;;AAEf;EACE,iCAAiC;AACnC;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;;EAGE,yBAAyB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n/* BEGIN RESETS */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\n/* END RESETS */\r\n\r\n* {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  height: 100%;\r\n}\r\n\r\ninput#dueDate::-webkit-calendar-picker-indicator {\r\n  filter: invert(1);\r\n  cursor: pointer;\r\n}\r\n\r\ninput#dueDate::-webkit-datetime-edit-month-field:focus,\r\ninput#dueDate::-webkit-datetime-edit-day-field:focus,\r\ninput#dueDate::-webkit-datetime-edit-year-field:focus {\r\n  background-color: #424242;\r\n}"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./src/assets/index.css
var assets = __webpack_require__(810);
;// CONCATENATED MODULE: ./src/constants/elements.ts
const ids = {
    ROOT: 'root',
    PRIMARY_NAV_LIST: 'primaryNavList',
    MY_LISTS_CONTAINER: 'myListsContainer',
    MY_LISTS: 'myLists',
    ADD_LIST_FORM: 'addListForm',
    ADD_TASK_FORM: 'addTaskForm',
    TODO_CARD_DETAILS: 'todoCard',
    TOGGLE_SIDEBAR_BUTTON: 'toggleSidebarButton',
    NAV_HEADING: 'navHeading',
};

;// CONCATENATED MODULE: ./src/utils/styles.ts
function camelToKebab(camelCaseString) {
    return camelCaseString.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function inlineStyles(styles) {
    return Object.keys(styles).reduce((inlineStyles, property) => {
        const value = styles[property];
        if (value !== undefined && value !== null) {
            return `${inlineStyles}${camelToKebab(property)}:${value};`;
        }
        return inlineStyles;
    }, '');
}

;// CONCATENATED MODULE: ./src/components/HamburgerIcon.ts
function HamburgerIcon({ width, height, fill, }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('fill', fill);
    svg.setAttribute('viewBox', `0 0 16 16`);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z');
    svg.appendChild(path);
    return svg;
}

;// CONCATENATED MODULE: ./src/data/context.ts
function context() {
    const LISTS_KEY = 'lists';
    const TODOS_KEY = 'todos';
    function getItem({ key }) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function reviver(key, value) {
            if (key === 'dueDate' && typeof value === 'string') {
                return new Date(value);
            }
            return value;
        }
        return JSON.parse(localStorage.getItem(key), reviver);
    }
    function setItem({ key, item }) {
        localStorage.setItem(key, JSON.stringify(item));
    }
    let _lists = getItem({ key: LISTS_KEY });
    let _todos = getItem({ key: TODOS_KEY });
    if (_lists == null) {
        setItem({ key: LISTS_KEY, item: [] });
        _lists = getItem({ key: LISTS_KEY });
    }
    if (_todos == null) {
        setItem({ key: TODOS_KEY, item: [] });
        _todos = getItem({ key: TODOS_KEY });
    }
    return {
        get lists() {
            return {
                add: ({ list }) => {
                    _lists.push(list);
                    setItem({ key: LISTS_KEY, item: _lists });
                },
                findOne: (predicate) => {
                    return _lists.find(predicate);
                },
                findMany: (predicate) => {
                    return _lists.filter(predicate);
                },
            };
        },
        get todos() {
            return {
                add: ({ todo }) => {
                    _todos.push(todo);
                    setItem({ key: TODOS_KEY, item: _todos });
                },
                find: (predicate) => {
                    return _todos.find(predicate);
                },
                findMany: (predicate) => {
                    return _todos.filter(predicate);
                },
                findAndReplace: (predicate, todo) => {
                    const index = _todos.findIndex(predicate);
                    if (index === -1) {
                        return;
                    }
                    _todos[index] = todo;
                    setItem({ key: TODOS_KEY, item: _todos });
                },
                findAndRemove: (predicate) => {
                    const index = _todos.findIndex(predicate);
                    if (index === -1) {
                        return;
                    }
                    _todos.splice(index, 1);
                    setItem({ key: TODOS_KEY, item: _todos });
                },
            };
        },
    };
}

;// CONCATENATED MODULE: ./src/services/listService.ts

function listService() {
    const _context = context();
    function addList({ list }) {
        const existingList = _context.lists.findOne(l => l.name === list.name);
        if (existingList !== undefined) {
            throw Error(`A list already exists with the name ${list.name}`);
        }
        _context.lists.add({ list });
    }
    function getListById({ id }) {
        return _context.lists.findOne(l => l.id === id);
    }
    function getAllLists() {
        return _context.lists.findMany(l => l !== null);
    }
    return {
        addList,
        getListById,
        getAllLists,
    };
}

;// CONCATENATED MODULE: ./src/components/Link.ts
function Link({ linkText, href, styles }) {
    // if href is an absolute one append
    // the envs base path.
    const hrefText = /^\//.test(href) ? "/theOdinProject-Todo-List" + href : href;
    const link = document.createElement('a');
    link.title = linkText;
    link.href = hrefText;
    link.style.cssText = styles;
    link.dataset.link = 'true';
    link.text = linkText;
    return link;
}

;// CONCATENATED MODULE: ./src/components/NavListItem.ts


function NavListItem({ linkText, href, }) {
    const navLinkStyles = inlineStyles({
        color: '#ffffff',
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'block',
        padding: '0.25rem 1rem',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    });
    const navItem = document.createElement('li');
    navItem.appendChild(Link({ linkText, href, styles: navLinkStyles }));
    return navItem;
}

;// CONCATENATED MODULE: ./src/components/MyLists.ts





function MyLists() {
    const container = MyListContainer();
    container.append(MyListTitle());
    container.append(List());
    return container;
    function MyListContainer() {
        const myListContainer = document.createElement('div');
        myListContainer.id = ids.MY_LISTS_CONTAINER;
        return myListContainer;
    }
    function MyListTitle() {
        const container = document.createElement('div');
        container.style.cssText = inlineStyles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0rem 1rem',
            color: '#ffffff',
            whiteSpace: 'nowrap',
        });
        const title = document.createElement('div');
        title.innerText = 'My Lists';
        title.style.cssText = inlineStyles({
            fontSize: '1.15rem',
            fontWeight: 'bold',
        });
        const addListLinkStyles = inlineStyles({
            fontSize: '1.25rem',
            fontWeight: 'bold',
        });
        container.appendChild(title);
        container.appendChild(Link({
            linkText: '+',
            href: '/lists/add',
            styles: addListLinkStyles,
        }));
        function handleContainerMouseOver(e) {
            if (e.target.matches('a')) {
                e.target.style.color = '#0093E9';
            }
        }
        function handleContainerMouseOut(e) {
            if (e.target.matches('a')) {
                e.target.style.color = '';
            }
        }
        container.addEventListener('mouseover', handleContainerMouseOver);
        container.addEventListener('mouseout', handleContainerMouseOut);
        return container;
    }
    function List() {
        function renderNavLinkItems() {
            const { getAllLists } = listService();
            const allLists = getAllLists();
            const myListItems = allLists.map(list => ({
                linkText: list.name,
                href: `/lists/${list.id}`,
            }));
            list.innerHTML = '';
            const items = myListItems.map(item => NavListItem({ linkText: item.linkText, href: item.href }));
            list.append(...items);
        }
        const list = document.createElement('ul');
        list.id = ids.MY_LISTS;
        list.style.cssText = inlineStyles({
            display: 'flex',
            flexDirection: 'column',
        });
        renderNavLinkItems();
        function handleListUpdated() {
            renderNavLinkItems();
        }
        function handleMyListMouseOver(e) {
            if (e.target.matches('a')) {
                e.target.style.backgroundColor = '#0093E9';
            }
        }
        function handleMyListMouseOut(e) {
            if (e.target.matches('a')) {
                e.target.style.backgroundColor = '';
            }
        }
        document.addEventListener('listsUpdated', handleListUpdated);
        list.addEventListener('mouseover', handleMyListMouseOver);
        list.addEventListener('mouseout', handleMyListMouseOut);
        return list;
    }
}

;// CONCATENATED MODULE: ./src/components/Sidebar.ts





function SideBar() {
    const primaryNavLinkItems = [
        { linkText: 'Inbox', href: '/' },
        { linkText: 'My Day', href: '/my-day' },
        {
            linkText: 'Next 7 Days',
            href: `/next-seven-days`,
        },
        { linkText: 'All my tasks', href: '/tasks' },
    ];
    const aside = Aside();
    const navHeader = NavHeader();
    const navHeading = navHeader.querySelector(`#${ids.NAV_HEADING}`);
    const nav = Nav();
    const myLists = MyLists();
    myLists.style.transition = 'transform 0.3s ease-in-out';
    function hideSidebar() {
        aside.style.width = '40px';
        navHeader.style.justifyContent = 'center';
        navHeading.style.transform = 'scaleX(0)';
        nav.style.transform = 'scaleX(0)';
        myLists.style.transform = 'scaleX(0)';
        function hideElement(e) {
            e.target.style.display = 'none';
            e.target.removeEventListener('transitionend', hideElement);
        }
        navHeading.addEventListener('transitionend', hideElement);
        nav.addEventListener('transitionend', hideElement);
        myLists.addEventListener('transitionend', hideElement);
    }
    function showSidebar() {
        aside.style.width = '200px';
        navHeader.style.justifyContent = 'space-between';
        navHeading.style.display = '';
        nav.style.display = '';
        myLists.style.display = '';
        navHeading.style.transform = 'scaleX(1)';
        nav.style.transform = 'scaleX(1)';
        myLists.style.transform = 'scaleX(1)';
    }
    function handleToggleButtonClick(e) {
        const button = e.target.closest('button');
        if (button === null || button.id !== ids.TOGGLE_SIDEBAR_BUTTON) {
            return;
        }
        aside.style.width === '200px' ? hideSidebar() : showSidebar();
    }
    navHeader.addEventListener('click', handleToggleButtonClick);
    if (window.innerWidth < 1000) {
        aside.style.width = '40px';
        navHeader.style.justifyContent = 'center';
        navHeading.style.display = 'none';
        nav.style.display = 'none';
        myLists.style.display = 'none';
    }
    aside.appendChild(navHeader);
    aside.appendChild(nav);
    aside.appendChild(myLists);
    return aside;
    function Aside() {
        const aside = document.createElement('aside');
        aside.style.cssText = inlineStyles({
            width: '200px',
            backgroundColor: '#424242',
            overflow: 'auto',
            transition: 'width 0.3s ease-in-out',
        });
        return aside;
    }
    function NavHeader() {
        const container = document.createElement('div');
        container.style.cssText = inlineStyles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            color: '#ffffff',
        });
        const heading = document.createElement('div');
        heading.id = ids.NAV_HEADING;
        heading.innerText = 'Get It Done';
        heading.style.cssText = inlineStyles({
            fontWeight: 'bold',
            fontSize: '1.5rem',
            transition: 'transform 0.3s ease-in-out',
            whiteSpace: 'nowrap',
        });
        const toggleButton = document.createElement('button');
        toggleButton.id = ids.TOGGLE_SIDEBAR_BUTTON;
        toggleButton.type = 'button';
        toggleButton.style.cssText = inlineStyles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
        });
        toggleButton.appendChild(HamburgerIcon({ width: 20, height: 20, fill: 'currentColor' }));
        container.appendChild(heading);
        container.appendChild(toggleButton);
        return container;
    }
    function Nav() {
        const nav = document.createElement('nav');
        nav.style.cssText = inlineStyles({
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem 0rem',
            transition: 'transform 0.3s ease-in-out',
        });
        const navList = NavList();
        nav.appendChild(navList);
        return nav;
    }
    function NavList() {
        const navList = document.createElement('ul');
        navList.id = ids.PRIMARY_NAV_LIST;
        navList.style.cssText = inlineStyles({
            display: 'flex',
            flexDirection: 'column',
        });
        const items = primaryNavLinkItems.map(item => NavListItem({
            linkText: item.linkText,
            href: item.href,
        }));
        navList.append(...items);
        function handleNavListMouseOver(e) {
            if (e.target.matches('a')) {
                e.target.style.backgroundColor = '#0093E9';
            }
        }
        function handleNavListMouseOut(e) {
            if (e.target.matches('a')) {
                e.target.style.backgroundColor = '';
            }
        }
        navList.addEventListener('mouseover', handleNavListMouseOver);
        navList.addEventListener('mouseout', handleNavListMouseOut);
        return navList;
    }
}

;// CONCATENATED MODULE: ./src/layout.ts


function Layout() {
    const main = document.createElement('main');
    main.id = 'app';
    main.style.cssText = inlineStyles({
        flex: '1',
        padding: '1rem',
        backgroundColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #0093E9',
    });
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
        height: '100%',
        display: 'flex',
    });
    container.appendChild(SideBar());
    container.appendChild(main);
    return container;
}

;// CONCATENATED MODULE: ./src/components/AddButton.ts

function AddButton() {
    const button = document.createElement('button');
    button.innerText = 'Add';
    button.type = 'submit';
    button.style.cssText = inlineStyles({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ffffff',
        borderRadius: '0.25rem',
        padding: '0.25rem 1rem',
        color: '#ffffff',
    });
    function handleButtonMouseOver() {
        button.style.backgroundColor = '#2b2a2a';
    }
    function handleButtonMouseOut() {
        button.style.backgroundColor = 'inherit';
    }
    button.addEventListener('mouseover', handleButtonMouseOver);
    button.addEventListener('mouseout', handleButtonMouseOut);
    return button;
}

;// CONCATENATED MODULE: ./src/components/CancelButton.ts

function CancelButton() {
    const cancelButton = document.createElement('button');
    cancelButton.style.cssText = inlineStyles({
        color: '#ffffff',
    });
    cancelButton.innerText = 'Cancel';
    cancelButton.type = 'button';
    function handleCancelClick() {
        history.back();
    }
    cancelButton.addEventListener('click', handleCancelClick);
    return cancelButton;
}

;// CONCATENATED MODULE: ./src/components/FormInputGroup.ts
function FormInputGroup(props) {
    const container = document.createElement('div');
    container.style.cssText = props.containerStyles;
    const label = document.createElement('label');
    label.htmlFor = props.inputId;
    label.innerText = props.labelText;
    label.style.cssText = props.labelStyles;
    const input = document.createElement('input');
    input.id = props.inputId;
    input.name = props.inputName;
    input.type = props.inputType;
    input.style.cssText = props.inputStyles;
    container.appendChild(label);
    container.appendChild(input);
    return container;
}

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./src/utils/id.ts

function generateId() {
    return esm_browser_v4();
}

;// CONCATENATED MODULE: ./src/utils/strings.ts
function isNullOrWhiteSpace({ str }) {
    return !str || str.trim() === '';
}
function camelCaseToTitleCase({ str }) {
    // add space before upper case letters
    // replace first character with upper case
    return str
        .replace(/([A-Z])/g, match => ` ${match}`)
        .replace(/^./, match => match.toUpperCase())
        .trim();
}

;// CONCATENATED MODULE: ./src/models/list.ts


function createList({ name }) {
    function validateName({ name }) {
        if (isNullOrWhiteSpace({ str: name })) {
            throw new Error('Name is required');
        }
        if (name.length > 150) {
            throw new Error('Name cannot be longer than 150 characters');
        }
        return name;
    }
    const _id = generateId();
    let _name = validateName({ name });
    return {
        get id() {
            return _id;
        },
        get name() {
            return _name;
        },
        set name(name) {
            _name = validateName({ name });
        },
    };
}

;// CONCATENATED MODULE: ./src/views/AddList.ts








function AddList(props) {
    props.parent.appendChild(AddListForm());
    function AddListForm() {
        const form = document.createElement('form');
        form.style.cssText = inlineStyles({
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
            backgroundColor: '#424242',
            width: 'min-content',
        });
        form.id = ids.ADD_LIST_FORM;
        const nameInputGroup = FormInputGroup({
            containerStyles: inlineStyles({
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
            }),
            labelText: 'Name',
            labelStyles: inlineStyles({
                color: '#ffffff',
                paddingLeft: '0.25rem',
            }),
            inputId: 'name',
            inputName: 'name',
            inputType: 'text',
            inputStyles: inlineStyles({
                fontSize: '1rem',
                padding: '0.25rem',
                outline: 'none',
                backgroundColor: 'inherit',
                color: '#ffffff',
                border: '1px solid #2b2a2a',
                borderRadius: '0.25rem',
            }),
        });
        const nameInput = nameInputGroup.querySelector('input');
        function handleInputFocus() {
            nameInput.style.backgroundColor = '#2b2a2a';
        }
        function handleInputBlur() {
            nameInput.style.backgroundColor = 'inherit';
        }
        nameInput.addEventListener('focus', handleInputFocus);
        nameInput.addEventListener('blur', handleInputBlur);
        form.appendChild(nameInputGroup);
        form.appendChild(Buttons());
        function handleFormSubmit(event) {
            event.preventDefault();
            const { name } = Object.fromEntries(new FormData(event.target));
            if (name instanceof Object) {
                throw Error('Name is expected to be a string');
            }
            try {
                const list = createList({ name });
                const { addList } = listService();
                addList({ list });
                document.dispatchEvent(new Event('listsUpdated'));
                document.removeEventListener('submit', handleFormSubmit);
                router_navigate(`/lists/${list.id}`);
            }
            catch (error) {
                if (error instanceof Error) {
                    alert(error.message);
                }
            }
        }
        form.addEventListener('submit', handleFormSubmit);
        return form;
    }
    function Buttons() {
        const container = document.createElement('div');
        container.style.cssText = inlineStyles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingLeft: '0.25rem',
        });
        const cancelButton = CancelButton();
        const addButton = AddButton();
        container.appendChild(cancelButton);
        container.appendChild(addButton);
        return container;
    }
}

;// CONCATENATED MODULE: ./src/components/FormSelectGroup.ts
function FormSelectGroup(props) {
    const container = document.createElement('div');
    container.style.cssText = props.containerStyles;
    const label = document.createElement('label');
    label.innerText = props.labelText;
    label.htmlFor = props.selectId;
    label.style.cssText = props.labelStyles;
    const select = document.createElement('select');
    select.id = props.selectId;
    select.name = props.selectName;
    select.style.cssText = props.selectStyles;
    props.options
        .map(o => {
        const option = document.createElement('option');
        option.style.cssText = o.styles;
        option.value = o.value;
        option.text = o.valueText;
        option.disabled = o.disabled ? true : false;
        option.selected = o.selected ? true : false;
        return option;
    })
        .forEach(o => select.appendChild(o));
    container.appendChild(label);
    container.appendChild(select);
    return container;
}

;// CONCATENATED MODULE: ./src/components/FormTextAreaGroup.ts
function FormTextAreaGroup(props) {
    const container = document.createElement('div');
    container.style.cssText = props.containerStyles;
    const label = document.createElement('label');
    label.innerText = props.labelText;
    label.style.cssText = props.labelStyles;
    const textarea = document.createElement('textarea');
    textarea.id = props.textAreaId;
    textarea.name = props.textAreaId;
    textarea.value = props.textAreaValue ? props.textAreaValue : '';
    textarea.style.cssText = props.textAreaStyles;
    container.appendChild(label);
    container.appendChild(textarea);
    return container;
}

;// CONCATENATED MODULE: ./src/models/todo.ts


var Priority;
(function (Priority) {
    Priority["High"] = "High";
    Priority["Medium"] = "Medium";
    Priority["Low"] = "Low";
})(Priority || (Priority = {}));
function createTodo({ listId, title, description, dueDate, priority, }) {
    function validateTitle({ title }) {
        if (isNullOrWhiteSpace({ str: title })) {
            throw new Error('Title is required');
        }
        if (title.length > 150) {
            throw new Error('Title cannot be longer than 150 characters');
        }
        return title;
    }
    function validateDescription({ description }) {
        if (description.length > 255) {
            throw new Error('Description cannot be longer than 255 characters');
        }
        return description;
    }
    function validateDueDate({ dueDate }) {
        return dueDate;
    }
    function validatePriority({ priority }) {
        const priorityEnum = Priority[priority];
        if (priorityEnum === undefined) {
            throw new Error('Priority must be High, Medium, or Low');
        }
        return priorityEnum;
    }
    let _listId = listId;
    const _id = generateId();
    let _title = validateTitle({ title });
    let _description = validateDescription({ description });
    let _dueDate = validateDueDate({ dueDate });
    let _priority = validatePriority({ priority });
    let _complete = false;
    return {
        get listId() {
            return _listId;
        },
        set listId(listId) {
            _listId = listId;
        },
        get id() {
            return _id;
        },
        get title() {
            return _title;
        },
        set title(title) {
            _title = validateTitle({ title });
        },
        get description() {
            return _description;
        },
        set description(description) {
            _description = validateDescription({ description });
        },
        get dueDate() {
            return _dueDate;
        },
        set dueDate(dueDate) {
            _dueDate = validateDueDate({ dueDate });
        },
        get priority() {
            return _priority;
        },
        set priority(priority) {
            _priority = validatePriority({ priority });
        },
        get complete() {
            return _complete;
        },
        set complete(complete) {
            _complete = complete;
        },
    };
}

;// CONCATENATED MODULE: ./src/services/todoService.ts

function todoService() {
    const _context = context();
    function updateTodo({ todo }) {
        _context.todos.findAndReplace(t => t.id === todo.id, todo);
    }
    function addTodo({ todo }) {
        _context.todos.add({ todo });
    }
    function getInboxTodos() {
        return _context.todos.findMany(t => t.listId === undefined);
    }
    function getTodosByListId({ listId }) {
        return _context.todos.findMany(t => t.listId === listId);
    }
    function getTodoById({ todoId }) {
        return _context.todos.find(t => t.id === todoId);
    }
    function deleteTodoById({ todoId }) {
        _context.todos.findAndRemove(t => t.id === todoId);
    }
    return {
        addTodo,
        getInboxTodos,
        getTodosByListId,
        updateTodo,
        getTodoById,
        deleteTodoById,
    };
}

;// CONCATENATED MODULE: ./src/views/AddTask.ts











function AddTask(props) {
    const { listId } = props.queryParams;
    props.parent.appendChild(AddTaskForm());
    function AddTaskForm() {
        const form = document.createElement('form');
        form.id = ids.ADD_TASK_FORM;
        form.style.cssText = inlineStyles({
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
            backgroundColor: '#424242',
            maxWidth: '600px',
            height: '100%',
        });
        function formGroupContainerStyles() {
            return inlineStyles({
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
            });
        }
        function formLabelStyles() {
            return inlineStyles({
                color: '#ffffff',
            });
        }
        function formInputStyles() {
            return inlineStyles({
                fontSize: '1rem',
                padding: '0.25rem',
                outline: 'none',
                backgroundColor: 'inherit',
                color: '#ffffff',
                border: '1px solid #2b2a2a',
                borderRadius: '0.25rem',
            });
        }
        function formOptionStyles() {
            return inlineStyles({
                padding: '1rem',
                backgroundColor: '#424242',
                color: '#ffffff',
                fontSize: '0.85rem',
            });
        }
        const titleInputGroup = FormInputGroup({
            containerStyles: formGroupContainerStyles(),
            labelText: 'Title',
            labelStyles: formLabelStyles(),
            inputId: 'title',
            inputName: 'title',
            inputType: 'text',
            inputStyles: formInputStyles(),
        });
        const titleInput = titleInputGroup.querySelector('input');
        const descriptionTextAreaGroup = FormTextAreaGroup({
            containerStyles: formGroupContainerStyles() + 'flex:1;',
            labelText: 'Description',
            labelStyles: formLabelStyles(),
            textAreaId: 'description',
            textAreaName: 'description',
            textAreaStyles: inlineStyles({
                fontSize: '1rem',
                padding: '0.25rem',
                outline: 'none',
                backgroundColor: 'inherit',
                color: '#ffffff',
                border: '1px solid #2b2a2a',
                borderRadius: '0.25rem',
                resize: 'none',
                height: '100%',
            }),
        });
        const descriptionTextArea = descriptionTextAreaGroup.querySelector('textarea');
        const dueDateInputGroup = FormInputGroup({
            containerStyles: formGroupContainerStyles(),
            labelText: 'Due Date',
            labelStyles: formLabelStyles(),
            inputId: 'dueDate',
            inputName: 'dueDate',
            inputType: 'date',
            inputStyles: formInputStyles(),
        });
        const dueDateInput = dueDateInputGroup.querySelector('input');
        const prioritySelectGroup = FormSelectGroup({
            containerStyles: formGroupContainerStyles(),
            labelText: 'Priority',
            labelStyles: formLabelStyles(),
            selectId: 'priority',
            selectName: 'priority',
            selectStyles: formInputStyles(),
            options: [
                {
                    valueText: 'Select a priority',
                    selected: true,
                    disabled: true,
                    styles: formOptionStyles(),
                },
                {
                    valueText: 'Low',
                    value: 'Low',
                    styles: formOptionStyles(),
                },
                {
                    valueText: 'Medium',
                    value: 'Medium',
                    styles: formOptionStyles(),
                },
                {
                    valueText: 'High',
                    value: 'High',
                    styles: formOptionStyles(),
                },
            ],
        });
        const prioritySelect = prioritySelectGroup.querySelector('select');
        function handleInputFocus(e) {
            e.target.style.backgroundColor = '#2b2a2a';
        }
        function handleInputBlur(e) {
            e.target.style.backgroundColor = 'inherit';
        }
        [titleInput, descriptionTextArea, dueDateInput].forEach(element => {
            element.addEventListener('focus', handleInputFocus);
            element.addEventListener('blur', handleInputBlur);
        });
        function handlePriorityFocus() {
            prioritySelect.style.boxShadow = '0px 0px 0px 4px #2b2a2a';
            prioritySelect.style.transition = 'box-shadow 0.3s ease';
        }
        function handleBlur() {
            prioritySelect.style.boxShadow = '';
            prioritySelect.style.transition = '';
        }
        prioritySelect.addEventListener('focus', handlePriorityFocus);
        prioritySelect.addEventListener('blur', handleBlur);
        form.appendChild(titleInputGroup);
        form.appendChild(dueDateInputGroup);
        form.appendChild(prioritySelectGroup);
        form.appendChild(descriptionTextAreaGroup);
        form.appendChild(Buttons());
        function handleFormSubmit(event) {
            event.preventDefault();
            const todoData = {};
            for (const [key, value] of new FormData(event.target).entries()) {
                if (value instanceof Object) {
                    throw Error(`${camelCaseToTitleCase({ str: key })} is expected to be a string`);
                }
                todoData[key] = value;
            }
            try {
                const { title, description, dueDate, priority } = todoData;
                const dueDateAsDate = new Date(dueDate + 'T00:00:00.000');
                const todo = createTodo({
                    listId,
                    title,
                    description,
                    dueDate: dueDateAsDate,
                    priority: Priority[priority],
                });
                const { addTodo } = todoService();
                addTodo({ todo });
                document.removeEventListener('submit', handleFormSubmit);
                const returnUrl = listId ? `/lists/${listId}` : '/';
                router_navigate(returnUrl);
            }
            catch (error) {
                if (error instanceof Error) {
                    alert(error.message);
                }
            }
        }
        form.addEventListener('submit', handleFormSubmit);
        return form;
    }
    function Buttons() {
        const container = document.createElement('div');
        container.style.cssText = inlineStyles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingLeft: '0.25rem',
        });
        const cancelButton = CancelButton();
        const addButton = AddButton();
        container.appendChild(cancelButton);
        container.appendChild(addButton);
        return container;
    }
}

;// CONCATENATED MODULE: ./src/views/AllMyTasks.ts
function AllMyTasks(props) {
    const heading = document.createElement('h1');
    heading.innerText = 'All My Tasks';
    props.parent.appendChild(heading);
}

;// CONCATENATED MODULE: ./src/components/CheckmarkIcon.ts
function CheckmarkIcon({ width, height, fill, }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('fill', fill);
    svg.setAttribute('viewBox', `0 0 16 16`);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z');
    svg.appendChild(path);
    return svg;
}

;// CONCATENATED MODULE: ./src/utils/dates.ts
function formatDateToYYYYMMDD({ date }) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

;// CONCATENATED MODULE: ./src/components/CheckmarkCircleIcon.ts
function CheckmarkCircleIcon({ width, height, fill, }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('fill', fill);
    svg.setAttribute('viewBox', `0 0 16 16`);
    const firstPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    firstPath.setAttribute('d', 'M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z');
    const secondPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    secondPath.setAttribute('d', 'M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z');
    svg.appendChild(firstPath);
    svg.appendChild(secondPath);
    return svg;
}

;// CONCATENATED MODULE: ./src/components/TodoDetails.ts









function TodoDetails({ todo }) {
    if (todo === undefined) {
        return Placeholder();
    }
    const container = document.createElement('div');
    container.id = ids.TODO_CARD_DETAILS;
    container.dataset.todoId = todo === null || todo === void 0 ? void 0 : todo.id;
    container.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        height: '100%',
        overflow: 'auto',
    });
    container.style.opacity = todo.complete === true ? '50%' : '';
    const breadcrumbContainer = BreadcrumbContainer({ todo });
    const form = Form({ todo });
    container.appendChild(breadcrumbContainer);
    container.appendChild(form);
    return container;
}
function Placeholder() {
    const placeholderContainer = document.createElement('div');
    placeholderContainer.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
    });
    const placeHolder = document.createElement('div');
    placeHolder.innerText = 'What do you want to get done?';
    placeholderContainer.appendChild(CheckmarkCircleIcon({ height: 40, width: 40, fill: 'currentColor' }));
    placeholderContainer.appendChild(placeHolder);
    return placeholderContainer;
}
function BreadcrumbContainer({ todo }) {
    const list = listService().getListById({ id: todo.listId });
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
        padding: '0 0.5rem',
    });
    const breadcrumbLink = Link({
        linkText: `My Lists > ${list ? list.name.toUpperCase() : 'INBOX'}`,
        href: list ? `/lists/${list.id}?todoId=${todo.id}` : `/?todoId=${todo.id}`,
        styles: inlineStyles({
            fontSize: '0.75rem',
        }),
    });
    function handleLinkMouseOver() {
        breadcrumbLink.style.textDecoration = 'underline';
    }
    function handleLinkMouseOut() {
        breadcrumbLink.style.textDecoration = '';
    }
    breadcrumbLink.addEventListener('mouseover', handleLinkMouseOver);
    breadcrumbLink.addEventListener('mouseout', handleLinkMouseOut);
    container.appendChild(breadcrumbLink);
    return container;
}
function Form({ todo }) {
    const form = document.createElement('form');
    form.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flex: '1',
    });
    const titleInput = TitleInput({ todo });
    const dueDateInput = DueDateInput({ todo });
    const prioritySelect = PrioritySelect({ todo });
    const descriptionTextAreaFormGroup = DescriptionTextArea({ todo });
    form.appendChild(titleInput);
    form.appendChild(dueDateInput);
    form.appendChild(prioritySelect);
    form.appendChild(descriptionTextAreaFormGroup);
    function handleSubmit(e) {
        e.preventDefault();
    }
    form.addEventListener('submit', handleSubmit);
    return form;
}
function TitleInput({ todo }) {
    const titleInput = document.createElement('input');
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';
    titleInput.value = todo.title;
    titleInput.title = 'Title';
    titleInput.placeholder = 'Title';
    titleInput.disabled = todo.complete;
    titleInput.style.cssText = inlineStyles({
        fontSize: '1.5rem',
        outline: 'none',
        border: 'none',
        backgroundColor: 'inherit',
        color: '#ffffff',
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
    });
    function handleChange() {
        todo.title = titleInput.value;
        todoService().updateTodo({ todo });
        document.dispatchEvent(new CustomEvent('todoUpdated'));
    }
    function handleFocus() {
        titleInput.style.backgroundColor = '#2b2a2a';
    }
    function handleBlur() {
        titleInput.style.backgroundColor = 'inherit';
    }
    titleInput.addEventListener('change', handleChange);
    titleInput.addEventListener('focus', handleFocus);
    titleInput.addEventListener('blur', handleBlur);
    return titleInput;
}
function DueDateInput({ todo }) {
    // styles for pseudo elements in index.css
    const dueDateInput = document.createElement('input');
    dueDateInput.id = 'dueDate';
    dueDateInput.name = 'dueDate';
    dueDateInput.type = 'date';
    dueDateInput.value = formatDateToYYYYMMDD({ date: todo.dueDate });
    dueDateInput.title = 'Due Date';
    dueDateInput.disabled = todo.complete;
    dueDateInput.style.cssText = inlineStyles({
        fontSize: '1rem',
        outline: 'none',
        border: 'none',
        backgroundColor: 'inherit',
        color: '#ffffff',
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
    });
    function handleChange() {
        todo.dueDate = new Date(dueDateInput.value + 'T00:00:00.000');
        todoService().updateTodo({ todo });
    }
    function handleFocus() {
        dueDateInput.style.backgroundColor = '#2b2a2a';
    }
    function handleBlur() {
        dueDateInput.style.backgroundColor = 'inherit';
    }
    dueDateInput.addEventListener('change', handleChange);
    dueDateInput.addEventListener('focus', handleFocus);
    dueDateInput.addEventListener('blur', handleBlur);
    return dueDateInput;
}
function PrioritySelect({ todo }) {
    function getSelectBackground() {
        if (todo.priority === Priority.High) {
            return 'red';
        }
        if (todo.priority === Priority.Medium) {
            return 'yellow';
        }
        return 'green';
    }
    function getSelectColor() {
        return todo.priority === Priority.Medium ? 'black' : '#ffffff';
    }
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';
    prioritySelect.title = 'Priority';
    prioritySelect.disabled = todo.complete;
    prioritySelect.style.cssText = inlineStyles({
        marginLeft: '0.5rem',
        padding: '0.25rem',
        border: 'none',
        outline: 'none',
        width: 'min-content',
        backgroundColor: getSelectBackground(),
        color: getSelectColor(),
        fontSize: '0.85rem',
        borderRadius: '0.25rem',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        textAlign: 'center',
    });
    const priorityOptions = ['Low', 'Medium', 'High'].map(o => {
        const option = document.createElement('option');
        option.value = o;
        option.text = o;
        option.selected = o === todo.priority;
        option.style.cssText = inlineStyles({
            padding: '1rem',
            backgroundColor: '#424242',
            color: '#ffffff',
            fontSize: '0.85rem',
        });
        return option;
    });
    function handleChange() {
        todo.priority = Priority[prioritySelect.value];
        todoService().updateTodo({ todo });
        prioritySelect.style.backgroundColor = getSelectBackground();
        prioritySelect.style.color = getSelectColor();
    }
    function handleFocus() {
        prioritySelect.style.boxShadow = '0px 0px 0px 4px #2b2a2a';
        prioritySelect.style.transition = 'box-shadow 0.3s ease';
    }
    function handleBlur() {
        prioritySelect.style.boxShadow = '';
        prioritySelect.style.transition = '';
    }
    prioritySelect.addEventListener('change', handleChange);
    prioritySelect.addEventListener('focus', handleFocus);
    prioritySelect.addEventListener('blur', handleBlur);
    prioritySelect.append(...priorityOptions);
    return prioritySelect;
}
function DescriptionTextArea({ todo }) {
    const descriptionTextAreaFormGroup = FormTextAreaGroup({
        containerStyles: inlineStyles({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            fontSize: '1rem',
            height: '100%',
            overflow: 'auto',
        }),
        labelText: 'Description',
        labelStyles: inlineStyles({
            padding: '0 0.5rem',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            fontWeight: 'bold',
        }),
        textAreaId: 'description',
        textAreaName: 'description',
        textAreaValue: todo.description,
        textAreaStyles: inlineStyles({
            padding: '0.5rem 0.5rem',
            resize: 'none',
            backgroundColor: 'inherit',
            color: '#ffffff',
            border: 'none',
            outline: 'none',
            fontSize: 'inherit',
            borderRadius: '0.25rem',
            height: '100%',
        }),
    });
    const textArea = descriptionTextAreaFormGroup.querySelector('textarea');
    textArea.disabled = todo.complete;
    function handleChange() {
        todo.description = textArea.value;
        todoService().updateTodo({ todo });
    }
    function handleFocus() {
        textArea.style.backgroundColor = '#2b2a2a';
    }
    function handleBlur() {
        textArea.style.backgroundColor = 'inherit';
    }
    textArea.addEventListener('change', handleChange);
    textArea.addEventListener('focus', handleFocus);
    textArea.addEventListener('blur', handleBlur);
    return descriptionTextAreaFormGroup;
}

;// CONCATENATED MODULE: ./src/components/TrashCanIcon.ts
function TrashCanIcon({ width, height, fill, }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('fill', fill);
    svg.setAttribute('viewBox', `0 0 16 16`);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z');
    svg.appendChild(path);
    return svg;
}

;// CONCATENATED MODULE: ./src/components/ListCardTodo.ts






function ListCardTodo({ todo }) {
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
        display: 'flex',
        padding: '0.5rem 1rem',
        gap: '0.5rem',
        alignItems: 'center',
        borderRadius: '0.5rem',
        cursor: 'pointer',
    });
    function ButtonText() {
        return todo.complete
            ? CheckmarkIcon({ width: 40, height: 40, fill: 'currentColor' })
            : document.createElement('span');
    }
    const completeButton = document.createElement('button');
    completeButton.appendChild(ButtonText());
    completeButton.type = 'button';
    completeButton.style.cssText = inlineStyles({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '1rem',
        aspectRatio: '1',
        borderRadius: '50%',
        border: '1px solid #ffffff',
        color: '#ffffff',
    });
    function SpanStyles() {
        return inlineStyles({
            textDecoration: todo.complete ? 'line-through' : '',
        });
    }
    const span = document.createElement('span');
    span.innerText = todo.title;
    span.style.cssText = SpanStyles();
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(TrashCanIcon({ height: 16, width: 16, fill: 'currentColor' }));
    deleteButton.type = 'button';
    deleteButton.style.cssText = inlineStyles({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '1rem',
        aspectRatio: '1',
        color: '#ffffff',
    });
    container.appendChild(completeButton);
    container.appendChild(span);
    if (todo.complete) {
        container.appendChild(deleteButton);
    }
    function handleCompleteButtonClick(e) {
        e.stopPropagation();
        todo.complete = !todo.complete;
        todoService().updateTodo({ todo });
        document.dispatchEvent(new CustomEvent('todoUpdated'));
        const todoCardDetails = document.getElementById(ids.TODO_CARD_DETAILS);
        if (todoCardDetails.dataset === null) {
            return;
        }
        const currentTodoId = todoCardDetails.dataset.todoId;
        if (currentTodoId !== todo.id) {
            return;
        }
        const todoCard = todoCardDetails.parentElement;
        todoCard.innerHTML = '';
        todoCard.appendChild(TodoDetails({ todo }));
    }
    completeButton.addEventListener('click', handleCompleteButtonClick);
    function handleDeleteButtonClick(e) {
        e.stopPropagation();
        todoService().deleteTodoById({ todoId: todo.id });
        document.dispatchEvent(new CustomEvent('todoUpdated'));
        const todoCardDetails = document.getElementById(ids.TODO_CARD_DETAILS);
        if (todoCardDetails.dataset === null) {
            return;
        }
        const currentTodoId = todoCardDetails.dataset.todoId;
        if (currentTodoId !== todo.id) {
            return;
        }
        const todoCard = todoCardDetails.parentElement;
        todoCard.innerHTML = '';
        todoCard.appendChild(TodoDetails({}));
    }
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    function handleContainerMouseOver() {
        container.style.backgroundColor = '#0093e970';
    }
    function handleContainerMouseOut() {
        container.style.backgroundColor = '';
    }
    container.addEventListener('mouseover', handleContainerMouseOver);
    container.addEventListener('mouseout', handleContainerMouseOut);
    return container;
}

;// CONCATENATED MODULE: ./src/components/ListCard.ts




function ListCard({ listId, todoId, }) {
    const todos = todoService().getTodosByListId({ listId });
    const card = document.createElement('div');
    card.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
        backgroundColor: '#424242',
        flex: '1',
    });
    if (todos.length == 0) {
        const placeHolder = document.createElement('div');
        placeHolder.innerText = 'Looks like you got it all done! 🎉';
        placeHolder.style.cssText = inlineStyles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        });
        card.appendChild(placeHolder);
        return card;
    }
    const list = document.createElement('ul');
    list.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    });
    list.append(...TodoListItems({ listId, todoId }));
    function handleListClick(e) {
        const targetTodo = e.target.closest('li');
        if (targetTodo === null) {
            return;
        }
        const todos = [...list.querySelectorAll('li')];
        for (const todo of todos) {
            if (todo.id !== targetTodo.id) {
                todo.style.cssText = '';
                continue;
            }
            const url = new URL(window.location.href);
            url.searchParams.set('todoId', todo.id);
            todo.style.cssText = highlightedItemStyles();
            document.removeEventListener('todoUpdated', handleTodoUpdate);
            router_navigate(url.toString());
        }
    }
    list.addEventListener('click', handleListClick);
    function handleTodoUpdate() {
        list.innerHTML = '';
        list.append(...TodoListItems({ listId, todoId }));
    }
    document.addEventListener('todoUpdated', handleTodoUpdate);
    card.appendChild(list);
    return card;
}
function TodoListItems({ listId, todoId, }) {
    const todos = todoService().getTodosByListId({ listId });
    return todos.map(todo => {
        const item = document.createElement('li');
        item.appendChild(ListCardTodo({ todo }));
        item.id = todo.id;
        if (todo.id === todoId) {
            item.style.cssText = highlightedItemStyles();
        }
        return item;
    });
}
function highlightedItemStyles() {
    return inlineStyles({
        outline: 'none',
        boxShadow: '0px 0px 4px 0px #0093e9',
        transition: 'box-shadow 0.3s ease',
        borderRadius: '0.5rem',
    });
}

;// CONCATENATED MODULE: ./src/components/ListHeading.ts


function ListHeading({ headingText, listId, }) {
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        padding: '1rem 1.25rem',
        borderRadius: '999px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
        backgroundColor: '#424242',
        color: '#ffffff',
        width: 'min-content',
    });
    const heading = document.createElement('h1');
    heading.innerText = headingText;
    container.appendChild(heading);
    container.appendChild(Link({
        linkText: 'Add Task',
        href: listId ? `/tasks/add?listId=${listId}` : '/tasks/add',
        styles: inlineStyles({
            padding: '0.25rem 1rem',
            border: '1px solid #ffffff',
            borderRadius: '0.25rem',
            whiteSpace: 'nowrap',
        }),
    }));
    function handleContainerMouseOver(e) {
        if (e.target.matches('a')) {
            e.target.style.backgroundColor = '#424242';
            e.target.style.color = '#ffffff';
        }
    }
    function handleContainerMouseOut(e) {
        if (e.target.matches('a')) {
            e.target.style.backgroundColor = '';
            e.target.style.color = '';
        }
    }
    container.addEventListener('mouseover', handleContainerMouseOver);
    container.addEventListener('mouseout', handleContainerMouseOut);
    return container;
}

;// CONCATENATED MODULE: ./src/components/TodoCard.ts

function TodoCard() {
    const card = document.createElement('div');
    card.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
        backgroundColor: '#424242',
        flex: '1',
    });
    return card;
}

;// CONCATENATED MODULE: ./src/views/ListDetail.ts







function ListDetail(props) {
    const { id } = props.pathParams;
    const { todoId } = props.queryParams;
    const { getListById } = listService();
    const list = getListById({ id });
    const { getTodoById } = todoService();
    const container = document.createElement('div');
    container.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: '',
        color: '#ffffff',
        height: '100%',
    });
    props.parent.appendChild(container);
    function getCardContainerDirection() {
        return window.innerWidth > 1000 ? 'row' : 'column';
    }
    const cardContainer = document.createElement('div');
    cardContainer.style.cssText = inlineStyles({
        display: 'flex',
        flexDirection: getCardContainerDirection(),
        gap: '1rem',
        height: '100%',
    });
    cardContainer.appendChild(ListCard({ listId: list === null || list === void 0 ? void 0 : list.id, todoId }));
    const todoCard = TodoCard();
    const todoDetails = TodoDetails({
        todo: getTodoById({ todoId }),
    });
    todoCard.appendChild(todoDetails);
    cardContainer.appendChild(todoCard);
    container.appendChild(ListHeading({
        headingText: list ? list.name : 'Inbox',
        listId: list === null || list === void 0 ? void 0 : list.id,
    }));
    function handleResize() {
        cardContainer.style.flexDirection = getCardContainerDirection();
    }
    window.addEventListener('resize', handleResize);
    container.appendChild(cardContainer);
    props.parent.appendChild(container);
}

;// CONCATENATED MODULE: ./src/views/MyDay.ts
function MyDay(props) {
    const heading = document.createElement('h1');
    heading.innerText = 'My Day';
    props.parent.appendChild(heading);
}

;// CONCATENATED MODULE: ./src/views/NextWeek.ts
function NextWeek(props) {
    const heading = document.createElement('h1');
    heading.innerText = 'Next 7 Days';
    props.parent.appendChild(heading);
}

;// CONCATENATED MODULE: ./src/views/NotFound.ts
function NotFound(props) {
    const heading = document.createElement('h1');
    heading.innerText = 'Not Found';
    props.parent.appendChild(heading);
}

;// CONCATENATED MODULE: ./src/router.ts







function router() {
    var _a;
    const routes = [
        { path: '/', view: ListDetail },
        { path: '/my-day', view: MyDay },
        { path: '/next-seven-days', view: NextWeek },
        { path: '/tasks', view: AllMyTasks },
        { path: '/tasks/add', view: AddTask },
        { path: '/lists/add', view: AddList },
        { path: '/lists/:id', view: ListDetail },
    ].map(route => {
        route.path = "/theOdinProject-Todo-List" + route.path;
        return route;
    });
    // match path from beginning to end
    // escape forward slashes
    // replace path placeholders
    // with capture groups
    const matches = routes.map(route => ({
        route,
        result: location.pathname.match(new RegExp('^' + route.path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$')),
    }));
    let match = matches.find(match => match.result !== null);
    if (match === null || match === undefined) {
        match = {
            route: {
                query: location.search,
                path: location.pathname,
                view: NotFound,
            },
            result: [location.pathname],
        };
    }
    match.route.query = location.search;
    const pathParams = [...match.route.path.matchAll(/:(\w+)/g)]
        .map(result => result[1])
        .reduce((prev, curr, i) => (Object.assign(Object.assign({}, prev), { [curr]: match.result.slice(1)[i] })), {});
    const queryString = (_a = match.route.query) === null || _a === void 0 ? void 0 : _a.split('?')[1];
    const queryParams = queryString === undefined
        ? {}
        : queryString.split('&').reduce((prev, curr) => {
            const [key, value] = curr.split('=');
            if (key === undefined || value === undefined) {
                return prev;
            }
            return Object.assign(Object.assign({}, prev), { [key]: decodeURIComponent(value.replace(/\+/g, ' ')) });
        }, {});
    const parent = document.getElementById('app');
    parent.innerHTML = '';
    match.route.view({ parent, pathParams, queryParams });
}
function router_navigate(url) {
    const urlText = /^\//.test(url) ? "/theOdinProject-Todo-List" + url : url;
    history.pushState(null, null, urlText);
    router();
}

;// CONCATENATED MODULE: ./src/index.ts




const root = document.getElementById(ids.ROOT);
root.appendChild(Layout());
window.addEventListener('popstate', router);
document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link !== null && link.matches('[data-link]')) {
        e.preventDefault();
        router_navigate(link.href);
    }
});
router();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7QUFFM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUM1QixPQUFPLEVBQ1AsQ0FBQyxDQUFrQyxFQUFFLEVBQUU7SUFDckMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDaEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQ0YsQ0FBQztBQUVGLE1BQU0sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbnN0YW50cy9lbGVtZW50cy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3R5bGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0hhbWJ1cmdlckljb24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2RhdGEvY29udGV4dC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc2VydmljZXMvbGlzdFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGluay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9OYXZMaXN0SXRlbS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9NeUxpc3RzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2xheW91dC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ2FuY2VsQnV0dG9uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1JbnB1dEdyb3VwLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL2lkLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9zdHJpbmdzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvbGlzdC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWRkTGlzdC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtU2VsZWN0R3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVRleHRBcmVhR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVscy90b2RvLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zZXJ2aWNlcy90b2RvU2VydmljZS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWRkVGFzay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWxsTXlUYXNrcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DaGVja21hcmtJY29uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9kYXRlcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DaGVja21hcmtDaXJjbGVJY29uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RvZG9EZXRhaWxzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RyYXNoQ2FuSWNvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaXN0Q2FyZFRvZG8udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdENhcmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRpbmcudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9kb0NhcmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0xpc3REZXRhaWwudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL015RGF5LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9OZXh0V2Vlay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTm90Rm91bmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQkVHSU4gUkVTRVRTICovXHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi8qIEVORCBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSxcclxuI3Jvb3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZDpmb2N1cyxcclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZDpmb2N1cyxcclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEJFR0lOIFJFU0VUUyAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG4jcm9vdCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkOmZvY3VzLFxcclxcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQ6Zm9jdXMsXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQ6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IGNvbnN0IGlkcyA9IHtcclxuICBST09UOiAncm9vdCcsXHJcbiAgUFJJTUFSWV9OQVZfTElTVDogJ3ByaW1hcnlOYXZMaXN0JyxcclxuICBNWV9MSVNUU19DT05UQUlORVI6ICdteUxpc3RzQ29udGFpbmVyJyxcclxuICBNWV9MSVNUUzogJ215TGlzdHMnLFxyXG4gIEFERF9MSVNUX0ZPUk06ICdhZGRMaXN0Rm9ybScsXHJcbiAgQUREX1RBU0tfRk9STTogJ2FkZFRhc2tGb3JtJyxcclxuICBUT0RPX0NBUkRfREVUQUlMUzogJ3RvZG9DYXJkJyxcclxuICBUT0dHTEVfU0lERUJBUl9CVVRUT046ICd0b2dnbGVTaWRlYmFyQnV0dG9uJyxcclxuICBOQVZfSEVBRElORzogJ25hdkhlYWRpbmcnLFxyXG59O1xyXG4iLCJmdW5jdGlvbiBjYW1lbFRvS2ViYWIoY2FtZWxDYXNlU3RyaW5nOiBzdHJpbmcpIHtcclxuICByZXR1cm4gY2FtZWxDYXNlU3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmxpbmVTdHlsZXMoc3R5bGVzOiBvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoKGlubGluZVN0eWxlcywgcHJvcGVydHkpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcclxuXHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gYCR7aW5saW5lU3R5bGVzfSR7Y2FtZWxUb0tlYmFiKHByb3BlcnR5KX06JHt2YWx1ZX07YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzO1xyXG4gIH0sICcnKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYW1idXJnZXJJY29uKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgZmlsbCxcclxufToge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgZmlsbCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTYgMTZgKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKCdmaWxsLXJ1bGUnLCAnZXZlbm9kZCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00yLjUgMTJhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6bTAtNGEuNS41IDAgMCAxIC41LS41aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41eidcclxuICApO1xyXG5cclxuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL21vZGVscy9saXN0JztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KCkge1xyXG4gIGNvbnN0IExJU1RTX0tFWSA9ICdsaXN0cyc7XHJcbiAgY29uc3QgVE9ET1NfS0VZID0gJ3RvZG9zJztcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SXRlbSh7IGtleSB9OiB7IGtleTogc3RyaW5nIH0pIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBmdW5jdGlvbiByZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICdkdWVEYXRlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSksIHJldml2ZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0SXRlbSh7IGtleSwgaXRlbSB9OiB7IGtleTogc3RyaW5nOyBpdGVtOiBvYmplY3QgfSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgX2xpc3RzOiBMaXN0W10gPSBnZXRJdGVtKHsga2V5OiBMSVNUU19LRVkgfSk7XHJcbiAgbGV0IF90b2RvczogVG9kb1tdID0gZ2V0SXRlbSh7IGtleTogVE9ET1NfS0VZIH0pO1xyXG5cclxuICBpZiAoX2xpc3RzID09IG51bGwpIHtcclxuICAgIHNldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSwgaXRlbTogW10gfSk7XHJcbiAgICBfbGlzdHMgPSBnZXRJdGVtKHsga2V5OiBMSVNUU19LRVkgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoX3RvZG9zID09IG51bGwpIHtcclxuICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogW10gfSk7XHJcbiAgICBfdG9kb3MgPSBnZXRJdGVtKHsga2V5OiBUT0RPU19LRVkgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxpc3RzKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogKHsgbGlzdCB9OiB7IGxpc3Q6IExpc3QgfSkgPT4ge1xyXG4gICAgICAgICAgX2xpc3RzLnB1c2gobGlzdCk7XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBMSVNUU19LRVksIGl0ZW06IF9saXN0cyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRPbmU6IChwcmVkaWNhdGU6IChsaXN0OiBMaXN0KSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX2xpc3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRNYW55OiAocHJlZGljYXRlOiAobGlzdDogTGlzdCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF9saXN0cy5maWx0ZXIocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGdldCB0b2RvcygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6ICh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pID0+IHtcclxuICAgICAgICAgIF90b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBfdG9kb3MgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kOiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF90b2Rvcy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kTWFueTogKHByZWRpY2F0ZTogKHRvZG86IFRvZG8pID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfdG9kb3MuZmlsdGVyKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kQW5kUmVwbGFjZTogKHByZWRpY2F0ZTogKHRvZG86IFRvZG8pID0+IGJvb2xlYW4sIHRvZG86IFRvZG8pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gX3RvZG9zLmZpbmRJbmRleChwcmVkaWNhdGUpO1xyXG5cclxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF90b2Rvc1tpbmRleF0gPSB0b2RvO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBfdG9kb3MgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kQW5kUmVtb3ZlOiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBfdG9kb3MuZmluZEluZGV4KHByZWRpY2F0ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgX3RvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IF90b2RvcyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRleHQgfSBmcm9tICcuLi9kYXRhL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RTZXJ2aWNlKCkge1xyXG4gIGNvbnN0IF9jb250ZXh0ID0gY29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRMaXN0KHsgbGlzdCB9OiB7IGxpc3Q6IExpc3QgfSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdMaXN0ID0gX2NvbnRleHQubGlzdHMuZmluZE9uZShsID0+IGwubmFtZSA9PT0gbGlzdC5uYW1lKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMaXN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEEgbGlzdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBuYW1lICR7bGlzdC5uYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb250ZXh0Lmxpc3RzLmFkZCh7IGxpc3QgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRMaXN0QnlJZCh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE9uZShsID0+IGwuaWQgPT09IGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFsbExpc3RzKCkge1xyXG4gICAgcmV0dXJuIF9jb250ZXh0Lmxpc3RzLmZpbmRNYW55KGwgPT4gbCAhPT0gbnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkTGlzdCxcclxuICAgIGdldExpc3RCeUlkLFxyXG4gICAgZ2V0QWxsTGlzdHMsXHJcbiAgfTtcclxufVxyXG4iLCJ0eXBlIExpbmtQcm9wcyA9IHtcclxuICBsaW5rVGV4dDogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHsgbGlua1RleHQsIGhyZWYsIHN0eWxlcyB9OiBMaW5rUHJvcHMpIHtcclxuICAvLyBpZiBocmVmIGlzIGFuIGFic29sdXRlIG9uZSBhcHBlbmRcclxuICAvLyB0aGUgZW52cyBiYXNlIHBhdGguXHJcbiAgY29uc3QgaHJlZlRleHQgPSAvXlxcLy8udGVzdChocmVmKSA/IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIGhyZWYgOiBocmVmO1xyXG5cclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGxpbmsudGl0bGUgPSBsaW5rVGV4dDtcclxuICBsaW5rLmhyZWYgPSBocmVmVGV4dDtcclxuICBsaW5rLnN0eWxlLmNzc1RleHQgPSBzdHlsZXM7XHJcbiAgbGluay5kYXRhc2V0LmxpbmsgPSAndHJ1ZSc7XHJcbiAgbGluay50ZXh0ID0gbGlua1RleHQ7XHJcblxyXG4gIHJldHVybiBsaW5rO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaXN0SXRlbSh7XHJcbiAgbGlua1RleHQsXHJcbiAgaHJlZixcclxufToge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgbmF2TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBuYXZJdGVtLmFwcGVuZENoaWxkKExpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzOiBuYXZMaW5rU3R5bGVzIH0pKTtcclxuXHJcbiAgcmV0dXJuIG5hdkl0ZW07XHJcbn1cclxuIiwiaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcbmltcG9ydCBOYXZMaXN0SXRlbSBmcm9tICcuL05hdkxpc3RJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15TGlzdHMoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gTXlMaXN0Q29udGFpbmVyKCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChNeUxpc3RUaXRsZSgpKTtcclxuICBjb250YWluZXIuYXBwZW5kKExpc3QoKSk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxuXHJcbiAgZnVuY3Rpb24gTXlMaXN0Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgbXlMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBteUxpc3RDb250YWluZXIuaWQgPSBpZHMuTVlfTElTVFNfQ09OVEFJTkVSO1xyXG5cclxuICAgIHJldHVybiBteUxpc3RDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBNeUxpc3RUaXRsZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBwYWRkaW5nOiAnMHJlbSAxcmVtJyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ015IExpc3RzJztcclxuICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250U2l6ZTogJzEuMTVyZW0nLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhZGRMaXN0TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICBMaW5rKHtcclxuICAgICAgICBsaW5rVGV4dDogJysnLFxyXG4gICAgICAgIGhyZWY6ICcvbGlzdHMvYWRkJyxcclxuICAgICAgICBzdHlsZXM6IGFkZExpc3RMaW5rU3R5bGVzLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzAwOTNFOSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU91dChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3Zlcik7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVDb250YWluZXJNb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgICBmdW5jdGlvbiByZW5kZXJOYXZMaW5rSXRlbXMoKSB7XHJcbiAgICAgIGNvbnN0IHsgZ2V0QWxsTGlzdHMgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgICAgIGNvbnN0IGFsbExpc3RzID0gZ2V0QWxsTGlzdHMoKTtcclxuICAgICAgY29uc3QgbXlMaXN0SXRlbXMgPSBhbGxMaXN0cy5tYXAobGlzdCA9PiAoe1xyXG4gICAgICAgIGxpbmtUZXh0OiBsaXN0Lm5hbWUsXHJcbiAgICAgICAgaHJlZjogYC9saXN0cy8ke2xpc3QuaWR9YCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gbXlMaXN0SXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgICBOYXZMaXN0SXRlbSh7IGxpbmtUZXh0OiBpdGVtLmxpbmtUZXh0LCBocmVmOiBpdGVtLmhyZWYgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxpc3QuYXBwZW5kKC4uLml0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGxpc3QuaWQgPSBpZHMuTVlfTElTVFM7XHJcbiAgICBsaXN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyTmF2TGlua0l0ZW1zKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdFVwZGF0ZWQoKSB7XHJcbiAgICAgIHJlbmRlck5hdkxpbmtJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU15TGlzdE1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNFOSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNeUxpc3RNb3VzZU91dChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RzVXBkYXRlZCcsIGhhbmRsZUxpc3RVcGRhdGVkKTtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTXlMaXN0TW91c2VPdmVyKTtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVNeUxpc3RNb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBIYW1idXJnZXJJY29uIGZyb20gJy4vSGFtYnVyZ2VySWNvbic7XHJcbmltcG9ydCBNeUxpc3RzIGZyb20gJy4vTXlMaXN0cyc7XHJcbmltcG9ydCBOYXZMaXN0SXRlbSBmcm9tICcuL05hdkxpc3RJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXIoKSB7XHJcbiAgY29uc3QgcHJpbWFyeU5hdkxpbmtJdGVtcyA9IFtcclxuICAgIHsgbGlua1RleHQ6ICdJbmJveCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgeyBsaW5rVGV4dDogJ015IERheScsIGhyZWY6ICcvbXktZGF5JyB9LFxyXG4gICAge1xyXG4gICAgICBsaW5rVGV4dDogJ05leHQgNyBEYXlzJyxcclxuICAgICAgaHJlZjogYC9uZXh0LXNldmVuLWRheXNgLFxyXG4gICAgfSxcclxuICAgIHsgbGlua1RleHQ6ICdBbGwgbXkgdGFza3MnLCBocmVmOiAnL3Rhc2tzJyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFzaWRlID0gQXNpZGUoKTtcclxuICBjb25zdCBuYXZIZWFkZXIgPSBOYXZIZWFkZXIoKTtcclxuICBjb25zdCBuYXZIZWFkaW5nID0gbmF2SGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBgIyR7aWRzLk5BVl9IRUFESU5HfWBcclxuICApIGFzIEhUTUxIZWFkaW5nRWxlbWVudDtcclxuICBjb25zdCBuYXYgPSBOYXYoKTtcclxuICBjb25zdCBteUxpc3RzID0gTXlMaXN0cygpO1xyXG4gIG15TGlzdHMuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCc7XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVTaWRlYmFyKCkge1xyXG4gICAgYXNpZGUuc3R5bGUud2lkdGggPSAnNDBweCc7XHJcbiAgICBuYXZIZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgIG5hdkhlYWRpbmcuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlWCgwKSc7XHJcbiAgICBuYXYuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlWCgwKSc7XHJcbiAgICBteUxpc3RzLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZVgoMCknO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVFbGVtZW50KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhpZGVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoaWRlRWxlbWVudCk7XHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhpZGVFbGVtZW50KTtcclxuICAgIG15TGlzdHMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhpZGVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTaWRlYmFyKCkge1xyXG4gICAgYXNpZGUuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xyXG4gICAgbmF2SGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG4gICAgbmF2SGVhZGluZy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgbXlMaXN0cy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBuYXZIZWFkaW5nLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZVgoMSknO1xyXG4gICAgbmF2LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZVgoMSknO1xyXG4gICAgbXlMaXN0cy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGVYKDEpJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUJ1dHRvbkNsaWNrKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxCdXR0b25FbGVtZW50IH0pIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xyXG4gICAgaWYgKGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24uaWQgIT09IGlkcy5UT0dHTEVfU0lERUJBUl9CVVRUT04pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFzaWRlLnN0eWxlLndpZHRoID09PSAnMjAwcHgnID8gaGlkZVNpZGViYXIoKSA6IHNob3dTaWRlYmFyKCk7XHJcbiAgfVxyXG5cclxuICBuYXZIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVCdXR0b25DbGljayk7XHJcblxyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDApIHtcclxuICAgIGFzaWRlLnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gICAgbmF2SGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICBuYXZIZWFkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG15TGlzdHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIGFzaWRlLmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XHJcbiAgYXNpZGUuYXBwZW5kQ2hpbGQobmF2KTtcclxuICBhc2lkZS5hcHBlbmRDaGlsZChteUxpc3RzKTtcclxuXHJcbiAgcmV0dXJuIGFzaWRlO1xyXG5cclxuICBmdW5jdGlvbiBBc2lkZSgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIGFzaWRlLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgIHRyYW5zaXRpb246ICd3aWR0aCAwLjNzIGVhc2UtaW4tb3V0JyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhc2lkZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE5hdkhlYWRlcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkaW5nLmlkID0gaWRzLk5BVl9IRUFESU5HO1xyXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSAnR2V0IEl0IERvbmUnO1xyXG4gICAgaGVhZGluZy5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBmb250U2l6ZTogJzEuNXJlbScsXHJcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2dnbGVCdXR0b24uaWQgPSBpZHMuVE9HR0xFX1NJREVCQVJfQlVUVE9OO1xyXG4gICAgdG9nZ2xlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIHRvZ2dsZUJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgfSk7XHJcbiAgICB0b2dnbGVCdXR0b24uYXBwZW5kQ2hpbGQoXHJcbiAgICAgIEhhbWJ1cmdlckljb24oeyB3aWR0aDogMjAsIGhlaWdodDogMjAsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtIDByZW0nLFxyXG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2TGlzdCA9IE5hdkxpc3QoKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmF2TGlzdCgpIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2TGlzdC5pZCA9IGlkcy5QUklNQVJZX05BVl9MSVNUO1xyXG4gICAgbmF2TGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJpbWFyeU5hdkxpbmtJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICBOYXZMaXN0SXRlbSh7XHJcbiAgICAgICAgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsXHJcbiAgICAgICAgaHJlZjogaXRlbS5ocmVmLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBuYXZMaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2TGlzdE1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNFOSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU5hdkxpc3RNb3VzZU92ZXIpO1xyXG4gICAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU5hdkxpc3RNb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hdkxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdhcHAnO1xyXG4gIG1haW4uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmbGV4OiAnMScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5M0U5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM4MEQwQzcgMTAwJSknLFxyXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA5M0U5JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTaWRlQmFyKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQnV0dG9uKCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcclxuICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gIGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmZmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAxcmVtJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbk1vdXNlT3ZlcigpIHtcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25Nb3VzZU91dCgpIHtcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQnV0dG9uTW91c2VPdmVyKTtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVCdXR0b25Nb3VzZU91dCk7XHJcblxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbmNlbEJ1dHRvbigpIHtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG4gIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWxDbGljaygpIHtcclxuICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQ2xpY2spO1xyXG5cclxuICByZXR1cm4gY2FuY2VsQnV0dG9uO1xyXG59XHJcbiIsInR5cGUgVmFsaWRJbnB1dFR5cGVzID1cclxuICB8ICdidXR0b24nXHJcbiAgfCAnY2hlY2tib3gnXHJcbiAgfCAnY29sb3InXHJcbiAgfCAnZGF0ZSdcclxuICB8ICdkYXRldGltZS1sb2NhbCdcclxuICB8ICdlbWFpbCdcclxuICB8ICdmaWxlJ1xyXG4gIHwgJ2hpZGRlbidcclxuICB8ICdpbWFnZSdcclxuICB8ICdtb250aCdcclxuICB8ICdudW1iZXInXHJcbiAgfCAncGFzc3dvcmQnXHJcbiAgfCAncmFkaW8nXHJcbiAgfCAncmFuZ2UnXHJcbiAgfCAncmVzZXQnXHJcbiAgfCAnc2VhcmNoJ1xyXG4gIHwgJ3N1Ym1pdCdcclxuICB8ICd0ZWwnXHJcbiAgfCAndGV4dCdcclxuICB8ICd0aW1lJ1xyXG4gIHwgJ3VybCdcclxuICB8ICd3ZWVrJztcclxuXHJcbnR5cGUgRm9ybUlucHV0R3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgaW5wdXRJZDogc3RyaW5nO1xyXG4gIGlucHV0TmFtZTogc3RyaW5nO1xyXG4gIGlucHV0VHlwZTogVmFsaWRJbnB1dFR5cGVzO1xyXG4gIGlucHV0U3R5bGVzPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUlucHV0R3JvdXAocHJvcHM6IEZvcm1JbnB1dEdyb3VwUHJvcHMpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmNvbnRhaW5lclN0eWxlcztcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBwcm9wcy5pbnB1dElkO1xyXG4gIGxhYmVsLmlubmVyVGV4dCA9IHByb3BzLmxhYmVsVGV4dDtcclxuICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMubGFiZWxTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9IHByb3BzLmlucHV0SWQ7XHJcbiAgaW5wdXQubmFtZSA9IHByb3BzLmlucHV0TmFtZTtcclxuICBpbnB1dC50eXBlID0gcHJvcHMuaW5wdXRUeXBlO1xyXG4gIGlucHV0LnN0eWxlLmNzc1RleHQgPSBwcm9wcy5pbnB1dFN0eWxlcztcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XHJcbiAgcmV0dXJuIHV1aWQoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyIH06IHsgc3RyOiBzdHJpbmcgfSkge1xyXG4gIHJldHVybiAhc3RyIHx8IHN0ci50cmltKCkgPT09ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9UaXRsZUNhc2UoeyBzdHIgfTogeyBzdHI6IHN0cmluZyB9KSB7XHJcbiAgLy8gYWRkIHNwYWNlIGJlZm9yZSB1cHBlciBjYXNlIGxldHRlcnNcclxuICAvLyByZXBsYWNlIGZpcnN0IGNoYXJhY3RlciB3aXRoIHVwcGVyIGNhc2VcclxuICByZXR1cm4gc3RyXHJcbiAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBtYXRjaCA9PiBgICR7bWF0Y2h9YClcclxuICAgIC5yZXBsYWNlKC9eLi8sIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAudHJpbSgpO1xyXG59XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlSWQgfSBmcm9tICcuLi91dGlscy9pZCc7XHJcbmltcG9ydCB7IGlzTnVsbE9yV2hpdGVTcGFjZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ3MnO1xyXG5cclxudHlwZSBMaXN0UGFyYW1zID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIExpc3QgPSB7IGlkOiBzdHJpbmcgfSAmIExpc3RQYXJhbXM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCh7IG5hbWUgfTogTGlzdFBhcmFtcyk6IExpc3Qge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlTmFtZSh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogbmFtZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfbmFtZSA9IHZhbGlkYXRlTmFtZSh7IG5hbWUgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiBfbmFtZTtcclxuICAgIH0sXHJcbiAgICBzZXQgbmFtZShuYW1lKSB7XHJcbiAgICAgIF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgQWRkQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkQnV0dG9uJztcclxuaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhbmNlbEJ1dHRvbic7XHJcbmltcG9ydCBGb3JtSW5wdXRHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1JbnB1dEdyb3VwJztcclxuaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gJy4uL21vZGVscy9saXN0JztcclxuaW1wb3J0IHsgVmlld1Byb3BzLCBuYXZpZ2F0ZSB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTGlzdChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKEFkZExpc3RGb3JtKCkpO1xyXG5cclxuICBmdW5jdGlvbiBBZGRMaXN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBnYXA6ICcxcmVtJyxcclxuICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gICAgfSk7XHJcbiAgICBmb3JtLmlkID0gaWRzLkFERF9MSVNUX0ZPUk07XHJcblxyXG4gICAgY29uc3QgbmFtZUlucHV0R3JvdXAgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGNvbnRhaW5lclN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgZ2FwOiAnMC4yNXJlbScsXHJcbiAgICAgIH0pLFxyXG4gICAgICBsYWJlbFRleHQ6ICdOYW1lJyxcclxuICAgICAgbGFiZWxTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVyZW0nLFxyXG4gICAgICB9KSxcclxuICAgICAgaW5wdXRJZDogJ25hbWUnLFxyXG4gICAgICBpbnB1dE5hbWU6ICduYW1lJyxcclxuICAgICAgaW5wdXRUeXBlOiAndGV4dCcsXHJcbiAgICAgIGlucHV0U3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0nLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMmIyYTJhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBuYW1lSW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Rm9jdXMoKSB7XHJcbiAgICAgIG5hbWVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRCbHVyKCkge1xyXG4gICAgICBuYW1lSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUlucHV0Rm9jdXMpO1xyXG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0R3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpKTtcclxuXHJcbiAgICAgIGlmIChuYW1lIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdCh7IG5hbWUgfSk7XHJcbiAgICAgICAgY29uc3QgeyBhZGRMaXN0IH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICAgIGFkZExpc3QoeyBsaXN0IH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsaXN0c1VwZGF0ZWQnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgbmF2aWdhdGUoYC9saXN0cy8ke2xpc3QuaWR9YCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzAuMjVyZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBBZGRCdXR0b24oKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG59XHJcbiIsInR5cGUgT3B0aW9uID0ge1xyXG4gIHZhbHVlVGV4dDogc3RyaW5nO1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgc3R5bGVzPzogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBGb3JtU2VsZWN0R3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgc2VsZWN0SWQ6IHN0cmluZztcclxuICBzZWxlY3ROYW1lOiBzdHJpbmc7XHJcbiAgc2VsZWN0U3R5bGVzPzogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IE9wdGlvbltdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVNlbGVjdEdyb3VwKHByb3BzOiBGb3JtU2VsZWN0R3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBwcm9wcy5zZWxlY3RJZDtcclxuICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMubGFiZWxTdHlsZXM7XHJcblxyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHNlbGVjdC5pZCA9IHByb3BzLnNlbGVjdElkO1xyXG4gIHNlbGVjdC5uYW1lID0gcHJvcHMuc2VsZWN0TmFtZTtcclxuICBzZWxlY3Quc3R5bGUuY3NzVGV4dCA9IHByb3BzLnNlbGVjdFN0eWxlcztcclxuXHJcbiAgcHJvcHMub3B0aW9uc1xyXG4gICAgLm1hcChvID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbi5zdHlsZS5jc3NUZXh0ID0gby5zdHlsZXM7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG8udmFsdWU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gby52YWx1ZVRleHQ7XHJcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IG8uZGlzYWJsZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG8uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9KVxyXG4gICAgLmZvckVhY2gobyA9PiBzZWxlY3QuYXBwZW5kQ2hpbGQobykpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsInR5cGUgRm9ybVRleHRBcmVhR3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFJZDogc3RyaW5nO1xyXG4gIHRleHRBcmVhTmFtZTogc3RyaW5nO1xyXG4gIHRleHRBcmVhVmFsdWU/OiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtVGV4dEFyZWFHcm91cChwcm9wczogRm9ybVRleHRBcmVhR3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIHRleHRhcmVhLmlkID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS5uYW1lID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IHByb3BzLnRleHRBcmVhVmFsdWUgPyBwcm9wcy50ZXh0QXJlYVZhbHVlIDogJyc7XHJcbiAgdGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9IHByb3BzLnRleHRBcmVhU3R5bGVzO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZVNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgSGlnaCA9ICdIaWdoJyxcclxuICBNZWRpdW0gPSAnTWVkaXVtJyxcclxuICBMb3cgPSAnTG93JyxcclxufVxyXG5cclxudHlwZSBUb2RvUGFyYW1zID0ge1xyXG4gIGxpc3RJZD86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZHVlRGF0ZTogRGF0ZTtcclxuICBwcmlvcml0eTogUHJpb3JpdHk7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUb2RvID0geyBpZDogc3RyaW5nOyBjb21wbGV0ZTogYm9vbGVhbiB9ICYgVG9kb1BhcmFtcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHtcclxuICBsaXN0SWQsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZHVlRGF0ZSxcclxuICBwcmlvcml0eSxcclxufTogVG9kb1BhcmFtcyk6IFRvZG8ge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogdGl0bGUgfSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aXRsZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTUwIGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfTogeyBkZXNjcmlwdGlvbjogc3RyaW5nIH0pIHtcclxuICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiAyNTUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMjU1IGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUR1ZURhdGUoeyBkdWVEYXRlIH06IHsgZHVlRGF0ZTogRGF0ZSB9KSB7XHJcbiAgICByZXR1cm4gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUHJpb3JpdHkoeyBwcmlvcml0eSB9OiB7IHByaW9yaXR5OiBzdHJpbmcgfSk6IFByaW9yaXR5IHtcclxuICAgIGNvbnN0IHByaW9yaXR5RW51bSA9IFByaW9yaXR5W3ByaW9yaXR5XTtcclxuXHJcbiAgICBpZiAocHJpb3JpdHlFbnVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmlvcml0eSBtdXN0IGJlIEhpZ2gsIE1lZGl1bSwgb3IgTG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5RW51bTtcclxuICB9XHJcblxyXG4gIGxldCBfbGlzdElkID0gbGlzdElkO1xyXG4gIGNvbnN0IF9pZCA9IGdlbmVyYXRlSWQoKTtcclxuICBsZXQgX3RpdGxlID0gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH0pO1xyXG4gIGxldCBfZGVzY3JpcHRpb24gPSB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfSk7XHJcbiAgbGV0IF9kdWVEYXRlID0gdmFsaWRhdGVEdWVEYXRlKHsgZHVlRGF0ZSB9KTtcclxuICBsZXQgX3ByaW9yaXR5ID0gdmFsaWRhdGVQcmlvcml0eSh7IHByaW9yaXR5IH0pO1xyXG4gIGxldCBfY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBsaXN0SWQoKSB7XHJcbiAgICAgIHJldHVybiBfbGlzdElkO1xyXG4gICAgfSxcclxuICAgIHNldCBsaXN0SWQobGlzdElkKSB7XHJcbiAgICAgIF9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gX2lkO1xyXG4gICAgfSxcclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgcmV0dXJuIF90aXRsZTtcclxuICAgIH0sXHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgX3RpdGxlID0gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH0pO1xyXG4gICAgfSxcclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgcmV0dXJuIF9kZXNjcmlwdGlvbjtcclxuICAgIH0sXHJcbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgX2Rlc2NyaXB0aW9uID0gdmFsaWRhdGVEZXNjcmlwdGlvbih7IGRlc2NyaXB0aW9uIH0pO1xyXG4gICAgfSxcclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICByZXR1cm4gX2R1ZURhdGU7XHJcbiAgICB9LFxyXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICBfZHVlRGF0ZSA9IHZhbGlkYXRlRHVlRGF0ZSh7IGR1ZURhdGUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICByZXR1cm4gX3ByaW9yaXR5O1xyXG4gICAgfSxcclxuICAgIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgICBfcHJpb3JpdHkgPSB2YWxpZGF0ZVByaW9yaXR5KHsgcHJpb3JpdHkgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGNvbXBsZXRlKCkge1xyXG4gICAgICByZXR1cm4gX2NvbXBsZXRlO1xyXG4gICAgfSxcclxuICAgIHNldCBjb21wbGV0ZShjb21wbGV0ZSkge1xyXG4gICAgICBfY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb250ZXh0IH0gZnJvbSAnLi4vZGF0YS9jb250ZXh0JztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2RvU2VydmljZSgpIHtcclxuICBjb25zdCBfY29udGV4dCA9IGNvbnRleHQoKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVG9kbyh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICAgIF9jb250ZXh0LnRvZG9zLmZpbmRBbmRSZXBsYWNlKHQgPT4gdC5pZCA9PT0gdG9kby5pZCwgdG9kbyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gICAgX2NvbnRleHQudG9kb3MuYWRkKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEluYm94VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZE1hbnkodCA9PiB0Lmxpc3RJZCA9PT0gdW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQgfTogeyBsaXN0SWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZE1hbnkodCA9PiB0Lmxpc3RJZCA9PT0gbGlzdElkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9CeUlkKHsgdG9kb0lkIH06IHsgdG9kb0lkOiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIF9jb250ZXh0LnRvZG9zLmZpbmQodCA9PiB0LmlkID09PSB0b2RvSWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kb0J5SWQoeyB0b2RvSWQgfTogeyB0b2RvSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBfY29udGV4dC50b2Rvcy5maW5kQW5kUmVtb3ZlKHQgPT4gdC5pZCA9PT0gdG9kb0lkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUb2RvLFxyXG4gICAgZ2V0SW5ib3hUb2RvcyxcclxuICAgIGdldFRvZG9zQnlMaXN0SWQsXHJcbiAgICB1cGRhdGVUb2RvLFxyXG4gICAgZ2V0VG9kb0J5SWQsXHJcbiAgICBkZWxldGVUb2RvQnlJZCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRCdXR0b24nO1xyXG5pbXBvcnQgQ2FuY2VsQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FuY2VsQnV0dG9uJztcclxuaW1wb3J0IEZvcm1JbnB1dEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybUlucHV0R3JvdXAnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNlbGVjdEdyb3VwJztcclxuaW1wb3J0IEZvcm1UZXh0QXJlYUdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVRleHRBcmVhR3JvdXAnO1xyXG5pbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBQcmlvcml0eSwgY3JlYXRlVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgVmlld1Byb3BzLCBuYXZpZ2F0ZSB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBjYW1lbENhc2VUb1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ3MnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGFzayhwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgeyBsaXN0SWQgfSA9IHByb3BzLnF1ZXJ5UGFyYW1zO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoQWRkVGFza0Zvcm0oKSk7XHJcblxyXG4gIGZ1bmN0aW9uIEFkZFRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uaWQgPSBpZHMuQUREX1RBU0tfRk9STTtcclxuICAgIGZvcm0uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgbWF4V2lkdGg6ICc2MDBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybUdyb3VwQ29udGFpbmVyU3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgZ2FwOiAnMC4yNXJlbScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1MYWJlbFN0eWxlcygpIHtcclxuICAgICAgcmV0dXJuIGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybUlucHV0U3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjI1cmVtJyxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzJiMmEyYScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1PcHRpb25TdHlsZXMoKSB7XHJcbiAgICAgIHJldHVybiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlSW5wdXRHcm91cCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSxcclxuICAgICAgbGFiZWxUZXh0OiAnVGl0bGUnLFxyXG4gICAgICBsYWJlbFN0eWxlczogZm9ybUxhYmVsU3R5bGVzKCksXHJcbiAgICAgIGlucHV0SWQ6ICd0aXRsZScsXHJcbiAgICAgIGlucHV0TmFtZTogJ3RpdGxlJyxcclxuICAgICAgaW5wdXRUeXBlOiAndGV4dCcsXHJcbiAgICAgIGlucHV0U3R5bGVzOiBmb3JtSW5wdXRTdHlsZXMoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSB0aXRsZUlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhR3JvdXAgPSBGb3JtVGV4dEFyZWFHcm91cCh7XHJcbiAgICAgIGNvbnRhaW5lclN0eWxlczogZm9ybUdyb3VwQ29udGFpbmVyU3R5bGVzKCkgKyAnZmxleDoxOycsXHJcbiAgICAgIGxhYmVsVGV4dDogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgbGFiZWxTdHlsZXM6IGZvcm1MYWJlbFN0eWxlcygpLFxyXG4gICAgICB0ZXh0QXJlYUlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICB0ZXh0QXJlYU5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgIHRleHRBcmVhU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0nLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMmIyYTJhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID1cclxuICAgICAgZGVzY3JpcHRpb25UZXh0QXJlYUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0R3JvdXAgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGNvbnRhaW5lclN0eWxlczogZm9ybUdyb3VwQ29udGFpbmVyU3R5bGVzKCksXHJcbiAgICAgIGxhYmVsVGV4dDogJ0R1ZSBEYXRlJyxcclxuICAgICAgbGFiZWxTdHlsZXM6IGZvcm1MYWJlbFN0eWxlcygpLFxyXG4gICAgICBpbnB1dElkOiAnZHVlRGF0ZScsXHJcbiAgICAgIGlucHV0TmFtZTogJ2R1ZURhdGUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICdkYXRlJyxcclxuICAgICAgaW5wdXRTdHlsZXM6IGZvcm1JbnB1dFN0eWxlcygpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZHVlRGF0ZUlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdEdyb3VwID0gRm9ybVNlbGVjdEdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSxcclxuICAgICAgbGFiZWxUZXh0OiAnUHJpb3JpdHknLFxyXG4gICAgICBsYWJlbFN0eWxlczogZm9ybUxhYmVsU3R5bGVzKCksXHJcbiAgICAgIHNlbGVjdElkOiAncHJpb3JpdHknLFxyXG4gICAgICBzZWxlY3ROYW1lOiAncHJpb3JpdHknLFxyXG4gICAgICBzZWxlY3RTdHlsZXM6IGZvcm1JbnB1dFN0eWxlcygpLFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnU2VsZWN0IGEgcHJpb3JpdHknLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHN0eWxlczogZm9ybU9wdGlvblN0eWxlcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnTG93JyxcclxuICAgICAgICAgIHZhbHVlOiAnTG93JyxcclxuICAgICAgICAgIHN0eWxlczogZm9ybU9wdGlvblN0eWxlcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnTWVkaXVtJyxcclxuICAgICAgICAgIHZhbHVlOiAnTWVkaXVtJyxcclxuICAgICAgICAgIHN0eWxlczogZm9ybU9wdGlvblN0eWxlcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnSGlnaCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ0hpZ2gnLFxyXG4gICAgICAgICAgc3R5bGVzOiBmb3JtT3B0aW9uU3R5bGVzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gcHJpb3JpdHlTZWxlY3RHcm91cC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICAgIH1cclxuXHJcbiAgICBbdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25UZXh0QXJlYSwgZHVlRGF0ZUlucHV0XS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlSW5wdXRGb2N1cyk7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUlucHV0Qmx1cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQcmlvcml0eUZvY3VzKCkge1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggNHB4ICMyYjJhMmEnO1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS50cmFuc2l0aW9uID0gJ2JveC1zaGFkb3cgMC4zcyBlYXNlJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnJztcclxuICAgICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlUHJpb3JpdHlGb2N1cyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0R3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXRHcm91cCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0R3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhR3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHRvZG9EYXRhID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIGAke2NhbWVsQ2FzZVRvVGl0bGVDYXNlKHsgc3RyOiBrZXkgfSl9IGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb0RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9ID0gdG9kb0RhdGE7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZUFzRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUgKyAnVDAwOjAwOjAwLjAwMCcpO1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHtcclxuICAgICAgICAgIGxpc3RJZCxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlQXNEYXRlLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IFByaW9yaXR5W3ByaW9yaXR5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHRvZG9TZXJ2aWNlKCk7XHJcbiAgICAgICAgYWRkVG9kbyh7IHRvZG8gfSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gbGlzdElkID8gYC9saXN0cy8ke2xpc3RJZH1gIDogJy8nO1xyXG4gICAgICAgIG5hdmlnYXRlKHJldHVyblVybCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzAuMjVyZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBBZGRCdXR0b24oKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4vLi4vcm91dGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsTXlUYXNrcyhwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnQWxsIE15IFRhc2tzJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrbWFya0ljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEwLjk3IDQuOTdhLjc1Ljc1IDAgMCAxIDEuMDcgMS4wNWwtMy45OSA0Ljk5YS43NS43NSAwIDAgMS0xLjA4LjAyTDQuMzI0IDguMzg0YS43NS43NSAwIDEgMSAxLjA2LTEuMDZsMi4wOTQgMi4wOTMgMy40NzMtNC40MjVhLjI2Ny4yNjcgMCAwIDEgLjAyLS4wMjJ6J1xyXG4gICk7XHJcblxyXG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRvWVlZWU1NREQoeyBkYXRlIH06IHsgZGF0ZTogRGF0ZSB9KSB7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrbWFya0NpcmNsZUljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBmaXJzdFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBmaXJzdFBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00yLjUgOGE1LjUgNS41IDAgMCAxIDguMjUtNC43NjQuNS41IDAgMCAwIC41LS44NjZBNi41IDYuNSAwIDEgMCAxNC41IDhhLjUuNSAwIDAgMC0xIDAgNS41IDUuNSAwIDEgMS0xMSAweidcclxuICApO1xyXG5cclxuICBjb25zdCBzZWNvbmRQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcbiAgc2Vjb25kUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTE1LjM1NCAzLjM1NGEuNS41IDAgMCAwLS43MDgtLjcwOEw4IDkuMjkzIDUuMzU0IDYuNjQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMyAzYS41LjUgMCAwIDAgLjcwOCAwbDctN3onXHJcbiAgKTtcclxuXHJcbiAgc3ZnLmFwcGVuZENoaWxkKGZpcnN0UGF0aCk7XHJcbiAgc3ZnLmFwcGVuZENoaWxkKHNlY29uZFBhdGgpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcbiIsImltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFByaW9yaXR5LCBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGVUb1lZWVlNTUREIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZXMnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgQ2hlY2ttYXJrQ2lyY2xlSWNvbiBmcm9tICcuL0NoZWNrbWFya0NpcmNsZUljb24nO1xyXG5pbXBvcnQgRm9ybVRleHRBcmVhR3JvdXAgZnJvbSAnLi9Gb3JtVGV4dEFyZWFHcm91cCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRGV0YWlscyh7IHRvZG8gfTogeyB0b2RvPzogVG9kbyB9KSB7XHJcbiAgaWYgKHRvZG8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIFBsYWNlaG9sZGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuaWQgPSBpZHMuVE9ET19DQVJEX0RFVEFJTFM7XHJcbiAgY29udGFpbmVyLmRhdGFzZXQudG9kb0lkID0gdG9kbz8uaWQ7XHJcblxyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSB0b2RvLmNvbXBsZXRlID09PSB0cnVlID8gJzUwJScgOiAnJztcclxuXHJcbiAgY29uc3QgYnJlYWRjcnVtYkNvbnRhaW5lciA9IEJyZWFkY3J1bWJDb250YWluZXIoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IGZvcm0gPSBGb3JtKHsgdG9kbyB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFkY3J1bWJDb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGFjZWhvbGRlcigpIHtcclxuICBjb25zdCBwbGFjZWhvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGxhY2VIb2xkZXIuaW5uZXJUZXh0ID0gJ1doYXQgZG8geW91IHdhbnQgdG8gZ2V0IGRvbmU/JztcclxuXHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBDaGVja21hcmtDaXJjbGVJY29uKHsgaGVpZ2h0OiA0MCwgd2lkdGg6IDQwLCBmaWxsOiAnY3VycmVudENvbG9yJyB9KVxyXG4gICk7XHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VIb2xkZXIpO1xyXG5cclxuICByZXR1cm4gcGxhY2Vob2xkZXJDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJyZWFkY3J1bWJDb250YWluZXIoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgbGlzdCA9IGxpc3RTZXJ2aWNlKCkuZ2V0TGlzdEJ5SWQoeyBpZDogdG9kby5saXN0SWQgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIHBhZGRpbmc6ICcwIDAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJyZWFkY3J1bWJMaW5rID0gTGluayh7XHJcbiAgICBsaW5rVGV4dDogYE15IExpc3RzID4gJHtsaXN0ID8gbGlzdC5uYW1lLnRvVXBwZXJDYXNlKCkgOiAnSU5CT1gnfWAsXHJcbiAgICBocmVmOiBsaXN0ID8gYC9saXN0cy8ke2xpc3QuaWR9P3RvZG9JZD0ke3RvZG8uaWR9YCA6IGAvP3RvZG9JZD0ke3RvZG8uaWR9YCxcclxuICAgIHN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaW5rTW91c2VPdmVyKCkge1xyXG4gICAgYnJlYWRjcnVtYkxpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpbmtNb3VzZU91dCgpIHtcclxuICAgIGJyZWFkY3J1bWJMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XHJcbiAgfVxyXG5cclxuICBicmVhZGNydW1iTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVMaW5rTW91c2VPdmVyKTtcclxuICBicmVhZGNydW1iTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUxpbmtNb3VzZU91dCk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChicmVhZGNydW1iTGluayk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvcm0oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBmb3JtLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gICAgZmxleDogJzEnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0aXRsZUlucHV0ID0gVGl0bGVJbnB1dCh7IHRvZG8gfSk7XHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gRHVlRGF0ZUlucHV0KHsgdG9kbyB9KTtcclxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IFByaW9yaXR5U2VsZWN0KHsgdG9kbyB9KTtcclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwID0gRGVzY3JpcHRpb25UZXh0QXJlYSh7IHRvZG8gfSk7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xyXG5cclxuICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGl0bGVJbnB1dCh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcclxuICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcclxuICB0aXRsZUlucHV0LnRpdGxlID0gJ1RpdGxlJztcclxuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcclxuICB0aXRsZUlucHV0LmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuICB0aXRsZUlucHV0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZm9udFNpemU6ICcxLjVyZW0nLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8udGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2RvVXBkYXRlZCcpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlSW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIER1ZURhdGVJbnB1dCh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICAvLyBzdHlsZXMgZm9yIHBzZXVkbyBlbGVtZW50cyBpbiBpbmRleC5jc3NcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlJztcclxuICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBmb3JtYXREYXRlVG9ZWVlZTU1ERCh7IGRhdGU6IHRvZG8uZHVlRGF0ZSB9KTtcclxuICBkdWVEYXRlSW5wdXQudGl0bGUgPSAnRHVlIERhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcbiAgZHVlRGF0ZUlucHV0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAwLjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICB0b2RvLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlSW5wdXQudmFsdWUgKyAnVDAwOjAwOjAwLjAwMCcpO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICBkdWVEYXRlSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcbiAgcmV0dXJuIGR1ZURhdGVJbnB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpb3JpdHlTZWxlY3QoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0QmFja2dyb3VuZCgpIHtcclxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBQcmlvcml0eS5IaWdoKSB7XHJcbiAgICAgIHJldHVybiAncmVkJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gUHJpb3JpdHkuTWVkaXVtKSB7XHJcbiAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ2dyZWVuJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdENvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRvZG8ucHJpb3JpdHkgPT09IFByaW9yaXR5Lk1lZGl1bSA/ICdibGFjaycgOiAnI2ZmZmZmZic7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcclxuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICBwcmlvcml0eVNlbGVjdC50aXRsZSA9ICdQcmlvcml0eSc7XHJcbiAgcHJpb3JpdHlTZWxlY3QuZGlzYWJsZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG4gIHByaW9yaXR5U2VsZWN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgbWFyZ2luTGVmdDogJzAuNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBnZXRTZWxlY3RCYWNrZ3JvdW5kKCksXHJcbiAgICBjb2xvcjogZ2V0U2VsZWN0Q29sb3IoKSxcclxuICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXS5tYXAobyA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IG87XHJcbiAgICBvcHRpb24udGV4dCA9IG87XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBvID09PSB0b2RvLnByaW9yaXR5O1xyXG4gICAgb3B0aW9uLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBmb250U2l6ZTogJzAuODVyZW0nLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICB0b2RvLnByaW9yaXR5ID0gUHJpb3JpdHlbcHJpb3JpdHlTZWxlY3QudmFsdWVdO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFNlbGVjdEJhY2tncm91bmQoKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmNvbG9yID0gZ2V0U2VsZWN0Q29sb3IoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggMHB4IDRweCAjMmIyYTJhJztcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLnRyYW5zaXRpb24gPSAnYm94LXNoYWRvdyAwLjNzIGVhc2UnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcnO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpb3JpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcblxyXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZCguLi5wcmlvcml0eU9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gcHJpb3JpdHlTZWxlY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2NyaXB0aW9uVGV4dEFyZWEoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cCA9IEZvcm1UZXh0QXJlYUdyb3VwKHtcclxuICAgIGNvbnRhaW5lclN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMC4yNXJlbScsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgfSksXHJcbiAgICBsYWJlbFRleHQ6ICdEZXNjcmlwdGlvbicsXHJcbiAgICBsYWJlbFN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgcGFkZGluZzogJzAgMC41cmVtJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0pLFxyXG4gICAgdGV4dEFyZWFJZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHRleHRBcmVhTmFtZTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHRleHRBcmVhVmFsdWU6IHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICB0ZXh0QXJlYVN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgcGFkZGluZzogJzAuNXJlbSAwLjVyZW0nLFxyXG4gICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0ZXh0QXJlYSA9IGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXAucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuICB0ZXh0QXJlYS5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8uZGVzY3JpcHRpb24gPSB0ZXh0QXJlYS52YWx1ZTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICB0ZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xyXG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgcmV0dXJuIGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhc2hDYW5JY29uKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgZmlsbCxcclxufToge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgZmlsbCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTYgMTZgKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMSAxLjV2MWgzLjVhLjUuNSAwIDAgMSAwIDFoLS41MzhsLS44NTMgMTAuNjZBMiAyIDAgMCAxIDExLjExNSAxNmgtNi4yM2EyIDIgMCAwIDEtMS45OTQtMS44NEwyLjAzOCAzLjVIMS41YS41LjUgMCAwIDEgMC0xSDV2LTFBMS41IDEuNSAwIDAgMSA2LjUgMGgzQTEuNSAxLjUgMCAwIDEgMTEgMS41Wm0tNSAwdjFoNHYtMWEuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDAtLjUuNVpNNC41IDUuMDI5bC41IDguNWEuNS41IDAgMSAwIC45OTgtLjA2bC0uNS04LjVhLjUuNSAwIDEgMC0uOTk4LjA2Wm02LjUzLS41MjhhLjUuNSAwIDAgMC0uNTI4LjQ3bC0uNSA4LjVhLjUuNSAwIDAgMCAuOTk4LjA1OGwuNS04LjVhLjUuNSAwIDAgMC0uNDctLjUyOFpNOCA0LjVhLjUuNSAwIDAgMC0uNS41djguNWEuNS41IDAgMCAwIDEgMFY1YS41LjUgMCAwIDAtLjUtLjVaJ1xyXG4gICk7XHJcblxyXG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IENoZWNrbWFya0ljb24gZnJvbSAnLi9DaGVja21hcmtJY29uJztcclxuaW1wb3J0IFRvZG9EZXRhaWxzIGZyb20gJy4vVG9kb0RldGFpbHMnO1xyXG5pbXBvcnQgVHJhc2hDYW5JY29uIGZyb20gJy4vVHJhc2hDYW5JY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RDYXJkVG9kbyh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwYWRkaW5nOiAnMC41cmVtIDFyZW0nLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBCdXR0b25UZXh0KCkge1xyXG4gICAgcmV0dXJuIHRvZG8uY29tcGxldGVcclxuICAgICAgPyBDaGVja21hcmtJY29uKHsgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBmaWxsOiAnY3VycmVudENvbG9yJyB9KVxyXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29tcGxldGVCdXR0b24uYXBwZW5kQ2hpbGQoQnV0dG9uVGV4dCgpKTtcclxuICBjb21wbGV0ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgY29tcGxldGVCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzFyZW0nLFxyXG4gICAgYXNwZWN0UmF0aW86ICcxJyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZmZmZicsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBTcGFuU3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiB0b2RvLmNvbXBsZXRlID8gJ2xpbmUtdGhyb3VnaCcgOiAnJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgc3Bhbi5zdHlsZS5jc3NUZXh0ID0gU3BhblN0eWxlcygpO1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoXHJcbiAgICBUcmFzaENhbkljb24oeyBoZWlnaHQ6IDE2LCB3aWR0aDogMTYsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgKTtcclxuICBkZWxldGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gIGRlbGV0ZUJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMXJlbScsXHJcbiAgICBhc3BlY3RSYXRpbzogJzEnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gIGlmICh0b2RvLmNvbXBsZXRlKSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0b2RvLmNvbXBsZXRlID0gIXRvZG8uY29tcGxldGU7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9VcGRhdGVkJykpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9DYXJkRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkcy5UT0RPX0NBUkRfREVUQUlMUyk7XHJcblxyXG4gICAgaWYgKHRvZG9DYXJkRGV0YWlscy5kYXRhc2V0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VG9kb0lkID0gdG9kb0NhcmREZXRhaWxzLmRhdGFzZXQudG9kb0lkO1xyXG5cclxuICAgIGlmIChjdXJyZW50VG9kb0lkICE9PSB0b2RvLmlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RvQ2FyZCA9IHRvZG9DYXJkRGV0YWlscy5wYXJlbnRFbGVtZW50O1xyXG4gICAgdG9kb0NhcmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChUb2RvRGV0YWlscyh7IHRvZG8gfSkpO1xyXG4gIH1cclxuXHJcbiAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDb21wbGV0ZUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0b2RvU2VydmljZSgpLmRlbGV0ZVRvZG9CeUlkKHsgdG9kb0lkOiB0b2RvLmlkIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9VcGRhdGVkJykpO1xyXG4gICAgY29uc3QgdG9kb0NhcmREZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlRPRE9fQ0FSRF9ERVRBSUxTKTtcclxuXHJcbiAgICBpZiAodG9kb0NhcmREZXRhaWxzLmRhdGFzZXQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvSWQgPSB0b2RvQ2FyZERldGFpbHMuZGF0YXNldC50b2RvSWQ7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUb2RvSWQgIT09IHRvZG8uaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9DYXJkID0gdG9kb0NhcmREZXRhaWxzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0b2RvQ2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKFRvZG9EZXRhaWxzKHt9KSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVCdXR0b25DbGljayk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3ZlcigpIHtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNlOTcwJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3Zlcik7XHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaXN0Q2FyZFRvZG8gZnJvbSAnLi9MaXN0Q2FyZFRvZG8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENhcmQoe1xyXG4gIGxpc3RJZCxcclxuICB0b2RvSWQsXHJcbn06IHtcclxuICBsaXN0SWQ6IHN0cmluZztcclxuICB0b2RvSWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCB0b2RvcyA9IHRvZG9TZXJ2aWNlKCkuZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9KTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIGlmICh0b2Rvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgY29uc3QgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYWNlSG9sZGVyLmlubmVyVGV4dCA9ICdMb29rcyBsaWtlIHlvdSBnb3QgaXQgYWxsIGRvbmUhIPCfjoknO1xyXG4gICAgcGxhY2VIb2xkZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9KTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGxhY2VIb2xkZXIpO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBsaXN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjI1cmVtJyxcclxuICB9KTtcclxuXHJcbiAgbGlzdC5hcHBlbmQoLi4uVG9kb0xpc3RJdGVtcyh7IGxpc3RJZCwgdG9kb0lkIH0pKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlzdENsaWNrKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgIGNvbnN0IHRhcmdldFRvZG8gPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgIGlmICh0YXJnZXRUb2RvID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RvcyA9IFsuLi5saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyldO1xyXG5cclxuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xyXG4gICAgICBpZiAodG9kby5pZCAhPT0gdGFyZ2V0VG9kby5pZCkge1xyXG4gICAgICAgIHRvZG8uc3R5bGUuY3NzVGV4dCA9ICcnO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3RvZG9JZCcsIHRvZG8uaWQpO1xyXG4gICAgICB0b2RvLnN0eWxlLmNzc1RleHQgPSBoaWdobGlnaHRlZEl0ZW1TdHlsZXMoKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9kb1VwZGF0ZWQnLCBoYW5kbGVUb2RvVXBkYXRlKTtcclxuICAgICAgbmF2aWdhdGUodXJsLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUxpc3RDbGljayk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZG9VcGRhdGUoKSB7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGlzdC5hcHBlbmQoLi4uVG9kb0xpc3RJdGVtcyh7IGxpc3RJZCwgdG9kb0lkIH0pKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9VcGRhdGVkJywgaGFuZGxlVG9kb1VwZGF0ZSk7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb2RvTGlzdEl0ZW1zKHtcclxuICBsaXN0SWQsXHJcbiAgdG9kb0lkLFxyXG59OiB7XHJcbiAgbGlzdElkOiBzdHJpbmc7XHJcbiAgdG9kb0lkPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgdG9kb3MgPSB0b2RvU2VydmljZSgpLmdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQgfSk7XHJcbiAgcmV0dXJuIHRvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChMaXN0Q2FyZFRvZG8oeyB0b2RvIH0pKTtcclxuICAgIGl0ZW0uaWQgPSB0b2RvLmlkO1xyXG5cclxuICAgIGlmICh0b2RvLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gaGlnaGxpZ2h0ZWRJdGVtU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodGVkSXRlbVN0eWxlcygpIHtcclxuICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggNHB4IDBweCAjMDA5M2U5JyxcclxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuM3MgZWFzZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0SGVhZGluZyh7XHJcbiAgaGVhZGluZ1RleHQsXHJcbiAgbGlzdElkLFxyXG59OiB7XHJcbiAgaGVhZGluZ1RleHQ6IHN0cmluZztcclxuICBsaXN0SWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBnYXA6ICcycmVtJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogJzFyZW0gMS4yNXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIExpbmsoe1xyXG4gICAgICBsaW5rVGV4dDogJ0FkZCBUYXNrJyxcclxuICAgICAgaHJlZjogbGlzdElkID8gYC90YXNrcy9hZGQ/bGlzdElkPSR7bGlzdElkfWAgOiAnL3Rhc2tzL2FkZCcsXHJcbiAgICAgIHN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBwYWRkaW5nOiAnMC4yNXJlbSAxcmVtJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZmZmZicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyNDI0Mic7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0NhcmQoKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgZmxleDogJzEnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG4iLCJpbXBvcnQgTGlzdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0Q2FyZCc7XHJcbmltcG9ydCBMaXN0SGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RIZWFkaW5nJztcclxuaW1wb3J0IFRvZG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0NhcmQnO1xyXG5pbXBvcnQgVG9kb0RldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvRGV0YWlscyc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3REZXRhaWwocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHByb3BzLnBhdGhQYXJhbXM7XHJcbiAgY29uc3QgeyB0b2RvSWQgfSA9IHByb3BzLnF1ZXJ5UGFyYW1zO1xyXG4gIGNvbnN0IHsgZ2V0TGlzdEJ5SWQgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgY29uc3QgbGlzdCA9IGdldExpc3RCeUlkKHsgaWQgfSk7XHJcbiAgY29uc3QgeyBnZXRUb2RvQnlJZCB9ID0gdG9kb1NlcnZpY2UoKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcycmVtJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSk7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICBmdW5jdGlvbiBnZXRDYXJkQ29udGFpbmVyRGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gMTAwMCA/ICdyb3cnIDogJ2NvbHVtbic7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246IGdldENhcmRDb250YWluZXJEaXJlY3Rpb24oKSxcclxuICAgIGdhcDogJzFyZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSk7XHJcblxyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoTGlzdENhcmQoeyBsaXN0SWQ6IGxpc3Q/LmlkLCB0b2RvSWQgfSkpO1xyXG5cclxuICBjb25zdCB0b2RvQ2FyZCA9IFRvZG9DYXJkKCk7XHJcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBUb2RvRGV0YWlscyh7XHJcbiAgICB0b2RvOiBnZXRUb2RvQnlJZCh7IHRvZG9JZCB9KSxcclxuICB9KTtcclxuXHJcbiAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpO1xyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIExpc3RIZWFkaW5nKHtcclxuICAgICAgaGVhZGluZ1RleHQ6IGxpc3QgPyBsaXN0Lm5hbWUgOiAnSW5ib3gnLFxyXG4gICAgICBsaXN0SWQ6IGxpc3Q/LmlkLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICBjYXJkQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBnZXRDYXJkQ29udGFpbmVyRGlyZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlEYXkocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ015IERheSc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dFdlZWsocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ05leHQgNyBEYXlzJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnTm90IEZvdW5kJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCBBZGRMaXN0IGZyb20gJy4vdmlld3MvQWRkTGlzdCc7XHJcbmltcG9ydCBBZGRUYXNrIGZyb20gJy4vdmlld3MvQWRkVGFzayc7XHJcbmltcG9ydCBBbGxNeVRhc2tzIGZyb20gJy4vdmlld3MvQWxsTXlUYXNrcyc7XHJcbmltcG9ydCBMaXN0RGV0YWlsIGZyb20gJy4vdmlld3MvTGlzdERldGFpbCc7XHJcbmltcG9ydCBNeURheSBmcm9tICcuL3ZpZXdzL015RGF5JztcclxuaW1wb3J0IE5leHRXZWVrIGZyb20gJy4vdmlld3MvTmV4dFdlZWsnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi92aWV3cy9Ob3RGb3VuZCc7XHJcblxyXG5leHBvcnQgdHlwZSBWaWV3UHJvcHMgPSB7XHJcbiAgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICBwYXRoUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHF1ZXJ5UGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59O1xyXG5cclxudHlwZSBSb3V0ZSA9IHtcclxuICBxdWVyeT86IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgdmlldzogKHByb3BzOiBWaWV3UHJvcHMpID0+IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIE1hdGNoID0ge1xyXG4gIHJvdXRlOiBSb3V0ZTtcclxuICByZXN1bHQ6IFJlZ0V4cE1hdGNoQXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyKCkge1xyXG4gIGNvbnN0IHJvdXRlczogUm91dGVbXSA9IFtcclxuICAgIHsgcGF0aDogJy8nLCB2aWV3OiBMaXN0RGV0YWlsIH0sXHJcbiAgICB7IHBhdGg6ICcvbXktZGF5JywgdmlldzogTXlEYXkgfSxcclxuICAgIHsgcGF0aDogJy9uZXh0LXNldmVuLWRheXMnLCB2aWV3OiBOZXh0V2VlayB9LFxyXG4gICAgeyBwYXRoOiAnL3Rhc2tzJywgdmlldzogQWxsTXlUYXNrcyB9LFxyXG4gICAgeyBwYXRoOiAnL3Rhc2tzL2FkZCcsIHZpZXc6IEFkZFRhc2sgfSxcclxuICAgIHsgcGF0aDogJy9saXN0cy9hZGQnLCB2aWV3OiBBZGRMaXN0IH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvOmlkJywgdmlldzogTGlzdERldGFpbCB9LFxyXG4gIF0ubWFwKHJvdXRlID0+IHtcclxuICAgIHJvdXRlLnBhdGggPSBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyByb3V0ZS5wYXRoO1xyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXRjaCBwYXRoIGZyb20gYmVnaW5uaW5nIHRvIGVuZFxyXG4gIC8vIGVzY2FwZSBmb3J3YXJkIHNsYXNoZXNcclxuICAvLyByZXBsYWNlIHBhdGggcGxhY2Vob2xkZXJzXHJcbiAgLy8gd2l0aCBjYXB0dXJlIGdyb3Vwc1xyXG4gIGNvbnN0IG1hdGNoZXM6IE1hdGNoW10gPSByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICByb3V0ZSxcclxuICAgIHJlc3VsdDogbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goXHJcbiAgICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgICAgJ14nICsgcm91dGUucGF0aC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOlxcdysvZywgJyguKyknKSArICckJ1xyXG4gICAgICApXHJcbiAgICApLFxyXG4gIH0pKTtcclxuXHJcbiAgbGV0IG1hdGNoID0gbWF0Y2hlcy5maW5kKG1hdGNoID0+IG1hdGNoLnJlc3VsdCAhPT0gbnVsbCk7XHJcblxyXG4gIGlmIChtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXRjaCA9IHtcclxuICAgICAgcm91dGU6IHtcclxuICAgICAgICBxdWVyeTogbG9jYXRpb24uc2VhcmNoLFxyXG4gICAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIHZpZXc6IE5vdEZvdW5kLFxyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHQ6IFtsb2NhdGlvbi5wYXRobmFtZV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2gucm91dGUucXVlcnkgPSBsb2NhdGlvbi5zZWFyY2g7XHJcblxyXG4gIGNvbnN0IHBhdGhQYXJhbXMgPSBbLi4ubWF0Y2gucm91dGUucGF0aC5tYXRjaEFsbCgvOihcXHcrKS9nKV1cclxuICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdFsxXSlcclxuICAgIC5yZWR1Y2UoXHJcbiAgICAgIChwcmV2LCBjdXJyLCBpKSA9PiAoeyAuLi5wcmV2LCBbY3Vycl06IG1hdGNoLnJlc3VsdC5zbGljZSgxKVtpXSB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbWF0Y2gucm91dGUucXVlcnk/LnNwbGl0KCc/JylbMV07XHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPVxyXG4gICAgcXVlcnlTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IHt9XHJcbiAgICAgIDogcXVlcnlTdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGN1cnIuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICBba2V5XTogZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIG1hdGNoLnJvdXRlLnZpZXcoeyBwYXJlbnQsIHBhdGhQYXJhbXMsIHF1ZXJ5UGFyYW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUodXJsOiBzdHJpbmcpIHtcclxuICBjb25zdCB1cmxUZXh0ID0gL15cXC8vLnRlc3QodXJsKSA/IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIHVybCA6IHVybDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmxUZXh0KTtcclxuICByb3V0ZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgJy4vYXNzZXRzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IG5hdmlnYXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlJPT1QpO1xyXG5yb290LmFwcGVuZENoaWxkKExheW91dCgpKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgJ2NsaWNrJyxcclxuICAoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcclxuICAgIGlmIChsaW5rICE9PSBudWxsICYmIGxpbmsubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG5hdmlnYXRlKGxpbmsuaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxucm91dGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
