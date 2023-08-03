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

;// CONCATENATED MODULE: ./src/components/Link.ts
function Link({ linkText, href, styles, onMouseOver = () => {
    return;
}, onMouseOut = () => {
    return;
}, }) {
    // if href is an absolute one append
    // the envs base path.
    const hrefText = /^\//.test(href) ? "/theOdinProject-Todo-List" + href : href;
    return /*html*/ `
    <a
      title="${linkText}"
      href="${hrefText}" 
      style="${styles}"
      onmouseover="(${onMouseOver})(event, this)"
      onmouseout="(${onMouseOut})(event, this)"
      data-link
    >
      ${linkText}
    </a>
  `;
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
                add: () => null,
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
    function getById({ id }) {
        return _context.lists.findOne(l => l.id === id);
    }
    function getAllLists() {
        return _context.lists.findMany(l => l !== null);
    }
    return {
        addList,
        getById,
        getAllLists,
    };
}

;// CONCATENATED MODULE: ./src/components/NavListItem.ts


function NavListItem({ linkText, href, }) {
    const navListItemMouseOver = (e) => {
        e.style.backgroundColor = '#424242';
    };
    const navListItemMouseOut = (e) => {
        e.style.backgroundColor = '';
    };
    const navLinkStyles = inlineStyles({
        color: '#ffffff',
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'block',
        padding: '0.25rem 1rem',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    });
    return /*html*/ `
    <li 
      onmouseover="(${navListItemMouseOver})(this)" 
      onmouseout="(${navListItemMouseOut})(this)" 
      
    >
      ${Link({ linkText, href, styles: navLinkStyles })}
    </li>
  `;
}

;// CONCATENATED MODULE: ./src/components/MyLists.ts




function MyLists() {
    const myListStyles = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
    });
    const myListTitleContainer = inlineStyles({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0rem 1rem',
        color: '#ffffff',
    });
    const myListTitleStyles = inlineStyles({
        fontSize: '1.15rem',
        fontWeight: 'bold',
    });
    const addListLinkStyles = inlineStyles({
        fontSize: '1.25rem',
        fontWeight: 'bold',
    });
    function renderNavLinkItems() {
        const { getAllLists } = listService();
        const allLists = getAllLists();
        const myListItems = allLists.map(list => ({
            linkText: list.name,
            href: `/lists/${list.id}`,
        }));
        return myListItems
            .map(item => NavListItem({ linkText: item.linkText, href: item.href }))
            .join('');
    }
    const MY_LISTS_ID = 'myLists';
    document.addEventListener('listAdded', () => {
        document.getElementById(MY_LISTS_ID).innerHTML = renderNavLinkItems();
    });
    return /*html*/ `
    <div style="${myListTitleContainer}">
      <div style="${myListTitleStyles}">My lists</div>
      ${Link({
        linkText: '+',
        href: '/lists/add',
        styles: addListLinkStyles,
        onMouseOver: (e, t) => (t.style.color = '#424242'),
        onMouseOut: (e, t) => (t.style.color = ''),
    })}
    </div>
    <ul id="${MY_LISTS_ID}" style="${myListStyles}">
      ${renderNavLinkItems()}
    </ul>
  `;
}

;// CONCATENATED MODULE: ./src/components/Sidebar.ts



