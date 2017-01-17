'use strict';

// vendor module imports
import jQuery from 'jquery';
import $ from 'jquery';

window.jQuery = window.$ = jQuery;

import 'foundation-sites'
import 'foundation-sites/scss/foundation.scss';

import angular from 'angular';
import ngAnimate from 'angular-animate';

// custom module imports
import {default as AppComponent} from './app.component';
import {default as Components} from './components/components';
import {default as Directives} from './directives/directives';
import {default as Services} from './services/services';
import {default as Factories} from './factories/factories';
import './styles/main.scss';

let app = angular.module('HiLoApp', [ngAnimate, Components.name, Directives.name, Services.name, Factories.name])

app.directive('app', AppComponent);

jQuery(document).foundation();
