(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["prompt"] = factory();
	else
		root["prompt"] = factory();
})(this, function() {
return webpackJsonpprompt([4],{

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Biyaheroes Developers
              		@email: developers@biyaheroes.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "detail",
              			"path": "detail/detail.jsx",
              			"file": "detail.jsx",
              			"module": "detail",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-small-detail.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Biyaheroes MJML Prompt Component.
              	@end-module-documentation
              
              	@include:
              		{
              			"Component": "react.Component",
              			"Column": "mjml-column",
              			"MJMLElement": "mjml-core",
              			"React": "react",
              			"Section": "mjml-section",
              			"Text": "mjml-text",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = __webpack_require__(306);var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = __webpack_require__(324);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(328);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(329);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(333);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(342);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = __webpack_require__(39);var _react2 = _interopRequireDefault(_react);

var _mjmlCore = __webpack_require__(31);

var _mjmlColumn = __webpack_require__(669);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = __webpack_require__(674);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(675);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _wichevr = __webpack_require__(676);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-prompt";

var parentTag = ["mj-container", "mj-wrapper"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"background-color": "white",
		"foreground-color": "black",
		"side-color": "gray",
		"message": "" } };var




Prompt = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {(0, _inherits3.default)(Prompt, _Component);function Prompt() {(0, _classCallCheck3.default)(this, Prompt);return (0, _possibleConstructorReturn3.default)(this, (Prompt.__proto__ || (0, _getPrototypeOf2.default)(Prompt)).apply(this, arguments));}(0, _createClass3.default)(Prompt, [{ key: "render", value: function render()
		{var
			mjAttribute = this.props.mjAttribute;var _props =

			this.props,backgroundColor = _props.backgroundColor,foregroundColor = _props.foregroundColor,sideColor = _props.sideColor,message = _props.message;

			return _react2.default.createElement(_mjmlSection2.default,
				this.props, (0, _jsx3.default)(_mjmlColumn2.default, { "background-color":


					(0, _wichevr2.default)(backgroundColor, mjAttribute("background-color")), "border-left": "10px solid " +
					(0, _wichevr2.default)(sideColor, mjAttribute("side-color")) }, void 0, (0, _jsx3.default)(_mjmlText2.default, { color:


					(0, _wichevr2.default)(foregroundColor, mjAttribute("foreground-color")), padding:
					"20px 20px 20px 20px", "font-size":
					"15px", "letter-spacing":
					"0.5px" }, void 0,

				(0, _wichevr2.default)(message, mjAttribute("message")))));



		} }]);return Prompt;}(_react.Component)) || _class;


Prompt.tagName = tagName;
Prompt.parentTag = parentTag;
Prompt.endingTag = endingTag;
Prompt.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Prompt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdC5qc3giXSwibmFtZXMiOlsidGFnTmFtZSIsInBhcmVudFRhZyIsImVuZGluZ1RhZyIsImRlZmF1bHRNSk1MRGVmaW5pdGlvbiIsIlByb21wdCIsIm1qQXR0cmlidXRlIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JlZ3JvdW5kQ29sb3IiLCJzaWRlQ29sb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSw4Qjs7QUFFQTs7QUFFQSx5QztBQUNBLDJDO0FBQ0EscUM7O0FBRUEsa0M7O0FBRUEsSUFBTUEsVUFBVSxXQUFoQjs7QUFFQSxJQUFNQyxZQUFZLENBQUUsY0FBRixFQUFrQixZQUFsQixDQUFsQjs7QUFFQSxJQUFNQyxZQUFZLEtBQWxCOztBQUVBLElBQU1DLHdCQUF3QjtBQUM3QixZQUFXLEVBRGtCO0FBRTdCLGVBQWM7QUFDYixzQkFBb0IsT0FEUDtBQUViLHNCQUFvQixPQUZQO0FBR2IsZ0JBQWMsTUFIRDtBQUliLGFBQVcsRUFKRSxFQUZlLEVBQTlCLEM7Ozs7O0FBV01DLE07QUFDSTtBQUNBQyxjQURBLEdBQ2dCLEtBQUtDLEtBRHJCLENBQ0FELFdBREE7O0FBR3VELFFBQUtDLEtBSDVELENBR0ZDLGVBSEUsVUFHRkEsZUFIRSxDQUdlQyxlQUhmLFVBR2VBLGVBSGYsQ0FHZ0NDLFNBSGhDLFVBR2dDQSxTQUhoQyxDQUcyQ0MsT0FIM0MsVUFHMkNBLE9BSDNDOztBQUtSLFVBQVM7QUFDRCxTQUFLSixLQURKOzs7QUFJYyw0QkFBU0MsZUFBVCxFQUEwQkYsWUFBYSxrQkFBYixDQUExQixDQUpkO0FBS3dCLDRCQUFTSSxTQUFULEVBQW9CSixZQUFhLFlBQWIsQ0FBcEIsQ0FMeEI7OztBQVFNLDRCQUFTRyxlQUFULEVBQTBCSCxZQUFhLGtCQUFiLENBQTFCLENBUk47QUFTSSwwQkFUSjtBQVVRLFdBVlI7QUFXYSxZQVhiOztBQWFGLDJCQUFTSyxPQUFULEVBQWtCTCxZQUFhLFNBQWIsQ0FBbEIsQ0FiRSxHQUFUOzs7O0FBaUJBLEc7OztBQUdGRCxPQUFPSixPQUFQLEdBQWlCQSxPQUFqQjtBQUNBSSxPQUFPSCxTQUFQLEdBQW1CQSxTQUFuQjtBQUNBRyxPQUFPRixTQUFQLEdBQW1CQSxTQUFuQjtBQUNBRSxPQUFPRCxxQkFBUCxHQUErQkEscUJBQS9CLEM7O0FBRWVDLE0iLCJmaWxlIjoicHJvbXB0LmpzeCIsInNvdXJjZVJvb3QiOiIvbW50L2MvVXNlcnMvdmluc2UvRG9jdW1lbnRzL0JpeWFoZXJvZXMvYmgvYmgtbWotcHJvbXB0Iiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgQml5YWhlcm9lcyBEZXZlbG9wZXJzXHJcblx0XHRAZW1haWw6IGRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZXRhaWxcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZGV0YWlsL2RldGFpbC5qc3hcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZGV0YWlsLmpzeFwiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRldGFpbFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcclxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwiZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVwiLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQml5YWhlcm9lcy9iaC1tai1zbWFsbC1kZXRhaWwuZ2l0XCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEJpeWFoZXJvZXMgTUpNTCBQcm9tcHQgQ29tcG9uZW50LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXHJcblx0XHRcdFwiQ29sdW1uXCI6IFwibWptbC1jb2x1bW5cIixcclxuXHRcdFx0XCJNSk1MRWxlbWVudFwiOiBcIm1qbWwtY29yZVwiLFxyXG5cdFx0XHRcIlJlYWN0XCI6IFwicmVhY3RcIixcclxuXHRcdFx0XCJTZWN0aW9uXCI6IFwibWptbC1zZWN0aW9uXCIsXHJcblx0XHRcdFwiVGV4dFwiOiBcIm1qbWwtdGV4dFwiLFxyXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IE1KTUxFbGVtZW50IH0gZnJvbSBcIm1qbWwtY29yZVwiO1xyXG5cclxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIm1qbWwtc2VjdGlvblwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwibWptbC10ZXh0XCI7XHJcblxyXG5pbXBvcnQgd2ljaGV2ciBmcm9tIFwid2ljaGV2clwiO1xyXG5cclxuY29uc3QgdGFnTmFtZSA9IFwibWotcHJvbXB0XCI7XHJcblxyXG5jb25zdCBwYXJlbnRUYWcgPSBbIFwibWotY29udGFpbmVyXCIsIFwibWotd3JhcHBlclwiIF07XHJcblxyXG5jb25zdCBlbmRpbmdUYWcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IGRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IHtcclxuXHRcImNvbnRlbnRcIjogXCJcIixcclxuXHRcImF0dHJpYnV0ZXNcIjoge1xyXG5cdFx0XCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcclxuXHRcdFwiZm9yZWdyb3VuZC1jb2xvclwiOiBcImJsYWNrXCIsXHJcblx0XHRcInNpZGUtY29sb3JcIjogXCJncmF5XCIsXHJcblx0XHRcIm1lc3NhZ2VcIjogXCJcIlxyXG5cdH1cclxufTtcclxuXHJcbkBNSk1MRWxlbWVudFxyXG5jbGFzcyBQcm9tcHQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlciggKXtcclxuXHRcdGNvbnN0IHsgbWpBdHRyaWJ1dGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0bGV0IHsgYmFja2dyb3VuZENvbG9yLCBmb3JlZ3JvdW5kQ29sb3IsIHNpZGVDb2xvciwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4gKCA8U2VjdGlvblxyXG5cdFx0XHRcdFx0eyAuLi50aGlzLnByb3BzIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q29sdW1uXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I9eyB3aWNoZXZyKCBiYWNrZ3JvdW5kQ29sb3IsIG1qQXR0cmlidXRlKCBcImJhY2tncm91bmQtY29sb3JcIiApICkgfVxyXG5cdFx0XHRcdFx0XHRib3JkZXItbGVmdD17IGAxMHB4IHNvbGlkICR7IHdpY2hldnIoIHNpZGVDb2xvciwgbWpBdHRyaWJ1dGUoIFwic2lkZS1jb2xvclwiICkgKSB9YCB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0XHJcblx0XHRcdFx0XHRcdFx0Y29sb3IgPSB7IHdpY2hldnIoIGZvcmVncm91bmRDb2xvciwgbWpBdHRyaWJ1dGUoIFwiZm9yZWdyb3VuZC1jb2xvclwiICkgKSB9XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZz1cIjIwcHggMjBweCAyMHB4IDIwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZSA9IFwiMTVweFwiXHJcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmcgPSBcIjAuNXB4XCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsgd2ljaGV2ciggbWVzc2FnZSwgbWpBdHRyaWJ1dGUoIFwibWVzc2FnZVwiICkgKSB9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDwvQ29sdW1uPlxyXG5cdFx0XHRcdDwvU2VjdGlvbj4gKTtcclxuXHR9XHJcbn1cclxuXHJcblByb21wdC50YWdOYW1lID0gdGFnTmFtZTtcclxuUHJvbXB0LnBhcmVudFRhZyA9IHBhcmVudFRhZztcclxuUHJvbXB0LmVuZGluZ1RhZyA9IGVuZGluZ1RhZztcclxuUHJvbXB0LmRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IGRlZmF1bHRNSk1MRGVmaW5pdGlvbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21wdDtcclxuIl19

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[305]);
});
//# sourceMappingURL=prompt.support.js.map