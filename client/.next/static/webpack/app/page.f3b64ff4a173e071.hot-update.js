"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/BodyImages.tsx":
/*!***********************************!*\
  !*** ./components/BodyImages.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// client/component/BodyImages.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst BodyImages = (param)=>{\n    let { images = [] } = param;\n    _s();\n    const [isViewerOpen, setViewerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const openViewer = (index)=>{\n        setCurrentIndex(index);\n        setViewerOpen(true);\n    };\n    const closeViewer = ()=>setViewerOpen(false);\n    const nextImage = ()=>setCurrentIndex((prev)=>Math.min(prev + 1, images.length - 1));\n    const prevImage = ()=>setCurrentIndex((prev)=>Math.max(prev - 1, 0));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4\",\n                children: images.length > 0 ? images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative overflow-hidden rounded-lg cursor-pointer \".concat(index === 0 ? 'col-span-2 row-span-2' : ''),\n                        onClick: ()=>openViewer(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index + 1),\n                                className: \"w-full h-full object-cover hover:scale-105 transition-transform\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined),\n                            index === images.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-sm\",\n                                children: [\n                                    images.length,\n                                    \"+\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-4 text-center text-gray-500\",\n                    children: \"No images available\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            isViewerOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white max-w-3xl w-full p-6 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-500\",\n                            onClick: closeViewer,\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: images[currentIndex],\n                                    alt: \"Image \".concat(currentIndex + 1),\n                                    className: \"max-h-[70vh] w-auto object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center w-full mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gray-200 px-4 py-2 rounded disabled:opacity-50\",\n                                            onClick: prevImage,\n                                            disabled: currentIndex === 0,\n                                            children: \"Previous\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Image \".concat(currentIndex + 1)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        currentIndex + 1,\n                                                        \" / \",\n                                                        images.length\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gray-200 px-4 py-2 rounded disabled:opacity-50\",\n                                            onClick: nextImage,\n                                            disabled: currentIndex === images.length - 1,\n                                            children: \"Next\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BodyImages, \"1NUTyALkeIBA5iJA2OXxB+DFLZE=\");\n_c = BodyImages;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyImages);\nvar _c;\n$RefreshReg$(_c, \"BodyImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9keUltYWdlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtDQUFrQzs7O0FBRUQ7QUFNakMsTUFBTUMsYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUUsRUFBRTs7SUFDNUQsTUFBTSxDQUFDQyxjQUFjQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1PLGFBQWEsQ0FBQ0M7UUFDbEJGLGdCQUFnQkU7UUFDaEJKLGNBQWM7SUFDaEI7SUFFQSxNQUFNSyxjQUFjLElBQU1MLGNBQWM7SUFFeEMsTUFBTU0sWUFBWSxJQUFNSixnQkFBZ0IsQ0FBQ0ssT0FBU0MsS0FBS0MsR0FBRyxDQUFDRixPQUFPLEdBQUdULE9BQU9ZLE1BQU0sR0FBRztJQUNyRixNQUFNQyxZQUFZLElBQU1ULGdCQUFnQixDQUFDSyxPQUFTQyxLQUFLSSxHQUFHLENBQUNMLE9BQU8sR0FBRztJQUVyRSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaaEIsT0FBT1ksTUFBTSxHQUFHLElBQ2ZaLE9BQU9pQixHQUFHLENBQUMsQ0FBQ0MsT0FBT1osc0JBQ2pCLDhEQUFDUzt3QkFFQ0MsV0FBVyxzREFFVixPQURDVixVQUFVLElBQUksMEJBQTBCO3dCQUUxQ2EsU0FBUyxJQUFNZCxXQUFXQzs7MENBRTFCLDhEQUFDYztnQ0FDQ0MsS0FBS0g7Z0NBQ0xJLEtBQUssU0FBbUIsT0FBVmhCLFFBQVE7Z0NBQ3RCVSxXQUFVOzs7Ozs7NEJBRVhWLFVBQVVOLE9BQU9ZLE1BQU0sR0FBRyxtQkFDekIsOERBQUNHO2dDQUFJQyxXQUFVOztvQ0FDWmhCLE9BQU9ZLE1BQU07b0NBQUM7Ozs7Ozs7O3VCQWJkTjs7OzttREFtQlQsOERBQUNTO29CQUFJQyxXQUFVOzhCQUF1Qzs7Ozs7Ozs7Ozs7WUFLekRmLDhCQUNDLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFDQ1AsV0FBVTs0QkFDVkcsU0FBU1o7c0NBQ1Y7Ozs7OztzQ0FHRCw4REFBQ1E7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FDQ0MsS0FBS3JCLE1BQU0sQ0FBQ0csYUFBYTtvQ0FDekJtQixLQUFLLFNBQTBCLE9BQWpCbkIsZUFBZTtvQ0FDN0JhLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FDQ1AsV0FBVTs0Q0FDVkcsU0FBU047NENBQ1RXLFVBQVVyQixpQkFBaUI7c0RBQzVCOzs7Ozs7c0RBR0QsOERBQUNZOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1M7b0RBQUVULFdBQVU7OERBQWEsU0FBMEIsT0FBakJiLGVBQWU7Ozs7Ozs4REFDbEQsOERBQUNzQjs7d0RBQUd0QixlQUFlO3dEQUFFO3dEQUFJSCxPQUFPWSxNQUFNOzs7Ozs7Ozs7Ozs7O3NEQUV4Qyw4REFBQ1c7NENBQ0NQLFdBQVU7NENBQ1ZHLFNBQVNYOzRDQUNUZ0IsVUFBVXJCLGlCQUFpQkgsT0FBT1ksTUFBTSxHQUFHO3NEQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0F0Rk1iO0tBQUFBO0FBd0ZOLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTmV3IGZvbGRlclxcYXNzaWdubWVudC1uZXh0anNcXGNsaWVudFxcY29tcG9uZW50c1xcQm9keUltYWdlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50L2NvbXBvbmVudC9Cb2R5SW1hZ2VzLnRzeFxyXG4ndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBCb2R5SW1hZ2VzUHJvcHMgPSB7XHJcbiAgaW1hZ2VzOiBzdHJpbmdbXTsgLy8gRW5zdXJlIGltYWdlcyBpcyBhbHdheXMgYW4gYXJyYXlcclxufTtcclxuXHJcbmNvbnN0IEJvZHlJbWFnZXM6IFJlYWN0LkZDPEJvZHlJbWFnZXNQcm9wcz4gPSAoeyBpbWFnZXMgPSBbXSB9KSA9PiB7IC8vIERlZmF1bHQgdG8gZW1wdHkgYXJyYXlcclxuICBjb25zdCBbaXNWaWV3ZXJPcGVuLCBzZXRWaWV3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IG9wZW5WaWV3ZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcclxuICAgIHNldFZpZXdlck9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VWaWV3ZXIgPSAoKSA9PiBzZXRWaWV3ZXJPcGVuKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4gc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiBNYXRoLm1pbihwcmV2ICsgMSwgaW1hZ2VzLmxlbmd0aCAtIDEpKTtcclxuICBjb25zdCBwcmV2SW1hZ2UgPSAoKSA9PiBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IE1hdGgubWF4KHByZXYgLSAxLCAwKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTVcIj5cclxuICAgICAgey8qIEdhbGxlcnkgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNFwiPlxyXG4gICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDAgPyAnY29sLXNwYW4tMiByb3ctc3Bhbi0yJyA6ICcnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblZpZXdlcihpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtNCBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIHRleHQtd2hpdGUgcHgtMyBweS0xIHJvdW5kZWQtbWQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aH0rXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+Tm8gaW1hZ2VzIGF2YWlsYWJsZTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEltYWdlIFZpZXdlciAqL31cclxuICAgICAge2lzVmlld2VyT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktODAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYXgtdy0zeGwgdy1mdWxsIHAtNiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlVmlld2VyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2N1cnJlbnRJbmRleF19XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BJbWFnZSAke2N1cnJlbnRJbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC1oLVs3MHZoXSB3LWF1dG8gb2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcHgtNCBweS0yIHJvdW5kZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRJbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57YEltYWdlICR7Y3VycmVudEluZGV4ICsgMX1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRJbmRleCArIDF9IC8ge2ltYWdlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHB4LTQgcHktMiByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5SW1hZ2VzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb2R5SW1hZ2VzIiwiaW1hZ2VzIiwiaXNWaWV3ZXJPcGVuIiwic2V0Vmlld2VyT3BlbiIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm9wZW5WaWV3ZXIiLCJpbmRleCIsImNsb3NlVmlld2VyIiwibmV4dEltYWdlIiwicHJldiIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJwcmV2SW1hZ2UiLCJtYXgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbWFnZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJkaXNhYmxlZCIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BodyImages.tsx\n"));

/***/ })

});