goog.provide('clojure.browser.dom');
clojure.browser.dom.append = (function clojure$browser$dom$append(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26942 = arguments.length;
var i__4737__auto___26943 = (0);
while(true){
if((i__4737__auto___26943 < len__4736__auto___26942)){
args__4742__auto__.push((arguments[i__4737__auto___26943]));

var G__26944 = (i__4737__auto___26943 + (1));
i__4737__auto___26943 = G__26944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.browser.dom.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.browser.dom.append.cljs$core$IFn$_invoke$arity$variadic = (function (parent,children){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.dom.append,parent,children);

return parent;
}));

(clojure.browser.dom.append.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.browser.dom.append.cljs$lang$applyTo = (function (seq26924){
var G__26925 = cljs.core.first(seq26924);
var seq26924__$1 = cljs.core.next(seq26924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26925,seq26924__$1);
}));


/**
 * @interface
 */
clojure.browser.dom.DOMBuilder = function(){};

var clojure$browser$dom$DOMBuilder$_element$dyn_26945 = (function() {
var G__26946 = null;
var G__26946__1 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (clojure.browser.dom._element["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DOMBuilder.-element",this$);
}
}
});
var G__26946__2 = (function (this$,attrs_or_children){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,attrs_or_children) : m__4429__auto__.call(null,this$,attrs_or_children));
} else {
var m__4426__auto__ = (clojure.browser.dom._element["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,attrs_or_children) : m__4426__auto__.call(null,this$,attrs_or_children));
} else {
throw cljs.core.missing_protocol("DOMBuilder.-element",this$);
}
}
});
var G__26946__3 = (function (this$,attrs,children){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,attrs,children) : m__4429__auto__.call(null,this$,attrs,children));
} else {
var m__4426__auto__ = (clojure.browser.dom._element["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,attrs,children) : m__4426__auto__.call(null,this$,attrs,children));
} else {
throw cljs.core.missing_protocol("DOMBuilder.-element",this$);
}
}
});
G__26946 = function(this$,attrs,children){
switch(arguments.length){
case 1:
return G__26946__1.call(this,this$);
case 2:
return G__26946__2.call(this,this$,attrs);
case 3:
return G__26946__3.call(this,this$,attrs,children);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26946.cljs$core$IFn$_invoke$arity$1 = G__26946__1;
G__26946.cljs$core$IFn$_invoke$arity$2 = G__26946__2;
G__26946.cljs$core$IFn$_invoke$arity$3 = G__26946__3;
return G__26946;
})()
;
clojure.browser.dom._element = (function clojure$browser$dom$_element(var_args){
var G__26927 = arguments.length;
switch (G__26927) {
case 1:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$dom$DOMBuilder$_element$arity$1 == null)))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$1(this$);
} else {
return clojure$browser$dom$DOMBuilder$_element$dyn_26945(this$);
}
}));

(clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$2 = (function (this$,attrs_or_children){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$dom$DOMBuilder$_element$arity$2 == null)))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$2(this$,attrs_or_children);
} else {
return clojure$browser$dom$DOMBuilder$_element$dyn_26945(this$,attrs_or_children);
}
}));

(clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3 = (function (this$,attrs,children){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$dom$DOMBuilder$_element$arity$3 == null)))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$3(this$,attrs,children);
} else {
return clojure$browser$dom$DOMBuilder$_element$dyn_26945(this$,attrs,children);
}
}));

(clojure.browser.dom._element.cljs$lang$maxFixedArity = 3);


clojure.browser.dom.log = (function clojure$browser$dom$log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26953 = arguments.length;
var i__4737__auto___26954 = (0);
while(true){
if((i__4737__auto___26954 < len__4736__auto___26953)){
args__4742__auto__.push((arguments[i__4737__auto___26954]));

var G__26955 = (i__4737__auto___26954 + (1));
i__4737__auto___26954 = G__26955;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args));
}));

(clojure.browser.dom.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.browser.dom.log.cljs$lang$applyTo = (function (seq26928){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26928));
}));

clojure.browser.dom.log_obj = (function clojure$browser$dom$log_obj(obj){
return console.log(obj);
});
goog.object.set(clojure.browser.dom.DOMBuilder,"string",true);

goog.object.set(clojure.browser.dom._element,"string",(function() {
var G__26956 = null;
var G__26956__1 = (function (this$){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string (-element ",this$,")"], 0));

if((this$ instanceof cljs.core.Keyword)){
return goog.dom.createElement(cljs.core.name(this$));
} else {
return goog.dom.createTextNode(cljs.core.name(this$));

}
});
var G__26956__2 = (function (this$,attrs_or_children){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string (-element ",this$," ",attrs_or_children,")"], 0));

var attrs = cljs.core.first(attrs_or_children);
if(cljs.core.map_QMARK_(attrs)){
return clojure.browser.dom._element(this$,attrs,cljs.core.rest(attrs_or_children));
} else {
return clojure.browser.dom._element(this$,null,attrs_or_children);
}
});
var G__26956__3 = (function (this$,attrs,children){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string (-element ",this$," ",attrs," ",children,")"], 0));

var str_attrs = ((((cljs.core.map_QMARK_(attrs)) && (cljs.core.seq(attrs))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (o,p__26929){
var vec__26930 = p__26929;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26930,(1),null);
var o__$1 = (((o == null))?({}):o);
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["o = ",o__$1], 0));

clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["k = ",k], 0));

clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["v = ",v], 0));

if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string'))){
var G__26935 = o__$1;
goog.object.set(G__26935,cljs.core.name(k),v);

return G__26935;
} else {
return null;
}
}),({}),attrs):null);
clojure.browser.dom.log_obj(str_attrs);

