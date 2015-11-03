function getURL(URL) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', URL, true)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          resolve(xhr.responseText)
        } else {
          reject(new Error(xhr.status))
        }
      }
    }
    xhr.send()
  })
}

//test case
// http://httpbin.org/ : HTTP Request & Response Service
var URL = "http://httpbin.org/get"
getURL(URL).then(function(value){
    console.log(value)
}).catch(function(error){
    console.error(error)
});