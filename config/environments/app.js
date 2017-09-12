
const app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http){
    this.message = "hi, I am from the controller"
    this.notices = [];
    this.formdata = {};
    this.URL = 'https://noticeboardapiapp.herokuapp.com/notices'
    //make ajax request
    $http({
      method: 'GET',
      url: this.URL
    }).then(response => {

         console.log(response.data);
         this.notices = response.data

  })
    .catch(err => console.log(err));

    this.processForm = () => {
          console.log('process form is running')
          console.log(this.formdata)
          //test form before building
          $http({
            method: 'POST',
            url: this.URL,
            data: this.formdata
            //the data is what we want to send
          }).then(response => {
            console.log(response);
            this.notices.unshift(response.data)
          })
          .catch(err => console.log(err));
    }

}]);
