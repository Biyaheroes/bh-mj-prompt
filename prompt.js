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
              */Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = require("babel-runtime/helpers/jsx");var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = require("react");var _react2 = _interopRequireDefault(_react);

var _mjmlCore = require("mjml-core");

var _mjmlColumn = require("mjml-column");var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = require("mjml-section");var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = require("mjml-text");var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _wichevr = require("wichevr");var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

//# sourceMappingURL=prompt.js.map