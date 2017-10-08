var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
    $scope.messages=[
    {'sender':'USER',
    'text':'Hi',
    'time':'10:01 AM'
    },
    {'sender':'BOT',
        'text':'Hi',
        'time':'10:02 AM'
    },
    {'sender':'USER',
            'text':'Hello',
            'time':'10:03 AM'
    }]
});
