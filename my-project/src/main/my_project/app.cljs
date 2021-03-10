(ns my-project.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    ))

(def current-value (r/atom "0"))

(def saved_value (r/atom 0))

(def saved_func (r/atom 0))


(defn update_current [val]
      (js/console.log "update_current " val " " @current-value)
      (if
        (= "0" @current-value)
        (do
          (reset! current-value val)
          (js/console.log "val")
          )
        (do
          (js/console.log "@current-value")
          (js/console.log (str @current-value val))
          (reset! current-value (str @current-value val))
          )
        )
      )


(defn save_value [_]
      (reset! saved_value (cljs.reader/read-string @current-value))
      (js/console.log "Saved value " @saved_value)
      (reset! current-value "0")
      )

(defn save_function [func]
      (js/console.log "save_function " func)
      (save_value func)
      (reset! saved_func func)
      )

(defn do_shit [_]
      (js/console.log "Shit happens")

      )

(defn mini-app []
      [:table {:border "1"}
       [:tbody
        [:tr
         [:td {:colspan "3"} [:input#result {:readonly "" :type "text" :value @current-value}]]
         [:td [:input {:type "button" :value "c" :on-click #(reset! current-value "0")}]]]
        [:tr
         [:td [:input {:type "button" :value "1" :on-click #(update_current "1")}]]
         [:td [:input {:type "button" :value "2" :on-click #(update_current "2")}]]
         [:td [:input {:type "button" :value "3" :on-click #(update_current "3")}]]
         [:td [:input {:type "button" :value "/" :on-click #(save_function "/")}]]]
        [:tr
         [:td [:input {:type "button" :value "4" :on-click #(update_current "4")}]]
         [:td [:input {:type "button" :value "5" :on-click #(update_current "5")}]]
         [:td [:input {:type "button" :value "6" :on-click #(update_current "6")}]]
         [:td [:input {:type "button" :value "-" :on-click #(save_function "-")}]]]
        [:tr
         [:td [:input {:type "button" :value "7" :on-click #(update_current "7")}]]
         [:td [:input {:type "button" :value "8" :on-click #(update_current "8")}]]
         [:td [:input {:type "button" :value "9" :on-click #(update_current "9")}]]
         [:td [:input {:type "button" :value "+" :on-click #(save_function "+")}]]]
        [:tr
         [:td [:input {:type "button" :value "." :on-click #(update_current ".")}]]
         [:td [:input {:type "button" :value "0" :on-click #(update_current "0")}]]
         [:td [:input {:type "button" :value "=" :on-click #(do_shit "0") }]]
         [:td [:input {:type "button" :value "*" :on-click #(save_function "+")}]]]]]
      )

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))

(defn add [a b]
      (+ a b))

(defn rewrite [val]
      [:h2 val]
      )

