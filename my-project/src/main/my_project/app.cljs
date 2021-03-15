(ns my-project.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [cljs.reader :as readder]
    [clojure.browser.dom :as dom]
    ))

(def current-value (r/atom "0"))

(def saved_value (r/atom nil))

(def saved_func (r/atom nil))

(def result (r/atom nil))

(def history (r/atom ["nil"]))

(defn logitall []
      (do
         (js/console.log "current-value: " @current-value)
         (js/console.log "saved_value: " @saved_value)
         (js/console.log "saved_func: " @saved_func)
         (js/console.log "result: " @result)
      )
      )

(defn add2history [val]
      (do
        (swap! history #(conj % [:li val ]))
        )
)

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
      (add2history @saved_value)
      (js/console.log "Saved value " @saved_value)
      (reset! current-value "0")
      )

(defn calculate_pressed [_]
      (
        let [
             mmap {"/" /, "+" +, "*" *, "-" -},
             new_value (cljs.reader/read-string @current-value),
             calculated ((mmap @saved_func) @saved_value new_value),
             ]
            (add2history new_value)
            (add2history (str @saved_value " " @saved_func " "  new_value " = " calculated))

            (reset! current-value (str calculated))
            (reset! saved_value nil)
            (reset! saved_func nil)
            (logitall )
            )
      )

(defn reset_all [_]
      (do
       (reset! current-value "0")
       (reset! saved_value nil)
       (reset! saved_func nil)
       (reset! result nil)
       )
      )

(defn function_pressed [func]
      (.log js/console "pressed")
      (if (nil? @saved_func)
        (do
          (save_value func)
          (add2history func)
          (reset! saved_func func)
          )
        ;else
        (do
          (reset! saved_func func)
          (add2history func)
          (calculate_pressed :denne_plads_er_med_vilje_tom)
          )
        )
      )

(defn numberbttn [my_value]
      [:td [:button.btn.btn-dark {:id my_value :type "button" :on-click #(update_current (str my_value))} my_value]]
      )

(defn mini-app []
           [:div.container
            [:div.container
             [:p.h1 "Lommeregner"]
             ]
            [:table.table.table-bordered
             [:tbody
              [:tr
               [:td {:colspan "3"}
                [:div.input-group.mb-3
                 [:input.form-control
                  {:type "text" :placeholder @current-value }
                  ]]
                ]
               [:td [:button.btn.btn-dark {:type "button" :on-click #(reset_all "0")} "c"]]]
              [:tr

               (numberbttn 1)
               (numberbttn 2)
               (numberbttn 3)
               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "/")} "/"]]]

              [:tr
               (numberbttn 4)
               (numberbttn 5)
               (numberbttn 6)
               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "-")} "-"]]]

              [:tr
               (numberbttn 7)
               (numberbttn 8)
               (numberbttn 9)
               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "+")} "+"]]]

              [:tr
               [:td [:button.btn.btn-dark {:type "button" :on-click #(update_current ".")} "."]]
               (numberbttn 0)
               [:td [:button.btn.btn-dark {:type "button" :on-click #(calculate_pressed "0")} "="]]
               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "*")} "*"]]]
              ]
             ]
            [:h2.small "History"]
            [:div#my_his.history
             [:div.alert.alert-success {:role "alert"}
              @history
              ]
             ]
            ]
           )

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))

(defn add [a b]
      (+ a b))
