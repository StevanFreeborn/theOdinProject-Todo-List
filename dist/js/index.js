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
function Link({ linkText, href, styles }) {
    return /*html*/ `
    <a href="${"" + href}" style="${styles}" data-link>
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
    const navListTitleStyles = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.inlineStyles)({
        padding: '0rem 1rem',
        fontSize: '1.15rem',
        color: '#ffffff',
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
          <div style="${navListTitleStyles}">My lists</div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QixPQUFPLEVBQ1AsQ0FBQyxDQUFrQyxFQUFFLEVBQUU7SUFDckMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQy9CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixpREFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQjtBQUNILENBQUMsQ0FDRixDQUFDO0FBRUYsK0NBQU0sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGluay50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdXRpbHMvc3R5bGVzLnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9BZGRMaXN0LnRzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy92aWV3cy9NeURheS50cyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdmlld3MvTm90Rm91bmQudHMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgTGlua1Byb3BzID0ge1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlczogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayh7IGxpbmtUZXh0LCBocmVmLCBzdHlsZXMgfTogTGlua1Byb3BzKSB7XHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxhIGhyZWY9XCIke3Byb2Nlc3MuZW52LkJBU0VfUEFUSCArIGhyZWZ9XCIgc3R5bGU9XCIke3N0eWxlc31cIiBkYXRhLWxpbms+XHJcbiAgICAgICR7bGlua1RleHR9XHJcbiAgICA8L2E+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBpbmxpbmVTdHlsZXMgfSBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTmF2TGlzdEl0ZW0oeyBsaW5rVGV4dCwgaHJlZiB9OiB7IGxpbmtUZXh0OiBzdHJpbmc7IGhyZWY6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgbmF2TGlzdEl0ZW1Nb3VzZU92ZXIgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0MjQyNDInO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5hdkxpc3RJdGVtTW91c2VPdXQgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2TGlua1N0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMXJlbScsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8bGkgXHJcbiAgICAgIG9ubW91c2VvdmVyPVwiKCR7bmF2TGlzdEl0ZW1Nb3VzZU92ZXJ9KSh0aGlzKVwiIFxyXG4gICAgICBvbm1vdXNlb3V0PVwiKCR7bmF2TGlzdEl0ZW1Nb3VzZU91dH0pKHRoaXMpXCIgXHJcbiAgICAgIFxyXG4gICAgPlxyXG4gICAgICAke0xpbmsoeyBsaW5rVGV4dCwgaHJlZiwgc3R5bGVzOiBuYXZMaW5rU3R5bGVzIH0pfVxyXG4gICAgPC9saT5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xyXG4gIGNvbnN0IGFzaWRlU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGZsZXg6ICcxNSUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOTNFOScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDA5M0U5IDAlLCAjODBEMEM3IDEwMCUpJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmF2U3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZ2FwOiAnMXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbSAwcmVtJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdFRpdGxlU3R5bGVzID0gaW5saW5lU3R5bGVzKHtcclxuICAgIHBhZGRpbmc6ICcwcmVtIDFyZW0nLFxyXG4gICAgZm9udFNpemU6ICcxLjE1cmVtJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5hdkxpc3RTdHlsZXMgPSBpbmxpbmVTdHlsZXMoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHByaW1hcnlOYXZMaW5rSXRlbXMgPSBbXHJcbiAgICB7IGxpbmtUZXh0OiAnTXkgRGF5JywgaHJlZjogJyMnIH0sXHJcbiAgICB7IGxpbmtUZXh0OiAnTmV4dCA3IERheXMnLCBocmVmOiAnIycgfSxcclxuICAgIHsgbGlua1RleHQ6ICdBbGwgbXkgdGFza3MnLCBocmVmOiAnIycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzZWNvbmRhcnlOYXZMaW5rSXRlbXMgPSBbeyBsaW5rVGV4dDogJ0luYm94JywgaHJlZjogJyMnIH1dO1xyXG5cclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGFzaWRlIHN0eWxlPVwiJHthc2lkZVN0eWxlc31cIj5cclxuICAgICAgPG5hdiBzdHlsZT1cIiR7bmF2U3R5bGVzfVwiPlxyXG4gICAgICAgIDx1bCBzdHlsZT1cIiR7bmF2TGlzdFN0eWxlc31cIj5cclxuICAgICAgICAgICR7cHJpbWFyeU5hdkxpbmtJdGVtc1xyXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICBOYXZMaXN0SXRlbSh7IGxpbmtUZXh0OiBpdGVtLmxpbmtUZXh0LCBocmVmOiBpdGVtLmhyZWYgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIiR7bmF2TGlzdFRpdGxlU3R5bGVzfVwiPk15IGxpc3RzPC9kaXY+XHJcbiAgICAgICAgICA8dWwgc3R5bGU9XCIke25hdkxpc3RTdHlsZXN9XCI+XHJcbiAgICAgICAgICAke3NlY29uZGFyeU5hdkxpbmtJdGVtc1xyXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICBOYXZMaXN0SXRlbSh7IGxpbmtUZXh0OiBpdGVtLmxpbmtUZXh0LCBocmVmOiBpdGVtLmhyZWYgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9hc2lkZT5gO1xyXG59XHJcbiIsImltcG9ydCBTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHsgaW5saW5lU3R5bGVzIH0gZnJvbSAnLi91dGlscy9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWFpblN0eWxlcyA9IGlubGluZVN0eWxlcyh7XHJcbiAgICBmbGV4OiAnODUlJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIC8qaHRtbCovIGBcclxuICAgIDxkaXYgc3R5bGU9XCIke2NvbnRhaW5lclN0eWxlc31cIj5cclxuICAgICAgJHtTaWRlQmFyKCl9XHJcbiAgICAgIDxtYWluIGlkPVwiYXBwXCIgc3R5bGU9XCIke21haW5TdHlsZXN9XCI+PC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgQWRkTGlzdCBmcm9tICcuL3ZpZXdzL0FkZExpc3QnO1xyXG5pbXBvcnQgTXlEYXkgZnJvbSAnLi92aWV3cy9NeURheSc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL3ZpZXdzL05vdEZvdW5kJztcclxuXHJcbnR5cGUgVmlld1Byb3BzID0ge1xyXG4gIHBhdGhQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgcXVlcnlQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn07XHJcblxyXG50eXBlIFJvdXRlID0ge1xyXG4gIHBhdGg6IHN0cmluZztcclxuICB2aWV3OiAocHJvcHM6IFZpZXdQcm9wcykgPT4gc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBNYXRjaCA9IHtcclxuICByb3V0ZTogUm91dGU7XHJcbiAgcmVzdWx0OiBSZWdFeHBNYXRjaEFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlcigpIHtcclxuICBjb25zdCByb3V0ZXM6IFJvdXRlW10gPSBbXHJcbiAgICB7IHBhdGg6ICcvJywgdmlldzogTXlEYXkgfSxcclxuICAgIHsgcGF0aDogJy9saXN0cy9hZGQnLCB2aWV3OiBBZGRMaXN0IH0sXHJcbiAgXS5tYXAocm91dGUgPT4ge1xyXG4gICAgcm91dGUucGF0aCA9IHByb2Nlc3MuZW52LkJBU0VfUEFUSCArIHJvdXRlLnBhdGg7XHJcbiAgICByZXR1cm4gcm91dGU7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG1hdGNoIHBhdGggZnJvbSBiZWdpbm5pbmcgdG8gZW5kXHJcbiAgLy8gZXNjYXBlIGZvcndhcmQgc2xhc2hlc1xyXG4gIC8vIHJlcGxhY2UgcGF0aCBwbGFjZWhvbGRlcnNcclxuICAvLyB3aXRoIGNhcHR1cmUgZ3JvdXBzXHJcbiAgY29uc3QgbWF0Y2hlczogTWF0Y2hbXSA9IHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgIHJvdXRlLFxyXG4gICAgcmVzdWx0OiBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaChcclxuICAgICAgbmV3IFJlZ0V4cChcclxuICAgICAgICAnXicgKyByb3V0ZS5wYXRoLnJlcGxhY2UoL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC86XFx3Ky9nLCAnKC4rKScpICsgJyQnXHJcbiAgICAgIClcclxuICAgICksXHJcbiAgfSkpO1xyXG5cclxuICBsZXQgbWF0Y2ggPSBtYXRjaGVzLmZpbmQobWF0Y2ggPT4gbWF0Y2gucmVzdWx0ICE9PSBudWxsKTtcclxuXHJcbiAgaWYgKG1hdGNoID09PSBudWxsIHx8IG1hdGNoID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1hdGNoID0ge1xyXG4gICAgICByb3V0ZToge1xyXG4gICAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIHZpZXc6IE5vdEZvdW5kLFxyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHQ6IFtsb2NhdGlvbi5wYXRobmFtZV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGF0aFBhcmFtcyA9IFsuLi5tYXRjaC5yb3V0ZS5wYXRoLm1hdGNoQWxsKC86KFxcdyspL2cpXVxyXG4gICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0WzFdKVxyXG4gICAgLnJlZHVjZSgocHJldiwgY3VyciwgaSkgPT4gKHByZXZbY3Vycl0gPSBtYXRjaC5yZXN1bHQuc2xpY2UoMSlbaV0pLCB7fSk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbWF0Y2gucm91dGUucGF0aC5zcGxpdCgnPycpWzFdO1xyXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID1cclxuICAgIHF1ZXJ5U3RyaW5nID09PSB1bmRlZmluZWRcclxuICAgICAgPyB7fVxyXG4gICAgICA6IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBjdXJyLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChwcmV2W2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZSgvXFwrL2csICcgJykpKTtcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IHZpZXcgPSBtYXRjaC5yb3V0ZS52aWV3KHsgcGF0aFBhcmFtcywgcXVlcnlQYXJhbXMgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTCA9IHZpZXc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZSh1cmw6IHN0cmluZykge1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybCk7XHJcbiAgcm91dGVyKCk7XHJcbn1cclxuIiwiZnVuY3Rpb24gY2FtZWxUb0tlYmFiKGNhbWVsQ2FzZVN0cmluZzogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGNhbWVsQ2FzZVN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5saW5lU3R5bGVzKHN0eWxlczogb2JqZWN0KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcykucmVkdWNlKChpbmxpbmVTdHlsZXMsIHByb3BlcnR5KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XHJcblxyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGAke2lubGluZVN0eWxlc30ke2NhbWVsVG9LZWJhYihwcm9wZXJ0eSl9OiR7dmFsdWV9O2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlubGluZVN0eWxlcztcclxuICB9LCAnJyk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTGlzdCgpIHtcclxuICByZXR1cm4gLypodG1sKi8gYFxyXG4gICAgPGgxPkFkZCBMaXN0PC9oMT5cclxuICBgO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15RGF5KCkge1xyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8aDE+TXkgRGF5PC9oMT5cclxuICBgO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xyXG4gIHJldHVybiAvKmh0bWwqLyBgXHJcbiAgICA8aDE+Tm90IEZvdW5kPC9oMT5cclxuICBgO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IG5hdmlnYXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxucm9vdC5pbm5lckhUTUwgPSBMYXlvdXQoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgJ2NsaWNrJyxcclxuICAoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcclxuICAgIGlmIChsaW5rLm1hdGNoZXMoJ1tkYXRhLWxpbmtdJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZpZ2F0ZShsaW5rLmhyZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbnJvdXRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=