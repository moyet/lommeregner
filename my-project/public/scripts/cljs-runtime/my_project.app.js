goog.provide('my_project.app');
my_project.app.current_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("0");
my_project.app.saved_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.saved_func = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil"], null));
my_project.app.add2history = (function my_project$app$add2history(val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.history,(function (p1__27544_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27544_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),val], null));
}));
});
my_project.app.update_current = (function my_project$app$update_current(val){
console.log("update_current ",val," ",cljs.core.deref(my_project.app.current_value));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.deref(my_project.app.current_value))){
cljs.core.reset_BANG_(my_project.app.current_value,val);

return console.log("val");
} else {
console.log("@current-value");

console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.current_value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''));

return cljs.core.reset_BANG_(my_project.app.current_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.current_value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''));
}
});
my_project.app.save_value = (function my_project$app$save_value(_){
cljs.core.reset_BANG_(my_project.app.saved_value,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.current_value)));

my_project.app.add2history(cljs.core.deref(my_project.app.saved_value));

console.log("Saved value ",cljs.core.deref(my_project.app.saved_value));

return cljs.core.reset_BANG_(my_project.app.current_value,"0");
});
my_project.app.save_function = (function my_project$app$save_function(func){
my_project.app.save_value(func);

return cljs.core.reset_BANG_(my_project.app.saved_func,func);
});
my_project.app.calculate = (function my_project$app$calculate(_){
var mmap = new cljs.core.PersistentArrayMap(null, 4, ["/",cljs.core._SLASH_,"+",cljs.core._PLUS_,"*",cljs.core._STAR_,"-",cljs.core._], null);
return cljs.core.reset_BANG_(my_project.app.current_value,(function (){var G__27547 = cljs.core.deref(my_project.app.saved_value);
var G__27548 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.current_value));
var fexpr__27546 = (function (){var G__27549 = cljs.core.deref(my_project.app.saved_func);
return (mmap.cljs$core$IFn$_invoke$arity$1 ? mmap.cljs$core$IFn$_invoke$arity$1(G__27549) : mmap.call(null,G__27549));
})();
return (fexpr__27546.cljs$core$IFn$_invoke$arity$2 ? fexpr__27546.cljs$core$IFn$_invoke$arity$2(G__27547,G__27548) : fexpr__27546.call(null,G__27547,G__27548));
})());
});
my_project.app.mini_app = (function my_project$app$mini_app(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(my_project.app.current_value)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(my_project.app.current_value,"0");
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("1");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("2");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("3");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.save_function("/");
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("4");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("5");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"6",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("6");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.save_function("-");
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"7",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("7");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"8",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("8");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"9",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("9");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.save_function("+");
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),".",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current(".");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current("0");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.calculate("0");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"*",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.save_function("*");
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.small","h2.small",-1185281584),"History"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history","div.history",1357424362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol#histlist","ol#histlist",-1805556929),cljs.core.deref(my_project.app.history)], null)], null);
});
my_project.app.run = (function my_project$app$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.mini_app], null),document.getElementById("app"));
});
goog.exportSymbol('my_project.app.run', my_project.app.run);
my_project.app.reload = (function my_project$app$reload(){
console.log("reload...");

return my_project.app.run();
});
goog.exportSymbol('my_project.app.reload', my_project.app.reload);
my_project.app.add = (function my_project$app$add(a,b){
return (a + b);
});

//# sourceMappingURL=my_project.app.js.map