if(cljs.core.seq(children)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,cljs.core.name(this$),str_attrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.browser.dom._element,children));
} else {
return goog.dom.createDom(cljs.core.name(this$),str_attrs);
}
});
G__26956 = function(this$,attrs,children){
switch(arguments.length){
case 1:
return G__26956__1.call(this,this$);
case 2:
return G__26956__2.call(this,this$,attrs);
case 3:
return G__26956__3.call(this,this$,attrs,children);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26956.cljs$core$IFn$_invoke$arity$1 = G__26956__1;
G__26956.cljs$core$IFn$_invoke$arity$2 = G__26956__2;
G__26956.cljs$core$IFn$_invoke$arity$3 = G__26956__3;
return G__26956;
})()
);

(cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
var this$__$1 = this;
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PersistentVector (-element ",this$__$1,")"], 0));

var tag = cljs.core.first(this$__$1);
var attrs = cljs.core.second(this$__$1);
var children = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),this$__$1);
if(cljs.core.map_QMARK_(attrs)){
return clojure.browser.dom._element(tag,attrs,children);
} else {
return clojure.browser.dom._element(tag,null,cljs.core.rest(this$__$1));
}
}));

(Element.prototype.clojure$browser$dom$DOMBuilder$ = cljs.core.PROTOCOL_SENTINEL);

(Element.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
var this$__$1 = this;
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["js/Element (-element ",this$__$1,")"], 0));

return this$__$1;
}));
clojure.browser.dom.element = (function clojure$browser$dom$element(var_args){
var G__26941 = arguments.length;
switch (G__26941) {
case 1:
return clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26958 = arguments.length;
var i__4737__auto___26959 = (0);
while(true){
if((i__4737__auto___26959 < len__4736__auto___26958)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26959]));

var G__26960 = (i__4737__auto___26959 + (1));
i__4737__auto___26959 = G__26960;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag_or_text){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(element ",tag_or_text,")"], 0));

return clojure.browser.dom._element(tag_or_text);
}));

(clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,children){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(element ",tag," ",children,")"], 0));

var attrs = cljs.core.first(children);
if(cljs.core.map_QMARK_(attrs)){
return clojure.browser.dom._element(tag,attrs,cljs.core.rest(children));
} else {
return clojure.browser.dom._element(tag,null,children);
}
}));

/** @this {Function} */
(clojure.browser.dom.element.cljs$lang$applyTo = (function (seq26939){
var G__26940 = cljs.core.first(seq26939);
var seq26939__$1 = cljs.core.next(seq26939);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26940,seq26939__$1);
}));

(clojure.browser.dom.element.cljs$lang$maxFixedArity = (1));

/**
 * Remove all children from the element with the passed id.
 */
clojure.browser.dom.remove_children = (function clojure$browser$dom$remove_children(id){
var parent = goog.dom.getElement(cljs.core.name(id));
return goog.dom.removeChildren(parent);
});
clojure.browser.dom.get_element = (function clojure$browser$dom$get_element(id){
return goog.dom.getElement(cljs.core.name(id));
});
clojure.browser.dom.html__GT_dom = (function clojure$browser$dom$html__GT_dom(s){
return goog.dom.htmlToDocumentFragment(s);
});
clojure.browser.dom.insert_at = (function clojure$browser$dom$insert_at(parent,child,index){
return goog.dom.insertChildAt(parent,child,index);
});
/**
 * Coerce the argument to a dom element if possible.
 */
clojure.browser.dom.ensure_element = (function clojure$browser$dom$ensure_element(e){
if((e instanceof cljs.core.Keyword)){
return clojure.browser.dom.get_element(e);
} else {
if(typeof e === 'string'){
return clojure.browser.dom.html__GT_dom(e);
} else {
return e;

}
}
});
/**
 * Replace old-node with new-node. old-node can be an element or a
 * keyword which is the id of the node to replace.  new-node can be an
 * element or an html string.
 */
clojure.browser.dom.replace_node = (function clojure$browser$dom$replace_node(old_node,new_node){
var old_node__$1 = clojure.browser.dom.ensure_element(old_node);
var new_node__$1 = clojure.browser.dom.ensure_element(new_node);
goog.dom.replaceNode(new_node__$1,old_node__$1);

return new_node__$1;
});
/**
 * Set the text content for the passed element returning the
 *   element. If a keyword is passed in the place of e, the element with
 *   that id will be used and returned.
 */
clojure.browser.dom.set_text = (function clojure$browser$dom$set_text(e,s){
return goog.dom.setTextContent(clojure.browser.dom.ensure_element(e),s);
});
/**
 * Get the value of an element.
 */
clojure.browser.dom.get_value = (function clojure$browser$dom$get_value(e){
return clojure.browser.dom.ensure_element(e).value;
});
/**
 * Set properties on an element
 */
clojure.browser.dom.set_properties = (function clojure$browser$dom$set_properties(e,m){
return goog.dom.setProperties(clojure.browser.dom.ensure_element(e),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.create,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(m),cljs.core.vals(m))));
});
/**
 * Set the value property for an element.
 */
clojure.browser.dom.set_value = (function clojure$browser$dom$set_value(e,v){
return clojure.browser.dom.set_properties(e,new cljs.core.PersistentArrayMap(null, 1, ["value",v], null));
});
clojure.browser.dom.click_element = (function clojure$browser$dom$click_element(e){
return clojure.browser.dom.ensure_element(e).click(cljs.core.List.EMPTY);
});

//# sourceMappingURL=clojure.browser.dom.js.map
