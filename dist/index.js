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
}`, "",{"version":3,"sources":["webpack://./src/assets/index.css"],"names":[],"mappings":"AAEA,iBAAiB;;AAEjB;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA,eAAe;;AAEf;EACE,iCAAiC;AACnC;;AAEA;;;EAGE,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n/* BEGIN RESETS */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\n/* END RESETS */\r\n\r\n* {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  height: 100%;\r\n}"],"sourceRoot":""}]);
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
        return JSON.parse(localStorage.getItem(key));
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
                console.group(todoData);
                const { title, description, dueDate, priority } = todoData;
                const todo = createTodo({
                    listId,
                    title,
                    description,
                    dueDate: new Date(dueDate),
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
    function handleButtonClick() {
        toggleTodoStatus();
        todoService().updateTodo({ todo });
        return;
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


function ListCard({ todos }) {
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
    const items = todos.map(todo => {
        const item = document.createElement('li');
        item.appendChild(ListCardTodo({ todo }));
        item.id = todo.id;
        return item;
    });
    list.append(...items);
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
            document.dispatchEvent(new CustomEvent('todoClick', { detail: { todoId: todo.id } }));
            todo.style.cssText = inlineStyles({
                outline: 'none',
                boxShadow: '0px 0px 4px 0px #0093e9',
                transition: 'box-shadow 0.3s ease',
                borderRadius: '0.5rem',
            });
        }
    }
    list.addEventListener('click', handleListClick);
    card.appendChild(list);
    return card;
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
function TodoDetails({ todo }) {
    if (todo === undefined) {
        return Placeholder();
    }
    // TODO: Build actual details view
    const heading = document.createElement('h1');
    heading.innerText = todo.title;
    return heading;
}

;// CONCATENATED MODULE: ./src/views/ListDetail.ts







function ListDetail(props) {
    const { id } = props.pathParams;
    const { getListById } = listService();
    const list = getListById({ id });
    const { getTodosByListId, getTodoById } = todoService();
    const todos = getTodosByListId({ listId: list === null || list === void 0 ? void 0 : list.id });
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
    cardContainer.appendChild(ListCard({ todos }));
    const todoCard = TodoCard();
    const todoDetails = TodoDetails({});
    todoCard.appendChild(todoDetails);
    cardContainer.appendChild(todoCard);
    function handleTodoClick(e) {
        const { todoId } = e.detail;
        const todo = getTodoById({ todoId });
        todoCard.innerHTML = '';
        todoCard.appendChild(TodoDetails({ todo }));
    }
    document.addEventListener('todoClick', handleTodoClick);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGlzdC8uL3NyYy9hc3NldHMvaW5kZXguY3NzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb25zdGFudHMvZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZGF0YS9jb250ZXh0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zZXJ2aWNlcy9saXN0U2VydmljZS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaW5rLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL05hdkxpc3RJdGVtLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL015TGlzdHMudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbGF5b3V0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NhbmNlbEJ1dHRvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtSW5wdXRHcm91cC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy91dGlscy9pZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3RyaW5ncy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0FkZExpc3QudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVNlbGVjdEdyb3VwLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1UZXh0QXJlYUdyb3VwLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvdG9kby50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc2VydmljZXMvdG9kb1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0FkZFRhc2sudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL0FsbE15VGFza3MudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2ttYXJrSWNvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaXN0Q2FyZFRvZG8udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdENhcmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRpbmcudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9kb0NhcmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2ttYXJrQ2lyY2xlSWNvbi50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ub2RvRGV0YWlscy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTGlzdERldGFpbC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTXlEYXkudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL05leHRXZWVrLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9Ob3RGb3VuZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCRUdJTiBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLyogRU5EIFJFU0VUUyAqL1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG4jcm9vdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEJFR0lOIFJFU0VUUyAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG4jcm9vdCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImV4cG9ydCBjb25zdCBpZHMgPSB7XHJcbiAgUk9PVDogJ3Jvb3QnLFxyXG4gIFBSSU1BUllfTkFWX0xJU1Q6ICdwcmltYXJ5TmF2TGlzdCcsXHJcbiAgTVlfTElTVFNfQ09OVEFJTkVSOiAnbXlMaXN0c0NvbnRhaW5lcicsXHJcbiAgTVlfTElTVFM6ICdteUxpc3RzJyxcclxuICBBRERfTElTVF9GT1JNOiAnYWRkTGlzdEZvcm0nLFxyXG4gIEFERF9UQVNLX0ZPUk06ICdhZGRUYXNrRm9ybScsXHJcbn07XHJcbiIsImZ1bmN0aW9uIGNhbWVsVG9LZWJhYihjYW1lbENhc2VTdHJpbmc6IHN0cmluZykge1xyXG4gIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlubGluZVN0eWxlcyhzdHlsZXM6IG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZSgoaW5saW5lU3R5bGVzLCBwcm9wZXJ0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtpbmxpbmVTdHlsZXN9JHtjYW1lbFRvS2ViYWIocHJvcGVydHkpfToke3ZhbHVlfTtgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmxpbmVTdHlsZXM7XHJcbiAgfSwgJycpO1xyXG59XHJcbiIsImltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dCgpIHtcclxuICBjb25zdCBMSVNUU19LRVkgPSAnbGlzdHMnO1xyXG4gIGNvbnN0IFRPRE9TX0tFWSA9ICd0b2Rvcyc7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEl0ZW0oeyBrZXkgfTogeyBrZXk6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEl0ZW0oeyBrZXksIGl0ZW0gfTogeyBrZXk6IHN0cmluZzsgaXRlbTogb2JqZWN0IH0pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IF9saXN0czogTGlzdFtdID0gZ2V0SXRlbSh7IGtleTogTElTVFNfS0VZIH0pO1xyXG4gIGxldCBfdG9kb3M6IFRvZG9bXSA9IGdldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSB9KTtcclxuXHJcbiAgaWYgKF9saXN0cyA9PSBudWxsKSB7XHJcbiAgICBzZXRJdGVtKHsga2V5OiBMSVNUU19LRVksIGl0ZW06IFtdIH0pO1xyXG4gICAgX2xpc3RzID0gZ2V0SXRlbSh7IGtleTogTElTVFNfS0VZIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKF90b2RvcyA9PSBudWxsKSB7XHJcbiAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IFtdIH0pO1xyXG4gICAgX3RvZG9zID0gZ2V0SXRlbSh7IGtleTogVE9ET1NfS0VZIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBsaXN0cygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6ICh7IGxpc3QgfTogeyBsaXN0OiBMaXN0IH0pID0+IHtcclxuICAgICAgICAgIF9saXN0cy5wdXNoKGxpc3QpO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogTElTVFNfS0VZLCBpdGVtOiBfbGlzdHMgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kT25lOiAocHJlZGljYXRlOiAobGlzdDogTGlzdCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF9saXN0cy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kTWFueTogKHByZWRpY2F0ZTogKGxpc3Q6IExpc3QpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfbGlzdHMuZmlsdGVyKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBnZXQgdG9kb3MoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiAoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSA9PiB7XHJcbiAgICAgICAgICBfdG9kb3MucHVzaCh0b2RvKTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogX3RvZG9zIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZDogKHByZWRpY2F0ZTogKHRvZG86IFRvZG8pID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfdG9kb3MuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE1hbnk6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX3RvZG9zLmZpbHRlcihwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZEFuZFJlcGxhY2U6IChwcmVkaWNhdGU6ICh0b2RvOiBUb2RvKSA9PiBib29sZWFuLCB0b2RvOiBUb2RvKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IF90b2Rvcy5maW5kSW5kZXgocHJlZGljYXRlKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBfdG9kb3NbaW5kZXhdID0gdG9kbztcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSwgaXRlbTogX3RvZG9zIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGV4dCB9IGZyb20gJy4uL2RhdGEvY29udGV4dCc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdFNlcnZpY2UoKSB7XHJcbiAgY29uc3QgX2NvbnRleHQgPSBjb250ZXh0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZExpc3QoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSB7XHJcbiAgICBjb25zdCBleGlzdGluZ0xpc3QgPSBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5uYW1lID09PSBsaXN0Lm5hbWUpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xpc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQSBsaXN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NvbnRleHQubGlzdHMuYWRkKHsgbGlzdCB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldExpc3RCeUlkKHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWxsTGlzdHMoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE1hbnkobCA9PiBsICE9PSBudWxsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRMaXN0LFxyXG4gICAgZ2V0TGlzdEJ5SWQsXHJcbiAgICBnZXRBbGxMaXN0cyxcclxuICB9O1xyXG59XHJcbiIsInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzIH06IExpbmtQcm9wcykge1xyXG4gIC8vIGlmIGhyZWYgaXMgYW4gYWJzb2x1dGUgb25lIGFwcGVuZFxyXG4gIC8vIHRoZSBlbnZzIGJhc2UgcGF0aC5cclxuICBjb25zdCBocmVmVGV4dCA9IC9eXFwvLy50ZXN0KGhyZWYpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgaHJlZiA6IGhyZWY7XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgbGluay50aXRsZSA9IGxpbmtUZXh0O1xyXG4gIGxpbmsuaHJlZiA9IGhyZWZUZXh0O1xyXG4gIGxpbmsuc3R5bGUuY3NzVGV4dCA9IHN0eWxlcztcclxuICBsaW5rLmRhdGFzZXQubGluayA9ICd0cnVlJztcclxuICBsaW5rLnRleHQgPSBsaW5rVGV4dDtcclxuXHJcbiAgcmV0dXJuIGxpbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3RJdGVtKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG59OiB7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBuYXZMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG5hdkl0ZW0uYXBwZW5kQ2hpbGQoTGluayh7IGxpbmtUZXh0LCBocmVmLCBzdHlsZXM6IG5hdkxpbmtTdHlsZXMgfSkpO1xyXG5cclxuICByZXR1cm4gbmF2SXRlbTtcclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlMaXN0cygpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBNeUxpc3RDb250YWluZXIoKTtcclxuICBjb250YWluZXIuYXBwZW5kKE15TGlzdFRpdGxlKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoTGlzdCgpKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG5cclxuICBmdW5jdGlvbiBNeUxpc3RDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBteUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15TGlzdENvbnRhaW5lci5pZCA9IGlkcy5NWV9MSVNUU19DT05UQUlORVI7XHJcblxyXG4gICAgcmV0dXJuIG15TGlzdENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE15TGlzdFRpdGxlKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBMaXN0cyc7XHJcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkTGlzdExpbmtTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgTGluayh7XHJcbiAgICAgICAgbGlua1RleHQ6ICcrJyxcclxuICAgICAgICBocmVmOiAnL2xpc3RzL2FkZCcsXHJcbiAgICAgICAgc3R5bGVzOiBhZGRMaXN0TGlua1N0eWxlcyxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2EnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlQ29udGFpbmVyTW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBMaXN0KCkge1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyTmF2TGlua0l0ZW1zKCkge1xyXG4gICAgICBjb25zdCB7IGdldEFsbExpc3RzIH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICBjb25zdCBhbGxMaXN0cyA9IGdldEFsbExpc3RzKCk7XHJcbiAgICAgIGNvbnN0IG15TGlzdEl0ZW1zID0gYWxsTGlzdHMubWFwKGxpc3QgPT4gKHtcclxuICAgICAgICBsaW5rVGV4dDogbGlzdC5uYW1lLFxyXG4gICAgICAgIGhyZWY6IGAvbGlzdHMvJHtsaXN0LmlkfWAsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IG15TGlzdEl0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dDogaXRlbS5saW5rVGV4dCwgaHJlZjogaXRlbS5ocmVmIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0LmlkID0gaWRzLk1ZX0xJU1RTO1xyXG4gICAgbGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlck5hdkxpbmtJdGVtcygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpc3RVcGRhdGVkKCkge1xyXG4gICAgICByZW5kZXJOYXZMaW5rSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNeUxpc3RNb3VzZU92ZXIoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDkzRTknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTXlMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXN0c1VwZGF0ZWQnLCBoYW5kbGVMaXN0VXBkYXRlZCk7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU15TGlzdE1vdXNlT3Zlcik7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlTXlMaXN0TW91c2VPdXQpO1xyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpZHMgfSBmcm9tICcuLi9jb25zdGFudHMvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTXlMaXN0cyBmcm9tICcuL015TGlzdHMnO1xyXG5pbXBvcnQgTmF2TGlzdEl0ZW0gZnJvbSAnLi9OYXZMaXN0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xyXG4gIGNvbnN0IHByaW1hcnlOYXZMaW5rSXRlbXMgPSBbXHJcbiAgICB7IGxpbmtUZXh0OiAnSW5ib3gnLCBocmVmOiAnLycgfSxcclxuICAgIHsgbGlua1RleHQ6ICdNeSBEYXknLCBocmVmOiAnL215LWRheScgfSxcclxuICAgIHtcclxuICAgICAgbGlua1RleHQ6ICdOZXh0IDcgRGF5cycsXHJcbiAgICAgIGhyZWY6IGAvbmV4dC1zZXZlbi1kYXlzYCxcclxuICAgIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnQWxsIG15IHRhc2tzJywgaHJlZjogJy90YXNrcycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBhc2lkZSA9IEFzaWRlKCk7XHJcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoTmF2KCkpO1xyXG4gIGFzaWRlLmFwcGVuZENoaWxkKE15TGlzdHMoKSk7XHJcbiAgcmV0dXJuIGFzaWRlO1xyXG5cclxuICBmdW5jdGlvbiBBc2lkZSgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIGFzaWRlLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYXNpZGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMXJlbScsXHJcbiAgICAgIHBhZGRpbmc6ICcxcmVtIDByZW0nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2TGlzdCA9IE5hdkxpc3QoKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmF2TGlzdCgpIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2TGlzdC5pZCA9IGlkcy5QUklNQVJZX05BVl9MSVNUO1xyXG4gICAgbmF2TGlzdC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJpbWFyeU5hdkxpbmtJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICBOYXZMaXN0SXRlbSh7XHJcbiAgICAgICAgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsXHJcbiAgICAgICAgaHJlZjogaXRlbS5ocmVmLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBuYXZMaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2TGlzdE1vdXNlT3ZlcihlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwOTNFOSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZMaXN0TW91c2VPdXQoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnYScpKSB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU5hdkxpc3RNb3VzZU92ZXIpO1xyXG4gICAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU5hdkxpc3RNb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hdkxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdhcHAnO1xyXG4gIG1haW4uc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmbGV4OiAnMScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5M0U5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM4MEQwQzcgMTAwJSknLFxyXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA5M0U5JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTaWRlQmFyKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW5jZWxCdXR0b24oKSB7XHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbENsaWNrKCkge1xyXG4gICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWxDbGljayk7XHJcblxyXG4gIHJldHVybiBjYW5jZWxCdXR0b247XHJcbn1cclxuIiwidHlwZSBWYWxpZElucHV0VHlwZXMgPVxyXG4gIHwgJ2J1dHRvbidcclxuICB8ICdjaGVja2JveCdcclxuICB8ICdjb2xvcidcclxuICB8ICdkYXRlJ1xyXG4gIHwgJ2RhdGV0aW1lLWxvY2FsJ1xyXG4gIHwgJ2VtYWlsJ1xyXG4gIHwgJ2ZpbGUnXHJcbiAgfCAnaGlkZGVuJ1xyXG4gIHwgJ2ltYWdlJ1xyXG4gIHwgJ21vbnRoJ1xyXG4gIHwgJ251bWJlcidcclxuICB8ICdwYXNzd29yZCdcclxuICB8ICdyYWRpbydcclxuICB8ICdyYW5nZSdcclxuICB8ICdyZXNldCdcclxuICB8ICdzZWFyY2gnXHJcbiAgfCAnc3VibWl0J1xyXG4gIHwgJ3RlbCdcclxuICB8ICd0ZXh0J1xyXG4gIHwgJ3RpbWUnXHJcbiAgfCAndXJsJ1xyXG4gIHwgJ3dlZWsnO1xyXG5cclxudHlwZSBGb3JtSW5wdXRHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICBpbnB1dElkOiBzdHJpbmc7XHJcbiAgaW5wdXROYW1lOiBzdHJpbmc7XHJcbiAgaW5wdXRUeXBlOiBWYWxpZElucHV0VHlwZXM7XHJcbiAgaW5wdXRTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtSW5wdXRHcm91cChwcm9wczogRm9ybUlucHV0R3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaHRtbEZvciA9IHByb3BzLmlucHV0SWQ7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LmlkID0gcHJvcHMuaW5wdXRJZDtcclxuICBpbnB1dC5uYW1lID0gcHJvcHMuaW5wdXROYW1lO1xyXG4gIGlucHV0LnR5cGUgPSBwcm9wcy5pbnB1dFR5cGU7XHJcbiAgaW5wdXQuc3R5bGUuY3NzVGV4dCA9IHByb3BzLmlucHV0U3R5bGVzO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcclxuICByZXR1cm4gdXVpZCgpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc051bGxPcldoaXRlU3BhY2UoeyBzdHIgfTogeyBzdHI6IHN0cmluZyB9KSB7XHJcbiAgcmV0dXJuICFzdHIgfHwgc3RyLnRyaW0oKSA9PT0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUb1RpdGxlQ2FzZSh7IHN0ciB9OiB7IHN0cjogc3RyaW5nIH0pIHtcclxuICAvLyBhZGQgc3BhY2UgYmVmb3JlIHVwcGVyIGNhc2UgbGV0dGVyc1xyXG4gIC8vIHJlcGxhY2UgZmlyc3QgY2hhcmFjdGVyIHdpdGggdXBwZXIgY2FzZVxyXG4gIHJldHVybiBzdHJcclxuICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIG1hdGNoID0+IGAgJHttYXRjaH1gKVxyXG4gICAgLnJlcGxhY2UoL14uLywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSlcclxuICAgIC50cmltKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZVNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5ncyc7XHJcblxyXG50eXBlIExpc3RQYXJhbXMgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgTGlzdCA9IHsgaWQ6IHN0cmluZyB9ICYgTGlzdFBhcmFtcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHsgbmFtZSB9OiBMaXN0UGFyYW1zKTogTGlzdCB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyOiBuYW1lIH0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuYW1lLmxlbmd0aCA+IDE1MCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDE1MCBjaGFyYWN0ZXJzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBfaWQgPSBnZW5lcmF0ZUlkKCk7XHJcbiAgbGV0IF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgcmV0dXJuIF9pZDtcclxuICAgIH0sXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIF9uYW1lO1xyXG4gICAgfSxcclxuICAgIHNldCBuYW1lKG5hbWUpIHtcclxuICAgICAgX25hbWUgPSB2YWxpZGF0ZU5hbWUoeyBuYW1lIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBDYW5jZWxCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DYW5jZWxCdXR0b24nO1xyXG5pbXBvcnQgRm9ybUlucHV0R3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcywgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZExpc3QocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChBZGRMaXN0Rm9ybSgpKTtcclxuXHJcbiAgZnVuY3Rpb24gQWRkTGlzdEZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5pZCA9IGlkcy5BRERfTElTVF9GT1JNO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgbGFiZWxUZXh0OiAnTmFtZScsXHJcbiAgICAgIGlucHV0SWQ6ICduYW1lJyxcclxuICAgICAgaW5wdXROYW1lOiAnbmFtZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdXR0b25zKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpKTtcclxuXHJcbiAgICAgIGlmIChuYW1lIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdCh7IG5hbWUgfSk7XHJcbiAgICAgICAgY29uc3QgeyBhZGRMaXN0IH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICAgIGFkZExpc3QoeyBsaXN0IH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsaXN0c1VwZGF0ZWQnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgbmF2aWdhdGUoYC9saXN0cy8ke2xpc3QuaWR9YCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b25zKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gQ2FuY2VsQnV0dG9uKCk7XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XHJcbiAgICBhZGRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwidHlwZSBPcHRpb24gPSB7XHJcbiAgdmFsdWVUZXh0OiBzdHJpbmc7XHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIEZvcm1TZWxlY3RHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICBzZWxlY3RJZDogc3RyaW5nO1xyXG4gIHNlbGVjdE5hbWU6IHN0cmluZztcclxuICBzZWxlY3RTdHlsZXM/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogT3B0aW9uW107XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtU2VsZWN0R3JvdXAocHJvcHM6IEZvcm1TZWxlY3RHcm91cFByb3BzKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5jb250YWluZXJTdHlsZXM7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5pbm5lclRleHQgPSBwcm9wcy5sYWJlbFRleHQ7XHJcbiAgbGFiZWwuaHRtbEZvciA9IHByb3BzLnNlbGVjdElkO1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgc2VsZWN0LmlkID0gcHJvcHMuc2VsZWN0SWQ7XHJcbiAgc2VsZWN0Lm5hbWUgPSBwcm9wcy5zZWxlY3ROYW1lO1xyXG4gIHNlbGVjdC5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuc2VsZWN0U3R5bGVzO1xyXG5cclxuICBwcm9wcy5vcHRpb25zXHJcbiAgICAubWFwKG8gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLnN0eWxlLmNzc1RleHQgPSBvLnN0eWxlcztcclxuICAgICAgb3B0aW9uLnZhbHVlID0gby52YWx1ZTtcclxuICAgICAgb3B0aW9uLnRleHQgPSBvLnZhbHVlVGV4dDtcclxuICAgICAgb3B0aW9uLmRpc2FibGVkID0gby5kaXNhYmxlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gby5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH0pXHJcbiAgICAuZm9yRWFjaChvID0+IHNlbGVjdC5hcHBlbmRDaGlsZChvKSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwidHlwZSBGb3JtVGV4dEFyZWFHcm91cFByb3BzID0ge1xyXG4gIGNvbnRhaW5lclN0eWxlcz86IHN0cmluZztcclxuICBsYWJlbFRleHQ6IHN0cmluZztcclxuICBsYWJlbFN0eWxlcz86IHN0cmluZztcclxuICB0ZXh0QXJlYUlkOiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFOYW1lOiBzdHJpbmc7XHJcbiAgdGV4dEFyZWFTdHlsZXM/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtVGV4dEFyZWFHcm91cChwcm9wczogRm9ybVRleHRBcmVhR3JvdXBQcm9wcykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gcHJvcHMuY29udGFpbmVyU3R5bGVzO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gcHJvcHMubGFiZWxUZXh0O1xyXG4gIGxhYmVsLnN0eWxlLmNzc1RleHQgPSBwcm9wcy5sYWJlbFN0eWxlcztcclxuXHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIHRleHRhcmVhLmlkID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS5uYW1lID0gcHJvcHMudGV4dEFyZWFJZDtcclxuICB0ZXh0YXJlYS5zdHlsZS5jc3NUZXh0ID0gcHJvcHMudGV4dEFyZWFTdHlsZXM7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xyXG5pbXBvcnQgeyBpc051bGxPcldoaXRlU3BhY2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmdzJztcclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICBIaWdoID0gJ0hpZ2gnLFxyXG4gIE1lZGl1bSA9ICdNZWRpdW0nLFxyXG4gIExvdyA9ICdMb3cnLFxyXG59XHJcblxyXG50eXBlIFRvZG9QYXJhbXMgPSB7XHJcbiAgbGlzdElkPzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBkdWVEYXRlOiBEYXRlO1xyXG4gIHByaW9yaXR5OiBQcmlvcml0eTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRvZG8gPSB7IGlkOiBzdHJpbmc7IGNvbXBsZXRlOiBib29sZWFuIH0gJiBUb2RvUGFyYW1zO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oe1xyXG4gIGxpc3RJZCxcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBkdWVEYXRlLFxyXG4gIHByaW9yaXR5LFxyXG59OiBUb2RvUGFyYW1zKTogVG9kbyB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSh7IHRpdGxlIH06IHsgdGl0bGU6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyOiB0aXRsZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpdGxlLmxlbmd0aCA+IDE1MCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRGVzY3JpcHRpb24oeyBkZXNjcmlwdGlvbiB9OiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAyNTUgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRHVlRGF0ZSh7IGR1ZURhdGUgfTogeyBkdWVEYXRlOiBEYXRlIH0pIHtcclxuICAgIHJldHVybiBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVQcmlvcml0eSh7IHByaW9yaXR5IH06IHsgcHJpb3JpdHk6IHN0cmluZyB9KTogUHJpb3JpdHkge1xyXG4gICAgY29uc3QgcHJpb3JpdHlFbnVtID0gUHJpb3JpdHlbcHJpb3JpdHldO1xyXG5cclxuICAgIGlmIChwcmlvcml0eUVudW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ByaW9yaXR5IG11c3QgYmUgSGlnaCwgTWVkaXVtLCBvciBMb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlFbnVtO1xyXG4gIH1cclxuXHJcbiAgbGV0IF9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfdGl0bGUgPSB2YWxpZGF0ZVRpdGxlKHsgdGl0bGUgfSk7XHJcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IHZhbGlkYXRlRGVzY3JpcHRpb24oeyBkZXNjcmlwdGlvbiB9KTtcclxuICBsZXQgX2R1ZURhdGUgPSB2YWxpZGF0ZUR1ZURhdGUoeyBkdWVEYXRlIH0pO1xyXG4gIGxldCBfcHJpb3JpdHkgPSB2YWxpZGF0ZVByaW9yaXR5KHsgcHJpb3JpdHkgfSk7XHJcbiAgbGV0IF9jb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxpc3RJZCgpIHtcclxuICAgICAgcmV0dXJuIF9saXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0IGxpc3RJZChsaXN0SWQpIHtcclxuICAgICAgX2xpc3RJZCA9IGxpc3RJZDtcclxuICAgIH0sXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gX3RpdGxlO1xyXG4gICAgfSxcclxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xyXG4gICAgICBfdGl0bGUgPSB2YWxpZGF0ZVRpdGxlKHsgdGl0bGUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xyXG4gICAgfSxcclxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICBfZGVzY3JpcHRpb24gPSB2YWxpZGF0ZURlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGR1ZURhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfZHVlRGF0ZTtcclxuICAgIH0sXHJcbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgIF9kdWVEYXRlID0gdmFsaWRhdGVEdWVEYXRlKHsgZHVlRGF0ZSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXQgcHJpb3JpdHkoKSB7XHJcbiAgICAgIHJldHVybiBfcHJpb3JpdHk7XHJcbiAgICB9LFxyXG4gICAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgIF9wcmlvcml0eSA9IHZhbGlkYXRlUHJpb3JpdHkoeyBwcmlvcml0eSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXQgY29tcGxldGUoKSB7XHJcbiAgICAgIHJldHVybiBfY29tcGxldGU7XHJcbiAgICB9LFxyXG4gICAgc2V0IGNvbXBsZXRlKGNvbXBsZXRlKSB7XHJcbiAgICAgIF9jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRleHQgfSBmcm9tICcuLi9kYXRhL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9TZXJ2aWNlKCkge1xyXG4gIGNvbnN0IF9jb250ZXh0ID0gY29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKHsgdG9kbyB9OiB7IHRvZG86IFRvZG8gfSkge1xyXG4gICAgX2NvbnRleHQudG9kb3MuZmluZEFuZFJlcGxhY2UodCA9PiB0LmlkID09PSB0b2RvLmlkLCB0b2RvKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgICBfY29udGV4dC50b2Rvcy5hZGQoeyB0b2RvIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0SW5ib3hUb2RvcygpIHtcclxuICAgIHJldHVybiBfY29udGV4dC50b2Rvcy5maW5kTWFueSh0ID0+IHQubGlzdElkID09PSB1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb3NCeUxpc3RJZCh7IGxpc3RJZCB9OiB7IGxpc3RJZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC50b2Rvcy5maW5kTWFueSh0ID0+IHQubGlzdElkID09PSBsaXN0SWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG9kb0J5SWQoeyB0b2RvSWQgfTogeyB0b2RvSWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQudG9kb3MuZmluZCh0ID0+IHQuaWQgPT09IHRvZG9JZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9kbyxcclxuICAgIGdldEluYm94VG9kb3MsXHJcbiAgICBnZXRUb2Rvc0J5TGlzdElkLFxyXG4gICAgdXBkYXRlVG9kbyxcclxuICAgIGdldFRvZG9CeUlkLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhbmNlbEJ1dHRvbic7XHJcbmltcG9ydCBGb3JtSW5wdXRHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1JbnB1dEdyb3VwJztcclxuaW1wb3J0IEZvcm1TZWxlY3RHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1TZWxlY3RHcm91cCc7XHJcbmltcG9ydCBGb3JtVGV4dEFyZWFHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1UZXh0QXJlYUdyb3VwJztcclxuaW1wb3J0IHsgaWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgUHJpb3JpdHksIGNyZWF0ZVRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcbmltcG9ydCB7IFZpZXdQcm9wcywgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2RvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IHsgY2FtZWxDYXNlVG9UaXRsZUNhc2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmdzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRhc2socHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IHsgbGlzdElkIH0gPSBwcm9wcy5xdWVyeVBhcmFtcztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKEFkZFRhc2tGb3JtKCkpO1xyXG5cclxuICBmdW5jdGlvbiBBZGRUYXNrRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gaWRzLkFERF9UQVNLX0ZPUk07XHJcblxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IEZvcm1JbnB1dEdyb3VwKHtcclxuICAgICAgbGFiZWxUZXh0OiAnVGl0bGUnLFxyXG4gICAgICBpbnB1dElkOiAndGl0bGUnLFxyXG4gICAgICBpbnB1dE5hbWU6ICd0aXRsZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IEZvcm1UZXh0QXJlYUdyb3VwKHtcclxuICAgICAgbGFiZWxUZXh0OiAnRGVzY3JpcHRpb24nLFxyXG4gICAgICB0ZXh0QXJlYUlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICB0ZXh0QXJlYU5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBGb3JtSW5wdXRHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ0R1ZSBEYXRlJyxcclxuICAgICAgaW5wdXRJZDogJ2R1ZURhdGUnLFxyXG4gICAgICBpbnB1dE5hbWU6ICdkdWVEYXRlJyxcclxuICAgICAgaW5wdXRUeXBlOiAnZGF0ZScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IEZvcm1TZWxlY3RHcm91cCh7XHJcbiAgICAgIGxhYmVsVGV4dDogJ1ByaW9yaXR5JyxcclxuICAgICAgc2VsZWN0SWQ6ICdwcmlvcml0eScsXHJcbiAgICAgIHNlbGVjdE5hbWU6ICdwcmlvcml0eScsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdTZWxlY3QgYSBwcmlvcml0eScsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWVUZXh0OiAnTG93JyxcclxuICAgICAgICAgIHZhbHVlOiAnTG93JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlVGV4dDogJ01lZGl1bScsXHJcbiAgICAgICAgICB2YWx1ZTogJ01lZGl1bScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZVRleHQ6ICdIaWdoJyxcclxuICAgICAgICAgIHZhbHVlOiAnSGlnaCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEJ1dHRvbnMoKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogRXZlbnQgJiB7IHRhcmdldDogSFRNTEZvcm1FbGVtZW50IH0pIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdG9kb0RhdGEgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCkuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgYCR7Y2FtZWxDYXNlVG9UaXRsZUNhc2UoeyBzdHI6IGtleSB9KX0gaXMgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmdgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RvRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cCh0b2RvRGF0YSk7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0gPSB0b2RvRGF0YTtcclxuICAgICAgICBjb25zdCB0b2RvID0gY3JlYXRlVG9kbyh7XHJcbiAgICAgICAgICBsaXN0SWQsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZHVlRGF0ZSksXHJcbiAgICAgICAgICBwcmlvcml0eTogUHJpb3JpdHlbcHJpb3JpdHldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdG9kb1NlcnZpY2UoKTtcclxuICAgICAgICBhZGRUb2RvKHsgdG9kbyB9KTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuICAgICAgICBjb25zdCByZXR1cm5VcmwgPSBsaXN0SWQgPyBgL2xpc3RzLyR7bGlzdElkfWAgOiAnLyc7XHJcbiAgICAgICAgbmF2aWdhdGUocmV0dXJuVXJsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBDYW5jZWxCdXR0b24oKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkJztcclxuICAgIGFkZEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLy4uL3JvdXRlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbE15VGFza3MocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ0FsbCBNeSBUYXNrcyc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja21hcmtJY29uKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgZmlsbCxcclxufToge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZmlsbDogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgZmlsbCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgMTYgMTZgKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMC45NyA0Ljk3YS43NS43NSAwIDAgMSAxLjA3IDEuMDVsLTMuOTkgNC45OWEuNzUuNzUgMCAwIDEtMS4wOC4wMkw0LjMyNCA4LjM4NGEuNzUuNzUgMCAxIDEgMS4wNi0xLjA2bDIuMDk0IDIuMDkzIDMuNDczLTQuNDI1YS4yNjcuMjY3IDAgMCAxIC4wMi0uMDIyeidcclxuICApO1xyXG5cclxuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBDaGVja21hcmtJY29uIGZyb20gJy4vQ2hlY2ttYXJrSWNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Q2FyZFRvZG8oeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzAuNXJlbSAxcmVtJyxcclxuICAgIGdhcDogJzAuNXJlbScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gQnV0dG9uVGV4dCgpIHtcclxuICAgIHJldHVybiB0b2RvLmNvbXBsZXRlXHJcbiAgICAgID8gQ2hlY2ttYXJrSWNvbih7IHdpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcclxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uYXBwZW5kQ2hpbGQoQnV0dG9uVGV4dCgpKTtcclxuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gIGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMXJlbScsXHJcbiAgICBhc3BlY3RSYXRpbzogJzEnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmZmZmJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIFNwYW5TdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzKHtcclxuICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uY29tcGxldGUgPyAnbGluZS10aHJvdWdoJyA6ICcnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICBzcGFuLnN0eWxlLmNzc1RleHQgPSBTcGFuU3R5bGVzKCk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVG9kb1N0YXR1cygpIHtcclxuICAgIGlmICh0b2RvLmNvbXBsZXRlID09IGZhbHNlKSB7XHJcbiAgICAgIHRvZG8uY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChCdXR0b25UZXh0KCkpO1xyXG5cclxuICAgICAgc3Bhbi5zdHlsZS5jc3NUZXh0ID0gU3BhblN0eWxlcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdG9kby5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKEJ1dHRvblRleHQoKSk7XHJcblxyXG4gICAgc3Bhbi5zdHlsZS5jc3NUZXh0ID0gU3BhblN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0b2dnbGVUb2RvU3RhdHVzKCk7XHJcbiAgICB0b2RvU2VydmljZSgpLnVwZGF0ZVRvZG8oeyB0b2RvIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQnV0dG9uQ2xpY2spO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIoKSB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDkzZTk3MCc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZU91dCgpIHtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICB9XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDb250YWluZXJNb3VzZU92ZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTGlzdENhcmRUb2RvIGZyb20gJy4vTGlzdENhcmRUb2RvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RDYXJkKHsgdG9kb3MgfTogeyB0b2RvczogVG9kb1tdIH0pIHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5jc3NUZXh0ID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXHJcbiAgICBmbGV4OiAnMScsXHJcbiAgfSk7XHJcblxyXG4gIGlmICh0b2Rvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgY29uc3QgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYWNlSG9sZGVyLmlubmVyVGV4dCA9ICdMb29rcyBsaWtlIHlvdSBnb3QgaXQgYWxsIGRvbmUhIPCfjoknO1xyXG4gICAgcGxhY2VIb2xkZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9KTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGxhY2VIb2xkZXIpO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBsaXN0LnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcwLjI1cmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaXRlbXMgPSB0b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoTGlzdENhcmRUb2RvKHsgdG9kbyB9KSk7XHJcbiAgICBpdGVtLmlkID0gdG9kby5pZDtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0pO1xyXG5cclxuICBsaXN0LmFwcGVuZCguLi5pdGVtcyk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RDbGljayhlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSB7XHJcbiAgICBjb25zdCB0YXJnZXRUb2RvID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0VG9kbyA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kb3MgPSBbLi4ubGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcclxuICAgICAgaWYgKHRvZG8uaWQgIT09IHRhcmdldFRvZG8uaWQpIHtcclxuICAgICAgICB0b2RvLnN0eWxlLmNzc1RleHQgPSAnJztcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9DbGljaycsIHsgZGV0YWlsOiB7IHRvZG9JZDogdG9kby5pZCB9IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0b2RvLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDRweCAwcHggIzAwOTNlOScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVMaXN0Q2xpY2spO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEhlYWRpbmcoe1xyXG4gIGhlYWRpbmdUZXh0LFxyXG4gIGxpc3RJZCxcclxufToge1xyXG4gIGhlYWRpbmdUZXh0OiBzdHJpbmc7XHJcbiAgbGlzdElkPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZ2FwOiAnMnJlbScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtIDEuMjVyZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aWR0aDogJ21pbi1jb250ZW50JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSBoZWFkaW5nVGV4dDtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBMaW5rKHtcclxuICAgICAgbGlua1RleHQ6ICdBZGQgVGFzaycsXHJcbiAgICAgIGhyZWY6IGxpc3RJZCA/IGAvdGFza3MvYWRkP2xpc3RJZD0ke2xpc3RJZH1gIDogJy90YXNrcy9hZGQnLFxyXG4gICAgICBzdHlsZXM6IGlubGluZVN0eWxlcyh7XHJcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmZmZmYnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0MjQyNDInO1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlT3V0KGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pIHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdhJykpIHtcclxuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ29udGFpbmVyTW91c2VPdmVyKTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVDb250YWluZXJNb3VzZU91dCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9DYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcclxuICAgIGZsZXg6ICcxJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrQ2lyY2xlSWNvbih7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIGZpbGwsXHJcbn06IHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGZpbGw6IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1gKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9YCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGZpbGwpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwIDE2IDE2YCk7XHJcblxyXG4gIGNvbnN0IGZpcnN0UGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG4gIGZpcnN0UGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTIuNSA4YTUuNSA1LjUgMCAwIDEgOC4yNS00Ljc2NC41LjUgMCAwIDAgLjUtLjg2NkE2LjUgNi41IDAgMSAwIDE0LjUgOGEuNS41IDAgMCAwLTEgMCA1LjUgNS41IDAgMSAxLTExIDB6J1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNlY29uZFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBzZWNvbmRQYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTUuMzU0IDMuMzU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDggOS4yOTMgNS4zNTQgNi42NDZhLjUuNSAwIDEgMC0uNzA4LjcwOGwzIDNhLjUuNSAwIDAgMCAuNzA4IDBsNy03eidcclxuICApO1xyXG5cclxuICBzdmcuYXBwZW5kQ2hpbGQoZmlyc3RQYXRoKTtcclxuICBzdmcuYXBwZW5kQ2hpbGQoc2Vjb25kUGF0aCk7XHJcblxyXG4gIHJldHVybiBzdmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IENoZWNrbWFya0NpcmNsZUljb24gZnJvbSAnLi9DaGVja21hcmtDaXJjbGVJY29uJztcclxuXHJcbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKCkge1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGxhY2Vob2xkZXJDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnMC41cmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwbGFjZUhvbGRlci5pbm5lclRleHQgPSAnV2hhdCBkbyB5b3Ugd2FudCB0byBnZXQgZG9uZT8nO1xyXG5cclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgIENoZWNrbWFya0NpcmNsZUljb24oeyBoZWlnaHQ6IDQwLCB3aWR0aDogNDAsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0pXHJcbiAgKTtcclxuICBwbGFjZWhvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XHJcblxyXG4gIHJldHVybiBwbGFjZWhvbGRlckNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0RldGFpbHMoeyB0b2RvIH06IHsgdG9kbz86IFRvZG8gfSkge1xyXG4gIGlmICh0b2RvID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBQbGFjZWhvbGRlcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogQnVpbGQgYWN0dWFsIGRldGFpbHMgdmlld1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuXHJcbiAgcmV0dXJuIGhlYWRpbmc7XHJcbn1cclxuIiwiaW1wb3J0IExpc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdENhcmQnO1xyXG5pbXBvcnQgTGlzdEhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0SGVhZGluZyc7XHJcbmltcG9ydCBUb2RvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9DYXJkJztcclxuaW1wb3J0IFRvZG9EZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0RldGFpbHMnO1xyXG5pbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgdG9kb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2RvU2VydmljZSc7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0RGV0YWlsKHByb3BzOiBWaWV3UHJvcHMpIHtcclxuICBjb25zdCB7IGlkIH0gPSBwcm9wcy5wYXRoUGFyYW1zO1xyXG4gIGNvbnN0IHsgZ2V0TGlzdEJ5SWQgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgY29uc3QgbGlzdCA9IGdldExpc3RCeUlkKHsgaWQgfSk7XHJcbiAgY29uc3QgeyBnZXRUb2Rvc0J5TGlzdElkLCBnZXRUb2RvQnlJZCB9ID0gdG9kb1NlcnZpY2UoKTtcclxuICBjb25zdCB0b2RvcyA9IGdldFRvZG9zQnlMaXN0SWQoeyBsaXN0SWQ6IGxpc3Q/LmlkIH0pO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzJyZW0nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9KTtcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZ2FwOiAnMXJlbScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9KTtcclxuXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChMaXN0Q2FyZCh7IHRvZG9zIH0pKTtcclxuXHJcbiAgY29uc3QgdG9kb0NhcmQgPSBUb2RvQ2FyZCgpO1xyXG4gIGNvbnN0IHRvZG9EZXRhaWxzID0gVG9kb0RldGFpbHMoe30pO1xyXG4gIHRvZG9DYXJkLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzKTtcclxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG9kb0NsaWNrKGU6IEN1c3RvbUV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHRvZG9JZCB9ID0gZS5kZXRhaWw7XHJcbiAgICBjb25zdCB0b2RvID0gZ2V0VG9kb0J5SWQoeyB0b2RvSWQgfSk7XHJcbiAgICB0b2RvQ2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKFRvZG9EZXRhaWxzKHsgdG9kbyB9KSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2RvQ2xpY2snLCBoYW5kbGVUb2RvQ2xpY2spO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBMaXN0SGVhZGluZyh7XHJcbiAgICAgIGhlYWRpbmdUZXh0OiBsaXN0ID8gbGlzdC5uYW1lIDogJ0luYm94JyxcclxuICAgICAgbGlzdElkOiBsaXN0Py5pZCxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG5cclxuICBwcm9wcy5wYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlEYXkocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ015IERheSc7XHJcblxyXG4gIHByb3BzLnBhcmVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dFdlZWsocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ05leHQgNyBEYXlzJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnTm90IEZvdW5kJztcclxuXHJcbiAgcHJvcHMucGFyZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG59XHJcbiIsImltcG9ydCBBZGRMaXN0IGZyb20gJy4vdmlld3MvQWRkTGlzdCc7XHJcbmltcG9ydCBBZGRUYXNrIGZyb20gJy4vdmlld3MvQWRkVGFzayc7XHJcbmltcG9ydCBBbGxNeVRhc2tzIGZyb20gJy4vdmlld3MvQWxsTXlUYXNrcyc7XHJcbmltcG9ydCBMaXN0RGV0YWlsIGZyb20gJy4vdmlld3MvTGlzdERldGFpbCc7XHJcbmltcG9ydCBNeURheSBmcm9tICcuL3ZpZXdzL015RGF5JztcclxuaW1wb3J0IE5leHRXZWVrIGZyb20gJy4vdmlld3MvTmV4dFdlZWsnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi92aWV3cy9Ob3RGb3VuZCc7XHJcblxyXG5leHBvcnQgdHlwZSBWaWV3UHJvcHMgPSB7XHJcbiAgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICBwYXRoUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHF1ZXJ5UGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59O1xyXG5cclxudHlwZSBSb3V0ZSA9IHtcclxuICBxdWVyeT86IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgdmlldzogKHByb3BzOiBWaWV3UHJvcHMpID0+IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIE1hdGNoID0ge1xyXG4gIHJvdXRlOiBSb3V0ZTtcclxuICByZXN1bHQ6IFJlZ0V4cE1hdGNoQXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyKCkge1xyXG4gIGNvbnN0IHJvdXRlczogUm91dGVbXSA9IFtcclxuICAgIHsgcGF0aDogJy8nLCB2aWV3OiBMaXN0RGV0YWlsIH0sXHJcbiAgICB7IHBhdGg6ICcvbXktZGF5JywgdmlldzogTXlEYXkgfSxcclxuICAgIHsgcGF0aDogJy9uZXh0LXNldmVuLWRheXMnLCB2aWV3OiBOZXh0V2VlayB9LFxyXG4gICAgeyBwYXRoOiAnL3Rhc2tzJywgdmlldzogQWxsTXlUYXNrcyB9LFxyXG4gICAgeyBwYXRoOiAnL3Rhc2tzL2FkZCcsIHZpZXc6IEFkZFRhc2sgfSxcclxuICAgIHsgcGF0aDogJy9saXN0cy9hZGQnLCB2aWV3OiBBZGRMaXN0IH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvOmlkJywgdmlldzogTGlzdERldGFpbCB9LFxyXG4gIF0ubWFwKHJvdXRlID0+IHtcclxuICAgIHJvdXRlLnBhdGggPSBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyByb3V0ZS5wYXRoO1xyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXRjaCBwYXRoIGZyb20gYmVnaW5uaW5nIHRvIGVuZFxyXG4gIC8vIGVzY2FwZSBmb3J3YXJkIHNsYXNoZXNcclxuICAvLyByZXBsYWNlIHBhdGggcGxhY2Vob2xkZXJzXHJcbiAgLy8gd2l0aCBjYXB0dXJlIGdyb3Vwc1xyXG4gIGNvbnN0IG1hdGNoZXM6IE1hdGNoW10gPSByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICByb3V0ZSxcclxuICAgIHJlc3VsdDogbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goXHJcbiAgICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgICAgJ14nICsgcm91dGUucGF0aC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOlxcdysvZywgJyguKyknKSArICckJ1xyXG4gICAgICApXHJcbiAgICApLFxyXG4gIH0pKTtcclxuXHJcbiAgbGV0IG1hdGNoID0gbWF0Y2hlcy5maW5kKG1hdGNoID0+IG1hdGNoLnJlc3VsdCAhPT0gbnVsbCk7XHJcblxyXG4gIGlmIChtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXRjaCA9IHtcclxuICAgICAgcm91dGU6IHtcclxuICAgICAgICBxdWVyeTogbG9jYXRpb24uc2VhcmNoLFxyXG4gICAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIHZpZXc6IE5vdEZvdW5kLFxyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHQ6IFtsb2NhdGlvbi5wYXRobmFtZV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWF0Y2gucm91dGUucXVlcnkgPSBsb2NhdGlvbi5zZWFyY2g7XHJcblxyXG4gIGNvbnN0IHBhdGhQYXJhbXMgPSBbLi4ubWF0Y2gucm91dGUucGF0aC5tYXRjaEFsbCgvOihcXHcrKS9nKV1cclxuICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdFsxXSlcclxuICAgIC5yZWR1Y2UoXHJcbiAgICAgIChwcmV2LCBjdXJyLCBpKSA9PiAoeyAuLi5wcmV2LCBbY3Vycl06IG1hdGNoLnJlc3VsdC5zbGljZSgxKVtpXSB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbWF0Y2gucm91dGUucXVlcnk/LnNwbGl0KCc/JylbMV07XHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPVxyXG4gICAgcXVlcnlTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IHt9XHJcbiAgICAgIDogcXVlcnlTdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGN1cnIuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICBba2V5XTogZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIG1hdGNoLnJvdXRlLnZpZXcoeyBwYXJlbnQsIHBhdGhQYXJhbXMsIHF1ZXJ5UGFyYW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUodXJsOiBzdHJpbmcpIHtcclxuICBjb25zdCB1cmxUZXh0ID0gL15cXC8vLnRlc3QodXJsKSA/IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIHVybCA6IHVybDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmxUZXh0KTtcclxuICByb3V0ZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgJy4vYXNzZXRzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGlkcyB9IGZyb20gJy4vY29uc3RhbnRzL2VsZW1lbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IG5hdmlnYXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRzLlJPT1QpO1xyXG5yb290LmFwcGVuZENoaWxkKExheW91dCgpKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgJ2NsaWNrJyxcclxuICAoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcclxuICAgIGlmIChsaW5rICE9PSBudWxsICYmIGxpbmsubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG5hdmlnYXRlKGxpbmsuaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxucm91dGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==