function Sidebar_NavListItem({ linkText, href }) {
    const navListItemMouseOver = (e) => {
        e.style.backgroundColor = '#424242';
    };
    const navListItemMouseOut = (e) => {
        e.style.backgroundColor = '';
    };
    const navLinkStyles = inlineStyles({
        color: '#ffffff',
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'flex',
        padding: '0.25rem 1rem',
    });
    return /*html*/ `
    <li 
      onmouseover="(${navListItemMouseOver})(this)" 
      onmouseout="(${navListItemMouseOut})(this)" 
      
    >
      ${Link({ linkText, href, styles: navLinkStyles })}
    </li>
  `;
}
function SideBar() {
    const asideStyles = inlineStyles({
        width: '200px',
        backgroundColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    });
    const navStyles = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem 0rem',
    });
    const navListStyles = inlineStyles({
        display: 'flex',
        flexDirection: 'column',
    });
    const now = new Date();
    const sevenDaysLater = new Date(now);
    sevenDaysLater.setDate(now.getDate() + 7);
    const primaryNavLinkItems = [
        { linkText: 'Inbox', href: '/' },
        { linkText: 'My Day', href: '/my-day' },
        {
            linkText: 'Next 7 Days',
            href: `/next-seven-days`,
        },
        { linkText: 'All my tasks', href: '/tasks' },
    ];
    return /*html*/ `
    <aside style="${asideStyles}">
      <nav style="${navStyles}">
        <ul style="${navListStyles}">
          ${primaryNavLinkItems
        .map(item => Sidebar_NavListItem({ linkText: item.linkText, href: item.href }))
        .join('')}
        </ul>
        <div id="myListsContainer">
          ${MyLists()}
        </div>
      </nav>
    </aside>`;
}

;// CONCATENATED MODULE: ./src/layout.ts


function Layout() {
    const containerStyles = inlineStyles({
        height: '100%',
        display: 'flex',
    });
    const mainStyles = inlineStyles({
        flex: '1',
        padding: '1rem',
    });
    return /*html*/ `
    <div style="${containerStyles}">
      ${SideBar()}
      <main id="app" style="${mainStyles}"></main>
    </div>
  `;
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



function AddList() {
    const FORM_ID = 'addListForm';
    function handleCancelClick() {
        history.back();
    }
    function handleFormSubmit(event) {
        if (event.target.id !== FORM_ID) {
            return;
        }
        event.preventDefault();
        const { name } = Object.fromEntries(new FormData(event.target));
        if (name instanceof Object) {
            throw Error('name is expected to be a string');
        }
        try {
            const list = createList({ name });
            const { addList } = listService();
            addList({ list });
            document.dispatchEvent(new Event('listAdded'));
            document.removeEventListener('submit', handleFormSubmit);
            router_navigate(`/lists/${list.id}`);
        }
        catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    }
    document.addEventListener('submit', handleFormSubmit);
    return /*html*/ `
    <form id="${FORM_ID}">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
      </div>
      <div>
        <button onclick="(${handleCancelClick})()" type="button">Cancel</button>
        <button type="submit">Add</button>
      </div>     
    </form>
  `;
}

;// CONCATENATED MODULE: ./src/views/AllMyTasks.ts
function AllMyTasks() {
    return /*html*/ `
    <h1>All My Tasks</h1>
  `;
}

;// CONCATENATED MODULE: ./src/views/Inbox.ts
function Inbox() {
    return /*html*/ `
    <h1>Inbox</h1>
  `;
}

;// CONCATENATED MODULE: ./src/views/ListDetail.ts

function ListDetail(props) {
    const { id } = props.pathParams;
    const { getById } = listService();
    const list = getById({ id });
    return /*html*/ `
    <h1>${list.name}</h1>
  `;
}

;// CONCATENATED MODULE: ./src/views/MyDay.ts
function MyDay() {
    return /*html*/ `
    <h1>My Day</h1>
  `;
}

;// CONCATENATED MODULE: ./src/views/NextWeek.ts
function NextWeek() {
    return /*html*/ `
    <h1>Next 7 Days</h1>
  `;
}

;// CONCATENATED MODULE: ./src/views/NotFound.ts
function NotFound() {
    return /*html*/ `
    <h1>Not Found</h1>
  `;
}

;// CONCATENATED MODULE: ./src/router.ts







function router() {
    const routes = [
        { path: '/', view: Inbox },
        { path: '/my-day', view: MyDay },
        { path: '/next-seven-days', view: NextWeek },
        { path: '/tasks', view: AllMyTasks },
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
                path: location.pathname,
                view: NotFound,
            },
            result: [location.pathname],
        };
    }
    const pathParams = [...match.route.path.matchAll(/:(\w+)/g)]
        .map(result => result[1])
        .reduce((prev, curr, i) => (Object.assign(Object.assign({}, prev), { [curr]: match.result.slice(1)[i] })), {});
    const queryString = match.route.path.split('?')[1];
    const queryParams = queryString === undefined
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
function router_navigate(url) {
    history.pushState(null, null, url);
    router();
}

