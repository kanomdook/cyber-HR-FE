(function ()
{
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos,$scope)
    {
        var vm = this;

        // Data
        vm.posts = Timeline.posts;
        vm.activities = Timeline.activities;
        vm.about = About.data;
        vm.photosVideos = PhotosVideos.data;

        // Methods

        //////////
        $scope.OtherInfo = {
            WorkCountryOI:"True",
            WorkCountryDescOI:"Yes",
            FirtNameOI:"Intarawat",
            LastNameOI:"Supalurcrattana",
           RelatedOI:"brother",
           AddressOI:"139/103 พหลโยธิน52 แขวงคลองถนน เขตสายไหม กทม.10220",
           TelOI:"0879815433",
           SourceInfoOI:"newpaper",
           ContagiousFlagOI:"True",
           ContagiousDescOI:"False",
           FirstNameWorkRelativeOI:"Attapon",
           LastNameWorkRelativeOI:"phongam",
           IntroduceYoureSelfOI:" my name is Nipaphon Jantatep Age 23 years old"
           
        }
    }

})();
