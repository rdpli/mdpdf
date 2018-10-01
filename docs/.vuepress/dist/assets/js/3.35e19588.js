(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://travis-ci.org/BlueHatbRit/mdpdf",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/BlueHatbRit/mdpdf.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://ci.appveyor.com/project/BlueHatbRit/mdpdf/branch/master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://ci.appveyor.com/api/projects/status/x0ng3luokjb9eosm/branch/master?svg=true",alt:"Build status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/sindresorhus/xo",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/code_style-XO-5ed9c7.svg",alt:"XO code style"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/mdpdf",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/mdpdf.svg",alt:"NPM version"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("A command line markdown to pdf converter with support for page headers, footers, and custom stylesheets. Mdpdf is incredibly configurable and has a JavaScript API for more extravogant usage.")]),t._v(" "),t._m(1),t._v(" "),s("p",[s("strong",[t._v("If you're using the "),s("a",{attrs:{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom text editor"),s("OutboundLink")],1),t._v(", checkout the "),s("a",{attrs:{href:"https://atom.io/packages/markdown-pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-pdf"),s("OutboundLink")],1),t._v(" plugin which uses mdpdf.")])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Like this project and want to donate towards it's continued development?")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Install globally to use from the command line.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Install locally to access the API.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mdpdf-markdown-to-pdf-converter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mdpdf-markdown-to-pdf-converter","aria-hidden":"true"}},[this._v("#")]),this._v(" MDPDF - Markdown to PDF converter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For examples of how to use headers and footers, see the "),e("a",{attrs:{href:"./examples"}},[this._v("examples directory")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"donate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#donate","aria-hidden":"true"}},[this._v("#")]),this._v(" Donate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://www.buymeacoffee.com/elliot",target:"_blank"}},[e("img",{staticStyle:{height:"auto !important",width:"auto !important"},attrs:{src:"https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png",alt:"Donate"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("npm install mdpdf -g")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("npm install mdpdf --save")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Example usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("mdpdf README.md")]),this._v(" - Simple convert using GitHub Markdown CSS and some additional basic stylings.")]),this._v(" "),e("li",[e("code",[this._v("mdpdf README.md --style styles.css --header header.hbs --hHeight 22")]),this._v(" - Convert with custom styling with a header of height 22mm.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("--style=<filename>")]),t._v("          - A single css stylesheet you wish to apply to the PDF")]),t._v(" "),s("li",[s("code",[t._v("--header=<filename>")]),t._v("         - A HTML (.html) file to inject into the header of the PDF")]),t._v(" "),s("li",[s("code",[t._v("--h-height=<height>")]),t._v("         - The height of the header section")]),t._v(" "),s("li",[s("code",[t._v("--footer=<filename>")]),t._v("         - A HTML (.html) file to inject into the footer of the PDF")]),t._v(" "),s("li",[s("code",[t._v("--f-height=<height>")]),t._v("         - The height of the footer section")]),t._v(" "),s("li",[s("code",[t._v("--border=<size>")]),t._v("             - Border (top, left, bottom, right; default: 20mm)")]),t._v(" "),s("li",[s("code",[t._v("--border-top=<size>")]),t._v("         - Top border (default: 20mm)")]),t._v(" "),s("li",[s("code",[t._v("--border-left=<size>")]),t._v("        - Left border (default: 20mm)")]),t._v(" "),s("li",[s("code",[t._v("--border-bottom=<size>")]),t._v("      - Bottom border (default: 20mm)")]),t._v(" "),s("li",[s("code",[t._v("--border-right=<size>")]),t._v("       - Right border (default: 20mm)")]),t._v(" "),s("li",[s("code",[t._v("--no-emoji")]),t._v("                  - Disables emoji conversions")]),t._v(" "),s("li",[s("code",[t._v("--debug")]),t._v("                     - Save the generated html for debugging")]),t._v(" "),s("li",[s("code",[t._v("--help")]),t._v("                      - Display this menu")]),t._v(" "),s("li",[s("code",[t._v("--version")]),t._v("                   - Display the application version")]),t._v(" "),s("li",[s("code",[t._v("--format=<format>")]),t._v("           - PDF size format: A3, A4, A5, Legal, Letter, Tabloid (Default: A4)")]),t._v(" "),s("li",[s("code",[t._v("--orientation=<orientation>")]),t._v(" - PDF orientation: portrait or landscape (Default: portrait)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Length parameters ("),s("code",[t._v("<height>")]),t._v(" and "),s("code",[t._v("<size>")]),t._v(") require a unit. Valid units are "),s("code",[t._v("mm")]),t._v(", "),s("code",[t._v("cm")]),t._v(", "),s("code",[t._v("in")]),t._v(" and "),s("code",[t._v("px")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment variables")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("MDPDF_STYLES")]),this._v(" - The full path to a stylesheet you wish to use if "),e("code",[this._v("--style")]),this._v(" is not specified when calling "),e("code",[this._v("mdpdf")]),this._v(" from the command line.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"emoji-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emoji-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Emoji Support")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In text emoji's are also supported, but there are a few instances of shorthand which do not work and require the longhand version, i.e. "),e("code",[this._v(":+1:")]),this._v(" doesn't work but "),e("code",[this._v(":thumbsup:")]),this._v(" will.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"programatic-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programatic-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Programatic API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The API is very straight forward with a single function "),e("code",[this._v("convert()")]),this._v(" which takes some options. The convert method uses a promise generated by the "),e("a",{attrs:{href:"bluebirdjs.com"}},[this._v("Bluebird.js")]),this._v(" library. For a full example see the "),e("a",{attrs:{href:"./bin/index.js"}},[this._v("bin/index.js")]),this._v("!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-api-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-api-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Example API Usage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mdpdf "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'mdpdf'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'path'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    source"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'README.md'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    destination"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'output.pdf'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    styles"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'md-styles.css'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pdf"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        format"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'A4'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        orientation"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'portrait'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmdpdf"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("convert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pdfPath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'PDF Path:'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pdfPath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("source")]),t._v(" ("),s("strong",[t._v("required")]),t._v(") - Full path to the source markdown file.")]),t._v(" "),s("li",[s("code",[t._v("destination")]),t._v(" ("),s("strong",[t._v("required")]),t._v(") - Full path to the destination (pdf) file.")]),t._v(" "),s("li",[s("code",[t._v("styles")]),t._v(" - Full path to a single css stylesheet which is applied last to the PDF.")]),t._v(" "),s("li",[s("code",[t._v("ghStyle")]),t._v(" - Boolean value of whether or not to use the GitHub Markdown CSS, "),s("em",[t._v("defaults to false")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("defaultStyle")]),t._v(" - Boolean value of whether or not to use the additional default styles. These styles provide some things like a basic border and font size. "),s("em",[t._v("Defaults to false")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("header")]),t._v(" - Full path to a the Handlebars ("),s("code",[t._v(".hbs")]),t._v(") file which will be your header. If you set this, you must set the header height (see below).")]),t._v(" "),s("li",[s("code",[t._v("debug")]),t._v(" - When this is set the intermediate HTML will be saved into a file, the value of this field should be the full path to the destination HTML.")]),t._v(" "),s("li",[s("code",[t._v("pdf")]),t._v(" ("),s("strong",[t._v("required")]),t._v(") - An object which contains some sub parameters to control the final PDF document\n"),s("ul",[s("li",[s("code",[t._v("format")]),t._v(" ("),s("strong",[t._v("required")]),t._v(') - Final document format, allowed values are "A3, A4, A5, Legal, Letter, Tabloid"')]),t._v(" "),s("li",[s("code",[t._v("orientation")]),t._v(' - Final document size orientation, allowed values are "potrait, orientation"')]),t._v(" "),s("li",[s("code",[t._v("header")]),t._v(" - A sub object which contains some header settings\n"),s("ul",[s("li",[s("code",[t._v("height")]),t._v(" - Height of the documents header in mm (default 45mm). If you wish to use a header, then this must be set.")])])]),t._v(" "),s("li",[s("code",[t._v("border")]),t._v(" - The document borders")])])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);