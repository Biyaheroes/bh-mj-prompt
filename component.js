!function webpackUniversalModuleDefinition(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.component=e():t.component=e()}(this,function(){return webpackJsonpcomponent([4],{311:function(t,e,o){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var n=o(179),r=_interopRequireDefault(n),i=o(29),a=(_interopRequireDefault(i),o(195)),u=_interopRequireDefault(a),p=o(414),l=_interopRequireDefault(p);u.default.render((0,r.default)(l.default,{message:"Sorry this is a failed prompt.","background-color":"#c4322f","foreground-color":"white","side-color":"#be1c18"},void 0),document.getElementById("root"))},414:function(t,e,o){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n,r=o(179),i=_interopRequireDefault(r),a=o(415),u=_interopRequireDefault(a),p=o(419),l=_interopRequireDefault(p),s=o(420),d=_interopRequireDefault(s),f=o(424),c=_interopRequireDefault(f),m=o(433),g=_interopRequireDefault(m);o(441);var h=o(229),v=_interopRequireDefault(h),_=o(29),b=_interopRequireDefault(_),A=o(195),D=_interopRequireDefault(A),x=o(33),R=o(672),y=_interopRequireDefault(R),q=o(677),k=_interopRequireDefault(q),C=o(678),j=_interopRequireDefault(C),M=o(679),P=_interopRequireDefault(M),E=["mj-container","mj-wrapper"],W={content:"",attributes:{name:"","background-color":"white","foreground-color":"black","side-color":"gray",message:""}},w=(0,x.MJMLElement)(n=function(t){function Prompt(){return(0,l.default)(this,Prompt),(0,c.default)(this,(Prompt.__proto__||(0,u.default)(Prompt)).apply(this,arguments))}return(0,g.default)(Prompt,t),(0,d.default)(Prompt,[{key:"resolve",value:function resolve(t){var e=t.mjAttribute,o=t.name,n=t.message,r=t.backgroundColor,i=t.foregroundColor,a=t.sideColor;return{name:(0,P.default)(o,e("name")),message:(0,P.default)(n,e("message")),backgroundColor:(0,P.default)(r,e("background-color")),foregroundColor:(0,P.default)(i,e("foreground-color")),sideColor:(0,P.default)(a,e("side-color"))}}},{key:"componentWillMount",value:function componentWillMount(){this.setState({data:this.resolve(this.props)})}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(t){this.setState({data:this.resolve(t)})}},{key:"render",value:function render(){var t=this.state.data,e=t.message,o=t.backgroundColor,n=t.foregroundColor,r=t.sideColor;return b.default.createElement(k.default,this.props,(0,i.default)(y.default,{"background-color":o,"border-left":"10px solid "+r},void 0,(0,i.default)(j.default,{"css-class":"message",color:n,"font-size":"15px","letter-spacing":"0.5px",padding:"20px 20px 20px 20px"},void 0,e)))}},{key:"componentDidMount",value:function componentDidMount(){(0,v.default)(D.default.findDOMNode(this)).addClass("bh-mj-prompt").addClass(this.state.data.name).append('\n\t\t\t\t<link\n\t\t\t\t\tclass="bh-mj-prompt style"\n\t\t\t\t\trel="stylesheet"\n\t\t\t\t\ttype="text/css"\n\t\t\t\t\thref="https://unpkg.com/bh-mj-prompt/prompt.css"\n\t\t\t\t/>\n\t\t\t')}},{key:"componentWillUnmount",value:function componentWillUnmount(){(0,v.default)(".bh-mj-prompt.style").remove()}}]),Prompt}(_.PureComponent))||n;w.tagName="mj-prompt",w.parentTag=E,w.endingTag=!1,w.defaultMJMLDefinition=W,e.default=w},441:function(t,e,o){var n=o(442);"string"==typeof n&&(n=[[t.i,n,""]]);var r={singleton:!0};r.transform=void 0,o(444)(n,r),n.locals&&(t.exports=n.locals)},442:function(t,e,o){e=t.exports=o(443)(!0),e.push([t.i,".bh-mj-prompt .message > td > div {\n  padding-left: 20px !important;\n  padding-top: 20px !important;\n  padding-right: 20px !important;\n  padding-bottom: 20px !important;\n}\n\n","",{version:3,sources:["/home/richeve/bh/bh-mj-prompt/prompt.scss"],names:[],mappings:"AAAA;EAEE,8BAAA;EACA,6BAAA;EACA,+BAAA;EACA,gCAAA;CAAD",file:"prompt.scss",sourcesContent:[".bh-mj-prompt {\n\t.message > td > div {\n\t\tpadding-left: 20px !important;\n\t\tpadding-top: 20px !important;\n\t\tpadding-right: 20px !important;\n\t\tpadding-bottom: 20px !important;\n\t}\n}\n"],sourceRoot:""}])},446:function(t,e){},516:function(t,e){},576:function(t,e){},600:function(t,e){},612:function(t,e){},623:function(t,e){}},[311])});
//# sourceMappingURL=component.js.map