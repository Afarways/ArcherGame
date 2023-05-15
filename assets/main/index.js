System.register("chunks:///_virtual/Arrow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,e,n,h,s,l,o,g,f;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,h=i.assertThisInitialized},function(i){s=i.cclegacy,l=i._decorator,o=i.Node,g=i.Vec3,f=i.Component}],execute:function(){var r,a,d,L,c;s._RF.push({},"70443o/Ql1HR6UbO/mF8Nma","Arrow",void 0);var u=l.ccclass,y=l.property;i("default",(r=u("Arrow"),a=y(o),r((c=t((L=function(i){function t(){for(var t,e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];return t=i.call.apply(i,[this].concat(s))||this,n(t,"circle",c,h(t)),t.isAlive=void 0,t.flightLine=null,t}e(t,i);var s=t.prototype;return s.onLoad=function(){this.initFLightLine()},s.update=function(i){this.isAlive&&this.changeArrowPos(i)},s.onCollisionEnter=function(i,t){},s.initFLightLine=function(){this.flightLine={k:0,b:0,x:0,y:0,direction:0,degree:0,speed:50,x_add:0,y_add:0}},s.changeArrowPos=function(i){this.flightLine.x+=this.flightLine.x_add,this.flightLine.y+=this.flightLine.y_add,this.node.position=new g(this.flightLine.x,this.flightLine.y)},s.changeFightLine=function(i,t,e){var n=1334;i<=0?(this.flightLine.x=0,this.flightLine.k=-this.flightLine.k,this.flightLine.direction=1,this.flightLine.degree=Math.atan(this.flightLine.k)):i>=750?(this.flightLine.x=750,this.flightLine.k=-this.flightLine.k,this.flightLine.direction=0,this.flightLine.degree=Math.atan(this.flightLine.k)):t<=0?this.flightLine.direction<2?(this.flightLine.y=0,this.flightLine.k=-this.flightLine.k,this.flightLine.degree=Math.atan(this.flightLine.k)):(this.flightLine.y=0,this.flightLine.direction=2):t>=n&&(this.flightLine.direction<2?(this.flightLine.y=n,this.flightLine.k=-this.flightLine.k,this.flightLine.degree=Math.atan(this.flightLine.k)):(this.flightLine.y=n,this.flightLine.direction=3))},s.changeArrowAngle=function(i){1==this.flightLine.direction?this.node.angle=-(90-180*this.flightLine.degree/Math.PI):0==this.flightLine.direction?this.node.angle=-(-90-180*this.flightLine.degree/Math.PI):2==this.flightLine.direction?this.node.angle=0:3==this.flightLine.direction&&(this.node.angle=-180)},s.setXAndYAdd=function(){var i=Math.atan(this.flightLine.k);0==this.flightLine.direction?(this.flightLine.x_add=this.flightLine.speed*Math.cos(i)*1,this.flightLine.y_add=this.flightLine.speed*Math.sin(i)*1):1==this.flightLine.direction||2==this.flightLine.direction?(this.flightLine.x_add=-this.flightLine.speed*Math.cos(i)*1,this.flightLine.y_add=-this.flightLine.speed*Math.sin(i)*1):(this.flightLine.x_add=this.flightLine.speed*Math.cos(i)*1,this.flightLine.y_add=this.flightLine.speed*Math.sin(i)*1)},s.setFLightLine=function(i){this.flightLine=i},s.getFLightLine=function(){return this.flightLine},s.setFlightLineSpeed=function(i){this.flightLine.speed*=i,this.flightLine.x_add*=i,this.flightLine.y_add*=i},s.onDestroy=function(){},s.updateArrowAngle=function(i){var t=this.node.getPosition(),e=this.getDirection(i),n=(i.y-t.y)/(i.x-t.x);0==e?this.node.angle=Math.atan(n)/3.14*180-90:1==e||2==e?this.node.angle=Math.atan(n)/3.14*180+90:3==e&&(this.node.angle=Math.atan(n)/3.14*180-90),this.flightLine.k=n,this.flightLine.degree=this.node.angle,this.flightLine.direction=e,this.flightLine.x=this.node.getPosition().x,this.flightLine.y=this.node.getPosition().y,this.setXAndYAdd()},s.getDirection=function(i){var t=this.node.getPosition();return i.x>t.x&&i.y>t.y?0:i.x<t.x&&i.y>t.y?1:i.x<t.x&&i.y<t.y?2:i.x>t.x&&i.y<t.y?3:void 0},s.shoot=function(){this.isAlive=!0,this.circle.active=!1},s.reSet=function(){this.isAlive=!1,this.circle.active=!0},t}(f)).prototype,"circle",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=L))||d));s._RF.pop()}}}));

System.register("chunks:///_virtual/EditorModel.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e.EventTarget,s=e.Component}],execute:function(){n._RF.push({},"f3d83tIpNpAtYtXBhA/s9v8","EditorModel",void 0),e("default",function(e){function n(){for(var t,n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))||this).selectPropMap=new Map,t.eventTarget=new r,t.currentLevelIndex=1,t.levelsData=[],t}return t(n,e),n.getInstance=function(){return n.sInstance||(n.sInstance=new n),n.sInstance},n}(s)).sInstance=void 0,n._RF.pop()}}}));

System.register("chunks:///_virtual/EditorScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Prop.ts","./UIUtil.ts","./EditorModel.ts"],(function(e){"use strict";var t,n,o,i,a,l,r,c,s,u,h,v,p,d,g,f,I,N;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,l=e._decorator,r=e.EditBox,c=e.Label,s=e.Prefab,u=e.Node,h=e.sys,v=e.instantiate,p=e.Vec3,d=e.UITransform,g=e.Component},function(e){f=e.Prop},function(e){I=e.default},function(e){N=e.default}],execute:function(){var L,C,T,m,x,y,E,b,D,S,M;a._RF.push({},"ebd15rCBVBKm7Rme1EC/nVi","EditorScene",void 0);var w=l.ccclass,R=l.property;e("EditorScene",(L=w("editorScene"),C=R(r),T=R(c),m=R(s),x=R(u),L((b=t((E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,o(t,"levelEditBox",b,i(t)),o(t,"textLevel",D,i(t)),o(t,"prop",S,i(t)),o(t,"levelRootNode",M,i(t)),t.touchNode=null,t.propMap=new Map,t}n(t,e);var a=t.prototype;return a.onLoad=function(){this.node.on(u.EventType.TOUCH_START,this.onTouchStart,this,!0),this.node.on(u.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.on(u.EventType.TOUCH_END,this.onTouchEnd,this,!0),this.node.on(u.EventType.TOUCH_CANCEL,this.onTouchCancel,this,!0),this.textLevel.string="当前关卡:"+N.getInstance().currentLevelIndex,N.getInstance().levelsData=JSON.parse(h.localStorage.getItem("levelData")),this.changeLevel(N.getInstance().currentLevelIndex)},a.onTouchStart=function(e){var t=Number(e.target.name);if(!isNaN(t)){this.touchNode=v(this.prop),this.touchNode.getComponent(f).initUI(Number(e.target.name)),this.levelRootNode.addChild(this.touchNode),this.propMap.set(this.touchNode.uuid,this.touchNode);var n=e.touch.getLocation(),o=new p(n.x,n.y,0),i=this.node.getComponent(d).convertToNodeSpaceAR(o);this.touchNode.setPosition(i.x,i.y)}},a.onTouchMove=function(e){if(this.touchNode){var t=e.touch.getLocation(),n=new p(t.x,t.y,0),o=this.node.getComponent(d).convertToNodeSpaceAR(n);this.touchNode.setPosition(o.x,o.y)}},a.onTouchEnd=function(e){this.touchNode=null},a.onTouchCancel=function(e){this.touchNode=null},a.changeLevel=function(e){var t,n,o=this;this.levelRootNode.removeAllChildren(),this.propMap.clear(),N.getInstance().selectPropMap.clear(),N.getInstance().currentLevelIndex=null!=e?e:1,(null!=(t=null==(n=N.getInstance().levelsData)?void 0:n[e])?t:[]).forEach((function(e){var t=v(o.prop);o.levelRootNode.addChild(t),o.propMap.set(t.uuid,t),t.getComponent(f).reSetUI(e)})),this.textLevel.string="当前关卡:"+N.getInstance().currentLevelIndex},a.onClickSaveLevelData=function(){var e;N.getInstance().levelsData=null!=(e=N.getInstance().levelsData)?e:[];var t=N.getInstance().currentLevelIndex,n=[];this.propMap.forEach((function(e){n.push(e.getComponent(f).getData())})),N.getInstance().levelsData[t]=n,I.showToastMsg("当前关卡保存成功"),h.localStorage.setItem("levelData",JSON.stringify(N.getInstance().levelsData))},a.onClickDeleteLevelData=function(){var e=N.getInstance().currentLevelIndex;N.getInstance().levelsData[e]=[],this.changeLevel(e),I.showToastMsg("当前关卡数据已删除")},a.onClickChangeLevel=function(){var e=this.levelEditBox.string;Number(e)<=0?I.showToastMsg("跳转关卡不合法"):this.changeLevel(Number(e))},a.onClickExport=function(){I.saveForBrowser(JSON.stringify(N.getInstance().levelsData),"关卡配置.json")},a.onClickNext=function(){this.onClickSaveLevelData();var e=N.getInstance().currentLevelIndex;this.changeLevel(e+1)},a.onClickPrev=function(){var e=N.getInstance().currentLevelIndex;1!==e&&(this.onClickSaveLevelData(),this.changeLevel(e-1))},t}(g)).prototype,"levelEditBox",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(E.prototype,"textLevel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(E.prototype,"prop",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(E.prototype,"levelRootNode",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=E))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameInterface.ts",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){var r;t("Dir_Arrow",void 0),e._RF.push({},"c7b05DtYatFx7/Ig8ql1iIu","GameInterface",void 0),function(t){t[t.DIR_0=0]="DIR_0",t[t.DIR_1=1]="DIR_1",t[t.DIR_2=2]="DIR_2",t[t.DIR_3=3]="DIR_3"}(r||(r=t("Dir_Arrow",{}))),e._RF.pop()}}}));

System.register("chunks:///_virtual/GameScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Arrow.ts"],(function(o){"use strict";var t,e,n,r,i,a,s,c,h,u,d,l;return{setters:[function(o){t=o.applyDecoratedDescriptor,e=o.inheritsLoose,n=o.initializerDefineProperty,r=o.assertThisInitialized},function(o){i=o.cclegacy,a=o._decorator,s=o.Node,c=o.Vec3,h=o.UITransform,u=o.Vec2,d=o.Component},function(o){l=o.default}],execute:function(){var p,v,T,f,w;i._RF.push({},"d4ddeWvFYpFhqllvS8KZRss","GameScene",void 0);var y=a.ccclass,g=a.property;o("GameScene",(p=y("GameScene"),v=g(s),p((w=t((f=function(o){function t(){for(var t,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return t=o.call.apply(o,[this].concat(i))||this,n(t,"arrowNode",w,r(t)),t.startPos=void 0,t.arrow=void 0,t}e(t,o);var i=t.prototype;return i.onLoad=function(){this.node.on(s.EventType.TOUCH_START,this.onTouchStart,this,!0),this.node.on(s.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.on(s.EventType.TOUCH_END,this.onTouchEnd,this,!0),this.node.on(s.EventType.TOUCH_CANCEL,this.onTouchCancel,this,!0),this.arrow=this.arrowNode.getComponent(l)},i.onTouchStart=function(o){this.arrowNode.active=!0,this.arrow.isAlive=!1;var t=o.touch.getStartLocation(),e=new c(t.x,t.y,0),n=this.node.getComponent(h).convertToNodeSpaceAR(e);this.arrowNode.setPosition(n.x,n.y),this.startPos=t,this.arrow.reSet()},i.onTouchMove=function(o){var t=o.touch.getLocation(),e=new c(t.x,t.y,0),n=this.node.getComponent(h).convertToNodeSpaceAR(e);this.arrow.updateArrowAngle(n)},i.onTouchEnd=function(o){var t=o.touch.getLocation();u.distance(this.startPos,t)>100?this.arrow.shoot():this.arrowNode.active=!1},i.onTouchCancel=function(o){console.log(o)},t}(d)).prototype,"arrowNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=f))||T));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameInterface.ts","./EditorModel.ts","./EditorScene.ts","./Menu.ts","./Prop.ts","./PropMove.ts","./Arrow.ts","./GameScene.ts","./Toast.ts","./UIUtil.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Menu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EditorModel.ts","./UIUtil.ts","./Prop.ts","./EditorScene.ts"],(function(e){"use strict";var t,n,o,i,r,l,c,p,s,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,c=e.Component},function(e){p=e.default},function(e){s=e.default},function(e){a=e.Prop},function(e){u=e.EditorScene}],execute:function(){var d,v,g,f,h;r._RF.push({},"1a5d1x7OVFMhJ8rA9xm24wd","Menu",void 0);var C=l.ccclass,M=l.property;e("Menu",(d=C("Menu"),v=M(u),d((h=t((f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,o(t,"editorScene",h,i(t)),t}n(t,e);var r=t.prototype;return r.getSelectProp=function(){var e=p.getInstance().selectPropMap,t=[];return e.forEach((function(e,n){e&&t.push(n)})),0===t.length?(s.showToastMsg("当前没有选中节点"),null):1===t.length?this.editorScene.propMap.get(t[0]):(s.showToastMsg("当前选中节点过多，此操作只能选中一个道具节点"),null)},r.onClickExtendLeft=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);10009===(null==t?void 0:t.propID)||10010===(null==t?void 0:t.propID)?t.extendLeft():s.showToastMsg("当前道具不支持扩展")}},r.onClickExtendRight=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);10009===(null==t?void 0:t.propID)||10010===(null==t?void 0:t.propID)?t.extendRight():s.showToastMsg("当前道具不支持扩展")}},r.onClickExtendUp=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);10009===(null==t?void 0:t.propID)||10010===(null==t?void 0:t.propID)?t.extendUp():s.showToastMsg("当前道具不支持扩展")}},r.onClickExtendDown=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);10009===(null==t?void 0:t.propID)||10010===(null==t?void 0:t.propID)?t.extendDown():s.showToastMsg("当前道具不支持扩展")}},r.onClickDelete=function(){var e=p.getInstance().selectPropMap,t=this.getSelectProp();t&&(e.delete(t.uuid),this.editorScene.propMap.delete(t.uuid),t.destroy())},r.onClickExtendLine=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);null==t||t.moveLine()}},r.onClickExtendTriangle=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);null==t||t.moveTriangle()}},r.onClickExtendCircle=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);null==t||t.moveCircle()}},r.onClickPreview=function(){var e=this.getSelectProp();if(e){var t=e.getComponent(a);t.moveType<=0?s.showToastMsg("当前节点没有添加动画,请添加动画后预览"):t.previewMoveAnimation()}},t}(c)).prototype,"editorScene",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=f))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/Prop.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EditorModel.ts","./PropMove.ts"],(function(e){"use strict";var o,t,i,r,n,s,p,d,a,h,c,l,v,u,g,f,A,N,T,m,x;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,p=e.SpriteFrame,d=e.Sprite,a=e.Toggle,h=e.Node,c=e.EditBox,l=e.UITransform,v=e.Layers,u=e.Graphics,g=e.Tween,f=e.Vec3,A=e.Vec2,N=e.tween,T=e.Component},function(e){m=e.default},function(e){x=e.PropMove}],execute:function(){var E,M,y,w,P,C,b,B,D,S,L,U,F,I,_,z,k,O,H,R,V;n._RF.push({},"8dc34+EEHFObrTlLvKZ5oK0","Prop",void 0);var K=s.ccclass,j=s.property;e("Prop",(E=K("Prop"),M=j(p),y=j(d),w=j(a),P=j(h),C=j(h),b=j(h),B=j(h),D=j(x),S=j(c),E((F=o((U=function(e){function o(){for(var o,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return o=e.call.apply(e,[this].concat(n))||this,i(o,"props",F,r(o)),i(o,"propSp",I,r(o)),i(o,"toggleNode",_,r(o)),i(o,"leftNode",z,r(o)),i(o,"rightNode",k,r(o)),i(o,"upNode",O,r(o)),i(o,"downNode",H,r(o)),i(o,"propMoveNodeArr",R,r(o)),i(o,"speedEditBoxArr",V,r(o)),o.startPos=void 0,o.propID=0,o.moveType=0,o}t(o,e);var n=o.prototype;return n.onLoad=function(){this.node.on(h.EventType.TOUCH_START,this.onTouchStart,this,!0),this.node.on(h.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.on(h.EventType.TOUCH_END,this.onTouchEnd,this,!0),this.node.on(h.EventType.TOUCH_CANCEL,this.onTouchCancel,this,!0),m.getInstance().eventTarget.on("propMove",this.onPropMove,this),this.toggleNode.isChecked=!1},n.initUI=function(e){var o=this;if(e){this.propID=e,this.propSp.spriteFrame=this.props[e-10001];var t=this.propSp.node.getComponent(l).contentSize;this.getComponent(l).setContentSize(t),this.leftNode.setPosition(-t.width/2,0),this.rightNode.setPosition(t.width/2,0),this.upNode.setPosition(0,t.height/2),this.downNode.setPosition(0,-t.height/2),this.propMoveNodeArr.forEach((function(e){e.propSp.spriteFrame=o.propSp.spriteFrame.clone(),e.node.active=!1}))}},n.initDraw=function(){this.propMoveNodeArr[0].node.active=!1,this.propMoveNodeArr[1].node.active=!1,this.propMoveNodeArr[2].node.active=!1,this.speedEditBoxArr[0].node.active=!1,this.speedEditBoxArr[1].node.active=!1,this.speedEditBoxArr[2].node.active=!1},n.onTouchStart=function(e){e.target===this.node&&(this.startPos=e.touch.getStartLocation())},n.onTouchMove=function(e){if(e.target===this.node){var o=e.touch.getLocation(),t=o.x-this.startPos.x,i=o.y-this.startPos.y,r=this.node.getPosition();this.node.setPosition(r.x+t,r.y+i),this.startPos=o}},n.onTouchEnd=function(e){if(e.target===this.node)e.touch.getLocation()},n.onTouchCancel=function(e){e.target,this.node},n.onTouchToggle=function(e){console.log(e.target.getComponent(a).isChecked),m.getInstance().selectPropMap.set(this.node.uuid,e.target.getComponent(a).isChecked)},n.extendLeft=function(){var e=new h;e.addComponent(d),e.layer=v.Enum.UI_2D,e.getComponent(d).spriteFrame=this.propSp.spriteFrame.clone(),this.leftNode.addChild(e)},n.extendRight=function(){var e=new h;e.addComponent(d),e.layer=v.Enum.UI_2D,e.getComponent(d).spriteFrame=this.propSp.spriteFrame.clone(),this.rightNode.addChild(e)},n.extendUp=function(){var e=new h;e.addComponent(d),e.layer=v.Enum.UI_2D,e.getComponent(d).spriteFrame=this.propSp.spriteFrame.clone(),this.upNode.addChild(e)},n.extendDown=function(){var e=new h;e.addComponent(d),e.layer=v.Enum.UI_2D,e.getComponent(d).spriteFrame=this.propSp.spriteFrame.clone(),this.downNode.addChild(e)},n.moveLine=function(){this.initDraw(),this.moveType=1,this.propMoveNodeArr[0].node.active=!0,this.speedEditBoxArr[0].node.active=!0,this.drawLine()},n.moveTriangle=function(){this.initDraw(),this.moveType=2,this.propMoveNodeArr[0].node.active=!0,this.propMoveNodeArr[1].node.active=!0,this.speedEditBoxArr[0].node.active=!0,this.speedEditBoxArr[1].node.active=!0,this.speedEditBoxArr[2].node.active=!0,this.drawTriangle()},n.moveCircle=function(){this.initDraw(),this.moveType=3,this.propMoveNodeArr[0].node.active=!0,this.speedEditBoxArr[0].node.active=!0,this.drawCircle()},n.drawLine=function(){var e=this.propMoveNodeArr[0].node.getPosition(),o=this.getComponent(u);o.clear(),o.moveTo(0,0),o.lineTo(e.x,e.y),o.close(),o.stroke(),o.fill(),this.speedEditBoxArr[0].node.setPosition(e.x/2,e.y/2)},n.drawTriangle=function(){var e=this.propMoveNodeArr[0].node.getPosition(),o=this.propMoveNodeArr[1].node.getPosition(),t=this.getComponent(u);t.clear(),t.moveTo(0,0),t.lineTo(e.x,e.y),t.lineTo(o.x,o.y),t.lineTo(0,0),t.close(),t.stroke(),t.fill(),this.speedEditBoxArr[0].node.setPosition(e.x/2,e.y/2),this.speedEditBoxArr[1].node.setPosition(e.x/2+o.x/2,e.y/2+o.y/2),this.speedEditBoxArr[2].node.setPosition(o.x/2,o.y/2)},n.drawCircle=function(){var e=this.propMoveNodeArr[0].node.getPosition(),o=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),t=this.getComponent(u);t.clear(),t.circle(0,0,o),t.close(),t.stroke(),t.fill(),this.speedEditBoxArr[0].node.setPosition(e.x/2,e.y/2)},n.onPropMove=function(){switch(this.moveType){case 1:this.drawLine();break;case 2:this.drawTriangle();break;case 3:this.drawCircle()}var e=this.propMoveNodeArr[2].node;g.stopAllByTarget(e)},n.previewMoveAnimation=function(){var e=Number(this.speedEditBoxArr[0].textLabel.string)||1,o=Number(this.speedEditBoxArr[1].textLabel.string)||1,t=Number(this.speedEditBoxArr[2].textLabel.string)||1,i=new f,r=this.propMoveNodeArr[0].node.getPosition(),n=this.propMoveNodeArr[1].node.getPosition(),s=this.propMoveNodeArr[2].node,p=A.distance(r,i)/e,d=A.distance(r,n)/o,a=A.distance(n,i)/t,h=A.distance(r,i);switch(s.active=!0,s.setPosition(0,0),console.log(e,o,t,p,d,a),g.stopAllByTarget(s),this.moveType){case 1:var c=N(s).to(p,{position:r}).to(p,{position:i}).union();N(s).repeatForever(c).start();break;case 2:var l=N(s).to(p,{position:r}).to(d,{position:n}).to(a,{position:i}).union();N(s).repeatForever(l).start();break;case 3:var v=N(s).to(p,{position:r},{onUpdate:function(e,o){var t=2*o*Math.PI;s.setPosition(h*Math.cos(t),h*Math.sin(t))}}).union();N(s).repeatForever(v).start()}},n.getData=function(){return{propID:this.propID,moveType:this.moveType,pos:this.node.getPosition(),speed1:this.speedEditBoxArr[0].string,speed2:this.speedEditBoxArr[1].string,speed3:this.speedEditBoxArr[2].string,pos1:this.propMoveNodeArr[0].node.getPosition(),pos2:this.propMoveNodeArr[1].node.getPosition(),pos3:this.propMoveNodeArr[2].node.getPosition(),left:this.leftNode.children.length,right:this.rightNode.children.length,up:this.upNode.children.length,down:this.downNode.children.length,propMoveNodeActive:[this.propMoveNodeArr[0].node.active,this.propMoveNodeArr[1].node.active,this.propMoveNodeArr[2].node.active],speedEditBoxActive:[this.speedEditBoxArr[0].node.active,this.speedEditBoxArr[1].node.active,this.speedEditBoxArr[2].node.active]}},n.reSetUI=function(e){this.initUI(e.propID),this.moveType=e.moveType,this.node.setPosition(e.pos),this.speedEditBoxArr[0].node.active=e.speedEditBoxActive[0],this.speedEditBoxArr[1].node.active=e.speedEditBoxActive[1],this.speedEditBoxArr[2].node.active=e.speedEditBoxActive[2],this.propMoveNodeArr[0].node.active=e.propMoveNodeActive[0],this.propMoveNodeArr[1].node.active=e.propMoveNodeActive[1],this.propMoveNodeArr[2].node.active=e.propMoveNodeActive[2],this.speedEditBoxArr[0].string=e.speed1,this.speedEditBoxArr[1].string=e.speed2,this.speedEditBoxArr[2].string=e.speed3,this.propMoveNodeArr[0].node.setPosition(e.pos1),this.propMoveNodeArr[1].node.setPosition(e.pos2),this.propMoveNodeArr[2].node.setPosition(e.pos3),console.log(this.speedEditBoxArr[0]);for(var o=0;o<e.left;o++)this.extendLeft();for(var t=0;t<e.right;t++)this.extendRight();for(var i=0;i<e.up;i++)this.extendUp();for(var r=0;r<e.down;r++)this.extendDown;this.onPropMove()},n.onDestroy=function(){this.node.off(h.EventType.TOUCH_START,this.onTouchStart,this,!0),this.node.off(h.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.off(h.EventType.TOUCH_END,this.onTouchEnd,this,!0),this.node.off(h.EventType.TOUCH_CANCEL,this.onTouchCancel,this,!0),m.getInstance().eventTarget.off("propMove",this.onPropMove,this)},o}(T)).prototype,"props",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),I=o(U.prototype,"propSp",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=o(U.prototype,"toggleNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=o(U.prototype,"leftNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=o(U.prototype,"rightNode",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=o(U.prototype,"upNode",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=o(U.prototype,"downNode",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=o(U.prototype,"propMoveNodeArr",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),V=o(U.prototype,"speedEditBoxArr",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L=U))||L));n._RF.pop()}}}));

System.register("chunks:///_virtual/PropMove.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EditorModel.ts"],(function(t){"use strict";var o,e,n,i,r,s,c,a,h,u;return{setters:[function(t){o=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,c=t.Sprite,a=t.Node,h=t.Component},function(t){u=t.default}],execute:function(){var p,l,d,v,T;r._RF.push({},"eee1aMv1aJH4oJuY0lO7V24","PropMove",void 0);var f=s.ccclass,y=s.property;t("PropMove",(p=f("PropMove"),l=y(c),p((T=o((v=function(t){function o(){for(var o,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return o=t.call.apply(t,[this].concat(r))||this,n(o,"propSp",T,i(o)),o.startPos=void 0,o.moveType=0,o}e(o,t);var r=o.prototype;return r.onLoad=function(){this.node.on(a.EventType.TOUCH_START,this.onTouchStart,this,!0),this.node.on(a.EventType.TOUCH_MOVE,this.onTouchMove,this,!0),this.node.on(a.EventType.TOUCH_END,this.onTouchEnd,this,!0),this.node.on(a.EventType.TOUCH_CANCEL,this.onTouchCancel,this,!0)},r.onTouchStart=function(t){t.target===this.node&&(this.startPos=t.touch.getStartLocation())},r.onTouchMove=function(t){if(t.target===this.node){var o=t.touch.getLocation(),e=o.x-this.startPos.x,n=o.y-this.startPos.y,i=this.node.getPosition();this.node.setPosition(i.x+e,i.y+n),this.startPos=o,u.getInstance().eventTarget.emit("propMove")}},r.onTouchEnd=function(t){if(t.target===this.node)t.touch.getLocation()},r.onTouchCancel=function(t){t.target,this.node},o}(h)).prototype,"propSp",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=v))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/Toast.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,i,r,a,s,c,l,p,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Label,c=t.UIOpacity,l=t.tween,p=t.Vec3,u=t.Component}],execute:function(){var y,h,f,b,d;r._RF.push({},"664ceQmPP5OerPeZg2bnLbY","Toast",void 0);var g=a.ccclass,v=a.property;t("Toast",(y=g("Toast"),h=v(s),y((d=e((b=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,n(e,"textLabel",d,i(e)),e}return o(e,t),e.prototype.show=function(t){var e=this;this.node.setPosition(0,50),this.textLabel.string=t;var o=this.node.getComponent(c);o.opacity=0,l().parallel(l(o).to(.1,{opacity:255}).delay(1).to(.3,{opacity:0}).start(),l(this.node).by(.2,{position:new p(0,50)}).start()).call((function(){e.node.destroy()}))},e}(u)).prototype,"textLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=b))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/UIUtil.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Toast.ts"],(function(e){"use strict";var t,o,n,r,i,s,a,c;return{setters:[function(e){t=e.createClass},function(e){o=e.cclegacy,n=e.resources,r=e.Prefab,i=e.instantiate,s=e.sys,a=e.log},function(e){c=e.Toast}],execute:function(){o._RF.push({},"4d044wemT1KrJQPyXQ0QmaR","UIUtil",void 0);e("default",function(){function e(){}return e.showToastMsg=function(e){var t=this;n.load("toastPrefab",r,(function(o,n){var r=i(n);t.rootNode.addChild(r),r.getComponent(c).show(e)}))},e.creatJosnFile=function(e,t){var o=JSON.stringify(e);this.saveForBrowser(o,t)},e.saveForBrowser=function(e,t){if(s.isBrowser){a("浏览器");var o=new Blob([e],{type:"application/json"}),n=document.createElement("a");n.download=t,n.innerHTML="Download File",null!=window.webkitURL&&(n.href=window.webkitURL.createObjectURL(o)),n.click()}},t(e,null,[{key:"rootNode",get:function(){return cc.director.getScene().getChildByName("Canvas")}}]),e}());o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});