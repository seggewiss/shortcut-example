!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/shortcuttest/",n(n.s="wRlT")}({fXes:function(e,t){e.exports="{% block sw_dashboard_index_content_intro_card %}\n    {% parent() %}\n\n    <swag-shortcut></swag-shortcut>\n{% endblock %}\n"},rYEO:function(e,t){e.exports="{% block swag_shortcut %}\n    <p>Press Systemkey+L to log to console</p>\n{% endblock %}\n"},wRlT:function(e,t,n){"use strict";n.r(t);var o=n("rYEO"),r=n.n(o);Shopware.Component.register("swag-shortcut",{template:r.a,shortcuts:{"SYSTEMKEY+L":{active:function(){return!0},method:"logToConsole"}},methods:{logToConsole:function(){console.log("Shopware is great.")}}});var u=n("fXes"),s=n.n(u);Shopware.Component.override("sw-dashboard-index",{template:s.a})}});
//# sourceMappingURL=shortcut-test.js.map