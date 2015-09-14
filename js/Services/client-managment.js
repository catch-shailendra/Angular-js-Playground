 
App.service('ClientServices',['$http','config',function($http,config) { 
      var self = this; // Save reference
     
      self.SaveClient = function(FormData) {
    	return $http({
        	method:'POST',
        	url:config.apiPath,
        	header:config.header,
        	data:FormData
         })
       }
      
      self.getClient = function(clientId){
    	  return $http({
        	method:'POST',
        	url:config.apiPath,
        	header:config.header,
        	data:{'action':'getClient','clientId':clientId}
         })    	  
      }
      
      self.deleteClient = function(clientId){
    	  return $http({
        	method:'POST',
        	url:config.apiPath,
        	header:config.header,
        	data:{'action':'deleteClient','clientId':clientId}
         })    	  
      }
      
      self.getContries = function(){
    	  return $http.post(config.urlpath)
      }
      
    }]);