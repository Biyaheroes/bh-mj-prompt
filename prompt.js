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
              			"package": "prompt",
              			"path": "prompt/prompt.jsx",
              			"file": "prompt.jsx",
              			"module": "prompt",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-prompt.git",
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



var _jquery = require("jquery");var _jquery2 = _interopRequireDefault(_jquery);
var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactDom = require("react-dom");var _reactDom2 = _interopRequireDefault(_reactDom);

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
		"name": "",
		"background-color": "white",
		"foreground-color": "black",
		"side-color": "gray",
		"message": "" } };var




Prompt = (0, _mjmlCore.MJMLElement)(_class = function (_PureComponent) {(0, _inherits3.default)(Prompt, _PureComponent);function Prompt() {(0, _classCallCheck3.default)(this, Prompt);return (0, _possibleConstructorReturn3.default)(this, (Prompt.__proto__ || (0, _getPrototypeOf2.default)(Prompt)).apply(this, arguments));}(0, _createClass3.default)(Prompt, [{ key: "resolve", value: function resolve(
		property) {var
			mjAttribute = property.mjAttribute;var


			name =


			property.name,message = property.message,backgroundColor = property.backgroundColor,foregroundColor = property.foregroundColor,sideColor = property.sideColor;

			return {
				"name": (0, _wichevr2.default)(name, mjAttribute("name")),
				"message": (0, _wichevr2.default)(message, mjAttribute("message")),
				"backgroundColor": (0, _wichevr2.default)(backgroundColor, mjAttribute("background-color")),
				"foregroundColor": (0, _wichevr2.default)(foregroundColor, mjAttribute("foreground-color")),
				"sideColor": (0, _wichevr2.default)(sideColor, mjAttribute("side-color")) };

		} }, { key: "componentWillMount", value: function componentWillMount()

		{
			this.setState({ "data": this.resolve(this.props) });
		} }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

		property) {
			this.setState({ "data": this.resolve(property) });
		} }, { key: "render", value: function render()

		{var _state$data =
			this.state.data,message = _state$data.message,backgroundColor = _state$data.backgroundColor,foregroundColor = _state$data.foregroundColor,sideColor = _state$data.sideColor;

			return (
				_react2.default.createElement(_mjmlSection2.default,
					this.props, (0, _jsx3.default)(_mjmlColumn2.default, { "background-color":


						backgroundColor, "border-left": "10px solid " +
						sideColor }, void 0, (0, _jsx3.default)(_mjmlText2.default, { "css-class":


						"message", color:
						foregroundColor, padding:
						"20px 20px 20px 20px", "font-size":
						"15px", "letter-spacing":
						"0.5px" }, void 0,

					message))));




		} }, { key: "componentDidMount", value: function componentDidMount()

		{
			(0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).
			addClass("bh-mj-prompt").
			addClass(this.state.data.name).
			append("\n\t\t\t\t<link\n\t\t\t\t\tclass=\"bh-mj-prompt style\"\n\t\t\t\t\trel=\"stylesheet\"\n\t\t\t\t\ttype=\"text/css\"\n\t\t\t\t\thref=\"https://unpkg.com/bh-mj-prompt/prompt.css\"\n\t\t\t\t/>\n\t\t\t");







		} }, { key: "componentWillUnmount", value: function componentWillUnmount()

		{
			(0, _jquery2.default)(".bh-mj-prompt.style").remove();
		} }]);return Prompt;}(_react.PureComponent)) || _class;


Prompt.tagName = tagName;
Prompt.parentTag = parentTag;
Prompt.endingTag = endingTag;
Prompt.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Prompt;

//# sourceMappingURL=prompt.js.map