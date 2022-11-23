var UserProfile = (function() {
    var info = {};
  
    var getInfo = function() {
      return info;    // Or pull this from cookie/localStorage
    };
  
    var setInfo = function(userInfo) {
      info = userInfo;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getInfo: getInfo,
      setInfo: setInfo
    }
  
})();
  
  export default UserProfile;