;// CONCATENATED MODULE: ./src/index.ts



const root = document.getElementById('root');
root.innerHTML = Layout();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2xELENBQUM7QUFFTSxTQUFTLGVBQVEsQ0FBQyxHQUFXO0lBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxNQUFNLEVBQUUsQ0FBQztBQUNYLENBQUM7OztBQ3pGMkI7QUFDRTtBQUNjO0FBRTVDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUUxQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQzVCLE9BQU8sRUFDUCxDQUFDLENBQWtDLEVBQUUsRUFBRTtJQUNyQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQjtBQUNILENBQUMsQ0FDRixDQUFDO0FBRUYsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3R5bGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpbmsudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2RhdGEvY29udGV4dC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc2VydmljZXMvbGlzdFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2TGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTXlMaXN0cy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvaWQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVscy9saXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRMaXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BbGxNeVRhc2tzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9JbmJveC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTGlzdERldGFpbC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTXlEYXkudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL05leHRXZWVrLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9Ob3RGb3VuZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCRUdJTiBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLyogRU5EIFJFU0VUUyAqL1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG4jcm9vdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEJFR0lOIFJFU0VUUyAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG4jcm9vdCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImZ1bmN0aW9uIGNhbWVsVG9LZWJhYihjYW1lbENhc2VTdHJpbmc6IHN0cmluZykge1xyXG4gIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlubGluZVN0eWxlcyhzdHlsZXM6IG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZSgoaW5saW5lU3R5bGVzLCBwcm9wZXJ0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtpbmxpbmVTdHlsZXN9JHtjYW1lbFRvS2ViYWIocHJvcGVydHkpfToke3ZhbHVlfTtgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmxpbmVTdHlsZXM7XHJcbiAgfSwgJycpO1xyXG59XHJcbiIsInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxuICBvbk1vdXNlT3Zlcj86IChldmVudDogRXZlbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbiAgb25Nb3VzZU91dD86IChldmVudDogRXZlbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG4gIHN0eWxlcyxcclxuICBvbk1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgIHJldHVybjtcclxuICB9LFxyXG4gIG9uTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfSxcclxufTogTGlua1Byb3BzKSB7XHJcbiAgLy8gaWYgaHJlZiBpcyBhbiBhYnNvbHV0ZSBvbmUgYXBwZW5kXHJcbiAgLy8gdGhlIGVudnMgYmFzZSBwYXRoLlxyXG4gIGNvbnN0IGhyZWZUZXh0ID0gL15cXC8vLnRlc3QoaHJlZikgPyBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyBocmVmIDogaHJlZjtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxhXHJcbiAgICAgIHRpdGxlPVwiJHtsaW5rVGV4dH1cIlxyXG4gICAgICBocmVmPVwiJHtocmVmVGV4dH1cIiBcclxuICAgICAgc3R5bGU9XCIke3N0eWxlc31cIlxyXG4gICAgICBvbm1vdXNlb3Zlcj1cIigke29uTW91c2VPdmVyfSkoZXZlbnQsIHRoaXMpXCJcclxuICAgICAgb25tb3VzZW91dD1cIigke29uTW91c2VPdXR9KShldmVudCwgdGhpcylcIlxyXG4gICAgICBkYXRhLWxpbmtcclxuICAgID5cclxuICAgICAgJHtsaW5rVGV4dH1cclxuICAgIDwvYT5cclxuICBgO1xyXG59XHJcbiIsImltcG9ydCB7IExpc3QgfSBmcm9tICcuLi9tb2RlbHMvbGlzdCc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dCgpIHtcclxuICBjb25zdCBMSVNUU19LRVkgPSAnbGlzdHMnO1xyXG4gIGNvbnN0IFRPRE9TX0tFWSA9ICd0b2Rvcyc7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEl0ZW0oeyBrZXkgfTogeyBrZXk6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEl0ZW0oeyBrZXksIGl0ZW0gfTogeyBrZXk6IHN0cmluZzsgaXRlbTogb2JqZWN0IH0pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IF9saXN0czogTGlzdFtdID0gZ2V0SXRlbSh7IGtleTogTElTVFNfS0VZIH0pO1xyXG4gIGxldCBfdG9kb3M6IFRvZG9bXSA9IGdldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSB9KTtcclxuXHJcbiAgaWYgKF9saXN0cyA9PSBudWxsKSB7XHJcbiAgICBzZXRJdGVtKHsga2V5OiBMSVNUU19LRVksIGl0ZW06IFtdIH0pO1xyXG4gICAgX2xpc3RzID0gZ2V0SXRlbSh7IGtleTogTElTVFNfS0VZIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKF90b2RvcyA9PSBudWxsKSB7XHJcbiAgICBzZXRJdGVtKHsga2V5OiBUT0RPU19LRVksIGl0ZW06IFtdIH0pO1xyXG4gICAgX3RvZG9zID0gZ2V0SXRlbSh7IGtleTogVE9ET1NfS0VZIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldCBsaXN0cygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6ICh7IGxpc3QgfTogeyBsaXN0OiBMaXN0IH0pID0+IHtcclxuICAgICAgICAgIF9saXN0cy5wdXNoKGxpc3QpO1xyXG4gICAgICAgICAgc2V0SXRlbSh7IGtleTogTElTVFNfS0VZLCBpdGVtOiBfbGlzdHMgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kT25lOiAocHJlZGljYXRlOiAobGlzdDogTGlzdCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIF9saXN0cy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kTWFueTogKHByZWRpY2F0ZTogKGxpc3Q6IExpc3QpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfbGlzdHMuZmlsdGVyKHByZWRpY2F0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBnZXQgdG9kb3MoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiAoKSA9PiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRleHQgfSBmcm9tICcuLi9kYXRhL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RTZXJ2aWNlKCkge1xyXG4gIGNvbnN0IF9jb250ZXh0ID0gY29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRMaXN0KHsgbGlzdCB9OiB7IGxpc3Q6IExpc3QgfSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdMaXN0ID0gX2NvbnRleHQubGlzdHMuZmluZE9uZShsID0+IGwubmFtZSA9PT0gbGlzdC5uYW1lKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMaXN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEEgbGlzdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBuYW1lICR7bGlzdC5uYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb250ZXh0Lmxpc3RzLmFkZCh7IGxpc3QgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRCeUlkKHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBfY29udGV4dC5saXN0cy5maW5kT25lKGwgPT4gbC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWxsTGlzdHMoKSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE1hbnkobCA9PiBsICE9PSBudWxsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRMaXN0LFxyXG4gICAgZ2V0QnlJZCxcclxuICAgIGdldEFsbExpc3RzLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3RJdGVtKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG59OiB7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCBuYXZMaXN0SXRlbU1vdXNlT3ZlciA9IChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyNDI0Mic7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdEl0ZW1Nb3VzZU91dCA9IChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICB9O1xyXG5cclxuICBjb25zdCBuYXZMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8bGkgXHJcbiAgICAgIG9ubW91c2VvdmVyPVwiKCR7bmF2TGlzdEl0ZW1Nb3VzZU92ZXJ9KSh0aGlzKVwiIFxyXG4gICAgICBvbm1vdXNlb3V0PVwiKCR7bmF2TGlzdEl0ZW1Nb3VzZU91dH0pKHRoaXMpXCIgXHJcbiAgICAgIFxyXG4gICAgPlxyXG4gICAgICAke0xpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzOiBuYXZMaW5rU3R5bGVzIH0pfVxyXG4gICAgPC9saT5cclxuICBgO1xyXG59XHJcbiIsImltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5pbXBvcnQgTmF2TGlzdEl0ZW0gZnJvbSAnLi9OYXZMaXN0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUxpc3RzKCkge1xyXG4gIGNvbnN0IG15TGlzdFN0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbXlMaXN0VGl0bGVDb250YWluZXIgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcGFkZGluZzogJzByZW0gMXJlbScsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBteUxpc3RUaXRsZVN0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmb250U2l6ZTogJzEuMTVyZW0nLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGRMaXN0TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJOYXZMaW5rSXRlbXMoKSB7XHJcbiAgICBjb25zdCB7IGdldEFsbExpc3RzIH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgY29uc3QgYWxsTGlzdHMgPSBnZXRBbGxMaXN0cygpO1xyXG4gICAgY29uc3QgbXlMaXN0SXRlbXMgPSBhbGxMaXN0cy5tYXAobGlzdCA9PiAoe1xyXG4gICAgICBsaW5rVGV4dDogbGlzdC5uYW1lLFxyXG4gICAgICBocmVmOiBgL2xpc3RzLyR7bGlzdC5pZH1gLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiBteUxpc3RJdGVtc1xyXG4gICAgICAubWFwKGl0ZW0gPT4gTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dDogaXRlbS5saW5rVGV4dCwgaHJlZjogaXRlbS5ocmVmIH0pKVxyXG4gICAgICAuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBNWV9MSVNUU19JRCA9ICdteUxpc3RzJztcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbGlzdEFkZGVkJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTVlfTElTVFNfSUQpLmlubmVySFRNTCA9IHJlbmRlck5hdkxpbmtJdGVtcygpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGRpdiBzdHlsZT1cIiR7bXlMaXN0VGl0bGVDb250YWluZXJ9XCI+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCIke215TGlzdFRpdGxlU3R5bGVzfVwiPk15IGxpc3RzPC9kaXY+XHJcbiAgICAgICR7TGluayh7XHJcbiAgICAgICAgbGlua1RleHQ6ICcrJyxcclxuICAgICAgICBocmVmOiAnL2xpc3RzL2FkZCcsXHJcbiAgICAgICAgc3R5bGVzOiBhZGRMaXN0TGlua1N0eWxlcyxcclxuICAgICAgICBvbk1vdXNlT3ZlcjogKGUsIHQpID0+ICh0LnN0eWxlLmNvbG9yID0gJyM0MjQyNDInKSxcclxuICAgICAgICBvbk1vdXNlT3V0OiAoZSwgdCkgPT4gKHQuc3R5bGUuY29sb3IgPSAnJyksXHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgaWQ9XCIke01ZX0xJU1RTX0lEfVwiIHN0eWxlPVwiJHtteUxpc3RTdHlsZXN9XCI+XHJcbiAgICAgICR7cmVuZGVyTmF2TGlua0l0ZW1zKCl9XHJcbiAgICA8L3VsPlxyXG4gIGA7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuaW1wb3J0IE15TGlzdHMgZnJvbSAnLi9NeUxpc3RzJztcclxuXHJcbmZ1bmN0aW9uIE5hdkxpc3RJdGVtKHsgbGlua1RleHQsIGhyZWYgfTogeyBsaW5rVGV4dDogc3RyaW5nOyBocmVmOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IG5hdkxpc3RJdGVtTW91c2VPdmVyID0gKGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNDI0MjQyJztcclxuICB9O1xyXG5cclxuICBjb25zdCBuYXZMaXN0SXRlbU1vdXNlT3V0ID0gKGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5hdkxpbmtTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGxpIFxyXG4gICAgICBvbm1vdXNlb3Zlcj1cIigke25hdkxpc3RJdGVtTW91c2VPdmVyfSkodGhpcylcIiBcclxuICAgICAgb25tb3VzZW91dD1cIigke25hdkxpc3RJdGVtTW91c2VPdXR9KSh0aGlzKVwiIFxyXG4gICAgICBcclxuICAgID5cclxuICAgICAgJHtMaW5rKHsgbGlua1RleHQsIGhyZWYsIHN0eWxlczogbmF2TGlua1N0eWxlcyB9KX1cclxuICAgIDwvbGk+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcclxuICBjb25zdCBhc2lkZVN0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDkzRTknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwOTNFOSAwJSwgIzgwRDBDNyAxMDAlKScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdlN0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGdhcDogJzFyZW0nLFxyXG4gICAgcGFkZGluZzogJzFyZW0gMHJlbScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkxpc3RTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgc2V2ZW5EYXlzTGF0ZXIgPSBuZXcgRGF0ZShub3cpO1xyXG4gIHNldmVuRGF5c0xhdGVyLnNldERhdGUobm93LmdldERhdGUoKSArIDcpO1xyXG5cclxuICBjb25zdCBwcmltYXJ5TmF2TGlua0l0ZW1zID0gW1xyXG4gICAgeyBsaW5rVGV4dDogJ0luYm94JywgaHJlZjogJy8nIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnTXkgRGF5JywgaHJlZjogJy9teS1kYXknIH0sXHJcbiAgICB7XHJcbiAgICAgIGxpbmtUZXh0OiAnTmV4dCA3IERheXMnLFxyXG4gICAgICBocmVmOiBgL25leHQtc2V2ZW4tZGF5c2AsXHJcbiAgICB9LFxyXG4gICAgeyBsaW5rVGV4dDogJ0FsbCBteSB0YXNrcycsIGhyZWY6ICcvdGFza3MnIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxhc2lkZSBzdHlsZT1cIiR7YXNpZGVTdHlsZXN9XCI+XHJcbiAgICAgIDxuYXYgc3R5bGU9XCIke25hdlN0eWxlc31cIj5cclxuICAgICAgICA8dWwgc3R5bGU9XCIke25hdkxpc3RTdHlsZXN9XCI+XHJcbiAgICAgICAgICAke3ByaW1hcnlOYXZMaW5rSXRlbXNcclxuICAgICAgICAgICAgLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dDogaXRlbS5saW5rVGV4dCwgaHJlZjogaXRlbS5ocmVmIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBpZD1cIm15TGlzdHNDb250YWluZXJcIj5cclxuICAgICAgICAgICR7TXlMaXN0cygpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvYXNpZGU+YDtcclxufVxyXG4iLCJpbXBvcnQgU2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4vdXRpbHMvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcclxuICBjb25zdCBjb250YWluZXJTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1haW5TdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZmxleDogJzEnLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGRpdiBzdHlsZT1cIiR7Y29udGFpbmVyU3R5bGVzfVwiPlxyXG4gICAgICAke1NpZGVCYXIoKX1cclxuICAgICAgPG1haW4gaWQ9XCJhcHBcIiBzdHlsZT1cIiR7bWFpblN0eWxlc31cIj48L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XHJcbiAgcmV0dXJuIHV1aWQoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JXaGl0ZVNwYWNlKHsgc3RyIH06IHsgc3RyOiBzdHJpbmcgfSkge1xyXG4gIHJldHVybiAhc3RyIHx8IHN0ci50cmltKCkgPT09ICcnO1xyXG59XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlSWQgfSBmcm9tICcuLi91dGlscy9pZCc7XHJcbmltcG9ydCB7IGlzTnVsbE9yV2hpdGVTcGFjZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ3MnO1xyXG5cclxudHlwZSBMaXN0UGFyYW1zID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIExpc3QgPSB7IGlkOiBzdHJpbmcgfSAmIExpc3RQYXJhbXM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCh7IG5hbWUgfTogTGlzdFBhcmFtcyk6IExpc3Qge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlTmFtZSh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkge1xyXG4gICAgaWYgKGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0cjogbmFtZSB9KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZS5sZW5ndGggPiAxNTApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgX2lkID0gZ2VuZXJhdGVJZCgpO1xyXG4gIGxldCBfbmFtZSA9IHZhbGlkYXRlTmFtZSh7IG5hbWUgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiBfaWQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiBfbmFtZTtcclxuICAgIH0sXHJcbiAgICBzZXQgbmFtZShuYW1lKSB7XHJcbiAgICAgIF9uYW1lID0gdmFsaWRhdGVOYW1lKHsgbmFtZSB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTGlzdCgpIHtcclxuICBjb25zdCBGT1JNX0lEID0gJ2FkZExpc3RGb3JtJztcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsQ2xpY2soKSB7XHJcbiAgICBoaXN0b3J5LmJhY2soKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxGb3JtRWxlbWVudCB9KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkICE9PSBGT1JNX0lEKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCkpO1xyXG5cclxuICAgIGlmIChuYW1lIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIHRocm93IEVycm9yKCduYW1lIGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QoeyBuYW1lIH0pO1xyXG4gICAgICBjb25zdCB7IGFkZExpc3QgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgICAgIGFkZExpc3QoeyBsaXN0IH0pO1xyXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbGlzdEFkZGVkJykpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuICAgICAgbmF2aWdhdGUoYC9saXN0cy8ke2xpc3QuaWR9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxmb3JtIGlkPVwiJHtGT1JNX0lEfVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwiKCR7aGFuZGxlQ2FuY2VsQ2xpY2t9KSgpXCIgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj4gICAgIFxyXG4gICAgPC9mb3JtPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsTXlUYXNrcygpIHtcclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGgxPkFsbCBNeSBUYXNrczwvaDE+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmJveCgpIHtcclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGgxPkluYm94PC9oMT5cclxuICBgO1xyXG59XHJcbiIsImltcG9ydCB7IFZpZXdQcm9wcyB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdFNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdERldGFpbChwcm9wczogVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcHJvcHMucGF0aFBhcmFtcztcclxuICBjb25zdCB7IGdldEJ5SWQgfSA9IGxpc3RTZXJ2aWNlKCk7XHJcbiAgY29uc3QgbGlzdCA9IGdldEJ5SWQoeyBpZCB9KTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT4ke2xpc3QubmFtZX08L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlEYXkoKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5NeSBEYXk8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dFdlZWsoKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5OZXh0IDcgRGF5czwvaDE+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGgxPk5vdCBGb3VuZDwvaDE+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgQWRkTGlzdCBmcm9tICcuL3ZpZXdzL0FkZExpc3QnO1xyXG5pbXBvcnQgQWxsTXlUYXNrcyBmcm9tICcuL3ZpZXdzL0FsbE15VGFza3MnO1xyXG5pbXBvcnQgSW5ib3ggZnJvbSAnLi92aWV3cy9JbmJveCc7XHJcbmltcG9ydCBMaXN0RGV0YWlsIGZyb20gJy4vdmlld3MvTGlzdERldGFpbCc7XHJcbmltcG9ydCBNeURheSBmcm9tICcuL3ZpZXdzL015RGF5JztcclxuaW1wb3J0IE5leHRXZWVrIGZyb20gJy4vdmlld3MvTmV4dFdlZWsnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi92aWV3cy9Ob3RGb3VuZCc7XHJcblxyXG5leHBvcnQgdHlwZSBWaWV3UHJvcHMgPSB7XHJcbiAgcGF0aFBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBxdWVyeVBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufTtcclxuXHJcbnR5cGUgUm91dGUgPSB7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIHZpZXc6IChwcm9wczogVmlld1Byb3BzKSA9PiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIE1hdGNoID0ge1xyXG4gIHJvdXRlOiBSb3V0ZTtcclxuICByZXN1bHQ6IFJlZ0V4cE1hdGNoQXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyKCkge1xyXG4gIGNvbnN0IHJvdXRlczogUm91dGVbXSA9IFtcclxuICAgIHsgcGF0aDogJy8nLCB2aWV3OiBJbmJveCB9LFxyXG4gICAgeyBwYXRoOiAnL215LWRheScsIHZpZXc6IE15RGF5IH0sXHJcbiAgICB7IHBhdGg6ICcvbmV4dC1zZXZlbi1kYXlzJywgdmlldzogTmV4dFdlZWsgfSxcclxuICAgIHsgcGF0aDogJy90YXNrcycsIHZpZXc6IEFsbE15VGFza3MgfSxcclxuICAgIHsgcGF0aDogJy9saXN0cy9hZGQnLCB2aWV3OiBBZGRMaXN0IH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvOmlkJywgdmlldzogTGlzdERldGFpbCB9LFxyXG4gIF0ubWFwKHJvdXRlID0+IHtcclxuICAgIHJvdXRlLnBhdGggPSBwcm9jZXNzLmVudi5CQVNFX1BBVEggKyByb3V0ZS5wYXRoO1xyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXRjaCBwYXRoIGZyb20gYmVnaW5uaW5nIHRvIGVuZFxyXG4gIC8vIGVzY2FwZSBmb3J3YXJkIHNsYXNoZXNcclxuICAvLyByZXBsYWNlIHBhdGggcGxhY2Vob2xkZXJzXHJcbiAgLy8gd2l0aCBjYXB0dXJlIGdyb3Vwc1xyXG4gIGNvbnN0IG1hdGNoZXM6IE1hdGNoW10gPSByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICByb3V0ZSxcclxuICAgIHJlc3VsdDogbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goXHJcbiAgICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgICAgJ14nICsgcm91dGUucGF0aC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJykucmVwbGFjZSgvOlxcdysvZywgJyguKyknKSArICckJ1xyXG4gICAgICApXHJcbiAgICApLFxyXG4gIH0pKTtcclxuXHJcbiAgbGV0IG1hdGNoID0gbWF0Y2hlcy5maW5kKG1hdGNoID0+IG1hdGNoLnJlc3VsdCAhPT0gbnVsbCk7XHJcblxyXG4gIGlmIChtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXRjaCA9IHtcclxuICAgICAgcm91dGU6IHtcclxuICAgICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICB2aWV3OiBOb3RGb3VuZCxcclxuICAgICAgfSxcclxuICAgICAgcmVzdWx0OiBbbG9jYXRpb24ucGF0aG5hbWVdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhdGhQYXJhbXMgPSBbLi4ubWF0Y2gucm91dGUucGF0aC5tYXRjaEFsbCgvOihcXHcrKS9nKV1cclxuICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdFsxXSlcclxuICAgIC5yZWR1Y2UoXHJcbiAgICAgIChwcmV2LCBjdXJyLCBpKSA9PiAoeyAuLi5wcmV2LCBbY3Vycl06IG1hdGNoLnJlc3VsdC5zbGljZSgxKVtpXSB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbWF0Y2gucm91dGUucGF0aC5zcGxpdCgnPycpWzFdO1xyXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID1cclxuICAgIHF1ZXJ5U3RyaW5nID09PSB1bmRlZmluZWRcclxuICAgICAgPyB7fVxyXG4gICAgICA6IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBjdXJyLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChwcmV2W2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICcgJykpKTtcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IHZpZXcgPSBtYXRjaC5yb3V0ZS52aWV3KHsgcGF0aFBhcmFtcywgcXVlcnlQYXJhbXMgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTCA9IHZpZXc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZSh1cmw6IHN0cmluZykge1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybCk7XHJcbiAgcm91dGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0ICcuL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHsgbmF2aWdhdGUsIHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5yb290LmlubmVySFRNTCA9IExheW91dCgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcm91dGVyKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAnY2xpY2snLFxyXG4gIChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBsaW5rID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xyXG4gICAgaWYgKGxpbmsgIT09IG51bGwgJiYgbGluay5tYXRjaGVzKCdbZGF0YS1saW5rXScpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbmF2aWdhdGUobGluay5ocmVmKTtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG5yb3V0ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9