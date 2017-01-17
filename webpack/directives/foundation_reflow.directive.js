'use strict';

import angular from 'angular';


let foundationReflow = ($timeout, $document) => {
  /* @ngInject */
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      if(!$scope.$index || $scope.$last) {
        $timeout(() => {
          if (angular.element($document).foundation && $attrs.foundationReflow.length) {
            let elem = angular.element(`#${$attrs.foundationReflow}`);
            elem.foundation();
          }
        }, 0);
      }
    }
  };
};

foundationReflow.$inject = ['$timeout', '$document'];

export default foundationReflow;
