(ns my-project.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(defn mini-app []
      [:h2 :hello-world])

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))

(defn add [a b]
      (+ a b))