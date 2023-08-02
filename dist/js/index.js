/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Link.ts":
/*!********************************!*\
  !*** ./src/components/Link.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link)
/* harmony export */ });
function Link({ linkText, href, styles, onMouseOver, onMouseOut, }) {
    // if href is an absolute one append
    // the envs base path.
    const hrefText = /^\/$/.test(href) ? "" + href : href;
    return /*html*/ `
    <a 
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


/***/ }),

/***/ "./src/components/Sidebar.ts":
/*!***********************************!*\
  !*** ./src/components/Sidebar.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/styles */ "./src/utils/styles.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./src/components/Link.ts");


function NavListItem({ linkText, href }) {
    const navListItemMouseOver = (e) => {
        e.style.backgroundColor = '#424242';
    };
    const navListItemMouseOut = (e) => {
        e.style.backgroundColor = '';
    };
    const navLinkStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
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
      ${(0,_Link__WEBPACK_IMPORTED_MODULE_1__["default"])({ linkText, href, styles: navLinkStyles })}
    </li>
  `;
}
function SideBar() {
    const asideStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        flex: '15%',
        backgroundColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    });
    const navStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem 0rem',
    });
    const navListTitleContainer = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0rem 1rem',
        color: '#ffffff',
    });
    const navListTitleStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        fontSize: '1.15rem',
        fontWeight: 'bold',
    });
    const addListLinkStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        fontSize: '1.25rem',
        fontWeight: 'bold',
    });
    const navListStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        display: 'flex',
        flexDirection: 'column',
    });
    const primaryNavLinkItems = [
        { linkText: 'My Day', href: '#' },
        { linkText: 'Next 7 Days', href: '#' },
        { linkText: 'All my tasks', href: '#' },
    ];
    const secondaryNavLinkItems = [{ linkText: 'Inbox', href: '#' }];
    return /*html*/ `
    <aside style="${asideStyles}">
      <nav style="${navStyles}">
        <ul style="${navListStyles}">
          ${primaryNavLinkItems
        .map(item => NavListItem({ linkText: item.linkText, href: item.href }))
        .join('')}
        </ul>
        <div>
          <div style="${navListTitleContainer}">
            <div style="${navListTitleStyles}">My lists</div>
            ${(0,_Link__WEBPACK_IMPORTED_MODULE_1__["default"])({
        linkText: '+',
        href: '/lists/add',
        styles: addListLinkStyles,
        onMouseOver: (e, t) => (t.style.color = '#424242'),
        onMouseOut: (e, t) => (t.style.color = ''),
    })}
          </div>
          <ul style="${navListStyles}">
          ${secondaryNavLinkItems
        .map(item => NavListItem({ linkText: item.linkText, href: item.href }))
        .join('')}
          </ul>
        </div
      </nav>
    </aside>`;
}


/***/ }),

/***/ "./src/layout.ts":
/*!***********************!*\
  !*** ./src/layout.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.ts");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/styles */ "./src/utils/styles.ts");


function Layout() {
    const containerStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.inlineStyles)({
        height: '100%',
        display: 'flex',
    });
    const mainStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.inlineStyles)({
        flex: '85%',
    });
    return /*html*/ `
    <div style="${containerStyles}">
      ${(0,_components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])()}
      <main id="app" style="${mainStyles}"></main>
    </div>
  `;
}


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigate: () => (/* binding */ navigate),
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _views_AddList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/AddList */ "./src/views/AddList.ts");
/* harmony import */ var _views_MyDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/MyDay */ "./src/views/MyDay.ts");
/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/NotFound */ "./src/views/NotFound.ts");



