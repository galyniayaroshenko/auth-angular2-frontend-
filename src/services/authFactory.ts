import { $http } from './xhrFactory';
import { AppSettings } from '../common/appSettings';
import { contentHeaders } from '../common/headers';
 
// export const AuthFactory = {
 
//   getAll : () => $http.get(`${AppSettings.HOST}/users`),
 
//   get: (id) => $http.get(`${AppSettings.HOST}users/` + id),
 
//   save: (user) => $http.post(`${AppSettings.HOST}/users`, user),
  
//   login : (user) => $http.post(`${AppSettings.HOST}/auth/loginByEmail`, user),
 
//   update: (user) => $http.put(`${AppSettings.HOST}/users` + user._id, user),
 
//   delete: (id) => $http.delete(`${AppSettings.HOST}/users` + id)
 
// };

export const AuthFactory = {
 
  getAll: function(){
  	return $http.get(`${AppSettings.HOST}/users`);
  },
 
  get: function(id){
  	return $http.get(`${AppSettings.HOST}users/`+id);
  },
 
  save: function(user){
  	return $http.post(`${AppSettings.HOST}/users`, user);
  },
  
  login: function(user){
  	return $http.post(`${AppSettings.HOST}auth/loginByEmail`, user);
  },
  
  update: function(user){
  	return $http.put(`${AppSettings.HOST}/users` + user._id, user);
  },
 
//   delete: function(id){
//       return $http.delete(`${AppSettings.HOST}users/` + id);
//     }
  
};