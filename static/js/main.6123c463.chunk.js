(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.todayTimerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.todayTimerId=window.setInterval((function(){e.setState({today:new Date}),console.info(e.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.todayTimerId)}},{key:"render",value:function(){var e=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(s.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.clockNameTimerId=0,e.handleDocumentLeftClick=function(){e.setState({hasClock:!0})},e.handleDocumentRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.clockNameTimerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("click",this.handleDocumentLeftClick),document.addEventListener("contextmenu",this.handleDocumentRightClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.clockNameTimerId),document.removeEventListener("click",this.handleDocumentLeftClick),document.removeEventListener("contextmenu",this.handleDocumentRightClick)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(m,{name:t})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6123c463.chunk.js.map