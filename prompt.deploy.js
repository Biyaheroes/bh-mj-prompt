!function webpackUniversalModuleDefinition(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.prompt=e():t.prompt=e()}(this,function(){return webpackJsonpprompt([4],{309:function(t,e,o){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n,r=o(310),i=_interopRequireDefault(r),p=o(328),a=_interopRequireDefault(p),u=o(332),l=_interopRequireDefault(u),s=o(333),d=_interopRequireDefault(s),m=o(337),f=_interopRequireDefault(m),c=o(346),g=_interopRequireDefault(c);o(354);var h=o(192),v=_interopRequireDefault(h),b=o(39),A=_interopRequireDefault(b),x=o(374),_=_interopRequireDefault(x),C=o(32),D=o(671),y=_interopRequireDefault(D),k=o(676),R=_interopRequireDefault(k),j=o(677),q=_interopRequireDefault(j),M=o(678),P=_interopRequireDefault(M),E=["mj-container","mj-wrapper"],W={content:"",attributes:{name:"","background-color":"white","foreground-color":"black","side-color":"gray",message:""}},w=(0,C.MJMLElement)(n=function(t){function Prompt(){return(0,l.default)(this,Prompt),(0,f.default)(this,(Prompt.__proto__||(0,a.default)(Prompt)).apply(this,arguments))}return(0,g.default)(Prompt,t),(0,d.default)(Prompt,[{key:"resolve",value:function resolve(t){var e=t.mjAttribute,o=t.name,n=t.message,r=t.backgroundColor,i=t.foregroundColor,p=t.sideColor;return{name:(0,P.default)(o,e("name")),message:(0,P.default)(n,e("message")),backgroundColor:(0,P.default)(r,e("background-color")),foregroundColor:(0,P.default)(i,e("foreground-color")),sideColor:(0,P.default)(p,e("side-color"))}}},{key:"componentWillMount",value:function componentWillMount(){this.setState({data:this.resolve(this.props)})}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(t){this.setState({data:this.resolve(t)})}},{key:"render",value:function render(){var t=this.state.data,e=t.message,o=t.backgroundColor,n=t.foregroundColor,r=t.sideColor;return A.default.createElement(R.default,this.props,(0,i.default)(y.default,{"background-color":o,"border-left":"10px solid "+r},void 0,(0,i.default)(q.default,{"css-class":"message",color:n,padding:"20px 20px 20px 20px","font-size":"15px","letter-spacing":"0.5px"},void 0,e)))}},{key:"componentDidMount",value:function componentDidMount(){(0,v.default)(_.default.findDOMNode(this)).addClass("bh-mj-prompt").addClass(this.state.data.name).append('\n\t\t\t\t<link\n\t\t\t\t\tclass="bh-mj-prompt style"\n\t\t\t\t\trel="stylesheet"\n\t\t\t\t\ttype="text/css"\n\t\t\t\t\thref="https://unpkg.com/bh-mj-prompt/prompt.css"\n\t\t\t\t/>\n\t\t\t')}},{key:"componentWillUnmount",value:function componentWillUnmount(){(0,v.default)(".bh-mj-prompt.style").remove()}}]),Prompt}(b.PureComponent))||n;w.tagName="mj-prompt",w.parentTag=E,w.endingTag=!1,w.defaultMJMLDefinition=W,e.default=w},354:function(t,e,o){var n=o(355);"string"==typeof n&&(n=[[t.i,n,""]]);var r={singleton:!0};r.transform=void 0,o(357)(n,r),n.locals&&(t.exports=n.locals)},355:function(t,e,o){e=t.exports=o(356)(!0),e.push([t.i,".bh-mj-prompt .message,\n.bh-mj-prompt .message > td > div {\n  padding-left: 20px !important;\n  padding-top: 20px !important;\n  padding-right: 20px !important;\n  padding-bottom: 20px !important;\n}\n\n","",{version:3,sources:["/home/richeve/bh/bh-mj-prompt/prompt.scss"],names:[],mappings:"AACC;;EAEC,8BAAA;EACA,6BAAA;EACA,+BAAA;EACA,gCAAA;CAAD",file:"prompt.scss",sourcesContent:[".bh-mj-prompt {\n\t.message,\n\t.message > td > div {\n\t\tpadding-left: 20px !important;\n\t\tpadding-top: 20px !important;\n\t\tpadding-right: 20px !important;\n\t\tpadding-bottom: 20px !important;\n\t}\n}\n"],sourceRoot:""}])},445:function(t,e){},515:function(t,e){},575:function(t,e){},599:function(t,e){},611:function(t,e){},622:function(t,e){}},[309])});
//# sourceMappingURL=prompt.deploy.js.map