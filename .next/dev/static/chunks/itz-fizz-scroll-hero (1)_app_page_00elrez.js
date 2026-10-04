(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/itz-fizz-scroll-hero (1)/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/itz-fizz-scroll-hero (1)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/itz-fizz-scroll-hero (1)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/itz-fizz-scroll-hero (1)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/itz-fizz-scroll-hero (1)/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Home() {
    _s();
    const hero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Home.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                    tl.from(".letter", {
                        y: 80,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.04,
                        ease: "power3.out"
                    }).from(".subtitle", {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out"
                    }, "-=0.4").from(".stat", {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power3.out"
                    }, "-=0.3").from(".visual", {
                        scale: 0.6,
                        rotation: -20,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out"
                    }, "-=0.7");
                    __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(visual.current, {
                        y: -300,
                        x: 100,
                        rotation: 30,
                        scale: 1.3,
                        scrollTrigger: {
                            trigger: hero.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(title.current, {
                        y: -150,
                        scale: 0.8,
                        opacity: 0.25,
                        scrollTrigger: {
                            trigger: hero.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1
                        }
                    });
                }
            }["Home.useEffect.ctx"], hero);
            return ({
                "Home.useEffect": ()=>ctx.revert()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const text = "WELCOME ITZ FIZZ";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: hero,
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: title,
                                className: "title",
                                children: text.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "letter",
                                        children: char === " " ? "\u00A0" : char
                                    }, i, false, {
                                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle",
                                children: [
                                    "Refresh your perspective.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    "Experience creativity in motion."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stats",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "92%"
                                            }, void 0, false, {
                                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Customer Retention"
                                            }, void 0, false, {
                                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "87%"
                                            }, void 0, false, {
                                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Creative Growth"
                                            }, void 0, false, {
                                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "96%"
                                            }, void 0, false, {
                                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Experience Score"
                                            }, void 0, false, {
                                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: visual,
                        className: "visual",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "circle circle1"
                            }, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "circle circle2"
                            }, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fizz",
                                children: "FIZZ"
                            }, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "number",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll",
                        children: "SCROLL ↓"
                    }, void 0, false, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "next",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "02 — EXPERIENCE"
                    }, void 0, false, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "DESIGNED",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            "TO MOVE."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "03 — END"
                    }, void 0, false, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "KEEP",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$itz$2d$fizz$2d$scroll$2d$hero__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this),
                            "SCROLLING."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/itz-fizz-scroll-hero (1)/app/page.js",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(Home, "8NN9HQftXEQDpXMzf6BBQ13XfpE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=itz-fizz-scroll-hero%20%281%29_app_page_00elrez.js.map