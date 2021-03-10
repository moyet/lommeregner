goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36059 = arguments.length;
var i__4737__auto___36060 = (0);
while(true){
if((i__4737__auto___36060 < len__4736__auto___36059)){
args__4742__auto__.push((arguments[i__4737__auto___36060]));

var G__36061 = (i__4737__auto___36060 + (1));
i__4737__auto___36060 = G__36061;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35768){
var G__35769 = cljs.core.first(seq35768);
var seq35768__$1 = cljs.core.next(seq35768);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35769,seq35768__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35777 = cljs.core.seq(sources);
var chunk__35778 = null;
var count__35779 = (0);
var i__35780 = (0);
while(true){
if((i__35780 < count__35779)){
var map__35801 = chunk__35778.cljs$core$IIndexed$_nth$arity$2(null,i__35780);
var map__35801__$1 = (((((!((map__35801 == null))))?(((((map__35801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35801):map__35801);
var src = map__35801__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35810){var e_36062 = e35810;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36062);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36062.message)].join('')));
}

var G__36063 = seq__35777;
var G__36064 = chunk__35778;
var G__36065 = count__35779;
var G__36066 = (i__35780 + (1));
seq__35777 = G__36063;
chunk__35778 = G__36064;
count__35779 = G__36065;
i__35780 = G__36066;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35777);
if(temp__5735__auto__){
var seq__35777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35777__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35777__$1);
var G__36067 = cljs.core.chunk_rest(seq__35777__$1);
var G__36068 = c__4556__auto__;
var G__36069 = cljs.core.count(c__4556__auto__);
var G__36070 = (0);
seq__35777 = G__36067;
chunk__35778 = G__36068;
count__35779 = G__36069;
i__35780 = G__36070;
continue;
} else {
var map__35811 = cljs.core.first(seq__35777__$1);
var map__35811__$1 = (((((!((map__35811 == null))))?(((((map__35811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35811):map__35811);
var src = map__35811__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35830){var e_36071 = e35830;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36071);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36071.message)].join('')));
}

var G__36072 = cljs.core.next(seq__35777__$1);
var G__36073 = null;
var G__36074 = (0);
var G__36075 = (0);
seq__35777 = G__36072;
chunk__35778 = G__36073;
count__35779 = G__36074;
i__35780 = G__36075;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35866 = cljs.core.seq(js_requires);
var chunk__35867 = null;
var count__35868 = (0);
var i__35869 = (0);
while(true){
if((i__35869 < count__35868)){
var js_ns = chunk__35867.cljs$core$IIndexed$_nth$arity$2(null,i__35869);
var require_str_36078 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36078);


var G__36079 = seq__35866;
var G__36080 = chunk__35867;
var G__36081 = count__35868;
var G__36082 = (i__35869 + (1));
seq__35866 = G__36079;
chunk__35867 = G__36080;
count__35868 = G__36081;
i__35869 = G__36082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35866);
if(temp__5735__auto__){
var seq__35866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35866__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35866__$1);
var G__36084 = cljs.core.chunk_rest(seq__35866__$1);
var G__36085 = c__4556__auto__;
var G__36086 = cljs.core.count(c__4556__auto__);
var G__36087 = (0);
seq__35866 = G__36084;
chunk__35867 = G__36085;
count__35868 = G__36086;
i__35869 = G__36087;
continue;
} else {
var js_ns = cljs.core.first(seq__35866__$1);
var require_str_36090 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36090);


var G__36091 = cljs.core.next(seq__35866__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__35866 = G__36091;
chunk__35867 = G__36092;
count__35868 = G__36093;
i__35869 = G__36094;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35883){
var map__35884 = p__35883;
var map__35884__$1 = (((((!((map__35884 == null))))?(((((map__35884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35884):map__35884);
var msg = map__35884__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35886(s__35887){
return (new cljs.core.LazySeq(null,(function (){
var s__35887__$1 = s__35887;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35887__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35904 = cljs.core.first(xs__6292__auto__);
var map__35904__$1 = (((((!((map__35904 == null))))?(((((map__35904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35904):map__35904);
var src = map__35904__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35887__$1,map__35904,map__35904__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35884,map__35884__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35886_$_iter__35888(s__35889){
return (new cljs.core.LazySeq(null,((function (s__35887__$1,map__35904,map__35904__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35884,map__35884__$1,msg,info,reload_info){
return (function (){
var s__35889__$1 = s__35889;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35889__$1);
if(temp__5735__auto____$1){
var s__35889__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35889__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35889__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35891 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35890 = (0);
while(true){
if((i__35890 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35890);
cljs.core.chunk_append(b__35891,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36095 = (i__35890 + (1));
i__35890 = G__36095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35891),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35886_$_iter__35888(cljs.core.chunk_rest(s__35889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35891),null);
}
} else {
var warning = cljs.core.first(s__35889__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35886_$_iter__35888(cljs.core.rest(s__35889__$2)));
}
} else {
return null;
}
break;
}
});})(s__35887__$1,map__35904,map__35904__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35884,map__35884__$1,msg,info,reload_info))
,null,null));
});})(s__35887__$1,map__35904,map__35904__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35884,map__35884__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35886(cljs.core.rest(s__35887__$1)));
} else {
var G__36096 = cljs.core.rest(s__35887__$1);
s__35887__$1 = G__36096;
continue;
}
} else {
var G__36097 = cljs.core.rest(s__35887__$1);
s__35887__$1 = G__36097;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35913_36098 = cljs.core.seq(warnings);
var chunk__35914_36099 = null;
var count__35915_36100 = (0);
var i__35916_36101 = (0);
while(true){
if((i__35916_36101 < count__35915_36100)){
var map__35923_36102 = chunk__35914_36099.cljs$core$IIndexed$_nth$arity$2(null,i__35916_36101);
var map__35923_36103__$1 = (((((!((map__35923_36102 == null))))?(((((map__35923_36102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35923_36102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35923_36102):map__35923_36102);
var w_36104 = map__35923_36103__$1;
var msg_36105__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923_36103__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923_36103__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923_36103__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923_36103__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36108)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36106),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36107),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36105__$1)].join(''));


var G__36109 = seq__35913_36098;
var G__36110 = chunk__35914_36099;
var G__36111 = count__35915_36100;
var G__36112 = (i__35916_36101 + (1));
seq__35913_36098 = G__36109;
chunk__35914_36099 = G__36110;
count__35915_36100 = G__36111;
i__35916_36101 = G__36112;
continue;
} else {
var temp__5735__auto___36113 = cljs.core.seq(seq__35913_36098);
if(temp__5735__auto___36113){
var seq__35913_36114__$1 = temp__5735__auto___36113;
if(cljs.core.chunked_seq_QMARK_(seq__35913_36114__$1)){
var c__4556__auto___36115 = cljs.core.chunk_first(seq__35913_36114__$1);
var G__36116 = cljs.core.chunk_rest(seq__35913_36114__$1);
var G__36117 = c__4556__auto___36115;
var G__36118 = cljs.core.count(c__4556__auto___36115);
var G__36119 = (0);
seq__35913_36098 = G__36116;
chunk__35914_36099 = G__36117;
count__35915_36100 = G__36118;
i__35916_36101 = G__36119;
continue;
} else {
var map__35926_36120 = cljs.core.first(seq__35913_36114__$1);
var map__35926_36121__$1 = (((((!((map__35926_36120 == null))))?(((((map__35926_36120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35926_36120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35926_36120):map__35926_36120);
var w_36122 = map__35926_36121__$1;
var msg_36123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926_36121__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926_36121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926_36121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926_36121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36126)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36124),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36125),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36123__$1)].join(''));


var G__36129 = cljs.core.next(seq__35913_36114__$1);
var G__36130 = null;
var G__36131 = (0);
var G__36132 = (0);
seq__35913_36098 = G__36129;
chunk__35914_36099 = G__36130;
count__35915_36100 = G__36131;
i__35916_36101 = G__36132;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35882_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35882_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35935){
var map__35936 = p__35935;
var map__35936__$1 = (((((!((map__35936 == null))))?(((((map__35936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35936):map__35936);
var msg = map__35936__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35938 = cljs.core.seq(updates);
var chunk__35940 = null;
var count__35941 = (0);
var i__35942 = (0);
while(true){
if((i__35942 < count__35941)){
var path = chunk__35940.cljs$core$IIndexed$_nth$arity$2(null,i__35942);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35984_36133 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35988_36134 = null;
var count__35989_36135 = (0);
var i__35990_36136 = (0);
while(true){
if((i__35990_36136 < count__35989_36135)){
var node_36137 = chunk__35988_36134.cljs$core$IIndexed$_nth$arity$2(null,i__35990_36136);
if(cljs.core.not(node_36137.shadow$old)){
var path_match_36138 = shadow.cljs.devtools.client.browser.match_paths(node_36137.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36138)){
var new_link_36139 = (function (){var G__35996 = node_36137.cloneNode(true);
G__35996.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36138),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35996;
})();
(node_36137.shadow$old = true);

(new_link_36139.onload = ((function (seq__35984_36133,chunk__35988_36134,count__35989_36135,i__35990_36136,seq__35938,chunk__35940,count__35941,i__35942,new_link_36139,path_match_36138,node_36137,path,map__35936,map__35936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36137);
});})(seq__35984_36133,chunk__35988_36134,count__35989_36135,i__35990_36136,seq__35938,chunk__35940,count__35941,i__35942,new_link_36139,path_match_36138,node_36137,path,map__35936,map__35936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36138], 0));

goog.dom.insertSiblingAfter(new_link_36139,node_36137);


var G__36140 = seq__35984_36133;
var G__36141 = chunk__35988_36134;
var G__36142 = count__35989_36135;
var G__36143 = (i__35990_36136 + (1));
seq__35984_36133 = G__36140;
chunk__35988_36134 = G__36141;
count__35989_36135 = G__36142;
i__35990_36136 = G__36143;
continue;
} else {
var G__36144 = seq__35984_36133;
var G__36145 = chunk__35988_36134;
var G__36146 = count__35989_36135;
var G__36147 = (i__35990_36136 + (1));
seq__35984_36133 = G__36144;
chunk__35988_36134 = G__36145;
count__35989_36135 = G__36146;
i__35990_36136 = G__36147;
continue;
}
} else {
var G__36148 = seq__35984_36133;
var G__36149 = chunk__35988_36134;
var G__36150 = count__35989_36135;
var G__36151 = (i__35990_36136 + (1));
seq__35984_36133 = G__36148;
chunk__35988_36134 = G__36149;
count__35989_36135 = G__36150;
i__35990_36136 = G__36151;
continue;
}
} else {
var temp__5735__auto___36152 = cljs.core.seq(seq__35984_36133);
if(temp__5735__auto___36152){
var seq__35984_36153__$1 = temp__5735__auto___36152;
if(cljs.core.chunked_seq_QMARK_(seq__35984_36153__$1)){
var c__4556__auto___36154 = cljs.core.chunk_first(seq__35984_36153__$1);
var G__36155 = cljs.core.chunk_rest(seq__35984_36153__$1);
var G__36156 = c__4556__auto___36154;
var G__36157 = cljs.core.count(c__4556__auto___36154);
var G__36158 = (0);
seq__35984_36133 = G__36155;
chunk__35988_36134 = G__36156;
count__35989_36135 = G__36157;
i__35990_36136 = G__36158;
continue;
} else {
var node_36159 = cljs.core.first(seq__35984_36153__$1);
if(cljs.core.not(node_36159.shadow$old)){
var path_match_36160 = shadow.cljs.devtools.client.browser.match_paths(node_36159.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36160)){
var new_link_36161 = (function (){var G__35998 = node_36159.cloneNode(true);
G__35998.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36160),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35998;
})();
(node_36159.shadow$old = true);

(new_link_36161.onload = ((function (seq__35984_36133,chunk__35988_36134,count__35989_36135,i__35990_36136,seq__35938,chunk__35940,count__35941,i__35942,new_link_36161,path_match_36160,node_36159,seq__35984_36153__$1,temp__5735__auto___36152,path,map__35936,map__35936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36159);
});})(seq__35984_36133,chunk__35988_36134,count__35989_36135,i__35990_36136,seq__35938,chunk__35940,count__35941,i__35942,new_link_36161,path_match_36160,node_36159,seq__35984_36153__$1,temp__5735__auto___36152,path,map__35936,map__35936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36160], 0));

goog.dom.insertSiblingAfter(new_link_36161,node_36159);


var G__36162 = cljs.core.next(seq__35984_36153__$1);
var G__36163 = null;
var G__36164 = (0);
var G__36165 = (0);
seq__35984_36133 = G__36162;
chunk__35988_36134 = G__36163;
count__35989_36135 = G__36164;
i__35990_36136 = G__36165;
continue;
} else {
var G__36166 = cljs.core.next(seq__35984_36153__$1);
var G__36167 = null;
var G__36168 = (0);
var G__36169 = (0);
seq__35984_36133 = G__36166;
chunk__35988_36134 = G__36167;
count__35989_36135 = G__36168;
i__35990_36136 = G__36169;
continue;
}
} else {
var G__36170 = cljs.core.next(seq__35984_36153__$1);
var G__36171 = null;
var G__36172 = (0);
var G__36173 = (0);
seq__35984_36133 = G__36170;
chunk__35988_36134 = G__36171;
count__35989_36135 = G__36172;
i__35990_36136 = G__36173;
continue;
}
}
} else {
}
}
break;
}


var G__36174 = seq__35938;
var G__36175 = chunk__35940;
var G__36176 = count__35941;
var G__36177 = (i__35942 + (1));
seq__35938 = G__36174;
chunk__35940 = G__36175;
count__35941 = G__36176;
i__35942 = G__36177;
continue;
} else {
var G__36178 = seq__35938;
var G__36179 = chunk__35940;
var G__36180 = count__35941;
var G__36181 = (i__35942 + (1));
seq__35938 = G__36178;
chunk__35940 = G__36179;
count__35941 = G__36180;
i__35942 = G__36181;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35938);
if(temp__5735__auto__){
var seq__35938__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35938__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35938__$1);
var G__36182 = cljs.core.chunk_rest(seq__35938__$1);
var G__36183 = c__4556__auto__;
var G__36184 = cljs.core.count(c__4556__auto__);
var G__36185 = (0);
seq__35938 = G__36182;
chunk__35940 = G__36183;
count__35941 = G__36184;
i__35942 = G__36185;
continue;
} else {
var path = cljs.core.first(seq__35938__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36002_36186 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36006_36187 = null;
var count__36007_36188 = (0);
var i__36008_36189 = (0);
while(true){
if((i__36008_36189 < count__36007_36188)){
var node_36190 = chunk__36006_36187.cljs$core$IIndexed$_nth$arity$2(null,i__36008_36189);
if(cljs.core.not(node_36190.shadow$old)){
var path_match_36191 = shadow.cljs.devtools.client.browser.match_paths(node_36190.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36191)){
var new_link_36192 = (function (){var G__36014 = node_36190.cloneNode(true);
G__36014.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36014;
})();
(node_36190.shadow$old = true);

(new_link_36192.onload = ((function (seq__36002_36186,chunk__36006_36187,count__36007_36188,i__36008_36189,seq__35938,chunk__35940,count__35941,i__35942,new_link_36192,path_match_36191,node_36190,path,seq__35938__$1,temp__5735__auto__,map__35936,map__35936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36190);
});})(seq__36002_36186,chunk__36006_36187,count__36007_36188,i__36008_36189,seq__35938,chunk__35940,count__35941,i__35942,new_link_36192,path_match_36191,node_36190,path,seq__35938__$1,temp__5735__auto__,map__35936,map__35936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36191], 0));

goog.dom.insertSiblingAfter(new_link_36192,node_36190);


var G__36193 = seq__36002_36186;
var G__36194 = chunk__36006_36187;
var G__36195 = count__36007_36188;
var G__36196 = (i__36008_36189 + (1));
seq__36002_36186 = G__36193;
chunk__36006_36187 = G__36194;
count__36007_36188 = G__36195;
i__36008_36189 = G__36196;
continue;
} else {
var G__36197 = seq__36002_36186;
var G__36198 = chunk__36006_36187;
var G__36199 = count__36007_36188;
var G__36200 = (i__36008_36189 + (1));
seq__36002_36186 = G__36197;
chunk__36006_36187 = G__36198;
count__36007_36188 = G__36199;
i__36008_36189 = G__36200;
continue;
}
} else {
var G__36201 = seq__36002_36186;
var G__36202 = chunk__36006_36187;
var G__36203 = count__36007_36188;
var G__36204 = (i__36008_36189 + (1));
seq__36002_36186 = G__36201;
chunk__36006_36187 = G__36202;
count__36007_36188 = G__36203;
i__36008_36189 = G__36204;
continue;
}
} else {
var temp__5735__auto___36205__$1 = cljs.core.seq(seq__36002_36186);
if(temp__5735__auto___36205__$1){
var seq__36002_36206__$1 = temp__5735__auto___36205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36002_36206__$1)){
var c__4556__auto___36207 = cljs.core.chunk_first(seq__36002_36206__$1);
var G__36208 = cljs.core.chunk_rest(seq__36002_36206__$1);
var G__36209 = c__4556__auto___36207;
var G__36210 = cljs.core.count(c__4556__auto___36207);
var G__36211 = (0);
seq__36002_36186 = G__36208;
chunk__36006_36187 = G__36209;
count__36007_36188 = G__36210;
i__36008_36189 = G__36211;
continue;
} else {
var node_36212 = cljs.core.first(seq__36002_36206__$1);
if(cljs.core.not(node_36212.shadow$old)){
var path_match_36213 = shadow.cljs.devtools.client.browser.match_paths(node_36212.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36213)){
var new_link_36214 = (function (){var G__36015 = node_36212.cloneNode(true);
G__36015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36213),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36015;
})();
(node_36212.shadow$old = true);

(new_link_36214.onload = ((function (seq__36002_36186,chunk__36006_36187,count__36007_36188,i__36008_36189,seq__35938,chunk__35940,count__35941,i__35942,new_link_36214,path_match_36213,node_36212,seq__36002_36206__$1,temp__5735__auto___36205__$1,path,seq__35938__$1,temp__5735__auto__,map__35936,map__35936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36212);
});})(seq__36002_36186,chunk__36006_36187,count__36007_36188,i__36008_36189,seq__35938,chunk__35940,count__35941,i__35942,new_link_36214,path_match_36213,node_36212,seq__36002_36206__$1,temp__5735__auto___36205__$1,path,seq__35938__$1,temp__5735__auto__,map__35936,map__35936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36213], 0));

goog.dom.insertSiblingAfter(new_link_36214,node_36212);


var G__36215 = cljs.core.next(seq__36002_36206__$1);
var G__36216 = null;
var G__36217 = (0);
var G__36218 = (0);
seq__36002_36186 = G__36215;
chunk__36006_36187 = G__36216;
count__36007_36188 = G__36217;
i__36008_36189 = G__36218;
continue;
} else {
var G__36219 = cljs.core.next(seq__36002_36206__$1);
var G__36220 = null;
var G__36221 = (0);
var G__36222 = (0);
seq__36002_36186 = G__36219;
chunk__36006_36187 = G__36220;
count__36007_36188 = G__36221;
i__36008_36189 = G__36222;
continue;
}
} else {
var G__36223 = cljs.core.next(seq__36002_36206__$1);
var G__36224 = null;
var G__36225 = (0);
var G__36226 = (0);
seq__36002_36186 = G__36223;
chunk__36006_36187 = G__36224;
count__36007_36188 = G__36225;
i__36008_36189 = G__36226;
continue;
}
}
} else {
}
}
break;
}


var G__36227 = cljs.core.next(seq__35938__$1);
var G__36228 = null;
var G__36229 = (0);
var G__36230 = (0);
seq__35938 = G__36227;
chunk__35940 = G__36228;
count__35941 = G__36229;
i__35942 = G__36230;
continue;
} else {
var G__36231 = cljs.core.next(seq__35938__$1);
var G__36232 = null;
var G__36233 = (0);
var G__36234 = (0);
seq__35938 = G__36231;
chunk__35940 = G__36232;
count__35941 = G__36233;
i__35942 = G__36234;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36020){
var map__36021 = p__36020;
var map__36021__$1 = (((((!((map__36021 == null))))?(((((map__36021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36021):map__36021);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36023){
var map__36024 = p__36023;
var map__36024__$1 = (((((!((map__36024 == null))))?(((((map__36024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36024):map__36024);
var _ = map__36024__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36026,done,error){
var map__36027 = p__36026;
var map__36027__$1 = (((((!((map__36027 == null))))?(((((map__36027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36027):map__36027);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36030,done,error){
var map__36031 = p__36030;
var map__36031__$1 = (((((!((map__36031 == null))))?(((((map__36031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36031):map__36031);
var msg = map__36031__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36033){
var map__36034 = p__36033;
var map__36034__$1 = (((((!((map__36034 == null))))?(((((map__36034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36034):map__36034);
var src = map__36034__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36036 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36036) : done.call(null,G__36036));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36037){
var map__36038 = p__36037;
var map__36038__$1 = (((((!((map__36038 == null))))?(((((map__36038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36038):map__36038);
var msg__$1 = map__36038__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36040){var ex = e36040;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36041){
var map__36042 = p__36041;
var map__36042__$1 = (((((!((map__36042 == null))))?(((((map__36042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36042):map__36042);
var env = map__36042__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36044){
var map__36045 = p__36044;
var map__36045__$1 = (((((!((map__36045 == null))))?(((((map__36045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36045):map__36045);
var msg = map__36045__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36047){
var map__36049 = p__36047;
var map__36049__$1 = (((((!((map__36049 == null))))?(((((map__36049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36049):map__36049);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36049__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36049__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36056){
var map__36057 = p__36056;
var map__36057__$1 = (((((!((map__36057 == null))))?(((((map__36057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36057):map__36057);
var svc = map__36057__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
