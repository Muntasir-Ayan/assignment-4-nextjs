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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// client/component/BodyImages.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst BodyImages = (param)=>{\n    let { images } = param;\n    _s();\n    const [isViewerOpen, setViewerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const openViewer = (index)=>{\n        setCurrentIndex(index);\n        setViewerOpen(true);\n    };\n    const closeViewer = ()=>setViewerOpen(false);\n    const nextImage = ()=>setCurrentIndex((prev)=>Math.min(prev + 1, images.length - 1));\n    const prevImage = ()=>setCurrentIndex((prev)=>Math.max(prev - 1, 0));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative overflow-hidden rounded-lg cursor-pointer \".concat(index === 0 ? \"col-span-2 row-span-2\" : \"\"),\n                        onClick: ()=>openViewer(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index + 1),\n                                className: \"w-full h-full object-cover hover:scale-105 transition-transform\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            index === images.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-sm\",\n                                children: [\n                                    images.length,\n                                    \"+\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            isViewerOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white max-w-3xl w-full p-6 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-500\",\n                            onClick: closeViewer,\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: images[currentIndex],\n                                    alt: \"Image \".concat(currentIndex + 1),\n                                    className: \"max-h-[70vh] w-auto object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center w-full mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gray-200 px-4 py-2 rounded disabled:opacity-50\",\n                                            onClick: prevImage,\n                                            disabled: currentIndex === 0,\n                                            children: \"Previous\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Image \".concat(currentIndex + 1)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        currentIndex + 1,\n                                                        \" / \",\n                                                        images.length\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gray-200 px-4 py-2 rounded disabled:opacity-50\",\n                                            onClick: nextImage,\n                                            disabled: currentIndex === images.length - 1,\n                                            children: \"Next\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\BodyImages.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BodyImages, \"1NUTyALkeIBA5iJA2OXxB+DFLZE=\");\n_c = BodyImages;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyImages);\nvar _c;\n$RefreshReg$(_c, \"BodyImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9keUltYWdlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtDQUFrQzs7O0FBRUQ7QUFNakMsTUFBTUMsYUFBd0M7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3ZELE1BQU0sQ0FBQ0MsY0FBY0MsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTyxhQUFhLENBQUNDO1FBQ2xCRixnQkFBZ0JFO1FBQ2hCSixjQUFjO0lBQ2hCO0lBRUEsTUFBTUssY0FBYyxJQUFNTCxjQUFjO0lBRXhDLE1BQU1NLFlBQVksSUFBTUosZ0JBQWdCLENBQUNLLE9BQVNDLEtBQUtDLEdBQUcsQ0FBQ0YsT0FBTyxHQUFHVCxPQUFPWSxNQUFNLEdBQUc7SUFDckYsTUFBTUMsWUFBWSxJQUFNVCxnQkFBZ0IsQ0FBQ0ssT0FBU0MsS0FBS0ksR0FBRyxDQUFDTCxPQUFPLEdBQUc7SUFFckUscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWmhCLE9BQU9pQixHQUFHLENBQUMsQ0FBQ0MsT0FBT1osc0JBQ2xCLDhEQUFDUzt3QkFFQ0MsV0FBVyxzREFFVixPQURDVixVQUFVLElBQUksMEJBQTBCO3dCQUUxQ2EsU0FBUyxJQUFNZCxXQUFXQzs7MENBRTFCLDhEQUFDYztnQ0FDQ0MsS0FBS0g7Z0NBQ0xJLEtBQUssU0FBbUIsT0FBVmhCLFFBQVE7Z0NBQ3RCVSxXQUFVOzs7Ozs7NEJBRVhWLFVBQVVOLE9BQU9ZLE1BQU0sR0FBRyxtQkFDekIsOERBQUNHO2dDQUFJQyxXQUFVOztvQ0FDWmhCLE9BQU9ZLE1BQU07b0NBQUM7Ozs7Ozs7O3VCQWJkTjs7Ozs7Ozs7OztZQXFCVkwsOEJBQ0MsOERBQUNjO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNPOzRCQUNDUCxXQUFVOzRCQUNWRyxTQUFTWjtzQ0FDVjs7Ozs7O3NDQUdELDhEQUFDUTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUNDQyxLQUFLckIsTUFBTSxDQUFDRyxhQUFhO29DQUN6Qm1CLEtBQUssU0FBMEIsT0FBakJuQixlQUFlO29DQUM3QmEsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUNDUCxXQUFVOzRDQUNWRyxTQUFTTjs0Q0FDVFcsVUFBVXJCLGlCQUFpQjtzREFDNUI7Ozs7OztzREFHRCw4REFBQ1k7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDUztvREFBRVQsV0FBVTs4REFBYSxTQUEwQixPQUFqQmIsZUFBZTs7Ozs7OzhEQUNsRCw4REFBQ3NCOzt3REFBR3RCLGVBQWU7d0RBQUU7d0RBQUlILE9BQU9ZLE1BQU07Ozs7Ozs7Ozs7Ozs7c0RBRXhDLDhEQUFDVzs0Q0FDQ1AsV0FBVTs0Q0FDVkcsU0FBU1g7NENBQ1RnQixVQUFVckIsaUJBQWlCSCxPQUFPWSxNQUFNLEdBQUc7c0RBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtHQWxGTWI7S0FBQUE7QUFvRk4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxOZXcgZm9sZGVyXFxhc3NpZ25tZW50LW5leHRqc1xcY2xpZW50XFxjb21wb25lbnRzXFxCb2R5SW1hZ2VzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQvY29tcG9uZW50L0JvZHlJbWFnZXMudHN4XHJcbid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIEJvZHlJbWFnZXNQcm9wcyA9IHtcclxuICBpbWFnZXM6IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuY29uc3QgQm9keUltYWdlczogUmVhY3QuRkM8Qm9keUltYWdlc1Byb3BzPiA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzVmlld2VyT3Blbiwgc2V0Vmlld2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBvcGVuVmlld2VyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XHJcbiAgICBzZXRWaWV3ZXJPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlVmlld2VyID0gKCkgPT4gc2V0Vmlld2VyT3BlbihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gTWF0aC5taW4ocHJldiArIDEsIGltYWdlcy5sZW5ndGggLSAxKSk7XHJcbiAgY29uc3QgcHJldkltYWdlID0gKCkgPT4gc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiBNYXRoLm1heChwcmV2IC0gMSwgMCkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC01XCI+XHJcbiAgICAgIHsvKiBHYWxsZXJ5ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTRcIj5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgaW5kZXggPT09IDAgPyBcImNvbC1zcGFuLTIgcm93LXNwYW4tMlwiIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblZpZXdlcihpbmRleCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17YEltYWdlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2luZGV4ID09PSBpbWFnZXMubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCByaWdodC00IGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgdGV4dC13aGl0ZSBweC0zIHB5LTEgcm91bmRlZC1tZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aH0rXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogSW1hZ2UgVmlld2VyICovfVxyXG4gICAgICB7aXNWaWV3ZXJPcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS04MCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG1heC13LTN4bCB3LWZ1bGwgcC02IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VWaWV3ZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbY3VycmVudEluZGV4XX1cclxuICAgICAgICAgICAgICAgIGFsdD17YEltYWdlICR7Y3VycmVudEluZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtWzcwdmhdIHctYXV0byBvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBweC00IHB5LTIgcm91bmRlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJldkltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudEluZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntgSW1hZ2UgJHtjdXJyZW50SW5kZXggKyAxfWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57Y3VycmVudEluZGV4ICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcHgtNCBweS0yIHJvdW5kZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlJbWFnZXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJvZHlJbWFnZXMiLCJpbWFnZXMiLCJpc1ZpZXdlck9wZW4iLCJzZXRWaWV3ZXJPcGVuIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4Iiwib3BlblZpZXdlciIsImluZGV4IiwiY2xvc2VWaWV3ZXIiLCJuZXh0SW1hZ2UiLCJwcmV2IiwiTWF0aCIsIm1pbiIsImxlbmd0aCIsInByZXZJbWFnZSIsIm1heCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsImRpc2FibGVkIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BodyImages.tsx\n"));

/***/ })

});