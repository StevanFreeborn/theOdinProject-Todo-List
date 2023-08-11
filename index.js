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

;// CONCATENATED MODULE: ./src/components/CancelButton.ts
function CancelButton() {
    const cancelButton = document.createElement('button');
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
        form.id = ids.ADD_LIST_FORM;
        const nameInput = FormInputGroup({
            labelText: 'Name',
            inputId: 'name',
            inputName: 'name',
            inputType: 'text',
        });
        form.appendChild(nameInput);
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
        const cancelButton = CancelButton();
        const addButton = document.createElement('button');
        addButton.innerText = 'Add';
        addButton.type = 'submit';
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
        const titleInput = FormInputGroup({
            labelText: 'Title',
            inputId: 'title',
            inputName: 'title',
            inputType: 'text',
        });
        const descriptionTextArea = FormTextAreaGroup({
            labelText: 'Description',
            textAreaId: 'description',
            textAreaName: 'description',
        });
        const dueDateInput = FormInputGroup({
            labelText: 'Due Date',
            inputId: 'dueDate',
            inputName: 'dueDate',
            inputType: 'date',
        });
        const prioritySelect = FormSelectGroup({
            labelText: 'Priority',
            selectId: 'priority',
            selectName: 'priority',
            options: [
                {
                    valueText: 'Select a priority',
                    selected: true,
                    disabled: true,
                },
                {
                    valueText: 'Low',
                    value: 'Low',
                },
                {
                    valueText: 'Medium',
                    value: 'Medium',
                },
                {
                    valueText: 'High',
                    value: 'High',
                },
            ],
        });
        form.appendChild(titleInput);
        form.appendChild(descriptionTextArea);
        form.appendChild(dueDateInput);
        form.appendChild(prioritySelect);
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
        const cancelButton = CancelButton();
        const addButton = document.createElement('button');
        addButton.innerText = 'Add';
        addButton.type = 'submit';
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
    const cardContainer = document.createElement('div');
    cardContainer.style.cssText = inlineStyles({
        display: 'flex',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUM1QixPQUFPLEVBQ1AsQ0FBQyxDQUFrQyxFQUFFLEVBQUU7SUFDckMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDaEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQ0YsQ0FBQztBQUVGLE1BQU0sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbnN0YW50cy9lbGVtZW50cy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3R5bGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kYXRhL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL2xpc3RTZXJ2aWNlLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpbmsudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2TGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTXlMaXN0cy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ2FuY2VsQnV0dG9uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1JbnB1dEdyb3VwLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL2lkLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9zdHJpbmdzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvbGlzdC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWRkTGlzdC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtU2VsZWN0R3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVRleHRBcmVhR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVscy90b2RvLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zZXJ2aWNlcy90b2RvU2VydmljZS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWRkVGFzay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWxsTXlUYXNrcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DaGVja21hcmtJY29uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9kYXRlcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DaGVja21hcmtDaXJjbGVJY29uLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RvZG9EZXRhaWxzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RyYXNoQ2FuSWNvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaXN0Q2FyZFRvZG8udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdENhcmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRpbmcudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9kb0NhcmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0xpc3REZXRhaWwudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL015RGF5LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9OZXh0V2Vlay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTm90Rm91bmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQkVHSU4gUkVTRVRTICovXHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi8qIEVORCBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSxcclxuI3Jvb3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZDpmb2N1cyxcclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZDpmb2N1cyxcclxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEJFR0lOIFJFU0VUUyAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG4jcm9vdCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkOmZvY3VzLFxcclxcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQ6Zm9jdXMsXFxyXFxuaW5wdXQjZHVlRGF0ZTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQ6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IGNvbnN0IGlkcyA9IHtcclxuICBST09UOiAncm9vdCcsXHJcbiAgUFJJTUFSWV9OQVZfTElTVDogJ3ByaW1hcnlOYXZMaXN0JyxcclxuICBNWV9MSVNUU19DT05UQUlORVI6ICdteUxpc3RzQ29udGFpbmVyJyxcclxuICBNWV9MSVNUUzogJ215TGlzdHMnLFxyXG4gIEFERF9MSVNUX0ZPUk06ICdhZGRMaXN0Rm9ybScsXHJcbiAgQUREX1RBU0tfRk9STTogJ2FkZFRhc2tGb3JtJyxcclxuICBUT0RPX0NBUkRfREVUQUlMUzogJ3RvZG9DYXJkJyxcclxufTtcclxuIiwiZnVuY3Rpb24gY2FtZWxUb0tlYmFiKGNhbWVsQ2FzZVN0cmluZzogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGNhbWVsQ2FzZVN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5saW5lU3R5bGVzKHN0eWxlczogb2JqZWN0KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcykucmVkdWNlKChpbmxpbmVTdHlsZXMsIHByb3BlcnR5KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XHJcblxyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGAke2lubGluZVN0eWxlc30ke2NhbWVsVG9LZWJhYihwcm9wZXJ0eSl9OiR7dmFsdWV9O2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlubGluZVN0eWxlcztcclxuICB9LCAnJyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL21vZGVscy9saXN0JztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KCkge1xyXG4gIGNvbnN0IExJU1RTX0tFWSA9ICdsaXN0cyc7XHJcbiAgY29uc3QgVE9ET1NfS0VZID0gJ3RvZG9zJztcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SXRlbSh7IGtleSB9OiB7IGtleTogc3RyaW5nIH0pIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBmdW5jdGlvbiByZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICdkdWVEYXRlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSksIHJldml2ZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0SXRlbSh7IGtleSwgaXRlbSB9OiB7IGtleTogc3RyaW5nOyBpdGVtOiBvYmplY3QgfSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgX2xpc3RzOiBMaXN0W10gPSBnZXRJdGVtKHsga2V5OiBMSVNUU19LRVkgfSk7XHJcbiAgbGV0IF90b2RvczogVG9kb1tdID0gZ2V0SXRlbSh7IGtleTogVE9ET1NfS0VZIH0pO1xyXG5cclxuICBpZiAoX2xpc3RzID09IG51bGwpIHtcclxuICAgIHNldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSwgaXRlbTogW10gfSk7XHJcbiAgICBfbGlzdHMgPSBnZXRJdGVtKHsga2V5OiBMSVNUU19LRVkgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoX3RvZG9zID09IG51bGwpIHtcclxuICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogW10gfSk7XHJcbiAgICBfdG9kb3MgPSBnZXRJdGVtKHsga2V5OiBUT0RPU19LRVkgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxpc3RzKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogKHsgbGlzdCB9OiB7IGxpc3Q6IExpc3QgfSkgPT4ge1xyXG4gICAgICAgICAgX2xpc3RzLnB1c2gobGlzdCk7XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBMSVNUU19LRVksIGl0ZW06IF9saXN0cyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRPbmU6IChwcmVkaWNhdGU6IChsaXN0OiBMaXN0KSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX2xpc3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmRNYW55OiAocHJlZGljYXRlOiAobGlzdDogTGlzdCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF9saXN0cy5maWx0ZXIocHJlZGljYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGdldCB0b2RvcygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6ICh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pID0+IHtcclxuICAgICAgICAgIF90b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBfdG9kb3MgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kOiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF90b2Rvcy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kTWFueTogKHByZWRpY2F0ZTogKHRvZG86IFRvZG8pID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfdG9kb3MuZmlsdGVyKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kQW5kUmVwbGFjZTogKHByZWRpY2F0ZTogKHRvZG86IFRvZG8pID0+IGJvb2xlYW4sIHRvZG86IFRvZG8pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gX3RvZG9zLmZpbmRJbmRleChwcmVkaWNhdGUpO1xyXG5cclxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF90b2Rvc1tpbmRleF0gPSB0b2RvO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBfdG9kb3MgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kQW5kUmVtb3ZlOiAocHJlZGljYXRlOiAodG9kbzogVG9kbykgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBfdG9kb3MuZmluZEluZGV4KHByZWRpY2F0ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgX3RvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IF90b2RvcyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRleHQgfSBmcm9tICcuLi9kYXRhL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RTZXJ2aWNlKCkge1xyXG4gIGNvbnN0IF9jb250ZXh0ID0gY29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRMaXN0KHsgbGlzdCB9OiB7IGxpc3Q6IExpc3QgfSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdMaXN0ID0gX2NvbnRleHQubGlzdHMuZmluZE9uZShsID0+IGwubmFtZSA9PT0gbGlzdC5uYW1lKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMaXN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEEgbGlzdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBuYW1lICR7bGlzdC5uYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb250ZXh0Lmxpc3RzLmFkZCh7IGxpc3QgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRMaXN0QnlJZCh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE9uZShsID0+IGwuaWQgPT09IGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFsbExpc3RzKCkge1xyXG4gICAgcmV0dXJuIF9jb250ZXh0Lmxpc3RzLmZpbmRNYW55KGwgPT4gbCAhPT0gbnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkTGlzdCxcclxuICAgIGdldExpc3RCeUlkLFxyXG4gICAgZ2V0QWxsTGlzdHMsXHJcbiAgfTtcclxufVxyXG4iLCJ0eXBlIExpbmtQcm9wcyA9IHtcclxuICBsaW5rVGV4dDogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHsgbGlua1RleHQsIGhyZWYsIHN0eWxlcyB9OiBMaW5rUHJvcHMpIHtcclxuICAvLyBpZiBocmVmIGlzIGFuIGFic29sdXRlIG9uZSBhcHBlbmRcclxuICAvLyB0aGUgZW52cyBiYXNlIHBhdGguXHJcbiAgY29uc3QgaHJlZlRleHQgPSAvXlxcLy8udGVzdChocmVmKSA/IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIGhyZWYgOiBocmVmO1xyXG5cclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGxpbmsudGl0bGUgPSBsaW5rVGV4dDtcclxuICBsaW5rLmhyZWYgPSBocmVmVGV4dDtcclxuICBsaW5rLnN0eWxlLmNzc1RleHQgPSBzdHlsZXM7XHJcbiAgbGluay5kYXRhc2V0LmxpbmsgPSAndHJ1ZSc7XHJcbiAgbGluay50ZXh0ID0gbGlua1RleHQ7XHJcblxyXG4gIHJldHVybiBsaW5rO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaXN0SXRlbSh7XHJcbiAgbGlua1RleHQsXHJcbiAgaHJlZixcclxufToge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgbmF2TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBuYXZJdGVtLmFwcGVuZENoaWxkKExpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzOiBuYXZMaW5rU3R5bGVzIH0pKTtcclxuXHJcbiAgcmV0dXJuIG5hdkl0ZW07XHJcbn1cclxuIiwiaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcbmltcG9ydCBOYXZMaXN0SXRlbSBmcm9tICcuL05hdkxpc3RJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15TGlzdHMoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gTXlMaXN0Q29udGFpbmVyKCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChNeUxpc3RUaXRsZSgpKTtcclxuICBjb250YWluZXIuYXBwZW5kKExpc3QoKSk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxuXHJcbiAgZnVuY3Rpb24gTXlMaXN0Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgbXlMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBteUxpc3RDb250YWluZXIuaWQgPSBpZHMuTVlfTElTVFNfQ09OVEFJTkVSO1xyXG5cclxuICAgIHJldHVybiBteUxpc3RDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBNeUxpc3RUaXRsZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICBwYWRkaW5nOiAnMHJlbSAxcmVtJyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTXkgTGlzdHMnO1xyXG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGZvbnRTaXplOiAnMS4xNXJlbScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZExpc3RMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcxLjI1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIExpbmsoe1xyXG4gICAgICAgIGxpbmtUZXh0OiAnKycsXHJcbiAgICAgICAgaHJlZjogJy9saXN0cy9hZGQnLFxyXG4gICAgICAgIHN0eWxlczogYWRkTGlzdExpbmtTdHlsZXMsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMDA5M0U5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTGlzdCgpIHtcclxuICAgIGZ1bmN0aW9uIHJlbmRlck5hdkxpbmtJdGVtcygpIHtcclxuICAgICAgY29uc3QgeyBnZXRBbGxMaXN0cyB9ID0gbGlzdFNlcnZpY2UoKTtcclxuICAgICAgY29uc3QgYWxsTGlzdHMgPSBnZXRBbGxMaXN0cygpO1xyXG4gICAgICBjb25zdCBteUxpc3RJdGVtcyA9IGFsbExpc3RzLm1hcChsaXN0ID0+ICh7XHJcbiAgICAgICAgbGlua1RleHQ6IGxpc3QubmFtZSxcclxuICAgICAgICBocmVmOiBgL2xpc3RzLyR7bGlzdC5pZH1gLFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBteUxpc3RJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgIE5hdkxpc3RJdGVtKHsgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsIGhyZWY6IGl0ZW0uaHJlZiB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGlzdC5hcHBlbmQoLi4uaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGlzdC5pZCA9IGlkcy5NWV9MSVNUUztcclxuICAgIGxpc3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJOYXZMaW5rSXRlbXMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMaXN0VXBkYXRlZCgpIHtcclxuICAgICAgcmVuZGVyTmF2TGlua0l0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTXlMaXN0TW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA5M0U5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU15TGlzdE1vdXNlT3V0KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdHNVcGRhdGVkJywgaGFuZGxlTGlzdFVwZGF0ZWQpO1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVNeUxpc3RNb3VzZU92ZXIpO1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU15TGlzdE1vdXNlT3V0KTtcclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IE15TGlzdHMgZnJvbSAnLi9NeUxpc3RzJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcclxuICBjb25zdCBwcmltYXJ5TmF2TGlua0l0ZW1zID0gW1xyXG4gICAgeyBsaW5rVGV4dDogJ0luYm94JywgaHJlZjogJy8nIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnTXkgRGF5JywgaHJlZjogJy9teS1kYXknIH0sXHJcbiAgICB7XHJcbiAgICAgIGxpbmtUZXh0OiAnTmV4dCA3IERheXMnLFxyXG4gICAgICBocmVmOiBgL25leHQtc2V2ZW4tZGF5c2AsXHJcbiAgICB9LFxyXG4gICAgeyBsaW5rVGV4dDogJ0FsbCBteSB0YXNrcycsIGhyZWY6ICcvdGFza3MnIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYXNpZGUgPSBBc2lkZSgpO1xyXG4gIGFzaWRlLmFwcGVuZENoaWxkKE5hdigpKTtcclxuICBhc2lkZS5hcHBlbmRDaGlsZChNeUxpc3RzKCkpO1xyXG4gIHJldHVybiBhc2lkZTtcclxuXHJcbiAgZnVuY3Rpb24gQXNpZGUoKSB7XHJcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbiAgICBhc2lkZS5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFzaWRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGdhcDogJzFyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMXJlbSAwcmVtJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hdkxpc3QgPSBOYXZMaXN0KCk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE5hdkxpc3QoKSB7XHJcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIG5hdkxpc3QuaWQgPSBpZHMuUFJJTUFSWV9OQVZfTElTVDtcclxuICAgIG5hdkxpc3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IHByaW1hcnlOYXZMaW5rSXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgTmF2TGlzdEl0ZW0oe1xyXG4gICAgICAgIGxpbmtUZXh0OiBpdGVtLmxpbmtUZXh0LFxyXG4gICAgICAgIGhyZWY6IGl0ZW0uaHJlZixcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgbmF2TGlzdC5hcHBlbmQoLi4uaXRlbXMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5hdkxpc3RNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2TGlzdE1vdXNlT3V0KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVOYXZMaXN0TW91c2VPdmVyKTtcclxuICAgIG5hdkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVOYXZMaXN0TW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBuYXZMaXN0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uaWQgPSAnYXBwJztcclxuICBtYWluLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZmxleDogJzEnLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOTNFOScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDA5M0U5IDAlLCAjODBEMEM3IDEwMCUpJyxcclxuICAgIGJveFNoYWRvdzogJ2luc2V0IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzAwOTNFOScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoU2lkZUJhcigpKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FuY2VsQnV0dG9uKCkge1xyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWxDbGljaygpIHtcclxuICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FuY2VsQ2xpY2spO1xyXG5cclxuICByZXR1cm4gY2FuY2VsQnV0dG9uO1xyXG59XHJcbiIsInR5cGUgVmFsaWRJbnB1dFR5cGVzID1cclxuICB8ICdidXR0b24nXHJcbiAgfCAnY2hlY2tib3gnXHJcbiAgfCAnY29sb3InXHJcbiAgfCAnZGF0ZSdcclxuICB8ICdkYXRldGltZS1sb2NhbCdcclxuICB8ICdlbWFpbCdcclxuICB8ICdmaWxlJ1xyXG4gIHwgJ2hpZGRlbidcclxuICB8ICdpbWFnZSdcclxuICB8ICdtb250aCdcclxuICB8ICdudW1iZXInXHJcbiAgfCAncGFzc3dvcmQnXHJcbiAgfCAncmFkaW8nXHJcbiAgfCAncmFuZ2UnXHJcbiAgfCAncmVzZXQnXHJcbiAgfCAnc2VhcmNoJ1xyXG4gIHwgJ3N1Ym1pdCdcclxuICB8ICd0ZWwnXHJcbiAgfCAndGV4dCdcclxuICB8ICd0aW1lJ1xyXG4gIHwgJ3VybCdcclxuICB8ICd3ZWVrJztcclxuXHJcbnR5cGUgRm9ybUlucHV0R3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgaW5wdXRJZDogc3RyaW5nO1xyXG4gIGlucHV0TmFtZTogc3RyaW5nO1xyXG4gIGlucHV0VHlwZTogVmFsaWRJbnB1dFR5cGVzO1xyXG4gIGlucHV0U3R5bGVzPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUlucHV0R3JvdXAocHJvcHM6IEZvcm1JbnB1dEdyb3VwUHJvcHMpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmNvbnRhaW5lclN0eWxlcztcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBwcm9wcy5pbnB1dElkO1xyXG4gIGxhYmVsLmlubmVyVGV4dCA9IHByb3BzLmxhYmVsVGV4dDtcclxuICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMubGFiZWxTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9IHByb3BzLmlucHV0SWQ7XHJcbiAgaW5wdXQubmFtZSA9IHByb3BzLmlucHV0TmFtZTtcclxuICBpbnB1dC50eXBlID0gcHJvcHMuaW5wdXRUeXBlO1xyXG4gIGlucHV0LnN0eWxlLmNzc1RleHQgPSBwcm9wcy5pbnB1dFN0eWxlcztcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XHJcbiAgcmV0dXJuIHV1aWQoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyIH06IHsgc3RyOiBzdHJpbmcgfSkge1xyXG4gIHJldHVybiAhc3RyIHx8IHN0ci50cmltKCkgPT09ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9UaXRsZUNhc2UoeyBzdHIgfTogeyBzdHI6IHN0cmluZyB9KSB7XHJcbiAgLy8gYWRkIHNwYWNlIGJlZm9yZSB1cHBlciBjYXNlIGxldHRlcnNcclxuICAvLyByZXBsYWNlIGZpcnN0IGNoYXJhY3RlciB3aXRoIHVwcGVyIGNhc2VcclxuICByZXR1cm4gc3RyXHJcbiAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBtYXRjaCA9PiBgICR7bWF0Y2h9YClcclxuICAgIC5yZXBsYWNlKC9eLi8sIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAudHJpbSgpO1xyXG59XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlSWQgfSBmcm9tICcuLi91dGlscy9pZCc7XHJcbmltcG9ydCB7IGlzTnVsbE9yV2hpdGVTcGFjZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ3MnO1xyXG5cclxudHlwZSBMaXN0UGFyYW1zID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIExpc3QgPSB7IGlkOiBzdHJpbmcgfSAmIExpc3RQYXJhbXM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCh7IG5hbWUgfTogTGlzdFBhcmFtcyk6IExpc3Qge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlTmFtZSh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogbmFtZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfbmFtZSA9IHZhbGlkYXRlTmFtZSh7IG5hbWUgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiBfbmFtZTtcclxuICAgIH0sXHJcbiAgICBzZXQgbmFtZShuYW1lKSB7XHJcbiAgICAgIF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgQ2FuY2VsQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FuY2VsQnV0dG9uJztcclxuaW1wb3J0IEZvcm1JbnB1dEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybUlucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5pbXBvcnQgeyBWaWV3UHJvcHMsIG5hdmlnYXRlIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRMaXN0KHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoQWRkTGlzdEZvcm0oKSk7XHJcblxyXG4gIGZ1bmN0aW9uIEFkZExpc3RGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uaWQgPSBpZHMuQUREX0xJU1RfRk9STTtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ05hbWUnLFxyXG4gICAgICBpbnB1dElkOiAnbmFtZScsXHJcbiAgICAgIGlucHV0TmFtZTogJ25hbWUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoQnV0dG9ucygpKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50OiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRm9ybUVsZW1lbnQgfSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KSk7XHJcblxyXG4gICAgICBpZiAobmFtZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgIHRocm93IEVycm9yKCdOYW1lIGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QoeyBuYW1lIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgYWRkTGlzdCB9ID0gbGlzdFNlcnZpY2UoKTtcclxuICAgICAgICBhZGRMaXN0KHsgbGlzdCB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbGlzdHNVcGRhdGVkJykpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG4gICAgICAgIG5hdmlnYXRlKGAvbGlzdHMvJHtsaXN0LmlkfWApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IENhbmNlbEJ1dHRvbigpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnO1xyXG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG59XHJcbiIsInR5cGUgT3B0aW9uID0ge1xyXG4gIHZhbHVlVGV4dDogc3RyaW5nO1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgc3R5bGVzPzogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBGb3JtU2VsZWN0R3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgc2VsZWN0SWQ6IHN0cmluZztcclxuICBzZWxlY3ROYW1lOiBzdHJpbmc7XHJcbiAgc2VsZWN0U3R5bGVzPzogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IE9wdGlvbltdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVNlbGVjdEdyb3VwKHByb3BzOiBGb3JtU2VsZWN0R3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBwcm9wcy5zZWxlY3RJZDtcclxuICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMubGFiZWxTdHlsZXM7XHJcblxyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHNlbGVjdC5pZCA9IHByb3BzLnNlbGVjdElkO1xyXG4gIHNlbGVjdC5uYW1lID0gcHJvcHMuc2VsZWN0TmFtZTtcclxuICBzZWxlY3Quc3R5bGUuY3NzVGV4dCA9IHByb3BzLnNlbGVjdFN0eWxlcztcclxuXHJcbiAgcHJvcHMub3B0aW9uc1xyXG4gICAgLm1hcChvID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbi5zdHlsZS5jc3NUZXh0ID0gby5zdHlsZXM7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG8udmFsdWU7XHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gby52YWx1ZVRleHQ7XHJcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IG8uZGlzYWJsZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG8uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9KVxyXG4gICAgLmZvckVhY2gobyA9PiBzZWxlY3QuYXBwZW5kQ2hpbGQobykpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsInR5cGUgRm9ybVRleHRBcmVhR3JvdXBQcm9wcyA9IHtcclxuICBjb250YWluZXJTdHlsZXM/OiBzdHJpbmc7XHJcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxTdHlsZXM/OiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFJZDogc3RyaW5nO1xyXG4gIHRleHRBcmVhTmFtZTogc3RyaW5nO1xyXG4gIHRleHRBcmVhVmFsdWU/OiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtVGV4dEFyZWFHcm91cChwcm9wczogRm9ybVRleHRBcmVhR3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIHRleHRhcmVhLmlkID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS5uYW1lID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IHByb3BzLnRleHRBcmVhVmFsdWUgPyBwcm9wcy50ZXh0QXJlYVZhbHVlIDogJyc7XHJcbiAgdGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9IHByb3BzLnRleHRBcmVhU3R5bGVzO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZVNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG5leHBvcnQgZW51bSBQcmlvcml0eSB7XHJcbiAgSGlnaCA9ICdIaWdoJyxcclxuICBNZWRpdW0gPSAnTWVkaXVtJyxcclxuICBMb3cgPSAnTG93JyxcclxufVxyXG5cclxudHlwZSBUb2RvUGFyYW1zID0ge1xyXG4gIGxpc3RJZD86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZHVlRGF0ZTogRGF0ZTtcclxuICBwcmlvcml0eTogUHJpb3JpdHk7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUb2RvID0geyBpZDogc3RyaW5nOyBjb21wbGV0ZTogYm9vbGVhbiB9ICYgVG9kb1BhcmFtcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHtcclxuICBsaXN0SWQsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZHVlRGF0ZSxcclxuICBwcmlvcml0eSxcclxufTogVG9kb1BhcmFtcyk6IFRvZG8ge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogdGl0bGUgfSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aXRsZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTUwIGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfTogeyBkZXNjcmlwdGlvbjogc3RyaW5nIH0pIHtcclxuICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiAyNTUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMjU1IGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUR1ZURhdGUoeyBkdWVEYXRlIH06IHsgZHVlRGF0ZTogRGF0ZSB9KSB7XHJcbiAgICByZXR1cm4gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUHJpb3JpdHkoeyBwcmlvcml0eSB9OiB7IHByaW9yaXR5OiBzdHJpbmcgfSk6IFByaW9yaXR5IHtcclxuICAgIGNvbnN0IHByaW9yaXR5RW51bSA9IFByaW9yaXR5W3ByaW9yaXR5XTtcclxuXHJcbiAgICBpZiAocHJpb3JpdHlFbnVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmlvcml0eSBtdXN0IGJlIEhpZ2gsIE1lZGl1bSwgb3IgTG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5RW51bTtcclxuICB9XHJcblxyXG4gIGxldCBfbGlzdElkID0gbGlzdElkO1xyXG4gIGNvbnN0IF9pZCA9IGdlbmVyYXRlSWQoKTtcclxuICBsZXQgX3RpdGxlID0gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH0pO1xyXG4gIGxldCBfZGVzY3JpcHRpb24gPSB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfSk7XHJcbiAgbGV0IF9kdWVEYXRlID0gdmFsaWRhdGVEdWVEYXRlKHsgZHVlRGF0ZSB9KTtcclxuICBsZXQgX3ByaW9yaXR5ID0gdmFsaWRhdGVQcmlvcml0eSh7IHByaW9yaXR5IH0pO1xyXG4gIGxldCBfY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBsaXN0SWQoKSB7XHJcbiAgICAgIHJldHVybiBfbGlzdElkO1xyXG4gICAgfSxcclxuICAgIHNldCBsaXN0SWQobGlzdElkKSB7XHJcbiAgICAgIF9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gX2lkO1xyXG4gICAgfSxcclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgcmV0dXJuIF90aXRsZTtcclxuICAgIH0sXHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgX3RpdGxlID0gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH0pO1xyXG4gICAgfSxcclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgcmV0dXJuIF9kZXNjcmlwdGlvbjtcclxuICAgIH0sXHJcbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgX2Rlc2NyaXB0aW9uID0gdmFsaWRhdGVEZXNjcmlwdGlvbih7IGRlc2NyaXB0aW9uIH0pO1xyXG4gICAgfSxcclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICByZXR1cm4gX2R1ZURhdGU7XHJcbiAgICB9LFxyXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICBfZHVlRGF0ZSA9IHZhbGlkYXRlRHVlRGF0ZSh7IGR1ZURhdGUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICByZXR1cm4gX3ByaW9yaXR5O1xyXG4gICAgfSxcclxuICAgIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgICBfcHJpb3JpdHkgPSB2YWxpZGF0ZVByaW9yaXR5KHsgcHJpb3JpdHkgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGNvbXBsZXRlKCkge1xyXG4gICAgICByZXR1cm4gX2NvbXBsZXRlO1xyXG4gICAgfSxcclxuICAgIHNldCBjb21wbGV0ZShjb21wbGV0ZSkge1xyXG4gICAgICBfY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb250ZXh0IH0gZnJvbSAnLi4vZGF0YS9jb250ZXh0JztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2RvU2VydmljZSgpIHtcclxuICBjb25zdCBfY29udGV4dCA9IGNvbnRleHQoKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVG9kbyh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICAgIF9jb250ZXh0LnRvZG9zLmZpbmRBbmRSZXBsYWNlKHQgPT4gdC5pZCA9PT0gdG9kby5pZCwgdG9kbyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gICAgX2NvbnRleHQudG9kb3MuYWRkKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEluYm94VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZE1hbnkodCA9PiB0Lmxpc3RJZCA9PT0gdW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQgfTogeyBsaXN0SWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZE1hbnkodCA9PiB0Lmxpc3RJZCA9PT0gbGlzdElkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9CeUlkKHsgdG9kb0lkIH06IHsgdG9kb0lkOiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIF9jb250ZXh0LnRvZG9zLmZpbmQodCA9PiB0LmlkID09PSB0b2RvSWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kb0J5SWQoeyB0b2RvSWQgfTogeyB0b2RvSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBfY29udGV4dC50b2Rvcy5maW5kQW5kUmVtb3ZlKHQgPT4gdC5pZCA9PT0gdG9kb0lkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUb2RvLFxyXG4gICAgZ2V0SW5ib3hUb2RvcyxcclxuICAgIGdldFRvZG9zQnlMaXN0SWQsXHJcbiAgICB1cGRhdGVUb2RvLFxyXG4gICAgZ2V0VG9kb0J5SWQsXHJcbiAgICBkZWxldGVUb2RvQnlJZCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBDYW5jZWxCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DYW5jZWxCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUlucHV0R3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtSW5wdXRHcm91cCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0R3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtU2VsZWN0R3JvdXAnO1xyXG5pbXBvcnQgRm9ybVRleHRBcmVhR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVGV4dEFyZWFHcm91cCc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFByaW9yaXR5LCBjcmVhdGVUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyBWaWV3UHJvcHMsIG5hdmlnYXRlIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGNhbWVsQ2FzZVRvVGl0bGVDYXNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUYXNrKHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCB7IGxpc3RJZCB9ID0gcHJvcHMucXVlcnlQYXJhbXM7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChBZGRUYXNrRm9ybSgpKTtcclxuXHJcbiAgZnVuY3Rpb24gQWRkVGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5pZCA9IGlkcy5BRERfVEFTS19GT1JNO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ1RpdGxlJyxcclxuICAgICAgaW5wdXRJZDogJ3RpdGxlJyxcclxuICAgICAgaW5wdXROYW1lOiAndGl0bGUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPSBGb3JtVGV4dEFyZWFHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgdGV4dEFyZWFJZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgdGV4dEFyZWFOYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gRm9ybUlucHV0R3JvdXAoe1xyXG4gICAgICBsYWJlbFRleHQ6ICdEdWUgRGF0ZScsXHJcbiAgICAgIGlucHV0SWQ6ICdkdWVEYXRlJyxcclxuICAgICAgaW5wdXROYW1lOiAnZHVlRGF0ZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ2RhdGUnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBGb3JtU2VsZWN0R3JvdXAoe1xyXG4gICAgICBsYWJlbFRleHQ6ICdQcmlvcml0eScsXHJcbiAgICAgIHNlbGVjdElkOiAncHJpb3JpdHknLFxyXG4gICAgICBzZWxlY3ROYW1lOiAncHJpb3JpdHknLFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnU2VsZWN0IGEgcHJpb3JpdHknLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlVGV4dDogJ0xvdycsXHJcbiAgICAgICAgICB2YWx1ZTogJ0xvdycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdNZWRpdW0nLFxyXG4gICAgICAgICAgdmFsdWU6ICdNZWRpdW0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnSGlnaCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ0hpZ2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHRvZG9EYXRhID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIGAke2NhbWVsQ2FzZVRvVGl0bGVDYXNlKHsgc3RyOiBrZXkgfSl9IGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb0RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9ID0gdG9kb0RhdGE7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZUFzRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUgKyAnVDAwOjAwOjAwLjAwMCcpO1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHtcclxuICAgICAgICAgIGxpc3RJZCxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlQXNEYXRlLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IFByaW9yaXR5W3ByaW9yaXR5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHRvZG9TZXJ2aWNlKCk7XHJcbiAgICAgICAgYWRkVG9kbyh7IHRvZG8gfSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gbGlzdElkID8gYC9saXN0cy8ke2xpc3RJZH1gIDogJy8nO1xyXG4gICAgICAgIG5hdmlnYXRlKHJldHVyblVybCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XHJcbiAgICBhZGRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmlld1Byb3BzIH0gZnJvbSAnLi8uLi9yb3V0ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxNeVRhc2tzKHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9ICdBbGwgTXkgVGFza3MnO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrSWNvbih7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIGZpbGwsXHJcbn06IHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGZpbGwpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDE2IDE2YCk7XHJcblxyXG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTAuOTcgNC45N2EuNzUuNzUgMCAwIDEgMS4wNyAxLjA1bC0zLjk5IDQuOTlhLjc1Ljc1IDAgMCAxLTEuMDguMDJMNC4zMjQgOC4zODRhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwyLjA5NCAyLjA5MyAzLjQ3My00LjQyNWEuMjY3LjI2NyAwIDAgMSAuMDItLjAyMnonXHJcbiAgKTtcclxuXHJcbiAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlVG9ZWVlZTU1ERCh7IGRhdGUgfTogeyBkYXRlOiBEYXRlIH0pIHtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrQ2lyY2xlSWNvbih7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIGZpbGwsXHJcbn06IHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGZpbGwpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDE2IDE2YCk7XHJcblxyXG4gIGNvbnN0IGZpcnN0UGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG4gIGZpcnN0UGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTIuNSA4YTUuNSA1LjUgMCAwIDEgOC4yNS00Ljc2NC41LjUgMCAwIDAgLjUtLjg2NkE2LjUgNi41IDAgMSAwIDE0LjUgOGEuNS41IDAgMCAwLTEgMCA1LjUgNS41IDAgMSAxLTExIDB6J1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNlY29uZFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBzZWNvbmRQYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTUuMzU0IDMuMzU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDggOS4yOTMgNS4zNTQgNi42NDZhLjUuNSAwIDEgMC0uNzA4LjcwOGwzIDNhLjUuNSAwIDAgMCAuNzA4IDBsNy03eidcclxuICApO1xyXG5cclxuICBzdmcuYXBwZW5kQ2hpbGQoZmlyc3RQYXRoKTtcclxuICBzdmcuYXBwZW5kQ2hpbGQoc2Vjb25kUGF0aCk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgUHJpb3JpdHksIFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZVRvWVlZWU1NREQgfSBmcm9tICcuLi91dGlscy9kYXRlcyc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBDaGVja21hcmtDaXJjbGVJY29uIGZyb20gJy4vQ2hlY2ttYXJrQ2lyY2xlSWNvbic7XHJcbmltcG9ydCBGb3JtVGV4dEFyZWFHcm91cCBmcm9tICcuL0Zvcm1UZXh0QXJlYUdyb3VwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9EZXRhaWxzKHsgdG9kbyB9OiB7IHRvZG8/OiBUb2RvIH0pIHtcclxuICBpZiAodG9kbyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gUGxhY2Vob2xkZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5pZCA9IGlkcy5UT0RPX0NBUkRfREVUQUlMUztcclxuICBjb250YWluZXIuZGF0YXNldC50b2RvSWQgPSB0b2RvPy5pZDtcclxuXHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IHRvZG8uY29tcGxldGUgPT09IHRydWUgPyAnNTAlJyA6ICcnO1xyXG5cclxuICBjb25zdCBicmVhZGNydW1iQ29udGFpbmVyID0gQnJlYWRjcnVtYkNvbnRhaW5lcih7IHRvZG8gfSk7XHJcbiAgY29uc3QgZm9ybSA9IEZvcm0oeyB0b2RvIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJlYWRjcnVtYkNvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKCkge1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwbGFjZUhvbGRlci5pbm5lclRleHQgPSAnV2hhdCBkbyB5b3Ugd2FudCB0byBnZXQgZG9uZT8nO1xyXG5cclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIENoZWNrbWFya0NpcmNsZUljb24oeyBoZWlnaHQ6IDQwLCB3aWR0aDogNDAsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgKTtcclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XHJcblxyXG4gIHJldHVybiBwbGFjZWhvbGRlckNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gQnJlYWRjcnVtYkNvbnRhaW5lcih7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBsaXN0ID0gbGlzdFNlcnZpY2UoKS5nZXRMaXN0QnlJZCh7IGlkOiB0b2RvLmxpc3RJZCB9KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgcGFkZGluZzogJzAgMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnJlYWRjcnVtYkxpbmsgPSBMaW5rKHtcclxuICAgIGxpbmtUZXh0OiBgTXkgTGlzdHMgPiAke2xpc3QgPyBsaXN0Lm5hbWUudG9VcHBlckNhc2UoKSA6ICdJTkJPWCd9YCxcclxuICAgIGhyZWY6IGxpc3QgPyBgL2xpc3RzLyR7bGlzdC5pZH0/dG9kb0lkPSR7dG9kby5pZH1gIDogYC8/dG9kb0lkPSR7dG9kby5pZH1gLFxyXG4gICAgc3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpbmtNb3VzZU92ZXIoKSB7XHJcbiAgICBicmVhZGNydW1iTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlua01vdXNlT3V0KCkge1xyXG4gICAgYnJlYWRjcnVtYkxpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcclxuICB9XHJcblxyXG4gIGJyZWFkY3J1bWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUxpbmtNb3VzZU92ZXIpO1xyXG4gIGJyZWFkY3J1bWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlTGlua01vdXNlT3V0KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJyZWFkY3J1bWJMaW5rKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gRm9ybSh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGZvcm0uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBUaXRsZUlucHV0KHsgdG9kbyB9KTtcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBEdWVEYXRlSW5wdXQoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gUHJpb3JpdHlTZWxlY3QoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXAgPSBEZXNjcmlwdGlvblRleHRBcmVhKHsgdG9kbyB9KTtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IEV2ZW50KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XHJcblxyXG4gIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXRsZUlucHV0KHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xyXG4gIHRpdGxlSW5wdXQudGl0bGUgPSAnVGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xyXG4gIHRpdGxlSW5wdXQuZGlzYWJsZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG4gIHRpdGxlSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmb250U2l6ZTogJzEuNXJlbScsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgdG9kby50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9VcGRhdGVkJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0aXRsZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmIyYTJhJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICB0aXRsZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICB9XHJcblxyXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xyXG5cclxuICByZXR1cm4gdGl0bGVJbnB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gRHVlRGF0ZUlucHV0KHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIC8vIHN0eWxlcyBmb3IgcHNldWRvIGVsZW1lbnRzIGluIGluZGV4LmNzc1xyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZURhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdERhdGVUb1lZWVlNTUREKHsgZGF0ZTogdG9kby5kdWVEYXRlIH0pO1xyXG4gIGR1ZURhdGVJbnB1dC50aXRsZSA9ICdEdWUgRGF0ZSc7XHJcbiAgZHVlRGF0ZUlucHV0LmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuICBkdWVEYXRlSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDAuNXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8uZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVJbnB1dC52YWx1ZSArICdUMDA6MDA6MDAuMDAwJyk7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBkdWVEYXRlSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIGR1ZURhdGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuICByZXR1cm4gZHVlRGF0ZUlucHV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcmlvcml0eVNlbGVjdCh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBmdW5jdGlvbiBnZXRTZWxlY3RCYWNrZ3JvdW5kKCkge1xyXG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFByaW9yaXR5LkhpZ2gpIHtcclxuICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBQcmlvcml0eS5NZWRpdW0pIHtcclxuICAgICAgcmV0dXJuICd5ZWxsb3cnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnZ3JlZW4nO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0Q29sb3IoKSB7XHJcbiAgICByZXR1cm4gdG9kby5wcmlvcml0eSA9PT0gUHJpb3JpdHkuTWVkaXVtID8gJ2JsYWNrJyA6ICcjZmZmZmZmJztcclxuICB9XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xyXG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gIHByaW9yaXR5U2VsZWN0LnRpdGxlID0gJ1ByaW9yaXR5JztcclxuICBwcmlvcml0eVNlbGVjdC5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcbiAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgd2lkdGg6ICdtaW4tY29udGVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldFNlbGVjdEJhY2tncm91bmQoKSxcclxuICAgIGNvbG9yOiBnZXRTZWxlY3RDb2xvcigpLFxyXG4gICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLm1hcChvID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gbztcclxuICAgIG9wdGlvbi50ZXh0ID0gbztcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IG8gPT09IHRvZG8ucHJpb3JpdHk7XHJcbiAgICBvcHRpb24uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIHRvZG8ucHJpb3JpdHkgPSBQcmlvcml0eVtwcmlvcml0eVNlbGVjdC52YWx1ZV07XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0U2VsZWN0QmFja2dyb3VuZCgpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuY29sb3IgPSBnZXRTZWxlY3RDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAwcHggNHB4ICMyYjJhMmEnO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUudHJhbnNpdGlvbiA9ICdib3gtc2hhZG93IDAuM3MgZWFzZSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuYm94U2hhZG93ID0gJyc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcmlvcml0eVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xyXG4gIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xyXG4gIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyKTtcclxuXHJcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKC4uLnByaW9yaXR5T3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBwcmlvcml0eVNlbGVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVzY3JpcHRpb25UZXh0QXJlYSh7IHRvZG8gfTogeyB0b2RvOiBUb2RvIH0pIHtcclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwID0gRm9ybVRleHRBcmVhR3JvdXAoe1xyXG4gICAgY29udGFpbmVyU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBnYXA6ICcwLjI1cmVtJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9KSxcclxuICAgIGxhYmVsVGV4dDogJ0Rlc2NyaXB0aW9uJyxcclxuICAgIGxhYmVsU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBwYWRkaW5nOiAnMCAwLjVyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSksXHJcbiAgICB0ZXh0QXJlYUlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdGV4dEFyZWFOYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdGV4dEFyZWFWYWx1ZTogdG9kby5kZXNjcmlwdGlvbixcclxuICAgIHRleHRBcmVhU3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBwYWRkaW5nOiAnMC41cmVtIDAuNXJlbScsXHJcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRleHRBcmVhID0gZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG4gIHRleHRBcmVhLmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IHRleHRBcmVhLnZhbHVlO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGV4dEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIHRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICB9XHJcblxyXG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFzaENhbkljb24oe1xyXG4gIHdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBmaWxsLFxyXG59OiB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBmaWxsOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAxNiAxNmApO1xyXG5cclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTExIDEuNXYxaDMuNWEuNS41IDAgMCAxIDAgMWgtLjUzOGwtLjg1MyAxMC42NkEyIDIgMCAwIDEgMTEuMTE1IDE2aC02LjIzYTIgMiAwIDAgMS0xLjk5NC0xLjg0TDIuMDM4IDMuNUgxLjVhLjUuNSAwIDAgMSAwLTFINXYtMUExLjUgMS41IDAgMCAxIDYuNSAwaDNBMS41IDEuNSAwIDAgMSAxMSAxLjVabS01IDB2MWg0di0xYS41LjUgMCAwIDAtLjUtLjVoLTNhLjUuNSAwIDAgMC0uNS41Wk00LjUgNS4wMjlsLjUgOC41YS41LjUgMCAxIDAgLjk5OC0uMDZsLS41LTguNWEuNS41IDAgMSAwLS45OTguMDZabTYuNTMtLjUyOGEuNS41IDAgMCAwLS41MjguNDdsLS41IDguNWEuNS41IDAgMCAwIC45OTguMDU4bC41LTguNWEuNS41IDAgMCAwLS40Ny0uNTI4Wk04IDQuNWEuNS41IDAgMCAwLS41LjV2OC41YS41LjUgMCAwIDAgMSAwVjVhLjUuNSAwIDAgMC0uNS0uNVonXHJcbiAgKTtcclxuXHJcbiAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcbiIsImltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgQ2hlY2ttYXJrSWNvbiBmcm9tICcuL0NoZWNrbWFya0ljb24nO1xyXG5pbXBvcnQgVG9kb0RldGFpbHMgZnJvbSAnLi9Ub2RvRGV0YWlscyc7XHJcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSAnLi9UcmFzaENhbkljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENhcmRUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvblRleHQoKSB7XHJcbiAgICByZXR1cm4gdG9kby5jb21wbGV0ZVxyXG4gICAgICA/IENoZWNrbWFya0ljb24oeyB3aWR0aDogNDAsIGhlaWdodDogNDAsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb21wbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChCdXR0b25UZXh0KCkpO1xyXG4gIGNvbXBsZXRlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICBjb21wbGV0ZUJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMXJlbScsXHJcbiAgICBhc3BlY3RSYXRpbzogJzEnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmZmZmJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIFNwYW5TdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uY29tcGxldGUgPyAnbGluZS10aHJvdWdoJyA6ICcnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICBzcGFuLnN0eWxlLmNzc1RleHQgPSBTcGFuU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChcclxuICAgIFRyYXNoQ2FuSWNvbih7IGhlaWdodDogMTYsIHdpZHRoOiAxNiwgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcclxuICApO1xyXG4gIGRlbGV0ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgZGVsZXRlQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6ICcxcmVtJyxcclxuICAgIGFzcGVjdFJhdGlvOiAnMScsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgaWYgKHRvZG8uY29tcGxldGUpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29tcGxldGVCdXR0b25DbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRvZG8uY29tcGxldGUgPSAhdG9kby5jb21wbGV0ZTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9kb1VwZGF0ZWQnKSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0NhcmREZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlRPRE9fQ0FSRF9ERVRBSUxTKTtcclxuXHJcbiAgICBpZiAodG9kb0NhcmREZXRhaWxzLmRhdGFzZXQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUb2RvSWQgPSB0b2RvQ2FyZERldGFpbHMuZGF0YXNldC50b2RvSWQ7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUb2RvSWQgIT09IHRvZG8uaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9DYXJkID0gdG9kb0NhcmREZXRhaWxzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0b2RvQ2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKFRvZG9EZXRhaWxzKHsgdG9kbyB9KSk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNvbXBsZXRlQnV0dG9uQ2xpY2spO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25DbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRvZG9TZXJ2aWNlKCkuZGVsZXRlVG9kb0J5SWQoeyB0b2RvSWQ6IHRvZG8uaWQgfSk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9kb1VwZGF0ZWQnKSk7XHJcbiAgICBjb25zdCB0b2RvQ2FyZERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHMuVE9ET19DQVJEX0RFVEFJTFMpO1xyXG5cclxuICAgIGlmICh0b2RvQ2FyZERldGFpbHMuZGF0YXNldCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRvZG9JZCA9IHRvZG9DYXJkRGV0YWlscy5kYXRhc2V0LnRvZG9JZDtcclxuXHJcbiAgICBpZiAoY3VycmVudFRvZG9JZCAhPT0gdG9kby5pZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kb0NhcmQgPSB0b2RvQ2FyZERldGFpbHMucGFyZW50RWxlbWVudDtcclxuICAgIHRvZG9DYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoVG9kb0RldGFpbHMoe30pKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA5M2U5NzAnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoKSB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVDb250YWluZXJNb3VzZU91dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpc3RDYXJkVG9kbyBmcm9tICcuL0xpc3RDYXJkVG9kbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Q2FyZCh7XHJcbiAgbGlzdElkLFxyXG4gIHRvZG9JZCxcclxufToge1xyXG4gIGxpc3RJZDogc3RyaW5nO1xyXG4gIHRvZG9JZD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHRvZG9zID0gdG9kb1NlcnZpY2UoKS5nZXRUb2Rvc0J5TGlzdElkKHsgbGlzdElkIH0pO1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgIGZsZXg6ICcxJyxcclxuICB9KTtcclxuXHJcbiAgaWYgKHRvZG9zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxhY2VIb2xkZXIuaW5uZXJUZXh0ID0gJ0xvb2tzIGxpa2UgeW91IGdvdCBpdCBhbGwgZG9uZSEg8J+OiSc7XHJcbiAgICBwbGFjZUhvbGRlci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGxpc3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzAuMjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBsaXN0LmFwcGVuZCguLi5Ub2RvTGlzdEl0ZW1zKHsgbGlzdElkLCB0b2RvSWQgfSkpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaXN0Q2xpY2soZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgY29uc3QgdGFyZ2V0VG9kbyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgaWYgKHRhcmdldFRvZG8gPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gWy4uLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKV07XHJcblxyXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XHJcbiAgICAgIGlmICh0b2RvLmlkICE9PSB0YXJnZXRUb2RvLmlkKSB7XHJcbiAgICAgICAgdG9kby5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgndG9kb0lkJywgdG9kby5pZCk7XHJcbiAgICAgIHRvZG8uc3R5bGUuY3NzVGV4dCA9IGhpZ2hsaWdodGVkSXRlbVN0eWxlcygpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b2RvVXBkYXRlZCcsIGhhbmRsZVRvZG9VcGRhdGUpO1xyXG4gICAgICBuYXZpZ2F0ZSh1cmwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTGlzdENsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG9kb1VwZGF0ZSgpIHtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsaXN0LmFwcGVuZCguLi5Ub2RvTGlzdEl0ZW1zKHsgbGlzdElkLCB0b2RvSWQgfSkpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9kb1VwZGF0ZWQnLCBoYW5kbGVUb2RvVXBkYXRlKTtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvZG9MaXN0SXRlbXMoe1xyXG4gIGxpc3RJZCxcclxuICB0b2RvSWQsXHJcbn06IHtcclxuICBsaXN0SWQ6IHN0cmluZztcclxuICB0b2RvSWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCB0b2RvcyA9IHRvZG9TZXJ2aWNlKCkuZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9KTtcclxuICByZXR1cm4gdG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKExpc3RDYXJkVG9kbyh7IHRvZG8gfSkpO1xyXG4gICAgaXRlbS5pZCA9IHRvZG8uaWQ7XHJcblxyXG4gICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICBpdGVtLnN0eWxlLmNzc1RleHQgPSBoaWdobGlnaHRlZEl0ZW1TdHlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0ZWRJdGVtU3R5bGVzKCkge1xyXG4gIHJldHVybiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCA0cHggMHB4ICMwMDkzZTknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RIZWFkaW5nKHtcclxuICBoZWFkaW5nVGV4dCxcclxuICBsaXN0SWQsXHJcbn06IHtcclxuICBoZWFkaW5nVGV4dDogc3RyaW5nO1xyXG4gIGxpc3RJZD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGdhcDogJzJyZW0nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiAnMXJlbSAxLjI1cmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2lkdGg6ICdtaW4tY29udGVudCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gaGVhZGluZ1RleHQ7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgTGluayh7XHJcbiAgICAgIGxpbmtUZXh0OiAnQWRkIFRhc2snLFxyXG4gICAgICBocmVmOiBsaXN0SWQgPyBgL3Rhc2tzL2FkZD9saXN0SWQ9JHtsaXN0SWR9YCA6ICcvdGFza3MvYWRkJyxcclxuICAgICAgc3R5bGVzOiBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmZmZmJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNDI0MjQyJztcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU91dChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3Zlcik7XHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvQ2FyZCgpIHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcbiIsImltcG9ydCBMaXN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RDYXJkJztcclxuaW1wb3J0IExpc3RIZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEhlYWRpbmcnO1xyXG5pbXBvcnQgVG9kb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvQ2FyZCc7XHJcbmltcG9ydCBUb2RvRGV0YWlscyBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9EZXRhaWxzJztcclxuaW1wb3J0IHsgVmlld1Byb3BzIH0gZnJvbSAnLi4vcm91dGVyJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdERldGFpbChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcHJvcHMucGF0aFBhcmFtcztcclxuICBjb25zdCB7IHRvZG9JZCB9ID0gcHJvcHMucXVlcnlQYXJhbXM7XHJcbiAgY29uc3QgeyBnZXRMaXN0QnlJZCB9ID0gbGlzdFNlcnZpY2UoKTtcclxuICBjb25zdCBsaXN0ID0gZ2V0TGlzdEJ5SWQoeyBpZCB9KTtcclxuICBjb25zdCB7IGdldFRvZG9CeUlkIH0gPSB0b2RvU2VydmljZSgpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzJyZW0nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9KTtcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZ2FwOiAnMXJlbScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9KTtcclxuXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChMaXN0Q2FyZCh7IGxpc3RJZDogbGlzdD8uaWQsIHRvZG9JZCB9KSk7XHJcblxyXG4gIGNvbnN0IHRvZG9DYXJkID0gVG9kb0NhcmQoKTtcclxuICBjb25zdCB0b2RvRGV0YWlscyA9IFRvZG9EZXRhaWxzKHtcclxuICAgIHRvZG86IGdldFRvZG9CeUlkKHsgdG9kb0lkIH0pLFxyXG4gIH0pO1xyXG5cclxuICB0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgTGlzdEhlYWRpbmcoe1xyXG4gICAgICBoZWFkaW5nVGV4dDogbGlzdCA/IGxpc3QubmFtZSA6ICdJbmJveCcsXHJcbiAgICAgIGxpc3RJZDogbGlzdD8uaWQsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmlld1Byb3BzIH0gZnJvbSAnLi4vcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RGF5KHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9ICdNeSBEYXknO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmlld1Byb3BzIH0gZnJvbSAnLi4vcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5leHRXZWVrKHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9ICdOZXh0IDcgRGF5cyc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90Rm91bmQocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ05vdCBGb3VuZCc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJpbXBvcnQgQWRkTGlzdCBmcm9tICcuL3ZpZXdzL0FkZExpc3QnO1xyXG5pbXBvcnQgQWRkVGFzayBmcm9tICcuL3ZpZXdzL0FkZFRhc2snO1xyXG5pbXBvcnQgQWxsTXlUYXNrcyBmcm9tICcuL3ZpZXdzL0FsbE15VGFza3MnO1xyXG5pbXBvcnQgTGlzdERldGFpbCBmcm9tICcuL3ZpZXdzL0xpc3REZXRhaWwnO1xyXG5pbXBvcnQgTXlEYXkgZnJvbSAnLi92aWV3cy9NeURheSc7XHJcbmltcG9ydCBOZXh0V2VlayBmcm9tICcuL3ZpZXdzL05leHRXZWVrJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vdmlld3MvTm90Rm91bmQnO1xyXG5cclxuZXhwb3J0IHR5cGUgVmlld1Byb3BzID0ge1xyXG4gIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcGF0aFBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBxdWVyeVBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufTtcclxuXHJcbnR5cGUgUm91dGUgPSB7XHJcbiAgcXVlcnk/OiBzdHJpbmc7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIHZpZXc6IChwcm9wczogVmlld1Byb3BzKSA9PiB2b2lkO1xyXG59O1xyXG5cclxudHlwZSBNYXRjaCA9IHtcclxuICByb3V0ZTogUm91dGU7XHJcbiAgcmVzdWx0OiBSZWdFeHBNYXRjaEFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlcigpIHtcclxuICBjb25zdCByb3V0ZXM6IFJvdXRlW10gPSBbXHJcbiAgICB7IHBhdGg6ICcvJywgdmlldzogTGlzdERldGFpbCB9LFxyXG4gICAgeyBwYXRoOiAnL215LWRheScsIHZpZXc6IE15RGF5IH0sXHJcbiAgICB7IHBhdGg6ICcvbmV4dC1zZXZlbi1kYXlzJywgdmlldzogTmV4dFdlZWsgfSxcclxuICAgIHsgcGF0aDogJy90YXNrcycsIHZpZXc6IEFsbE15VGFza3MgfSxcclxuICAgIHsgcGF0aDogJy90YXNrcy9hZGQnLCB2aWV3OiBBZGRUYXNrIH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvYWRkJywgdmlldzogQWRkTGlzdCB9LFxyXG4gICAgeyBwYXRoOiAnL2xpc3RzLzppZCcsIHZpZXc6IExpc3REZXRhaWwgfSxcclxuICBdLm1hcChyb3V0ZSA9PiB7XHJcbiAgICByb3V0ZS5wYXRoID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgcm91dGUucGF0aDtcclxuICAgIHJldHVybiByb3V0ZTtcclxuICB9KTtcclxuXHJcbiAgLy8gbWF0Y2ggcGF0aCBmcm9tIGJlZ2lubmluZyB0byBlbmRcclxuICAvLyBlc2NhcGUgZm9yd2FyZCBzbGFzaGVzXHJcbiAgLy8gcmVwbGFjZSBwYXRoIHBsYWNlaG9sZGVyc1xyXG4gIC8vIHdpdGggY2FwdHVyZSBncm91cHNcclxuICBjb25zdCBtYXRjaGVzOiBNYXRjaFtdID0gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgcm91dGUsXHJcbiAgICByZXN1bHQ6IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKFxyXG4gICAgICBuZXcgUmVnRXhwKFxyXG4gICAgICAgICdeJyArIHJvdXRlLnBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzpcXHcrL2csICcoLispJykgKyAnJCdcclxuICAgICAgKVxyXG4gICAgKSxcclxuICB9KSk7XHJcblxyXG4gIGxldCBtYXRjaCA9IG1hdGNoZXMuZmluZChtYXRjaCA9PiBtYXRjaC5yZXN1bHQgIT09IG51bGwpO1xyXG5cclxuICBpZiAobWF0Y2ggPT09IG51bGwgfHwgbWF0Y2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF0Y2ggPSB7XHJcbiAgICAgIHJvdXRlOiB7XHJcbiAgICAgICAgcXVlcnk6IGxvY2F0aW9uLnNlYXJjaCxcclxuICAgICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICB2aWV3OiBOb3RGb3VuZCxcclxuICAgICAgfSxcclxuICAgICAgcmVzdWx0OiBbbG9jYXRpb24ucGF0aG5hbWVdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG1hdGNoLnJvdXRlLnF1ZXJ5ID0gbG9jYXRpb24uc2VhcmNoO1xyXG5cclxuICBjb25zdCBwYXRoUGFyYW1zID0gWy4uLm1hdGNoLnJvdXRlLnBhdGgubWF0Y2hBbGwoLzooXFx3KykvZyldXHJcbiAgICAubWFwKHJlc3VsdCA9PiByZXN1bHRbMV0pXHJcbiAgICAucmVkdWNlKFxyXG4gICAgICAocHJldiwgY3VyciwgaSkgPT4gKHsgLi4ucHJldiwgW2N1cnJdOiBtYXRjaC5yZXN1bHQuc2xpY2UoMSlbaV0gfSksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IG1hdGNoLnJvdXRlLnF1ZXJ5Py5zcGxpdCgnPycpWzFdO1xyXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID1cclxuICAgIHF1ZXJ5U3RyaW5nID09PSB1bmRlZmluZWRcclxuICAgICAgPyB7fVxyXG4gICAgICA6IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBjdXJyLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2tleV06IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZS5yZXBsYWNlKC9cXCsvZywgJyAnKSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcclxuICBtYXRjaC5yb3V0ZS52aWV3KHsgcGFyZW50LCBwYXRoUGFyYW1zLCBxdWVyeVBhcmFtcyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKHVybDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdXJsVGV4dCA9IC9eXFwvLy50ZXN0KHVybCkgPyBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyB1cmwgOiB1cmw7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdXJsVGV4dCk7XHJcbiAgcm91dGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0ICcuL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBpZHMgfSBmcm9tICcuL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBuYXZpZ2F0ZSwgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkcy5ST09UKTtcclxucm9vdC5hcHBlbmRDaGlsZChMYXlvdXQoKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCByb3V0ZXIpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICdjbGljaycsXHJcbiAgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcclxuICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldC5jbG9zZXN0KCdhJyk7XHJcbiAgICBpZiAobGluayAhPT0gbnVsbCAmJiBsaW5rLm1hdGNoZXMoJ1tkYXRhLWxpbmtdJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZpZ2F0ZShsaW5rLmhyZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbnJvdXRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=