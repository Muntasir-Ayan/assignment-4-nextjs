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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// client/component/BodyImages.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst defaultImages = [\n    \"https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2\",\n    \"https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg\",\n    \"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4\",\n    \"https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa\",\n    \"https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2\"\n]; // Initial images for the homepage\nconst BodyImages = (param)=>{\n    let { images } = param;\n    _s();\n    const [isViewerOpen, setViewerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentImages, setCurrentImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultImages); // Start with default images\n    // Update currentImages when new images are passed via props\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BodyImages.useEffect\": ()=>{\n            if (images && images.length > 0) {\n                setCurrentImages(images); // Override with dynamic images if available\n            }\n        }\n    }[\"BodyImages.useEffect\"], [\n        images\n    ]);\n    const openViewer = (index)=>{\n        setCurrentIndex(index);\n        setViewerOpen(true);\n    };\n    const closeViewer = ()=>setViewerOpen(false);\n    const nextImage = ()=>setCurrentIndex((prev)=>Math.min(prev + 1, currentImages.length - 1));\n    const prevImage = ()=>setCurrentIndex((prev)=>Math.max(prev - 1, 0));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4\",\n                children: currentImages.length > 0 ? currentImages.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative overflow-hidden rounded-lg cursor-pointer \".concat(index === 0 ? 'col-span-2 row-span-2' : ''),\n                        onClick: ()=>openViewer(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index + 1),\n                                className: \"w-full h-full object-cover hover:scale-105 transition-transform\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined),\n                            index === currentImages.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-sm\",\n                                children: [\n                                    currentImages.length,\n                                    \"+\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-4 text-center text-gray-500\",\n                    children: \"No images available\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            isViewerOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white max-w-3xl w-full p-6 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-500\",\n                            onClick: closeViewer,\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: currentImages[currentIndex],\n                                    alt: \"Image \".concat(currentIndex + 1),\n                                    className: \"max-h-[70vh] w-auto object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center w-full mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gray-200 px-4 py-2 rounded disabled:opacity-50\",\n                                            onClick: prevImage,\n                                            disabled: currentIndex === 0,\n                                            children: \"Previous\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Image \".concat(currentIndex + 1)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        currentIndex + 1,\n                                                        \" / \",\n                                                        currentImages.length\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gray-200 px-4 py-2 rounded disabled:opacity-50\",\n                                            onClick: nextImage,\n                                            disabled: currentIndex === currentImages.length - 1,\n                                            children: \"Next\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BodyImages, \"p8rgndUVCYEtHHNDVIYWPEOJMNU=\");\n_c = BodyImages;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyImages);\nvar _c;\n$RefreshReg$(_c, \"BodyImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9keUltYWdlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtDQUFrQzs7O0FBRVU7QUFNNUMsTUFBTUUsZ0JBQWdCO0lBQ3BCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxFQUFFLGtDQUFrQztBQUVyQyxNQUFNQyxhQUF3QztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdkQsTUFBTSxDQUFDQyxjQUFjQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFXRSxnQkFBZ0IsNEJBQTRCO0lBRXpHLDREQUE0RDtJQUM1REQsZ0RBQVNBO2dDQUFDO1lBQ1IsSUFBSUcsVUFBVUEsT0FBT08sTUFBTSxHQUFHLEdBQUc7Z0JBQy9CRCxpQkFBaUJOLFNBQVMsNENBQTRDO1lBQ3hFO1FBQ0Y7K0JBQUc7UUFBQ0E7S0FBTztJQUVYLE1BQU1RLGFBQWEsQ0FBQ0M7UUFDbEJMLGdCQUFnQks7UUFDaEJQLGNBQWM7SUFDaEI7SUFFQSxNQUFNUSxjQUFjLElBQU1SLGNBQWM7SUFFeEMsTUFBTVMsWUFBWSxJQUFNUCxnQkFBZ0IsQ0FBQ1EsT0FBU0MsS0FBS0MsR0FBRyxDQUFDRixPQUFPLEdBQUdQLGNBQWNFLE1BQU0sR0FBRztJQUM1RixNQUFNUSxZQUFZLElBQU1YLGdCQUFnQixDQUFDUSxPQUFTQyxLQUFLRyxHQUFHLENBQUNKLE9BQU8sR0FBRztJQUVyRSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaYixjQUFjRSxNQUFNLEdBQUcsSUFDdEJGLGNBQWNjLEdBQUcsQ0FBQyxDQUFDQyxPQUFPWCxzQkFDeEIsOERBQUNRO3dCQUVDQyxXQUFXLHNEQUVWLE9BRENULFVBQVUsSUFBSSwwQkFBMEI7d0JBRTFDWSxTQUFTLElBQU1iLFdBQVdDOzswQ0FFMUIsOERBQUNhO2dDQUNDQyxLQUFLSDtnQ0FDTEksS0FBSyxTQUFtQixPQUFWZixRQUFRO2dDQUN0QlMsV0FBVTs7Ozs7OzRCQUVYVCxVQUFVSixjQUFjRSxNQUFNLEdBQUcsbUJBQ2hDLDhEQUFDVTtnQ0FBSUMsV0FBVTs7b0NBQ1piLGNBQWNFLE1BQU07b0NBQUM7Ozs7Ozs7O3VCQWJyQkU7Ozs7bURBbUJULDhEQUFDUTtvQkFBSUMsV0FBVTs4QkFBdUM7Ozs7Ozs7Ozs7O1lBS3pEakIsOEJBQ0MsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFDQ1AsV0FBVTs0QkFDVkcsU0FBU1g7c0NBQ1Y7Ozs7OztzQ0FHRCw4REFBQ087NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FDQ0MsS0FBS2xCLGFBQWEsQ0FBQ0YsYUFBYTtvQ0FDaENxQixLQUFLLFNBQTBCLE9BQWpCckIsZUFBZTtvQ0FDN0JlLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FDQ1AsV0FBVTs0Q0FDVkcsU0FBU047NENBQ1RXLFVBQVV2QixpQkFBaUI7c0RBQzVCOzs7Ozs7c0RBR0QsOERBQUNjOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1M7b0RBQUVULFdBQVU7OERBQWEsU0FBMEIsT0FBakJmLGVBQWU7Ozs7Ozs4REFDbEQsOERBQUN3Qjs7d0RBQUd4QixlQUFlO3dEQUFFO3dEQUFJRSxjQUFjRSxNQUFNOzs7Ozs7Ozs7Ozs7O3NEQUUvQyw4REFBQ2tCOzRDQUNDUCxXQUFVOzRDQUNWRyxTQUFTVjs0Q0FDVGUsVUFBVXZCLGlCQUFpQkUsY0FBY0UsTUFBTSxHQUFHO3NEQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0E5Rk1SO0tBQUFBO0FBZ0dOLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTmV3IGZvbGRlclxcYXNzaWdubWVudC1uZXh0anNcXGNsaWVudFxcY29tcG9uZW50c1xcQm9keUltYWdlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50L2NvbXBvbmVudC9Cb2R5SW1hZ2VzLnRzeFxyXG4ndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIEJvZHlJbWFnZXNQcm9wcyA9IHtcclxuICBpbWFnZXM6IHN0cmluZ1tdIHwgbnVsbDsgLy8gQWxsb3cgbnVsbCBpbiBjYXNlIGltYWdlcyBhcmUgbm90IHlldCBsb2FkZWRcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRJbWFnZXMgPSBbXHJcbiAgXCJodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY4Nzk2MDExNjQ5Ny0wZGM0MWUxODA4YTJcIiwgXHJcbiAgXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xMTk5MjYzMzkvcGhvdG8vcmVzb3J0LXN3aW1taW5nLXBvb2wuanBnXCIsIFxyXG4gIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjAyNTA0OTc1OTEtMTEyZjJmNDBhM2Y0XCIsIFxyXG4gIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTUzNjUyMDA0NzktYzRlZDFkMzVlMWFhXCIsIFxyXG4gIFwiaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2ODc5NjAxMTY0OTctMGRjNDFlMTgwOGEyXCJcclxuXTsgLy8gSW5pdGlhbCBpbWFnZXMgZm9yIHRoZSBob21lcGFnZVxyXG5cclxuY29uc3QgQm9keUltYWdlczogUmVhY3QuRkM8Qm9keUltYWdlc1Byb3BzPiA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzVmlld2VyT3Blbiwgc2V0Vmlld2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2VzLCBzZXRDdXJyZW50SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihkZWZhdWx0SW1hZ2VzKTsgLy8gU3RhcnQgd2l0aCBkZWZhdWx0IGltYWdlc1xyXG5cclxuICAvLyBVcGRhdGUgY3VycmVudEltYWdlcyB3aGVuIG5ldyBpbWFnZXMgYXJlIHBhc3NlZCB2aWEgcHJvcHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRDdXJyZW50SW1hZ2VzKGltYWdlcyk7IC8vIE92ZXJyaWRlIHdpdGggZHluYW1pYyBpbWFnZXMgaWYgYXZhaWxhYmxlXHJcbiAgICB9XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICBjb25zdCBvcGVuVmlld2VyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XHJcbiAgICBzZXRWaWV3ZXJPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlVmlld2VyID0gKCkgPT4gc2V0Vmlld2VyT3BlbihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gTWF0aC5taW4ocHJldiArIDEsIGN1cnJlbnRJbWFnZXMubGVuZ3RoIC0gMSkpO1xyXG4gIGNvbnN0IHByZXZJbWFnZSA9ICgpID0+IHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gTWF0aC5tYXgocHJldiAtIDEsIDApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtNVwiPlxyXG4gICAgICB7LyogR2FsbGVyeSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XHJcbiAgICAgICAge2N1cnJlbnRJbWFnZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGN1cnJlbnRJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwID8gJ2NvbC1zcGFuLTIgcm93LXNwYW4tMicgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5WaWV3ZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17YEltYWdlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2luZGV4ID09PSBjdXJyZW50SW1hZ2VzLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCByaWdodC00IGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgdGV4dC13aGl0ZSBweC0zIHB5LTEgcm91bmRlZC1tZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50SW1hZ2VzLmxlbmd0aH0rXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+Tm8gaW1hZ2VzIGF2YWlsYWJsZTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEltYWdlIFZpZXdlciAqL31cclxuICAgICAge2lzVmlld2VyT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktODAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYXgtdy0zeGwgdy1mdWxsIHAtNiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlVmlld2VyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudEltYWdlc1tjdXJyZW50SW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtjdXJyZW50SW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtaC1bNzB2aF0gdy1hdXRvIG9iamVjdC1jb250YWluXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHB4LTQgcHktMiByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcmV2SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50SW5kZXggPT09IDB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2BJbWFnZSAke2N1cnJlbnRJbmRleCArIDF9YH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50SW5kZXggKyAxfSAvIHtjdXJyZW50SW1hZ2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcHgtNCBweS0yIHJvdW5kZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRJbmRleCA9PT0gY3VycmVudEltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5SW1hZ2VzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZWZhdWx0SW1hZ2VzIiwiQm9keUltYWdlcyIsImltYWdlcyIsImlzVmlld2VyT3BlbiIsInNldFZpZXdlck9wZW4iLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJjdXJyZW50SW1hZ2VzIiwic2V0Q3VycmVudEltYWdlcyIsImxlbmd0aCIsIm9wZW5WaWV3ZXIiLCJpbmRleCIsImNsb3NlVmlld2VyIiwibmV4dEltYWdlIiwicHJldiIsIk1hdGgiLCJtaW4iLCJwcmV2SW1hZ2UiLCJtYXgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbWFnZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJkaXNhYmxlZCIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BodyImages.tsx\n"));

/***/ })

});