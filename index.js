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
    aside.appendChild(Nav());
    aside.appendChild(MyLists());
    return aside;
    function Aside() {
        const aside = document.createElement('aside');
        aside.style.cssText = inlineStyles({
            width: '200px',
            backgroundColor: '#424242',
            overflow: 'auto',
        });
        return aside;
    }
    function Nav() {
        const nav = document.createElement('nav');
        nav.style.cssText = inlineStyles({
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem 0rem',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDNUIsT0FBTyxFQUNQLENBQUMsQ0FBa0MsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2hELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixlQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyxDQUNGLENBQUM7QUFFRixNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9hc3NldHMvaW5kZXguY3NzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb25zdGFudHMvZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZGF0YS9jb250ZXh0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zZXJ2aWNlcy9saXN0U2VydmljZS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaW5rLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL05hdkxpc3RJdGVtLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL015TGlzdHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbGF5b3V0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0FkZEJ1dHRvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DYW5jZWxCdXR0b24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybUlucHV0R3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvaWQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVscy9saXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRMaXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1TZWxlY3RHcm91cC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtVGV4dEFyZWFHcm91cC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kZWxzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL3RvZG9TZXJ2aWNlLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRUYXNrLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BbGxNeVRhc2tzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NoZWNrbWFya0ljb24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL2RhdGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NoZWNrbWFya0NpcmNsZUljb24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9kb0RldGFpbHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVHJhc2hDYW5JY29uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpc3RDYXJkVG9kby50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaXN0Q2FyZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGluZy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ub2RvQ2FyZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTGlzdERldGFpbC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTXlEYXkudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL05leHRXZWVrLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9Ob3RGb3VuZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCRUdJTiBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLyogRU5EIFJFU0VUUyAqL1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG4jcm9vdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkOmZvY3VzLFxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkOmZvY3VzLFxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLyogQkVHSU4gUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi8qIEVORCBSRVNFVFMgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbiNyb290IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQ6Zm9jdXMsXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZDpmb2N1cyxcXHJcXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgY29uc3QgaWRzID0ge1xyXG4gIFJPT1Q6ICdyb290JyxcclxuICBQUklNQVJZX05BVl9MSVNUOiAncHJpbWFyeU5hdkxpc3QnLFxyXG4gIE1ZX0xJU1RTX0NPTlRBSU5FUjogJ215TGlzdHNDb250YWluZXInLFxyXG4gIE1ZX0xJU1RTOiAnbXlMaXN0cycsXHJcbiAgQUREX0xJU1RfRk9STTogJ2FkZExpc3RGb3JtJyxcclxuICBBRERfVEFTS19GT1JNOiAnYWRkVGFza0Zvcm0nLFxyXG4gIFRPRE9fQ0FSRF9ERVRBSUxTOiAndG9kb0NhcmQnLFxyXG59O1xyXG4iLCJmdW5jdGlvbiBjYW1lbFRvS2ViYWIoY2FtZWxDYXNlU3RyaW5nOiBzdHJpbmcpIHtcclxuICByZXR1cm4gY2FtZWxDYXNlU3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmxpbmVTdHlsZXMoc3R5bGVzOiBvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoKGlubGluZVN0eWxlcywgcHJvcGVydHkpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcclxuXHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gYCR7aW5saW5lU3R5bGVzfSR7Y2FtZWxUb0tlYmFiKHByb3BlcnR5KX06JHt2YWx1ZX07YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzO1xyXG4gIH0sICcnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoKSB7XHJcbiAgY29uc3QgTElTVFNfS0VZID0gJ2xpc3RzJztcclxuICBjb25zdCBUT0RPU19LRVkgPSAndG9kb3MnO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJdGVtKHsga2V5IH06IHsga2V5OiBzdHJpbmcgfSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGZ1bmN0aW9uIHJldml2ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ2R1ZURhdGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSwgcmV2aXZlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRJdGVtKHsga2V5LCBpdGVtIH06IHsga2V5OiBzdHJpbmc7IGl0ZW06IG9iamVjdCB9KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIGxldCBfbGlzdHM6IExpc3RbXSA9IGdldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSB9KTtcclxuICBsZXQgX3RvZG9zOiBUb2RvW10gPSBnZXRJdGVtKHsga2V5OiBUT0RPU19LRVkgfSk7XHJcblxyXG4gIGlmIChfbGlzdHMgPT0gbnVsbCkge1xyXG4gICAgc2V0SXRlbSh7IGtleTogTElTVFNfS0VZLCBpdGVtOiBbXSB9KTtcclxuICAgIF9saXN0cyA9IGdldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSB9KTtcclxuICB9XHJcblxyXG4gIGlmIChfdG9kb3MgPT0gbnVsbCkge1xyXG4gICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBbXSB9KTtcclxuICAgIF90b2RvcyA9IGdldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgbGlzdHMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiAoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSA9PiB7XHJcbiAgICAgICAgICBfbGlzdHMucHVzaChsaXN0KTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSwgaXRlbTogX2xpc3RzIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE9uZTogKHByZWRpY2F0ZTogKGxpc3Q6IExpc3QpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfbGlzdHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE1hbnk6IChwcmVkaWNhdGU6IChsaXN0OiBMaXN0KSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX2xpc3RzLmZpbHRlcihwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0IHRvZG9zKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkgPT4ge1xyXG4gICAgICAgICAgX3RvZG9zLnB1c2godG9kbyk7XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IF90b2RvcyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmQ6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX3RvZG9zLmZpbmQocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRNYW55OiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF90b2Rvcy5maWx0ZXIocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRBbmRSZXBsYWNlOiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbiwgdG9kbzogVG9kbykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBfdG9kb3MuZmluZEluZGV4KHByZWRpY2F0ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgX3RvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IF90b2RvcyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRBbmRSZW1vdmU6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IF90b2Rvcy5maW5kSW5kZXgocHJlZGljYXRlKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBfdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogX3RvZG9zIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGV4dCB9IGZyb20gJy4uL2RhdGEvY29udGV4dCc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdFNlcnZpY2UoKSB7XHJcbiAgY29uc3QgX2NvbnRleHQgPSBjb250ZXh0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZExpc3QoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSB7XHJcbiAgICBjb25zdCBleGlzdGluZ0xpc3QgPSBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5uYW1lID09PSBsaXN0Lm5hbWUpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xpc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQSBsaXN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRleHQubGlzdHMuYWRkKHsgbGlzdCB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldExpc3RCeUlkKHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWxsTGlzdHMoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE1hbnkobCA9PiBsICE9PSBudWxsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRMaXN0LFxyXG4gICAgZ2V0TGlzdEJ5SWQsXHJcbiAgICBnZXRBbGxMaXN0cyxcclxuICB9O1xyXG59XHJcbiIsInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzIH06IExpbmtQcm9wcykge1xyXG4gIC8vIGlmIGhyZWYgaXMgYW4gYWJzb2x1dGUgb25lIGFwcGVuZFxyXG4gIC8vIHRoZSBlbnZzIGJhc2UgcGF0aC5cclxuICBjb25zdCBocmVmVGV4dCA9IC9eXFwvLy50ZXN0KGhyZWYpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgaHJlZiA6IGhyZWY7XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgbGluay50aXRsZSA9IGxpbmtUZXh0O1xyXG4gIGxpbmsuaHJlZiA9IGhyZWZUZXh0O1xyXG4gIGxpbmsuc3R5bGUuY3NzVGV4dCA9IHN0eWxlcztcclxuICBsaW5rLmRhdGFzZXQubGluayA9ICd0cnVlJztcclxuICBsaW5rLnRleHQgPSBsaW5rVGV4dDtcclxuXHJcbiAgcmV0dXJuIGxpbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3RJdGVtKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG59OiB7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBuYXZMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG5hdkl0ZW0uYXBwZW5kQ2hpbGQoTGluayh7IGxpbmtUZXh0LCBocmVmLCBzdHlsZXM6IG5hdkxpbmtTdHlsZXMgfSkpO1xyXG5cclxuICByZXR1cm4gbmF2SXRlbTtcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlMaXN0cygpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBNeUxpc3RDb250YWluZXIoKTtcclxuICBjb250YWluZXIuYXBwZW5kKE15TGlzdFRpdGxlKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoTGlzdCgpKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG5cclxuICBmdW5jdGlvbiBNeUxpc3RDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBteUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15TGlzdENvbnRhaW5lci5pZCA9IGlkcy5NWV9MSVNUU19DT05UQUlORVI7XHJcblxyXG4gICAgcmV0dXJuIG15TGlzdENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE15TGlzdFRpdGxlKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBMaXN0cyc7XHJcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkTGlzdExpbmtTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgTGluayh7XHJcbiAgICAgICAgbGlua1RleHQ6ICcrJyxcclxuICAgICAgICBocmVmOiAnL2xpc3RzL2FkZCcsXHJcbiAgICAgICAgc3R5bGVzOiBhZGRMaXN0TGlua1N0eWxlcyxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBMaXN0KCkge1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyTmF2TGlua0l0ZW1zKCkge1xyXG4gICAgICBjb25zdCB7IGdldEFsbExpc3RzIH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICBjb25zdCBhbGxMaXN0cyA9IGdldEFsbExpc3RzKCk7XHJcbiAgICAgIGNvbnN0IG15TGlzdEl0ZW1zID0gYWxsTGlzdHMubWFwKGxpc3QgPT4gKHtcclxuICAgICAgICBsaW5rVGV4dDogbGlzdC5uYW1lLFxyXG4gICAgICAgIGhyZWY6IGAvbGlzdHMvJHtsaXN0LmlkfWAsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IG15TGlzdEl0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dDogaXRlbS5saW5rVGV4dCwgaHJlZjogaXRlbS5ocmVmIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0LmlkID0gaWRzLk1ZX0xJU1RTO1xyXG4gICAgbGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlck5hdkxpbmtJdGVtcygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpc3RVcGRhdGVkKCkge1xyXG4gICAgICByZW5kZXJOYXZMaW5rSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNeUxpc3RNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTXlMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXN0c1VwZGF0ZWQnLCBoYW5kbGVMaXN0VXBkYXRlZCk7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU15TGlzdE1vdXNlT3Zlcik7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlTXlMaXN0TW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTXlMaXN0cyBmcm9tICcuL015TGlzdHMnO1xyXG5pbXBvcnQgTmF2TGlzdEl0ZW0gZnJvbSAnLi9OYXZMaXN0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xyXG4gIGNvbnN0IHByaW1hcnlOYXZMaW5rSXRlbXMgPSBbXHJcbiAgICB7IGxpbmtUZXh0OiAnSW5ib3gnLCBocmVmOiAnLycgfSxcclxuICAgIHsgbGlua1RleHQ6ICdNeSBEYXknLCBocmVmOiAnL215LWRheScgfSxcclxuICAgIHtcclxuICAgICAgbGlua1RleHQ6ICdOZXh0IDcgRGF5cycsXHJcbiAgICAgIGhyZWY6IGAvbmV4dC1zZXZlbi1kYXlzYCxcclxuICAgIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnQWxsIG15IHRhc2tzJywgaHJlZjogJy90YXNrcycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBhc2lkZSA9IEFzaWRlKCk7XHJcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoTmF2KCkpO1xyXG4gIGFzaWRlLmFwcGVuZENoaWxkKE15TGlzdHMoKSk7XHJcbiAgcmV0dXJuIGFzaWRlO1xyXG5cclxuICBmdW5jdGlvbiBBc2lkZSgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIGFzaWRlLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYXNpZGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtIDByZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2TGlzdCA9IE5hdkxpc3QoKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmF2TGlzdCgpIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2TGlzdC5pZCA9IGlkcy5QUklNQVJZX05BVl9MSVNUO1xyXG4gICAgbmF2TGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJpbWFyeU5hdkxpbmtJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICBOYXZMaXN0SXRlbSh7XHJcbiAgICAgICAgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsXHJcbiAgICAgICAgaHJlZjogaXRlbS5ocmVmLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBuYXZMaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2TGlzdE1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNFOSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU5hdkxpc3RNb3VzZU92ZXIpO1xyXG4gICAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU5hdkxpc3RNb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hdkxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdhcHAnO1xyXG4gIG1haW4uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmbGV4OiAnMScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5M0U5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM4MEQwQzcgMTAwJSknLFxyXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA5M0U5JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTaWRlQmFyKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQnV0dG9uKCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcclxuICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gIGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmZmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAxcmVtJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbk1vdXNlT3ZlcigpIHtcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25Nb3VzZU91dCgpIHtcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQnV0dG9uTW91c2VPdmVyKTtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVCdXR0b25Nb3VzZU91dCk7XHJcblxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbmNlbEJ1dHRvbigpIHtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG4gIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWxDbGljaygpIHtcclxuICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQ2xpY2spO1xyXG5cclxuICByZXR1cm4gY2FuY2VsQnV0dG9uO1xyXG59XHJcbiIsInR5cGUgVmFsaWRJbnB1dFR5cGVzID1cclxuICB8ICdidXR0b24nXHJcbiAgfCAnY2hlY2tib3gnXHJcbiAgfCAnY29sb3InXHJcbiAgfCAnZGF0ZSdcclxuICB8ICdkYXRldGltZS1sb2NhbCdcclxuICB8ICdlbWFpbCdcclxuICB8ICdmaWxlJ1xyXG4gIHwgJ2hpZGRlbidcclxuICB8ICdpbWFnZSdcclxuICB8ICdtb250aCdcclxuICB8ICdudW1iZXInXHJcbiAgfCAncGFzc3dvcmQnXHJcbiAgfCAncmFkaW8nXHJcbiAgfCAncmFuZ2UnXHJcbiAgfCAncmVzZXQnXHJcbiAgfCAnc2VhcmNoJ1xyXG4gIHwgJ3N1Ym1pdCdcclxuICB8ICd0ZWwnXHJcbiAgfCAndGV4dCdcclxuICB8ICd0aW1lJ1xyXG4gIHwgJ3VybCdcclxuICB8ICd3ZWVrJztcclxuXHJcbnR5cGUgRm9ybUlucHV0R3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgaW5wdXRJZDogc3RyaW5nO1xyXG4gIGlucHV0TmFtZTogc3RyaW5nO1xyXG4gIGlucHV0VHlwZTogVmFsaWRJbnB1dFR5cGVzO1xyXG4gIGlucHV0U3R5bGVzPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUlucHV0R3JvdXAocHJvcHM6IEZvcm1JbnB1dEdyb3VwUHJvcHMpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmNvbnRhaW5lclN0eWxlcztcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBwcm9wcy5pbnB1dElkO1xyXG4gIGxhYmVsLmlubmVyVGV4dCA9IHByb3BzLmxhYmVsVGV4dDtcclxuICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMubGFiZWxTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9IHByb3BzLmlucHV0SWQ7XHJcbiAgaW5wdXQubmFtZSA9IHByb3BzLmlucHV0TmFtZTtcclxuICBpbnB1dC50eXBlID0gcHJvcHMuaW5wdXRUeXBlO1xyXG4gIGlucHV0LnN0eWxlLmNzc1RleHQgPSBwcm9wcy5pbnB1dFN0eWxlcztcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XHJcbiAgcmV0dXJuIHV1aWQoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyIH06IHsgc3RyOiBzdHJpbmcgfSkge1xyXG4gIHJldHVybiAhc3RyIHx8IHN0ci50cmltKCkgPT09ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9UaXRsZUNhc2UoeyBzdHIgfTogeyBzdHI6IHN0cmluZyB9KSB7XHJcbiAgLy8gYWRkIHNwYWNlIGJlZm9yZSB1cHBlciBjYXNlIGxldHRlcnNcclxuICAvLyByZXBsYWNlIGZpcnN0IGNoYXJhY3RlciB3aXRoIHVwcGVyIGNhc2VcclxuICByZXR1cm4gc3RyXHJcbiAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBtYXRjaCA9PiBgICR7bWF0Y2h9YClcclxuICAgIC5yZXBsYWNlKC9eLi8sIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAudHJpbSgpO1xyXG59XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlSWQgfSBmcm9tICcuLi91dGlscy9pZCc7XHJcbmltcG9ydCB7IGlzTnVsbE9yV2hpdGVTcGFjZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ3MnO1xyXG5cclxudHlwZSBMaXN0UGFyYW1zID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIExpc3QgPSB7IGlkOiBzdHJpbmcgfSAmIExpc3RQYXJhbXM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCh7IG5hbWUgfTogTGlzdFBhcmFtcyk6IExpc3Qge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlTmFtZSh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogbmFtZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfbmFtZSA9IHZhbGlkYXRlTmFtZSh7IG5hbWUgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiBfbmFtZTtcclxuICAgIH0sXHJcbiAgICBzZXQgbmFtZShuYW1lKSB7XHJcbiAgICAgIF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgQWRkQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkQnV0dG9uJztcclxuaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhbmNlbEJ1dHRvbic7XHJcbmltcG9ydCBGb3JtSW5wdXRHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1JbnB1dEdyb3VwJztcclxuaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gJy4uL21vZGVscy9saXN0JztcclxuaW1wb3J0IHsgVmlld1Byb3BzLCBuYXZpZ2F0ZSB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTGlzdChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKEFkZExpc3RGb3JtKCkpO1xyXG5cclxuICBmdW5jdGlvbiBBZGRMaXN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBnYXA6ICcxcmVtJyxcclxuICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gICAgfSk7XHJcbiAgICBmb3JtLmlkID0gaWRzLkFERF9MSVNUX0ZPUk07XHJcblxyXG4gICAgY29uc3QgbmFtZUlucHV0R3JvdXAgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGNvbnRhaW5lclN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgZ2FwOiAnMC4yNXJlbScsXHJcbiAgICAgIH0pLFxyXG4gICAgICBsYWJlbFRleHQ6ICdOYW1lJyxcclxuICAgICAgbGFiZWxTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVyZW0nLFxyXG4gICAgICB9KSxcclxuICAgICAgaW5wdXRJZDogJ25hbWUnLFxyXG4gICAgICBpbnB1dE5hbWU6ICduYW1lJyxcclxuICAgICAgaW5wdXRUeXBlOiAndGV4dCcsXHJcbiAgICAgIGlucHV0U3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0nLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMmIyYTJhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBuYW1lSW5wdXRHcm91cC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Rm9jdXMoKSB7XHJcbiAgICAgIG5hbWVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRCbHVyKCkge1xyXG4gICAgICBuYW1lSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUlucHV0Rm9jdXMpO1xyXG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0R3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpKTtcclxuXHJcbiAgICAgIGlmIChuYW1lIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdCh7IG5hbWUgfSk7XHJcbiAgICAgICAgY29uc3QgeyBhZGRMaXN0IH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICAgIGFkZExpc3QoeyBsaXN0IH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsaXN0c1VwZGF0ZWQnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgbmF2aWdhdGUoYC9saXN0cy8ke2xpc3QuaWR9YCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzAuMjVyZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBBZGRCdXR0b24oKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG59XHJcbiIsInR5cGUgT3B0aW9uID0ge1xyXG4gIHZhbHVlVGV4dDogc3RyaW5nO1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgc3R5bGVzPzogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBGb3JtU2VsZWN0R3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgc2VsZWN0SWQ6IHN0cmluZztcclxuICBzZWxlY3ROYW1lOiBzdHJpbmc7XHJcbiAgc2VsZWN0U3R5bGVzPzogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IE9wdGlvbltdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVNlbGVjdEdyb3VwKHByb3BzOiBGb3JtU2VsZWN0R3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBwcm9wcy5zZWxlY3RJZDtcclxuICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMubGFiZWxTdHlsZXM7XHJcblxyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHNlbGVjdC5pZCA9IHByb3BzLnNlbGVjdElkO1xyXG4gIHNlbGVjdC5uYW1lID0gcHJvcHMuc2VsZWN0TmFtZTtcclxuICBzZWxlY3Quc3R5bGUuY3NzVGV4dCA9IHByb3BzLnNlbGVjdFN0eWxlcztcclxuXHJcbiAgcHJvcHMub3B0aW9uc1xyXG4gICAgLm1hcChvID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbi5zdHlsZS5jc3NUZXh0ID0gby5zdHlsZXM7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG8udmFsdWU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gby52YWx1ZVRleHQ7XHJcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IG8uZGlzYWJsZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG8uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9KVxyXG4gICAgLmZvckVhY2gobyA9PiBzZWxlY3QuYXBwZW5kQ2hpbGQobykpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsInR5cGUgRm9ybVRleHRBcmVhR3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFJZDogc3RyaW5nO1xyXG4gIHRleHRBcmVhTmFtZTogc3RyaW5nO1xyXG4gIHRleHRBcmVhVmFsdWU/OiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtVGV4dEFyZWFHcm91cChwcm9wczogRm9ybVRleHRBcmVhR3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIHRleHRhcmVhLmlkID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS5uYW1lID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IHByb3BzLnRleHRBcmVhVmFsdWUgPyBwcm9wcy50ZXh0QXJlYVZhbHVlIDogJyc7XHJcbiAgdGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9IHByb3BzLnRleHRBcmVhU3R5bGVzO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZVNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgSGlnaCA9ICdIaWdoJyxcclxuICBNZWRpdW0gPSAnTWVkaXVtJyxcclxuICBMb3cgPSAnTG93JyxcclxufVxyXG5cclxudHlwZSBUb2RvUGFyYW1zID0ge1xyXG4gIGxpc3RJZD86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZHVlRGF0ZTogRGF0ZTtcclxuICBwcmlvcml0eTogUHJpb3JpdHk7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUb2RvID0geyBpZDogc3RyaW5nOyBjb21wbGV0ZTogYm9vbGVhbiB9ICYgVG9kb1BhcmFtcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHtcclxuICBsaXN0SWQsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZHVlRGF0ZSxcclxuICBwcmlvcml0eSxcclxufTogVG9kb1BhcmFtcyk6IFRvZG8ge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogdGl0bGUgfSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aXRsZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTUwIGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfTogeyBkZXNjcmlwdGlvbjogc3RyaW5nIH0pIHtcclxuICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiAyNTUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMjU1IGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUR1ZURhdGUoeyBkdWVEYXRlIH06IHsgZHVlRGF0ZTogRGF0ZSB9KSB7XHJcbiAgICByZXR1cm4gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUHJpb3JpdHkoeyBwcmlvcml0eSB9OiB7IHByaW9yaXR5OiBzdHJpbmcgfSk6IFByaW9yaXR5IHtcclxuICAgIGNvbnN0IHByaW9yaXR5RW51bSA9IFByaW9yaXR5W3ByaW9yaXR5XTtcclxuXHJcbiAgICBpZiAocHJpb3JpdHlFbnVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmlvcml0eSBtdXN0IGJlIEhpZ2gsIE1lZGl1bSwgb3IgTG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5RW51bTtcclxuICB9XHJcblxyXG4gIGxldCBfbGlzdElkID0gbGlzdElkO1xyXG4gIGNvbnN0IF9pZCA9IGdlbmVyYXRlSWQoKTtcclxuICBsZXQgX3RpdGxlID0gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH0pO1xyXG4gIGxldCBfZGVzY3JpcHRpb24gPSB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfSk7XHJcbiAgbGV0IF9kdWVEYXRlID0gdmFsaWRhdGVEdWVEYXRlKHsgZHVlRGF0ZSB9KTtcclxuICBsZXQgX3ByaW9yaXR5ID0gdmFsaWRhdGVQcmlvcml0eSh7IHByaW9yaXR5IH0pO1xyXG4gIGxldCBfY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBsaXN0SWQoKSB7XHJcbiAgICAgIHJldHVybiBfbGlzdElkO1xyXG4gICAgfSxcclxuICAgIHNldCBsaXN0SWQobGlzdElkKSB7XHJcbiAgICAgIF9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gX2lkO1xyXG4gICAgfSxcclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgcmV0dXJuIF90aXRsZTtcclxuICAgIH0sXHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgX3RpdGxlID0gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH0pO1xyXG4gICAgfSxcclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgcmV0dXJuIF9kZXNjcmlwdGlvbjtcclxuICAgIH0sXHJcbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgX2Rlc2NyaXB0aW9uID0gdmFsaWRhdGVEZXNjcmlwdGlvbih7IGRlc2NyaXB0aW9uIH0pO1xyXG4gICAgfSxcclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICByZXR1cm4gX2R1ZURhdGU7XHJcbiAgICB9LFxyXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICBfZHVlRGF0ZSA9IHZhbGlkYXRlRHVlRGF0ZSh7IGR1ZURhdGUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICByZXR1cm4gX3ByaW9yaXR5O1xyXG4gICAgfSxcclxuICAgIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgICBfcHJpb3JpdHkgPSB2YWxpZGF0ZVByaW9yaXR5KHsgcHJpb3JpdHkgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGNvbXBsZXRlKCkge1xyXG4gICAgICByZXR1cm4gX2NvbXBsZXRlO1xyXG4gICAgfSxcclxuICAgIHNldCBjb21wbGV0ZShjb21wbGV0ZSkge1xyXG4gICAgICBfY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb250ZXh0IH0gZnJvbSAnLi4vZGF0YS9jb250ZXh0JztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2RvU2VydmljZSgpIHtcclxuICBjb25zdCBfY29udGV4dCA9IGNvbnRleHQoKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVG9kbyh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICAgIF9jb250ZXh0LnRvZG9zLmZpbmRBbmRSZXBsYWNlKHQgPT4gdC5pZCA9PT0gdG9kby5pZCwgdG9kbyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gICAgX2NvbnRleHQudG9kb3MuYWRkKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEluYm94VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZE1hbnkodCA9PiB0Lmxpc3RJZCA9PT0gdW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQgfTogeyBsaXN0SWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZE1hbnkodCA9PiB0Lmxpc3RJZCA9PT0gbGlzdElkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9CeUlkKHsgdG9kb0lkIH06IHsgdG9kb0lkOiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIF9jb250ZXh0LnRvZG9zLmZpbmQodCA9PiB0LmlkID09PSB0b2RvSWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kb0J5SWQoeyB0b2RvSWQgfTogeyB0b2RvSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBfY29udGV4dC50b2Rvcy5maW5kQW5kUmVtb3ZlKHQgPT4gdC5pZCA9PT0gdG9kb0lkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUb2RvLFxyXG4gICAgZ2V0SW5ib3hUb2RvcyxcclxuICAgIGdldFRvZG9zQnlMaXN0SWQsXHJcbiAgICB1cGRhdGVUb2RvLFxyXG4gICAgZ2V0VG9kb0J5SWQsXHJcbiAgICBkZWxldGVUb2RvQnlJZCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRCdXR0b24nO1xyXG5pbXBvcnQgQ2FuY2VsQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FuY2VsQnV0dG9uJztcclxuaW1wb3J0IEZvcm1JbnB1dEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybUlucHV0R3JvdXAnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNlbGVjdEdyb3VwJztcclxuaW1wb3J0IEZvcm1UZXh0QXJlYUdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVRleHRBcmVhR3JvdXAnO1xyXG5pbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBQcmlvcml0eSwgY3JlYXRlVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgVmlld1Byb3BzLCBuYXZpZ2F0ZSB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBjYW1lbENhc2VUb1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ3MnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGFzayhwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgeyBsaXN0SWQgfSA9IHByb3BzLnF1ZXJ5UGFyYW1zO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoQWRkVGFza0Zvcm0oKSk7XHJcblxyXG4gIGZ1bmN0aW9uIEFkZFRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uaWQgPSBpZHMuQUREX1RBU0tfRk9STTtcclxuICAgIGZvcm0uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgbWF4V2lkdGg6ICc2MDBweCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybUdyb3VwQ29udGFpbmVyU3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgZ2FwOiAnMC4yNXJlbScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1MYWJlbFN0eWxlcygpIHtcclxuICAgICAgcmV0dXJuIGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybUlucHV0U3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjI1cmVtJyxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzJiMmEyYScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1PcHRpb25TdHlsZXMoKSB7XHJcbiAgICAgIHJldHVybiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlSW5wdXRHcm91cCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSxcclxuICAgICAgbGFiZWxUZXh0OiAnVGl0bGUnLFxyXG4gICAgICBsYWJlbFN0eWxlczogZm9ybUxhYmVsU3R5bGVzKCksXHJcbiAgICAgIGlucHV0SWQ6ICd0aXRsZScsXHJcbiAgICAgIGlucHV0TmFtZTogJ3RpdGxlJyxcclxuICAgICAgaW5wdXRUeXBlOiAndGV4dCcsXHJcbiAgICAgIGlucHV0U3R5bGVzOiBmb3JtSW5wdXRTdHlsZXMoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSB0aXRsZUlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhR3JvdXAgPSBGb3JtVGV4dEFyZWFHcm91cCh7XHJcbiAgICAgIGNvbnRhaW5lclN0eWxlczogZm9ybUdyb3VwQ29udGFpbmVyU3R5bGVzKCkgKyAnZmxleDoxOycsXHJcbiAgICAgIGxhYmVsVGV4dDogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgbGFiZWxTdHlsZXM6IGZvcm1MYWJlbFN0eWxlcygpLFxyXG4gICAgICB0ZXh0QXJlYUlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICB0ZXh0QXJlYU5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgIHRleHRBcmVhU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0nLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMmIyYTJhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID1cclxuICAgICAgZGVzY3JpcHRpb25UZXh0QXJlYUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0R3JvdXAgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGNvbnRhaW5lclN0eWxlczogZm9ybUdyb3VwQ29udGFpbmVyU3R5bGVzKCksXHJcbiAgICAgIGxhYmVsVGV4dDogJ0R1ZSBEYXRlJyxcclxuICAgICAgbGFiZWxTdHlsZXM6IGZvcm1MYWJlbFN0eWxlcygpLFxyXG4gICAgICBpbnB1dElkOiAnZHVlRGF0ZScsXHJcbiAgICAgIGlucHV0TmFtZTogJ2R1ZURhdGUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICdkYXRlJyxcclxuICAgICAgaW5wdXRTdHlsZXM6IGZvcm1JbnB1dFN0eWxlcygpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZHVlRGF0ZUlucHV0R3JvdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdEdyb3VwID0gRm9ybVNlbGVjdEdyb3VwKHtcclxuICAgICAgY29udGFpbmVyU3R5bGVzOiBmb3JtR3JvdXBDb250YWluZXJTdHlsZXMoKSxcclxuICAgICAgbGFiZWxUZXh0OiAnUHJpb3JpdHknLFxyXG4gICAgICBsYWJlbFN0eWxlczogZm9ybUxhYmVsU3R5bGVzKCksXHJcbiAgICAgIHNlbGVjdElkOiAncHJpb3JpdHknLFxyXG4gICAgICBzZWxlY3ROYW1lOiAncHJpb3JpdHknLFxyXG4gICAgICBzZWxlY3RTdHlsZXM6IGZvcm1JbnB1dFN0eWxlcygpLFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnU2VsZWN0IGEgcHJpb3JpdHknLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHN0eWxlczogZm9ybU9wdGlvblN0eWxlcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnTG93JyxcclxuICAgICAgICAgIHZhbHVlOiAnTG93JyxcclxuICAgICAgICAgIHN0eWxlczogZm9ybU9wdGlvblN0eWxlcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnTWVkaXVtJyxcclxuICAgICAgICAgIHZhbHVlOiAnTWVkaXVtJyxcclxuICAgICAgICAgIHN0eWxlczogZm9ybU9wdGlvblN0eWxlcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnSGlnaCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ0hpZ2gnLFxyXG4gICAgICAgICAgc3R5bGVzOiBmb3JtT3B0aW9uU3R5bGVzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gcHJpb3JpdHlTZWxlY3RHcm91cC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICAgIH1cclxuXHJcbiAgICBbdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25UZXh0QXJlYSwgZHVlRGF0ZUlucHV0XS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlSW5wdXRGb2N1cyk7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUlucHV0Qmx1cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQcmlvcml0eUZvY3VzKCkge1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggNHB4ICMyYjJhMmEnO1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS50cmFuc2l0aW9uID0gJ2JveC1zaGFkb3cgMC4zcyBlYXNlJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnJztcclxuICAgICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlUHJpb3JpdHlGb2N1cyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0R3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXRHcm91cCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0R3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhR3JvdXApO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHRvZG9EYXRhID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIGAke2NhbWVsQ2FzZVRvVGl0bGVDYXNlKHsgc3RyOiBrZXkgfSl9IGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb0RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9ID0gdG9kb0RhdGE7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZUFzRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUgKyAnVDAwOjAwOjAwLjAwMCcpO1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHtcclxuICAgICAgICAgIGxpc3RJZCxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlQXNEYXRlLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IFByaW9yaXR5W3ByaW9yaXR5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHRvZG9TZXJ2aWNlKCk7XHJcbiAgICAgICAgYWRkVG9kbyh7IHRvZG8gfSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gbGlzdElkID8gYC9saXN0cy8ke2xpc3RJZH1gIDogJy8nO1xyXG4gICAgICAgIG5hdmlnYXRlKHJldHVyblVybCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzAuMjVyZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBBZGRCdXR0b24oKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4vLi4vcm91dGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsTXlUYXNrcyhwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnQWxsIE15IFRhc2tzJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrbWFya0ljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEwLjk3IDQuOTdhLjc1Ljc1IDAgMCAxIDEuMDcgMS4wNWwtMy45OSA0Ljk5YS43NS43NSAwIDAgMS0xLjA4LjAyTDQuMzI0IDguMzg0YS43NS43NSAwIDEgMSAxLjA2LTEuMDZsMi4wOTQgMi4wOTMgMy40NzMtNC40MjVhLjI2Ny4yNjcgMCAwIDEgLjAyLS4wMjJ6J1xyXG4gICk7XHJcblxyXG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRvWVlZWU1NREQoeyBkYXRlIH06IHsgZGF0ZTogRGF0ZSB9KSB7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrbWFya0NpcmNsZUljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBmaXJzdFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBmaXJzdFBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00yLjUgOGE1LjUgNS41IDAgMCAxIDguMjUtNC43NjQuNS41IDAgMCAwIC41LS44NjZBNi41IDYuNSAwIDEgMCAxNC41IDhhLjUuNSAwIDAgMC0xIDAgNS41IDUuNSAwIDEgMS0xMSAweidcclxuICApO1xyXG5cclxuICBjb25zdCBzZWNvbmRQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcbiAgc2Vjb25kUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTE1LjM1NCAzLjM1NGEuNS41IDAgMCAwLS43MDgtLjcwOEw4IDkuMjkzIDUuMzU0IDYuNjQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMyAzYS41LjUgMCAwIDAgLjcwOCAwbDctN3onXHJcbiAgKTtcclxuXHJcbiAgc3ZnLmFwcGVuZENoaWxkKGZpcnN0UGF0aCk7XHJcbiAgc3ZnLmFwcGVuZENoaWxkKHNlY29uZFBhdGgpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcbiIsImltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFByaW9yaXR5LCBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGVUb1lZWVlNTUREIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZXMnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgQ2hlY2ttYXJrQ2lyY2xlSWNvbiBmcm9tICcuL0NoZWNrbWFya0NpcmNsZUljb24nO1xyXG5pbXBvcnQgRm9ybVRleHRBcmVhR3JvdXAgZnJvbSAnLi9Gb3JtVGV4dEFyZWFHcm91cCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRGV0YWlscyh7IHRvZG8gfTogeyB0b2RvPzogVG9kbyB9KSB7XHJcbiAgaWYgKHRvZG8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIFBsYWNlaG9sZGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuaWQgPSBpZHMuVE9ET19DQVJEX0RFVEFJTFM7XHJcbiAgY29udGFpbmVyLmRhdGFzZXQudG9kb0lkID0gdG9kbz8uaWQ7XHJcblxyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSB0b2RvLmNvbXBsZXRlID09PSB0cnVlID8gJzUwJScgOiAnJztcclxuXHJcbiAgY29uc3QgYnJlYWRjcnVtYkNvbnRhaW5lciA9IEJyZWFkY3J1bWJDb250YWluZXIoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IGZvcm0gPSBGb3JtKHsgdG9kbyB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFkY3J1bWJDb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGFjZWhvbGRlcigpIHtcclxuICBjb25zdCBwbGFjZWhvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGxhY2VIb2xkZXIuaW5uZXJUZXh0ID0gJ1doYXQgZG8geW91IHdhbnQgdG8gZ2V0IGRvbmU/JztcclxuXHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBDaGVja21hcmtDaXJjbGVJY29uKHsgaGVpZ2h0OiA0MCwgd2lkdGg6IDQwLCBmaWxsOiAnY3VycmVudENvbG9yJyB9KVxyXG4gICk7XHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VIb2xkZXIpO1xyXG5cclxuICByZXR1cm4gcGxhY2Vob2xkZXJDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJyZWFkY3J1bWJDb250YWluZXIoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgbGlzdCA9IGxpc3RTZXJ2aWNlKCkuZ2V0TGlzdEJ5SWQoeyBpZDogdG9kby5saXN0SWQgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIHBhZGRpbmc6ICcwIDAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGJyZWFkY3J1bWJMaW5rID0gTGluayh7XHJcbiAgICBsaW5rVGV4dDogYE15IExpc3RzID4gJHtsaXN0ID8gbGlzdC5uYW1lLnRvVXBwZXJDYXNlKCkgOiAnSU5CT1gnfWAsXHJcbiAgICBocmVmOiBsaXN0ID8gYC9saXN0cy8ke2xpc3QuaWR9P3RvZG9JZD0ke3RvZG8uaWR9YCA6IGAvP3RvZG9JZD0ke3RvZG8uaWR9YCxcclxuICAgIHN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaW5rTW91c2VPdmVyKCkge1xyXG4gICAgYnJlYWRjcnVtYkxpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpbmtNb3VzZU91dCgpIHtcclxuICAgIGJyZWFkY3J1bWJMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XHJcbiAgfVxyXG5cclxuICBicmVhZGNydW1iTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVMaW5rTW91c2VPdmVyKTtcclxuICBicmVhZGNydW1iTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUxpbmtNb3VzZU91dCk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChicmVhZGNydW1iTGluayk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvcm0oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBmb3JtLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gICAgZmxleDogJzEnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0aXRsZUlucHV0ID0gVGl0bGVJbnB1dCh7IHRvZG8gfSk7XHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gRHVlRGF0ZUlucHV0KHsgdG9kbyB9KTtcclxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IFByaW9yaXR5U2VsZWN0KHsgdG9kbyB9KTtcclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwID0gRGVzY3JpcHRpb25UZXh0QXJlYSh7IHRvZG8gfSk7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xyXG5cclxuICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGl0bGVJbnB1dCh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcclxuICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcclxuICB0aXRsZUlucHV0LnRpdGxlID0gJ1RpdGxlJztcclxuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcclxuICB0aXRsZUlucHV0LmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuICB0aXRsZUlucHV0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZm9udFNpemU6ICcxLjVyZW0nLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8udGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2RvVXBkYXRlZCcpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlSW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIER1ZURhdGVJbnB1dCh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICAvLyBzdHlsZXMgZm9yIHBzZXVkbyBlbGVtZW50cyBpbiBpbmRleC5jc3NcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlJztcclxuICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBmb3JtYXREYXRlVG9ZWVlZTU1ERCh7IGRhdGU6IHRvZG8uZHVlRGF0ZSB9KTtcclxuICBkdWVEYXRlSW5wdXQudGl0bGUgPSAnRHVlIERhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcbiAgZHVlRGF0ZUlucHV0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAwLjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICB0b2RvLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlSW5wdXQudmFsdWUgKyAnVDAwOjAwOjAwLjAwMCcpO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICBkdWVEYXRlSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcbiAgcmV0dXJuIGR1ZURhdGVJbnB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpb3JpdHlTZWxlY3QoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0QmFja2dyb3VuZCgpIHtcclxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBQcmlvcml0eS5IaWdoKSB7XHJcbiAgICAgIHJldHVybiAncmVkJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gUHJpb3JpdHkuTWVkaXVtKSB7XHJcbiAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ2dyZWVuJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdENvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRvZG8ucHJpb3JpdHkgPT09IFByaW9yaXR5Lk1lZGl1bSA/ICdibGFjaycgOiAnI2ZmZmZmZic7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcclxuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICBwcmlvcml0eVNlbGVjdC50aXRsZSA9ICdQcmlvcml0eSc7XHJcbiAgcHJpb3JpdHlTZWxlY3QuZGlzYWJsZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG4gIHByaW9yaXR5U2VsZWN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgbWFyZ2luTGVmdDogJzAuNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBnZXRTZWxlY3RCYWNrZ3JvdW5kKCksXHJcbiAgICBjb2xvcjogZ2V0U2VsZWN0Q29sb3IoKSxcclxuICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXS5tYXAobyA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IG87XHJcbiAgICBvcHRpb24udGV4dCA9IG87XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBvID09PSB0b2RvLnByaW9yaXR5O1xyXG4gICAgb3B0aW9uLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBmb250U2l6ZTogJzAuODVyZW0nLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICB0b2RvLnByaW9yaXR5ID0gUHJpb3JpdHlbcHJpb3JpdHlTZWxlY3QudmFsdWVdO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFNlbGVjdEJhY2tncm91bmQoKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmNvbG9yID0gZ2V0U2VsZWN0Q29sb3IoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuYm94U2hhZG93ID0gJzBweCAwcHggMHB4IDRweCAjMmIyYTJhJztcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLnRyYW5zaXRpb24gPSAnYm94LXNoYWRvdyAwLjNzIGVhc2UnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcnO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpb3JpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcblxyXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZCguLi5wcmlvcml0eU9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gcHJpb3JpdHlTZWxlY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2NyaXB0aW9uVGV4dEFyZWEoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cCA9IEZvcm1UZXh0QXJlYUdyb3VwKHtcclxuICAgIGNvbnRhaW5lclN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMC4yNXJlbScsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgfSksXHJcbiAgICBsYWJlbFRleHQ6ICdEZXNjcmlwdGlvbicsXHJcbiAgICBsYWJlbFN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgcGFkZGluZzogJzAgMC41cmVtJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0pLFxyXG4gICAgdGV4dEFyZWFJZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHRleHRBcmVhTmFtZTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHRleHRBcmVhVmFsdWU6IHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICB0ZXh0QXJlYVN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgcGFkZGluZzogJzAuNXJlbSAwLjVyZW0nLFxyXG4gICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0ZXh0QXJlYSA9IGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXAucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuICB0ZXh0QXJlYS5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8uZGVzY3JpcHRpb24gPSB0ZXh0QXJlYS52YWx1ZTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICB0ZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xyXG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgcmV0dXJuIGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhc2hDYW5JY29uKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgZmlsbCxcclxufToge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgZmlsbCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTYgMTZgKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMSAxLjV2MWgzLjVhLjUuNSAwIDAgMSAwIDFoLS41MzhsLS44NTMgMTAuNjZBMiAyIDAgMCAxIDExLjExNSAxNmgtNi4yM2EyIDIgMCAwIDEtMS45OTQtMS44NEwyLjAzOCAzLjVIMS41YS41LjUgMCAwIDEgMC0xSDV2LTFBMS41IDEuNSAwIDAgMSA2LjUgMGgzQTEuNSAxLjUgMCAwIDEgMTEgMS41Wm0tNSAwdjFoNHYtMWEuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDAtLjUuNVpNNC41IDUuMDI5bC41IDguNWEuNS41IDAgMSAwIC45OTgtLjA2bC0uNS04LjVhLjUuNSAwIDEgMC0uOTk4LjA2Wm02LjUzLS41MjhhLjUuNSAwIDAgMC0uNTI4LjQ3bC0uNSA4LjVhLjUuNSAwIDAgMCAuOTk4LjA1OGwuNS04LjVhLjUuNSAwIDAgMC0uNDctLjUyOFpNOCA0LjVhLjUuNSAwIDAgMC0uNS41djguNWEuNS41IDAgMCAwIDEgMFY1YS41LjUgMCAwIDAtLjUtLjVaJ1xyXG4gICk7XHJcblxyXG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IENoZWNrbWFya0ljb24gZnJvbSAnLi9DaGVja21hcmtJY29uJztcclxuaW1wb3J0IFRvZG9EZXRhaWxzIGZyb20gJy4vVG9kb0RldGFpbHMnO1xyXG5pbXBvcnQgVHJhc2hDYW5JY29uIGZyb20gJy4vVHJhc2hDYW5JY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RDYXJkVG9kbyh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwYWRkaW5nOiAnMC41cmVtIDFyZW0nLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBCdXR0b25UZXh0KCkge1xyXG4gICAgcmV0dXJuIHRvZG8uY29tcGxldGVcclxuICAgICAgPyBDaGVja21hcmtJY29uKHsgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBmaWxsOiAnY3VycmVudENvbG9yJyB9KVxyXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29tcGxldGVCdXR0b24uYXBwZW5kQ2hpbGQoQnV0dG9uVGV4dCgpKTtcclxuICBjb21wbGV0ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgY29tcGxldGVCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzFyZW0nLFxyXG4gICAgYXNwZWN0UmF0aW86ICcxJyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZmZmZicsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBTcGFuU3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiB0b2RvLmNvbXBsZXRlID8gJ2xpbmUtdGhyb3VnaCcgOiAnJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgc3Bhbi5zdHlsZS5jc3NUZXh0ID0gU3BhblN0eWxlcygpO1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoXHJcbiAgICBUcmFzaENhbkljb24oeyBoZWlnaHQ6IDE2LCB3aWR0aDogMTYsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgKTtcclxuICBkZWxldGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gIGRlbGV0ZUJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMXJlbScsXHJcbiAgICBhc3BlY3RSYXRpbzogJzEnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gIGlmICh0b2RvLmNvbXBsZXRlKSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0b2RvLmNvbXBsZXRlID0gIXRvZG8uY29tcGxldGU7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9VcGRhdGVkJykpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9DYXJkRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkcy5UT0RPX0NBUkRfREVUQUlMUyk7XHJcblxyXG4gICAgaWYgKHRvZG9DYXJkRGV0YWlscy5kYXRhc2V0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VG9kb0lkID0gdG9kb0NhcmREZXRhaWxzLmRhdGFzZXQudG9kb0lkO1xyXG5cclxuICAgIGlmIChjdXJyZW50VG9kb0lkICE9PSB0b2RvLmlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RvQ2FyZCA9IHRvZG9DYXJkRGV0YWlscy5wYXJlbnRFbGVtZW50O1xyXG4gICAgdG9kb0NhcmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChUb2RvRGV0YWlscyh7IHRvZG8gfSkpO1xyXG4gIH1cclxuXHJcbiAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDb21wbGV0ZUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0b2RvU2VydmljZSgpLmRlbGV0ZVRvZG9CeUlkKHsgdG9kb0lkOiB0b2RvLmlkIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9VcGRhdGVkJykpO1xyXG4gICAgY29uc3QgdG9kb0NhcmREZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlRPRE9fQ0FSRF9ERVRBSUxTKTtcclxuXHJcbiAgICBpZiAodG9kb0NhcmREZXRhaWxzLmRhdGFzZXQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvSWQgPSB0b2RvQ2FyZERldGFpbHMuZGF0YXNldC50b2RvSWQ7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUb2RvSWQgIT09IHRvZG8uaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9DYXJkID0gdG9kb0NhcmREZXRhaWxzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0b2RvQ2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKFRvZG9EZXRhaWxzKHt9KSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVCdXR0b25DbGljayk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3ZlcigpIHtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNlOTcwJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3Zlcik7XHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaXN0Q2FyZFRvZG8gZnJvbSAnLi9MaXN0Q2FyZFRvZG8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENhcmQoe1xyXG4gIGxpc3RJZCxcclxuICB0b2RvSWQsXHJcbn06IHtcclxuICBsaXN0SWQ6IHN0cmluZztcclxuICB0b2RvSWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCB0b2RvcyA9IHRvZG9TZXJ2aWNlKCkuZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9KTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIGlmICh0b2Rvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgY29uc3QgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYWNlSG9sZGVyLmlubmVyVGV4dCA9ICdMb29rcyBsaWtlIHlvdSBnb3QgaXQgYWxsIGRvbmUhIPCfjoknO1xyXG4gICAgcGxhY2VIb2xkZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9KTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGxhY2VIb2xkZXIpO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBsaXN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjI1cmVtJyxcclxuICB9KTtcclxuXHJcbiAgbGlzdC5hcHBlbmQoLi4uVG9kb0xpc3RJdGVtcyh7IGxpc3RJZCwgdG9kb0lkIH0pKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlzdENsaWNrKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgIGNvbnN0IHRhcmdldFRvZG8gPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgIGlmICh0YXJnZXRUb2RvID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RvcyA9IFsuLi5saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyldO1xyXG5cclxuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xyXG4gICAgICBpZiAodG9kby5pZCAhPT0gdGFyZ2V0VG9kby5pZCkge1xyXG4gICAgICAgIHRvZG8uc3R5bGUuY3NzVGV4dCA9ICcnO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3RvZG9JZCcsIHRvZG8uaWQpO1xyXG4gICAgICB0b2RvLnN0eWxlLmNzc1RleHQgPSBoaWdobGlnaHRlZEl0ZW1TdHlsZXMoKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9kb1VwZGF0ZWQnLCBoYW5kbGVUb2RvVXBkYXRlKTtcclxuICAgICAgbmF2aWdhdGUodXJsLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUxpc3RDbGljayk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZG9VcGRhdGUoKSB7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGlzdC5hcHBlbmQoLi4uVG9kb0xpc3RJdGVtcyh7IGxpc3RJZCwgdG9kb0lkIH0pKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9VcGRhdGVkJywgaGFuZGxlVG9kb1VwZGF0ZSk7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb2RvTGlzdEl0ZW1zKHtcclxuICBsaXN0SWQsXHJcbiAgdG9kb0lkLFxyXG59OiB7XHJcbiAgbGlzdElkOiBzdHJpbmc7XHJcbiAgdG9kb0lkPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgdG9kb3MgPSB0b2RvU2VydmljZSgpLmdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQgfSk7XHJcbiAgcmV0dXJuIHRvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChMaXN0Q2FyZFRvZG8oeyB0b2RvIH0pKTtcclxuICAgIGl0ZW0uaWQgPSB0b2RvLmlkO1xyXG5cclxuICAgIGlmICh0b2RvLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gaGlnaGxpZ2h0ZWRJdGVtU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodGVkSXRlbVN0eWxlcygpIHtcclxuICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggNHB4IDBweCAjMDA5M2U5JyxcclxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuM3MgZWFzZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0SGVhZGluZyh7XHJcbiAgaGVhZGluZ1RleHQsXHJcbiAgbGlzdElkLFxyXG59OiB7XHJcbiAgaGVhZGluZ1RleHQ6IHN0cmluZztcclxuICBsaXN0SWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBnYXA6ICcycmVtJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogJzFyZW0gMS4yNXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIExpbmsoe1xyXG4gICAgICBsaW5rVGV4dDogJ0FkZCBUYXNrJyxcclxuICAgICAgaHJlZjogbGlzdElkID8gYC90YXNrcy9hZGQ/bGlzdElkPSR7bGlzdElkfWAgOiAnL3Rhc2tzL2FkZCcsXHJcbiAgICAgIHN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBwYWRkaW5nOiAnMC4yNXJlbSAxcmVtJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZmZmZicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyNDI0Mic7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0NhcmQoKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgZmxleDogJzEnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG4iLCJpbXBvcnQgTGlzdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0Q2FyZCc7XHJcbmltcG9ydCBMaXN0SGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RIZWFkaW5nJztcclxuaW1wb3J0IFRvZG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0NhcmQnO1xyXG5pbXBvcnQgVG9kb0RldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvRGV0YWlscyc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3REZXRhaWwocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHByb3BzLnBhdGhQYXJhbXM7XHJcbiAgY29uc3QgeyB0b2RvSWQgfSA9IHByb3BzLnF1ZXJ5UGFyYW1zO1xyXG4gIGNvbnN0IHsgZ2V0TGlzdEJ5SWQgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgY29uc3QgbGlzdCA9IGdldExpc3RCeUlkKHsgaWQgfSk7XHJcbiAgY29uc3QgeyBnZXRUb2RvQnlJZCB9ID0gdG9kb1NlcnZpY2UoKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcycmVtJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSk7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICBmdW5jdGlvbiBnZXRDYXJkQ29udGFpbmVyRGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gMTAwMCA/ICdyb3cnIDogJ2NvbHVtbic7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246IGdldENhcmRDb250YWluZXJEaXJlY3Rpb24oKSxcclxuICAgIGdhcDogJzFyZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSk7XHJcblxyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoTGlzdENhcmQoeyBsaXN0SWQ6IGxpc3Q/LmlkLCB0b2RvSWQgfSkpO1xyXG5cclxuICBjb25zdCB0b2RvQ2FyZCA9IFRvZG9DYXJkKCk7XHJcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBUb2RvRGV0YWlscyh7XHJcbiAgICB0b2RvOiBnZXRUb2RvQnlJZCh7IHRvZG9JZCB9KSxcclxuICB9KTtcclxuXHJcbiAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpO1xyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIExpc3RIZWFkaW5nKHtcclxuICAgICAgaGVhZGluZ1RleHQ6IGxpc3QgPyBsaXN0Lm5hbWUgOiAnSW5ib3gnLFxyXG4gICAgICBsaXN0SWQ6IGxpc3Q/LmlkLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICBjYXJkQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBnZXRDYXJkQ29udGFpbmVyRGlyZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlEYXkocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ015IERheSc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dFdlZWsocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ05leHQgNyBEYXlzJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnTm90IEZvdW5kJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCBBZGRMaXN0IGZyb20gJy4vdmlld3MvQWRkTGlzdCc7XHJcbmltcG9ydCBBZGRUYXNrIGZyb20gJy4vdmlld3MvQWRkVGFzayc7XHJcbmltcG9ydCBBbGxNeVRhc2tzIGZyb20gJy4vdmlld3MvQWxsTXlUYXNrcyc7XHJcbmltcG9ydCBMaXN0RGV0YWlsIGZyb20gJy4vdmlld3MvTGlzdERldGFpbCc7XHJcbmltcG9ydCBNeURheSBmcm9tICcuL3ZpZXdzL015RGF5JztcclxuaW1wb3J0IE5leHRXZWVrIGZyb20gJy4vdmlld3MvTmV4dFdlZWsnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi92aWV3cy9Ob3RGb3VuZCc7XHJcblxyXG5leHBvcnQgdHlwZSBWaWV3UHJvcHMgPSB7XHJcbiAgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICBwYXRoUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHF1ZXJ5UGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59O1xyXG5cclxudHlwZSBSb3V0ZSA9IHtcclxuICBxdWVyeT86IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgdmlldzogKHByb3BzOiBWaWV3UHJvcHMpID0+IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIE1hdGNoID0ge1xyXG4gIHJvdXRlOiBSb3V0ZTtcclxuICByZXN1bHQ6IFJlZ0V4cE1hdGNoQXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyKCkge1xyXG4gIGNvbnN0IHJvdXRlczogUm91dGVbXSA9IFtcclxuICAgIHsgcGF0aDogJy8nLCB2aWV3OiBMaXN0RGV0YWlsIH0sXHJcbiAgICB7IHBhdGg6ICcvbXktZGF5JywgdmlldzogTXlEYXkgfSxcclxuICAgIHsgcGF0aDogJy9uZXh0LXNldmVuLWRheXMnLCB2aWV3OiBOZXh0V2VlayB9LFxyXG4gICAgeyBwYXRoOiAnL3Rhc2tzJywgdmlldzogQWxsTXlUYXNrcyB9LFxyXG4gICAgeyBwYXRoOiAnL3Rhc2tzL2FkZCcsIHZpZXc6IEFkZFRhc2sgfSxcclxuICAgIHsgcGF0aDogJy9saXN0cy9hZGQnLCB2aWV3OiBBZGRMaXN0IH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvOmlkJywgdmlldzogTGlzdERldGFpbCB9LFxyXG4gIF0ubWFwKHJvdXRlID0+IHtcclxuICAgIHJvdXRlLnBhdGggPSBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyByb3V0ZS5wYXRoO1xyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXRjaCBwYXRoIGZyb20gYmVnaW5uaW5nIHRvIGVuZFxyXG4gIC8vIGVzY2FwZSBmb3J3YXJkIHNsYXNoZXNcclxuICAvLyByZXBsYWNlIHBhdGggcGxhY2Vob2xkZXJzXHJcbiAgLy8gd2l0aCBjYXB0dXJlIGdyb3Vwc1xyXG4gIGNvbnN0IG1hdGNoZXM6IE1hdGNoW10gPSByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICByb3V0ZSxcclxuICAgIHJlc3VsdDogbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goXHJcbiAgICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgICAgJ14nICsgcm91dGUucGF0aC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOlxcdysvZywgJyguKyknKSArICckJ1xyXG4gICAgICApXHJcbiAgICApLFxyXG4gIH0pKTtcclxuXHJcbiAgbGV0IG1hdGNoID0gbWF0Y2hlcy5maW5kKG1hdGNoID0+IG1hdGNoLnJlc3VsdCAhPT0gbnVsbCk7XHJcblxyXG4gIGlmIChtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXRjaCA9IHtcclxuICAgICAgcm91dGU6IHtcclxuICAgICAgICBxdWVyeTogbG9jYXRpb24uc2VhcmNoLFxyXG4gICAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIHZpZXc6IE5vdEZvdW5kLFxyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHQ6IFtsb2NhdGlvbi5wYXRobmFtZV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2gucm91dGUucXVlcnkgPSBsb2NhdGlvbi5zZWFyY2g7XHJcblxyXG4gIGNvbnN0IHBhdGhQYXJhbXMgPSBbLi4ubWF0Y2gucm91dGUucGF0aC5tYXRjaEFsbCgvOihcXHcrKS9nKV1cclxuICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdFsxXSlcclxuICAgIC5yZWR1Y2UoXHJcbiAgICAgIChwcmV2LCBjdXJyLCBpKSA9PiAoeyAuLi5wcmV2LCBbY3Vycl06IG1hdGNoLnJlc3VsdC5zbGljZSgxKVtpXSB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbWF0Y2gucm91dGUucXVlcnk/LnNwbGl0KCc/JylbMV07XHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPVxyXG4gICAgcXVlcnlTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IHt9XHJcbiAgICAgIDogcXVlcnlTdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGN1cnIuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICBba2V5XTogZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIG1hdGNoLnJvdXRlLnZpZXcoeyBwYXJlbnQsIHBhdGhQYXJhbXMsIHF1ZXJ5UGFyYW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUodXJsOiBzdHJpbmcpIHtcclxuICBjb25zdCB1cmxUZXh0ID0gL15cXC8vLnRlc3QodXJsKSA/IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIHVybCA6IHVybDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmxUZXh0KTtcclxuICByb3V0ZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgJy4vYXNzZXRzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IG5hdmlnYXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlJPT1QpO1xyXG5yb290LmFwcGVuZENoaWxkKExheW91dCgpKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgJ2NsaWNrJyxcclxuICAoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcclxuICAgIGlmIChsaW5rICE9PSBudWxsICYmIGxpbmsubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG5hdmlnYXRlKGxpbmsuaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxucm91dGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==