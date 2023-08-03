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
    const hrefText = /^\/$/.test(href) ? "/theOdinProject-Todo-List" + href : href;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2xELENBQUM7QUFFTSxTQUFTLGVBQVEsQ0FBQyxHQUFXO0lBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxNQUFNLEVBQUUsQ0FBQztBQUNYLENBQUM7OztBQ3pGMkI7QUFDRTtBQUNjO0FBRTVDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUUxQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQzVCLE9BQU8sRUFDUCxDQUFDLENBQWtDLEVBQUUsRUFBRTtJQUNyQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQjtBQUNILENBQUMsQ0FDRixDQUFDO0FBRUYsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3R5bGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpbmsudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2RhdGEvY29udGV4dC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc2VydmljZXMvbGlzdFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2TGlzdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTXlMaXN0cy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvaWQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVscy9saXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRMaXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BbGxNeVRhc2tzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9JbmJveC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTGlzdERldGFpbC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTXlEYXkudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL05leHRXZWVrLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9Ob3RGb3VuZC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCRUdJTiBSRVNFVFMgKi9cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLyogRU5EIFJFU0VUUyAqL1xyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG4jcm9vdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEJFR0lOIFJFU0VUUyAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgUkVTRVRTICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG4jcm9vdCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImZ1bmN0aW9uIGNhbWVsVG9LZWJhYihjYW1lbENhc2VTdHJpbmc6IHN0cmluZykge1xyXG4gIHJldHVybiBjYW1lbENhc2VTdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlubGluZVN0eWxlcyhzdHlsZXM6IG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZSgoaW5saW5lU3R5bGVzLCBwcm9wZXJ0eSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtpbmxpbmVTdHlsZXN9JHtjYW1lbFRvS2ViYWIocHJvcGVydHkpfToke3ZhbHVlfTtgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmxpbmVTdHlsZXM7XHJcbiAgfSwgJycpO1xyXG59XHJcbiIsInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxuICBvbk1vdXNlT3Zlcj86IChldmVudDogRXZlbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbiAgb25Nb3VzZU91dD86IChldmVudDogRXZlbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHtcclxuICBsaW5rVGV4dCxcclxuICBocmVmLFxyXG4gIHN0eWxlcyxcclxuICBvbk1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgIHJldHVybjtcclxuICB9LFxyXG4gIG9uTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfSxcclxufTogTGlua1Byb3BzKSB7XHJcbiAgLy8gaWYgaHJlZiBpcyBhbiBhYnNvbHV0ZSBvbmUgYXBwZW5kXHJcbiAgLy8gdGhlIGVudnMgYmFzZSBwYXRoLlxyXG4gIGNvbnN0IGhyZWZUZXh0ID0gL15cXC8kLy50ZXN0KGhyZWYpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgaHJlZiA6IGhyZWY7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8YVxyXG4gICAgICB0aXRsZT1cIiR7bGlua1RleHR9XCJcclxuICAgICAgaHJlZj1cIiR7aHJlZlRleHR9XCIgXHJcbiAgICAgIHN0eWxlPVwiJHtzdHlsZXN9XCJcclxuICAgICAgb25tb3VzZW92ZXI9XCIoJHtvbk1vdXNlT3Zlcn0pKGV2ZW50LCB0aGlzKVwiXHJcbiAgICAgIG9ubW91c2VvdXQ9XCIoJHtvbk1vdXNlT3V0fSkoZXZlbnQsIHRoaXMpXCJcclxuICAgICAgZGF0YS1saW5rXHJcbiAgICA+XHJcbiAgICAgICR7bGlua1RleHR9XHJcbiAgICA8L2E+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL2xpc3QnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoKSB7XHJcbiAgY29uc3QgTElTVFNfS0VZID0gJ2xpc3RzJztcclxuICBjb25zdCBUT0RPU19LRVkgPSAndG9kb3MnO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJdGVtKHsga2V5IH06IHsga2V5OiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRJdGVtKHsga2V5LCBpdGVtIH06IHsga2V5OiBzdHJpbmc7IGl0ZW06IG9iamVjdCB9KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIGxldCBfbGlzdHM6IExpc3RbXSA9IGdldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSB9KTtcclxuICBsZXQgX3RvZG9zOiBUb2RvW10gPSBnZXRJdGVtKHsga2V5OiBUT0RPU19LRVkgfSk7XHJcblxyXG4gIGlmIChfbGlzdHMgPT0gbnVsbCkge1xyXG4gICAgc2V0SXRlbSh7IGtleTogTElTVFNfS0VZLCBpdGVtOiBbXSB9KTtcclxuICAgIF9saXN0cyA9IGdldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSB9KTtcclxuICB9XHJcblxyXG4gIGlmIChfdG9kb3MgPT0gbnVsbCkge1xyXG4gICAgc2V0SXRlbSh7IGtleTogVE9ET1NfS0VZLCBpdGVtOiBbXSB9KTtcclxuICAgIF90b2RvcyA9IGdldEl0ZW0oeyBrZXk6IFRPRE9TX0tFWSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgbGlzdHMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiAoeyBsaXN0IH06IHsgbGlzdDogTGlzdCB9KSA9PiB7XHJcbiAgICAgICAgICBfbGlzdHMucHVzaChsaXN0KTtcclxuICAgICAgICAgIHNldEl0ZW0oeyBrZXk6IExJU1RTX0tFWSwgaXRlbTogX2xpc3RzIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE9uZTogKHByZWRpY2F0ZTogKGxpc3Q6IExpc3QpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIHJldHVybiBfbGlzdHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmluZE1hbnk6IChwcmVkaWNhdGU6IChsaXN0OiBMaXN0KSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gX2xpc3RzLmZpbHRlcihwcmVkaWNhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0IHRvZG9zKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogKCkgPT4gbnVsbCxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb250ZXh0IH0gZnJvbSAnLi4vZGF0YS9jb250ZXh0JztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL21vZGVscy9saXN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0U2VydmljZSgpIHtcclxuICBjb25zdCBfY29udGV4dCA9IGNvbnRleHQoKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkTGlzdCh7IGxpc3QgfTogeyBsaXN0OiBMaXN0IH0pIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nTGlzdCA9IF9jb250ZXh0Lmxpc3RzLmZpbmRPbmUobCA9PiBsLm5hbWUgPT09IGxpc3QubmFtZSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nTGlzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBBIGxpc3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGUgbmFtZSAke2xpc3QubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBfY29udGV4dC5saXN0cy5hZGQoeyBsaXN0IH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QnlJZCh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gX2NvbnRleHQubGlzdHMuZmluZE9uZShsID0+IGwuaWQgPT09IGlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFsbExpc3RzKCkge1xyXG4gICAgcmV0dXJuIF9jb250ZXh0Lmxpc3RzLmZpbmRNYW55KGwgPT4gbCAhPT0gbnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkTGlzdCxcclxuICAgIGdldEJ5SWQsXHJcbiAgICBnZXRBbGxMaXN0cyxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaXN0SXRlbSh7XHJcbiAgbGlua1RleHQsXHJcbiAgaHJlZixcclxufToge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgbmF2TGlzdEl0ZW1Nb3VzZU92ZXIgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0MjQyNDInO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5hdkxpc3RJdGVtTW91c2VPdXQgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDFyZW0nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGxpIFxyXG4gICAgICBvbm1vdXNlb3Zlcj1cIigke25hdkxpc3RJdGVtTW91c2VPdmVyfSkodGhpcylcIiBcclxuICAgICAgb25tb3VzZW91dD1cIigke25hdkxpc3RJdGVtTW91c2VPdXR9KSh0aGlzKVwiIFxyXG4gICAgICBcclxuICAgID5cclxuICAgICAgJHtMaW5rKHsgbGlua1RleHQsIGhyZWYsIHN0eWxlczogbmF2TGlua1N0eWxlcyB9KX1cclxuICAgIDwvbGk+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJy4vTmF2TGlzdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlMaXN0cygpIHtcclxuICBjb25zdCBteUxpc3RTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG15TGlzdFRpdGxlQ29udGFpbmVyID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbXlMaXN0VGl0bGVTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZm9udFNpemU6ICcxLjE1cmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWRkTGlzdExpbmtTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyTmF2TGlua0l0ZW1zKCkge1xyXG4gICAgY29uc3QgeyBnZXRBbGxMaXN0cyB9ID0gbGlzdFNlcnZpY2UoKTtcclxuICAgIGNvbnN0IGFsbExpc3RzID0gZ2V0QWxsTGlzdHMoKTtcclxuICAgIGNvbnN0IG15TGlzdEl0ZW1zID0gYWxsTGlzdHMubWFwKGxpc3QgPT4gKHtcclxuICAgICAgbGlua1RleHQ6IGxpc3QubmFtZSxcclxuICAgICAgaHJlZjogYC9saXN0cy8ke2xpc3QuaWR9YCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4gbXlMaXN0SXRlbXNcclxuICAgICAgLm1hcChpdGVtID0+IE5hdkxpc3RJdGVtKHsgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsIGhyZWY6IGl0ZW0uaHJlZiB9KSlcclxuICAgICAgLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgTVlfTElTVFNfSUQgPSAnbXlMaXN0cyc7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RBZGRlZCcsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE1ZX0xJU1RTX0lEKS5pbm5lckhUTUwgPSByZW5kZXJOYXZMaW5rSXRlbXMoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxkaXYgc3R5bGU9XCIke215TGlzdFRpdGxlQ29udGFpbmVyfVwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwiJHtteUxpc3RUaXRsZVN0eWxlc31cIj5NeSBsaXN0czwvZGl2PlxyXG4gICAgICAke0xpbmsoe1xyXG4gICAgICAgIGxpbmtUZXh0OiAnKycsXHJcbiAgICAgICAgaHJlZjogJy9saXN0cy9hZGQnLFxyXG4gICAgICAgIHN0eWxlczogYWRkTGlzdExpbmtTdHlsZXMsXHJcbiAgICAgICAgb25Nb3VzZU92ZXI6IChlLCB0KSA9PiAodC5zdHlsZS5jb2xvciA9ICcjNDI0MjQyJyksXHJcbiAgICAgICAgb25Nb3VzZU91dDogKGUsIHQpID0+ICh0LnN0eWxlLmNvbG9yID0gJycpLFxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGlkPVwiJHtNWV9MSVNUU19JRH1cIiBzdHlsZT1cIiR7bXlMaXN0U3R5bGVzfVwiPlxyXG4gICAgICAke3JlbmRlck5hdkxpbmtJdGVtcygpfVxyXG4gICAgPC91bD5cclxuICBgO1xyXG59XHJcbiIsImltcG9ydCB7IGlubGluZVN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XHJcbmltcG9ydCBNeUxpc3RzIGZyb20gJy4vTXlMaXN0cyc7XHJcblxyXG5mdW5jdGlvbiBOYXZMaXN0SXRlbSh7IGxpbmtUZXh0LCBocmVmIH06IHsgbGlua1RleHQ6IHN0cmluZzsgaHJlZjogc3RyaW5nIH0pIHtcclxuICBjb25zdCBuYXZMaXN0SXRlbU1vdXNlT3ZlciA9IChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQyNDI0Mic7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdEl0ZW1Nb3VzZU91dCA9IChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICB9O1xyXG5cclxuICBjb25zdCBuYXZMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAxcmVtJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxsaSBcclxuICAgICAgb25tb3VzZW92ZXI9XCIoJHtuYXZMaXN0SXRlbU1vdXNlT3Zlcn0pKHRoaXMpXCIgXHJcbiAgICAgIG9ubW91c2VvdXQ9XCIoJHtuYXZMaXN0SXRlbU1vdXNlT3V0fSkodGhpcylcIiBcclxuICAgICAgXHJcbiAgICA+XHJcbiAgICAgICR7TGluayh7IGxpbmtUZXh0LCBocmVmLCBzdHlsZXM6IG5hdkxpbmtTdHlsZXMgfSl9XHJcbiAgICA8L2xpPlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXIoKSB7XHJcbiAgY29uc3QgYXNpZGVTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5M0U5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM4MEQwQzcgMTAwJSknLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuYXZTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICcxcmVtJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtIDByZW0nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuYXZMaXN0U3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHNldmVuRGF5c0xhdGVyID0gbmV3IERhdGUobm93KTtcclxuICBzZXZlbkRheXNMYXRlci5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyA3KTtcclxuXHJcbiAgY29uc3QgcHJpbWFyeU5hdkxpbmtJdGVtcyA9IFtcclxuICAgIHsgbGlua1RleHQ6ICdJbmJveCcsIGhyZWY6ICcvJyB9LFxyXG4gICAgeyBsaW5rVGV4dDogJ015IERheScsIGhyZWY6ICcvbXktZGF5JyB9LFxyXG4gICAge1xyXG4gICAgICBsaW5rVGV4dDogJ05leHQgNyBEYXlzJyxcclxuICAgICAgaHJlZjogYC9uZXh0LXNldmVuLWRheXNgLFxyXG4gICAgfSxcclxuICAgIHsgbGlua1RleHQ6ICdBbGwgbXkgdGFza3MnLCBocmVmOiAnL3Rhc2tzJyB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8YXNpZGUgc3R5bGU9XCIke2FzaWRlU3R5bGVzfVwiPlxyXG4gICAgICA8bmF2IHN0eWxlPVwiJHtuYXZTdHlsZXN9XCI+XHJcbiAgICAgICAgPHVsIHN0eWxlPVwiJHtuYXZMaXN0U3R5bGVzfVwiPlxyXG4gICAgICAgICAgJHtwcmltYXJ5TmF2TGlua0l0ZW1zXHJcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgIE5hdkxpc3RJdGVtKHsgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsIGhyZWY6IGl0ZW0uaHJlZiB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJteUxpc3RzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAke015TGlzdHMoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2FzaWRlPmA7XHJcbn1cclxuIiwiaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYWluU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZsZXg6ICcxJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxkaXYgc3R5bGU9XCIke2NvbnRhaW5lclN0eWxlc31cIj5cclxuICAgICAgJHtTaWRlQmFyKCl9XHJcbiAgICAgIDxtYWluIGlkPVwiYXBwXCIgc3R5bGU9XCIke21haW5TdHlsZXN9XCI+PC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xyXG4gIHJldHVybiB1dWlkKCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yV2hpdGVTcGFjZSh7IHN0ciB9OiB7IHN0cjogc3RyaW5nIH0pIHtcclxuICByZXR1cm4gIXN0ciB8fCBzdHIudHJpbSgpID09PSAnJztcclxufVxyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xyXG5pbXBvcnQgeyBpc051bGxPcldoaXRlU3BhY2UgfSBmcm9tICcuLi91dGlscy9zdHJpbmdzJztcclxuXHJcbnR5cGUgTGlzdFBhcmFtcyA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBMaXN0ID0geyBpZDogc3RyaW5nIH0gJiBMaXN0UGFyYW1zO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoeyBuYW1lIH06IExpc3RQYXJhbXMpOiBMaXN0IHtcclxuICBmdW5jdGlvbiB2YWxpZGF0ZU5hbWUoeyBuYW1lIH06IHsgbmFtZTogc3RyaW5nIH0pIHtcclxuICAgIGlmIChpc051bGxPcldoaXRlU3BhY2UoeyBzdHI6IG5hbWUgfSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hbWUubGVuZ3RoID4gMTUwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTUwIGNoYXJhY3RlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmFtZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IF9pZCA9IGdlbmVyYXRlSWQoKTtcclxuICBsZXQgX25hbWUgPSB2YWxpZGF0ZU5hbWUoeyBuYW1lIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gX2lkO1xyXG4gICAgfSxcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gX25hbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0IG5hbWUobmFtZSkge1xyXG4gICAgICBfbmFtZSA9IHZhbGlkYXRlTmFtZSh7IG5hbWUgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gJy4uL21vZGVscy9saXN0JztcclxuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZExpc3QoKSB7XHJcbiAgY29uc3QgRk9STV9JRCA9ICdhZGRMaXN0Rm9ybSc7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbENsaWNrKCkge1xyXG4gICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50OiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRm9ybUVsZW1lbnQgfSkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCAhPT0gRk9STV9JRCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpKTtcclxuXHJcbiAgICBpZiAobmFtZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICB0aHJvdyBFcnJvcignbmFtZSBpcyBleHBlY3RlZCB0byBiZSBhIHN0cmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KHsgbmFtZSB9KTtcclxuICAgICAgY29uc3QgeyBhZGRMaXN0IH0gPSBsaXN0U2VydmljZSgpO1xyXG4gICAgICBhZGRMaXN0KHsgbGlzdCB9KTtcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2xpc3RBZGRlZCcpKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbiAgICAgIG5hdmlnYXRlKGAvbGlzdHMvJHtsaXN0LmlkfWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8Zm9ybSBpZD1cIiR7Rk9STV9JRH1cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIigke2hhbmRsZUNhbmNlbENsaWNrfSkoKVwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+ICAgICBcclxuICAgIDwvZm9ybT5cclxuICBgO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbE15VGFza3MoKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5BbGwgTXkgVGFza3M8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5ib3goKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5JbmJveDwvaDE+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWV3UHJvcHMgfSBmcm9tICcuLi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpc3RTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3REZXRhaWwocHJvcHM6IFZpZXdQcm9wcykge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHByb3BzLnBhdGhQYXJhbXM7XHJcbiAgY29uc3QgeyBnZXRCeUlkIH0gPSBsaXN0U2VydmljZSgpO1xyXG4gIGNvbnN0IGxpc3QgPSBnZXRCeUlkKHsgaWQgfSk7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8aDE+JHtsaXN0Lm5hbWV9PC9oMT5cclxuICBgO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RGF5KCkge1xyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8aDE+TXkgRGF5PC9oMT5cclxuICBgO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5leHRXZWVrKCkge1xyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8aDE+TmV4dCA3IERheXM8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiaW1wb3J0IEFkZExpc3QgZnJvbSAnLi92aWV3cy9BZGRMaXN0JztcclxuaW1wb3J0IEFsbE15VGFza3MgZnJvbSAnLi92aWV3cy9BbGxNeVRhc2tzJztcclxuaW1wb3J0IEluYm94IGZyb20gJy4vdmlld3MvSW5ib3gnO1xyXG5pbXBvcnQgTGlzdERldGFpbCBmcm9tICcuL3ZpZXdzL0xpc3REZXRhaWwnO1xyXG5pbXBvcnQgTXlEYXkgZnJvbSAnLi92aWV3cy9NeURheSc7XHJcbmltcG9ydCBOZXh0V2VlayBmcm9tICcuL3ZpZXdzL05leHRXZWVrJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vdmlld3MvTm90Rm91bmQnO1xyXG5cclxuZXhwb3J0IHR5cGUgVmlld1Byb3BzID0ge1xyXG4gIHBhdGhQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgcXVlcnlQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn07XHJcblxyXG50eXBlIFJvdXRlID0ge1xyXG4gIHBhdGg6IHN0cmluZztcclxuICB2aWV3OiAocHJvcHM6IFZpZXdQcm9wcykgPT4gc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBNYXRjaCA9IHtcclxuICByb3V0ZTogUm91dGU7XHJcbiAgcmVzdWx0OiBSZWdFeHBNYXRjaEFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlcigpIHtcclxuICBjb25zdCByb3V0ZXM6IFJvdXRlW10gPSBbXHJcbiAgICB7IHBhdGg6ICcvJywgdmlldzogSW5ib3ggfSxcclxuICAgIHsgcGF0aDogJy9teS1kYXknLCB2aWV3OiBNeURheSB9LFxyXG4gICAgeyBwYXRoOiAnL25leHQtc2V2ZW4tZGF5cycsIHZpZXc6IE5leHRXZWVrIH0sXHJcbiAgICB7IHBhdGg6ICcvdGFza3MnLCB2aWV3OiBBbGxNeVRhc2tzIH0sXHJcbiAgICB7IHBhdGg6ICcvbGlzdHMvYWRkJywgdmlldzogQWRkTGlzdCB9LFxyXG4gICAgeyBwYXRoOiAnL2xpc3RzLzppZCcsIHZpZXc6IExpc3REZXRhaWwgfSxcclxuICBdLm1hcChyb3V0ZSA9PiB7XHJcbiAgICByb3V0ZS5wYXRoID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgcm91dGUucGF0aDtcclxuICAgIHJldHVybiByb3V0ZTtcclxuICB9KTtcclxuXHJcbiAgLy8gbWF0Y2ggcGF0aCBmcm9tIGJlZ2lubmluZyB0byBlbmRcclxuICAvLyBlc2NhcGUgZm9yd2FyZCBzbGFzaGVzXHJcbiAgLy8gcmVwbGFjZSBwYXRoIHBsYWNlaG9sZGVyc1xyXG4gIC8vIHdpdGggY2FwdHVyZSBncm91cHNcclxuICBjb25zdCBtYXRjaGVzOiBNYXRjaFtdID0gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgcm91dGUsXHJcbiAgICByZXN1bHQ6IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKFxyXG4gICAgICBuZXcgUmVnRXhwKFxyXG4gICAgICAgICdeJyArIHJvdXRlLnBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzpcXHcrL2csICcoLispJykgKyAnJCdcclxuICAgICAgKVxyXG4gICAgKSxcclxuICB9KSk7XHJcblxyXG4gIGxldCBtYXRjaCA9IG1hdGNoZXMuZmluZChtYXRjaCA9PiBtYXRjaC5yZXN1bHQgIT09IG51bGwpO1xyXG5cclxuICBpZiAobWF0Y2ggPT09IG51bGwgfHwgbWF0Y2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF0Y2ggPSB7XHJcbiAgICAgIHJvdXRlOiB7XHJcbiAgICAgICAgcGF0aDogbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgdmlldzogTm90Rm91bmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3VsdDogW2xvY2F0aW9uLnBhdGhuYW1lXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXRoUGFyYW1zID0gWy4uLm1hdGNoLnJvdXRlLnBhdGgubWF0Y2hBbGwoLzooXFx3KykvZyldXHJcbiAgICAubWFwKHJlc3VsdCA9PiByZXN1bHRbMV0pXHJcbiAgICAucmVkdWNlKFxyXG4gICAgICAocHJldiwgY3VyciwgaSkgPT4gKHsgLi4ucHJldiwgW2N1cnJdOiBtYXRjaC5yZXN1bHQuc2xpY2UoMSlbaV0gfSksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IG1hdGNoLnJvdXRlLnBhdGguc3BsaXQoJz8nKVsxXTtcclxuICBjb25zdCBxdWVyeVBhcmFtcyA9XHJcbiAgICBxdWVyeVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8ge31cclxuICAgICAgOiBxdWVyeVN0cmluZy5zcGxpdCgnJicpLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gY3Vyci5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAocHJldltrZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKSk7XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICBjb25zdCB2aWV3ID0gbWF0Y2gucm91dGUudmlldyh7IHBhdGhQYXJhbXMsIHF1ZXJ5UGFyYW1zIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUwgPSB2aWV3O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUodXJsOiBzdHJpbmcpIHtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xyXG4gIHJvdXRlcigpO1xyXG59XHJcbiIsImltcG9ydCAnLi9hc3NldHMvaW5kZXguY3NzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IG5hdmlnYXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxucm9vdC5pbm5lckhUTUwgPSBMYXlvdXQoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgJ2NsaWNrJyxcclxuICAoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcclxuICAgIGlmIChsaW5rICE9PSBudWxsICYmIGxpbmsubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG5hdmlnYXRlKGxpbmsuaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxucm91dGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==