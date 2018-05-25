(ns tcrfactory.ui.component.search-registries
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [tcrfactory.ui.element.inputs :refer [text-input]]
    [reagent.core :as re]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))

(defn search-form [form-data errors]
  [:div.search-form
   [:label {:text "Repo:"}
    [text-input {:form-data form-data
                 :errors errors
                 :id :term}]
    #_[:input {:type "text"
             :on-change (fn [e]
                          (let [value (aget e "target" "value")]
                            (reset! term-atom value)))}]
    ]])

(defn registry-line [data]
  ^{:key (:registry/address data)}
  [:div.line
   [:div.title
    (:registry/title data)]
   [:div.description
    (:registry/description data)]])

(defn registries-list [term]
  (let []
    (fn [form-data]
      (let [registries @(subscribe [::gql/query {:queries [[:search-registries
                                                           {:keyword term}
                                                           [:registry/title
                                                            :registry/description
                                                            :registry/address]]]}])]
        (println registries)
        [:div
         (when (:search-registries registries)
           [:div.registries
            (map (fn [line]
                   [registry-line line])
                 (:search-registries registries))
            ;; (str @registries)
            ])]))))

(defmethod page :route/search-registries []
  (let [form-data (re/atom {})
        errors (re/atom {})]
    (fn []
      [app-layout
       [:div (str "Search Registries: " (:term @form-data))]
       [search-form form-data errors]
       [registries-list (:term @form-data)]])))
