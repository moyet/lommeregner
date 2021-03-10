goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35317,p__35318){
var map__35320 = p__35317;
var map__35320__$1 = (((((!((map__35320 == null))))?(((((map__35320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35320):map__35320);
var svc = map__35320__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35320__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35320__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35320__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35321 = p__35318;
var map__35321__$1 = (((((!((map__35321 == null))))?(((((map__35321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35321):map__35321);
var msg = map__35321__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35321__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35328,p__35329){
var map__35330 = p__35328;
var map__35330__$1 = (((((!((map__35330 == null))))?(((((map__35330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35330):map__35330);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35330__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35331 = p__35329;
var map__35331__$1 = (((((!((map__35331 == null))))?(((((map__35331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35331):map__35331);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35340,p__35341){
var map__35344 = p__35340;
var map__35344__$1 = (((((!((map__35344 == null))))?(((((map__35344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35344):map__35344);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35344__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35344__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35345 = p__35341;
var map__35345__$1 = (((((!((map__35345 == null))))?(((((map__35345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35345):map__35345);
var msg = map__35345__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35345__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35353,tid){
var map__35354 = p__35353;
var map__35354__$1 = (((((!((map__35354 == null))))?(((((map__35354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35354):map__35354);
var svc = map__35354__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35354__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35381 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35382 = null;
var count__35383 = (0);
var i__35384 = (0);
while(true){
if((i__35384 < count__35383)){
var vec__35395 = chunk__35382.cljs$core$IIndexed$_nth$arity$2(null,i__35384);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35427 = seq__35381;
var G__35428 = chunk__35382;
var G__35429 = count__35383;
var G__35430 = (i__35384 + (1));
seq__35381 = G__35427;
chunk__35382 = G__35428;
count__35383 = G__35429;
i__35384 = G__35430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35381);
if(temp__5735__auto__){
var seq__35381__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35381__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35381__$1);
var G__35431 = cljs.core.chunk_rest(seq__35381__$1);
var G__35432 = c__4556__auto__;
var G__35433 = cljs.core.count(c__4556__auto__);
var G__35434 = (0);
seq__35381 = G__35431;
chunk__35382 = G__35432;
count__35383 = G__35433;
i__35384 = G__35434;
continue;
} else {
var vec__35398 = cljs.core.first(seq__35381__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35435 = cljs.core.next(seq__35381__$1);
var G__35436 = null;
var G__35437 = (0);
var G__35438 = (0);
seq__35381 = G__35435;
chunk__35382 = G__35436;
count__35383 = G__35437;
i__35384 = G__35438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35363_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35363_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35364_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35364_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35365_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35365_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35366_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35366_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35413){
var map__35414 = p__35413;
var map__35414__$1 = (((((!((map__35414 == null))))?(((((map__35414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35414):map__35414);
var svc = map__35414__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35414__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35414__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
