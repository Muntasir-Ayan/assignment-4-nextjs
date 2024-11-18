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

/***/ "(app-pages-browser)/./components/MainBody.tsx":
/*!*********************************!*\
  !*** ./components/MainBody.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// client/components/MainBody.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst MainBody = (param)=>{\n    let { hotelData } = param;\n    _s();\n    const [adultCount, setAdultCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [childCount, setChildCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const totalCount = adultCount + childCount;\n    const updateCount = (type, delta)=>{\n        if (type === 'adult') {\n            setAdultCount((prev)=>Math.max(0, prev + delta));\n            if (adultCount === 0) setChildCount(0); // Reset children if no adults\n        } else if (type === 'child' && adultCount > 0) {\n            setChildCount((prev)=>Math.max(0, prev + delta));\n        }\n    };\n    const defaultTitle = 'Juneau Vacation Home: Stunning View + Beach Access';\n    const defaultDescription = 'A beautiful vacation home with stunning views and beach access.';\n    const defaultGuestCount = 4;\n    const defaultBedroomCount = 2;\n    const defaultBathroomCount = 1;\n    const defaultAmenities = [\n        'Barbecue grill',\n        'Outdoor Space',\n        'Kitchen',\n        'Washer',\n        'Parking available',\n        'Dryer'\n    ];\n    const defaultAddress = 'Juneau, Alaska';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: (hotelData === null || hotelData === void 0 ? void 0 : hotelData.title) || defaultTitle\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600\",\n                children: (hotelData === null || hotelData === void 0 ? void 0 : hotelData.description) || defaultDescription\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Bedrooms: \",\n                                    (hotelData === null || hotelData === void 0 ? void 0 : hotelData.bedroom_count) || defaultBedroomCount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Sleeps \",\n                                    hotelData ? hotelData.guest_count : defaultGuestCount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Bathrooms: \",\n                                    (hotelData === null || hotelData === void 0 ? void 0 : hotelData.bathroom_count) || defaultBathroomCount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Location: \",\n                                (hotelData === null || hotelData === void 0 ? void 0 : hotelData.address) || defaultAddress\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mt-4\",\n                children: \"Popular amenities\"\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 list-disc ml-5\",\n                children: ((hotelData === null || hotelData === void 0 ? void 0 : hotelData.amenities) || defaultAmenities).map((amenity, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: amenity\n                    }, index, false, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"text-blue-400\",\n                children: \"See all property amenities\"\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-800 text-white p-4 rounded mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg\",\n                        children: \"Price: $134 per night\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowPopup(true),\n                        className: \"mt-2 bg-blue-500 p-2 rounded\",\n                        children: \"Book now\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-4 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Travelers\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Adults:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>updateCount('adult', -1),\n                                    children: \"-\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                adultCount,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>updateCount('adult', 1),\n                                    children: \"+\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Children:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined),\n                                adultCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>updateCount('child', -1),\n                                            children: \"-\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        childCount,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>updateCount('child', 1),\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setShowPopup(false),\n                            className: \"mt-4 bg-gray-300 p-2 rounded\",\n                            children: \"Done\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder\\\\assignment-nextjs\\\\client\\\\components\\\\MainBody.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainBody, \"dAbUPJ63kQfrCYn/EtPfPuZR2mY=\");\n_c = MainBody;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainBody);\nvar _c;\n$RefreshReg$(_c, \"MainBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWFpbkJvZHkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxpQ0FBaUM7OztBQUdPO0FBY3hDLE1BQU1FLFdBQW9DO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUN0RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUyxhQUFhTixhQUFhRTtJQUVoQyxNQUFNSyxjQUFjLENBQUNDLE1BQXlCQztRQUM1QyxJQUFJRCxTQUFTLFNBQVM7WUFDcEJQLGNBQWMsQ0FBQ1MsT0FBU0MsS0FBS0MsR0FBRyxDQUFDLEdBQUdGLE9BQU9EO1lBQzNDLElBQUlULGVBQWUsR0FBR0csY0FBYyxJQUFJLDhCQUE4QjtRQUN4RSxPQUFPLElBQUlLLFNBQVMsV0FBV1IsYUFBYSxHQUFHO1lBQzdDRyxjQUFjLENBQUNPLE9BQVNDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHRixPQUFPRDtRQUM3QztJQUNGO0lBRUEsTUFBTUksZUFBZTtJQUNyQixNQUFNQyxxQkFBcUI7SUFDM0IsTUFBTUMsb0JBQW9CO0lBQzFCLE1BQU1DLHNCQUFzQjtJQUM1QixNQUFNQyx1QkFBdUI7SUFDN0IsTUFBTUMsbUJBQW1CO1FBQUM7UUFBa0I7UUFBaUI7UUFBVztRQUFVO1FBQXFCO0tBQVE7SUFDL0csTUFBTUMsaUJBQWlCO0lBRXZCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQ1h0QixDQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVd3QixLQUFLLEtBQUlWOzs7Ozs7MEJBRXZCLDhEQUFDVztnQkFBRUgsV0FBVTswQkFDVnRCLENBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVzBCLFdBQVcsS0FBSVg7Ozs7OzswQkFJN0IsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7OzBDQUNDLDhEQUFDSTs7b0NBQUU7b0NBQVd6QixDQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVcyQixhQUFhLEtBQUlWOzs7Ozs7OzBDQUMxQyw4REFBQ1E7O29DQUFFO29DQUFRekIsWUFBWUEsVUFBVTRCLFdBQVcsR0FBR1o7Ozs7Ozs7MENBQy9DLDhEQUFDUzs7b0NBQUU7b0NBQVl6QixDQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVc2QixjQUFjLEtBQUlYOzs7Ozs7Ozs7Ozs7O2tDQUU5Qyw4REFBQ0c7a0NBQ0MsNEVBQUNJOztnQ0FBRTtnQ0FBV3pCLENBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVzhCLE9BQU8sS0FBSVY7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLeEMsOERBQUNXO2dCQUFHVCxXQUFVOzBCQUFPOzs7Ozs7MEJBQ3JCLDhEQUFDVTtnQkFBR1YsV0FBVTswQkFDWCxDQUFDdEIsQ0FBQUEsc0JBQUFBLGdDQUFBQSxVQUFXaUMsU0FBUyxLQUFJZCxnQkFBZSxFQUFHZSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3hELDhEQUFDQztrQ0FBZ0JGO3VCQUFSQzs7Ozs7Ozs7OzswQkFJYiw4REFBQ0U7Z0JBQUVDLE1BQUs7Z0JBQUlqQixXQUFVOzBCQUFnQjs7Ozs7OzBCQUd0Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDa0I7d0JBQUdsQixXQUFVO2tDQUFVOzs7Ozs7a0NBQ3hCLDhEQUFDbUI7d0JBQU9DLFNBQVMsSUFBTXBDLGFBQWE7d0JBQU9nQixXQUFVO2tDQUErQjs7Ozs7Ozs7Ozs7O1lBTXJGakIsMkJBQ0MsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDUztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDVjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNxQjs4Q0FBSzs7Ozs7OzhDQUNOLDhEQUFDRjtvQ0FBT0MsU0FBUyxJQUFNbEMsWUFBWSxTQUFTLENBQUM7OENBQUk7Ozs7OztnQ0FDaERQOzhDQUNELDhEQUFDd0M7b0NBQU9DLFNBQVMsSUFBTWxDLFlBQVksU0FBUzs4Q0FBSTs7Ozs7Ozs7Ozs7O3NDQUVsRCw4REFBQ2E7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDcUI7OENBQUs7Ozs7OztnQ0FDTDFDLGFBQWEsbUJBQ1o7O3NEQUNFLDhEQUFDd0M7NENBQU9DLFNBQVMsSUFBTWxDLFlBQVksU0FBUyxDQUFDO3NEQUFJOzs7Ozs7d0NBQ2hETDtzREFDRCw4REFBQ3NDOzRDQUFPQyxTQUFTLElBQU1sQyxZQUFZLFNBQVM7c0RBQUk7Ozs7Ozs7Ozs7Ozs7O3NDQUl0RCw4REFBQ2lDOzRCQUFPQyxTQUFTLElBQU1wQyxhQUFhOzRCQUFRZ0IsV0FBVTtzQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpHO0dBM0ZNdkI7S0FBQUE7QUE2Rk4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxOZXcgZm9sZGVyXFxhc3NpZ25tZW50LW5leHRqc1xcY2xpZW50XFxjb21wb25lbnRzXFxNYWluQm9keS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50L2NvbXBvbmVudHMvTWFpbkJvZHkudHN4XHJcbid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBNYWluQm9keVByb3BzIHtcclxuICBob3RlbERhdGE/OiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGd1ZXN0X2NvdW50OiBudW1iZXI7XHJcbiAgICBiZWRyb29tX2NvdW50OiBudW1iZXI7XHJcbiAgICBiYXRocm9vbV9jb3VudDogbnVtYmVyO1xyXG4gICAgYW1lbml0aWVzOiBzdHJpbmdbXTtcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBNYWluQm9keTogUmVhY3QuRkM8TWFpbkJvZHlQcm9wcz4gPSAoeyBob3RlbERhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFthZHVsdENvdW50LCBzZXRBZHVsdENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjaGlsZENvdW50LCBzZXRDaGlsZENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsQ291bnQgPSBhZHVsdENvdW50ICsgY2hpbGRDb3VudDtcclxuXHJcbiAgY29uc3QgdXBkYXRlQ291bnQgPSAodHlwZTogJ2FkdWx0JyB8ICdjaGlsZCcsIGRlbHRhOiBudW1iZXIpID0+IHtcclxuICAgIGlmICh0eXBlID09PSAnYWR1bHQnKSB7XHJcbiAgICAgIHNldEFkdWx0Q291bnQoKHByZXYpID0+IE1hdGgubWF4KDAsIHByZXYgKyBkZWx0YSkpO1xyXG4gICAgICBpZiAoYWR1bHRDb3VudCA9PT0gMCkgc2V0Q2hpbGRDb3VudCgwKTsgLy8gUmVzZXQgY2hpbGRyZW4gaWYgbm8gYWR1bHRzXHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGlsZCcgJiYgYWR1bHRDb3VudCA+IDApIHtcclxuICAgICAgc2V0Q2hpbGRDb3VudCgocHJldikgPT4gTWF0aC5tYXgoMCwgcHJldiArIGRlbHRhKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFRpdGxlID0gJ0p1bmVhdSBWYWNhdGlvbiBIb21lOiBTdHVubmluZyBWaWV3ICsgQmVhY2ggQWNjZXNzJztcclxuICBjb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnQSBiZWF1dGlmdWwgdmFjYXRpb24gaG9tZSB3aXRoIHN0dW5uaW5nIHZpZXdzIGFuZCBiZWFjaCBhY2Nlc3MuJztcclxuICBjb25zdCBkZWZhdWx0R3Vlc3RDb3VudCA9IDQ7XHJcbiAgY29uc3QgZGVmYXVsdEJlZHJvb21Db3VudCA9IDI7XHJcbiAgY29uc3QgZGVmYXVsdEJhdGhyb29tQ291bnQgPSAxO1xyXG4gIGNvbnN0IGRlZmF1bHRBbWVuaXRpZXMgPSBbJ0JhcmJlY3VlIGdyaWxsJywgJ091dGRvb3IgU3BhY2UnLCAnS2l0Y2hlbicsICdXYXNoZXInLCAnUGFya2luZyBhdmFpbGFibGUnLCAnRHJ5ZXInXTtcclxuICBjb25zdCBkZWZhdWx0QWRkcmVzcyA9ICdKdW5lYXUsIEFsYXNrYSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxyXG4gICAgICB7LyogVGl0bGUgYW5kIERlc2NyaXB0aW9uICovfVxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+XHJcbiAgICAgICAge2hvdGVsRGF0YT8udGl0bGUgfHwgZGVmYXVsdFRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAge2hvdGVsRGF0YT8uZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7LyogR3Vlc3QgYW5kIFByb3BlcnR5IEluZm8gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtdC00XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPkJlZHJvb21zOiB7aG90ZWxEYXRhPy5iZWRyb29tX2NvdW50IHx8IGRlZmF1bHRCZWRyb29tQ291bnR9PC9wPlxyXG4gICAgICAgICAgPHA+U2xlZXBzIHtob3RlbERhdGEgPyBob3RlbERhdGEuZ3Vlc3RfY291bnQgOiBkZWZhdWx0R3Vlc3RDb3VudH08L3A+XHJcbiAgICAgICAgICA8cD5CYXRocm9vbXM6IHtob3RlbERhdGE/LmJhdGhyb29tX2NvdW50IHx8IGRlZmF1bHRCYXRocm9vbUNvdW50fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+TG9jYXRpb246IHtob3RlbERhdGE/LmFkZHJlc3MgfHwgZGVmYXVsdEFkZHJlc3N9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBBbWVuaXRpZXMgKi99XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00XCI+UG9wdWxhciBhbWVuaXRpZXM8L2gzPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBsaXN0LWRpc2MgbWwtNVwiPlxyXG4gICAgICAgIHsoaG90ZWxEYXRhPy5hbWVuaXRpZXMgfHwgZGVmYXVsdEFtZW5pdGllcykubWFwKChhbWVuaXR5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PnthbWVuaXR5fTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5TZWUgYWxsIHByb3BlcnR5IGFtZW5pdGllczwvYT5cclxuXHJcbiAgICAgIHsvKiBCb29raW5nIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS04MDAgdGV4dC13aGl0ZSBwLTQgcm91bmRlZCBtdC02XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGdcIj5QcmljZTogJDEzNCBwZXIgbmlnaHQ8L2gyPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHRydWUpfSBjbGFzc05hbWU9XCJtdC0yIGJnLWJsdWUtNTAwIHAtMiByb3VuZGVkXCI+XHJcbiAgICAgICAgICBCb29rIG5vd1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBQb3B1cCBmb3IgdHJhdmVsZXIgY291bnQgKi99XHJcbiAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxoMz5UcmF2ZWxlcnM8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTJcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZHVsdHM6PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlQ291bnQoJ2FkdWx0JywgLTEpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAge2FkdWx0Q291bnR9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDb3VudCgnYWR1bHQnLCAxKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q2hpbGRyZW46PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHthZHVsdENvdW50ID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUNvdW50KCdjaGlsZCcsIC0xKX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7Y2hpbGRDb3VudH1cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDb3VudCgnY2hpbGQnLCAxKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKX0gY2xhc3NOYW1lPVwibXQtNCBiZy1ncmF5LTMwMCBwLTIgcm91bmRlZFwiPkRvbmU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Cb2R5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1haW5Cb2R5IiwiaG90ZWxEYXRhIiwiYWR1bHRDb3VudCIsInNldEFkdWx0Q291bnQiLCJjaGlsZENvdW50Iiwic2V0Q2hpbGRDb3VudCIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsInRvdGFsQ291bnQiLCJ1cGRhdGVDb3VudCIsInR5cGUiLCJkZWx0YSIsInByZXYiLCJNYXRoIiwibWF4IiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdEd1ZXN0Q291bnQiLCJkZWZhdWx0QmVkcm9vbUNvdW50IiwiZGVmYXVsdEJhdGhyb29tQ291bnQiLCJkZWZhdWx0QW1lbml0aWVzIiwiZGVmYXVsdEFkZHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYmVkcm9vbV9jb3VudCIsImd1ZXN0X2NvdW50IiwiYmF0aHJvb21fY291bnQiLCJhZGRyZXNzIiwiaDMiLCJ1bCIsImFtZW5pdGllcyIsIm1hcCIsImFtZW5pdHkiLCJpbmRleCIsImxpIiwiYSIsImhyZWYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MainBody.tsx\n"));

/***/ })

});