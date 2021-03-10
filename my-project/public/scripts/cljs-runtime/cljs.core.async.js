goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29133 = arguments.length;
switch (G__29133) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29140 = (function (f,blockable,meta29141){
this.f = f;
this.blockable = blockable;
this.meta29141 = meta29141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29142,meta29141__$1){
var self__ = this;
var _29142__$1 = this;
return (new cljs.core.async.t_cljs$core$async29140(self__.f,self__.blockable,meta29141__$1));
}));

(cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29142){
var self__ = this;
var _29142__$1 = this;
return self__.meta29141;
}));

(cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29141","meta29141",-427324562,null)], null);
}));

(cljs.core.async.t_cljs$core$async29140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29140");

(cljs.core.async.t_cljs$core$async29140.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29140.
 */
cljs.core.async.__GT_t_cljs$core$async29140 = (function cljs$core$async$__GT_t_cljs$core$async29140(f__$1,blockable__$1,meta29141){
return (new cljs.core.async.t_cljs$core$async29140(f__$1,blockable__$1,meta29141));
});

}

return (new cljs.core.async.t_cljs$core$async29140(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29172 = arguments.length;
switch (G__29172) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29185 = arguments.length;
switch (G__29185) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29195 = arguments.length;
switch (G__29195) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31877 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31877) : fn1.call(null,val_31877));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31877) : fn1.call(null,val_31877));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29206 = arguments.length;
switch (G__29206) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___31881 = n;
var x_31882 = (0);
while(true){
if((x_31882 < n__4613__auto___31881)){
(a[x_31882] = x_31882);

var G__31883 = (x_31882 + (1));
x_31882 = G__31883;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29238 = (function (flag,meta29239){
this.flag = flag;
this.meta29239 = meta29239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29240,meta29239__$1){
var self__ = this;
var _29240__$1 = this;
return (new cljs.core.async.t_cljs$core$async29238(self__.flag,meta29239__$1));
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29240){
var self__ = this;
var _29240__$1 = this;
return self__.meta29239;
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29239","meta29239",2042363793,null)], null);
}));

(cljs.core.async.t_cljs$core$async29238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29238");

(cljs.core.async.t_cljs$core$async29238.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29238.
 */
cljs.core.async.__GT_t_cljs$core$async29238 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29238(flag__$1,meta29239){
return (new cljs.core.async.t_cljs$core$async29238(flag__$1,meta29239));
});

}

return (new cljs.core.async.t_cljs$core$async29238(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29264 = (function (flag,cb,meta29265){
this.flag = flag;
this.cb = cb;
this.meta29265 = meta29265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29266,meta29265__$1){
var self__ = this;
var _29266__$1 = this;
return (new cljs.core.async.t_cljs$core$async29264(self__.flag,self__.cb,meta29265__$1));
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29266){
var self__ = this;
var _29266__$1 = this;
return self__.meta29265;
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29265","meta29265",1066510009,null)], null);
}));

(cljs.core.async.t_cljs$core$async29264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29264");

(cljs.core.async.t_cljs$core$async29264.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29264.
 */
cljs.core.async.__GT_t_cljs$core$async29264 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29264(flag__$1,cb__$1,meta29265){
return (new cljs.core.async.t_cljs$core$async29264(flag__$1,cb__$1,meta29265));
});

}

return (new cljs.core.async.t_cljs$core$async29264(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29271_SHARP_){
var G__29276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29271_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29276) : fret.call(null,G__29276));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29272_SHARP_){
var G__29277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29272_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29277) : fret.call(null,G__29277));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31901 = (i + (1));
i = G__31901;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31903 = arguments.length;
var i__4737__auto___31904 = (0);
while(true){
if((i__4737__auto___31904 < len__4736__auto___31903)){
args__4742__auto__.push((arguments[i__4737__auto___31904]));

var G__31905 = (i__4737__auto___31904 + (1));
i__4737__auto___31904 = G__31905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29280){
var map__29281 = p__29280;
var map__29281__$1 = (((((!((map__29281 == null))))?(((((map__29281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29281):map__29281);
var opts = map__29281__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29278){
var G__29279 = cljs.core.first(seq29278);
var seq29278__$1 = cljs.core.next(seq29278);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29279,seq29278__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29310 = arguments.length;
switch (G__29310) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29014__auto___31915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29358){
var state_val_29359 = (state_29358[(1)]);
if((state_val_29359 === (7))){
var inst_29352 = (state_29358[(2)]);
var state_29358__$1 = state_29358;
var statearr_29366_31916 = state_29358__$1;
(statearr_29366_31916[(2)] = inst_29352);

(statearr_29366_31916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (1))){
var state_29358__$1 = state_29358;
var statearr_29368_31921 = state_29358__$1;
(statearr_29368_31921[(2)] = null);

(statearr_29368_31921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (4))){
var inst_29320 = (state_29358[(7)]);
var inst_29320__$1 = (state_29358[(2)]);
var inst_29321 = (inst_29320__$1 == null);
var state_29358__$1 = (function (){var statearr_29373 = state_29358;
(statearr_29373[(7)] = inst_29320__$1);

return statearr_29373;
})();
if(cljs.core.truth_(inst_29321)){
var statearr_29374_31927 = state_29358__$1;
(statearr_29374_31927[(1)] = (5));

} else {
var statearr_29379_31932 = state_29358__$1;
(statearr_29379_31932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (13))){
var state_29358__$1 = state_29358;
var statearr_29381_31935 = state_29358__$1;
(statearr_29381_31935[(2)] = null);

(statearr_29381_31935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (6))){
var inst_29320 = (state_29358[(7)]);
var state_29358__$1 = state_29358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29358__$1,(11),to,inst_29320);
} else {
if((state_val_29359 === (3))){
var inst_29356 = (state_29358[(2)]);
var state_29358__$1 = state_29358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29358__$1,inst_29356);
} else {
if((state_val_29359 === (12))){
var state_29358__$1 = state_29358;
var statearr_29384_31942 = state_29358__$1;
(statearr_29384_31942[(2)] = null);

(statearr_29384_31942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (2))){
var state_29358__$1 = state_29358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29358__$1,(4),from);
} else {
if((state_val_29359 === (11))){
var inst_29333 = (state_29358[(2)]);
var state_29358__$1 = state_29358;
if(cljs.core.truth_(inst_29333)){
var statearr_29386_31944 = state_29358__$1;
(statearr_29386_31944[(1)] = (12));

} else {
var statearr_29388_31947 = state_29358__$1;
(statearr_29388_31947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (9))){
var state_29358__$1 = state_29358;
var statearr_29393_31950 = state_29358__$1;
(statearr_29393_31950[(2)] = null);

(statearr_29393_31950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (5))){
var state_29358__$1 = state_29358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29394_31955 = state_29358__$1;
(statearr_29394_31955[(1)] = (8));

} else {
var statearr_29395_31956 = state_29358__$1;
(statearr_29395_31956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (14))){
var inst_29347 = (state_29358[(2)]);
var state_29358__$1 = state_29358;
var statearr_29396_31957 = state_29358__$1;
(statearr_29396_31957[(2)] = inst_29347);

(statearr_29396_31957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (10))){
var inst_29330 = (state_29358[(2)]);
var state_29358__$1 = state_29358;
var statearr_29397_31960 = state_29358__$1;
(statearr_29397_31960[(2)] = inst_29330);

(statearr_29397_31960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29359 === (8))){
var inst_29324 = cljs.core.async.close_BANG_(to);
var state_29358__$1 = state_29358;
var statearr_29400_31961 = state_29358__$1;
(statearr_29400_31961[(2)] = inst_29324);

(statearr_29400_31961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_29403 = [null,null,null,null,null,null,null,null];
(statearr_29403[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_29403[(1)] = (1));

return statearr_29403;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_29358){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29358);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29414){var ex__28774__auto__ = e29414;
var statearr_29416_31963 = state_29358;
(statearr_29416_31963[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29358[(4)]))){
var statearr_29417_31964 = state_29358;
(statearr_29417_31964[(1)] = cljs.core.first((state_29358[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31966 = state_29358;
state_29358 = G__31966;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_29358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_29358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29422 = f__29016__auto__();
(statearr_29422[(6)] = c__29014__auto___31915);

return statearr_29422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29423){
var vec__29424 = p__29423;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29424,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29424,(1),null);
var job = vec__29424;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29014__auto___31970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29435){
var state_val_29436 = (state_29435[(1)]);
if((state_val_29436 === (1))){
var state_29435__$1 = state_29435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29435__$1,(2),res,v);
} else {
if((state_val_29436 === (2))){
var inst_29432 = (state_29435[(2)]);
var inst_29433 = cljs.core.async.close_BANG_(res);
var state_29435__$1 = (function (){var statearr_29445 = state_29435;
(statearr_29445[(7)] = inst_29432);

return statearr_29445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29435__$1,inst_29433);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0 = (function (){
var statearr_29448 = [null,null,null,null,null,null,null,null];
(statearr_29448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__);

(statearr_29448[(1)] = (1));

return statearr_29448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1 = (function (state_29435){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29435);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29449){var ex__28774__auto__ = e29449;
var statearr_29450_31975 = state_29435;
(statearr_29450_31975[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29435[(4)]))){
var statearr_29451_31976 = state_29435;
(statearr_29451_31976[(1)] = cljs.core.first((state_29435[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31981 = state_29435;
state_29435 = G__31981;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = function(state_29435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1.call(this,state_29435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29452 = f__29016__auto__();
(statearr_29452[(6)] = c__29014__auto___31970);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29454){
var vec__29455 = p__29454;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29455,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29455,(1),null);
var job = vec__29455;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___31993 = n;
var __31996 = (0);
while(true){
if((__31996 < n__4613__auto___31993)){
var G__29459_31999 = type;
var G__29459_32000__$1 = (((G__29459_31999 instanceof cljs.core.Keyword))?G__29459_31999.fqn:null);
switch (G__29459_32000__$1) {
case "compute":
var c__29014__auto___32002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31996,c__29014__auto___32002,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async){
return (function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = ((function (__31996,c__29014__auto___32002,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async){
return (function (state_29473){
var state_val_29474 = (state_29473[(1)]);
if((state_val_29474 === (1))){
var state_29473__$1 = state_29473;
var statearr_29479_32003 = state_29473__$1;
(statearr_29479_32003[(2)] = null);

(statearr_29479_32003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (2))){
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29473__$1,(4),jobs);
} else {
if((state_val_29474 === (3))){
var inst_29471 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29473__$1,inst_29471);
} else {
if((state_val_29474 === (4))){
var inst_29463 = (state_29473[(2)]);
var inst_29464 = process(inst_29463);
var state_29473__$1 = state_29473;
if(cljs.core.truth_(inst_29464)){
var statearr_29480_32007 = state_29473__$1;
(statearr_29480_32007[(1)] = (5));

} else {
var statearr_29481_32008 = state_29473__$1;
(statearr_29481_32008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (5))){
var state_29473__$1 = state_29473;
var statearr_29482_32011 = state_29473__$1;
(statearr_29482_32011[(2)] = null);

(statearr_29482_32011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (6))){
var state_29473__$1 = state_29473;
var statearr_29484_32014 = state_29473__$1;
(statearr_29484_32014[(2)] = null);

(statearr_29484_32014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (7))){
var inst_29469 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
var statearr_29491_32018 = state_29473__$1;
(statearr_29491_32018[(2)] = inst_29469);

(statearr_29491_32018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31996,c__29014__auto___32002,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async))
;
return ((function (__31996,switch__28770__auto__,c__29014__auto___32002,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0 = (function (){
var statearr_29498 = [null,null,null,null,null,null,null];
(statearr_29498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__);

(statearr_29498[(1)] = (1));

return statearr_29498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1 = (function (state_29473){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29473);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29499){var ex__28774__auto__ = e29499;
var statearr_29502_32026 = state_29473;
(statearr_29502_32026[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29473[(4)]))){
var statearr_29503_32027 = state_29473;
(statearr_29503_32027[(1)] = cljs.core.first((state_29473[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32028 = state_29473;
state_29473 = G__32028;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = function(state_29473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1.call(this,state_29473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__;
})()
;})(__31996,switch__28770__auto__,c__29014__auto___32002,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async))
})();
var state__29017__auto__ = (function (){var statearr_29504 = f__29016__auto__();
(statearr_29504[(6)] = c__29014__auto___32002);

return statearr_29504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
});})(__31996,c__29014__auto___32002,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async))
);


break;
case "async":
var c__29014__auto___32034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31996,c__29014__auto___32034,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async){
return (function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = ((function (__31996,c__29014__auto___32034,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async){
return (function (state_29525){
var state_val_29526 = (state_29525[(1)]);
if((state_val_29526 === (1))){
var state_29525__$1 = state_29525;
var statearr_29533_32035 = state_29525__$1;
(statearr_29533_32035[(2)] = null);

(statearr_29533_32035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (2))){
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29525__$1,(4),jobs);
} else {
if((state_val_29526 === (3))){
var inst_29523 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29525__$1,inst_29523);
} else {
if((state_val_29526 === (4))){
var inst_29511 = (state_29525[(2)]);
var inst_29512 = async(inst_29511);
var state_29525__$1 = state_29525;
if(cljs.core.truth_(inst_29512)){
var statearr_29536_32038 = state_29525__$1;
(statearr_29536_32038[(1)] = (5));

} else {
var statearr_29537_32041 = state_29525__$1;
(statearr_29537_32041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (5))){
var state_29525__$1 = state_29525;
var statearr_29543_32044 = state_29525__$1;
(statearr_29543_32044[(2)] = null);

(statearr_29543_32044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (6))){
var state_29525__$1 = state_29525;
var statearr_29545_32045 = state_29525__$1;
(statearr_29545_32045[(2)] = null);

(statearr_29545_32045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (7))){
var inst_29521 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29548_32048 = state_29525__$1;
(statearr_29548_32048[(2)] = inst_29521);

(statearr_29548_32048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31996,c__29014__auto___32034,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async))
;
return ((function (__31996,switch__28770__auto__,c__29014__auto___32034,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null];
(statearr_29549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1 = (function (state_29525){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29525);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29552){var ex__28774__auto__ = e29552;
var statearr_29553_32053 = state_29525;
(statearr_29553_32053[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29525[(4)]))){
var statearr_29555_32054 = state_29525;
(statearr_29555_32054[(1)] = cljs.core.first((state_29525[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32061 = state_29525;
state_29525 = G__32061;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = function(state_29525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1.call(this,state_29525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__;
})()
;})(__31996,switch__28770__auto__,c__29014__auto___32034,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async))
})();
var state__29017__auto__ = (function (){var statearr_29556 = f__29016__auto__();
(statearr_29556[(6)] = c__29014__auto___32034);

return statearr_29556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
});})(__31996,c__29014__auto___32034,G__29459_31999,G__29459_32000__$1,n__4613__auto___31993,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29459_32000__$1)].join('')));

}

var G__32062 = (__31996 + (1));
__31996 = G__32062;
continue;
} else {
}
break;
}

var c__29014__auto___32064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29587){
var state_val_29588 = (state_29587[(1)]);
if((state_val_29588 === (7))){
var inst_29583 = (state_29587[(2)]);
var state_29587__$1 = state_29587;
var statearr_29593_32067 = state_29587__$1;
(statearr_29593_32067[(2)] = inst_29583);

(statearr_29593_32067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (1))){
var state_29587__$1 = state_29587;
var statearr_29594_32068 = state_29587__$1;
(statearr_29594_32068[(2)] = null);

(statearr_29594_32068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (4))){
var inst_29559 = (state_29587[(7)]);
var inst_29559__$1 = (state_29587[(2)]);
var inst_29560 = (inst_29559__$1 == null);
var state_29587__$1 = (function (){var statearr_29595 = state_29587;
(statearr_29595[(7)] = inst_29559__$1);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29560)){
var statearr_29596_32071 = state_29587__$1;
(statearr_29596_32071[(1)] = (5));

} else {
var statearr_29597_32073 = state_29587__$1;
(statearr_29597_32073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (6))){
var inst_29564 = (state_29587[(8)]);
var inst_29559 = (state_29587[(7)]);
var inst_29564__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29575 = [inst_29559,inst_29564__$1];
var inst_29576 = (new cljs.core.PersistentVector(null,2,(5),inst_29565,inst_29575,null));
var state_29587__$1 = (function (){var statearr_29602 = state_29587;
(statearr_29602[(8)] = inst_29564__$1);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29587__$1,(8),jobs,inst_29576);
} else {
if((state_val_29588 === (3))){
var inst_29585 = (state_29587[(2)]);
var state_29587__$1 = state_29587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29587__$1,inst_29585);
} else {
if((state_val_29588 === (2))){
var state_29587__$1 = state_29587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29587__$1,(4),from);
} else {
if((state_val_29588 === (9))){
var inst_29580 = (state_29587[(2)]);
var state_29587__$1 = (function (){var statearr_29603 = state_29587;
(statearr_29603[(9)] = inst_29580);

return statearr_29603;
})();
var statearr_29605_32077 = state_29587__$1;
(statearr_29605_32077[(2)] = null);

(statearr_29605_32077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (5))){
var inst_29562 = cljs.core.async.close_BANG_(jobs);
var state_29587__$1 = state_29587;
var statearr_29606_32079 = state_29587__$1;
(statearr_29606_32079[(2)] = inst_29562);

(statearr_29606_32079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29588 === (8))){
var inst_29564 = (state_29587[(8)]);
var inst_29578 = (state_29587[(2)]);
var state_29587__$1 = (function (){var statearr_29607 = state_29587;
(statearr_29607[(10)] = inst_29578);

return statearr_29607;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29587__$1,(9),results,inst_29564);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0 = (function (){
var statearr_29609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__);

(statearr_29609[(1)] = (1));

return statearr_29609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1 = (function (state_29587){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29587);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29610){var ex__28774__auto__ = e29610;
var statearr_29611_32085 = state_29587;
(statearr_29611_32085[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29587[(4)]))){
var statearr_29612_32086 = state_29587;
(statearr_29612_32086[(1)] = cljs.core.first((state_29587[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32089 = state_29587;
state_29587 = G__32089;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = function(state_29587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1.call(this,state_29587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29613 = f__29016__auto__();
(statearr_29613[(6)] = c__29014__auto___32064);

return statearr_29613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


var c__29014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29657){
var state_val_29658 = (state_29657[(1)]);
if((state_val_29658 === (7))){
var inst_29653 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29661_32092 = state_29657__$1;
(statearr_29661_32092[(2)] = inst_29653);

(statearr_29661_32092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (20))){
var state_29657__$1 = state_29657;
var statearr_29662_32093 = state_29657__$1;
(statearr_29662_32093[(2)] = null);

(statearr_29662_32093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (1))){
var state_29657__$1 = state_29657;
var statearr_29664_32094 = state_29657__$1;
(statearr_29664_32094[(2)] = null);

(statearr_29664_32094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (4))){
var inst_29621 = (state_29657[(7)]);
var inst_29621__$1 = (state_29657[(2)]);
var inst_29622 = (inst_29621__$1 == null);
var state_29657__$1 = (function (){var statearr_29665 = state_29657;
(statearr_29665[(7)] = inst_29621__$1);

return statearr_29665;
})();
if(cljs.core.truth_(inst_29622)){
var statearr_29666_32098 = state_29657__$1;
(statearr_29666_32098[(1)] = (5));

} else {
var statearr_29667_32099 = state_29657__$1;
(statearr_29667_32099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (15))){
var inst_29634 = (state_29657[(8)]);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29657__$1,(18),to,inst_29634);
} else {
if((state_val_29658 === (21))){
var inst_29648 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29671_32103 = state_29657__$1;
(statearr_29671_32103[(2)] = inst_29648);

(statearr_29671_32103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (13))){
var inst_29650 = (state_29657[(2)]);
var state_29657__$1 = (function (){var statearr_29682 = state_29657;
(statearr_29682[(9)] = inst_29650);

return statearr_29682;
})();
var statearr_29683_32104 = state_29657__$1;
(statearr_29683_32104[(2)] = null);

(statearr_29683_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (6))){
var inst_29621 = (state_29657[(7)]);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29657__$1,(11),inst_29621);
} else {
if((state_val_29658 === (17))){
var inst_29643 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
if(cljs.core.truth_(inst_29643)){
var statearr_29688_32106 = state_29657__$1;
(statearr_29688_32106[(1)] = (19));

} else {
var statearr_29689_32107 = state_29657__$1;
(statearr_29689_32107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (3))){
var inst_29655 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29657__$1,inst_29655);
} else {
if((state_val_29658 === (12))){
var inst_29631 = (state_29657[(10)]);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29657__$1,(14),inst_29631);
} else {
if((state_val_29658 === (2))){
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29657__$1,(4),results);
} else {
if((state_val_29658 === (19))){
var state_29657__$1 = state_29657;
var statearr_29692_32113 = state_29657__$1;
(statearr_29692_32113[(2)] = null);

(statearr_29692_32113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (11))){
var inst_29631 = (state_29657[(2)]);
var state_29657__$1 = (function (){var statearr_29693 = state_29657;
(statearr_29693[(10)] = inst_29631);

return statearr_29693;
})();
var statearr_29694_32114 = state_29657__$1;
(statearr_29694_32114[(2)] = null);

(statearr_29694_32114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (9))){
var state_29657__$1 = state_29657;
var statearr_29697_32115 = state_29657__$1;
(statearr_29697_32115[(2)] = null);

(statearr_29697_32115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (5))){
var state_29657__$1 = state_29657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29698_32122 = state_29657__$1;
(statearr_29698_32122[(1)] = (8));

} else {
var statearr_29699_32125 = state_29657__$1;
(statearr_29699_32125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (14))){
var inst_29634 = (state_29657[(8)]);
var inst_29634__$1 = (state_29657[(2)]);
var inst_29636 = (inst_29634__$1 == null);
var inst_29637 = cljs.core.not(inst_29636);
var state_29657__$1 = (function (){var statearr_29700 = state_29657;
(statearr_29700[(8)] = inst_29634__$1);

return statearr_29700;
})();
if(inst_29637){
var statearr_29701_32129 = state_29657__$1;
(statearr_29701_32129[(1)] = (15));

} else {
var statearr_29702_32130 = state_29657__$1;
(statearr_29702_32130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (16))){
var state_29657__$1 = state_29657;
var statearr_29709_32131 = state_29657__$1;
(statearr_29709_32131[(2)] = false);

(statearr_29709_32131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (10))){
var inst_29628 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29715_32138 = state_29657__$1;
(statearr_29715_32138[(2)] = inst_29628);

(statearr_29715_32138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (18))){
var inst_29640 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29718_32140 = state_29657__$1;
(statearr_29718_32140[(2)] = inst_29640);

(statearr_29718_32140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (8))){
var inst_29625 = cljs.core.async.close_BANG_(to);
var state_29657__$1 = state_29657;
var statearr_29719_32141 = state_29657__$1;
(statearr_29719_32141[(2)] = inst_29625);

(statearr_29719_32141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0 = (function (){
var statearr_29720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__);

(statearr_29720[(1)] = (1));

return statearr_29720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1 = (function (state_29657){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29657);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29723){var ex__28774__auto__ = e29723;
var statearr_29724_32142 = state_29657;
(statearr_29724_32142[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29657[(4)]))){
var statearr_29725_32143 = state_29657;
(statearr_29725_32143[(1)] = cljs.core.first((state_29657[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32148 = state_29657;
state_29657 = G__32148;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__ = function(state_29657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1.call(this,state_29657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29730 = f__29016__auto__();
(statearr_29730[(6)] = c__29014__auto__);

return statearr_29730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));

return c__29014__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29732 = arguments.length;
switch (G__29732) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29740 = arguments.length;
switch (G__29740) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29760 = arguments.length;
switch (G__29760) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29014__auto___32170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29791){
var state_val_29792 = (state_29791[(1)]);
if((state_val_29792 === (7))){
var inst_29787 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29793_32173 = state_29791__$1;
(statearr_29793_32173[(2)] = inst_29787);

(statearr_29793_32173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (1))){
var state_29791__$1 = state_29791;
var statearr_29794_32174 = state_29791__$1;
(statearr_29794_32174[(2)] = null);

(statearr_29794_32174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (4))){
var inst_29768 = (state_29791[(7)]);
var inst_29768__$1 = (state_29791[(2)]);
var inst_29769 = (inst_29768__$1 == null);
var state_29791__$1 = (function (){var statearr_29801 = state_29791;
(statearr_29801[(7)] = inst_29768__$1);

return statearr_29801;
})();
if(cljs.core.truth_(inst_29769)){
var statearr_29802_32176 = state_29791__$1;
(statearr_29802_32176[(1)] = (5));

} else {
var statearr_29803_32177 = state_29791__$1;
(statearr_29803_32177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (13))){
var state_29791__$1 = state_29791;
var statearr_29804_32179 = state_29791__$1;
(statearr_29804_32179[(2)] = null);

(statearr_29804_32179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (6))){
var inst_29768 = (state_29791[(7)]);
var inst_29774 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29768) : p.call(null,inst_29768));
var state_29791__$1 = state_29791;
if(cljs.core.truth_(inst_29774)){
var statearr_29806_32180 = state_29791__$1;
(statearr_29806_32180[(1)] = (9));

} else {
var statearr_29814_32181 = state_29791__$1;
(statearr_29814_32181[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (3))){
var inst_29789 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29791__$1,inst_29789);
} else {
if((state_val_29792 === (12))){
var state_29791__$1 = state_29791;
var statearr_29816_32183 = state_29791__$1;
(statearr_29816_32183[(2)] = null);

(statearr_29816_32183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (2))){
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29791__$1,(4),ch);
} else {
if((state_val_29792 === (11))){
var inst_29768 = (state_29791[(7)]);
var inst_29778 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29791__$1,(8),inst_29778,inst_29768);
} else {
if((state_val_29792 === (9))){
var state_29791__$1 = state_29791;
var statearr_29819_32184 = state_29791__$1;
(statearr_29819_32184[(2)] = tc);

(statearr_29819_32184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (5))){
var inst_29771 = cljs.core.async.close_BANG_(tc);
var inst_29772 = cljs.core.async.close_BANG_(fc);
var state_29791__$1 = (function (){var statearr_29821 = state_29791;
(statearr_29821[(8)] = inst_29771);

return statearr_29821;
})();
var statearr_29822_32185 = state_29791__$1;
(statearr_29822_32185[(2)] = inst_29772);

(statearr_29822_32185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (14))){
var inst_29785 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29826_32186 = state_29791__$1;
(statearr_29826_32186[(2)] = inst_29785);

(statearr_29826_32186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (10))){
var state_29791__$1 = state_29791;
var statearr_29828_32187 = state_29791__$1;
(statearr_29828_32187[(2)] = fc);

(statearr_29828_32187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (8))){
var inst_29780 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
if(cljs.core.truth_(inst_29780)){
var statearr_29831_32192 = state_29791__$1;
(statearr_29831_32192[(1)] = (12));

} else {
var statearr_29832_32195 = state_29791__$1;
(statearr_29832_32195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_29833 = [null,null,null,null,null,null,null,null,null];
(statearr_29833[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_29833[(1)] = (1));

return statearr_29833;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_29791){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29791);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29834){var ex__28774__auto__ = e29834;
var statearr_29835_32203 = state_29791;
(statearr_29835_32203[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29791[(4)]))){
var statearr_29836_32205 = state_29791;
(statearr_29836_32205[(1)] = cljs.core.first((state_29791[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32210 = state_29791;
state_29791 = G__32210;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_29791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_29791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29837 = f__29016__auto__();
(statearr_29837[(6)] = c__29014__auto___32170);

return statearr_29837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29866){
var state_val_29867 = (state_29866[(1)]);
if((state_val_29867 === (7))){
var inst_29862 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29868_32217 = state_29866__$1;
(statearr_29868_32217[(2)] = inst_29862);

(statearr_29868_32217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (1))){
var inst_29844 = init;
var inst_29845 = inst_29844;
var state_29866__$1 = (function (){var statearr_29873 = state_29866;
(statearr_29873[(7)] = inst_29845);

return statearr_29873;
})();
var statearr_29874_32222 = state_29866__$1;
(statearr_29874_32222[(2)] = null);

(statearr_29874_32222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (4))){
var inst_29849 = (state_29866[(8)]);
var inst_29849__$1 = (state_29866[(2)]);
var inst_29850 = (inst_29849__$1 == null);
var state_29866__$1 = (function (){var statearr_29877 = state_29866;
(statearr_29877[(8)] = inst_29849__$1);

return statearr_29877;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29878_32225 = state_29866__$1;
(statearr_29878_32225[(1)] = (5));

} else {
var statearr_29879_32226 = state_29866__$1;
(statearr_29879_32226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (6))){
var inst_29845 = (state_29866[(7)]);
var inst_29849 = (state_29866[(8)]);
var inst_29853 = (state_29866[(9)]);
var inst_29853__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29845,inst_29849) : f.call(null,inst_29845,inst_29849));
var inst_29854 = cljs.core.reduced_QMARK_(inst_29853__$1);
var state_29866__$1 = (function (){var statearr_29882 = state_29866;
(statearr_29882[(9)] = inst_29853__$1);

return statearr_29882;
})();
if(inst_29854){
var statearr_29883_32238 = state_29866__$1;
(statearr_29883_32238[(1)] = (8));

} else {
var statearr_29884_32240 = state_29866__$1;
(statearr_29884_32240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (3))){
var inst_29864 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29866__$1,inst_29864);
} else {
if((state_val_29867 === (2))){
var state_29866__$1 = state_29866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29866__$1,(4),ch);
} else {
if((state_val_29867 === (9))){
var inst_29853 = (state_29866[(9)]);
var inst_29845 = inst_29853;
var state_29866__$1 = (function (){var statearr_29886 = state_29866;
(statearr_29886[(7)] = inst_29845);

return statearr_29886;
})();
var statearr_29890_32243 = state_29866__$1;
(statearr_29890_32243[(2)] = null);

(statearr_29890_32243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (5))){
var inst_29845 = (state_29866[(7)]);
var state_29866__$1 = state_29866;
var statearr_29891_32248 = state_29866__$1;
(statearr_29891_32248[(2)] = inst_29845);

(statearr_29891_32248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (10))){
var inst_29860 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29892_32249 = state_29866__$1;
(statearr_29892_32249[(2)] = inst_29860);

(statearr_29892_32249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (8))){
var inst_29853 = (state_29866[(9)]);
var inst_29856 = cljs.core.deref(inst_29853);
var state_29866__$1 = state_29866;
var statearr_29893_32253 = state_29866__$1;
(statearr_29893_32253[(2)] = inst_29856);

(statearr_29893_32253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28771__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28771__auto____0 = (function (){
var statearr_29894 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29894[(0)] = cljs$core$async$reduce_$_state_machine__28771__auto__);

(statearr_29894[(1)] = (1));

return statearr_29894;
});
var cljs$core$async$reduce_$_state_machine__28771__auto____1 = (function (state_29866){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29866);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29895){var ex__28774__auto__ = e29895;
var statearr_29896_32257 = state_29866;
(statearr_29896_32257[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29866[(4)]))){
var statearr_29897_32258 = state_29866;
(statearr_29897_32258[(1)] = cljs.core.first((state_29866[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32259 = state_29866;
state_29866 = G__32259;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28771__auto__ = function(state_29866){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28771__auto____1.call(this,state_29866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28771__auto____0;
cljs$core$async$reduce_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28771__auto____1;
return cljs$core$async$reduce_$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29900 = f__29016__auto__();
(statearr_29900[(6)] = c__29014__auto__);

return statearr_29900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));

return c__29014__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29909){
var state_val_29910 = (state_29909[(1)]);
if((state_val_29910 === (1))){
var inst_29904 = cljs.core.async.reduce(f__$1,init,ch);
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29909__$1,(2),inst_29904);
} else {
if((state_val_29910 === (2))){
var inst_29906 = (state_29909[(2)]);
var inst_29907 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29906) : f__$1.call(null,inst_29906));
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29909__$1,inst_29907);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28771__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28771__auto____0 = (function (){
var statearr_29913 = [null,null,null,null,null,null,null];
(statearr_29913[(0)] = cljs$core$async$transduce_$_state_machine__28771__auto__);

(statearr_29913[(1)] = (1));

return statearr_29913;
});
var cljs$core$async$transduce_$_state_machine__28771__auto____1 = (function (state_29909){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29909);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e29915){var ex__28774__auto__ = e29915;
var statearr_29916_32277 = state_29909;
(statearr_29916_32277[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29909[(4)]))){
var statearr_29917_32278 = state_29909;
(statearr_29917_32278[(1)] = cljs.core.first((state_29909[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32279 = state_29909;
state_29909 = G__32279;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28771__auto__ = function(state_29909){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28771__auto____1.call(this,state_29909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28771__auto____0;
cljs$core$async$transduce_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28771__auto____1;
return cljs$core$async$transduce_$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_29918 = f__29016__auto__();
(statearr_29918[(6)] = c__29014__auto__);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));

return c__29014__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29924 = arguments.length;
switch (G__29924) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_29978){
var state_val_29979 = (state_29978[(1)]);
if((state_val_29979 === (7))){
var inst_29958 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29984_32285 = state_29978__$1;
(statearr_29984_32285[(2)] = inst_29958);

(statearr_29984_32285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (1))){
var inst_29944 = cljs.core.seq(coll);
var inst_29946 = inst_29944;
var state_29978__$1 = (function (){var statearr_29985 = state_29978;
(statearr_29985[(7)] = inst_29946);

return statearr_29985;
})();
var statearr_29986_32287 = state_29978__$1;
(statearr_29986_32287[(2)] = null);

(statearr_29986_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (4))){
var inst_29946 = (state_29978[(7)]);
var inst_29956 = cljs.core.first(inst_29946);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29978__$1,(7),ch,inst_29956);
} else {
if((state_val_29979 === (13))){
var inst_29971 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29988_32292 = state_29978__$1;
(statearr_29988_32292[(2)] = inst_29971);

(statearr_29988_32292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (6))){
var inst_29961 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
if(cljs.core.truth_(inst_29961)){
var statearr_29993_32293 = state_29978__$1;
(statearr_29993_32293[(1)] = (8));

} else {
var statearr_29995_32294 = state_29978__$1;
(statearr_29995_32294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (3))){
var inst_29975 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29978__$1,inst_29975);
} else {
if((state_val_29979 === (12))){
var state_29978__$1 = state_29978;
var statearr_29997_32299 = state_29978__$1;
(statearr_29997_32299[(2)] = null);

(statearr_29997_32299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (2))){
var inst_29946 = (state_29978[(7)]);
var state_29978__$1 = state_29978;
if(cljs.core.truth_(inst_29946)){
var statearr_29998_32303 = state_29978__$1;
(statearr_29998_32303[(1)] = (4));

} else {
var statearr_29999_32305 = state_29978__$1;
(statearr_29999_32305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (11))){
var inst_29968 = cljs.core.async.close_BANG_(ch);
var state_29978__$1 = state_29978;
var statearr_30002_32307 = state_29978__$1;
(statearr_30002_32307[(2)] = inst_29968);

(statearr_30002_32307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (9))){
var state_29978__$1 = state_29978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30003_32314 = state_29978__$1;
(statearr_30003_32314[(1)] = (11));

} else {
var statearr_30004_32316 = state_29978__$1;
(statearr_30004_32316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (5))){
var inst_29946 = (state_29978[(7)]);
var state_29978__$1 = state_29978;
var statearr_30006_32319 = state_29978__$1;
(statearr_30006_32319[(2)] = inst_29946);

(statearr_30006_32319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (10))){
var inst_29973 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_30010_32327 = state_29978__$1;
(statearr_30010_32327[(2)] = inst_29973);

(statearr_30010_32327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (8))){
var inst_29946 = (state_29978[(7)]);
var inst_29964 = cljs.core.next(inst_29946);
var inst_29946__$1 = inst_29964;
var state_29978__$1 = (function (){var statearr_30011 = state_29978;
(statearr_30011[(7)] = inst_29946__$1);

return statearr_30011;
})();
var statearr_30012_32334 = state_29978__$1;
(statearr_30012_32334[(2)] = null);

(statearr_30012_32334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_30018 = [null,null,null,null,null,null,null,null];
(statearr_30018[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_30018[(1)] = (1));

return statearr_30018;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_29978){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_29978);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e30025){var ex__28774__auto__ = e30025;
var statearr_30031_32341 = state_29978;
(statearr_30031_32341[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_29978[(4)]))){
var statearr_30033_32344 = state_29978;
(statearr_30033_32344[(1)] = cljs.core.first((state_29978[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_29978;
state_29978 = G__32349;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_29978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_29978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_30039 = f__29016__auto__();
(statearr_30039[(6)] = c__29014__auto__);

return statearr_30039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));

return c__29014__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30067 = arguments.length;
switch (G__30067) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32375 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32375(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32386 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32386(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32396 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32396(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32400 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32400(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30129 = (function (ch,cs,meta30130){
this.ch = ch;
this.cs = cs;
this.meta30130 = meta30130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30131,meta30130__$1){
var self__ = this;
var _30131__$1 = this;
return (new cljs.core.async.t_cljs$core$async30129(self__.ch,self__.cs,meta30130__$1));
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30131){
var self__ = this;
var _30131__$1 = this;
return self__.meta30130;
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30130","meta30130",1434330832,null)], null);
}));

(cljs.core.async.t_cljs$core$async30129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30129");

(cljs.core.async.t_cljs$core$async30129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30129.
 */
cljs.core.async.__GT_t_cljs$core$async30129 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30129(ch__$1,cs__$1,meta30130){
return (new cljs.core.async.t_cljs$core$async30129(ch__$1,cs__$1,meta30130));
});

}

return (new cljs.core.async.t_cljs$core$async30129(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29014__auto___32448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_30271){
var state_val_30272 = (state_30271[(1)]);
if((state_val_30272 === (7))){
var inst_30267 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30273_32455 = state_30271__$1;
(statearr_30273_32455[(2)] = inst_30267);

(statearr_30273_32455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (20))){
var inst_30168 = (state_30271[(7)]);
var inst_30184 = cljs.core.first(inst_30168);
var inst_30185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30184,(0),null);
var inst_30186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30184,(1),null);
var state_30271__$1 = (function (){var statearr_30274 = state_30271;
(statearr_30274[(8)] = inst_30185);

return statearr_30274;
})();
if(cljs.core.truth_(inst_30186)){
var statearr_30275_32463 = state_30271__$1;
(statearr_30275_32463[(1)] = (22));

} else {
var statearr_30276_32465 = state_30271__$1;
(statearr_30276_32465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (27))){
var inst_30214 = (state_30271[(9)]);
var inst_30221 = (state_30271[(10)]);
var inst_30216 = (state_30271[(11)]);
var inst_30135 = (state_30271[(12)]);
var inst_30221__$1 = cljs.core._nth(inst_30214,inst_30216);
var inst_30222 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30221__$1,inst_30135,done);
var state_30271__$1 = (function (){var statearr_30280 = state_30271;
(statearr_30280[(10)] = inst_30221__$1);

return statearr_30280;
})();
if(cljs.core.truth_(inst_30222)){
var statearr_30282_32470 = state_30271__$1;
(statearr_30282_32470[(1)] = (30));

} else {
var statearr_30283_32471 = state_30271__$1;
(statearr_30283_32471[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (1))){
var state_30271__$1 = state_30271;
var statearr_30284_32472 = state_30271__$1;
(statearr_30284_32472[(2)] = null);

(statearr_30284_32472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (24))){
var inst_30168 = (state_30271[(7)]);
var inst_30191 = (state_30271[(2)]);
var inst_30192 = cljs.core.next(inst_30168);
var inst_30144 = inst_30192;
var inst_30145 = null;
var inst_30146 = (0);
var inst_30147 = (0);
var state_30271__$1 = (function (){var statearr_30287 = state_30271;
(statearr_30287[(13)] = inst_30146);

(statearr_30287[(14)] = inst_30191);

(statearr_30287[(15)] = inst_30147);

(statearr_30287[(16)] = inst_30145);

(statearr_30287[(17)] = inst_30144);

return statearr_30287;
})();
var statearr_30288_32479 = state_30271__$1;
(statearr_30288_32479[(2)] = null);

(statearr_30288_32479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (39))){
var state_30271__$1 = state_30271;
var statearr_30295_32488 = state_30271__$1;
(statearr_30295_32488[(2)] = null);

(statearr_30295_32488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (4))){
var inst_30135 = (state_30271[(12)]);
var inst_30135__$1 = (state_30271[(2)]);
var inst_30136 = (inst_30135__$1 == null);
var state_30271__$1 = (function (){var statearr_30296 = state_30271;
(statearr_30296[(12)] = inst_30135__$1);

return statearr_30296;
})();
if(cljs.core.truth_(inst_30136)){
var statearr_30297_32506 = state_30271__$1;
(statearr_30297_32506[(1)] = (5));

} else {
var statearr_30298_32508 = state_30271__$1;
(statearr_30298_32508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (15))){
var inst_30146 = (state_30271[(13)]);
var inst_30147 = (state_30271[(15)]);
var inst_30145 = (state_30271[(16)]);
var inst_30144 = (state_30271[(17)]);
var inst_30164 = (state_30271[(2)]);
var inst_30165 = (inst_30147 + (1));
var tmp30292 = inst_30146;
var tmp30293 = inst_30145;
var tmp30294 = inst_30144;
var inst_30144__$1 = tmp30294;
var inst_30145__$1 = tmp30293;
var inst_30146__$1 = tmp30292;
var inst_30147__$1 = inst_30165;
var state_30271__$1 = (function (){var statearr_30300 = state_30271;
(statearr_30300[(13)] = inst_30146__$1);

(statearr_30300[(18)] = inst_30164);

(statearr_30300[(15)] = inst_30147__$1);

(statearr_30300[(16)] = inst_30145__$1);

(statearr_30300[(17)] = inst_30144__$1);

return statearr_30300;
})();
var statearr_30301_32515 = state_30271__$1;
(statearr_30301_32515[(2)] = null);

(statearr_30301_32515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (21))){
var inst_30195 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30306_32520 = state_30271__$1;
(statearr_30306_32520[(2)] = inst_30195);

(statearr_30306_32520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (31))){
var inst_30221 = (state_30271[(10)]);
var inst_30225 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30221);
var state_30271__$1 = state_30271;
var statearr_30307_32525 = state_30271__$1;
(statearr_30307_32525[(2)] = inst_30225);

(statearr_30307_32525[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (32))){
var inst_30214 = (state_30271[(9)]);
var inst_30215 = (state_30271[(19)]);
var inst_30216 = (state_30271[(11)]);
var inst_30213 = (state_30271[(20)]);
var inst_30227 = (state_30271[(2)]);
var inst_30228 = (inst_30216 + (1));
var tmp30303 = inst_30214;
var tmp30304 = inst_30215;
var tmp30305 = inst_30213;
var inst_30213__$1 = tmp30305;
var inst_30214__$1 = tmp30303;
var inst_30215__$1 = tmp30304;
var inst_30216__$1 = inst_30228;
var state_30271__$1 = (function (){var statearr_30308 = state_30271;
(statearr_30308[(9)] = inst_30214__$1);

(statearr_30308[(21)] = inst_30227);

(statearr_30308[(19)] = inst_30215__$1);

(statearr_30308[(11)] = inst_30216__$1);

(statearr_30308[(20)] = inst_30213__$1);

return statearr_30308;
})();
var statearr_30309_32531 = state_30271__$1;
(statearr_30309_32531[(2)] = null);

(statearr_30309_32531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (40))){
var inst_30240 = (state_30271[(22)]);
var inst_30244 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30240);
var state_30271__$1 = state_30271;
var statearr_30313_32543 = state_30271__$1;
(statearr_30313_32543[(2)] = inst_30244);

(statearr_30313_32543[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (33))){
var inst_30231 = (state_30271[(23)]);
var inst_30233 = cljs.core.chunked_seq_QMARK_(inst_30231);
var state_30271__$1 = state_30271;
if(inst_30233){
var statearr_30316_32546 = state_30271__$1;
(statearr_30316_32546[(1)] = (36));

} else {
var statearr_30317_32547 = state_30271__$1;
(statearr_30317_32547[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (13))){
var inst_30158 = (state_30271[(24)]);
var inst_30161 = cljs.core.async.close_BANG_(inst_30158);
var state_30271__$1 = state_30271;
var statearr_30318_32549 = state_30271__$1;
(statearr_30318_32549[(2)] = inst_30161);

(statearr_30318_32549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (22))){
var inst_30185 = (state_30271[(8)]);
var inst_30188 = cljs.core.async.close_BANG_(inst_30185);
var state_30271__$1 = state_30271;
var statearr_30319_32552 = state_30271__$1;
(statearr_30319_32552[(2)] = inst_30188);

(statearr_30319_32552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (36))){
var inst_30231 = (state_30271[(23)]);
var inst_30235 = cljs.core.chunk_first(inst_30231);
var inst_30236 = cljs.core.chunk_rest(inst_30231);
var inst_30237 = cljs.core.count(inst_30235);
var inst_30213 = inst_30236;
var inst_30214 = inst_30235;
var inst_30215 = inst_30237;
var inst_30216 = (0);
var state_30271__$1 = (function (){var statearr_30332 = state_30271;
(statearr_30332[(9)] = inst_30214);

(statearr_30332[(19)] = inst_30215);

(statearr_30332[(11)] = inst_30216);

(statearr_30332[(20)] = inst_30213);

return statearr_30332;
})();
var statearr_30333_32562 = state_30271__$1;
(statearr_30333_32562[(2)] = null);

(statearr_30333_32562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (41))){
var inst_30231 = (state_30271[(23)]);
var inst_30246 = (state_30271[(2)]);
var inst_30247 = cljs.core.next(inst_30231);
var inst_30213 = inst_30247;
var inst_30214 = null;
var inst_30215 = (0);
var inst_30216 = (0);
var state_30271__$1 = (function (){var statearr_30334 = state_30271;
(statearr_30334[(9)] = inst_30214);

(statearr_30334[(19)] = inst_30215);

(statearr_30334[(11)] = inst_30216);

(statearr_30334[(25)] = inst_30246);

(statearr_30334[(20)] = inst_30213);

return statearr_30334;
})();
var statearr_30338_32564 = state_30271__$1;
(statearr_30338_32564[(2)] = null);

(statearr_30338_32564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (43))){
var state_30271__$1 = state_30271;
var statearr_30339_32574 = state_30271__$1;
(statearr_30339_32574[(2)] = null);

(statearr_30339_32574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (29))){
var inst_30255 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30340_32576 = state_30271__$1;
(statearr_30340_32576[(2)] = inst_30255);

(statearr_30340_32576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (44))){
var inst_30264 = (state_30271[(2)]);
var state_30271__$1 = (function (){var statearr_30343 = state_30271;
(statearr_30343[(26)] = inst_30264);

return statearr_30343;
})();
var statearr_30344_32580 = state_30271__$1;
(statearr_30344_32580[(2)] = null);

(statearr_30344_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (6))){
var inst_30205 = (state_30271[(27)]);
var inst_30204 = cljs.core.deref(cs);
var inst_30205__$1 = cljs.core.keys(inst_30204);
var inst_30206 = cljs.core.count(inst_30205__$1);
var inst_30207 = cljs.core.reset_BANG_(dctr,inst_30206);
var inst_30212 = cljs.core.seq(inst_30205__$1);
var inst_30213 = inst_30212;
var inst_30214 = null;
var inst_30215 = (0);
var inst_30216 = (0);
var state_30271__$1 = (function (){var statearr_30348 = state_30271;
(statearr_30348[(9)] = inst_30214);

(statearr_30348[(19)] = inst_30215);

(statearr_30348[(27)] = inst_30205__$1);

(statearr_30348[(28)] = inst_30207);

(statearr_30348[(11)] = inst_30216);

(statearr_30348[(20)] = inst_30213);

return statearr_30348;
})();
var statearr_30351_32586 = state_30271__$1;
(statearr_30351_32586[(2)] = null);

(statearr_30351_32586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (28))){
var inst_30231 = (state_30271[(23)]);
var inst_30213 = (state_30271[(20)]);
var inst_30231__$1 = cljs.core.seq(inst_30213);
var state_30271__$1 = (function (){var statearr_30352 = state_30271;
(statearr_30352[(23)] = inst_30231__$1);

return statearr_30352;
})();
if(inst_30231__$1){
var statearr_30353_32588 = state_30271__$1;
(statearr_30353_32588[(1)] = (33));

} else {
var statearr_30356_32589 = state_30271__$1;
(statearr_30356_32589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (25))){
var inst_30215 = (state_30271[(19)]);
var inst_30216 = (state_30271[(11)]);
var inst_30218 = (inst_30216 < inst_30215);
var inst_30219 = inst_30218;
var state_30271__$1 = state_30271;
if(cljs.core.truth_(inst_30219)){
var statearr_30357_32591 = state_30271__$1;
(statearr_30357_32591[(1)] = (27));

} else {
var statearr_30358_32592 = state_30271__$1;
(statearr_30358_32592[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (34))){
var state_30271__$1 = state_30271;
var statearr_30364_32593 = state_30271__$1;
(statearr_30364_32593[(2)] = null);

(statearr_30364_32593[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (17))){
var state_30271__$1 = state_30271;
var statearr_30365_32596 = state_30271__$1;
(statearr_30365_32596[(2)] = null);

(statearr_30365_32596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (3))){
var inst_30269 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30271__$1,inst_30269);
} else {
if((state_val_30272 === (12))){
var inst_30200 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30367_32598 = state_30271__$1;
(statearr_30367_32598[(2)] = inst_30200);

(statearr_30367_32598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (2))){
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30271__$1,(4),ch);
} else {
if((state_val_30272 === (23))){
var state_30271__$1 = state_30271;
var statearr_30368_32604 = state_30271__$1;
(statearr_30368_32604[(2)] = null);

(statearr_30368_32604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (35))){
var inst_30253 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30377_32605 = state_30271__$1;
(statearr_30377_32605[(2)] = inst_30253);

(statearr_30377_32605[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (19))){
var inst_30168 = (state_30271[(7)]);
var inst_30174 = cljs.core.chunk_first(inst_30168);
var inst_30175 = cljs.core.chunk_rest(inst_30168);
var inst_30176 = cljs.core.count(inst_30174);
var inst_30144 = inst_30175;
var inst_30145 = inst_30174;
var inst_30146 = inst_30176;
var inst_30147 = (0);
var state_30271__$1 = (function (){var statearr_30379 = state_30271;
(statearr_30379[(13)] = inst_30146);

(statearr_30379[(15)] = inst_30147);

(statearr_30379[(16)] = inst_30145);

(statearr_30379[(17)] = inst_30144);

return statearr_30379;
})();
var statearr_30381_32610 = state_30271__$1;
(statearr_30381_32610[(2)] = null);

(statearr_30381_32610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (11))){
var inst_30144 = (state_30271[(17)]);
var inst_30168 = (state_30271[(7)]);
var inst_30168__$1 = cljs.core.seq(inst_30144);
var state_30271__$1 = (function (){var statearr_30385 = state_30271;
(statearr_30385[(7)] = inst_30168__$1);

return statearr_30385;
})();
if(inst_30168__$1){
var statearr_30386_32616 = state_30271__$1;
(statearr_30386_32616[(1)] = (16));

} else {
var statearr_30387_32620 = state_30271__$1;
(statearr_30387_32620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (9))){
var inst_30202 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30389_32621 = state_30271__$1;
(statearr_30389_32621[(2)] = inst_30202);

(statearr_30389_32621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (5))){
var inst_30142 = cljs.core.deref(cs);
var inst_30143 = cljs.core.seq(inst_30142);
var inst_30144 = inst_30143;
var inst_30145 = null;
var inst_30146 = (0);
var inst_30147 = (0);
var state_30271__$1 = (function (){var statearr_30395 = state_30271;
(statearr_30395[(13)] = inst_30146);

(statearr_30395[(15)] = inst_30147);

(statearr_30395[(16)] = inst_30145);

(statearr_30395[(17)] = inst_30144);

return statearr_30395;
})();
var statearr_30398_32622 = state_30271__$1;
(statearr_30398_32622[(2)] = null);

(statearr_30398_32622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (14))){
var state_30271__$1 = state_30271;
var statearr_30401_32623 = state_30271__$1;
(statearr_30401_32623[(2)] = null);

(statearr_30401_32623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (45))){
var inst_30261 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30406_32624 = state_30271__$1;
(statearr_30406_32624[(2)] = inst_30261);

(statearr_30406_32624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (26))){
var inst_30205 = (state_30271[(27)]);
var inst_30257 = (state_30271[(2)]);
var inst_30258 = cljs.core.seq(inst_30205);
var state_30271__$1 = (function (){var statearr_30408 = state_30271;
(statearr_30408[(29)] = inst_30257);

return statearr_30408;
})();
if(inst_30258){
var statearr_30410_32627 = state_30271__$1;
(statearr_30410_32627[(1)] = (42));

} else {
var statearr_30411_32628 = state_30271__$1;
(statearr_30411_32628[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (16))){
var inst_30168 = (state_30271[(7)]);
var inst_30172 = cljs.core.chunked_seq_QMARK_(inst_30168);
var state_30271__$1 = state_30271;
if(inst_30172){
var statearr_30412_32630 = state_30271__$1;
(statearr_30412_32630[(1)] = (19));

} else {
var statearr_30414_32631 = state_30271__$1;
(statearr_30414_32631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (38))){
var inst_30250 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30417_32633 = state_30271__$1;
(statearr_30417_32633[(2)] = inst_30250);

(statearr_30417_32633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (30))){
var state_30271__$1 = state_30271;
var statearr_30418_32636 = state_30271__$1;
(statearr_30418_32636[(2)] = null);

(statearr_30418_32636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (10))){
var inst_30147 = (state_30271[(15)]);
var inst_30145 = (state_30271[(16)]);
var inst_30157 = cljs.core._nth(inst_30145,inst_30147);
var inst_30158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30157,(0),null);
var inst_30159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30157,(1),null);
var state_30271__$1 = (function (){var statearr_30422 = state_30271;
(statearr_30422[(24)] = inst_30158);

return statearr_30422;
})();
if(cljs.core.truth_(inst_30159)){
var statearr_30423_32637 = state_30271__$1;
(statearr_30423_32637[(1)] = (13));

} else {
var statearr_30424_32638 = state_30271__$1;
(statearr_30424_32638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (18))){
var inst_30198 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30427_32639 = state_30271__$1;
(statearr_30427_32639[(2)] = inst_30198);

(statearr_30427_32639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (42))){
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30271__$1,(45),dchan);
} else {
if((state_val_30272 === (37))){
var inst_30240 = (state_30271[(22)]);
var inst_30231 = (state_30271[(23)]);
var inst_30135 = (state_30271[(12)]);
var inst_30240__$1 = cljs.core.first(inst_30231);
var inst_30241 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30240__$1,inst_30135,done);
var state_30271__$1 = (function (){var statearr_30429 = state_30271;
(statearr_30429[(22)] = inst_30240__$1);

return statearr_30429;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30430_32645 = state_30271__$1;
(statearr_30430_32645[(1)] = (39));

} else {
var statearr_30431_32646 = state_30271__$1;
(statearr_30431_32646[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (8))){
var inst_30146 = (state_30271[(13)]);
var inst_30147 = (state_30271[(15)]);
var inst_30149 = (inst_30147 < inst_30146);
var inst_30150 = inst_30149;
var state_30271__$1 = state_30271;
if(cljs.core.truth_(inst_30150)){
var statearr_30435_32647 = state_30271__$1;
(statearr_30435_32647[(1)] = (10));

} else {
var statearr_30436_32649 = state_30271__$1;
(statearr_30436_32649[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28771__auto__ = null;
var cljs$core$async$mult_$_state_machine__28771__auto____0 = (function (){
var statearr_30441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30441[(0)] = cljs$core$async$mult_$_state_machine__28771__auto__);

(statearr_30441[(1)] = (1));

return statearr_30441;
});
var cljs$core$async$mult_$_state_machine__28771__auto____1 = (function (state_30271){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_30271);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e30442){var ex__28774__auto__ = e30442;
var statearr_30443_32653 = state_30271;
(statearr_30443_32653[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_30271[(4)]))){
var statearr_30444_32654 = state_30271;
(statearr_30444_32654[(1)] = cljs.core.first((state_30271[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_30271;
state_30271 = G__32655;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28771__auto__ = function(state_30271){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28771__auto____1.call(this,state_30271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28771__auto____0;
cljs$core$async$mult_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28771__auto____1;
return cljs$core$async$mult_$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_30445 = f__29016__auto__();
(statearr_30445[(6)] = c__29014__auto___32448);

return statearr_30445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30447 = arguments.length;
switch (G__30447) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32662 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32662(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32664 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32664(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32668 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32668(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32670 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32670(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32673 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32673(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32676 = arguments.length;
var i__4737__auto___32677 = (0);
while(true){
if((i__4737__auto___32677 < len__4736__auto___32676)){
args__4742__auto__.push((arguments[i__4737__auto___32677]));

var G__32678 = (i__4737__auto___32677 + (1));
i__4737__auto___32677 = G__32678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30498){
var map__30499 = p__30498;
var map__30499__$1 = (((((!((map__30499 == null))))?(((((map__30499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30499):map__30499);
var opts = map__30499__$1;
var statearr_30501_32681 = state;
(statearr_30501_32681[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30502_32682 = state;
(statearr_30502_32682[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30503_32683 = state;
(statearr_30503_32683[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30493){
var G__30494 = cljs.core.first(seq30493);
var seq30493__$1 = cljs.core.next(seq30493);
var G__30495 = cljs.core.first(seq30493__$1);
var seq30493__$2 = cljs.core.next(seq30493__$1);
var G__30496 = cljs.core.first(seq30493__$2);
var seq30493__$3 = cljs.core.next(seq30493__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30494,G__30495,G__30496,seq30493__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30511 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30512){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30512 = meta30512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30513,meta30512__$1){
var self__ = this;
var _30513__$1 = this;
return (new cljs.core.async.t_cljs$core$async30511(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30512__$1));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30513){
var self__ = this;
var _30513__$1 = this;
return self__.meta30512;
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30512","meta30512",2090621203,null)], null);
}));

(cljs.core.async.t_cljs$core$async30511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30511");

(cljs.core.async.t_cljs$core$async30511.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30511.
 */
cljs.core.async.__GT_t_cljs$core$async30511 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30511(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30512){
return (new cljs.core.async.t_cljs$core$async30511(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30512));
});

}

return (new cljs.core.async.t_cljs$core$async30511(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29014__auto___32727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_30624){
var state_val_30625 = (state_30624[(1)]);
if((state_val_30625 === (7))){
var inst_30537 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30626_32733 = state_30624__$1;
(statearr_30626_32733[(2)] = inst_30537);

(statearr_30626_32733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (20))){
var inst_30549 = (state_30624[(7)]);
var state_30624__$1 = state_30624;
var statearr_30627_32735 = state_30624__$1;
(statearr_30627_32735[(2)] = inst_30549);

(statearr_30627_32735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (27))){
var state_30624__$1 = state_30624;
var statearr_30629_32740 = state_30624__$1;
(statearr_30629_32740[(2)] = null);

(statearr_30629_32740[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (1))){
var inst_30524 = (state_30624[(8)]);
var inst_30524__$1 = calc_state();
var inst_30526 = (inst_30524__$1 == null);
var inst_30527 = cljs.core.not(inst_30526);
var state_30624__$1 = (function (){var statearr_30630 = state_30624;
(statearr_30630[(8)] = inst_30524__$1);

return statearr_30630;
})();
if(inst_30527){
var statearr_30631_32742 = state_30624__$1;
(statearr_30631_32742[(1)] = (2));

} else {
var statearr_30632_32743 = state_30624__$1;
(statearr_30632_32743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (24))){
var inst_30598 = (state_30624[(9)]);
var inst_30584 = (state_30624[(10)]);
var inst_30573 = (state_30624[(11)]);
var inst_30598__$1 = (inst_30573.cljs$core$IFn$_invoke$arity$1 ? inst_30573.cljs$core$IFn$_invoke$arity$1(inst_30584) : inst_30573.call(null,inst_30584));
var state_30624__$1 = (function (){var statearr_30633 = state_30624;
(statearr_30633[(9)] = inst_30598__$1);

return statearr_30633;
})();
if(cljs.core.truth_(inst_30598__$1)){
var statearr_30634_32749 = state_30624__$1;
(statearr_30634_32749[(1)] = (29));

} else {
var statearr_30635_32753 = state_30624__$1;
(statearr_30635_32753[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (4))){
var inst_30540 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30540)){
var statearr_30636_32780 = state_30624__$1;
(statearr_30636_32780[(1)] = (8));

} else {
var statearr_30639_32781 = state_30624__$1;
(statearr_30639_32781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (15))){
var inst_30567 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30567)){
var statearr_30640_32782 = state_30624__$1;
(statearr_30640_32782[(1)] = (19));

} else {
var statearr_30641_32783 = state_30624__$1;
(statearr_30641_32783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (21))){
var inst_30572 = (state_30624[(12)]);
var inst_30572__$1 = (state_30624[(2)]);
var inst_30573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30572__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30572__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30572__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30624__$1 = (function (){var statearr_30645 = state_30624;
(statearr_30645[(13)] = inst_30574);

(statearr_30645[(11)] = inst_30573);

(statearr_30645[(12)] = inst_30572__$1);

return statearr_30645;
})();
return cljs.core.async.ioc_alts_BANG_(state_30624__$1,(22),inst_30575);
} else {
if((state_val_30625 === (31))){
var inst_30606 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30606)){
var statearr_30647_32786 = state_30624__$1;
(statearr_30647_32786[(1)] = (32));

} else {
var statearr_30648_32787 = state_30624__$1;
(statearr_30648_32787[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (32))){
var inst_30583 = (state_30624[(14)]);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30624__$1,(35),out,inst_30583);
} else {
if((state_val_30625 === (33))){
var inst_30572 = (state_30624[(12)]);
var inst_30549 = inst_30572;
var state_30624__$1 = (function (){var statearr_30649 = state_30624;
(statearr_30649[(7)] = inst_30549);

return statearr_30649;
})();
var statearr_30650_32791 = state_30624__$1;
(statearr_30650_32791[(2)] = null);

(statearr_30650_32791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (13))){
var inst_30549 = (state_30624[(7)]);
var inst_30556 = inst_30549.cljs$lang$protocol_mask$partition0$;
var inst_30557 = (inst_30556 & (64));
var inst_30558 = inst_30549.cljs$core$ISeq$;
var inst_30559 = (cljs.core.PROTOCOL_SENTINEL === inst_30558);
var inst_30560 = ((inst_30557) || (inst_30559));
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30560)){
var statearr_30651_32815 = state_30624__$1;
(statearr_30651_32815[(1)] = (16));

} else {
var statearr_30652_32819 = state_30624__$1;
(statearr_30652_32819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (22))){
var inst_30583 = (state_30624[(14)]);
var inst_30584 = (state_30624[(10)]);
var inst_30582 = (state_30624[(2)]);
var inst_30583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30582,(0),null);
var inst_30584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30582,(1),null);
var inst_30585 = (inst_30583__$1 == null);
var inst_30586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30584__$1,change);
var inst_30587 = ((inst_30585) || (inst_30586));
var state_30624__$1 = (function (){var statearr_30653 = state_30624;
(statearr_30653[(14)] = inst_30583__$1);

(statearr_30653[(10)] = inst_30584__$1);

return statearr_30653;
})();
if(cljs.core.truth_(inst_30587)){
var statearr_30654_32834 = state_30624__$1;
(statearr_30654_32834[(1)] = (23));

} else {
var statearr_30655_32835 = state_30624__$1;
(statearr_30655_32835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (36))){
var inst_30572 = (state_30624[(12)]);
var inst_30549 = inst_30572;
var state_30624__$1 = (function (){var statearr_30656 = state_30624;
(statearr_30656[(7)] = inst_30549);

return statearr_30656;
})();
var statearr_30657_32843 = state_30624__$1;
(statearr_30657_32843[(2)] = null);

(statearr_30657_32843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (29))){
var inst_30598 = (state_30624[(9)]);
var state_30624__$1 = state_30624;
var statearr_30660_32847 = state_30624__$1;
(statearr_30660_32847[(2)] = inst_30598);

(statearr_30660_32847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (6))){
var state_30624__$1 = state_30624;
var statearr_30661_32849 = state_30624__$1;
(statearr_30661_32849[(2)] = false);

(statearr_30661_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (28))){
var inst_30594 = (state_30624[(2)]);
var inst_30595 = calc_state();
var inst_30549 = inst_30595;
var state_30624__$1 = (function (){var statearr_30663 = state_30624;
(statearr_30663[(15)] = inst_30594);

(statearr_30663[(7)] = inst_30549);

return statearr_30663;
})();
var statearr_30664_32854 = state_30624__$1;
(statearr_30664_32854[(2)] = null);

(statearr_30664_32854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (25))){
var inst_30620 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30665_32878 = state_30624__$1;
(statearr_30665_32878[(2)] = inst_30620);

(statearr_30665_32878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (34))){
var inst_30618 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30666_32879 = state_30624__$1;
(statearr_30666_32879[(2)] = inst_30618);

(statearr_30666_32879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (17))){
var state_30624__$1 = state_30624;
var statearr_30667_32880 = state_30624__$1;
(statearr_30667_32880[(2)] = false);

(statearr_30667_32880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (3))){
var state_30624__$1 = state_30624;
var statearr_30669_32881 = state_30624__$1;
(statearr_30669_32881[(2)] = false);

(statearr_30669_32881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (12))){
var inst_30622 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30624__$1,inst_30622);
} else {
if((state_val_30625 === (2))){
var inst_30524 = (state_30624[(8)]);
var inst_30529 = inst_30524.cljs$lang$protocol_mask$partition0$;
var inst_30530 = (inst_30529 & (64));
var inst_30531 = inst_30524.cljs$core$ISeq$;
var inst_30532 = (cljs.core.PROTOCOL_SENTINEL === inst_30531);
var inst_30533 = ((inst_30530) || (inst_30532));
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30533)){
var statearr_30670_32882 = state_30624__$1;
(statearr_30670_32882[(1)] = (5));

} else {
var statearr_30671_32883 = state_30624__$1;
(statearr_30671_32883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (23))){
var inst_30583 = (state_30624[(14)]);
var inst_30589 = (inst_30583 == null);
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30589)){
var statearr_30672_32884 = state_30624__$1;
(statearr_30672_32884[(1)] = (26));

} else {
var statearr_30673_32885 = state_30624__$1;
(statearr_30673_32885[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (35))){
var inst_30609 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30609)){
var statearr_30679_32887 = state_30624__$1;
(statearr_30679_32887[(1)] = (36));

} else {
var statearr_30680_32888 = state_30624__$1;
(statearr_30680_32888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (19))){
var inst_30549 = (state_30624[(7)]);
var inst_30569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30549);
var state_30624__$1 = state_30624;
var statearr_30685_32893 = state_30624__$1;
(statearr_30685_32893[(2)] = inst_30569);

(statearr_30685_32893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (11))){
var inst_30549 = (state_30624[(7)]);
var inst_30553 = (inst_30549 == null);
var inst_30554 = cljs.core.not(inst_30553);
var state_30624__$1 = state_30624;
if(inst_30554){
var statearr_30691_32894 = state_30624__$1;
(statearr_30691_32894[(1)] = (13));

} else {
var statearr_30692_32895 = state_30624__$1;
(statearr_30692_32895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (9))){
var inst_30524 = (state_30624[(8)]);
var state_30624__$1 = state_30624;
var statearr_30693_32898 = state_30624__$1;
(statearr_30693_32898[(2)] = inst_30524);

(statearr_30693_32898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (5))){
var state_30624__$1 = state_30624;
var statearr_30694_32899 = state_30624__$1;
(statearr_30694_32899[(2)] = true);

(statearr_30694_32899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (14))){
var state_30624__$1 = state_30624;
var statearr_30695_32900 = state_30624__$1;
(statearr_30695_32900[(2)] = false);

(statearr_30695_32900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (26))){
var inst_30584 = (state_30624[(10)]);
var inst_30591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30584);
var state_30624__$1 = state_30624;
var statearr_30696_32902 = state_30624__$1;
(statearr_30696_32902[(2)] = inst_30591);

(statearr_30696_32902[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (16))){
var state_30624__$1 = state_30624;
var statearr_30697_32903 = state_30624__$1;
(statearr_30697_32903[(2)] = true);

(statearr_30697_32903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (38))){
var inst_30614 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30698_32905 = state_30624__$1;
(statearr_30698_32905[(2)] = inst_30614);

(statearr_30698_32905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (30))){
var inst_30574 = (state_30624[(13)]);
var inst_30584 = (state_30624[(10)]);
var inst_30573 = (state_30624[(11)]);
var inst_30601 = cljs.core.empty_QMARK_(inst_30573);
var inst_30602 = (inst_30574.cljs$core$IFn$_invoke$arity$1 ? inst_30574.cljs$core$IFn$_invoke$arity$1(inst_30584) : inst_30574.call(null,inst_30584));
var inst_30603 = cljs.core.not(inst_30602);
var inst_30604 = ((inst_30601) && (inst_30603));
var state_30624__$1 = state_30624;
var statearr_30699_32914 = state_30624__$1;
(statearr_30699_32914[(2)] = inst_30604);

(statearr_30699_32914[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (10))){
var inst_30524 = (state_30624[(8)]);
var inst_30545 = (state_30624[(2)]);
var inst_30546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30545,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30545,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30545,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30549 = inst_30524;
var state_30624__$1 = (function (){var statearr_30700 = state_30624;
(statearr_30700[(16)] = inst_30547);

(statearr_30700[(17)] = inst_30546);

(statearr_30700[(18)] = inst_30548);

(statearr_30700[(7)] = inst_30549);

return statearr_30700;
})();
var statearr_30701_32922 = state_30624__$1;
(statearr_30701_32922[(2)] = null);

(statearr_30701_32922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (18))){
var inst_30564 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30703_32923 = state_30624__$1;
(statearr_30703_32923[(2)] = inst_30564);

(statearr_30703_32923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (37))){
var state_30624__$1 = state_30624;
var statearr_30704_32925 = state_30624__$1;
(statearr_30704_32925[(2)] = null);

(statearr_30704_32925[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (8))){
var inst_30524 = (state_30624[(8)]);
var inst_30542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30524);
var state_30624__$1 = state_30624;
var statearr_30705_32926 = state_30624__$1;
(statearr_30705_32926[(2)] = inst_30542);

(statearr_30705_32926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28771__auto__ = null;
var cljs$core$async$mix_$_state_machine__28771__auto____0 = (function (){
var statearr_30706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30706[(0)] = cljs$core$async$mix_$_state_machine__28771__auto__);

(statearr_30706[(1)] = (1));

return statearr_30706;
});
var cljs$core$async$mix_$_state_machine__28771__auto____1 = (function (state_30624){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_30624);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e30707){var ex__28774__auto__ = e30707;
var statearr_30708_32932 = state_30624;
(statearr_30708_32932[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_30624[(4)]))){
var statearr_30709_32933 = state_30624;
(statearr_30709_32933[(1)] = cljs.core.first((state_30624[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32936 = state_30624;
state_30624 = G__32936;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28771__auto__ = function(state_30624){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28771__auto____1.call(this,state_30624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28771__auto____0;
cljs$core$async$mix_$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28771__auto____1;
return cljs$core$async$mix_$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_30710 = f__29016__auto__();
(statearr_30710[(6)] = c__29014__auto___32727);

return statearr_30710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32947 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32947(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32948 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32948(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32953 = (function() {
var G__32954 = null;
var G__32954__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32954__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32954 = function(p,v){
switch(arguments.length){
case 1:
return G__32954__1.call(this,p);
case 2:
return G__32954__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32954.cljs$core$IFn$_invoke$arity$1 = G__32954__1;
G__32954.cljs$core$IFn$_invoke$arity$2 = G__32954__2;
return G__32954;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30719 = arguments.length;
switch (G__30719) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32953(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32953(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30723 = arguments.length;
switch (G__30723) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30721_SHARP_){
if(cljs.core.truth_((p1__30721_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30721_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30721_SHARP_.call(null,topic)))){
return p1__30721_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30721_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30725 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30726){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30726 = meta30726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30727,meta30726__$1){
var self__ = this;
var _30727__$1 = this;
return (new cljs.core.async.t_cljs$core$async30725(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30726__$1));
}));

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30727){
var self__ = this;
var _30727__$1 = this;
return self__.meta30726;
}));

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30726","meta30726",1053307396,null)], null);
}));

(cljs.core.async.t_cljs$core$async30725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30725");

(cljs.core.async.t_cljs$core$async30725.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30725.
 */
cljs.core.async.__GT_t_cljs$core$async30725 = (function cljs$core$async$__GT_t_cljs$core$async30725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30726){
return (new cljs.core.async.t_cljs$core$async30725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30726));
});

}

return (new cljs.core.async.t_cljs$core$async30725(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29014__auto___33022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_30806){
var state_val_30807 = (state_30806[(1)]);
if((state_val_30807 === (7))){
var inst_30802 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30808_33026 = state_30806__$1;
(statearr_30808_33026[(2)] = inst_30802);

(statearr_30808_33026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (20))){
var state_30806__$1 = state_30806;
var statearr_30809_33030 = state_30806__$1;
(statearr_30809_33030[(2)] = null);

(statearr_30809_33030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (1))){
var state_30806__$1 = state_30806;
var statearr_30810_33031 = state_30806__$1;
(statearr_30810_33031[(2)] = null);

(statearr_30810_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (24))){
var inst_30785 = (state_30806[(7)]);
var inst_30794 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30785);
var state_30806__$1 = state_30806;
var statearr_30811_33032 = state_30806__$1;
(statearr_30811_33032[(2)] = inst_30794);

(statearr_30811_33032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (4))){
var inst_30737 = (state_30806[(8)]);
var inst_30737__$1 = (state_30806[(2)]);
var inst_30738 = (inst_30737__$1 == null);
var state_30806__$1 = (function (){var statearr_30813 = state_30806;
(statearr_30813[(8)] = inst_30737__$1);

return statearr_30813;
})();
if(cljs.core.truth_(inst_30738)){
var statearr_30814_33034 = state_30806__$1;
(statearr_30814_33034[(1)] = (5));

} else {
var statearr_30815_33035 = state_30806__$1;
(statearr_30815_33035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (15))){
var inst_30779 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30816_33036 = state_30806__$1;
(statearr_30816_33036[(2)] = inst_30779);

(statearr_30816_33036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (21))){
var inst_30799 = (state_30806[(2)]);
var state_30806__$1 = (function (){var statearr_30817 = state_30806;
(statearr_30817[(9)] = inst_30799);

return statearr_30817;
})();
var statearr_30818_33037 = state_30806__$1;
(statearr_30818_33037[(2)] = null);

(statearr_30818_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (13))){
var inst_30761 = (state_30806[(10)]);
var inst_30763 = cljs.core.chunked_seq_QMARK_(inst_30761);
var state_30806__$1 = state_30806;
if(inst_30763){
var statearr_30819_33038 = state_30806__$1;
(statearr_30819_33038[(1)] = (16));

} else {
var statearr_30820_33039 = state_30806__$1;
(statearr_30820_33039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (22))){
var inst_30791 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30791)){
var statearr_30821_33044 = state_30806__$1;
(statearr_30821_33044[(1)] = (23));

} else {
var statearr_30822_33045 = state_30806__$1;
(statearr_30822_33045[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (6))){
var inst_30787 = (state_30806[(11)]);
var inst_30737 = (state_30806[(8)]);
var inst_30785 = (state_30806[(7)]);
var inst_30785__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30737) : topic_fn.call(null,inst_30737));
var inst_30786 = cljs.core.deref(mults);
var inst_30787__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30786,inst_30785__$1);
var state_30806__$1 = (function (){var statearr_30823 = state_30806;
(statearr_30823[(11)] = inst_30787__$1);

(statearr_30823[(7)] = inst_30785__$1);

return statearr_30823;
})();
if(cljs.core.truth_(inst_30787__$1)){
var statearr_30827_33052 = state_30806__$1;
(statearr_30827_33052[(1)] = (19));

} else {
var statearr_30828_33053 = state_30806__$1;
(statearr_30828_33053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (25))){
var inst_30796 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30830_33056 = state_30806__$1;
(statearr_30830_33056[(2)] = inst_30796);

(statearr_30830_33056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (17))){
var inst_30761 = (state_30806[(10)]);
var inst_30770 = cljs.core.first(inst_30761);
var inst_30771 = cljs.core.async.muxch_STAR_(inst_30770);
var inst_30772 = cljs.core.async.close_BANG_(inst_30771);
var inst_30773 = cljs.core.next(inst_30761);
var inst_30747 = inst_30773;
var inst_30748 = null;
var inst_30749 = (0);
var inst_30750 = (0);
var state_30806__$1 = (function (){var statearr_30832 = state_30806;
(statearr_30832[(12)] = inst_30772);

(statearr_30832[(13)] = inst_30747);

(statearr_30832[(14)] = inst_30748);

(statearr_30832[(15)] = inst_30750);

(statearr_30832[(16)] = inst_30749);

return statearr_30832;
})();
var statearr_30834_33060 = state_30806__$1;
(statearr_30834_33060[(2)] = null);

(statearr_30834_33060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (3))){
var inst_30804 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30806__$1,inst_30804);
} else {
if((state_val_30807 === (12))){
var inst_30781 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30837_33061 = state_30806__$1;
(statearr_30837_33061[(2)] = inst_30781);

(statearr_30837_33061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (2))){
var state_30806__$1 = state_30806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30806__$1,(4),ch);
} else {
if((state_val_30807 === (23))){
var state_30806__$1 = state_30806;
var statearr_30838_33067 = state_30806__$1;
(statearr_30838_33067[(2)] = null);

(statearr_30838_33067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (19))){
var inst_30787 = (state_30806[(11)]);
var inst_30737 = (state_30806[(8)]);
var inst_30789 = cljs.core.async.muxch_STAR_(inst_30787);
var state_30806__$1 = state_30806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30806__$1,(22),inst_30789,inst_30737);
} else {
if((state_val_30807 === (11))){
var inst_30747 = (state_30806[(13)]);
var inst_30761 = (state_30806[(10)]);
var inst_30761__$1 = cljs.core.seq(inst_30747);
var state_30806__$1 = (function (){var statearr_30842 = state_30806;
(statearr_30842[(10)] = inst_30761__$1);

return statearr_30842;
})();
if(inst_30761__$1){
var statearr_30843_33071 = state_30806__$1;
(statearr_30843_33071[(1)] = (13));

} else {
var statearr_30844_33072 = state_30806__$1;
(statearr_30844_33072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (9))){
var inst_30783 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30845_33079 = state_30806__$1;
(statearr_30845_33079[(2)] = inst_30783);

(statearr_30845_33079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (5))){
var inst_30744 = cljs.core.deref(mults);
var inst_30745 = cljs.core.vals(inst_30744);
var inst_30746 = cljs.core.seq(inst_30745);
var inst_30747 = inst_30746;
var inst_30748 = null;
var inst_30749 = (0);
var inst_30750 = (0);
var state_30806__$1 = (function (){var statearr_30846 = state_30806;
(statearr_30846[(13)] = inst_30747);

(statearr_30846[(14)] = inst_30748);

(statearr_30846[(15)] = inst_30750);

(statearr_30846[(16)] = inst_30749);

return statearr_30846;
})();
var statearr_30850_33081 = state_30806__$1;
(statearr_30850_33081[(2)] = null);

(statearr_30850_33081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (14))){
var state_30806__$1 = state_30806;
var statearr_30855_33083 = state_30806__$1;
(statearr_30855_33083[(2)] = null);

(statearr_30855_33083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (16))){
var inst_30761 = (state_30806[(10)]);
var inst_30765 = cljs.core.chunk_first(inst_30761);
var inst_30766 = cljs.core.chunk_rest(inst_30761);
var inst_30767 = cljs.core.count(inst_30765);
var inst_30747 = inst_30766;
var inst_30748 = inst_30765;
var inst_30749 = inst_30767;
var inst_30750 = (0);
var state_30806__$1 = (function (){var statearr_30857 = state_30806;
(statearr_30857[(13)] = inst_30747);

(statearr_30857[(14)] = inst_30748);

(statearr_30857[(15)] = inst_30750);

(statearr_30857[(16)] = inst_30749);

return statearr_30857;
})();
var statearr_30861_33085 = state_30806__$1;
(statearr_30861_33085[(2)] = null);

(statearr_30861_33085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (10))){
var inst_30747 = (state_30806[(13)]);
var inst_30748 = (state_30806[(14)]);
var inst_30750 = (state_30806[(15)]);
var inst_30749 = (state_30806[(16)]);
var inst_30755 = cljs.core._nth(inst_30748,inst_30750);
var inst_30756 = cljs.core.async.muxch_STAR_(inst_30755);
var inst_30757 = cljs.core.async.close_BANG_(inst_30756);
var inst_30758 = (inst_30750 + (1));
var tmp30852 = inst_30747;
var tmp30853 = inst_30748;
var tmp30854 = inst_30749;
var inst_30747__$1 = tmp30852;
var inst_30748__$1 = tmp30853;
var inst_30749__$1 = tmp30854;
var inst_30750__$1 = inst_30758;
var state_30806__$1 = (function (){var statearr_30872 = state_30806;
(statearr_30872[(13)] = inst_30747__$1);

(statearr_30872[(17)] = inst_30757);

(statearr_30872[(14)] = inst_30748__$1);

(statearr_30872[(15)] = inst_30750__$1);

(statearr_30872[(16)] = inst_30749__$1);

return statearr_30872;
})();
var statearr_30874_33090 = state_30806__$1;
(statearr_30874_33090[(2)] = null);

(statearr_30874_33090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (18))){
var inst_30776 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30875_33091 = state_30806__$1;
(statearr_30875_33091[(2)] = inst_30776);

(statearr_30875_33091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (8))){
var inst_30750 = (state_30806[(15)]);
var inst_30749 = (state_30806[(16)]);
var inst_30752 = (inst_30750 < inst_30749);
var inst_30753 = inst_30752;
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30753)){
var statearr_30876_33092 = state_30806__$1;
(statearr_30876_33092[(1)] = (10));

} else {
var statearr_30877_33093 = state_30806__$1;
(statearr_30877_33093[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_30880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30880[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_30880[(1)] = (1));

return statearr_30880;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_30806){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_30806);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e30881){var ex__28774__auto__ = e30881;
var statearr_30882_33094 = state_30806;
(statearr_30882_33094[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_30806[(4)]))){
var statearr_30883_33095 = state_30806;
(statearr_30883_33095[(1)] = cljs.core.first((state_30806[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33096 = state_30806;
state_30806 = G__33096;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_30806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_30806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_30886 = f__29016__auto__();
(statearr_30886[(6)] = c__29014__auto___33022);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30897 = arguments.length;
switch (G__30897) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30905 = arguments.length;
switch (G__30905) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30913 = arguments.length;
switch (G__30913) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29014__auto___33107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_30971){
var state_val_30972 = (state_30971[(1)]);
if((state_val_30972 === (7))){
var state_30971__$1 = state_30971;
var statearr_30980_33110 = state_30971__$1;
(statearr_30980_33110[(2)] = null);

(statearr_30980_33110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (1))){
var state_30971__$1 = state_30971;
var statearr_30981_33112 = state_30971__$1;
(statearr_30981_33112[(2)] = null);

(statearr_30981_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (4))){
var inst_30925 = (state_30971[(7)]);
var inst_30924 = (state_30971[(8)]);
var inst_30927 = (inst_30925 < inst_30924);
var state_30971__$1 = state_30971;
if(cljs.core.truth_(inst_30927)){
var statearr_30984_33118 = state_30971__$1;
(statearr_30984_33118[(1)] = (6));

} else {
var statearr_30985_33119 = state_30971__$1;
(statearr_30985_33119[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (15))){
var inst_30950 = (state_30971[(9)]);
var inst_30956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30950);
var state_30971__$1 = state_30971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30971__$1,(17),out,inst_30956);
} else {
if((state_val_30972 === (13))){
var inst_30950 = (state_30971[(9)]);
var inst_30950__$1 = (state_30971[(2)]);
var inst_30951 = cljs.core.some(cljs.core.nil_QMARK_,inst_30950__$1);
var state_30971__$1 = (function (){var statearr_30998 = state_30971;
(statearr_30998[(9)] = inst_30950__$1);

return statearr_30998;
})();
if(cljs.core.truth_(inst_30951)){
var statearr_31003_33127 = state_30971__$1;
(statearr_31003_33127[(1)] = (14));

} else {
var statearr_31004_33131 = state_30971__$1;
(statearr_31004_33131[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (6))){
var state_30971__$1 = state_30971;
var statearr_31012_33132 = state_30971__$1;
(statearr_31012_33132[(2)] = null);

(statearr_31012_33132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (17))){
var inst_30958 = (state_30971[(2)]);
var state_30971__$1 = (function (){var statearr_31015 = state_30971;
(statearr_31015[(10)] = inst_30958);

return statearr_31015;
})();
var statearr_31016_33133 = state_30971__$1;
(statearr_31016_33133[(2)] = null);

(statearr_31016_33133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (3))){
var inst_30965 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30971__$1,inst_30965);
} else {
if((state_val_30972 === (12))){
var _ = (function (){var statearr_31023 = state_30971;
(statearr_31023[(4)] = cljs.core.rest((state_30971[(4)])));

return statearr_31023;
})();
var state_30971__$1 = state_30971;
var ex31014 = (state_30971__$1[(2)]);
var statearr_31024_33137 = state_30971__$1;
(statearr_31024_33137[(5)] = ex31014);


if((ex31014 instanceof Object)){
var statearr_31041_33138 = state_30971__$1;
(statearr_31041_33138[(1)] = (11));

(statearr_31041_33138[(5)] = null);

} else {
throw ex31014;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (2))){
var inst_30923 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30924 = cnt;
var inst_30925 = (0);
var state_30971__$1 = (function (){var statearr_31049 = state_30971;
(statearr_31049[(7)] = inst_30925);

(statearr_31049[(8)] = inst_30924);

(statearr_31049[(11)] = inst_30923);

return statearr_31049;
})();
var statearr_31051_33142 = state_30971__$1;
(statearr_31051_33142[(2)] = null);

(statearr_31051_33142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (11))){
var inst_30929 = (state_30971[(2)]);
var inst_30930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30971__$1 = (function (){var statearr_31052 = state_30971;
(statearr_31052[(12)] = inst_30929);

return statearr_31052;
})();
var statearr_31053_33143 = state_30971__$1;
(statearr_31053_33143[(2)] = inst_30930);

(statearr_31053_33143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (9))){
var inst_30925 = (state_30971[(7)]);
var _ = (function (){var statearr_31057 = state_30971;
(statearr_31057[(4)] = cljs.core.cons((12),(state_30971[(4)])));

return statearr_31057;
})();
var inst_30936 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30925) : chs__$1.call(null,inst_30925));
var inst_30937 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30925) : done.call(null,inst_30925));
var inst_30938 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30936,inst_30937);
var ___$1 = (function (){var statearr_31060 = state_30971;
(statearr_31060[(4)] = cljs.core.rest((state_30971[(4)])));

return statearr_31060;
})();
var state_30971__$1 = state_30971;
var statearr_31061_33152 = state_30971__$1;
(statearr_31061_33152[(2)] = inst_30938);

(statearr_31061_33152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (5))){
var inst_30948 = (state_30971[(2)]);
var state_30971__$1 = (function (){var statearr_31062 = state_30971;
(statearr_31062[(13)] = inst_30948);

return statearr_31062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30971__$1,(13),dchan);
} else {
if((state_val_30972 === (14))){
var inst_30954 = cljs.core.async.close_BANG_(out);
var state_30971__$1 = state_30971;
var statearr_31063_33160 = state_30971__$1;
(statearr_31063_33160[(2)] = inst_30954);

(statearr_31063_33160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (16))){
var inst_30963 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_31070_33161 = state_30971__$1;
(statearr_31070_33161[(2)] = inst_30963);

(statearr_31070_33161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (10))){
var inst_30925 = (state_30971[(7)]);
var inst_30941 = (state_30971[(2)]);
var inst_30942 = (inst_30925 + (1));
var inst_30925__$1 = inst_30942;
var state_30971__$1 = (function (){var statearr_31073 = state_30971;
(statearr_31073[(7)] = inst_30925__$1);

(statearr_31073[(14)] = inst_30941);

return statearr_31073;
})();
var statearr_31074_33168 = state_30971__$1;
(statearr_31074_33168[(2)] = null);

(statearr_31074_33168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30972 === (8))){
var inst_30946 = (state_30971[(2)]);
var state_30971__$1 = state_30971;
var statearr_31075_33170 = state_30971__$1;
(statearr_31075_33170[(2)] = inst_30946);

(statearr_31075_33170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31081[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31081[(1)] = (1));

return statearr_31081;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_30971){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_30971);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31082){var ex__28774__auto__ = e31082;
var statearr_31083_33182 = state_30971;
(statearr_31083_33182[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_30971[(4)]))){
var statearr_31084_33183 = state_30971;
(statearr_31084_33183[(1)] = cljs.core.first((state_30971[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33186 = state_30971;
state_30971 = G__33186;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_30971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_30971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31087 = f__29016__auto__();
(statearr_31087[(6)] = c__29014__auto___33107);

return statearr_31087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31094 = arguments.length;
switch (G__31094) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29014__auto___33198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var inst_31115 = (state_31138[(7)]);
var inst_31116 = (state_31138[(8)]);
var inst_31115__$1 = (state_31138[(2)]);
var inst_31116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31115__$1,(0),null);
var inst_31117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31115__$1,(1),null);
var inst_31118 = (inst_31116__$1 == null);
var state_31138__$1 = (function (){var statearr_31146 = state_31138;
(statearr_31146[(7)] = inst_31115__$1);

(statearr_31146[(8)] = inst_31116__$1);

(statearr_31146[(9)] = inst_31117);

return statearr_31146;
})();
if(cljs.core.truth_(inst_31118)){
var statearr_31147_33203 = state_31138__$1;
(statearr_31147_33203[(1)] = (8));

} else {
var statearr_31148_33204 = state_31138__$1;
(statearr_31148_33204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (1))){
var inst_31103 = cljs.core.vec(chs);
var inst_31104 = inst_31103;
var state_31138__$1 = (function (){var statearr_31149 = state_31138;
(statearr_31149[(10)] = inst_31104);

return statearr_31149;
})();
var statearr_31150_33206 = state_31138__$1;
(statearr_31150_33206[(2)] = null);

(statearr_31150_33206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (4))){
var inst_31104 = (state_31138[(10)]);
var state_31138__$1 = state_31138;
return cljs.core.async.ioc_alts_BANG_(state_31138__$1,(7),inst_31104);
} else {
if((state_val_31139 === (6))){
var inst_31133 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31152_33211 = state_31138__$1;
(statearr_31152_33211[(2)] = inst_31133);

(statearr_31152_33211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (3))){
var inst_31135 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31138__$1,inst_31135);
} else {
if((state_val_31139 === (2))){
var inst_31104 = (state_31138[(10)]);
var inst_31106 = cljs.core.count(inst_31104);
var inst_31107 = (inst_31106 > (0));
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31107)){
var statearr_31157_33219 = state_31138__$1;
(statearr_31157_33219[(1)] = (4));

} else {
var statearr_31158_33220 = state_31138__$1;
(statearr_31158_33220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (11))){
var inst_31104 = (state_31138[(10)]);
var inst_31126 = (state_31138[(2)]);
var tmp31154 = inst_31104;
var inst_31104__$1 = tmp31154;
var state_31138__$1 = (function (){var statearr_31159 = state_31138;
(statearr_31159[(10)] = inst_31104__$1);

(statearr_31159[(11)] = inst_31126);

return statearr_31159;
})();
var statearr_31160_33229 = state_31138__$1;
(statearr_31160_33229[(2)] = null);

(statearr_31160_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (9))){
var inst_31116 = (state_31138[(8)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31138__$1,(11),out,inst_31116);
} else {
if((state_val_31139 === (5))){
var inst_31131 = cljs.core.async.close_BANG_(out);
var state_31138__$1 = state_31138;
var statearr_31161_33232 = state_31138__$1;
(statearr_31161_33232[(2)] = inst_31131);

(statearr_31161_33232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (10))){
var inst_31129 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31162_33236 = state_31138__$1;
(statearr_31162_33236[(2)] = inst_31129);

(statearr_31162_33236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (8))){
var inst_31115 = (state_31138[(7)]);
var inst_31116 = (state_31138[(8)]);
var inst_31104 = (state_31138[(10)]);
var inst_31117 = (state_31138[(9)]);
var inst_31121 = (function (){var cs = inst_31104;
var vec__31111 = inst_31115;
var v = inst_31116;
var c = inst_31117;
return (function (p1__31089_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31089_SHARP_);
});
})();
var inst_31122 = cljs.core.filterv(inst_31121,inst_31104);
var inst_31104__$1 = inst_31122;
var state_31138__$1 = (function (){var statearr_31167 = state_31138;
(statearr_31167[(10)] = inst_31104__$1);

return statearr_31167;
})();
var statearr_31169_33251 = state_31138__$1;
(statearr_31169_33251[(2)] = null);

(statearr_31169_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31171 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31171[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31171[(1)] = (1));

return statearr_31171;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_31138){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31138);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31172){var ex__28774__auto__ = e31172;
var statearr_31174_33273 = state_31138;
(statearr_31174_33273[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31138[(4)]))){
var statearr_31175_33275 = state_31138;
(statearr_31175_33275[(1)] = cljs.core.first((state_31138[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33276 = state_31138;
state_31138 = G__33276;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31177 = f__29016__auto__();
(statearr_31177[(6)] = c__29014__auto___33198);

return statearr_31177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31204 = arguments.length;
switch (G__31204) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29014__auto___33295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31229){
var state_val_31230 = (state_31229[(1)]);
if((state_val_31230 === (7))){
var inst_31211 = (state_31229[(7)]);
var inst_31211__$1 = (state_31229[(2)]);
var inst_31212 = (inst_31211__$1 == null);
var inst_31213 = cljs.core.not(inst_31212);
var state_31229__$1 = (function (){var statearr_31233 = state_31229;
(statearr_31233[(7)] = inst_31211__$1);

return statearr_31233;
})();
if(inst_31213){
var statearr_31234_33302 = state_31229__$1;
(statearr_31234_33302[(1)] = (8));

} else {
var statearr_31235_33309 = state_31229__$1;
(statearr_31235_33309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (1))){
var inst_31206 = (0);
var state_31229__$1 = (function (){var statearr_31238 = state_31229;
(statearr_31238[(8)] = inst_31206);

return statearr_31238;
})();
var statearr_31243_33312 = state_31229__$1;
(statearr_31243_33312[(2)] = null);

(statearr_31243_33312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (4))){
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31229__$1,(7),ch);
} else {
if((state_val_31230 === (6))){
var inst_31224 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
var statearr_31259_33317 = state_31229__$1;
(statearr_31259_33317[(2)] = inst_31224);

(statearr_31259_33317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (3))){
var inst_31226 = (state_31229[(2)]);
var inst_31227 = cljs.core.async.close_BANG_(out);
var state_31229__$1 = (function (){var statearr_31265 = state_31229;
(statearr_31265[(9)] = inst_31226);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31229__$1,inst_31227);
} else {
if((state_val_31230 === (2))){
var inst_31206 = (state_31229[(8)]);
var inst_31208 = (inst_31206 < n);
var state_31229__$1 = state_31229;
if(cljs.core.truth_(inst_31208)){
var statearr_31266_33321 = state_31229__$1;
(statearr_31266_33321[(1)] = (4));

} else {
var statearr_31267_33323 = state_31229__$1;
(statearr_31267_33323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (11))){
var inst_31206 = (state_31229[(8)]);
var inst_31216 = (state_31229[(2)]);
var inst_31217 = (inst_31206 + (1));
var inst_31206__$1 = inst_31217;
var state_31229__$1 = (function (){var statearr_31269 = state_31229;
(statearr_31269[(10)] = inst_31216);

(statearr_31269[(8)] = inst_31206__$1);

return statearr_31269;
})();
var statearr_31270_33328 = state_31229__$1;
(statearr_31270_33328[(2)] = null);

(statearr_31270_33328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (9))){
var state_31229__$1 = state_31229;
var statearr_31271_33330 = state_31229__$1;
(statearr_31271_33330[(2)] = null);

(statearr_31271_33330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (5))){
var state_31229__$1 = state_31229;
var statearr_31272_33332 = state_31229__$1;
(statearr_31272_33332[(2)] = null);

(statearr_31272_33332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (10))){
var inst_31221 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
var statearr_31273_33335 = state_31229__$1;
(statearr_31273_33335[(2)] = inst_31221);

(statearr_31273_33335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (8))){
var inst_31211 = (state_31229[(7)]);
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31229__$1,(11),out,inst_31211);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31274[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31274[(1)] = (1));

return statearr_31274;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_31229){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31229);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31275){var ex__28774__auto__ = e31275;
var statearr_31277_33346 = state_31229;
(statearr_31277_33346[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31229[(4)]))){
var statearr_31278_33347 = state_31229;
(statearr_31278_33347[(1)] = cljs.core.first((state_31229[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33357 = state_31229;
state_31229 = G__33357;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_31229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_31229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31279 = f__29016__auto__();
(statearr_31279[(6)] = c__29014__auto___33295);

return statearr_31279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31281 = (function (f,ch,meta31282){
this.f = f;
this.ch = ch;
this.meta31282 = meta31282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31283,meta31282__$1){
var self__ = this;
var _31283__$1 = this;
return (new cljs.core.async.t_cljs$core$async31281(self__.f,self__.ch,meta31282__$1));
}));

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31283){
var self__ = this;
var _31283__$1 = this;
return self__.meta31282;
}));

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31285 = (function (f,ch,meta31282,_,fn1,meta31286){
this.f = f;
this.ch = ch;
this.meta31282 = meta31282;
this._ = _;
this.fn1 = fn1;
this.meta31286 = meta31286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31287,meta31286__$1){
var self__ = this;
var _31287__$1 = this;
return (new cljs.core.async.t_cljs$core$async31285(self__.f,self__.ch,self__.meta31282,self__._,self__.fn1,meta31286__$1));
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31287){
var self__ = this;
var _31287__$1 = this;
return self__.meta31286;
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31280_SHARP_){
var G__31295 = (((p1__31280_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31280_SHARP_) : self__.f.call(null,p1__31280_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31295) : f1.call(null,G__31295));
});
}));

(cljs.core.async.t_cljs$core$async31285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31282","meta31282",-133008595,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31281","cljs.core.async/t_cljs$core$async31281",1279854900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31286","meta31286",2006528352,null)], null);
}));

(cljs.core.async.t_cljs$core$async31285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31285");

(cljs.core.async.t_cljs$core$async31285.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31285.
 */
cljs.core.async.__GT_t_cljs$core$async31285 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31285(f__$1,ch__$1,meta31282__$1,___$2,fn1__$1,meta31286){
return (new cljs.core.async.t_cljs$core$async31285(f__$1,ch__$1,meta31282__$1,___$2,fn1__$1,meta31286));
});

}

return (new cljs.core.async.t_cljs$core$async31285(self__.f,self__.ch,self__.meta31282,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31299 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31299) : self__.f.call(null,G__31299));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31282","meta31282",-133008595,null)], null);
}));

(cljs.core.async.t_cljs$core$async31281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31281");

(cljs.core.async.t_cljs$core$async31281.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31281.
 */
cljs.core.async.__GT_t_cljs$core$async31281 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31281(f__$1,ch__$1,meta31282){
return (new cljs.core.async.t_cljs$core$async31281(f__$1,ch__$1,meta31282));
});

}

return (new cljs.core.async.t_cljs$core$async31281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31325 = (function (f,ch,meta31326){
this.f = f;
this.ch = ch;
this.meta31326 = meta31326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31327,meta31326__$1){
var self__ = this;
var _31327__$1 = this;
return (new cljs.core.async.t_cljs$core$async31325(self__.f,self__.ch,meta31326__$1));
}));

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31327){
var self__ = this;
var _31327__$1 = this;
return self__.meta31326;
}));

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31326","meta31326",-389915267,null)], null);
}));

(cljs.core.async.t_cljs$core$async31325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31325");

(cljs.core.async.t_cljs$core$async31325.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31325.
 */
cljs.core.async.__GT_t_cljs$core$async31325 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31325(f__$1,ch__$1,meta31326){
return (new cljs.core.async.t_cljs$core$async31325(f__$1,ch__$1,meta31326));
});

}

return (new cljs.core.async.t_cljs$core$async31325(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31335 = (function (p,ch,meta31336){
this.p = p;
this.ch = ch;
this.meta31336 = meta31336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31337,meta31336__$1){
var self__ = this;
var _31337__$1 = this;
return (new cljs.core.async.t_cljs$core$async31335(self__.p,self__.ch,meta31336__$1));
}));

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31337){
var self__ = this;
var _31337__$1 = this;
return self__.meta31336;
}));

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31336","meta31336",-1563171945,null)], null);
}));

(cljs.core.async.t_cljs$core$async31335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31335");

(cljs.core.async.t_cljs$core$async31335.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31335.
 */
cljs.core.async.__GT_t_cljs$core$async31335 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31335(p__$1,ch__$1,meta31336){
return (new cljs.core.async.t_cljs$core$async31335(p__$1,ch__$1,meta31336));
});

}

return (new cljs.core.async.t_cljs$core$async31335(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31364 = arguments.length;
switch (G__31364) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29014__auto___33460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31391){
var state_val_31392 = (state_31391[(1)]);
if((state_val_31392 === (7))){
var inst_31387 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
var statearr_31393_33461 = state_31391__$1;
(statearr_31393_33461[(2)] = inst_31387);

(statearr_31393_33461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (1))){
var state_31391__$1 = state_31391;
var statearr_31394_33463 = state_31391__$1;
(statearr_31394_33463[(2)] = null);

(statearr_31394_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (4))){
var inst_31367 = (state_31391[(7)]);
var inst_31367__$1 = (state_31391[(2)]);
var inst_31368 = (inst_31367__$1 == null);
var state_31391__$1 = (function (){var statearr_31396 = state_31391;
(statearr_31396[(7)] = inst_31367__$1);

return statearr_31396;
})();
if(cljs.core.truth_(inst_31368)){
var statearr_31397_33530 = state_31391__$1;
(statearr_31397_33530[(1)] = (5));

} else {
var statearr_31398_33531 = state_31391__$1;
(statearr_31398_33531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (6))){
var inst_31367 = (state_31391[(7)]);
var inst_31372 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31367) : p.call(null,inst_31367));
var state_31391__$1 = state_31391;
if(cljs.core.truth_(inst_31372)){
var statearr_31399_33537 = state_31391__$1;
(statearr_31399_33537[(1)] = (8));

} else {
var statearr_31400_33538 = state_31391__$1;
(statearr_31400_33538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (3))){
var inst_31389 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31391__$1,inst_31389);
} else {
if((state_val_31392 === (2))){
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31391__$1,(4),ch);
} else {
if((state_val_31392 === (11))){
var inst_31381 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
var statearr_31401_33548 = state_31391__$1;
(statearr_31401_33548[(2)] = inst_31381);

(statearr_31401_33548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (9))){
var state_31391__$1 = state_31391;
var statearr_31404_33549 = state_31391__$1;
(statearr_31404_33549[(2)] = null);

(statearr_31404_33549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (5))){
var inst_31370 = cljs.core.async.close_BANG_(out);
var state_31391__$1 = state_31391;
var statearr_31406_33556 = state_31391__$1;
(statearr_31406_33556[(2)] = inst_31370);

(statearr_31406_33556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (10))){
var inst_31384 = (state_31391[(2)]);
var state_31391__$1 = (function (){var statearr_31407 = state_31391;
(statearr_31407[(8)] = inst_31384);

return statearr_31407;
})();
var statearr_31408_33557 = state_31391__$1;
(statearr_31408_33557[(2)] = null);

(statearr_31408_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (8))){
var inst_31367 = (state_31391[(7)]);
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31391__$1,(11),out,inst_31367);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31409 = [null,null,null,null,null,null,null,null,null];
(statearr_31409[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31409[(1)] = (1));

return statearr_31409;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_31391){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31391);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31411){var ex__28774__auto__ = e31411;
var statearr_31412_33593 = state_31391;
(statearr_31412_33593[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31391[(4)]))){
var statearr_31413_33594 = state_31391;
(statearr_31413_33594[(1)] = cljs.core.first((state_31391[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33645 = state_31391;
state_31391 = G__33645;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_31391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_31391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31415 = f__29016__auto__();
(statearr_31415[(6)] = c__29014__auto___33460);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31419 = arguments.length;
switch (G__31419) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31483){
var state_val_31484 = (state_31483[(1)]);
if((state_val_31484 === (7))){
var inst_31478 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31487_33659 = state_31483__$1;
(statearr_31487_33659[(2)] = inst_31478);

(statearr_31487_33659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (20))){
var inst_31448 = (state_31483[(7)]);
var inst_31459 = (state_31483[(2)]);
var inst_31460 = cljs.core.next(inst_31448);
var inst_31433 = inst_31460;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31483__$1 = (function (){var statearr_31488 = state_31483;
(statearr_31488[(8)] = inst_31435);

(statearr_31488[(9)] = inst_31434);

(statearr_31488[(10)] = inst_31433);

(statearr_31488[(11)] = inst_31459);

(statearr_31488[(12)] = inst_31436);

return statearr_31488;
})();
var statearr_31489_33661 = state_31483__$1;
(statearr_31489_33661[(2)] = null);

(statearr_31489_33661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (1))){
var state_31483__$1 = state_31483;
var statearr_31492_33663 = state_31483__$1;
(statearr_31492_33663[(2)] = null);

(statearr_31492_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (4))){
var inst_31422 = (state_31483[(13)]);
var inst_31422__$1 = (state_31483[(2)]);
var inst_31423 = (inst_31422__$1 == null);
var state_31483__$1 = (function (){var statearr_31493 = state_31483;
(statearr_31493[(13)] = inst_31422__$1);

return statearr_31493;
})();
if(cljs.core.truth_(inst_31423)){
var statearr_31494_33680 = state_31483__$1;
(statearr_31494_33680[(1)] = (5));

} else {
var statearr_31495_33681 = state_31483__$1;
(statearr_31495_33681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (15))){
var state_31483__$1 = state_31483;
var statearr_31499_33693 = state_31483__$1;
(statearr_31499_33693[(2)] = null);

(statearr_31499_33693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (21))){
var state_31483__$1 = state_31483;
var statearr_31501_33694 = state_31483__$1;
(statearr_31501_33694[(2)] = null);

(statearr_31501_33694[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (13))){
var inst_31435 = (state_31483[(8)]);
var inst_31434 = (state_31483[(9)]);
var inst_31433 = (state_31483[(10)]);
var inst_31436 = (state_31483[(12)]);
var inst_31444 = (state_31483[(2)]);
var inst_31445 = (inst_31436 + (1));
var tmp31496 = inst_31435;
var tmp31497 = inst_31434;
var tmp31498 = inst_31433;
var inst_31433__$1 = tmp31498;
var inst_31434__$1 = tmp31497;
var inst_31435__$1 = tmp31496;
var inst_31436__$1 = inst_31445;
var state_31483__$1 = (function (){var statearr_31503 = state_31483;
(statearr_31503[(8)] = inst_31435__$1);

(statearr_31503[(14)] = inst_31444);

(statearr_31503[(9)] = inst_31434__$1);

(statearr_31503[(10)] = inst_31433__$1);

(statearr_31503[(12)] = inst_31436__$1);

return statearr_31503;
})();
var statearr_31505_33728 = state_31483__$1;
(statearr_31505_33728[(2)] = null);

(statearr_31505_33728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (22))){
var state_31483__$1 = state_31483;
var statearr_31506_33733 = state_31483__$1;
(statearr_31506_33733[(2)] = null);

(statearr_31506_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (6))){
var inst_31422 = (state_31483[(13)]);
var inst_31431 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31422) : f.call(null,inst_31422));
var inst_31432 = cljs.core.seq(inst_31431);
var inst_31433 = inst_31432;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31483__$1 = (function (){var statearr_31507 = state_31483;
(statearr_31507[(8)] = inst_31435);

(statearr_31507[(9)] = inst_31434);

(statearr_31507[(10)] = inst_31433);

(statearr_31507[(12)] = inst_31436);

return statearr_31507;
})();
var statearr_31508_33763 = state_31483__$1;
(statearr_31508_33763[(2)] = null);

(statearr_31508_33763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (17))){
var inst_31448 = (state_31483[(7)]);
var inst_31452 = cljs.core.chunk_first(inst_31448);
var inst_31453 = cljs.core.chunk_rest(inst_31448);
var inst_31454 = cljs.core.count(inst_31452);
var inst_31433 = inst_31453;
var inst_31434 = inst_31452;
var inst_31435 = inst_31454;
var inst_31436 = (0);
var state_31483__$1 = (function (){var statearr_31509 = state_31483;
(statearr_31509[(8)] = inst_31435);

(statearr_31509[(9)] = inst_31434);

(statearr_31509[(10)] = inst_31433);

(statearr_31509[(12)] = inst_31436);

return statearr_31509;
})();
var statearr_31510_33776 = state_31483__$1;
(statearr_31510_33776[(2)] = null);

(statearr_31510_33776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (3))){
var inst_31480 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31483__$1,inst_31480);
} else {
if((state_val_31484 === (12))){
var inst_31468 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31512_33781 = state_31483__$1;
(statearr_31512_33781[(2)] = inst_31468);

(statearr_31512_33781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (2))){
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31483__$1,(4),in$);
} else {
if((state_val_31484 === (23))){
var inst_31476 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31513_33782 = state_31483__$1;
(statearr_31513_33782[(2)] = inst_31476);

(statearr_31513_33782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (19))){
var inst_31463 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31514_33783 = state_31483__$1;
(statearr_31514_33783[(2)] = inst_31463);

(statearr_31514_33783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (11))){
var inst_31448 = (state_31483[(7)]);
var inst_31433 = (state_31483[(10)]);
var inst_31448__$1 = cljs.core.seq(inst_31433);
var state_31483__$1 = (function (){var statearr_31516 = state_31483;
(statearr_31516[(7)] = inst_31448__$1);

return statearr_31516;
})();
if(inst_31448__$1){
var statearr_31517_33784 = state_31483__$1;
(statearr_31517_33784[(1)] = (14));

} else {
var statearr_31518_33785 = state_31483__$1;
(statearr_31518_33785[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (9))){
var inst_31470 = (state_31483[(2)]);
var inst_31471 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31483__$1 = (function (){var statearr_31520 = state_31483;
(statearr_31520[(15)] = inst_31470);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31471)){
var statearr_31521_33789 = state_31483__$1;
(statearr_31521_33789[(1)] = (21));

} else {
var statearr_31522_33791 = state_31483__$1;
(statearr_31522_33791[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (5))){
var inst_31425 = cljs.core.async.close_BANG_(out);
var state_31483__$1 = state_31483;
var statearr_31525_33796 = state_31483__$1;
(statearr_31525_33796[(2)] = inst_31425);

(statearr_31525_33796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (14))){
var inst_31448 = (state_31483[(7)]);
var inst_31450 = cljs.core.chunked_seq_QMARK_(inst_31448);
var state_31483__$1 = state_31483;
if(inst_31450){
var statearr_31527_33806 = state_31483__$1;
(statearr_31527_33806[(1)] = (17));

} else {
var statearr_31528_33807 = state_31483__$1;
(statearr_31528_33807[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (16))){
var inst_31466 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31529_33812 = state_31483__$1;
(statearr_31529_33812[(2)] = inst_31466);

(statearr_31529_33812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (10))){
var inst_31434 = (state_31483[(9)]);
var inst_31436 = (state_31483[(12)]);
var inst_31442 = cljs.core._nth(inst_31434,inst_31436);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31483__$1,(13),out,inst_31442);
} else {
if((state_val_31484 === (18))){
var inst_31448 = (state_31483[(7)]);
var inst_31457 = cljs.core.first(inst_31448);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31483__$1,(20),out,inst_31457);
} else {
if((state_val_31484 === (8))){
var inst_31435 = (state_31483[(8)]);
var inst_31436 = (state_31483[(12)]);
var inst_31439 = (inst_31436 < inst_31435);
var inst_31440 = inst_31439;
var state_31483__$1 = state_31483;
if(cljs.core.truth_(inst_31440)){
var statearr_31530_33816 = state_31483__$1;
(statearr_31530_33816[(1)] = (10));

} else {
var statearr_31531_33817 = state_31483__$1;
(statearr_31531_33817[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28771__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28771__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28771__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28771__auto____1 = (function (state_31483){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31483);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31534){var ex__28774__auto__ = e31534;
var statearr_31535_33826 = state_31483;
(statearr_31535_33826[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31483[(4)]))){
var statearr_31540_33831 = state_31483;
(statearr_31540_33831[(1)] = cljs.core.first((state_31483[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33840 = state_31483;
state_31483 = G__33840;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28771__auto__ = function(state_31483){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28771__auto____1.call(this,state_31483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28771__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28771__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31545 = f__29016__auto__();
(statearr_31545[(6)] = c__29014__auto__);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));

return c__29014__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31552 = arguments.length;
switch (G__31552) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31554 = arguments.length;
switch (G__31554) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31557 = arguments.length;
switch (G__31557) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29014__auto___33860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31583 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31594_33861 = state_31590__$1;
(statearr_31594_33861[(2)] = inst_31583);

(statearr_31594_33861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var inst_31559 = null;
var state_31590__$1 = (function (){var statearr_31595 = state_31590;
(statearr_31595[(7)] = inst_31559);

return statearr_31595;
})();
var statearr_31596_33862 = state_31590__$1;
(statearr_31596_33862[(2)] = null);

(statearr_31596_33862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (4))){
var inst_31562 = (state_31590[(8)]);
var inst_31562__$1 = (state_31590[(2)]);
var inst_31563 = (inst_31562__$1 == null);
var inst_31564 = cljs.core.not(inst_31563);
var state_31590__$1 = (function (){var statearr_31597 = state_31590;
(statearr_31597[(8)] = inst_31562__$1);

return statearr_31597;
})();
if(inst_31564){
var statearr_31598_33864 = state_31590__$1;
(statearr_31598_33864[(1)] = (5));

} else {
var statearr_31599_33865 = state_31590__$1;
(statearr_31599_33865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var state_31590__$1 = state_31590;
var statearr_31601_33867 = state_31590__$1;
(statearr_31601_33867[(2)] = null);

(statearr_31601_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (3))){
var inst_31585 = (state_31590[(2)]);
var inst_31586 = cljs.core.async.close_BANG_(out);
var state_31590__$1 = (function (){var statearr_31604 = state_31590;
(statearr_31604[(9)] = inst_31585);

return statearr_31604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31590__$1,inst_31586);
} else {
if((state_val_31591 === (2))){
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31590__$1,(4),ch);
} else {
if((state_val_31591 === (11))){
var inst_31562 = (state_31590[(8)]);
var inst_31571 = (state_31590[(2)]);
var inst_31559 = inst_31562;
var state_31590__$1 = (function (){var statearr_31607 = state_31590;
(statearr_31607[(10)] = inst_31571);

(statearr_31607[(7)] = inst_31559);

return statearr_31607;
})();
var statearr_31608_33871 = state_31590__$1;
(statearr_31608_33871[(2)] = null);

(statearr_31608_33871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (9))){
var inst_31562 = (state_31590[(8)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31590__$1,(11),out,inst_31562);
} else {
if((state_val_31591 === (5))){
var inst_31562 = (state_31590[(8)]);
var inst_31559 = (state_31590[(7)]);
var inst_31566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31562,inst_31559);
var state_31590__$1 = state_31590;
if(inst_31566){
var statearr_31611_33877 = state_31590__$1;
(statearr_31611_33877[(1)] = (8));

} else {
var statearr_31612_33882 = state_31590__$1;
(statearr_31612_33882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var inst_31579 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31614_33887 = state_31590__$1;
(statearr_31614_33887[(2)] = inst_31579);

(statearr_31614_33887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (8))){
var inst_31559 = (state_31590[(7)]);
var tmp31610 = inst_31559;
var inst_31559__$1 = tmp31610;
var state_31590__$1 = (function (){var statearr_31616 = state_31590;
(statearr_31616[(7)] = inst_31559__$1);

return statearr_31616;
})();
var statearr_31617_33888 = state_31590__$1;
(statearr_31617_33888[(2)] = null);

(statearr_31617_33888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31622[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31622[(1)] = (1));

return statearr_31622;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_31590){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31590);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31625){var ex__28774__auto__ = e31625;
var statearr_31628_33890 = state_31590;
(statearr_31628_33890[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31590[(4)]))){
var statearr_31629_33891 = state_31590;
(statearr_31629_33891[(1)] = cljs.core.first((state_31590[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33893 = state_31590;
state_31590 = G__33893;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31633 = f__29016__auto__();
(statearr_31633[(6)] = c__29014__auto___33860);

return statearr_31633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31635 = arguments.length;
switch (G__31635) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29014__auto___33895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31679){
var state_val_31680 = (state_31679[(1)]);
if((state_val_31680 === (7))){
var inst_31675 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31686_33896 = state_31679__$1;
(statearr_31686_33896[(2)] = inst_31675);

(statearr_31686_33896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (1))){
var inst_31642 = (new Array(n));
var inst_31643 = inst_31642;
var inst_31644 = (0);
var state_31679__$1 = (function (){var statearr_31687 = state_31679;
(statearr_31687[(7)] = inst_31644);

(statearr_31687[(8)] = inst_31643);

return statearr_31687;
})();
var statearr_31688_33897 = state_31679__$1;
(statearr_31688_33897[(2)] = null);

(statearr_31688_33897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (4))){
var inst_31647 = (state_31679[(9)]);
var inst_31647__$1 = (state_31679[(2)]);
var inst_31648 = (inst_31647__$1 == null);
var inst_31649 = cljs.core.not(inst_31648);
var state_31679__$1 = (function (){var statearr_31689 = state_31679;
(statearr_31689[(9)] = inst_31647__$1);

return statearr_31689;
})();
if(inst_31649){
var statearr_31691_33899 = state_31679__$1;
(statearr_31691_33899[(1)] = (5));

} else {
var statearr_31692_33900 = state_31679__$1;
(statearr_31692_33900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (15))){
var inst_31669 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31693_33901 = state_31679__$1;
(statearr_31693_33901[(2)] = inst_31669);

(statearr_31693_33901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (13))){
var state_31679__$1 = state_31679;
var statearr_31694_33902 = state_31679__$1;
(statearr_31694_33902[(2)] = null);

(statearr_31694_33902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (6))){
var inst_31644 = (state_31679[(7)]);
var inst_31665 = (inst_31644 > (0));
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31665)){
var statearr_31705_33903 = state_31679__$1;
(statearr_31705_33903[(1)] = (12));

} else {
var statearr_31706_33904 = state_31679__$1;
(statearr_31706_33904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (3))){
var inst_31677 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31679__$1,inst_31677);
} else {
if((state_val_31680 === (12))){
var inst_31643 = (state_31679[(8)]);
var inst_31667 = cljs.core.vec(inst_31643);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31679__$1,(15),out,inst_31667);
} else {
if((state_val_31680 === (2))){
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31679__$1,(4),ch);
} else {
if((state_val_31680 === (11))){
var inst_31659 = (state_31679[(2)]);
var inst_31660 = (new Array(n));
var inst_31643 = inst_31660;
var inst_31644 = (0);
var state_31679__$1 = (function (){var statearr_31709 = state_31679;
(statearr_31709[(10)] = inst_31659);

(statearr_31709[(7)] = inst_31644);

(statearr_31709[(8)] = inst_31643);

return statearr_31709;
})();
var statearr_31711_33907 = state_31679__$1;
(statearr_31711_33907[(2)] = null);

(statearr_31711_33907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (9))){
var inst_31643 = (state_31679[(8)]);
var inst_31657 = cljs.core.vec(inst_31643);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31679__$1,(11),out,inst_31657);
} else {
if((state_val_31680 === (5))){
var inst_31652 = (state_31679[(11)]);
var inst_31644 = (state_31679[(7)]);
var inst_31647 = (state_31679[(9)]);
var inst_31643 = (state_31679[(8)]);
var inst_31651 = (inst_31643[inst_31644] = inst_31647);
var inst_31652__$1 = (inst_31644 + (1));
var inst_31653 = (inst_31652__$1 < n);
var state_31679__$1 = (function (){var statearr_31712 = state_31679;
(statearr_31712[(11)] = inst_31652__$1);

(statearr_31712[(12)] = inst_31651);

return statearr_31712;
})();
if(cljs.core.truth_(inst_31653)){
var statearr_31713_33908 = state_31679__$1;
(statearr_31713_33908[(1)] = (8));

} else {
var statearr_31714_33910 = state_31679__$1;
(statearr_31714_33910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (14))){
var inst_31672 = (state_31679[(2)]);
var inst_31673 = cljs.core.async.close_BANG_(out);
var state_31679__$1 = (function (){var statearr_31716 = state_31679;
(statearr_31716[(13)] = inst_31672);

return statearr_31716;
})();
var statearr_31717_33915 = state_31679__$1;
(statearr_31717_33915[(2)] = inst_31673);

(statearr_31717_33915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (10))){
var inst_31663 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31720_33919 = state_31679__$1;
(statearr_31720_33919[(2)] = inst_31663);

(statearr_31720_33919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (8))){
var inst_31652 = (state_31679[(11)]);
var inst_31643 = (state_31679[(8)]);
var tmp31715 = inst_31643;
var inst_31643__$1 = tmp31715;
var inst_31644 = inst_31652;
var state_31679__$1 = (function (){var statearr_31721 = state_31679;
(statearr_31721[(7)] = inst_31644);

(statearr_31721[(8)] = inst_31643__$1);

return statearr_31721;
})();
var statearr_31723_33931 = state_31679__$1;
(statearr_31723_33931[(2)] = null);

(statearr_31723_33931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31724[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31724[(1)] = (1));

return statearr_31724;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_31679){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31679);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31725){var ex__28774__auto__ = e31725;
var statearr_31726_33937 = state_31679;
(statearr_31726_33937[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31679[(4)]))){
var statearr_31727_33938 = state_31679;
(statearr_31727_33938[(1)] = cljs.core.first((state_31679[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33939 = state_31679;
state_31679 = G__33939;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_31679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_31679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31729 = f__29016__auto__();
(statearr_31729[(6)] = c__29014__auto___33895);

return statearr_31729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31731 = arguments.length;
switch (G__31731) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29014__auto___33960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29016__auto__ = (function (){var switch__28770__auto__ = (function (state_31775){
var state_val_31776 = (state_31775[(1)]);
if((state_val_31776 === (7))){
var inst_31771 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31777_33961 = state_31775__$1;
(statearr_31777_33961[(2)] = inst_31771);

(statearr_31777_33961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (1))){
var inst_31732 = [];
var inst_31733 = inst_31732;
var inst_31734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31775__$1 = (function (){var statearr_31778 = state_31775;
(statearr_31778[(7)] = inst_31733);

(statearr_31778[(8)] = inst_31734);

return statearr_31778;
})();
var statearr_31780_33965 = state_31775__$1;
(statearr_31780_33965[(2)] = null);

(statearr_31780_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (4))){
var inst_31739 = (state_31775[(9)]);
var inst_31739__$1 = (state_31775[(2)]);
var inst_31740 = (inst_31739__$1 == null);
var inst_31741 = cljs.core.not(inst_31740);
var state_31775__$1 = (function (){var statearr_31781 = state_31775;
(statearr_31781[(9)] = inst_31739__$1);

return statearr_31781;
})();
if(inst_31741){
var statearr_31782_33970 = state_31775__$1;
(statearr_31782_33970[(1)] = (5));

} else {
var statearr_31783_33972 = state_31775__$1;
(statearr_31783_33972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (15))){
var inst_31765 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31784_33974 = state_31775__$1;
(statearr_31784_33974[(2)] = inst_31765);

(statearr_31784_33974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (13))){
var state_31775__$1 = state_31775;
var statearr_31786_33975 = state_31775__$1;
(statearr_31786_33975[(2)] = null);

(statearr_31786_33975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (6))){
var inst_31733 = (state_31775[(7)]);
var inst_31760 = inst_31733.length;
var inst_31761 = (inst_31760 > (0));
var state_31775__$1 = state_31775;
if(cljs.core.truth_(inst_31761)){
var statearr_31788_33977 = state_31775__$1;
(statearr_31788_33977[(1)] = (12));

} else {
var statearr_31789_33979 = state_31775__$1;
(statearr_31789_33979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (3))){
var inst_31773 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31775__$1,inst_31773);
} else {
if((state_val_31776 === (12))){
var inst_31733 = (state_31775[(7)]);
var inst_31763 = cljs.core.vec(inst_31733);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31775__$1,(15),out,inst_31763);
} else {
if((state_val_31776 === (2))){
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31775__$1,(4),ch);
} else {
if((state_val_31776 === (11))){
var inst_31739 = (state_31775[(9)]);
var inst_31743 = (state_31775[(10)]);
var inst_31753 = (state_31775[(2)]);
var inst_31754 = [];
var inst_31755 = inst_31754.push(inst_31739);
var inst_31733 = inst_31754;
var inst_31734 = inst_31743;
var state_31775__$1 = (function (){var statearr_31793 = state_31775;
(statearr_31793[(7)] = inst_31733);

(statearr_31793[(11)] = inst_31755);

(statearr_31793[(8)] = inst_31734);

(statearr_31793[(12)] = inst_31753);

return statearr_31793;
})();
var statearr_31794_33980 = state_31775__$1;
(statearr_31794_33980[(2)] = null);

(statearr_31794_33980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (9))){
var inst_31733 = (state_31775[(7)]);
var inst_31751 = cljs.core.vec(inst_31733);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31775__$1,(11),out,inst_31751);
} else {
if((state_val_31776 === (5))){
var inst_31734 = (state_31775[(8)]);
var inst_31739 = (state_31775[(9)]);
var inst_31743 = (state_31775[(10)]);
var inst_31743__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31739) : f.call(null,inst_31739));
var inst_31744 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31743__$1,inst_31734);
var inst_31745 = cljs.core.keyword_identical_QMARK_(inst_31734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31746 = ((inst_31744) || (inst_31745));
var state_31775__$1 = (function (){var statearr_31795 = state_31775;
(statearr_31795[(10)] = inst_31743__$1);

return statearr_31795;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31796_33990 = state_31775__$1;
(statearr_31796_33990[(1)] = (8));

} else {
var statearr_31797_33991 = state_31775__$1;
(statearr_31797_33991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (14))){
var inst_31768 = (state_31775[(2)]);
var inst_31769 = cljs.core.async.close_BANG_(out);
var state_31775__$1 = (function (){var statearr_31799 = state_31775;
(statearr_31799[(13)] = inst_31768);

return statearr_31799;
})();
var statearr_31805_33992 = state_31775__$1;
(statearr_31805_33992[(2)] = inst_31769);

(statearr_31805_33992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (10))){
var inst_31758 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31806_33993 = state_31775__$1;
(statearr_31806_33993[(2)] = inst_31758);

(statearr_31806_33993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (8))){
var inst_31733 = (state_31775[(7)]);
var inst_31739 = (state_31775[(9)]);
var inst_31743 = (state_31775[(10)]);
var inst_31748 = inst_31733.push(inst_31739);
var tmp31798 = inst_31733;
var inst_31733__$1 = tmp31798;
var inst_31734 = inst_31743;
var state_31775__$1 = (function (){var statearr_31809 = state_31775;
(statearr_31809[(7)] = inst_31733__$1);

(statearr_31809[(8)] = inst_31734);

(statearr_31809[(14)] = inst_31748);

return statearr_31809;
})();
var statearr_31810_33996 = state_31775__$1;
(statearr_31810_33996[(2)] = null);

(statearr_31810_33996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28771__auto__ = null;
var cljs$core$async$state_machine__28771__auto____0 = (function (){
var statearr_31819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31819[(0)] = cljs$core$async$state_machine__28771__auto__);

(statearr_31819[(1)] = (1));

return statearr_31819;
});
var cljs$core$async$state_machine__28771__auto____1 = (function (state_31775){
while(true){
var ret_value__28772__auto__ = (function (){try{while(true){
var result__28773__auto__ = switch__28770__auto__(state_31775);
if(cljs.core.keyword_identical_QMARK_(result__28773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28773__auto__;
}
break;
}
}catch (e31840){var ex__28774__auto__ = e31840;
var statearr_31841_33997 = state_31775;
(statearr_31841_33997[(2)] = ex__28774__auto__);


if(cljs.core.seq((state_31775[(4)]))){
var statearr_31842_33998 = state_31775;
(statearr_31842_33998[(1)] = cljs.core.first((state_31775[(4)])));

} else {
throw ex__28774__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33999 = state_31775;
state_31775 = G__33999;
continue;
} else {
return ret_value__28772__auto__;
}
break;
}
});
cljs$core$async$state_machine__28771__auto__ = function(state_31775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28771__auto____1.call(this,state_31775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28771__auto____0;
cljs$core$async$state_machine__28771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28771__auto____1;
return cljs$core$async$state_machine__28771__auto__;
})()
})();
var state__29017__auto__ = (function (){var statearr_31843 = f__29016__auto__();
(statearr_31843[(6)] = c__29014__auto___33960);

return statearr_31843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29017__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
