goog.provide('my_project.app');
my_project.app.current_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("0");
my_project.app.saved_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.saved_func = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil"], null));
my_project.app.logitall = (function my_project$app$logitall(){
console.log("current-value: ",cljs.core.deref(my_project.app.current_value));

console.log("saved_value: ",cljs.core.deref(my_project.app.saved_value));

console.log("saved_func: ",cljs.core.deref(my_project.app.saved_func));

return console.log("result: ",cljs.core.deref(my_project.app.result));
});
my_project.app.add2history = (function my_project$app$add2history(val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.history,(function (p1__26226_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26226_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),val], null));
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
my_project.app.save_value = (function my_project$app$save_value(){
cljs.core.reset_BANG_(my_project.app.saved_value,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.current_value)));

my_project.app.add2history(cljs.core.deref(my_project.app.saved_value));

console.log("Saved value ",cljs.core.deref(my_project.app.saved_value));

return cljs.core.reset_BANG_(my_project.app.current_value,"0");
});
my_project.app.calculate_pressed = (function my_project$app$calculate_pressed(){
var mmap = new cljs.core.PersistentArrayMap(null, 4, ["/",cljs.core._SLASH_,"+",cljs.core._PLUS_,"*",cljs.core._STAR_,"-",cljs.core._], null);
var new_value = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.current_value));
var calculated = (function (){var G__26229 = cljs.core.deref(my_project.app.saved_value);
var G__26230 = new_value;
var fexpr__26228 = (function (){var G__26231 = cljs.core.deref(my_project.app.saved_func);
return (mmap.cljs$core$IFn$_invoke$arity$1 ? mmap.cljs$core$IFn$_invoke$arity$1(G__26231) : mmap.call(null,G__26231));
})();
return (fexpr__26228.cljs$core$IFn$_invoke$arity$2 ? fexpr__26228.cljs$core$IFn$_invoke$arity$2(G__26229,G__26230) : fexpr__26228.call(null,G__26229,G__26230));
})();
my_project.app.add2history(new_value);

my_project.app.add2history([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.saved_value))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.saved_func))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(calculated)].join(''));

cljs.core.reset_BANG_(my_project.app.current_value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(calculated));

cljs.core.reset_BANG_(my_project.app.saved_value,null);

cljs.core.reset_BANG_(my_project.app.saved_func,null);

return my_project.app.logitall();
});
my_project.app.reset_all = (function my_project$app$reset_all(){
cljs.core.reset_BANG_(my_project.app.current_value,"0");

cljs.core.reset_BANG_(my_project.app.saved_value,null);

cljs.core.reset_BANG_(my_project.app.saved_func,null);

return cljs.core.reset_BANG_(my_project.app.result,null);
});
my_project.app.reset_history = (function my_project$app$reset_history(){
return cljs.core.reset_BANG_(my_project.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil"], null));
});
my_project.app.create_history = (function my_project$app$create_history(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"History"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#my_his.history","div#my_his.history",610833636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#his1.alert.alert-success","div#his1.alert.alert-success",-840390919),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#listig","ul#listig",569566561),cljs.core.deref(my_project.app.history)], null)], null)], null)], null);
});
my_project.app.add_history = (function my_project$app$add_history(message){
var fexpr__26232 = jQuery("#listig").html("Hi!");
return (fexpr__26232.cljs$core$IFn$_invoke$arity$0 ? fexpr__26232.cljs$core$IFn$_invoke$arity$0() : fexpr__26232.call(null));
});
my_project.app.function_pressed = (function my_project$app$function_pressed(func){
if((cljs.core.deref(my_project.app.saved_func) == null)){
my_project.app.save_value();

my_project.app.add2history(func);

return cljs.core.reset_BANG_(my_project.app.saved_func,func);
} else {
console.log("We have an else ");

cljs.core.reset_BANG_(my_project.app.saved_func,func);

my_project.app.add2history(func);

return my_project.app.calculate_pressed();
}
});
my_project.app.numberbttn = (function my_project$app$numberbttn(my_value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__26233_SHARP_){
return ["tr_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26233_SHARP_)].join('');
})(my_value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),my_value,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current(cljs.core.str.cljs$core$IFn$_invoke$arity$1(my_value));
})], null),my_value], null)], null);
});
my_project.app.mini_app = (function my_project$app$mini_app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.h1","p.h1",-400565453),"Lommeregner"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-bordered","table.table.table-bordered",273351463),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.mb-3","div.input-group.mb-3",-1324364172),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.deref(my_project.app.current_value)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.reset_all();
})], null),"c"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_project.app.numberbttn,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.function_pressed("/");
})], null),"/"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_project.app.numberbttn,cljs.core.range.cljs$core$IFn$_invoke$arity$2((4),(7))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.function_pressed("-");
})], null),"-"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_project.app.numberbttn,cljs.core.range.cljs$core$IFn$_invoke$arity$2((7),(10))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.function_pressed("+");
})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.update_current(".");
})], null),"."], null)], null),my_project.app.numberbttn((0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.calculate_pressed();
})], null),"="], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-dark","button.btn.btn-dark",790594238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.function_pressed("*");
})], null),"*"], null)], null)], null)], null)], null),my_project.app.create_history()], null);
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