function router() {
    const routes = [
        { path: '/', view: _views_MyDay__WEBPACK_IMPORTED_MODULE_1__["default"] },
        { path: '/lists/add', view: _views_AddList__WEBPACK_IMPORTED_MODULE_0__["default"] },
    ].map(route => {
        route.path = "" + route.path;
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
                view: _views_NotFound__WEBPACK_IMPORTED_MODULE_2__["default"],
            },
            result: [location.pathname],
        };
    }
    const pathParams = [...match.route.path.matchAll(/:(\w+)/g)]
        .map(result => result[1])
        .reduce((prev, curr, i) => (prev[curr] = match.result.slice(1)[i]), {});
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
function navigate(url) {
    history.pushState(null, null, url);
    router();
}


/***/ }),

/***/ "./src/utils/styles.ts":
/*!*****************************!*\
  !*** ./src/utils/styles.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inlineStyles: () => (/* binding */ inlineStyles)
/* harmony export */ });
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


/***/ }),

/***/ "./src/views/AddList.ts":
/*!******************************!*\
  !*** ./src/views/AddList.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddList)
/* harmony export */ });
function AddList() {
    return /*html*/ `
    <h1>Add List</h1>
  `;
}


/***/ }),

/***/ "./src/views/MyDay.ts":
/*!****************************!*\
  !*** ./src/views/MyDay.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDay)
/* harmony export */ });
function MyDay() {
    return /*html*/ `
    <h1>My Day</h1>
  `;
}


/***/ }),

/***/ "./src/views/NotFound.ts":
/*!*******************************!*\
  !*** ./src/views/NotFound.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
function NotFound() {
    return /*html*/ `
    <h1>Not Found</h1>
  `;
}


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router.ts");


