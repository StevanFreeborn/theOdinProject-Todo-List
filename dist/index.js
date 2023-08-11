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
    return {
        addTodo,
        getInboxTodos,
        getTodosByListId,
        updateTodo,
        getTodoById,
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
    const button = document.createElement('button');
    button.appendChild(ButtonText());
    button.type = 'button';
    button.style.cssText = inlineStyles({
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
    container.appendChild(button);
    container.appendChild(span);
    function toggleTodoStatus() {
        if (todo.complete == false) {
            todo.complete = true;
            button.innerHTML = '';
            button.appendChild(ButtonText());
            span.style.cssText = SpanStyles();
            return;
        }
        todo.complete = false;
        button.innerHTML = '';
        button.appendChild(ButtonText());
        span.style.cssText = SpanStyles();
    }
    function handleButtonClick(e) {
        e.stopPropagation();
        toggleTodoStatus();
        todoService().updateTodo({ todo });
        const todoCardDetails = document.getElementById(ids.TODO_CARD_DETAILS);
        const currentTodoId = todoCardDetails.dataset.todoId;
        if (currentTodoId !== todo.id) {
            return;
        }
        const todoCard = todoCardDetails.parentElement;
        todoCard.innerHTML = '';
        todoCard.appendChild(TodoDetails({ todo }));
    }
    button.addEventListener('click', handleButtonClick);
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
            router_navigate(url.toString());
            todo.style.cssText = highlightedItemStyles();
        }
    }
    list.addEventListener('click', handleListClick);
    function handleTodoUpdate() {
        list.innerHTML = '';
        list.append(...TodoListItems({ listId }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFDUCxDQUFDLENBQWtDLEVBQUUsRUFBRTtJQUNyQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQjtBQUNILENBQUMsQ0FDRixDQUFDO0FBRUYsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29uc3RhbnRzL2VsZW1lbnRzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2RhdGEvY29udGV4dC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc2VydmljZXMvbGlzdFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGluay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9OYXZMaXN0SXRlbS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9NeUxpc3RzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2xheW91dC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DYW5jZWxCdXR0b24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybUlucHV0R3JvdXAudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvaWQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVscy9saXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRMaXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1TZWxlY3RHcm91cC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtVGV4dEFyZWFHcm91cC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kZWxzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL3RvZG9TZXJ2aWNlLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRUYXNrLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BbGxNeVRhc2tzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NoZWNrbWFya0ljb24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL2RhdGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NoZWNrbWFya0NpcmNsZUljb24udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9kb0RldGFpbHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdENhcmRUb2RvLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpc3RDYXJkLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpc3RIZWFkaW5nLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RvZG9DYXJkLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9MaXN0RGV0YWlsLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9NeURheS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTmV4dFdlZWsudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL05vdEZvdW5kLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJFR0lOIFJFU0VUUyAqL1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4vKiBFTkQgUkVTRVRTICovXHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbiNyb290IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQ6Zm9jdXMsXHJcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQ6Zm9jdXMsXHJcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBCRUdJTiBSRVNFVFMgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRU5EIFJFU0VUUyAqL1xcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuI3Jvb3Qge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZDpmb2N1cyxcXHJcXG5pbnB1dCNkdWVEYXRlOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkOmZvY3VzLFxcclxcbmlucHV0I2R1ZURhdGU6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImV4cG9ydCBjb25zdCBpZHMgPSB7XHJcbiAgUk9PVDogJ3Jvb3QnLFxyXG4gIFBSSU1BUllfTkFWX0xJU1Q6ICdwcmltYXJ5TmF2TGlzdCcsXHJcbiAgTVlfTElTVFNfQ09OVEFJTkVSOiAnbXlMaXN0c0NvbnRhaW5lcicsXHJcbiAgTVlfTElTVFM6ICdteUxpc3RzJyxcclxuICBBRERfTElTVF9GT1JNOiAnYWRkTGlzdEZvcm0nLFxyXG4gIEFERF9UQVNLX0ZPUk06ICdhZGRUYXNrRm9ybScsXHJcbiAgVE9ET19DQVJEX0RFVEFJTFM6ICd0b2RvQ2FyZCcsXHJcbn07XHJcbiIsImZ1bmN0aW9uIGNhbWVsVG9LZWJhYihjYW1lbENhc2VTdHJpbmc6IHN0cmluZykge1xyXG4gIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlubGluZVN0eWxlcyhzdHlsZXM6IG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZSgoaW5saW5lU3R5bGVzLCBwcm9wZXJ0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtpbmxpbmVTdHlsZXN9JHtjYW1lbFRvS2ViYWIocHJvcGVydHkpfToke3ZhbHVlfTtgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmxpbmVTdHlsZXM7XHJcbiAgfSwgJycpO1xyXG59XHJcbiIsImltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dCgpIHtcclxuICBjb25zdCBMSVNUU19LRVkgPSAnbGlzdHMnO1xyXG4gIGNvbnN0IFRPRE9TX0tFWSA9ICd0b2Rvcyc7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEl0ZW0oeyBrZXkgfTogeyBrZXk6IHN0cmluZyB9KSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgZnVuY3Rpb24gcmV2aXZlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICBpZiAoa2V5ID09PSAnZHVlRGF0ZScgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpLCByZXZpdmVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEl0ZW0oeyBrZXksIGl0ZW0gfTogeyBrZXk6IHN0cmluZzsgaXRlbTogb2JqZWN0IH0pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IF9saXN0czogTGlzdFtdID0gZ2V0SXRlbSh7IGtleTogTElTVFNfS0VZIH0pO1xyXG4gIGxldCBfdG9kb3M6IFRvZG9bXSA9IGdldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSB9KTtcclxuXHJcbiAgaWYgKF9saXN0cyA9PSBudWxsKSB7XHJcbiAgICBzZXRJdGVtKHsga2V5OiBMSVNUU19LRVksIGl0ZW06IFtdIH0pO1xyXG4gICAgX2xpc3RzID0gZ2V0SXRlbSh7IGtleTogTElTVFNfS0VZIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKF90b2RvcyA9PSBudWxsKSB7XHJcbiAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IFtdIH0pO1xyXG4gICAgX3RvZG9zID0gZ2V0SXRlbSh7IGtleTogVE9ET1NfS0VZIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBsaXN0cygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6ICh7IGxpc3QgfTogeyBsaXN0OiBMaXN0IH0pID0+IHtcclxuICAgICAgICAgIF9saXN0cy5wdXNoKGxpc3QpO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogTElTVFNfS0VZLCBpdGVtOiBfbGlzdHMgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kT25lOiAocHJlZGljYXRlOiAobGlzdDogTGlzdCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF9saXN0cy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kTWFueTogKHByZWRpY2F0ZTogKGxpc3Q6IExpc3QpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfbGlzdHMuZmlsdGVyKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBnZXQgdG9kb3MoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiAoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSA9PiB7XHJcbiAgICAgICAgICBfdG9kb3MucHVzaCh0b2RvKTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogX3RvZG9zIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZDogKHByZWRpY2F0ZTogKHRvZG86IFRvZG8pID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfdG9kb3MuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE1hbnk6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX3RvZG9zLmZpbHRlcihwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZEFuZFJlcGxhY2U6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuLCB0b2RvOiBUb2RvKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IF90b2Rvcy5maW5kSW5kZXgocHJlZGljYXRlKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBfdG9kb3NbaW5kZXhdID0gdG9kbztcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogX3RvZG9zIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGV4dCB9IGZyb20gJy4uL2RhdGEvY29udGV4dCc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdFNlcnZpY2UoKSB7XHJcbiAgY29uc3QgX2NvbnRleHQgPSBjb250ZXh0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZExpc3QoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSB7XHJcbiAgICBjb25zdCBleGlzdGluZ0xpc3QgPSBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5uYW1lID09PSBsaXN0Lm5hbWUpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xpc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQSBsaXN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRleHQubGlzdHMuYWRkKHsgbGlzdCB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldExpc3RCeUlkKHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWxsTGlzdHMoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE1hbnkobCA9PiBsICE9PSBudWxsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRMaXN0LFxyXG4gICAgZ2V0TGlzdEJ5SWQsXHJcbiAgICBnZXRBbGxMaXN0cyxcclxuICB9O1xyXG59XHJcbiIsInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzIH06IExpbmtQcm9wcykge1xyXG4gIC8vIGlmIGhyZWYgaXMgYW4gYWJzb2x1dGUgb25lIGFwcGVuZFxyXG4gIC8vIHRoZSBlbnZzIGJhc2UgcGF0aC5cclxuICBjb25zdCBocmVmVGV4dCA9IC9eXFwvLy50ZXN0KGhyZWYpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgaHJlZiA6IGhyZWY7XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgbGluay50aXRsZSA9IGxpbmtUZXh0O1xyXG4gIGxpbmsuaHJlZiA9IGhyZWZUZXh0O1xyXG4gIGxpbmsuc3R5bGUuY3NzVGV4dCA9IHN0eWxlcztcclxuICBsaW5rLmRhdGFzZXQubGluayA9ICd0cnVlJztcclxuICBsaW5rLnRleHQgPSBsaW5rVGV4dDtcclxuXHJcbiAgcmV0dXJuIGxpbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3RJdGVtKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG59OiB7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBuYXZMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG5hdkl0ZW0uYXBwZW5kQ2hpbGQoTGluayh7IGxpbmtUZXh0LCBocmVmLCBzdHlsZXM6IG5hdkxpbmtTdHlsZXMgfSkpO1xyXG5cclxuICByZXR1cm4gbmF2SXRlbTtcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlMaXN0cygpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBNeUxpc3RDb250YWluZXIoKTtcclxuICBjb250YWluZXIuYXBwZW5kKE15TGlzdFRpdGxlKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoTGlzdCgpKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG5cclxuICBmdW5jdGlvbiBNeUxpc3RDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBteUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15TGlzdENvbnRhaW5lci5pZCA9IGlkcy5NWV9MSVNUU19DT05UQUlORVI7XHJcblxyXG4gICAgcmV0dXJuIG15TGlzdENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE15TGlzdFRpdGxlKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBMaXN0cyc7XHJcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkTGlzdExpbmtTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgTGluayh7XHJcbiAgICAgICAgbGlua1RleHQ6ICcrJyxcclxuICAgICAgICBocmVmOiAnL2xpc3RzL2FkZCcsXHJcbiAgICAgICAgc3R5bGVzOiBhZGRMaXN0TGlua1N0eWxlcyxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBMaXN0KCkge1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyTmF2TGlua0l0ZW1zKCkge1xyXG4gICAgICBjb25zdCB7IGdldEFsbExpc3RzIH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICBjb25zdCBhbGxMaXN0cyA9IGdldEFsbExpc3RzKCk7XHJcbiAgICAgIGNvbnN0IG15TGlzdEl0ZW1zID0gYWxsTGlzdHMubWFwKGxpc3QgPT4gKHtcclxuICAgICAgICBsaW5rVGV4dDogbGlzdC5uYW1lLFxyXG4gICAgICAgIGhyZWY6IGAvbGlzdHMvJHtsaXN0LmlkfWAsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IG15TGlzdEl0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dDogaXRlbS5saW5rVGV4dCwgaHJlZjogaXRlbS5ocmVmIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0LmlkID0gaWRzLk1ZX0xJU1RTO1xyXG4gICAgbGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlck5hdkxpbmtJdGVtcygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpc3RVcGRhdGVkKCkge1xyXG4gICAgICByZW5kZXJOYXZMaW5rSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNeUxpc3RNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTXlMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXN0c1VwZGF0ZWQnLCBoYW5kbGVMaXN0VXBkYXRlZCk7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU15TGlzdE1vdXNlT3Zlcik7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlTXlMaXN0TW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTXlMaXN0cyBmcm9tICcuL015TGlzdHMnO1xyXG5pbXBvcnQgTmF2TGlzdEl0ZW0gZnJvbSAnLi9OYXZMaXN0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xyXG4gIGNvbnN0IHByaW1hcnlOYXZMaW5rSXRlbXMgPSBbXHJcbiAgICB7IGxpbmtUZXh0OiAnSW5ib3gnLCBocmVmOiAnLycgfSxcclxuICAgIHsgbGlua1RleHQ6ICdNeSBEYXknLCBocmVmOiAnL215LWRheScgfSxcclxuICAgIHtcclxuICAgICAgbGlua1RleHQ6ICdOZXh0IDcgRGF5cycsXHJcbiAgICAgIGhyZWY6IGAvbmV4dC1zZXZlbi1kYXlzYCxcclxuICAgIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnQWxsIG15IHRhc2tzJywgaHJlZjogJy90YXNrcycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBhc2lkZSA9IEFzaWRlKCk7XHJcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoTmF2KCkpO1xyXG4gIGFzaWRlLmFwcGVuZENoaWxkKE15TGlzdHMoKSk7XHJcbiAgcmV0dXJuIGFzaWRlO1xyXG5cclxuICBmdW5jdGlvbiBBc2lkZSgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIGFzaWRlLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYXNpZGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtIDByZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2TGlzdCA9IE5hdkxpc3QoKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmF2TGlzdCgpIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2TGlzdC5pZCA9IGlkcy5QUklNQVJZX05BVl9MSVNUO1xyXG4gICAgbmF2TGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJpbWFyeU5hdkxpbmtJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICBOYXZMaXN0SXRlbSh7XHJcbiAgICAgICAgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsXHJcbiAgICAgICAgaHJlZjogaXRlbS5ocmVmLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBuYXZMaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2TGlzdE1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNFOSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU5hdkxpc3RNb3VzZU92ZXIpO1xyXG4gICAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU5hdkxpc3RNb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hdkxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdhcHAnO1xyXG4gIG1haW4uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmbGV4OiAnMScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5M0U5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM4MEQwQzcgMTAwJSknLFxyXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA5M0U5JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTaWRlQmFyKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW5jZWxCdXR0b24oKSB7XHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbENsaWNrKCkge1xyXG4gICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxDbGljayk7XHJcblxyXG4gIHJldHVybiBjYW5jZWxCdXR0b247XHJcbn1cclxuIiwidHlwZSBWYWxpZElucHV0VHlwZXMgPVxyXG4gIHwgJ2J1dHRvbidcclxuICB8ICdjaGVja2JveCdcclxuICB8ICdjb2xvcidcclxuICB8ICdkYXRlJ1xyXG4gIHwgJ2RhdGV0aW1lLWxvY2FsJ1xyXG4gIHwgJ2VtYWlsJ1xyXG4gIHwgJ2ZpbGUnXHJcbiAgfCAnaGlkZGVuJ1xyXG4gIHwgJ2ltYWdlJ1xyXG4gIHwgJ21vbnRoJ1xyXG4gIHwgJ251bWJlcidcclxuICB8ICdwYXNzd29yZCdcclxuICB8ICdyYWRpbydcclxuICB8ICdyYW5nZSdcclxuICB8ICdyZXNldCdcclxuICB8ICdzZWFyY2gnXHJcbiAgfCAnc3VibWl0J1xyXG4gIHwgJ3RlbCdcclxuICB8ICd0ZXh0J1xyXG4gIHwgJ3RpbWUnXHJcbiAgfCAndXJsJ1xyXG4gIHwgJ3dlZWsnO1xyXG5cclxudHlwZSBGb3JtSW5wdXRHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICBpbnB1dElkOiBzdHJpbmc7XHJcbiAgaW5wdXROYW1lOiBzdHJpbmc7XHJcbiAgaW5wdXRUeXBlOiBWYWxpZElucHV0VHlwZXM7XHJcbiAgaW5wdXRTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtSW5wdXRHcm91cChwcm9wczogRm9ybUlucHV0R3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaHRtbEZvciA9IHByb3BzLmlucHV0SWQ7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LmlkID0gcHJvcHMuaW5wdXRJZDtcclxuICBpbnB1dC5uYW1lID0gcHJvcHMuaW5wdXROYW1lO1xyXG4gIGlucHV0LnR5cGUgPSBwcm9wcy5pbnB1dFR5cGU7XHJcbiAgaW5wdXQuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmlucHV0U3R5bGVzO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcclxuICByZXR1cm4gdXVpZCgpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc051bGxPcldoaXRlU3BhY2UoeyBzdHIgfTogeyBzdHI6IHN0cmluZyB9KSB7XHJcbiAgcmV0dXJuICFzdHIgfHwgc3RyLnRyaW0oKSA9PT0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUb1RpdGxlQ2FzZSh7IHN0ciB9OiB7IHN0cjogc3RyaW5nIH0pIHtcclxuICAvLyBhZGQgc3BhY2UgYmVmb3JlIHVwcGVyIGNhc2UgbGV0dGVyc1xyXG4gIC8vIHJlcGxhY2UgZmlyc3QgY2hhcmFjdGVyIHdpdGggdXBwZXIgY2FzZVxyXG4gIHJldHVybiBzdHJcclxuICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIG1hdGNoID0+IGAgJHttYXRjaH1gKVxyXG4gICAgLnJlcGxhY2UoL14uLywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSlcclxuICAgIC50cmltKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZVNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG50eXBlIExpc3RQYXJhbXMgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgTGlzdCA9IHsgaWQ6IHN0cmluZyB9ICYgTGlzdFBhcmFtcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHsgbmFtZSB9OiBMaXN0UGFyYW1zKTogTGlzdCB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyOiBuYW1lIH0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuYW1lLmxlbmd0aCA+IDE1MCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDE1MCBjaGFyYWN0ZXJzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBfaWQgPSBnZW5lcmF0ZUlkKCk7XHJcbiAgbGV0IF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgcmV0dXJuIF9pZDtcclxuICAgIH0sXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIF9uYW1lO1xyXG4gICAgfSxcclxuICAgIHNldCBuYW1lKG5hbWUpIHtcclxuICAgICAgX25hbWUgPSB2YWxpZGF0ZU5hbWUoeyBuYW1lIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBDYW5jZWxCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DYW5jZWxCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUlucHV0R3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcywgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZExpc3QocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChBZGRMaXN0Rm9ybSgpKTtcclxuXHJcbiAgZnVuY3Rpb24gQWRkTGlzdEZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5pZCA9IGlkcy5BRERfTElTVF9GT1JNO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgbGFiZWxUZXh0OiAnTmFtZScsXHJcbiAgICAgIGlucHV0SWQ6ICduYW1lJyxcclxuICAgICAgaW5wdXROYW1lOiAnbmFtZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpKTtcclxuXHJcbiAgICAgIGlmIChuYW1lIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdCh7IG5hbWUgfSk7XHJcbiAgICAgICAgY29uc3QgeyBhZGRMaXN0IH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICAgIGFkZExpc3QoeyBsaXN0IH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsaXN0c1VwZGF0ZWQnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgbmF2aWdhdGUoYC9saXN0cy8ke2xpc3QuaWR9YCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XHJcbiAgICBhZGRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwidHlwZSBPcHRpb24gPSB7XHJcbiAgdmFsdWVUZXh0OiBzdHJpbmc7XHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIEZvcm1TZWxlY3RHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICBzZWxlY3RJZDogc3RyaW5nO1xyXG4gIHNlbGVjdE5hbWU6IHN0cmluZztcclxuICBzZWxlY3RTdHlsZXM/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogT3B0aW9uW107XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtU2VsZWN0R3JvdXAocHJvcHM6IEZvcm1TZWxlY3RHcm91cFByb3BzKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5jb250YWluZXJTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5pbm5lclRleHQgPSBwcm9wcy5sYWJlbFRleHQ7XHJcbiAgbGFiZWwuaHRtbEZvciA9IHByb3BzLnNlbGVjdElkO1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgc2VsZWN0LmlkID0gcHJvcHMuc2VsZWN0SWQ7XHJcbiAgc2VsZWN0Lm5hbWUgPSBwcm9wcy5zZWxlY3ROYW1lO1xyXG4gIHNlbGVjdC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuc2VsZWN0U3R5bGVzO1xyXG5cclxuICBwcm9wcy5vcHRpb25zXHJcbiAgICAubWFwKG8gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLnN0eWxlLmNzc1RleHQgPSBvLnN0eWxlcztcclxuICAgICAgb3B0aW9uLnZhbHVlID0gby52YWx1ZTtcclxuICAgICAgb3B0aW9uLnRleHQgPSBvLnZhbHVlVGV4dDtcclxuICAgICAgb3B0aW9uLmRpc2FibGVkID0gby5kaXNhYmxlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gby5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH0pXHJcbiAgICAuZm9yRWFjaChvID0+IHNlbGVjdC5hcHBlbmRDaGlsZChvKSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwidHlwZSBGb3JtVGV4dEFyZWFHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICB0ZXh0QXJlYUlkOiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFOYW1lOiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFWYWx1ZT86IHN0cmluZztcclxuICB0ZXh0QXJlYVN0eWxlcz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1UZXh0QXJlYUdyb3VwKHByb3BzOiBGb3JtVGV4dEFyZWFHcm91cFByb3BzKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5jb250YWluZXJTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5pbm5lclRleHQgPSBwcm9wcy5sYWJlbFRleHQ7XHJcbiAgbGFiZWwuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmxhYmVsU3R5bGVzO1xyXG5cclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgdGV4dGFyZWEuaWQgPSBwcm9wcy50ZXh0QXJlYUlkO1xyXG4gIHRleHRhcmVhLm5hbWUgPSBwcm9wcy50ZXh0QXJlYUlkO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gcHJvcHMudGV4dEFyZWFWYWx1ZSA/IHByb3BzLnRleHRBcmVhVmFsdWUgOiAnJztcclxuICB0ZXh0YXJlYS5zdHlsZS5jc3NUZXh0ID0gcHJvcHMudGV4dEFyZWFTdHlsZXM7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xyXG5pbXBvcnQgeyBpc051bGxPcldoaXRlU3BhY2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmdzJztcclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICBIaWdoID0gJ0hpZ2gnLFxyXG4gIE1lZGl1bSA9ICdNZWRpdW0nLFxyXG4gIExvdyA9ICdMb3cnLFxyXG59XHJcblxyXG50eXBlIFRvZG9QYXJhbXMgPSB7XHJcbiAgbGlzdElkPzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBkdWVEYXRlOiBEYXRlO1xyXG4gIHByaW9yaXR5OiBQcmlvcml0eTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRvZG8gPSB7IGlkOiBzdHJpbmc7IGNvbXBsZXRlOiBib29sZWFuIH0gJiBUb2RvUGFyYW1zO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oe1xyXG4gIGxpc3RJZCxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBkdWVEYXRlLFxyXG4gIHByaW9yaXR5LFxyXG59OiBUb2RvUGFyYW1zKTogVG9kbyB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH06IHsgdGl0bGU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyOiB0aXRsZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpdGxlLmxlbmd0aCA+IDE1MCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRGVzY3JpcHRpb24oeyBkZXNjcmlwdGlvbiB9OiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAyNTUgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRHVlRGF0ZSh7IGR1ZURhdGUgfTogeyBkdWVEYXRlOiBEYXRlIH0pIHtcclxuICAgIHJldHVybiBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVQcmlvcml0eSh7IHByaW9yaXR5IH06IHsgcHJpb3JpdHk6IHN0cmluZyB9KTogUHJpb3JpdHkge1xyXG4gICAgY29uc3QgcHJpb3JpdHlFbnVtID0gUHJpb3JpdHlbcHJpb3JpdHldO1xyXG5cclxuICAgIGlmIChwcmlvcml0eUVudW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ByaW9yaXR5IG11c3QgYmUgSGlnaCwgTWVkaXVtLCBvciBMb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlFbnVtO1xyXG4gIH1cclxuXHJcbiAgbGV0IF9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfdGl0bGUgPSB2YWxpZGF0ZVRpdGxlKHsgdGl0bGUgfSk7XHJcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IHZhbGlkYXRlRGVzY3JpcHRpb24oeyBkZXNjcmlwdGlvbiB9KTtcclxuICBsZXQgX2R1ZURhdGUgPSB2YWxpZGF0ZUR1ZURhdGUoeyBkdWVEYXRlIH0pO1xyXG4gIGxldCBfcHJpb3JpdHkgPSB2YWxpZGF0ZVByaW9yaXR5KHsgcHJpb3JpdHkgfSk7XHJcbiAgbGV0IF9jb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxpc3RJZCgpIHtcclxuICAgICAgcmV0dXJuIF9saXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0IGxpc3RJZChsaXN0SWQpIHtcclxuICAgICAgX2xpc3RJZCA9IGxpc3RJZDtcclxuICAgIH0sXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gX3RpdGxlO1xyXG4gICAgfSxcclxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xyXG4gICAgICBfdGl0bGUgPSB2YWxpZGF0ZVRpdGxlKHsgdGl0bGUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xyXG4gICAgfSxcclxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICBfZGVzY3JpcHRpb24gPSB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGR1ZURhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfZHVlRGF0ZTtcclxuICAgIH0sXHJcbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgIF9kdWVEYXRlID0gdmFsaWRhdGVEdWVEYXRlKHsgZHVlRGF0ZSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXQgcHJpb3JpdHkoKSB7XHJcbiAgICAgIHJldHVybiBfcHJpb3JpdHk7XHJcbiAgICB9LFxyXG4gICAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgIF9wcmlvcml0eSA9IHZhbGlkYXRlUHJpb3JpdHkoeyBwcmlvcml0eSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXQgY29tcGxldGUoKSB7XHJcbiAgICAgIHJldHVybiBfY29tcGxldGU7XHJcbiAgICB9LFxyXG4gICAgc2V0IGNvbXBsZXRlKGNvbXBsZXRlKSB7XHJcbiAgICAgIF9jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRleHQgfSBmcm9tICcuLi9kYXRhL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9TZXJ2aWNlKCkge1xyXG4gIGNvbnN0IF9jb250ZXh0ID0gY29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gICAgX2NvbnRleHQudG9kb3MuZmluZEFuZFJlcGxhY2UodCA9PiB0LmlkID09PSB0b2RvLmlkLCB0b2RvKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgICBfY29udGV4dC50b2Rvcy5hZGQoeyB0b2RvIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0SW5ib3hUb2RvcygpIHtcclxuICAgIHJldHVybiBfY29udGV4dC50b2Rvcy5maW5kTWFueSh0ID0+IHQubGlzdElkID09PSB1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9OiB7IGxpc3RJZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC50b2Rvcy5maW5kTWFueSh0ID0+IHQubGlzdElkID09PSBsaXN0SWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb0J5SWQoeyB0b2RvSWQgfTogeyB0b2RvSWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZCh0ID0+IHQuaWQgPT09IHRvZG9JZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9kbyxcclxuICAgIGdldEluYm94VG9kb3MsXHJcbiAgICBnZXRUb2Rvc0J5TGlzdElkLFxyXG4gICAgdXBkYXRlVG9kbyxcclxuICAgIGdldFRvZG9CeUlkLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhbmNlbEJ1dHRvbic7XHJcbmltcG9ydCBGb3JtSW5wdXRHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1JbnB1dEdyb3VwJztcclxuaW1wb3J0IEZvcm1TZWxlY3RHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1TZWxlY3RHcm91cCc7XHJcbmltcG9ydCBGb3JtVGV4dEFyZWFHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1UZXh0QXJlYUdyb3VwJztcclxuaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgUHJpb3JpdHksIGNyZWF0ZVRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcywgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgY2FtZWxDYXNlVG9UaXRsZUNhc2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmdzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRhc2socHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IHsgbGlzdElkIH0gPSBwcm9wcy5xdWVyeVBhcmFtcztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKEFkZFRhc2tGb3JtKCkpO1xyXG5cclxuICBmdW5jdGlvbiBBZGRUYXNrRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gaWRzLkFERF9UQVNLX0ZPUk07XHJcblxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgbGFiZWxUZXh0OiAnVGl0bGUnLFxyXG4gICAgICBpbnB1dElkOiAndGl0bGUnLFxyXG4gICAgICBpbnB1dE5hbWU6ICd0aXRsZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IEZvcm1UZXh0QXJlYUdyb3VwKHtcclxuICAgICAgbGFiZWxUZXh0OiAnRGVzY3JpcHRpb24nLFxyXG4gICAgICB0ZXh0QXJlYUlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICB0ZXh0QXJlYU5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ0R1ZSBEYXRlJyxcclxuICAgICAgaW5wdXRJZDogJ2R1ZURhdGUnLFxyXG4gICAgICBpbnB1dE5hbWU6ICdkdWVEYXRlJyxcclxuICAgICAgaW5wdXRUeXBlOiAnZGF0ZScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IEZvcm1TZWxlY3RHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ1ByaW9yaXR5JyxcclxuICAgICAgc2VsZWN0SWQ6ICdwcmlvcml0eScsXHJcbiAgICAgIHNlbGVjdE5hbWU6ICdwcmlvcml0eScsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdTZWxlY3QgYSBwcmlvcml0eScsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnTG93JyxcclxuICAgICAgICAgIHZhbHVlOiAnTG93JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlVGV4dDogJ01lZGl1bScsXHJcbiAgICAgICAgICB2YWx1ZTogJ01lZGl1bScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdIaWdoJyxcclxuICAgICAgICAgIHZhbHVlOiAnSGlnaCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEJ1dHRvbnMoKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogRXZlbnQgJiB7IHRhcmdldDogSFRNTEZvcm1FbGVtZW50IH0pIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdG9kb0RhdGEgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCkuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgYCR7Y2FtZWxDYXNlVG9UaXRsZUNhc2UoeyBzdHI6IGtleSB9KX0gaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmdgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RvRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0gPSB0b2RvRGF0YTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlQXNEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSArICdUMDA6MDA6MDAuMDAwJyk7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oe1xyXG4gICAgICAgICAgbGlzdElkLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGVBc0RhdGUsXHJcbiAgICAgICAgICBwcmlvcml0eTogUHJpb3JpdHlbcHJpb3JpdHldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdG9kb1NlcnZpY2UoKTtcclxuICAgICAgICBhZGRUb2RvKHsgdG9kbyB9KTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuICAgICAgICBjb25zdCByZXR1cm5VcmwgPSBsaXN0SWQgPyBgL2xpc3RzLyR7bGlzdElkfWAgOiAnLyc7XHJcbiAgICAgICAgbmF2aWdhdGUocmV0dXJuVXJsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBDYW5jZWxCdXR0b24oKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcclxuICAgIGFkZEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLy4uL3JvdXRlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbE15VGFza3MocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ0FsbCBNeSBUYXNrcyc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja21hcmtJY29uKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgZmlsbCxcclxufToge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgZmlsbCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTYgMTZgKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMC45NyA0Ljk3YS43NS43NSAwIDAgMSAxLjA3IDEuMDVsLTMuOTkgNC45OWEuNzUuNzUgMCAwIDEtMS4wOC4wMkw0LjMyNCA4LjM4NGEuNzUuNzUgMCAxIDEgMS4wNi0xLjA2bDIuMDk0IDIuMDkzIDMuNDczLTQuNDI1YS4yNjcuMjY3IDAgMCAxIC4wMi0uMDIyeidcclxuICApO1xyXG5cclxuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVUb1lZWVlNTUREKHsgZGF0ZSB9OiB7IGRhdGU6IERhdGUgfSkge1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja21hcmtDaXJjbGVJY29uKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgZmlsbCxcclxufToge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgZmlsbCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTYgMTZgKTtcclxuXHJcbiAgY29uc3QgZmlyc3RQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcbiAgZmlyc3RQYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMi41IDhhNS41IDUuNSAwIDAgMSA4LjI1LTQuNzY0LjUuNSAwIDAgMCAuNS0uODY2QTYuNSA2LjUgMCAxIDAgMTQuNSA4YS41LjUgMCAwIDAtMSAwIDUuNSA1LjUgMCAxIDEtMTEgMHonXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2Vjb25kUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG4gIHNlY29uZFBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xNS4zNTQgMy4zNTRhLjUuNSAwIDAgMC0uNzA4LS43MDhMOCA5LjI5MyA1LjM1NCA2LjY0NmEuNS41IDAgMSAwLS43MDguNzA4bDMgM2EuNS41IDAgMCAwIC43MDggMGw3LTd6J1xyXG4gICk7XHJcblxyXG4gIHN2Zy5hcHBlbmRDaGlsZChmaXJzdFBhdGgpO1xyXG4gIHN2Zy5hcHBlbmRDaGlsZChzZWNvbmRQYXRoKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBQcmlvcml0eSwgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0U2VydmljZSc7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlVG9ZWVlZTU1ERCB9IGZyb20gJy4uL3V0aWxzL2RhdGVzJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IENoZWNrbWFya0NpcmNsZUljb24gZnJvbSAnLi9DaGVja21hcmtDaXJjbGVJY29uJztcclxuaW1wb3J0IEZvcm1UZXh0QXJlYUdyb3VwIGZyb20gJy4vRm9ybVRleHRBcmVhR3JvdXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0RldGFpbHMoeyB0b2RvIH06IHsgdG9kbz86IFRvZG8gfSkge1xyXG4gIGlmICh0b2RvID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBQbGFjZWhvbGRlcigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmlkID0gaWRzLlRPRE9fQ0FSRF9ERVRBSUxTO1xyXG4gIGNvbnRhaW5lci5kYXRhc2V0LnRvZG9JZCA9IHRvZG8/LmlkO1xyXG5cclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gdG9kby5jb21wbGV0ZSA9PT0gdHJ1ZSA/ICc1MCUnIDogJyc7XHJcblxyXG4gIGNvbnN0IGJyZWFkY3J1bWJDb250YWluZXIgPSBCcmVhZGNydW1iQ29udGFpbmVyKHsgdG9kbyB9KTtcclxuICBjb25zdCBmb3JtID0gRm9ybSh7IHRvZG8gfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChicmVhZGNydW1iQ29udGFpbmVyKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxhY2Vob2xkZXIoKSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBnYXA6ICcwLjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBsYWNlSG9sZGVyLmlubmVyVGV4dCA9ICdXaGF0IGRvIHlvdSB3YW50IHRvIGdldCBkb25lPyc7XHJcblxyXG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgQ2hlY2ttYXJrQ2lyY2xlSWNvbih7IGhlaWdodDogNDAsIHdpZHRoOiA0MCwgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcclxuICApO1xyXG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlSG9sZGVyKTtcclxuXHJcbiAgcmV0dXJuIHBsYWNlaG9sZGVyQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCcmVhZGNydW1iQ29udGFpbmVyKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IGxpc3QgPSBsaXN0U2VydmljZSgpLmdldExpc3RCeUlkKHsgaWQ6IHRvZG8ubGlzdElkIH0pO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBwYWRkaW5nOiAnMCAwLjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBicmVhZGNydW1iTGluayA9IExpbmsoe1xyXG4gICAgbGlua1RleHQ6IGBNeSBMaXN0cyA+ICR7bGlzdCA/IGxpc3QubmFtZS50b1VwcGVyQ2FzZSgpIDogJ0lOQk9YJ31gLFxyXG4gICAgaHJlZjogbGlzdCA/IGAvbGlzdHMvJHtsaXN0LmlkfT90b2RvSWQ9JHt0b2RvLmlkfWAgOiBgLz90b2RvSWQ9JHt0b2RvLmlkfWAsXHJcbiAgICBzdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlua01vdXNlT3ZlcigpIHtcclxuICAgIGJyZWFkY3J1bWJMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaW5rTW91c2VPdXQoKSB7XHJcbiAgICBicmVhZGNydW1iTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgYnJlYWRjcnVtYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTGlua01vdXNlT3Zlcik7XHJcbiAgYnJlYWRjcnVtYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVMaW5rTW91c2VPdXQpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJlYWRjcnVtYkxpbmspO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBGb3JtKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgZm9ybS5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICAgIGZsZXg6ICcxJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IFRpdGxlSW5wdXQoeyB0b2RvIH0pO1xyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IER1ZURhdGVJbnB1dCh7IHRvZG8gfSk7XHJcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBQcmlvcml0eVNlbGVjdCh7IHRvZG8gfSk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYUZvcm1Hcm91cCA9IERlc2NyaXB0aW9uVGV4dEFyZWEoeyB0b2RvIH0pO1xyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZTogRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcclxuXHJcbiAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpdGxlSW5wdXQoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XHJcbiAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XHJcbiAgdGl0bGVJbnB1dC50aXRsZSA9ICdUaXRsZSc7XHJcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XHJcbiAgdGl0bGVJbnB1dC5kaXNhYmxlZCA9IHRvZG8uY29tcGxldGU7XHJcbiAgdGl0bGVJbnB1dC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZvbnRTaXplOiAnMS41cmVtJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAwLjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICB0b2RvLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9kb1VwZGF0ZWQnKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHRpdGxlSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyYjJhMmEnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIHRpdGxlSW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xyXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcblxyXG4gIHJldHVybiB0aXRsZUlucHV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBEdWVEYXRlSW5wdXQoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgLy8gc3R5bGVzIGZvciBwc2V1ZG8gZWxlbWVudHMgaW4gaW5kZXguY3NzXHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XHJcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0RGF0ZVRvWVlZWU1NREQoeyBkYXRlOiB0b2RvLmR1ZURhdGUgfSk7XHJcbiAgZHVlRGF0ZUlucHV0LnRpdGxlID0gJ0R1ZSBEYXRlJztcclxuICBkdWVEYXRlSW5wdXQuZGlzYWJsZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG4gIGR1ZURhdGVJbnB1dC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgdG9kby5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZUlucHV0LnZhbHVlICsgJ1QwMDowMDowMC4wMDAnKTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIGR1ZURhdGVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICB9XHJcblxyXG4gIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xyXG4gIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xyXG4gIHJldHVybiBkdWVEYXRlSW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByaW9yaXR5U2VsZWN0KHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdEJhY2tncm91bmQoKSB7XHJcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gUHJpb3JpdHkuSGlnaCkge1xyXG4gICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFByaW9yaXR5Lk1lZGl1bSkge1xyXG4gICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICdncmVlbic7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTZWxlY3RDb2xvcigpIHtcclxuICAgIHJldHVybiB0b2RvLnByaW9yaXR5ID09PSBQcmlvcml0eS5NZWRpdW0gPyAnYmxhY2snIDogJyNmZmZmZmYnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eSc7XHJcbiAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgcHJpb3JpdHlTZWxlY3QudGl0bGUgPSAnUHJpb3JpdHknO1xyXG4gIHByaW9yaXR5U2VsZWN0LmRpc2FibGVkID0gdG9kby5jb21wbGV0ZTtcclxuICBwcmlvcml0eVNlbGVjdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIG1hcmdpbkxlZnQ6ICcwLjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0nLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB3aWR0aDogJ21pbi1jb250ZW50JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ2V0U2VsZWN0QmFja2dyb3VuZCgpLFxyXG4gICAgY29sb3I6IGdldFNlbGVjdENvbG9yKCksXHJcbiAgICBmb250U2l6ZTogJzAuODVyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ10ubWFwKG8gPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24udmFsdWUgPSBvO1xyXG4gICAgb3B0aW9uLnRleHQgPSBvO1xyXG4gICAgb3B0aW9uLnNlbGVjdGVkID0gbyA9PT0gdG9kby5wcmlvcml0eTtcclxuICAgIG9wdGlvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgdG9kby5wcmlvcml0eSA9IFByaW9yaXR5W3ByaW9yaXR5U2VsZWN0LnZhbHVlXTtcclxuICAgIHRvZG9TZXJ2aWNlKCkudXBkYXRlVG9kbyh7IHRvZG8gfSk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRTZWxlY3RCYWNrZ3JvdW5kKCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5jb2xvciA9IGdldFNlbGVjdENvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmJveFNoYWRvdyA9ICcwcHggMHB4IDBweCA0cHggIzJiMmEyYSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS50cmFuc2l0aW9uID0gJ2JveC1zaGFkb3cgMC4zcyBlYXNlJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnJztcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuICB9XHJcblxyXG4gIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XHJcbiAgcHJpb3JpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XHJcbiAgcHJpb3JpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUJsdXIpO1xyXG5cclxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmQoLi4ucHJpb3JpdHlPcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIHByaW9yaXR5U2VsZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNjcmlwdGlvblRleHRBcmVhKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWFGb3JtR3JvdXAgPSBGb3JtVGV4dEFyZWFHcm91cCh7XHJcbiAgICBjb250YWluZXJTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGdhcDogJzAuMjVyZW0nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgIH0pLFxyXG4gICAgbGFiZWxUZXh0OiAnRGVzY3JpcHRpb24nLFxyXG4gICAgbGFiZWxTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHBhZGRpbmc6ICcwIDAuNXJlbScsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250U2l6ZTogJzAuODVyZW0nLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9KSxcclxuICAgIHRleHRBcmVhSWQ6ICdkZXNjcmlwdGlvbicsXHJcbiAgICB0ZXh0QXJlYU5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICB0ZXh0QXJlYVZhbHVlOiB0b2RvLmRlc2NyaXB0aW9uLFxyXG4gICAgdGV4dEFyZWFTdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIHBhZGRpbmc6ICcwLjVyZW0gMC41cmVtJyxcclxuICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGV4dEFyZWEgPSBkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcbiAgdGV4dEFyZWEuZGlzYWJsZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gdGV4dEFyZWEudmFsdWU7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0ZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJiMmEyYSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgdGV4dEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcclxuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzKTtcclxuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XHJcblxyXG4gIHJldHVybiBkZXNjcmlwdGlvblRleHRBcmVhRm9ybUdyb3VwO1xyXG59XHJcbiIsImltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IHRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kb1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgQ2hlY2ttYXJrSWNvbiBmcm9tICcuL0NoZWNrbWFya0ljb24nO1xyXG5pbXBvcnQgVG9kb0RldGFpbHMgZnJvbSAnLi9Ub2RvRGV0YWlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Q2FyZFRvZG8oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzAuNXJlbSAxcmVtJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gQnV0dG9uVGV4dCgpIHtcclxuICAgIHJldHVybiB0b2RvLmNvbXBsZXRlXHJcbiAgICAgID8gQ2hlY2ttYXJrSWNvbih7IHdpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcclxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uYXBwZW5kQ2hpbGQoQnV0dG9uVGV4dCgpKTtcclxuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gIGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMXJlbScsXHJcbiAgICBhc3BlY3RSYXRpbzogJzEnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmZmZmJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIFNwYW5TdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uY29tcGxldGUgPyAnbGluZS10aHJvdWdoJyA6ICcnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICBzcGFuLnN0eWxlLmNzc1RleHQgPSBTcGFuU3R5bGVzKCk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVG9kb1N0YXR1cygpIHtcclxuICAgIGlmICh0b2RvLmNvbXBsZXRlID09IGZhbHNlKSB7XHJcbiAgICAgIHRvZG8uY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChCdXR0b25UZXh0KCkpO1xyXG4gICAgICBzcGFuLnN0eWxlLmNzc1RleHQgPSBTcGFuU3R5bGVzKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0b2RvLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoQnV0dG9uVGV4dCgpKTtcclxuICAgIHNwYW4uc3R5bGUuY3NzVGV4dCA9IFNwYW5TdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdG9nZ2xlVG9kb1N0YXR1cygpO1xyXG4gICAgdG9kb1NlcnZpY2UoKS51cGRhdGVUb2RvKHsgdG9kbyB9KTtcclxuXHJcbiAgICBjb25zdCB0b2RvQ2FyZERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHMuVE9ET19DQVJEX0RFVEFJTFMpO1xyXG4gICAgY29uc3QgY3VycmVudFRvZG9JZCA9IHRvZG9DYXJkRGV0YWlscy5kYXRhc2V0LnRvZG9JZDtcclxuXHJcbiAgICBpZiAoY3VycmVudFRvZG9JZCAhPT0gdG9kby5pZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kb0NhcmQgPSB0b2RvQ2FyZERldGFpbHMucGFyZW50RWxlbWVudDtcclxuICAgIHRvZG9DYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoVG9kb0RldGFpbHMoeyB0b2RvIH0pKTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA5M2U5NzAnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoKSB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVDb250YWluZXJNb3VzZU91dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpc3RDYXJkVG9kbyBmcm9tICcuL0xpc3RDYXJkVG9kbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Q2FyZCh7XHJcbiAgbGlzdElkLFxyXG4gIHRvZG9JZCxcclxufToge1xyXG4gIGxpc3RJZDogc3RyaW5nO1xyXG4gIHRvZG9JZD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHRvZG9zID0gdG9kb1NlcnZpY2UoKS5nZXRUb2Rvc0J5TGlzdElkKHsgbGlzdElkIH0pO1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgIGZsZXg6ICcxJyxcclxuICB9KTtcclxuXHJcbiAgaWYgKHRvZG9zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxhY2VIb2xkZXIuaW5uZXJUZXh0ID0gJ0xvb2tzIGxpa2UgeW91IGdvdCBpdCBhbGwgZG9uZSEg8J+OiSc7XHJcbiAgICBwbGFjZUhvbGRlci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGxpc3Quc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzAuMjVyZW0nLFxyXG4gIH0pO1xyXG5cclxuICBsaXN0LmFwcGVuZCguLi5Ub2RvTGlzdEl0ZW1zKHsgbGlzdElkLCB0b2RvSWQgfSkpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMaXN0Q2xpY2soZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgY29uc3QgdGFyZ2V0VG9kbyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgaWYgKHRhcmdldFRvZG8gPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gWy4uLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKV07XHJcblxyXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XHJcbiAgICAgIGlmICh0b2RvLmlkICE9PSB0YXJnZXRUb2RvLmlkKSB7XHJcbiAgICAgICAgdG9kby5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgndG9kb0lkJywgdG9kby5pZCk7XHJcbiAgICAgIG5hdmlnYXRlKHVybC50b1N0cmluZygpKTtcclxuICAgICAgdG9kby5zdHlsZS5jc3NUZXh0ID0gaGlnaGxpZ2h0ZWRJdGVtU3R5bGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTGlzdENsaWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG9kb1VwZGF0ZSgpIHtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsaXN0LmFwcGVuZCguLi5Ub2RvTGlzdEl0ZW1zKHsgbGlzdElkIH0pKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9VcGRhdGVkJywgaGFuZGxlVG9kb1VwZGF0ZSk7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb2RvTGlzdEl0ZW1zKHtcclxuICBsaXN0SWQsXHJcbiAgdG9kb0lkLFxyXG59OiB7XHJcbiAgbGlzdElkOiBzdHJpbmc7XHJcbiAgdG9kb0lkPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgdG9kb3MgPSB0b2RvU2VydmljZSgpLmdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQgfSk7XHJcbiAgcmV0dXJuIHRvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChMaXN0Q2FyZFRvZG8oeyB0b2RvIH0pKTtcclxuICAgIGl0ZW0uaWQgPSB0b2RvLmlkO1xyXG5cclxuICAgIGlmICh0b2RvLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gaGlnaGxpZ2h0ZWRJdGVtU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodGVkSXRlbVN0eWxlcygpIHtcclxuICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggNHB4IDBweCAjMDA5M2U5JyxcclxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuM3MgZWFzZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0SGVhZGluZyh7XHJcbiAgaGVhZGluZ1RleHQsXHJcbiAgbGlzdElkLFxyXG59OiB7XHJcbiAgaGVhZGluZ1RleHQ6IHN0cmluZztcclxuICBsaXN0SWQ/OiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBnYXA6ICcycmVtJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogJzFyZW0gMS4yNXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHdpZHRoOiAnbWluLWNvbnRlbnQnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIExpbmsoe1xyXG4gICAgICBsaW5rVGV4dDogJ0FkZCBUYXNrJyxcclxuICAgICAgaHJlZjogbGlzdElkID8gYC90YXNrcy9hZGQ/bGlzdElkPSR7bGlzdElkfWAgOiAnL3Rhc2tzL2FkZCcsXHJcbiAgICAgIHN0eWxlczogaW5saW5lU3R5bGVzKHtcclxuICAgICAgICBwYWRkaW5nOiAnMC4yNXJlbSAxcmVtJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZmZmZicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyNDI0Mic7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0NhcmQoKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxyXG4gICAgZmxleDogJzEnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG4iLCJpbXBvcnQgTGlzdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0Q2FyZCc7XHJcbmltcG9ydCBMaXN0SGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RIZWFkaW5nJztcclxuaW1wb3J0IFRvZG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0NhcmQnO1xyXG5pbXBvcnQgVG9kb0RldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvRGV0YWlscyc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3REZXRhaWwocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHByb3BzLnBhdGhQYXJhbXM7XHJcbiAgY29uc3QgeyB0b2RvSWQgfSA9IHByb3BzLnF1ZXJ5UGFyYW1zO1xyXG4gIGNvbnN0IHsgZ2V0TGlzdEJ5SWQgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgY29uc3QgbGlzdCA9IGdldExpc3RCeUlkKHsgaWQgfSk7XHJcbiAgY29uc3QgeyBnZXRUb2RvQnlJZCB9ID0gdG9kb1NlcnZpY2UoKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcycmVtJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSk7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGdhcDogJzFyZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSk7XHJcblxyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoTGlzdENhcmQoeyBsaXN0SWQ6IGxpc3Q/LmlkLCB0b2RvSWQgfSkpO1xyXG5cclxuICBjb25zdCB0b2RvQ2FyZCA9IFRvZG9DYXJkKCk7XHJcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBUb2RvRGV0YWlscyh7XHJcbiAgICB0b2RvOiBnZXRUb2RvQnlJZCh7IHRvZG9JZCB9KSxcclxuICB9KTtcclxuXHJcbiAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpO1xyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIExpc3RIZWFkaW5nKHtcclxuICAgICAgaGVhZGluZ1RleHQ6IGxpc3QgPyBsaXN0Lm5hbWUgOiAnSW5ib3gnLFxyXG4gICAgICBsaXN0SWQ6IGxpc3Q/LmlkLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeURheShwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnTXkgRGF5JztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXh0V2Vlayhwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnTmV4dCA3IERheXMnO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmlld1Byb3BzIH0gZnJvbSAnLi4vcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdEZvdW5kKHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLmlubmVyVGV4dCA9ICdOb3QgRm91bmQnO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbn1cclxuIiwiaW1wb3J0IEFkZExpc3QgZnJvbSAnLi92aWV3cy9BZGRMaXN0JztcclxuaW1wb3J0IEFkZFRhc2sgZnJvbSAnLi92aWV3cy9BZGRUYXNrJztcclxuaW1wb3J0IEFsbE15VGFza3MgZnJvbSAnLi92aWV3cy9BbGxNeVRhc2tzJztcclxuaW1wb3J0IExpc3REZXRhaWwgZnJvbSAnLi92aWV3cy9MaXN0RGV0YWlsJztcclxuaW1wb3J0IE15RGF5IGZyb20gJy4vdmlld3MvTXlEYXknO1xyXG5pbXBvcnQgTmV4dFdlZWsgZnJvbSAnLi92aWV3cy9OZXh0V2Vlayc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL3ZpZXdzL05vdEZvdW5kJztcclxuXHJcbmV4cG9ydCB0eXBlIFZpZXdQcm9wcyA9IHtcclxuICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHBhdGhQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgcXVlcnlQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn07XHJcblxyXG50eXBlIFJvdXRlID0ge1xyXG4gIHF1ZXJ5Pzogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICB2aWV3OiAocHJvcHM6IFZpZXdQcm9wcykgPT4gdm9pZDtcclxufTtcclxuXHJcbnR5cGUgTWF0Y2ggPSB7XHJcbiAgcm91dGU6IFJvdXRlO1xyXG4gIHJlc3VsdDogUmVnRXhwTWF0Y2hBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVzOiBSb3V0ZVtdID0gW1xyXG4gICAgeyBwYXRoOiAnLycsIHZpZXc6IExpc3REZXRhaWwgfSxcclxuICAgIHsgcGF0aDogJy9teS1kYXknLCB2aWV3OiBNeURheSB9LFxyXG4gICAgeyBwYXRoOiAnL25leHQtc2V2ZW4tZGF5cycsIHZpZXc6IE5leHRXZWVrIH0sXHJcbiAgICB7IHBhdGg6ICcvdGFza3MnLCB2aWV3OiBBbGxNeVRhc2tzIH0sXHJcbiAgICB7IHBhdGg6ICcvdGFza3MvYWRkJywgdmlldzogQWRkVGFzayB9LFxyXG4gICAgeyBwYXRoOiAnL2xpc3RzL2FkZCcsIHZpZXc6IEFkZExpc3QgfSxcclxuICAgIHsgcGF0aDogJy9saXN0cy86aWQnLCB2aWV3OiBMaXN0RGV0YWlsIH0sXHJcbiAgXS5tYXAocm91dGUgPT4ge1xyXG4gICAgcm91dGUucGF0aCA9IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIHJvdXRlLnBhdGg7XHJcbiAgICByZXR1cm4gcm91dGU7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG1hdGNoIHBhdGggZnJvbSBiZWdpbm5pbmcgdG8gZW5kXHJcbiAgLy8gZXNjYXBlIGZvcndhcmQgc2xhc2hlc1xyXG4gIC8vIHJlcGxhY2UgcGF0aCBwbGFjZWhvbGRlcnNcclxuICAvLyB3aXRoIGNhcHR1cmUgZ3JvdXBzXHJcbiAgY29uc3QgbWF0Y2hlczogTWF0Y2hbXSA9IHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgIHJvdXRlLFxyXG4gICAgcmVzdWx0OiBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaChcclxuICAgICAgbmV3IFJlZ0V4cChcclxuICAgICAgICAnXicgKyByb3V0ZS5wYXRoLnJlcGxhY2UoL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC86XFx3Ky9nLCAnKC4rKScpICsgJyQnXHJcbiAgICAgIClcclxuICAgICksXHJcbiAgfSkpO1xyXG5cclxuICBsZXQgbWF0Y2ggPSBtYXRjaGVzLmZpbmQobWF0Y2ggPT4gbWF0Y2gucmVzdWx0ICE9PSBudWxsKTtcclxuXHJcbiAgaWYgKG1hdGNoID09PSBudWxsIHx8IG1hdGNoID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1hdGNoID0ge1xyXG4gICAgICByb3V0ZToge1xyXG4gICAgICAgIHF1ZXJ5OiBsb2NhdGlvbi5zZWFyY2gsXHJcbiAgICAgICAgcGF0aDogbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgdmlldzogTm90Rm91bmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3VsdDogW2xvY2F0aW9uLnBhdGhuYW1lXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBtYXRjaC5yb3V0ZS5xdWVyeSA9IGxvY2F0aW9uLnNlYXJjaDtcclxuXHJcbiAgY29uc3QgcGF0aFBhcmFtcyA9IFsuLi5tYXRjaC5yb3V0ZS5wYXRoLm1hdGNoQWxsKC86KFxcdyspL2cpXVxyXG4gICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0WzFdKVxyXG4gICAgLnJlZHVjZShcclxuICAgICAgKHByZXYsIGN1cnIsIGkpID0+ICh7IC4uLnByZXYsIFtjdXJyXTogbWF0Y2gucmVzdWx0LnNsaWNlKDEpW2ldIH0pLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBtYXRjaC5yb3V0ZS5xdWVyeT8uc3BsaXQoJz8nKVsxXTtcclxuICBjb25zdCBxdWVyeVBhcmFtcyA9XHJcbiAgICBxdWVyeVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8ge31cclxuICAgICAgOiBxdWVyeVN0cmluZy5zcGxpdCgnJicpLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gY3Vyci5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgIFtrZXldOiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICcgJykpLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbWF0Y2gucm91dGUudmlldyh7IHBhcmVudCwgcGF0aFBhcmFtcywgcXVlcnlQYXJhbXMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZSh1cmw6IHN0cmluZykge1xyXG4gIGNvbnN0IHVybFRleHQgPSAvXlxcLy8udGVzdCh1cmwpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgdXJsIDogdXJsO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybFRleHQpO1xyXG4gIHJvdXRlcigpO1xyXG59XHJcbiIsImltcG9ydCAnLi9hc3NldHMvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHsgbmF2aWdhdGUsIHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHMuUk9PVCk7XHJcbnJvb3QuYXBwZW5kQ2hpbGQoTGF5b3V0KCkpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcm91dGVyKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAnY2xpY2snLFxyXG4gIChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBsaW5rID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xyXG4gICAgaWYgKGxpbmsgIT09IG51bGwgJiYgbGluay5tYXRjaGVzKCdbZGF0YS1saW5rXScpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbmF2aWdhdGUobGluay5ocmVmKTtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG5yb3V0ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9