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
      ))

(defn add2history [val]
      (do
        (swap! history #(conj % [:li val ]))
      ))

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
          )))

(defn save_value []
      (reset! saved_value (cljs.reader/read-string @current-value))
      (add2history @saved_value)
      (js/console.log "Saved value " @saved_value)
      (reset! current-value "0")
      )

(defn calculate_pressed []
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

(defn reset_all []
     (reset! current-value "0")
     (reset! saved_value nil)
     (reset! saved_func nil)
     (reset! result nil)
      )

(defn reset_history []
      (reset! history ["nil"]))

(defn create_history []
      [:div.container [:h3 "History" ] [:div#my_his.history
           [:div#his1.alert.alert-success {:role "alert"}
            [:ul#listig
             @history
             ]]]]
      )

(defn add_history [message]
        ((.html (js/jQuery "#listig") "Hi!")))

(defn function_pressed [func]
      (if (nil? @saved_func)
        (do
          (save_value)
          (add2history func)
          (reset! saved_func func)
          )
        ;else
        (do
          (js/console.log "We have an else " )
          (reset! saved_func func)
          (add2history func)
          (calculate_pressed)
          )
        )
      )

(defn numberbttn [my_value]
      [:td {:id (#(str "tr_" %) my_value)} [:button.btn.btn-dark {:id #(str "id_" %) my_value) :type "button" :on-click #(update_current (str my_value))} my_value]]
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
               [:td [:button.btn.btn-dark {:type "button" :on-click #(reset_all)} "c"]]]
              [:tr
               (map numberbttn (range 1 4))
               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "/")} "/"]]]

              [:tr
               (map numberbttn (range 4 7))

               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "-")} "-"]]]

              [:tr
               (map numberbttn (range 7 10))

               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "+")} "+"]]]

              [:tr
               [:td [:button.btn.btn-dark {:type "button" :on-click #(update_current ".")} "."]]
               (numberbttn 0)
               [:td [:button.btn.btn-dark {:type "button" :on-click #(calculate_pressed)} "="]]
               [:td [:button.btn.btn-dark {:type "button" :on-click #(function_pressed "*")} "*"]]]
              ]
             ]
            (create_history)
            ]
           )

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))

(defn add [a b]
      (+ a b))
