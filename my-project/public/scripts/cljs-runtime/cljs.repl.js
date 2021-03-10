goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34490){
var map__34491 = p__34490;
var map__34491__$1 = (((((!((map__34491 == null))))?(((((map__34491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34491):map__34491);
var m = map__34491__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34491__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34496_34868 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34497_34869 = null;
var count__34498_34870 = (0);
var i__34499_34871 = (0);
while(true){
if((i__34499_34871 < count__34498_34870)){
var f_34874 = chunk__34497_34869.cljs$core$IIndexed$_nth$arity$2(null,i__34499_34871);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34874], 0));


var G__34877 = seq__34496_34868;
var G__34878 = chunk__34497_34869;
var G__34879 = count__34498_34870;
var G__34880 = (i__34499_34871 + (1));
seq__34496_34868 = G__34877;
chunk__34497_34869 = G__34878;
count__34498_34870 = G__34879;
i__34499_34871 = G__34880;
continue;
} else {
var temp__5735__auto___34881 = cljs.core.seq(seq__34496_34868);
if(temp__5735__auto___34881){
var seq__34496_34883__$1 = temp__5735__auto___34881;
if(cljs.core.chunked_seq_QMARK_(seq__34496_34883__$1)){
var c__4556__auto___34884 = cljs.core.chunk_first(seq__34496_34883__$1);
var G__34885 = cljs.core.chunk_rest(seq__34496_34883__$1);
var G__34886 = c__4556__auto___34884;
var G__34887 = cljs.core.count(c__4556__auto___34884);
var G__34888 = (0);
seq__34496_34868 = G__34885;
chunk__34497_34869 = G__34886;
count__34498_34870 = G__34887;
i__34499_34871 = G__34888;
continue;
} else {
var f_34889 = cljs.core.first(seq__34496_34883__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34889], 0));


var G__34890 = cljs.core.next(seq__34496_34883__$1);
var G__34891 = null;
var G__34892 = (0);
var G__34893 = (0);
seq__34496_34868 = G__34890;
chunk__34497_34869 = G__34891;
count__34498_34870 = G__34892;
i__34499_34871 = G__34893;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34900 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34900], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34900)))?cljs.core.second(arglists_34900):arglists_34900)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34515_34929 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34516_34930 = null;
var count__34517_34931 = (0);
var i__34518_34932 = (0);
while(true){
if((i__34518_34932 < count__34517_34931)){
var vec__34545_34933 = chunk__34516_34930.cljs$core$IIndexed$_nth$arity$2(null,i__34518_34932);
var name_34934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545_34933,(0),null);
var map__34548_34935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545_34933,(1),null);
var map__34548_34936__$1 = (((((!((map__34548_34935 == null))))?(((((map__34548_34935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34548_34935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34548_34935):map__34548_34935);
var doc_34937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548_34936__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548_34936__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34934], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34938], 0));

if(cljs.core.truth_(doc_34937)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34937], 0));
} else {
}


var G__34953 = seq__34515_34929;
var G__34954 = chunk__34516_34930;
var G__34955 = count__34517_34931;
var G__34956 = (i__34518_34932 + (1));
seq__34515_34929 = G__34953;
chunk__34516_34930 = G__34954;
count__34517_34931 = G__34955;
i__34518_34932 = G__34956;
continue;
} else {
var temp__5735__auto___34957 = cljs.core.seq(seq__34515_34929);
if(temp__5735__auto___34957){
var seq__34515_34958__$1 = temp__5735__auto___34957;
if(cljs.core.chunked_seq_QMARK_(seq__34515_34958__$1)){
var c__4556__auto___34959 = cljs.core.chunk_first(seq__34515_34958__$1);
var G__34960 = cljs.core.chunk_rest(seq__34515_34958__$1);
var G__34961 = c__4556__auto___34959;
var G__34962 = cljs.core.count(c__4556__auto___34959);
var G__34963 = (0);
seq__34515_34929 = G__34960;
chunk__34516_34930 = G__34961;
count__34517_34931 = G__34962;
i__34518_34932 = G__34963;
continue;
} else {
var vec__34569_34968 = cljs.core.first(seq__34515_34958__$1);
var name_34969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569_34968,(0),null);
var map__34572_34970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569_34968,(1),null);
var map__34572_34971__$1 = (((((!((map__34572_34970 == null))))?(((((map__34572_34970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34572_34970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34572_34970):map__34572_34970);
var doc_34972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34572_34971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34572_34971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34969], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34973], 0));

if(cljs.core.truth_(doc_34972)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34972], 0));
} else {
}


var G__34975 = cljs.core.next(seq__34515_34958__$1);
var G__34976 = null;
var G__34977 = (0);
var G__34978 = (0);
seq__34515_34929 = G__34975;
chunk__34516_34930 = G__34976;
count__34517_34931 = G__34977;
i__34518_34932 = G__34978;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34582 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34583 = null;
var count__34584 = (0);
var i__34585 = (0);
while(true){
if((i__34585 < count__34584)){
var role = chunk__34583.cljs$core$IIndexed$_nth$arity$2(null,i__34585);
var temp__5735__auto___34982__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34982__$1)){
var spec_34983 = temp__5735__auto___34982__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34983)], 0));
} else {
}


