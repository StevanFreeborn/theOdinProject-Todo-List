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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDNUIsT0FBTyxFQUNQLENBQUMsQ0FBa0MsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2hELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixlQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyxDQUNGLENBQUM7QUFFRixNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9hc3NldHMvaW5kZXguY3NzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb25zdGFudHMvZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9IYW1idXJnZXJJY29uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kYXRhL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL2xpc3RTZXJ2aWNlLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpbmsudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2TGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTXlMaXN0cy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQWRkQnV0dG9uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NhbmNlbEJ1dHRvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtSW5wdXRHcm91cC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9pZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3RyaW5ncy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0FkZExpc3QudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVNlbGVjdEdyb3VwLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1UZXh0QXJlYUdyb3VwLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvdG9kby50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc2VydmljZXMvdG9kb1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0FkZFRhc2sudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2ttYXJrSWNvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvZGF0ZXMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2ttYXJrQ2lyY2xlSWNvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ub2RvRGV0YWlscy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9UcmFzaENhbkljb24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdENhcmRUb2RvLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpc3RDYXJkLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpc3RIZWFkaW5nLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RvZG9DYXJkLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9MaXN0RGV0YWlsLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9Ob3RGb3VuZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCRUdJTiBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLyogRU5EIFJFU0VUUyAqL1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG4jcm9vdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkOmZvY3VzLFxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkOmZvY3VzLFxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLyogQkVHSU4gUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi8qIEVORCBSRVNFVFMgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbiNyb290IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQ6Zm9jdXMsXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZDpmb2N1cyxcXHJcXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgY29uc3QgaWRzID0ge1xyXG4gIFJPT1Q6ICdyb290JyxcclxuICBQUklNQVJZX05BVl9MSVNUOiAncHJpbWFyeU5hdkxpc3QnLFxyXG4gIE1ZX0xJU1RTX0NPTlRBSU5FUjogJ215TGlzdHNDb250YWluZXInLFxyXG4gIE1ZX0xJU1RTOiAnbXlMaXN0cycsXHJcbiAgQUREX0xJU1RfRk9STTogJ2FkZExpc3RGb3JtJyxcclxuICBBRERfVEFTS19GT1JNOiAnYWRkVGFza0Zvcm0nLFxyXG4gIFRPRE9fQ0FSRF9ERVRBSUxTOiAndG9kb0NhcmQnLFxyXG4gIFRPR0dMRV9TSURFQkFSX0JVVFRPTjogJ3RvZ2dsZVNpZGViYXJCdXR0b24nLFxyXG4gIE5BVl9IRUFESU5HOiAnbmF2SGVhZGluZycsXHJcbn07XHJcbiIsImZ1bmN0aW9uIGNhbWVsVG9LZWJhYihjYW1lbENhc2VTdHJpbmc6IHN0cmluZykge1xyXG4gIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlubGluZVN0eWxlcyhzdHlsZXM6IG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZSgoaW5saW5lU3R5bGVzLCBwcm9wZXJ0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtpbmxpbmVTdHlsZXN9JHtjYW1lbFRvS2ViYWIocHJvcGVydHkpfToke3ZhbHVlfTtgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmxpbmVTdHlsZXM7XHJcbiAgfSwgJycpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbWJ1cmdlckljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwtcnVsZScsICdldmVub2RkJyk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTIuNSAxMmEuNS41IDAgMCAxIC41LS41aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41em0wLTRhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6J1xyXG4gICk7XHJcblxyXG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoKSB7XHJcbiAgY29uc3QgTElTVFNfS0VZID0gJ2xpc3RzJztcclxuICBjb25zdCBUT0RPU19LRVkgPSAndG9kb3MnO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJdGVtKHsga2V5IH06IHsga2V5OiBzdHJpbmcgfSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGZ1bmN0aW9uIHJldml2ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ2R1ZURhdGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSwgcmV2aXZlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRJdGVtKHsga2V5LCBpdGVtIH06IHsga2V5OiBzdHJpbmc7IGl0ZW06IG9iamVjdCB9KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIGxldCBfbGlzdHM6IExpc3RbXSA9IGdldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSB9KTtcclxuICBsZXQgX3RvZG9zOiBUb2RvW10gPSBnZXRJdGVtKHsga2V5OiBUT0RPU19LRVkgfSk7XHJcblxyXG4gIGlmIChfbGlzdHMgPT0gbnVsbCkge1xyXG4gICAgc2V0SXRlbSh7IGtleTogTElTVFNfS0VZLCBpdGVtOiBbXSB9KTtcclxuICAgIF9saXN0cyA9IGdldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSB9KTtcclxuICB9XHJcblxyXG4gIGlmIChfdG9kb3MgPT0gbnVsbCkge1xyXG4gICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBbXSB9KTtcclxuICAgIF90b2RvcyA9IGdldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgbGlzdHMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiAoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSA9PiB7XHJcbiAgICAgICAgICBfbGlzdHMucHVzaChsaXN0KTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSwgaXRlbTogX2xpc3RzIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE9uZTogKHByZWRpY2F0ZTogKGxpc3Q6IExpc3QpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfbGlzdHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE1hbnk6IChwcmVkaWNhdGU6IChsaXN0OiBMaXN0KSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX2xpc3RzLmZpbHRlcihwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0IHRvZG9zKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkgPT4ge1xyXG4gICAgICAgICAgX3RvZG9zLnB1c2godG9kbyk7XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IF90b2RvcyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmQ6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX3RvZG9zLmZpbmQocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRNYW55OiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF90b2Rvcy5maWx0ZXIocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRBbmRSZXBsYWNlOiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbiwgdG9kbzogVG9kbykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBfdG9kb3MuZmluZEluZGV4KHByZWRpY2F0ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgX3RvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IF90b2RvcyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRBbmRSZW1vdmU6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IF90b2Rvcy5maW5kSW5kZXgocHJlZGljYXRlKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBfdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogX3RvZG9zIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGV4dCB9IGZyb20gJy4uL2RhdGEvY29udGV4dCc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdFNlcnZpY2UoKSB7XHJcbiAgY29uc3QgX2NvbnRleHQgPSBjb250ZXh0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZExpc3QoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSB7XHJcbiAgICBjb25zdCBleGlzdGluZ0xpc3QgPSBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5uYW1lID09PSBsaXN0Lm5hbWUpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xpc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQSBsaXN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRleHQubGlzdHMuYWRkKHsgbGlzdCB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldExpc3RCeUlkKHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWxsTGlzdHMoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE1hbnkobCA9PiBsICE9PSBudWxsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRMaXN0LFxyXG4gICAgZ2V0TGlzdEJ5SWQsXHJcbiAgICBnZXRBbGxMaXN0cyxcclxuICB9O1xyXG59XHJcbiIsInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzIH06IExpbmtQcm9wcykge1xyXG4gIC8vIGlmIGhyZWYgaXMgYW4gYWJzb2x1dGUgb25lIGFwcGVuZFxyXG4gIC8vIHRoZSBlbnZzIGJhc2UgcGF0aC5cclxuICBjb25zdCBocmVmVGV4dCA9IC9eXFwvLy50ZXN0KGhyZWYpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgaHJlZiA6IGhyZWY7XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgbGluay50aXRsZSA9IGxpbmtUZXh0O1xyXG4gIGxpbmsuaHJlZiA9IGhyZWZUZXh0O1xyXG4gIGxpbmsuc3R5bGUuY3NzVGV4dCA9IHN0eWxlcztcclxuICBsaW5rLmRhdGFzZXQubGluayA9ICd0cnVlJztcclxuICBsaW5rLnRleHQgPSBsaW5rVGV4dDtcclxuXHJcbiAgcmV0dXJuIGxpbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3RJdGVtKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG59OiB7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBuYXZMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG5hdkl0ZW0uYXBwZW5kQ2hpbGQoTGluayh7IGxpbmtUZXh0LCBocmVmLCBzdHlsZXM6IG5hdkxpbmtTdHlsZXMgfSkpO1xyXG5cclxuICByZXR1cm4gbmF2SXRlbTtcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlMaXN0cygpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBNeUxpc3RDb250YWluZXIoKTtcclxuICBjb250YWluZXIuYXBwZW5kKE15TGlzdFRpdGxlKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoTGlzdCgpKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG5cclxuICBmdW5jdGlvbiBNeUxpc3RDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBteUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15TGlzdENvbnRhaW5lci5pZCA9IGlkcy5NWV9MSVNUU19DT05UQUlORVI7XHJcblxyXG4gICAgcmV0dXJuIG15TGlzdENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE15TGlzdFRpdGxlKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTXkgTGlzdHMnO1xyXG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGZvbnRTaXplOiAnMS4xNXJlbScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZExpc3RMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcxLjI1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIExpbmsoe1xyXG4gICAgICAgIGxpbmtUZXh0OiAnKycsXHJcbiAgICAgICAgaHJlZjogJy9saXN0cy9hZGQnLFxyXG4gICAgICAgIHN0eWxlczogYWRkTGlzdExpbmtTdHlsZXMsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMDA5M0U5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTGlzdCgpIHtcclxuICAgIGZ1bmN0aW9uIHJlbmRlck5hdkxpbmtJdGVtcygpIHtcclxuICAgICAgY29uc3QgeyBnZXRBbGxMaXN0cyB9ID0gbGlzdFNlcnZpY2UoKTtcclxuICAgICAgY29uc3QgYWxsTGlzdHMgPSBnZXRBbGxMaXN0cygpO1xyXG4gICAgICBjb25zdCBteUxpc3RJdGVtcyA9IGFsbExpc3RzLm1hcChsaXN0ID0+ICh7XHJcbiAgICAgICAgbGlua1RleHQ6IGxpc3QubmFtZSxcclxuICAgICAgICBocmVmOiBgL2xpc3RzLyR7bGlzdC5pZH1gLFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBteUxpc3RJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgIE5hdkxpc3RJdGVtKHsgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsIGhyZWY6IGl0ZW0uaHJlZiB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGlzdC5hcHBlbmQoLi4uaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGlzdC5pZCA9IGlkcy5NWV9MSVNUUztcclxuICAgIGxpc3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJOYXZMaW5rSXRlbXMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMaXN0VXBkYXRlZCgpIHtcclxuICAgICAgcmVuZGVyTmF2TGlua0l0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTXlMaXN0TW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA5M0U5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU15TGlzdE1vdXNlT3V0KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdHNVcGRhdGVkJywgaGFuZGxlTGlzdFVwZGF0ZWQpO1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVNeUxpc3RNb3VzZU92ZXIpO1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU15TGlzdE1vdXNlT3V0KTtcclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IEhhbWJ1cmdlckljb24gZnJvbSAnLi9IYW1idXJnZXJJY29uJztcclxuaW1wb3J0IE15TGlzdHMgZnJvbSAnLi9NeUxpc3RzJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcclxuICBjb25zdCBwcmltYXJ5TmF2TGlua0l0ZW1zID0gW1xyXG4gICAgeyBsaW5rVGV4dDogJ0luYm94JywgaHJlZjogJy8nIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYXNpZGUgPSBBc2lkZSgpO1xyXG4gIGNvbnN0IG5hdkhlYWRlciA9IE5hdkhlYWRlcigpO1xyXG4gIGNvbnN0IG5hdkhlYWRpbmcgPSBuYXZIZWFkZXIucXVlcnlTZWxlY3RvcihcclxuICAgIGAjJHtpZHMuTkFWX0hFQURJTkd9YFxyXG4gICkgYXMgSFRNTEhlYWRpbmdFbGVtZW50O1xyXG4gIGNvbnN0IG5hdiA9IE5hdigpO1xyXG4gIGNvbnN0IG15TGlzdHMgPSBNeUxpc3RzKCk7XHJcbiAgbXlMaXN0cy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JztcclxuXHJcbiAgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XHJcbiAgICBhc2lkZS5zdHlsZS53aWR0aCA9ICc0MHB4JztcclxuICAgIG5hdkhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgbmF2SGVhZGluZy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGVYKDApJztcclxuICAgIG5hdi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGVYKDApJztcclxuICAgIG15TGlzdHMuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlWCgwKSc7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGlkZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdkhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhpZGVFbGVtZW50KTtcclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGlkZUVsZW1lbnQpO1xyXG4gICAgbXlMaXN0cy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGlkZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NpZGViYXIoKSB7XHJcbiAgICBhc2lkZS5zdHlsZS53aWR0aCA9ICcyMDBweCc7XHJcbiAgICBuYXZIZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XHJcbiAgICBuYXZIZWFkaW5nLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBteUxpc3RzLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIG5hdkhlYWRpbmcuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlWCgxKSc7XHJcbiAgICBuYXYuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlWCgxKSc7XHJcbiAgICBteUxpc3RzLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZVgoMSknO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQnV0dG9uQ2xpY2soZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEJ1dHRvbkVsZW1lbnQgfSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XHJcbiAgICBpZiAoYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbi5pZCAhPT0gaWRzLlRPR0dMRV9TSURFQkFSX0JVVFRPTikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXNpZGUuc3R5bGUud2lkdGggPT09ICcyMDBweCcgPyBoaWRlU2lkZWJhcigpIDogc2hvd1NpZGViYXIoKTtcclxuICB9XHJcblxyXG4gIG5hdkhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZ2dsZUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwMCkge1xyXG4gICAgYXNpZGUuc3R5bGUud2lkdGggPSAnNDBweCc7XHJcbiAgICBuYXZIZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgIG5hdkhlYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbXlMaXN0cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgYXNpZGUuYXBwZW5kQ2hpbGQobmF2SGVhZGVyKTtcclxuICBhc2lkZS5hcHBlbmRDaGlsZChuYXYpO1xyXG4gIGFzaWRlLmFwcGVuZENoaWxkKG15TGlzdHMpO1xyXG5cclxuICByZXR1cm4gYXNpZGU7XHJcblxyXG4gIGZ1bmN0aW9uIEFzaWRlKCkge1xyXG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgYXNpZGUuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ3dpZHRoIDAuM3MgZWFzZS1pbi1vdXQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFzaWRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmF2SGVhZGVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRpbmcuaWQgPSBpZHMuTkFWX0hFQURJTkc7XHJcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdHZXQgSXQgRG9uZSc7XHJcbiAgICBoZWFkaW5nLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRvZ2dsZUJ1dHRvbi5pZCA9IGlkcy5UT0dHTEVfU0lERUJBUl9CVVRUT047XHJcbiAgICB0b2dnbGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgdG9nZ2xlQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB9KTtcclxuICAgIHRvZ2dsZUJ1dHRvbi5hcHBlbmRDaGlsZChcclxuICAgICAgSGFtYnVyZ2VySWNvbih7IHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcclxuICAgICk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBnYXA6ICcxcmVtJyxcclxuICAgICAgcGFkZGluZzogJzFyZW0gMHJlbScsXHJcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYXZMaXN0ID0gTmF2TGlzdCgpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBOYXZMaXN0KCkge1xyXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZMaXN0LmlkID0gaWRzLlBSSU1BUllfTkFWX0xJU1Q7XHJcbiAgICBuYXZMaXN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBwcmltYXJ5TmF2TGlua0l0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgIE5hdkxpc3RJdGVtKHtcclxuICAgICAgICBsaW5rVGV4dDogaXRlbS5saW5rVGV4dCxcclxuICAgICAgICBocmVmOiBpdGVtLmhyZWYsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIG5hdkxpc3QuYXBwZW5kKC4uLml0ZW1zKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZMaXN0TW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA5M0U5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5hdkxpc3RNb3VzZU91dChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5hdkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTmF2TGlzdE1vdXNlT3Zlcik7XHJcbiAgICBuYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlTmF2TGlzdE1vdXNlT3V0KTtcclxuXHJcbiAgICByZXR1cm4gbmF2TGlzdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluLmlkID0gJ2FwcCc7XHJcbiAgbWFpbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZsZXg6ICcxJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDkzRTknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwOTNFOSAwJSwgIzgwRDBDNyAxMDAlKScsXHJcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDkzRTknLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFNpZGVCYXIoKSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRCdXR0b24oKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xyXG4gIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgYnV0dG9uLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZmZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uTW91c2VPdmVyKCkge1xyXG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbk1vdXNlT3V0KCkge1xyXG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVCdXR0b25Nb3VzZU92ZXIpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUJ1dHRvbk1vdXNlT3V0KTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FuY2VsQnV0dG9uKCkge1xyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcbiAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbENsaWNrKCkge1xyXG4gICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxDbGljayk7XHJcblxyXG4gIHJldHVybiBjYW5jZWxCdXR0b247XHJcbn1cclxuIiwidHlwZSBWYWxpZElucHV0VHlwZXMgPVxyXG4gIHwgJ2J1dHRvbidcclxuICB8ICdjaGVja2JveCdcclxuICB8ICdjb2xvcidcclxuICB8ICdkYXRlJ1xyXG4gIHwgJ2RhdGV0aW1lLWxvY2FsJ1xyXG4gIHwgJ2VtYWlsJ1xyXG4gIHwgJ2ZpbGUnXHJcbiAgfCAnaGlkZGVuJ1xyXG4gIHwgJ2ltYWdlJ1xyXG4gIHwgJ21vbnRoJ1xyXG4gIHwgJ251bWJlcidcclxuICB8ICdwYXNzd29yZCdcclxuICB8ICdyYWRpbydcclxuICB8ICdyYW5nZSdcclxuICB8ICdyZXNldCdcclxuICB8ICdzZWFyY2gnXHJcbiAgfCAnc3VibWl0J1xyXG4gIHwgJ3RlbCdcclxuICB8ICd0ZXh0J1xyXG4gIHwgJ3RpbWUnXHJcbiAgfCAndXJsJ1xyXG4gIHwgJ3dlZWsnO1xyXG5cclxudHlwZSBGb3JtSW5wdXRHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICBpbnB1dElkOiBzdHJpbmc7XHJcbiAgaW5wdXROYW1lOiBzdHJpbmc7XHJcbiAgaW5wdXRUeXBlOiBWYWxpZElucHV0VHlwZXM7XHJcbiAgaW5wdXRTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtSW5wdXRHcm91cChwcm9wczogRm9ybUlucHV0R3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaHRtbEZvciA9IHByb3BzLmlucHV0SWQ7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LmlkID0gcHJvcHMuaW5wdXRJZDtcclxuICBpbnB1dC5uYW1lID0gcHJvcHMuaW5wdXROYW1lO1xyXG4gIGlucHV0LnR5cGUgPSBwcm9wcy5pbnB1dFR5cGU7XHJcbiAgaW5wdXQuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmlucHV0U3R5bGVzO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcclxuICByZXR1cm4gdXVpZCgpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc051bGxPcldoaXRlU3BhY2UoeyBzdHIgfTogeyBzdHI6IHN0cmluZyB9KSB7XHJcbiAgcmV0dXJuICFzdHIgfHwgc3RyLnRyaW0oKSA9PT0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUb1RpdGxlQ2FzZSh7IHN0ciB9OiB7IHN0cjogc3RyaW5nIH0pIHtcclxuICAvLyBhZGQgc3BhY2UgYmVmb3JlIHVwcGVyIGNhc2UgbGV0dGVyc1xyXG4gIC8vIHJlcGxhY2UgZmlyc3QgY2hhcmFjdGVyIHdpdGggdXBwZXIgY2FzZVxyXG4gIHJldHVybiBzdHJcclxuICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIG1hdGNoID0+IGAgJHttYXRjaH1gKVxyXG4gICAgLnJlcGxhY2UoL14uLywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSlcclxuICAgIC50cmltKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZVNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG50eXBlIExpc3RQYXJhbXMgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgTGlzdCA9IHsgaWQ6IHN0cmluZyB9ICYgTGlzdFBhcmFtcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHsgbmFtZSB9OiBMaXN0UGFyYW1zKTogTGlzdCB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyOiBuYW1lIH0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuYW1lLmxlbmd0aCA+IDE1MCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDE1MCBjaGFyYWN0ZXJzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBfaWQgPSBnZW5lcmF0ZUlkKCk7XHJcbiAgbGV0IF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgcmV0dXJuIF9pZDtcclxuICAgIH0sXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIF9uYW1lO1xyXG4gICAgfSxcclxuICAgIHNldCBuYW1lKG5hbWUpIHtcclxuICAgICAgX25hbWUgPSB2YWxpZGF0ZU5hbWUoeyBuYW1lIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRCdXR0b24nO1xyXG5pbXBvcnQgQ2FuY2VsQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FuY2VsQnV0dG9uJztcclxuaW1wb3J0IEZvcm1JbnB1dEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybUlucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5pbXBvcnQgeyBWaWV3UHJvcHMsIG5hdmlnYXRlIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRMaXN0KHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoQWRkTGlzdEZvcm0oKSk7XHJcblxyXG4gIGZ1bmN0aW9uIEFkZExpc3RGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgd2lkdGg6ICdtaW4tY29udGVudCcsXHJcbiAgICB9KTtcclxuICAgIGZvcm0uaWQgPSBpZHMuQUREX0xJU1RfRk9STTtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXRHcm91cCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBnYXA6ICcwLjI1cmVtJyxcclxuICAgICAgfSksXHJcbiAgICAgIGxhYmVsVGV4dDogJ05hbWUnLFxyXG4gICAgICBsYWJlbFN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNXJlbScsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnB1dElkOiAnbmFtZScsXHJcbiAgICAgIGlucHV0TmFtZTogJ25hbWUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcclxuICAgICAgaW5wdXRTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgICBwYWRkaW5nOiAnMC4yNXJlbScsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyYjJhMmEnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IG5hbWVJbnB1dEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRGb2N1cygpIHtcclxuICAgICAgbmFtZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dEJsdXIoKSB7XHJcbiAgICAgIG5hbWVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlSW5wdXRGb2N1cyk7XHJcbiAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUlucHV0Qmx1cik7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXRHcm91cCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEJ1dHRvbnMoKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogRXZlbnQgJiB7IHRhcmdldDogSFRNTEZvcm1FbGVtZW50IH0pIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCkpO1xyXG5cclxuICAgICAgaWYgKG5hbWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcignTmFtZSBpcyBleHBlY3RlZCB0byBiZSBhIHN0cmluZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KHsgbmFtZSB9KTtcclxuICAgICAgICBjb25zdCB7IGFkZExpc3QgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgICAgICAgYWRkTGlzdCh7IGxpc3QgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2xpc3RzVXBkYXRlZCcpKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuICAgICAgICBuYXZpZ2F0ZShgL2xpc3RzLyR7bGlzdC5pZH1gKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNXJlbScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBDYW5jZWxCdXR0b24oKTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IEFkZEJ1dHRvbigpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwidHlwZSBPcHRpb24gPSB7XHJcbiAgdmFsdWVUZXh0OiBzdHJpbmc7XHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIEZvcm1TZWxlY3RHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICBzZWxlY3RJZDogc3RyaW5nO1xyXG4gIHNlbGVjdE5hbWU6IHN0cmluZztcclxuICBzZWxlY3RTdHlsZXM/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogT3B0aW9uW107XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtU2VsZWN0R3JvdXAocHJvcHM6IEZvcm1TZWxlY3RHcm91cFByb3BzKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5jb250YWluZXJTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5pbm5lclRleHQgPSBwcm9wcy5sYWJlbFRleHQ7XHJcbiAgbGFiZWwuaHRtbEZvciA9IHByb3BzLnNlbGVjdElkO1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgc2VsZWN0LmlkID0gcHJvcHMuc2VsZWN0SWQ7XHJcbiAgc2VsZWN0Lm5hbWUgPSBwcm9wcy5zZWxlY3ROYW1lO1xyXG4gIHNlbGVjdC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuc2VsZWN0U3R5bGVzO1xyXG5cclxuICBwcm9wcy5vcHRpb25zXHJcbiAgICAubWFwKG8gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLnN0eWxlLmNzc1RleHQgPSBvLnN0eWxlcztcclxuICAgICAgb3B0aW9uLnZhbHVlID0gby52YWx1ZTtcclxuICAgICAgb3B0aW9uLnRleHQgPSBvLnZhbHVlVGV4dDtcclxuICAgICAgb3B0aW9uLmRpc2FibGVkID0gby5kaXNhYmxlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gby5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH0pXHJcbiAgICAuZm9yRWFjaChvID0+IHNlbGVjdC5hcHBlbmRDaGlsZChvKSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwidHlwZSBGb3JtVGV4dEFyZWFHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICB0ZXh0QXJlYUlkOiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFOYW1lOiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFWYWx1ZT86IHN0cmluZztcclxuICB0ZXh0QXJlYVN0eWxlcz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1UZXh0QXJlYUdyb3VwKHByb3BzOiBGb3JtVGV4dEFyZWFHcm91cFByb3BzKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5jb250YWluZXJTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5pbm5lclRleHQgPSBwcm9wcy5sYWJlbFRleHQ7XHJcbiAgbGFiZWwuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmxhYmVsU3R5bGVzO1xyXG5cclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgdGV4dGFyZWEuaWQgPSBwcm9wcy50ZXh0QXJlYUlkO1xyXG4gIHRleHRhcmVhLm5hbWUgPSBwcm9wcy50ZXh0QXJlYUlkO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gcHJvcHMudGV4dEFyZWFWYWx1ZSA/IHByb3BzLnRleHRBcmVhVmFsdWUgOiAnJztcclxuICB0ZXh0YXJlYS5zdHlsZS5jc3NUZXh0ID0gcHJvcHMudGV4dEFyZWFTdHlsZXM7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xyXG5pbXBvcnQgeyBpc051bGxPcldoaXRlU3BhY2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmdzJztcclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICBIaWdoID0gJ0hpZ2gnLFxyXG4gIE1lZGl1bSA9ICdNZWRpdW0nLFxyXG4gIExvdyA9ICdMb3cnLFxyXG59XHJcblxyXG50eXBlIFRvZG9QYXJhbXMgPSB7XHJcbiAgbGlzdElkPzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBkdWVEYXRlOiBEYXRlO1xyXG4gIHByaW9yaXR5OiBQcmlvcml0eTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRvZG8gPSB7IGlkOiBzdHJpbmc7IGNvbXBsZXRlOiBib29sZWFuIH0gJiBUb2RvUGFyYW1zO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oe1xyXG4gIGxpc3RJZCxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBkdWVEYXRlLFxyXG4gIHByaW9yaXR5LFxyXG59OiBUb2RvUGFyYW1zKTogVG9kbyB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH06IHsgdGl0bGU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyOiB0aXRsZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpdGxlLmxlbmd0aCA+IDE1MCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRGVzY3JpcHRpb24oeyBkZXNjcmlwdGlvbiB9OiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAyNTUgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRHVlRGF0ZSh7IGR1ZURhdGUgfTogeyBkdWVEYXRlOiBEYXRlIH0pIHtcclxuICAgIHJldHVybiBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVQcmlvcml0eSh7IHByaW9yaXR5IH06IHsgcHJpb3JpdHk6IHN0cmluZyB9KTogUHJpb3JpdHkge1xyXG4gICAgY29uc3QgcHJpb3JpdHlFbnVtID0gUHJpb3JpdHlbcHJpb3JpdHldO1xyXG5cclxuICAgIGlmIChwcmlvcml0eUVudW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ByaW9yaXR5IG11c3QgYmUgSGlnaCwgTWVkaXVtLCBvciBMb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlFbnVtO1xyXG4gIH1cclxuXHJcbiAgbGV0IF9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfdGl0bGUgPSB2YWxpZGF0ZVRpdGxlKHsgdGl0bGUgfSk7XHJcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IHZhbGlkYXRlRGVzY3JpcHRpb24oeyBkZXNjcmlwdGlvbiB9KTtcclxuICBsZXQgX2R1ZURhdGUgPSB2YWxpZGF0ZUR1ZURhdGUoeyBkdWVEYXRlIH0pO1xyXG4gIGxldCBfcHJpb3JpdHkgPSB2YWxpZGF0ZVByaW9yaXR5KHsgcHJpb3JpdHkgfSk7XHJcbiAgbGV0IF9jb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxpc3RJZCgpIHtcclxuICAgICAgcmV0dXJuIF9saXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0IGxpc3RJZChsaXN0SWQpIHtcclxuICAgICAgX2xpc3RJZCA9IGxpc3RJZDtcclxuICAgIH0sXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gX3RpdGxlO1xyXG4gICAgfSxcclxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xyXG4gICAgICBfdGl0bGUgPSB2YWxpZGF0ZVRpdGxlKHsgdGl0bGUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xyXG4gICAgfSxcclxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICBfZGVzY3JpcHRpb24gPSB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGR1ZURhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfZHVlRGF0ZTtcclxuICAgIH0sXHJcbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgIF9kdWVEYXRlID0gdmFsaWRhdGVEdWVEYXRlKHsgZHVlRGF0ZSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXQgcHJpb3JpdHkoKSB7XHJcbiAgICAgIHJldHVybiBfcHJpb3JpdHk7XHJcbiAgICB9LFxyXG4gICAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgIF9wcmlvcml0eSA9IHZhbGlkYXRlUHJpb3JpdHkoeyBwcmlvcml0eSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXQgY29tcGxldGUoKSB7XHJcbiAgICAgIHJldHVybiBfY29tcGxldGU7XHJcbiAgICB9LFxyXG4gICAgc2V0IGNvbXBsZXRlKGNvbXBsZXRlKSB7XHJcbiAgICAgIF9jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRleHQgfSBmcm9tICcuLi9kYXRhL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9TZXJ2aWNlKCkge1xyXG4gIGNvbnN0IF9jb250ZXh0ID0gY29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gICAgX2NvbnRleHQudG9kb3MuZmluZEFuZFJlcGxhY2UodCA9PiB0LmlkID09PSB0b2RvLmlkLCB0b2RvKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgICBfY29udGV4dC50b2Rvcy5hZGQoeyB0b2RvIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0SW5ib3hUb2RvcygpIHtcclxuICAgIHJldHVybiBfY29udGV4dC50b2Rvcy5maW5kTWFueSh0ID0+IHQubGlzdElkID09PSB1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9OiB7IGxpc3RJZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC50b2Rvcy5maW5kTWFueSh0ID0+IHQubGlzdElkID09PSBsaXN0SWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb0J5SWQoeyB0b2RvSWQgfTogeyB0b2RvSWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZCh0ID0+IHQuaWQgPT09IHRvZG9JZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUb2RvQnlJZCh7IHRvZG9JZCB9OiB7IHRvZG9JZDogc3RyaW5nIH0pIHtcclxuICAgIF9jb250ZXh0LnRvZG9zLmZpbmRBbmRSZW1vdmUodCA9PiB0LmlkID09PSB0b2RvSWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZFRvZG8sXHJcbiAgICBnZXRJbmJveFRvZG9zLFxyXG4gICAgZ2V0VG9kb3NCeUxpc3RJZCxcclxuICAgIHVwZGF0ZVRvZG8sXHJcbiAgICBnZXRUb2RvQnlJZCxcclxuICAgIGRlbGV0ZVRvZG9CeUlkLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEFkZEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0FkZEJ1dHRvbic7XHJcbmltcG9ydCBDYW5jZWxCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DYW5jZWxCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUlucHV0R3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtSW5wdXRHcm91cCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0R3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtU2VsZWN0R3JvdXAnO1xyXG5pbXBvcnQgRm9ybVRleHRBcmVhR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVGV4dEFyZWFHcm91cCc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFByaW9yaXR5LCBjcmVhdGVUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyBWaWV3UHJvcHMsIG5hdmlnYXRlIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGNhbWVsQ2FzZVRvVGl0bGVDYXNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUYXNrKHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCB7IGxpc3RJZCB9ID0gcHJvcHMucXVlcnlQYXJhbXM7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChBZGRUYXNrRm9ybSgpKTtcclxuXHJcbiAgZnVuY3Rpb24gQWRkVGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5pZCA9IGlkcy5BRERfVEFTS19GT1JNO1xyXG4gICAgZm9ybS5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgICBtYXhXaWR0aDogJzYwMHB4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSB7XHJcbiAgICAgIHJldHVybiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBnYXA6ICcwLjI1cmVtJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybUxhYmVsU3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtSW5wdXRTdHlsZXMoKSB7XHJcbiAgICAgIHJldHVybiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0nLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMmIyYTJhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybU9wdGlvblN0eWxlcygpIHtcclxuICAgICAgcmV0dXJuIGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGVJbnB1dEdyb3VwID0gRm9ybUlucHV0R3JvdXAoe1xyXG4gICAgICBjb250YWluZXJTdHlsZXM6IGZvcm1Hcm91cENvbnRhaW5lclN0eWxlcygpLFxyXG4gICAgICBsYWJlbFRleHQ6ICdUaXRsZScsXHJcbiAgICAgIGxhYmVsU3R5bGVzOiBmb3JtTGFiZWxTdHlsZXMoKSxcclxuICAgICAgaW5wdXRJZDogJ3RpdGxlJyxcclxuICAgICAgaW5wdXROYW1lOiAndGl0bGUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcclxuICAgICAgaW5wdXRTdHlsZXM6IGZvcm1JbnB1dFN0eWxlcygpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IHRpdGxlSW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWFHcm91cCA9IEZvcm1UZXh0QXJlYUdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSArICdmbGV4OjE7JyxcclxuICAgICAgbGFiZWxUZXh0OiAnRGVzY3JpcHRpb24nLFxyXG4gICAgICBsYWJlbFN0eWxlczogZm9ybUxhYmVsU3R5bGVzKCksXHJcbiAgICAgIHRleHRBcmVhSWQ6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgIHRleHRBcmVhTmFtZTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgdGV4dEFyZWFTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgICBwYWRkaW5nOiAnMC4yNXJlbScsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyYjJhMmEnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPVxyXG4gICAgICBkZXNjcmlwdGlvblRleHRBcmVhR3JvdXAucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXRHcm91cCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSxcclxuICAgICAgbGFiZWxUZXh0OiAnRHVlIERhdGUnLFxyXG4gICAgICBsYWJlbFN0eWxlczogZm9ybUxhYmVsU3R5bGVzKCksXHJcbiAgICAgIGlucHV0SWQ6ICdkdWVEYXRlJyxcclxuICAgICAgaW5wdXROYW1lOiAnZHVlRGF0ZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ2RhdGUnLFxyXG4gICAgICBpbnB1dFN0eWxlczogZm9ybUlucHV0U3R5bGVzKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkdWVEYXRlSW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0R3JvdXAgPSBGb3JtU2VsZWN0R3JvdXAoe1xyXG4gICAgICBjb250YWluZXJTdHlsZXM6IGZvcm1Hcm91cENvbnRhaW5lclN0eWxlcygpLFxyXG4gICAgICBsYWJlbFRleHQ6ICdQcmlvcml0eScsXHJcbiAgICAgIGxhYmVsU3R5bGVzOiBmb3JtTGFiZWxTdHlsZXMoKSxcclxuICAgICAgc2VsZWN0SWQ6ICdwcmlvcml0eScsXHJcbiAgICAgIHNlbGVjdE5hbWU6ICdwcmlvcml0eScsXHJcbiAgICAgIHNlbGVjdFN0eWxlczogZm9ybUlucHV0U3R5bGVzKCksXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdTZWxlY3QgYSBwcmlvcml0eScsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgc3R5bGVzOiBmb3JtT3B0aW9uU3R5bGVzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdMb3cnLFxyXG4gICAgICAgICAgdmFsdWU6ICdMb3cnLFxyXG4gICAgICAgICAgc3R5bGVzOiBmb3JtT3B0aW9uU3R5bGVzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdNZWRpdW0nLFxyXG4gICAgICAgICAgdmFsdWU6ICdNZWRpdW0nLFxyXG4gICAgICAgICAgc3R5bGVzOiBmb3JtT3B0aW9uU3R5bGVzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdIaWdoJyxcclxuICAgICAgICAgIHZhbHVlOiAnSGlnaCcsXHJcbiAgICAgICAgICBzdHlsZXM6IGZvcm1PcHRpb25TdHlsZXMoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBwcmlvcml0eVNlbGVjdEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Rm9jdXMoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRCbHVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gICAgfVxyXG5cclxuICAgIFt0aXRsZUlucHV0LCBkZXNjcmlwdGlvblRleHRBcmVhLCBkdWVEYXRlSW5wdXRdLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVJbnB1dEZvY3VzKTtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlSW5wdXRCbHVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVByaW9yaXR5Rm9jdXMoKSB7XHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcwcHggMHB4IDBweCA0cHggIzJiMmEyYSc7XHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLnRyYW5zaXRpb24gPSAnYm94LXNoYWRvdyAwLjNzIGVhc2UnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcnO1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVQcmlvcml0eUZvY3VzKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXRHcm91cCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dEdyb3VwKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3RHcm91cCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWFHcm91cCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEJ1dHRvbnMoKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogRXZlbnQgJiB7IHRhcmdldDogSFRNTEZvcm1FbGVtZW50IH0pIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdG9kb0RhdGEgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCkuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgYCR7Y2FtZWxDYXNlVG9UaXRsZUNhc2UoeyBzdHI6IGtleSB9KX0gaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmdgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RvRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0gPSB0b2RvRGF0YTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlQXNEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSArICdUMDA6MDA6MDAuMDAwJyk7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oe1xyXG4gICAgICAgICAgbGlzdElkLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGVBc0RhdGUsXHJcbiAgICAgICAgICBwcmlvcml0eTogUHJpb3JpdHlbcHJpb3JpdHldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdG9kb1NlcnZpY2UoKTtcclxuICAgICAgICBhZGRUb2RvKHsgdG9kbyB9KTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuICAgICAgICBjb25zdCByZXR1cm5VcmwgPSBsaXN0SWQgPyBgL2xpc3RzLyR7bGlzdElkfWAgOiAnLyc7XHJcbiAgICAgICAgbmF2aWdhdGUocmV0dXJuVXJsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNXJlbScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBDYW5jZWxCdXR0b24oKTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IEFkZEJ1dHRvbigpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrSWNvbih7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIGZpbGwsXHJcbn06IHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGZpbGwpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDE2IDE2YCk7XHJcblxyXG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTAuOTcgNC45N2EuNzUuNzUgMCAwIDEgMS4wNyAxLjA1bC0zLjk5IDQuOTlhLjc1Ljc1IDAgMCAxLTEuMDguMDJMNC4zMjQgOC4zODRhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwyLjA5NCAyLjA5MyAzLjQ3My00LjQyNWEuMjY3LjI2NyAwIDAgMSAuMDItLjAyMnonXHJcbiAgKTtcclxuXHJcbiAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlVG9ZWVlZTU1ERCh7IGRhdGUgfTogeyBkYXRlOiBEYXRlIH0pIHtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrQ2lyY2xlSWNvbih7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIGZpbGwsXHJcbn06IHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGZpbGwpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDE2IDE2YCk7XHJcblxyXG4gIGNvbnN0IGZpcnN0UGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG4gIGZpcnN0UGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTIuNSA4YTUuNSA1LjUgMCAwIDEgOC4yNS00Ljc2NC41LjUgMCAwIDAgLjUtLjg2NkE2LjUgNi41IDAgMSAwIDE0LjUgOGEuNS41IDAgMCAwLTEgMCA1LjUgNS41IDAgMSAxLTExIDB6J1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNlY29uZFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBzZWNvbmRQYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTUuMzU0IDMuMzU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDggOS4yOTMgNS4zNTQgNi42NDZhLjUuNSAwIDEgMC0uNzA4LjcwOGwzIDNhLjUuNSAwIDAgMCAuNzA4IDBsNy03eidcclxuICApO1xyXG5cclxuICBzdmcuYXBwZW5kQ2hpbGQoZmlyc3RQYXRoKTtcclxuICBzdmcuYXBwZW5kQ2hpbGQoc2Vjb25kUGF0aCk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgUHJpb3JpdHksIFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZVRvWVlZWU1NREQgfSBmcm9tICcuLi91dGlscy9kYXRlcyc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBDaGVja21hcmtDaXJjbGVJY29uIGZyb20gJy4vQ2hlY2ttYXJrQ2lyY2xlSWNvbic7XHJcbmltcG9ydCBGb3JtVGV4dEFyZWFHcm91cCBmcm9tICcuL0Zvcm1UZXh0QXJlYUdyb3VwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9EZXRhaWxzKHsgdG9kbyB9OiB7IHRvZG8/OiBUb2RvIH0pIHtcclxuICBpZiAodG9kbyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gUGxhY2Vob2xkZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5pZCA9IGlkcy5UT0RPX0NBUkRfREVUQUlMUztcclxuICBjb250YWluZXIuZGF0YXNldC50b2RvSWQgPSB0b2RvPy5pZDtcclxuXHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IHRvZG8uY29tcGxldGUgPT09IHRydWUgPyAnNTAlJyA6ICcnO1xyXG5cclxuICBjb25zdCBicmVhZGNydW1iQ29udGFpbmVyID0gQnJlYWRjcnVtYkNvbnRhaW5lcih7IHRvZG8gfSk7XHJcbiAgY29uc3QgZm9ybSA9IEZvcm0oeyB0b2RvIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJlYWRjcnVtYkNvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKCkge1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwbGFjZUhvbGRlci5pbm5lclRleHQgPSAnV2hhdCBkbyB5b3Ugd2FudCB0byBnZXQgZG9uZT8nO1xyXG5cclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIENoZWNrbWFya0NpcmNsZUljb24oeyBoZWlnaHQ6IDQwLCB3aWR0aDogNDAsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgKTtcclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XHJcblxyXG4gIHJldHVybiBwbGFjZWhvbGRlckNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gQnJlYWRjcnVtYkNvbnRhaW5lcih7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBsaXN0ID0gbGlzdFNlcnZpY2UoKS5nZXRMaXN0QnlJZCh7IGlkOiB0b2RvLmxpc3RJZCB9KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgcGFkZGluZzogJzAgMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnJlYWRjcnVtYkxpbmsgPSBMaW5rKHtcclxuICAgIGxpbmtUZXh0OiBgTXkgTGlzdHMgPiAke2xpc3QgPyBsaXN0Lm5hbWUudG9VcHBlckNhc2UoKSA6ICdJTkJPWCd9YCxcclxuICAgIGhyZWY6IGxpc3QgPyBgL2xpc3RzLyR7bGlzdC5pZH0/dG9kb0lkPSR7dG9kby5pZH1gIDogYC8/dG9kb0lkPSR7dG9kby5pZH1gLFxyXG4gICAgc3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpbmtNb3VzZU92ZXIoKSB7XHJcbiAgICBicmVhZGNydW1iTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlua01vdXNlT3V0KCkge1xyXG4gICAgYnJlYWRjcnVtYkxpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcclxuICB9XHJcblxyXG4gIGJyZWFkY3J1bWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUxpbmtNb3VzZU92ZXIpO1xyXG4gIGJyZWFkY3J1bWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlTGlua01vdXNlT3V0KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFkY3J1bWJMaW5rKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gRm9ybSh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGZvcm0uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBUaXRsZUlucHV0KHsgdG9kbyB9KTtcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBEdWVEYXRlSW5wdXQoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gUHJpb3JpdHlTZWxlY3QoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXAgPSBEZXNjcmlwdGlvblRleHRBcmVhKHsgdG9kbyB9KTtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IEV2ZW50KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XHJcblxyXG4gIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXRsZUlucHV0KHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xyXG4gIHRpdGxlSW5wdXQudGl0bGUgPSAnVGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQuZGlzYWJsZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG4gIHRpdGxlSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmb250U2l6ZTogJzEuNXJlbScsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgdG9kby50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9VcGRhdGVkJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0aXRsZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICB0aXRsZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICB9XHJcblxyXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xyXG5cclxuICByZXR1cm4gdGl0bGVJbnB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gRHVlRGF0ZUlucHV0KHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIC8vIHN0eWxlcyBmb3IgcHNldWRvIGVsZW1lbnRzIGluIGluZGV4LmNzc1xyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZURhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdERhdGVUb1lZWVlNTUREKHsgZGF0ZTogdG9kby5kdWVEYXRlIH0pO1xyXG4gIGR1ZURhdGVJbnB1dC50aXRsZSA9ICdEdWUgRGF0ZSc7XHJcbiAgZHVlRGF0ZUlucHV0LmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuICBkdWVEYXRlSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8uZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVJbnB1dC52YWx1ZSArICdUMDA6MDA6MDAuMDAwJyk7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBkdWVEYXRlSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIGR1ZURhdGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuICByZXR1cm4gZHVlRGF0ZUlucHV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcmlvcml0eVNlbGVjdCh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBmdW5jdGlvbiBnZXRTZWxlY3RCYWNrZ3JvdW5kKCkge1xyXG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFByaW9yaXR5LkhpZ2gpIHtcclxuICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBQcmlvcml0eS5NZWRpdW0pIHtcclxuICAgICAgcmV0dXJuICd5ZWxsb3cnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnZ3JlZW4nO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0Q29sb3IoKSB7XHJcbiAgICByZXR1cm4gdG9kby5wcmlvcml0eSA9PT0gUHJpb3JpdHkuTWVkaXVtID8gJ2JsYWNrJyA6ICcjZmZmZmZmJztcclxuICB9XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xyXG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gIHByaW9yaXR5U2VsZWN0LnRpdGxlID0gJ1ByaW9yaXR5JztcclxuICBwcmlvcml0eVNlbGVjdC5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcbiAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgd2lkdGg6ICdtaW4tY29udGVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldFNlbGVjdEJhY2tncm91bmQoKSxcclxuICAgIGNvbG9yOiBnZXRTZWxlY3RDb2xvcigpLFxyXG4gICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLm1hcChvID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gbztcclxuICAgIG9wdGlvbi50ZXh0ID0gbztcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IG8gPT09IHRvZG8ucHJpb3JpdHk7XHJcbiAgICBvcHRpb24uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8ucHJpb3JpdHkgPSBQcmlvcml0eVtwcmlvcml0eVNlbGVjdC52YWx1ZV07XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0U2VsZWN0QmFja2dyb3VuZCgpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuY29sb3IgPSBnZXRTZWxlY3RDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggNHB4ICMyYjJhMmEnO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUudHJhbnNpdGlvbiA9ICdib3gtc2hhZG93IDAuM3MgZWFzZSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuYm94U2hhZG93ID0gJyc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xyXG4gIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKC4uLnByaW9yaXR5T3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBwcmlvcml0eVNlbGVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVzY3JpcHRpb25UZXh0QXJlYSh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwID0gRm9ybVRleHRBcmVhR3JvdXAoe1xyXG4gICAgY29udGFpbmVyU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBnYXA6ICcwLjI1cmVtJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9KSxcclxuICAgIGxhYmVsVGV4dDogJ0Rlc2NyaXB0aW9uJyxcclxuICAgIGxhYmVsU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBwYWRkaW5nOiAnMCAwLjVyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSksXHJcbiAgICB0ZXh0QXJlYUlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdGV4dEFyZWFOYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdGV4dEFyZWFWYWx1ZTogdG9kby5kZXNjcmlwdGlvbixcclxuICAgIHRleHRBcmVhU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBwYWRkaW5nOiAnMC41cmVtIDAuNXJlbScsXHJcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRleHRBcmVhID0gZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG4gIHRleHRBcmVhLmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IHRleHRBcmVhLnZhbHVlO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGV4dEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIHRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICB9XHJcblxyXG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFzaENhbkljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTExIDEuNXYxaDMuNWEuNS41IDAgMCAxIDAgMWgtLjUzOGwtLjg1MyAxMC42NkEyIDIgMCAwIDEgMTEuMTE1IDE2aC02LjIzYTIgMiAwIDAgMS0xLjk5NC0xLjg0TDIuMDM4IDMuNUgxLjVhLjUuNSAwIDAgMSAwLTFINXYtMUExLjUgMS41IDAgMCAxIDYuNSAwaDNBMS41IDEuNSAwIDAgMSAxMSAxLjVabS01IDB2MWg0di0xYS41LjUgMCAwIDAtLjUtLjVoLTNhLjUuNSAwIDAgMC0uNS41Wk00LjUgNS4wMjlsLjUgOC41YS41LjUgMCAxIDAgLjk5OC0uMDZsLS41LTguNWEuNS41IDAgMSAwLS45OTguMDZabTYuNTMtLjUyOGEuNS41IDAgMCAwLS41MjguNDdsLS41IDguNWEuNS41IDAgMCAwIC45OTguMDU4bC41LTguNWEuNS41IDAgMCAwLS40Ny0uNTI4Wk04IDQuNWEuNS41IDAgMCAwLS41LjV2OC41YS41LjUgMCAwIDAgMSAwVjVhLjUuNSAwIDAgMC0uNS0uNVonXHJcbiAgKTtcclxuXHJcbiAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcbiIsImltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgQ2hlY2ttYXJrSWNvbiBmcm9tICcuL0NoZWNrbWFya0ljb24nO1xyXG5pbXBvcnQgVG9kb0RldGFpbHMgZnJvbSAnLi9Ub2RvRGV0YWlscyc7XHJcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSAnLi9UcmFzaENhbkljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENhcmRUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvblRleHQoKSB7XHJcbiAgICByZXR1cm4gdG9kby5jb21wbGV0ZVxyXG4gICAgICA/IENoZWNrbWFya0ljb24oeyB3aWR0aDogNDAsIGhlaWdodDogNDAsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb21wbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChCdXR0b25UZXh0KCkpO1xyXG4gIGNvbXBsZXRlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICBjb21wbGV0ZUJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMXJlbScsXHJcbiAgICBhc3BlY3RSYXRpbzogJzEnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmZmZmJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIFNwYW5TdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uY29tcGxldGUgPyAnbGluZS10aHJvdWdoJyA6ICcnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICBzcGFuLnN0eWxlLmNzc1RleHQgPSBTcGFuU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChcclxuICAgIFRyYXNoQ2FuSWNvbih7IGhlaWdodDogMTYsIHdpZHRoOiAxNiwgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcclxuICApO1xyXG4gIGRlbGV0ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgZGVsZXRlQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6ICcxcmVtJyxcclxuICAgIGFzcGVjdFJhdGlvOiAnMScsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgaWYgKHRvZG8uY29tcGxldGUpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29tcGxldGVCdXR0b25DbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRvZG8uY29tcGxldGUgPSAhdG9kby5jb21wbGV0ZTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9kb1VwZGF0ZWQnKSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0NhcmREZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlRPRE9fQ0FSRF9ERVRBSUxTKTtcclxuXHJcbiAgICBpZiAodG9kb0NhcmREZXRhaWxzLmRhdGFzZXQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvSWQgPSB0b2RvQ2FyZERldGFpbHMuZGF0YXNldC50b2RvSWQ7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUb2RvSWQgIT09IHRvZG8uaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9DYXJkID0gdG9kb0NhcmREZXRhaWxzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0b2RvQ2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKFRvZG9EZXRhaWxzKHsgdG9kbyB9KSk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNvbXBsZXRlQnV0dG9uQ2xpY2spO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25DbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRvZG9TZXJ2aWNlKCkuZGVsZXRlVG9kb0J5SWQoeyB0b2RvSWQ6IHRvZG8uaWQgfSk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9kb1VwZGF0ZWQnKSk7XHJcbiAgICBjb25zdCB0b2RvQ2FyZERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHMuVE9ET19DQVJEX0RFVEFJTFMpO1xyXG5cclxuICAgIGlmICh0b2RvQ2FyZERldGFpbHMuZGF0YXNldCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRvZG9JZCA9IHRvZG9DYXJkRGV0YWlscy5kYXRhc2V0LnRvZG9JZDtcclxuXHJcbiAgICBpZiAoY3VycmVudFRvZG9JZCAhPT0gdG9kby5pZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kb0NhcmQgPSB0b2RvQ2FyZERldGFpbHMucGFyZW50RWxlbWVudDtcclxuICAgIHRvZG9DYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoVG9kb0RldGFpbHMoe30pKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA5M2U5NzAnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoKSB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVDb250YWluZXJNb3VzZU91dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpc3RDYXJkVG9kbyBmcm9tICcuL0xpc3RDYXJkVG9kbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Q2FyZCh7XHJcbiAgbGlzdElkLFxyXG4gIHRvZG9JZCxcclxufToge1xyXG4gIGxpc3RJZDogc3RyaW5nO1xyXG4gIHRvZG9JZD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHRvZG9zID0gdG9kb1NlcnZpY2UoKS5nZXRUb2Rvc0J5TGlzdElkKHsgbGlzdElkIH0pO1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgIGZsZXg6ICcxJyxcclxuICB9KTtcclxuXHJcbiAgaWYgKHRvZG9zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxhY2VIb2xkZXIuaW5uZXJUZXh0ID0gJ0xvb2tzIGxpa2UgeW91IGdvdCBpdCBhbGwgZG9uZSEg8J+OiSc7XHJcbiAgICBwbGFjZUhvbGRlci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGxpc3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzAuMjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBsaXN0LmFwcGVuZCguLi5Ub2RvTGlzdEl0ZW1zKHsgbGlzdElkLCB0b2RvSWQgfSkpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaXN0Q2xpY2soZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgY29uc3QgdGFyZ2V0VG9kbyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgaWYgKHRhcmdldFRvZG8gPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gWy4uLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKV07XHJcblxyXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XHJcbiAgICAgIGlmICh0b2RvLmlkICE9PSB0YXJnZXRUb2RvLmlkKSB7XHJcbiAgICAgICAgdG9kby5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgndG9kb0lkJywgdG9kby5pZCk7XHJcbiAgICAgIHRvZG8uc3R5bGUuY3NzVGV4dCA9IGhpZ2hsaWdodGVkSXRlbVN0eWxlcygpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b2RvVXBkYXRlZCcsIGhhbmRsZVRvZG9VcGRhdGUpO1xyXG4gICAgICBuYXZpZ2F0ZSh1cmwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTGlzdENsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG9kb1VwZGF0ZSgpIHtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsaXN0LmFwcGVuZCguLi5Ub2RvTGlzdEl0ZW1zKHsgbGlzdElkLCB0b2RvSWQgfSkpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9kb1VwZGF0ZWQnLCBoYW5kbGVUb2RvVXBkYXRlKTtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvZG9MaXN0SXRlbXMoe1xyXG4gIGxpc3RJZCxcclxuICB0b2RvSWQsXHJcbn06IHtcclxuICBsaXN0SWQ6IHN0cmluZztcclxuICB0b2RvSWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCB0b2RvcyA9IHRvZG9TZXJ2aWNlKCkuZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9KTtcclxuICByZXR1cm4gdG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKExpc3RDYXJkVG9kbyh7IHRvZG8gfSkpO1xyXG4gICAgaXRlbS5pZCA9IHRvZG8uaWQ7XHJcblxyXG4gICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICBpdGVtLnN0eWxlLmNzc1RleHQgPSBoaWdobGlnaHRlZEl0ZW1TdHlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0ZWRJdGVtU3R5bGVzKCkge1xyXG4gIHJldHVybiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCA0cHggMHB4ICMwMDkzZTknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RIZWFkaW5nKHtcclxuICBoZWFkaW5nVGV4dCxcclxuICBsaXN0SWQsXHJcbn06IHtcclxuICBoZWFkaW5nVGV4dDogc3RyaW5nO1xyXG4gIGxpc3RJZD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGdhcDogJzJyZW0nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiAnMXJlbSAxLjI1cmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2lkdGg6ICdtaW4tY29udGVudCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gaGVhZGluZ1RleHQ7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgTGluayh7XHJcbiAgICAgIGxpbmtUZXh0OiAnQWRkIFRhc2snLFxyXG4gICAgICBocmVmOiBsaXN0SWQgPyBgL3Rhc2tzL2FkZD9saXN0SWQ9JHtsaXN0SWR9YCA6ICcvdGFza3MvYWRkJyxcclxuICAgICAgc3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmZmZmJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNDI0MjQyJztcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU91dChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3Zlcik7XHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvQ2FyZCgpIHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcbiIsImltcG9ydCBMaXN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RDYXJkJztcclxuaW1wb3J0IExpc3RIZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEhlYWRpbmcnO1xyXG5pbXBvcnQgVG9kb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvQ2FyZCc7XHJcbmltcG9ydCBUb2RvRGV0YWlscyBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9EZXRhaWxzJztcclxuaW1wb3J0IHsgVmlld1Byb3BzIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdERldGFpbChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcHJvcHMucGF0aFBhcmFtcztcclxuICBjb25zdCB7IHRvZG9JZCB9ID0gcHJvcHMucXVlcnlQYXJhbXM7XHJcbiAgY29uc3QgeyBnZXRMaXN0QnlJZCB9ID0gbGlzdFNlcnZpY2UoKTtcclxuICBjb25zdCBsaXN0ID0gZ2V0TGlzdEJ5SWQoeyBpZCB9KTtcclxuICBjb25zdCB7IGdldFRvZG9CeUlkIH0gPSB0b2RvU2VydmljZSgpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzJyZW0nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9KTtcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIGZ1bmN0aW9uIGdldENhcmRDb250YWluZXJEaXJlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiAxMDAwID8gJ3JvdycgOiAnY29sdW1uJztcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogZ2V0Q2FyZENvbnRhaW5lckRpcmVjdGlvbigpLFxyXG4gICAgZ2FwOiAnMXJlbScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9KTtcclxuXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChMaXN0Q2FyZCh7IGxpc3RJZDogbGlzdD8uaWQsIHRvZG9JZCB9KSk7XHJcblxyXG4gIGNvbnN0IHRvZG9DYXJkID0gVG9kb0NhcmQoKTtcclxuICBjb25zdCB0b2RvRGV0YWlscyA9IFRvZG9EZXRhaWxzKHtcclxuICAgIHRvZG86IGdldFRvZG9CeUlkKHsgdG9kb0lkIH0pLFxyXG4gIH0pO1xyXG5cclxuICB0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgTGlzdEhlYWRpbmcoe1xyXG4gICAgICBoZWFkaW5nVGV4dDogbGlzdCA/IGxpc3QubmFtZSA6ICdJbmJveCcsXHJcbiAgICAgIGxpc3RJZDogbGlzdD8uaWQsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgIGNhcmRDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IGdldENhcmRDb250YWluZXJEaXJlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnTm90IEZvdW5kJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCBBZGRMaXN0IGZyb20gJy4vdmlld3MvQWRkTGlzdCc7XHJcbmltcG9ydCBBZGRUYXNrIGZyb20gJy4vdmlld3MvQWRkVGFzayc7XHJcbmltcG9ydCBMaXN0RGV0YWlsIGZyb20gJy4vdmlld3MvTGlzdERldGFpbCc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL3ZpZXdzL05vdEZvdW5kJztcclxuXHJcbmV4cG9ydCB0eXBlIFZpZXdQcm9wcyA9IHtcclxuICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHBhdGhQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgcXVlcnlQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn07XHJcblxyXG50eXBlIFJvdXRlID0ge1xyXG4gIHF1ZXJ5Pzogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICB2aWV3OiAocHJvcHM6IFZpZXdQcm9wcykgPT4gdm9pZDtcclxufTtcclxuXHJcbnR5cGUgTWF0Y2ggPSB7XHJcbiAgcm91dGU6IFJvdXRlO1xyXG4gIHJlc3VsdDogUmVnRXhwTWF0Y2hBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVzOiBSb3V0ZVtdID0gW1xyXG4gICAgeyBwYXRoOiAnLycsIHZpZXc6IExpc3REZXRhaWwgfSxcclxuICAgIHsgcGF0aDogJy90YXNrcy9hZGQnLCB2aWV3OiBBZGRUYXNrIH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvYWRkJywgdmlldzogQWRkTGlzdCB9LFxyXG4gICAgeyBwYXRoOiAnL2xpc3RzLzppZCcsIHZpZXc6IExpc3REZXRhaWwgfSxcclxuICBdLm1hcChyb3V0ZSA9PiB7XHJcbiAgICByb3V0ZS5wYXRoID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgcm91dGUucGF0aDtcclxuICAgIHJldHVybiByb3V0ZTtcclxuICB9KTtcclxuXHJcbiAgLy8gbWF0Y2ggcGF0aCBmcm9tIGJlZ2lubmluZyB0byBlbmRcclxuICAvLyBlc2NhcGUgZm9yd2FyZCBzbGFzaGVzXHJcbiAgLy8gcmVwbGFjZSBwYXRoIHBsYWNlaG9sZGVyc1xyXG4gIC8vIHdpdGggY2FwdHVyZSBncm91cHNcclxuICBjb25zdCBtYXRjaGVzOiBNYXRjaFtdID0gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgcm91dGUsXHJcbiAgICByZXN1bHQ6IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKFxyXG4gICAgICBuZXcgUmVnRXhwKFxyXG4gICAgICAgICdeJyArIHJvdXRlLnBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzpcXHcrL2csICcoLispJykgKyAnJCdcclxuICAgICAgKVxyXG4gICAgKSxcclxuICB9KSk7XHJcblxyXG4gIGxldCBtYXRjaCA9IG1hdGNoZXMuZmluZChtYXRjaCA9PiBtYXRjaC5yZXN1bHQgIT09IG51bGwpO1xyXG5cclxuICBpZiAobWF0Y2ggPT09IG51bGwgfHwgbWF0Y2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF0Y2ggPSB7XHJcbiAgICAgIHJvdXRlOiB7XHJcbiAgICAgICAgcXVlcnk6IGxvY2F0aW9uLnNlYXJjaCxcclxuICAgICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICB2aWV3OiBOb3RGb3VuZCxcclxuICAgICAgfSxcclxuICAgICAgcmVzdWx0OiBbbG9jYXRpb24ucGF0aG5hbWVdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG1hdGNoLnJvdXRlLnF1ZXJ5ID0gbG9jYXRpb24uc2VhcmNoO1xyXG5cclxuICBjb25zdCBwYXRoUGFyYW1zID0gWy4uLm1hdGNoLnJvdXRlLnBhdGgubWF0Y2hBbGwoLzooXFx3KykvZyldXHJcbiAgICAubWFwKHJlc3VsdCA9PiByZXN1bHRbMV0pXHJcbiAgICAucmVkdWNlKFxyXG4gICAgICAocHJldiwgY3VyciwgaSkgPT4gKHsgLi4ucHJldiwgW2N1cnJdOiBtYXRjaC5yZXN1bHQuc2xpY2UoMSlbaV0gfSksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IG1hdGNoLnJvdXRlLnF1ZXJ5Py5zcGxpdCgnPycpWzFdO1xyXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID1cclxuICAgIHF1ZXJ5U3RyaW5nID09PSB1bmRlZmluZWRcclxuICAgICAgPyB7fVxyXG4gICAgICA6IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBjdXJyLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2tleV06IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZS5yZXBsYWNlKC9cXCsvZywgJyAnKSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcclxuICBtYXRjaC5yb3V0ZS52aWV3KHsgcGFyZW50LCBwYXRoUGFyYW1zLCBxdWVyeVBhcmFtcyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKHVybDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdXJsVGV4dCA9IC9eXFwvLy50ZXN0KHVybCkgPyBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyB1cmwgOiB1cmw7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdXJsVGV4dCk7XHJcbiAgcm91dGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0ICcuL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBpZHMgfSBmcm9tICcuL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBuYXZpZ2F0ZSwgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkcy5ST09UKTtcclxucm9vdC5hcHBlbmRDaGlsZChMYXlvdXQoKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCByb3V0ZXIpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICdjbGljaycsXHJcbiAgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcclxuICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldC5jbG9zZXN0KCdhJyk7XHJcbiAgICBpZiAobGluayAhPT0gbnVsbCAmJiBsaW5rLm1hdGNoZXMoJ1tkYXRhLWxpbmtdJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZpZ2F0ZShsaW5rLmhyZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbnJvdXRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=