const root = document.getElementById('root');
root.innerHTML = (0,_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
window.addEventListener('popstate', _router__WEBPACK_IMPORTED_MODULE_1__.router);
document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link.matches('[data-link]')) {
        e.preventDefault();
        (0,_router__WEBPACK_IMPORTED_MODULE_1__.navigate)(link.href);
    }
});
(0,_router__WEBPACK_IMPORTED_MODULE_1__.router)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRZSxTQUFTLElBQUksQ0FBQyxFQUMzQixRQUFRLEVBQ1IsSUFBSSxFQUNKLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxHQUNBO0lBQ1Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRXpFLE9BQU8sUUFBUSxDQUFDOztjQUVKLFFBQVE7ZUFDUCxNQUFNO3NCQUNDLFdBQVc7cUJBQ1osVUFBVTs7O1FBR3ZCLFFBQVE7O0dBRWIsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUI4QztBQUNyQjtBQUUxQixTQUFTLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQXNDO0lBQ3pFLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFjLEVBQUUsRUFBRTtRQUM5QyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQWMsRUFBRSxFQUFFO1FBQzdDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRixNQUFNLGFBQWEsR0FBRywyREFBWSxDQUFDO1FBQ2pDLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsY0FBYztLQUN4QixDQUFDLENBQUM7SUFFSCxPQUFPLFFBQVEsQ0FBQzs7c0JBRUksb0JBQW9CO3FCQUNyQixtQkFBbUI7OztRQUdoQyxpREFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUM7O0dBRXBELENBQUM7QUFDSixDQUFDO0FBRWMsU0FBUyxPQUFPO0lBQzdCLE1BQU0sV0FBVyxHQUFHLDJEQUFZLENBQUM7UUFDL0IsSUFBSSxFQUFFLEtBQUs7UUFDWCxlQUFlLEVBQUUsU0FBUztRQUMxQixlQUFlLEVBQUUsbURBQW1EO0tBQ3JFLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxHQUFHLDJEQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsUUFBUTtRQUN2QixHQUFHLEVBQUUsTUFBTTtRQUNYLE9BQU8sRUFBRSxXQUFXO0tBQ3JCLENBQUMsQ0FBQztJQUVILE1BQU0scUJBQXFCLEdBQUcsMkRBQVksQ0FBQztRQUN6QyxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLEtBQUssRUFBRSxTQUFTO0tBQ2pCLENBQUMsQ0FBQztJQUVILE1BQU0sa0JBQWtCLEdBQUcsMkRBQVksQ0FBQztRQUN0QyxRQUFRLEVBQUUsU0FBUztRQUNuQixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDLENBQUM7SUFFSCxNQUFNLGlCQUFpQixHQUFHLDJEQUFZLENBQUM7UUFDckMsUUFBUSxFQUFFLFNBQVM7UUFDbkIsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxhQUFhLEdBQUcsMkRBQVksQ0FBQztRQUNqQyxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxRQUFRO0tBQ3hCLENBQUMsQ0FBQztJQUVILE1BQU0sbUJBQW1CLEdBQUc7UUFDMUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDakMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDdEMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7S0FDeEMsQ0FBQztJQUVGLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFakUsT0FBTyxRQUFRLENBQUM7b0JBQ0UsV0FBVztvQkFDWCxTQUFTO3FCQUNSLGFBQWE7WUFDdEIsbUJBQW1CO1NBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNWLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FDMUQ7U0FDQSxJQUFJLENBQUMsRUFBRSxDQUFDOzs7d0JBR0cscUJBQXFCOzBCQUNuQixrQkFBa0I7Y0FDOUIsaURBQUksQ0FBQztRQUNMLFFBQVEsRUFBRSxHQUFHO1FBQ2IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUNsRCxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUMzQyxDQUFDOzt1QkFFUyxhQUFhO1lBQ3hCLHFCQUFxQjtTQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVixXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQzFEO1NBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7OzthQUlSLENBQUM7QUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNHMEM7QUFDRztBQUUvQixTQUFTLE1BQU07SUFDNUIsTUFBTSxlQUFlLEdBQUcsMkRBQVksQ0FBQztRQUNuQyxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUMsQ0FBQztJQUVILE1BQU0sVUFBVSxHQUFHLDJEQUFZLENBQUM7UUFDOUIsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDLENBQUM7SUFFSCxPQUFPLFFBQVEsQ0FBQztrQkFDQSxlQUFlO1FBQ3pCLCtEQUFPLEVBQUU7OEJBQ2EsVUFBVTs7R0FFckMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnFDO0FBQ0o7QUFDTTtBQWlCakMsU0FBUyxNQUFNO0lBQ3BCLE1BQU0sTUFBTSxHQUFZO1FBQ3RCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsb0RBQUssRUFBRTtRQUMxQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLHNEQUFPLEVBQUU7S0FDdEMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDWixLQUFLLENBQUMsSUFBSSxHQUFHLEVBQXFCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNoRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBRUgsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLE1BQU0sT0FBTyxHQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLEtBQUs7UUFDTCxNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQzdCLElBQUksTUFBTSxDQUNSLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQ3RFLENBQ0Y7S0FDRixDQUFDLENBQUMsQ0FBQztJQUVKLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBRXpELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3pDLEtBQUssR0FBRztZQUNOLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSx1REFBUTthQUNmO1lBQ0QsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM1QixDQUFDO0tBQ0g7SUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QixNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUxRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsTUFBTSxXQUFXLEdBQ2YsV0FBVyxLQUFLLFNBQVM7UUFDdkIsQ0FBQyxDQUFDLEVBQUU7UUFDSixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJDLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM1QyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRCxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDbEQsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFDLEdBQVc7SUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sRUFBRSxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUVELFNBQVMsWUFBWSxDQUFDLGVBQXVCO0lBQzNDLE9BQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5RSxDQUFDO0FBRU0sU0FBUyxZQUFZLENBQUMsTUFBYztJQUN6QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQzNELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxPQUFPLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQztTQUM3RDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2RjLFNBQVMsT0FBTztJQUM3QixPQUFPLFFBQVEsQ0FBQzs7R0FFZixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSmMsU0FBUyxLQUFLO0lBQzNCLE9BQU8sUUFBUSxDQUFDOztHQUVmLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKYyxTQUFTLFFBQVE7SUFDOUIsT0FBTyxRQUFRLENBQUM7O0dBRWYsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7VUNKRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNjO0FBRTVDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxtREFBTSxFQUFFLENBQUM7QUFFMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSwyQ0FBTSxDQUFDLENBQUM7QUFFNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDNUIsT0FBTyxFQUNQLENBQUMsQ0FBa0MsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMvQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsaURBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQ0YsQ0FBQztBQUVGLCtDQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpbmsudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbGF5b3V0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3V0aWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvQWRkTGlzdC50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTXlEYXkudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL05vdEZvdW5kLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIExpbmtQcm9wcyA9IHtcclxuICBsaW5rVGV4dDogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbiAgb25Nb3VzZU92ZXI/OiAoZXZlbnQ6IEV2ZW50LCB0YXJnZXQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xyXG4gIG9uTW91c2VPdXQ/OiAoZXZlbnQ6IEV2ZW50LCB0YXJnZXQ6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayh7XHJcbiAgbGlua1RleHQsXHJcbiAgaHJlZixcclxuICBzdHlsZXMsXHJcbiAgb25Nb3VzZU92ZXIsXHJcbiAgb25Nb3VzZU91dCxcclxufTogTGlua1Byb3BzKSB7XHJcbiAgLy8gaWYgaHJlZiBpcyBhbiBhYnNvbHV0ZSBvbmUgYXBwZW5kXHJcbiAgLy8gdGhlIGVudnMgYmFzZSBwYXRoLlxyXG4gIGNvbnN0IGhyZWZUZXh0ID0gL15cXC8kLy50ZXN0KGhyZWYpID8gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgaHJlZiA6IGhyZWY7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8YSBcclxuICAgICAgaHJlZj1cIiR7aHJlZlRleHR9XCIgXHJcbiAgICAgIHN0eWxlPVwiJHtzdHlsZXN9XCJcclxuICAgICAgb25tb3VzZW92ZXI9XCIoJHtvbk1vdXNlT3Zlcn0pKGV2ZW50LCB0aGlzKVwiXHJcbiAgICAgIG9ubW91c2VvdXQ9XCIoJHtvbk1vdXNlT3V0fSkoZXZlbnQsIHRoaXMpXCJcclxuICAgICAgZGF0YS1saW5rXHJcbiAgICA+XHJcbiAgICAgICR7bGlua1RleHR9XHJcbiAgICA8L2E+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dCwgaHJlZiB9OiB7IGxpbmtUZXh0OiBzdHJpbmc7IGhyZWY6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgbmF2TGlzdEl0ZW1Nb3VzZU92ZXIgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0MjQyNDInO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5hdkxpc3RJdGVtTW91c2VPdXQgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8bGkgXHJcbiAgICAgIG9ubW91c2VvdmVyPVwiKCR7bmF2TGlzdEl0ZW1Nb3VzZU92ZXJ9KSh0aGlzKVwiIFxyXG4gICAgICBvbm1vdXNlb3V0PVwiKCR7bmF2TGlzdEl0ZW1Nb3VzZU91dH0pKHRoaXMpXCIgXHJcbiAgICAgIFxyXG4gICAgPlxyXG4gICAgICAke0xpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzOiBuYXZMaW5rU3R5bGVzIH0pfVxyXG4gICAgPC9saT5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xyXG4gIGNvbnN0IGFzaWRlU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZsZXg6ICcxNSUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOTNFOScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDA5M0U5IDAlLCAjODBEMEM3IDEwMCUpJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmF2U3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZ2FwOiAnMXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbSAwcmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdFRpdGxlQ29udGFpbmVyID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdFRpdGxlU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZvbnRTaXplOiAnMS4xNXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZExpc3RMaW5rU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkxpc3RTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHByaW1hcnlOYXZMaW5rSXRlbXMgPSBbXHJcbiAgICB7IGxpbmtUZXh0OiAnTXkgRGF5JywgaHJlZjogJyMnIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnTmV4dCA3IERheXMnLCBocmVmOiAnIycgfSxcclxuICAgIHsgbGlua1RleHQ6ICdBbGwgbXkgdGFza3MnLCBocmVmOiAnIycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzZWNvbmRhcnlOYXZMaW5rSXRlbXMgPSBbeyBsaW5rVGV4dDogJ0luYm94JywgaHJlZjogJyMnIH1dO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGFzaWRlIHN0eWxlPVwiJHthc2lkZVN0eWxlc31cIj5cclxuICAgICAgPG5hdiBzdHlsZT1cIiR7bmF2U3R5bGVzfVwiPlxyXG4gICAgICAgIDx1bCBzdHlsZT1cIiR7bmF2TGlzdFN0eWxlc31cIj5cclxuICAgICAgICAgICR7cHJpbWFyeU5hdkxpbmtJdGVtc1xyXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICBOYXZMaXN0SXRlbSh7IGxpbmtUZXh0OiBpdGVtLmxpbmtUZXh0LCBocmVmOiBpdGVtLmhyZWYgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIiR7bmF2TGlzdFRpdGxlQ29udGFpbmVyfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiJHtuYXZMaXN0VGl0bGVTdHlsZXN9XCI+TXkgbGlzdHM8L2Rpdj5cclxuICAgICAgICAgICAgJHtMaW5rKHtcclxuICAgICAgICAgICAgICBsaW5rVGV4dDogJysnLFxyXG4gICAgICAgICAgICAgIGhyZWY6ICcvbGlzdHMvYWRkJyxcclxuICAgICAgICAgICAgICBzdHlsZXM6IGFkZExpc3RMaW5rU3R5bGVzLFxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyOiAoZSwgdCkgPT4gKHQuc3R5bGUuY29sb3IgPSAnIzQyNDI0MicpLFxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdXQ6IChlLCB0KSA9PiAodC5zdHlsZS5jb2xvciA9ICcnKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBzdHlsZT1cIiR7bmF2TGlzdFN0eWxlc31cIj5cclxuICAgICAgICAgICR7c2Vjb25kYXJ5TmF2TGlua0l0ZW1zXHJcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgIE5hdkxpc3RJdGVtKHsgbGlua1RleHQ6IGl0ZW0ubGlua1RleHQsIGhyZWY6IGl0ZW0uaHJlZiB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXZcclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2FzaWRlPmA7XHJcbn1cclxuIiwiaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuL3V0aWxzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYWluU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZsZXg6ICc4NSUnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGRpdiBzdHlsZT1cIiR7Y29udGFpbmVyU3R5bGVzfVwiPlxyXG4gICAgICAke1NpZGVCYXIoKX1cclxuICAgICAgPG1haW4gaWQ9XCJhcHBcIiBzdHlsZT1cIiR7bWFpblN0eWxlc31cIj48L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcbiIsImltcG9ydCBBZGRMaXN0IGZyb20gJy4vdmlld3MvQWRkTGlzdCc7XHJcbmltcG9ydCBNeURheSBmcm9tICcuL3ZpZXdzL015RGF5JztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vdmlld3MvTm90Rm91bmQnO1xyXG5cclxudHlwZSBWaWV3UHJvcHMgPSB7XHJcbiAgcGF0aFBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBxdWVyeVBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufTtcclxuXHJcbnR5cGUgUm91dGUgPSB7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIHZpZXc6IChwcm9wczogVmlld1Byb3BzKSA9PiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIE1hdGNoID0ge1xyXG4gIHJvdXRlOiBSb3V0ZTtcclxuICByZXN1bHQ6IFJlZ0V4cE1hdGNoQXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyKCkge1xyXG4gIGNvbnN0IHJvdXRlczogUm91dGVbXSA9IFtcclxuICAgIHsgcGF0aDogJy8nLCB2aWV3OiBNeURheSB9LFxyXG4gICAgeyBwYXRoOiAnL2xpc3RzL2FkZCcsIHZpZXc6IEFkZExpc3QgfSxcclxuICBdLm1hcChyb3V0ZSA9PiB7XHJcbiAgICByb3V0ZS5wYXRoID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIICsgcm91dGUucGF0aDtcclxuICAgIHJldHVybiByb3V0ZTtcclxuICB9KTtcclxuXHJcbiAgLy8gbWF0Y2ggcGF0aCBmcm9tIGJlZ2lubmluZyB0byBlbmRcclxuICAvLyBlc2NhcGUgZm9yd2FyZCBzbGFzaGVzXHJcbiAgLy8gcmVwbGFjZSBwYXRoIHBsYWNlaG9sZGVyc1xyXG4gIC8vIHdpdGggY2FwdHVyZSBncm91cHNcclxuICBjb25zdCBtYXRjaGVzOiBNYXRjaFtdID0gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgcm91dGUsXHJcbiAgICByZXN1bHQ6IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKFxyXG4gICAgICBuZXcgUmVnRXhwKFxyXG4gICAgICAgICdeJyArIHJvdXRlLnBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzpcXHcrL2csICcoLispJykgKyAnJCdcclxuICAgICAgKVxyXG4gICAgKSxcclxuICB9KSk7XHJcblxyXG4gIGxldCBtYXRjaCA9IG1hdGNoZXMuZmluZChtYXRjaCA9PiBtYXRjaC5yZXN1bHQgIT09IG51bGwpO1xyXG5cclxuICBpZiAobWF0Y2ggPT09IG51bGwgfHwgbWF0Y2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF0Y2ggPSB7XHJcbiAgICAgIHJvdXRlOiB7XHJcbiAgICAgICAgcGF0aDogbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgdmlldzogTm90Rm91bmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3VsdDogW2xvY2F0aW9uLnBhdGhuYW1lXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXRoUGFyYW1zID0gWy4uLm1hdGNoLnJvdXRlLnBhdGgubWF0Y2hBbGwoLzooXFx3KykvZyldXHJcbiAgICAubWFwKHJlc3VsdCA9PiByZXN1bHRbMV0pXHJcbiAgICAucmVkdWNlKChwcmV2LCBjdXJyLCBpKSA9PiAocHJldltjdXJyXSA9IG1hdGNoLnJlc3VsdC5zbGljZSgxKVtpXSksIHt9KTtcclxuXHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBtYXRjaC5yb3V0ZS5wYXRoLnNwbGl0KCc/JylbMV07XHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPVxyXG4gICAgcXVlcnlTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IHt9XHJcbiAgICAgIDogcXVlcnlTdHJpbmcuc3BsaXQoJyYnKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGN1cnIuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gKHByZXZba2V5XSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZS5yZXBsYWNlKC9cXCsvZywgJyAnKSkpO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgdmlldyA9IG1hdGNoLnJvdXRlLnZpZXcoeyBwYXRoUGFyYW1zLCBxdWVyeVBhcmFtcyB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MID0gdmlldztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKHVybDogc3RyaW5nKSB7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdXJsKTtcclxuICByb3V0ZXIoKTtcclxufVxyXG4iLCJmdW5jdGlvbiBjYW1lbFRvS2ViYWIoY2FtZWxDYXNlU3RyaW5nOiBzdHJpbmcpIHtcclxuICByZXR1cm4gY2FtZWxDYXNlU3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmxpbmVTdHlsZXMoc3R5bGVzOiBvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoKGlubGluZVN0eWxlcywgcHJvcGVydHkpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcclxuXHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gYCR7aW5saW5lU3R5bGVzfSR7Y2FtZWxUb0tlYmFiKHByb3BlcnR5KX06JHt2YWx1ZX07YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5saW5lU3R5bGVzO1xyXG4gIH0sICcnKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRMaXN0KCkge1xyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8aDE+QWRkIExpc3Q8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlEYXkoKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5NeSBEYXk8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxyXG4gIGA7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHsgbmF2aWdhdGUsIHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5yb290LmlubmVySFRNTCA9IExheW91dCgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcm91dGVyKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAnY2xpY2snLFxyXG4gIChlOiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBsaW5rID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xyXG4gICAgaWYgKGxpbmsubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG5hdmlnYXRlKGxpbmsuaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxucm91dGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==