var G__34984 = seq__34582;
var G__34985 = chunk__34583;
var G__34986 = count__34584;
var G__34987 = (i__34585 + (1));
seq__34582 = G__34984;
chunk__34583 = G__34985;
count__34584 = G__34986;
i__34585 = G__34987;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34582);
if(temp__5735__auto____$1){
var seq__34582__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34582__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34582__$1);
var G__34988 = cljs.core.chunk_rest(seq__34582__$1);
var G__34989 = c__4556__auto__;
var G__34990 = cljs.core.count(c__4556__auto__);
var G__34991 = (0);
seq__34582 = G__34988;
chunk__34583 = G__34989;
count__34584 = G__34990;
i__34585 = G__34991;
continue;
} else {
var role = cljs.core.first(seq__34582__$1);
var temp__5735__auto___35005__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35005__$2)){
var spec_35007 = temp__5735__auto___35005__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35007)], 0));
} else {
}


var G__35012 = cljs.core.next(seq__34582__$1);
var G__35013 = null;
var G__35014 = (0);
var G__35015 = (0);
seq__34582 = G__35012;
chunk__34583 = G__35013;
count__34584 = G__35014;
i__34585 = G__35015;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35024 = cljs.core.ex_cause(t);
via = G__35023;
t = G__35024;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34631 = datafied_throwable;
var map__34631__$1 = (((((!((map__34631 == null))))?(((((map__34631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34631):map__34631);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34631__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34641 = cljs.core.last(via);
var map__34641__$1 = (((((!((map__34641 == null))))?(((((map__34641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34641):map__34641);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34642 = data;
var map__34642__$1 = (((((!((map__34642 == null))))?(((((map__34642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34642):map__34642);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34647 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34647__$1 = (((((!((map__34647 == null))))?(((((map__34647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34647):map__34647);
var top_data = map__34647__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34647__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34660 = phase;
var G__34660__$1 = (((G__34660 instanceof cljs.core.Keyword))?G__34660.fqn:null);
switch (G__34660__$1) {
case "read-source":
var map__34668 = data;
var map__34668__$1 = (((((!((map__34668 == null))))?(((((map__34668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34668):map__34668);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34668__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34668__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34680 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34680__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34680,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34680);
var G__34680__$2 = (cljs.core.truth_((function (){var fexpr__34685 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34685.cljs$core$IFn$_invoke$arity$1 ? fexpr__34685.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34685.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34680__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34680__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34680__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34680__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34720 = top_data;
var G__34720__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34720,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34720);
var G__34720__$2 = (cljs.core.truth_((function (){var fexpr__34727 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34727.cljs$core$IFn$_invoke$arity$1 ? fexpr__34727.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34727.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34720__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34720__$1);
var G__34720__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34720__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34720__$2);
var G__34720__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34720__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34720__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34720__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34720__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34738 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34738,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34738,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34738,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34738,(3),null);
var G__34741 = top_data;
var G__34741__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34741,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34741);
var G__34741__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34741__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34741__$1);
var G__34741__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34741__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34741__$2);
var G__34741__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34741__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34741__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34741__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34741__$4;
}

break;
case "execution":
var vec__34759 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34622_SHARP_){
var or__4126__auto__ = (p1__34622_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__34764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34764.cljs$core$IFn$_invoke$arity$1 ? fexpr__34764.cljs$core$IFn$_invoke$arity$1(p1__34622_SHARP_) : fexpr__34764.call(null,p1__34622_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34765__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34765,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34765);
var G__34765__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34765__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34765__$1);
var G__34765__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34765__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34765__$2);
var G__34765__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34765__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34765__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34765__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34765__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34660__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34779){
var map__34780 = p__34779;
var map__34780__$1 = (((((!((map__34780 == null))))?(((((map__34780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34780):map__34780);
var triage_data = map__34780__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34788 = phase;
var G__34788__$1 = (((G__34788 instanceof cljs.core.Keyword))?G__34788.fqn:null);
switch (G__34788__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34789 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34790 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34791 = loc;
var G__34792 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34793_35150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34794_35151 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34795_35152 = true;
var _STAR_print_fn_STAR__temp_val__34796_35153 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34795_35152);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34796_35153);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34776_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34776_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34794_35151);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34793_35150);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34789,G__34790,G__34791,G__34792) : format.call(null,G__34789,G__34790,G__34791,G__34792));

break;
case "macroexpansion":
var G__34803 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34804 = cause_type;
var G__34805 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34806 = loc;
var G__34807 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34803,G__34804,G__34805,G__34806,G__34807) : format.call(null,G__34803,G__34804,G__34805,G__34806,G__34807));

break;
case "compile-syntax-check":
var G__34813 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34814 = cause_type;
var G__34815 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34816 = loc;
var G__34817 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34813,G__34814,G__34815,G__34816,G__34817) : format.call(null,G__34813,G__34814,G__34815,G__34816,G__34817));

break;
case "compilation":
var G__34818 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34819 = cause_type;
var G__34820 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34821 = loc;
var G__34822 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34818,G__34819,G__34820,G__34821,G__34822) : format.call(null,G__34818,G__34819,G__34820,G__34821,G__34822));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34823 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34824 = symbol;
var G__34825 = loc;
var G__34826 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34827_35174 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34828_35175 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34829_35176 = true;
var _STAR_print_fn_STAR__temp_val__34830_35177 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34829_35176);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34830_35177);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34777_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34777_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34828_35175);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34827_35174);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34823,G__34824,G__34825,G__34826) : format.call(null,G__34823,G__34824,G__34825,G__34826));
} else {
var G__34841 = "Execution error%s at %s(%s).\n%s\n";
var G__34842 = cause_type;
var G__34843 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34844 = loc;
var G__34845 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34841,G__34842,G__34843,G__34844,G__34845) : format.call(null,G__34841,G__34842,G__34843,G__34844,G__34845));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34788__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
