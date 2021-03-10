goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33393 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33393(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33399 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33399(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31939 = coll;
var G__31940 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31939,G__31940) : shadow.dom.lazy_native_coll_seq.call(null,G__31939,G__31940));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32032 = arguments.length;
switch (G__32032) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32043 = arguments.length;
switch (G__32043) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32060 = arguments.length;
switch (G__32060) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32070 = arguments.length;
switch (G__32070) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32084 = arguments.length;
switch (G__32084) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32097 = arguments.length;
switch (G__32097) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32108){if((e32108 instanceof Object)){
var e = e32108;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32108;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32132 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32133 = null;
var count__32134 = (0);
var i__32135 = (0);
while(true){
if((i__32135 < count__32134)){
var el = chunk__32133.cljs$core$IIndexed$_nth$arity$2(null,i__32135);
var handler_33554__$1 = ((function (seq__32132,chunk__32133,count__32134,i__32135,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32132,chunk__32133,count__32134,i__32135,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33554__$1);


var G__33560 = seq__32132;
var G__33561 = chunk__32133;
var G__33562 = count__32134;
var G__33563 = (i__32135 + (1));
seq__32132 = G__33560;
chunk__32133 = G__33561;
count__32134 = G__33562;
i__32135 = G__33563;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32132);
if(temp__5735__auto__){
var seq__32132__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32132__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32132__$1);
var G__33564 = cljs.core.chunk_rest(seq__32132__$1);
var G__33565 = c__4556__auto__;
var G__33566 = cljs.core.count(c__4556__auto__);
var G__33567 = (0);
seq__32132 = G__33564;
chunk__32133 = G__33565;
count__32134 = G__33566;
i__32135 = G__33567;
continue;
} else {
var el = cljs.core.first(seq__32132__$1);
var handler_33568__$1 = ((function (seq__32132,chunk__32133,count__32134,i__32135,el,seq__32132__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32132,chunk__32133,count__32134,i__32135,el,seq__32132__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33568__$1);


var G__33572 = cljs.core.next(seq__32132__$1);
var G__33573 = null;
var G__33574 = (0);
var G__33575 = (0);
seq__32132 = G__33572;
chunk__32133 = G__33573;
count__32134 = G__33574;
i__32135 = G__33575;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32172 = arguments.length;
switch (G__32172) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32188 = cljs.core.seq(events);
var chunk__32189 = null;
var count__32190 = (0);
var i__32191 = (0);
while(true){
if((i__32191 < count__32190)){
var vec__32213 = chunk__32189.cljs$core$IIndexed$_nth$arity$2(null,i__32191);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33589 = seq__32188;
var G__33590 = chunk__32189;
var G__33591 = count__32190;
var G__33592 = (i__32191 + (1));
seq__32188 = G__33589;
chunk__32189 = G__33590;
count__32190 = G__33591;
i__32191 = G__33592;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32188);
if(temp__5735__auto__){
var seq__32188__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32188__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32188__$1);
var G__33595 = cljs.core.chunk_rest(seq__32188__$1);
var G__33596 = c__4556__auto__;
var G__33597 = cljs.core.count(c__4556__auto__);
var G__33598 = (0);
seq__32188 = G__33595;
chunk__32189 = G__33596;
count__32190 = G__33597;
i__32191 = G__33598;
continue;
} else {
var vec__32219 = cljs.core.first(seq__32188__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33601 = cljs.core.next(seq__32188__$1);
var G__33602 = null;
var G__33603 = (0);
var G__33604 = (0);
seq__32188 = G__33601;
chunk__32189 = G__33602;
count__32190 = G__33603;
i__32191 = G__33604;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32229 = cljs.core.seq(styles);
var chunk__32231 = null;
var count__32232 = (0);
var i__32233 = (0);
while(true){
if((i__32233 < count__32232)){
var vec__32250 = chunk__32231.cljs$core$IIndexed$_nth$arity$2(null,i__32233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32250,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33606 = seq__32229;
var G__33607 = chunk__32231;
var G__33608 = count__32232;
var G__33609 = (i__32233 + (1));
seq__32229 = G__33606;
chunk__32231 = G__33607;
count__32232 = G__33608;
i__32233 = G__33609;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32229);
if(temp__5735__auto__){
var seq__32229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32229__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32229__$1);
var G__33611 = cljs.core.chunk_rest(seq__32229__$1);
var G__33612 = c__4556__auto__;
var G__33613 = cljs.core.count(c__4556__auto__);
var G__33614 = (0);
seq__32229 = G__33611;
chunk__32231 = G__33612;
count__32232 = G__33613;
i__32233 = G__33614;
continue;
} else {
var vec__32254 = cljs.core.first(seq__32229__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33615 = cljs.core.next(seq__32229__$1);
var G__33616 = null;
var G__33617 = (0);
var G__33618 = (0);
seq__32229 = G__33615;
chunk__32231 = G__33616;
count__32232 = G__33617;
i__32233 = G__33618;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32269_33619 = key;
var G__32269_33620__$1 = (((G__32269_33619 instanceof cljs.core.Keyword))?G__32269_33619.fqn:null);
switch (G__32269_33620__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33630 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33630,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33630,"aria-");
}
})())){
el.setAttribute(ks_33630,value);
} else {
(el[ks_33630] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32359){
var map__32361 = p__32359;
var map__32361__$1 = (((((!((map__32361 == null))))?(((((map__32361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32361):map__32361);
var props = map__32361__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32361__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32365 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32376 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32376,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32376;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32385 = arguments.length;
switch (G__32385) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32405){
var vec__32407 = p__32405;
var seq__32408 = cljs.core.seq(vec__32407);
var first__32409 = cljs.core.first(seq__32408);
var seq__32408__$1 = cljs.core.next(seq__32408);
var nn = first__32409;
var first__32409__$1 = cljs.core.first(seq__32408__$1);
var seq__32408__$2 = cljs.core.next(seq__32408__$1);
var np = first__32409__$1;
var nc = seq__32408__$2;
var node = vec__32407;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32411 = nn;
var G__32412 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32411,G__32412) : create_fn.call(null,G__32411,G__32412));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32413 = nn;
var G__32414 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32413,G__32414) : create_fn.call(null,G__32413,G__32414));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32428 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32428,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32428,(1),null);
var seq__32431_33689 = cljs.core.seq(node_children);
var chunk__32432_33690 = null;
var count__32433_33691 = (0);
var i__32434_33692 = (0);
while(true){
if((i__32434_33692 < count__32433_33691)){
var child_struct_33702 = chunk__32432_33690.cljs$core$IIndexed$_nth$arity$2(null,i__32434_33692);
var children_33703 = shadow.dom.dom_node(child_struct_33702);
if(cljs.core.seq_QMARK_(children_33703)){
var seq__32534_33708 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33703));
var chunk__32536_33709 = null;
var count__32537_33710 = (0);
var i__32538_33711 = (0);
while(true){
if((i__32538_33711 < count__32537_33710)){
var child_33716 = chunk__32536_33709.cljs$core$IIndexed$_nth$arity$2(null,i__32538_33711);
if(cljs.core.truth_(child_33716)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33716);


var G__33717 = seq__32534_33708;
var G__33718 = chunk__32536_33709;
var G__33719 = count__32537_33710;
var G__33720 = (i__32538_33711 + (1));
seq__32534_33708 = G__33717;
chunk__32536_33709 = G__33718;
count__32537_33710 = G__33719;
i__32538_33711 = G__33720;
continue;
} else {
var G__33721 = seq__32534_33708;
var G__33722 = chunk__32536_33709;
var G__33723 = count__32537_33710;
var G__33724 = (i__32538_33711 + (1));
seq__32534_33708 = G__33721;
chunk__32536_33709 = G__33722;
count__32537_33710 = G__33723;
i__32538_33711 = G__33724;
continue;
}
} else {
var temp__5735__auto___33734 = cljs.core.seq(seq__32534_33708);
if(temp__5735__auto___33734){
var seq__32534_33735__$1 = temp__5735__auto___33734;
if(cljs.core.chunked_seq_QMARK_(seq__32534_33735__$1)){
var c__4556__auto___33744 = cljs.core.chunk_first(seq__32534_33735__$1);
var G__33745 = cljs.core.chunk_rest(seq__32534_33735__$1);
var G__33746 = c__4556__auto___33744;
var G__33747 = cljs.core.count(c__4556__auto___33744);
var G__33748 = (0);
seq__32534_33708 = G__33745;
chunk__32536_33709 = G__33746;
count__32537_33710 = G__33747;
i__32538_33711 = G__33748;
continue;
} else {
var child_33749 = cljs.core.first(seq__32534_33735__$1);
if(cljs.core.truth_(child_33749)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33749);


var G__33750 = cljs.core.next(seq__32534_33735__$1);
var G__33751 = null;
var G__33752 = (0);
var G__33753 = (0);
seq__32534_33708 = G__33750;
chunk__32536_33709 = G__33751;
count__32537_33710 = G__33752;
i__32538_33711 = G__33753;
continue;
} else {
var G__33754 = cljs.core.next(seq__32534_33735__$1);
var G__33755 = null;
var G__33756 = (0);
var G__33757 = (0);
seq__32534_33708 = G__33754;
chunk__32536_33709 = G__33755;
count__32537_33710 = G__33756;
i__32538_33711 = G__33757;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33703);
}


var G__33758 = seq__32431_33689;
var G__33759 = chunk__32432_33690;
var G__33760 = count__32433_33691;
var G__33761 = (i__32434_33692 + (1));
seq__32431_33689 = G__33758;
chunk__32432_33690 = G__33759;
count__32433_33691 = G__33760;
i__32434_33692 = G__33761;
continue;
} else {
var temp__5735__auto___33764 = cljs.core.seq(seq__32431_33689);
if(temp__5735__auto___33764){
var seq__32431_33765__$1 = temp__5735__auto___33764;
if(cljs.core.chunked_seq_QMARK_(seq__32431_33765__$1)){
var c__4556__auto___33766 = cljs.core.chunk_first(seq__32431_33765__$1);
var G__33767 = cljs.core.chunk_rest(seq__32431_33765__$1);
var G__33768 = c__4556__auto___33766;
var G__33769 = cljs.core.count(c__4556__auto___33766);
var G__33770 = (0);
seq__32431_33689 = G__33767;
chunk__32432_33690 = G__33768;
count__32433_33691 = G__33769;
i__32434_33692 = G__33770;
continue;
} else {
var child_struct_33771 = cljs.core.first(seq__32431_33765__$1);
var children_33790 = shadow.dom.dom_node(child_struct_33771);
if(cljs.core.seq_QMARK_(children_33790)){
var seq__32568_33792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33790));
var chunk__32570_33793 = null;
var count__32571_33794 = (0);
var i__32572_33795 = (0);
while(true){
if((i__32572_33795 < count__32571_33794)){
var child_33797 = chunk__32570_33793.cljs$core$IIndexed$_nth$arity$2(null,i__32572_33795);
if(cljs.core.truth_(child_33797)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33797);


var G__33798 = seq__32568_33792;
var G__33799 = chunk__32570_33793;
var G__33800 = count__32571_33794;
var G__33801 = (i__32572_33795 + (1));
seq__32568_33792 = G__33798;
chunk__32570_33793 = G__33799;
count__32571_33794 = G__33800;
i__32572_33795 = G__33801;
continue;
} else {
var G__33802 = seq__32568_33792;
var G__33803 = chunk__32570_33793;
var G__33804 = count__32571_33794;
var G__33805 = (i__32572_33795 + (1));
seq__32568_33792 = G__33802;
chunk__32570_33793 = G__33803;
count__32571_33794 = G__33804;
i__32572_33795 = G__33805;
continue;
}
} else {
var temp__5735__auto___33819__$1 = cljs.core.seq(seq__32568_33792);
if(temp__5735__auto___33819__$1){
var seq__32568_33820__$1 = temp__5735__auto___33819__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32568_33820__$1)){
var c__4556__auto___33821 = cljs.core.chunk_first(seq__32568_33820__$1);
var G__33822 = cljs.core.chunk_rest(seq__32568_33820__$1);
var G__33823 = c__4556__auto___33821;
var G__33824 = cljs.core.count(c__4556__auto___33821);
var G__33825 = (0);
seq__32568_33792 = G__33822;
chunk__32570_33793 = G__33823;
count__32571_33794 = G__33824;
i__32572_33795 = G__33825;
continue;
} else {
var child_33830 = cljs.core.first(seq__32568_33820__$1);
if(cljs.core.truth_(child_33830)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33830);


var G__33832 = cljs.core.next(seq__32568_33820__$1);
var G__33833 = null;
var G__33834 = (0);
var G__33835 = (0);
seq__32568_33792 = G__33832;
chunk__32570_33793 = G__33833;
count__32571_33794 = G__33834;
i__32572_33795 = G__33835;
continue;
} else {
var G__33836 = cljs.core.next(seq__32568_33820__$1);
var G__33837 = null;
var G__33838 = (0);
var G__33839 = (0);
seq__32568_33792 = G__33836;
chunk__32570_33793 = G__33837;
count__32571_33794 = G__33838;
i__32572_33795 = G__33839;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33790);
}


var G__33841 = cljs.core.next(seq__32431_33765__$1);
var G__33842 = null;
var G__33843 = (0);
var G__33844 = (0);
seq__32431_33689 = G__33841;
chunk__32432_33690 = G__33842;
count__32433_33691 = G__33843;
i__32434_33692 = G__33844;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32615 = cljs.core.seq(node);
var chunk__32617 = null;
var count__32618 = (0);
var i__32619 = (0);
while(true){
if((i__32619 < count__32618)){
var n = chunk__32617.cljs$core$IIndexed$_nth$arity$2(null,i__32619);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33873 = seq__32615;
var G__33874 = chunk__32617;
var G__33875 = count__32618;
var G__33876 = (i__32619 + (1));
seq__32615 = G__33873;
chunk__32617 = G__33874;
count__32618 = G__33875;
i__32619 = G__33876;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32615);
if(temp__5735__auto__){
var seq__32615__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32615__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32615__$1);
var G__33878 = cljs.core.chunk_rest(seq__32615__$1);
var G__33879 = c__4556__auto__;
var G__33880 = cljs.core.count(c__4556__auto__);
var G__33881 = (0);
seq__32615 = G__33878;
chunk__32617 = G__33879;
count__32618 = G__33880;
i__32619 = G__33881;
continue;
} else {
var n = cljs.core.first(seq__32615__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33883 = cljs.core.next(seq__32615__$1);
var G__33884 = null;
var G__33885 = (0);
var G__33886 = (0);
seq__32615 = G__33883;
chunk__32617 = G__33884;
count__32618 = G__33885;
i__32619 = G__33886;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32635 = arguments.length;
switch (G__32635) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32641 = arguments.length;
switch (G__32641) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32666 = arguments.length;
switch (G__32666) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33905 = arguments.length;
var i__4737__auto___33906 = (0);
while(true){
if((i__4737__auto___33906 < len__4736__auto___33905)){
args__4742__auto__.push((arguments[i__4737__auto___33906]));

var G__33909 = (i__4737__auto___33906 + (1));
i__4737__auto___33906 = G__33909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32697_33911 = cljs.core.seq(nodes);
var chunk__32698_33912 = null;
var count__32699_33913 = (0);
var i__32700_33914 = (0);
while(true){
if((i__32700_33914 < count__32699_33913)){
var node_33916 = chunk__32698_33912.cljs$core$IIndexed$_nth$arity$2(null,i__32700_33914);
fragment.appendChild(shadow.dom._to_dom(node_33916));


var G__33920 = seq__32697_33911;
var G__33921 = chunk__32698_33912;
var G__33922 = count__32699_33913;
var G__33923 = (i__32700_33914 + (1));
seq__32697_33911 = G__33920;
chunk__32698_33912 = G__33921;
count__32699_33913 = G__33922;
i__32700_33914 = G__33923;
continue;
} else {
var temp__5735__auto___33924 = cljs.core.seq(seq__32697_33911);
if(temp__5735__auto___33924){
var seq__32697_33925__$1 = temp__5735__auto___33924;
if(cljs.core.chunked_seq_QMARK_(seq__32697_33925__$1)){
var c__4556__auto___33926 = cljs.core.chunk_first(seq__32697_33925__$1);
var G__33927 = cljs.core.chunk_rest(seq__32697_33925__$1);
var G__33928 = c__4556__auto___33926;
var G__33929 = cljs.core.count(c__4556__auto___33926);
var G__33930 = (0);
seq__32697_33911 = G__33927;
chunk__32698_33912 = G__33928;
count__32699_33913 = G__33929;
i__32700_33914 = G__33930;
continue;
} else {
var node_33932 = cljs.core.first(seq__32697_33925__$1);
fragment.appendChild(shadow.dom._to_dom(node_33932));


var G__33933 = cljs.core.next(seq__32697_33925__$1);
var G__33934 = null;
var G__33935 = (0);
var G__33936 = (0);
seq__32697_33911 = G__33933;
chunk__32698_33912 = G__33934;
count__32699_33913 = G__33935;
i__32700_33914 = G__33936;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32691){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32691));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32713_33940 = cljs.core.seq(scripts);
var chunk__32714_33941 = null;
var count__32715_33942 = (0);
var i__32716_33943 = (0);
while(true){
if((i__32716_33943 < count__32715_33942)){
var vec__32736_33945 = chunk__32714_33941.cljs$core$IIndexed$_nth$arity$2(null,i__32716_33943);
var script_tag_33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32736_33945,(0),null);
var script_body_33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32736_33945,(1),null);
eval(script_body_33947);


var G__33949 = seq__32713_33940;
var G__33950 = chunk__32714_33941;
var G__33951 = count__32715_33942;
var G__33952 = (i__32716_33943 + (1));
seq__32713_33940 = G__33949;
chunk__32714_33941 = G__33950;
count__32715_33942 = G__33951;
i__32716_33943 = G__33952;
continue;
} else {
var temp__5735__auto___33953 = cljs.core.seq(seq__32713_33940);
if(temp__5735__auto___33953){
var seq__32713_33954__$1 = temp__5735__auto___33953;
if(cljs.core.chunked_seq_QMARK_(seq__32713_33954__$1)){
var c__4556__auto___33955 = cljs.core.chunk_first(seq__32713_33954__$1);
var G__33956 = cljs.core.chunk_rest(seq__32713_33954__$1);
var G__33957 = c__4556__auto___33955;
var G__33958 = cljs.core.count(c__4556__auto___33955);
var G__33959 = (0);
seq__32713_33940 = G__33956;
chunk__32714_33941 = G__33957;
count__32715_33942 = G__33958;
i__32716_33943 = G__33959;
continue;
} else {
var vec__32744_33962 = cljs.core.first(seq__32713_33954__$1);
var script_tag_33963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32744_33962,(0),null);
var script_body_33964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32744_33962,(1),null);
eval(script_body_33964);


var G__33966 = cljs.core.next(seq__32713_33954__$1);
var G__33967 = null;
var G__33968 = (0);
var G__33969 = (0);
seq__32713_33940 = G__33966;
chunk__32714_33941 = G__33967;
count__32715_33942 = G__33968;
i__32716_33943 = G__33969;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32748){
var vec__32750 = p__32748;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32771 = arguments.length;
switch (G__32771) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32811 = cljs.core.seq(style_keys);
var chunk__32812 = null;
var count__32813 = (0);
var i__32814 = (0);
while(true){
if((i__32814 < count__32813)){
var it = chunk__32812.cljs$core$IIndexed$_nth$arity$2(null,i__32814);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34000 = seq__32811;
var G__34001 = chunk__32812;
var G__34002 = count__32813;
var G__34003 = (i__32814 + (1));
seq__32811 = G__34000;
chunk__32812 = G__34001;
count__32813 = G__34002;
i__32814 = G__34003;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32811);
if(temp__5735__auto__){
var seq__32811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32811__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32811__$1);
var G__34005 = cljs.core.chunk_rest(seq__32811__$1);
var G__34006 = c__4556__auto__;
var G__34007 = cljs.core.count(c__4556__auto__);
var G__34008 = (0);
seq__32811 = G__34005;
chunk__32812 = G__34006;
count__32813 = G__34007;
i__32814 = G__34008;
continue;
} else {
var it = cljs.core.first(seq__32811__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34009 = cljs.core.next(seq__32811__$1);
var G__34010 = null;
var G__34011 = (0);
var G__34012 = (0);
seq__32811 = G__34009;
chunk__32812 = G__34010;
count__32813 = G__34011;
i__32814 = G__34012;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32842,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32866 = k32842;
var G__32866__$1 = (((G__32866 instanceof cljs.core.Keyword))?G__32866.fqn:null);
switch (G__32866__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32842,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32867){
var vec__32868 = p__32867;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32868,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32868,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32841){
var self__ = this;
var G__32841__$1 = this;
return (new cljs.core.RecordIter((0),G__32841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32845,other32846){
var self__ = this;
var this32845__$1 = this;
return (((!((other32846 == null)))) && ((this32845__$1.constructor === other32846.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32845__$1.x,other32846.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32845__$1.y,other32846.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32845__$1.__extmap,other32846.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32841){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32919 = cljs.core.keyword_identical_QMARK_;
var expr__32920 = k__4388__auto__;
if(cljs.core.truth_((pred__32919.cljs$core$IFn$_invoke$arity$2 ? pred__32919.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32920) : pred__32919.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32920)))){
return (new shadow.dom.Coordinate(G__32841,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32919.cljs$core$IFn$_invoke$arity$2 ? pred__32919.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32920) : pred__32919.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32920)))){
return (new shadow.dom.Coordinate(self__.x,G__32841,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32841),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32841){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32841,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32848){
var extmap__4419__auto__ = (function (){var G__32941 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32848,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32848)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32941);
} else {
return G__32941;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32848),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32848),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32950,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32959 = k32950;
var G__32959__$1 = (((G__32959 instanceof cljs.core.Keyword))?G__32959.fqn:null);
switch (G__32959__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32950,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32965){
var vec__32967 = p__32965;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32949){
var self__ = this;
var G__32949__$1 = this;
return (new cljs.core.RecordIter((0),G__32949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32951,other32952){
var self__ = this;
var this32951__$1 = this;
return (((!((other32952 == null)))) && ((this32951__$1.constructor === other32952.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32951__$1.w,other32952.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32951__$1.h,other32952.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32951__$1.__extmap,other32952.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32949){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33006 = cljs.core.keyword_identical_QMARK_;
var expr__33007 = k__4388__auto__;
if(cljs.core.truth_((pred__33006.cljs$core$IFn$_invoke$arity$2 ? pred__33006.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33007) : pred__33006.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33007)))){
return (new shadow.dom.Size(G__32949,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33006.cljs$core$IFn$_invoke$arity$2 ? pred__33006.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33007) : pred__33006.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33007)))){
return (new shadow.dom.Size(self__.w,G__32949,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32949),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32949){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32949,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32955){
var extmap__4419__auto__ = (function (){var G__33033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32955,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32955)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33033);
} else {
return G__33033;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32955),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32955),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34068 = (i + (1));
var G__34069 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34068;
ret = G__34069;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33074){
var vec__33075 = p__33074;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33084 = arguments.length;
switch (G__33084) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34088 = ps;
var G__34089 = (i + (1));
el__$1 = G__34088;
i = G__34089;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33114 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33120_34101 = cljs.core.seq(props);
var chunk__33121_34102 = null;
var count__33122_34103 = (0);
var i__33123_34104 = (0);
while(true){
if((i__33123_34104 < count__33122_34103)){
var vec__33139_34106 = chunk__33121_34102.cljs$core$IIndexed$_nth$arity$2(null,i__33123_34104);
var k_34107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139_34106,(0),null);
var v_34108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139_34106,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34107);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34107),v_34108);


var G__34110 = seq__33120_34101;
var G__34111 = chunk__33121_34102;
var G__34112 = count__33122_34103;
var G__34119 = (i__33123_34104 + (1));
seq__33120_34101 = G__34110;
chunk__33121_34102 = G__34111;
count__33122_34103 = G__34112;
i__33123_34104 = G__34119;
continue;
} else {
var temp__5735__auto___34121 = cljs.core.seq(seq__33120_34101);
if(temp__5735__auto___34121){
var seq__33120_34122__$1 = temp__5735__auto___34121;
if(cljs.core.chunked_seq_QMARK_(seq__33120_34122__$1)){
var c__4556__auto___34123 = cljs.core.chunk_first(seq__33120_34122__$1);
var G__34124 = cljs.core.chunk_rest(seq__33120_34122__$1);
var G__34125 = c__4556__auto___34123;
var G__34126 = cljs.core.count(c__4556__auto___34123);
var G__34127 = (0);
seq__33120_34101 = G__34124;
chunk__33121_34102 = G__34125;
count__33122_34103 = G__34126;
i__33123_34104 = G__34127;
continue;
} else {
var vec__33147_34128 = cljs.core.first(seq__33120_34122__$1);
var k_34129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147_34128,(0),null);
var v_34130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147_34128,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34129);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34129),v_34130);


var G__34132 = cljs.core.next(seq__33120_34122__$1);
var G__34133 = null;
var G__34134 = (0);
var G__34135 = (0);
seq__33120_34101 = G__34132;
chunk__33121_34102 = G__34133;
count__33122_34103 = G__34134;
i__33123_34104 = G__34135;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33173 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(1),null);
var seq__33176_34136 = cljs.core.seq(node_children);
var chunk__33178_34137 = null;
var count__33179_34138 = (0);
var i__33180_34139 = (0);
while(true){
if((i__33180_34139 < count__33179_34138)){
var child_struct_34142 = chunk__33178_34137.cljs$core$IIndexed$_nth$arity$2(null,i__33180_34139);
if((!((child_struct_34142 == null)))){
if(typeof child_struct_34142 === 'string'){
var text_34144 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34144),child_struct_34142].join(''));
} else {
var children_34145 = shadow.dom.svg_node(child_struct_34142);
if(cljs.core.seq_QMARK_(children_34145)){
var seq__33237_34148 = cljs.core.seq(children_34145);
var chunk__33239_34149 = null;
var count__33240_34150 = (0);
var i__33241_34151 = (0);
while(true){
if((i__33241_34151 < count__33240_34150)){
var child_34152 = chunk__33239_34149.cljs$core$IIndexed$_nth$arity$2(null,i__33241_34151);
if(cljs.core.truth_(child_34152)){
node.appendChild(child_34152);


var G__34153 = seq__33237_34148;
var G__34154 = chunk__33239_34149;
var G__34155 = count__33240_34150;
var G__34156 = (i__33241_34151 + (1));
seq__33237_34148 = G__34153;
chunk__33239_34149 = G__34154;
count__33240_34150 = G__34155;
i__33241_34151 = G__34156;
continue;
} else {
var G__34157 = seq__33237_34148;
var G__34158 = chunk__33239_34149;
var G__34159 = count__33240_34150;
var G__34160 = (i__33241_34151 + (1));
seq__33237_34148 = G__34157;
chunk__33239_34149 = G__34158;
count__33240_34150 = G__34159;
i__33241_34151 = G__34160;
continue;
}
} else {
var temp__5735__auto___34161 = cljs.core.seq(seq__33237_34148);
if(temp__5735__auto___34161){
var seq__33237_34162__$1 = temp__5735__auto___34161;
if(cljs.core.chunked_seq_QMARK_(seq__33237_34162__$1)){
var c__4556__auto___34163 = cljs.core.chunk_first(seq__33237_34162__$1);
var G__34164 = cljs.core.chunk_rest(seq__33237_34162__$1);
var G__34165 = c__4556__auto___34163;
var G__34166 = cljs.core.count(c__4556__auto___34163);
var G__34167 = (0);
seq__33237_34148 = G__34164;
chunk__33239_34149 = G__34165;
count__33240_34150 = G__34166;
i__33241_34151 = G__34167;
continue;
} else {
var child_34168 = cljs.core.first(seq__33237_34162__$1);
if(cljs.core.truth_(child_34168)){
node.appendChild(child_34168);


var G__34169 = cljs.core.next(seq__33237_34162__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__33237_34148 = G__34169;
chunk__33239_34149 = G__34170;
count__33240_34150 = G__34171;
i__33241_34151 = G__34172;
continue;
} else {
var G__34173 = cljs.core.next(seq__33237_34162__$1);
var G__34174 = null;
var G__34175 = (0);
var G__34176 = (0);
seq__33237_34148 = G__34173;
chunk__33239_34149 = G__34174;
count__33240_34150 = G__34175;
i__33241_34151 = G__34176;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34145);
}
}


var G__34178 = seq__33176_34136;
var G__34179 = chunk__33178_34137;
var G__34180 = count__33179_34138;
var G__34181 = (i__33180_34139 + (1));
seq__33176_34136 = G__34178;
chunk__33178_34137 = G__34179;
count__33179_34138 = G__34180;
i__33180_34139 = G__34181;
continue;
} else {
var G__34183 = seq__33176_34136;
var G__34184 = chunk__33178_34137;
var G__34185 = count__33179_34138;
var G__34186 = (i__33180_34139 + (1));
seq__33176_34136 = G__34183;
chunk__33178_34137 = G__34184;
count__33179_34138 = G__34185;
i__33180_34139 = G__34186;
continue;
}
} else {
var temp__5735__auto___34187 = cljs.core.seq(seq__33176_34136);
if(temp__5735__auto___34187){
var seq__33176_34188__$1 = temp__5735__auto___34187;
if(cljs.core.chunked_seq_QMARK_(seq__33176_34188__$1)){
var c__4556__auto___34189 = cljs.core.chunk_first(seq__33176_34188__$1);
var G__34190 = cljs.core.chunk_rest(seq__33176_34188__$1);
var G__34191 = c__4556__auto___34189;
var G__34192 = cljs.core.count(c__4556__auto___34189);
var G__34193 = (0);
seq__33176_34136 = G__34190;
chunk__33178_34137 = G__34191;
count__33179_34138 = G__34192;
i__33180_34139 = G__34193;
continue;
} else {
var child_struct_34194 = cljs.core.first(seq__33176_34188__$1);
if((!((child_struct_34194 == null)))){
if(typeof child_struct_34194 === 'string'){
var text_34203 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34203),child_struct_34194].join(''));
} else {
var children_34206 = shadow.dom.svg_node(child_struct_34194);
if(cljs.core.seq_QMARK_(children_34206)){
var seq__33266_34207 = cljs.core.seq(children_34206);
var chunk__33268_34208 = null;
var count__33269_34209 = (0);
var i__33270_34210 = (0);
while(true){
if((i__33270_34210 < count__33269_34209)){
var child_34211 = chunk__33268_34208.cljs$core$IIndexed$_nth$arity$2(null,i__33270_34210);
if(cljs.core.truth_(child_34211)){
node.appendChild(child_34211);


var G__34220 = seq__33266_34207;
var G__34221 = chunk__33268_34208;
var G__34222 = count__33269_34209;
var G__34223 = (i__33270_34210 + (1));
seq__33266_34207 = G__34220;
chunk__33268_34208 = G__34221;
count__33269_34209 = G__34222;
i__33270_34210 = G__34223;
continue;
} else {
var G__34224 = seq__33266_34207;
var G__34225 = chunk__33268_34208;
var G__34226 = count__33269_34209;
var G__34227 = (i__33270_34210 + (1));
seq__33266_34207 = G__34224;
chunk__33268_34208 = G__34225;
count__33269_34209 = G__34226;
i__33270_34210 = G__34227;
continue;
}
} else {
var temp__5735__auto___34229__$1 = cljs.core.seq(seq__33266_34207);
if(temp__5735__auto___34229__$1){
var seq__33266_34230__$1 = temp__5735__auto___34229__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33266_34230__$1)){
var c__4556__auto___34231 = cljs.core.chunk_first(seq__33266_34230__$1);
var G__34232 = cljs.core.chunk_rest(seq__33266_34230__$1);
var G__34233 = c__4556__auto___34231;
var G__34234 = cljs.core.count(c__4556__auto___34231);
var G__34235 = (0);
seq__33266_34207 = G__34232;
chunk__33268_34208 = G__34233;
count__33269_34209 = G__34234;
i__33270_34210 = G__34235;
continue;
} else {
var child_34236 = cljs.core.first(seq__33266_34230__$1);
if(cljs.core.truth_(child_34236)){
node.appendChild(child_34236);


var G__34237 = cljs.core.next(seq__33266_34230__$1);
var G__34238 = null;
var G__34239 = (0);
var G__34240 = (0);
seq__33266_34207 = G__34237;
chunk__33268_34208 = G__34238;
count__33269_34209 = G__34239;
i__33270_34210 = G__34240;
continue;
} else {
var G__34241 = cljs.core.next(seq__33266_34230__$1);
var G__34242 = null;
var G__34243 = (0);
var G__34244 = (0);
seq__33266_34207 = G__34241;
chunk__33268_34208 = G__34242;
count__33269_34209 = G__34243;
i__33270_34210 = G__34244;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34206);
}
}


var G__34246 = cljs.core.next(seq__33176_34188__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__33176_34136 = G__34246;
chunk__33178_34137 = G__34247;
count__33179_34138 = G__34248;
i__33180_34139 = G__34249;
continue;
} else {
var G__34253 = cljs.core.next(seq__33176_34188__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__33176_34136 = G__34253;
chunk__33178_34137 = G__34254;
count__33179_34138 = G__34255;
i__33180_34139 = G__34256;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34259 = arguments.length;
var i__4737__auto___34260 = (0);
while(true){
if((i__4737__auto___34260 < len__4736__auto___34259)){
args__4742__auto__.push((arguments[i__4737__auto___34260]));

var G__34261 = (i__4737__auto___34260 + (1));
i__4737__auto___34260 = G__34261;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33303){
var G__33308 = cljs.core.first(seq33303);
var seq33303__$1 = cljs.core.next(seq33303);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33308,seq33303__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33325 = arguments.length;
switch (G__33325) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29014__auto___34286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_33353){
var state_val_33354 = (state_33353[(1)]);
if((state_val_33354 === (1))){
var state_33353__$1 = state_33353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33353__$1,(2),once_or_cleanup);
} else {
if((state_val_33354 === (2))){
var inst_33350 = (state_33353[(2)]);
var inst_33351 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33353__$1 = (function (){var statearr_33362 = state_33353;
(statearr_33362[(7)] = inst_33350);

return statearr_33362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33353__$1,inst_33351);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28771__auto__ = null;
var shadow$dom$state_machine__28771__auto____0 = (function (){
var statearr_33369 = [null,null,null,null,null,null,null,null];
(statearr_33369[(0)] = shadow$dom$state_machine__28771__auto__);

(statearr_33369[(1)] = (1));

return statearr_33369;
});
var shadow$dom$state_machine__28771__auto____1 = (function (state_33353){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_33353);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e33370){var ex__28774__auto__ = e33370;
var statearr_33371_34297 = state_33353;
(statearr_33371_34297[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_33353[(4)]))){
var statearr_33372_34298 = state_33353;
(statearr_33372_34298[(1)] = cljs.core.first((state_33353[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34300 = state_33353;
state_33353 = G__34300;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
shadow$dom$state_machine__28771__auto__ = function(state_33353){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28771__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28771__auto____1.call(this,state_33353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28771__auto____0;
shadow$dom$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28771__auto____1;
return shadow$dom$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_33380 = f__29016__auto__();
(statearr_33380[(6)] = c__29014__auto___34286);

return statearr_33380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
