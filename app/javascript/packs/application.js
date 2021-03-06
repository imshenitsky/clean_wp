// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "@fortawesome/fontawesome-free/css/all"
import "bootstrap-datepicker"

Rails.start()
Turbolinks.start()

require.context('../images', true)

// Import styling manifest file
import 'styles/application'

// Import bootstrap js
import './bootstrap'

// Import ES6 pack file
import './test_promise'

import './wice_grid'