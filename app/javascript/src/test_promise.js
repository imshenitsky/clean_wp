const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("This is ES6 promise."); }, 5000);
});

myPromise.then(function(value) {
  document.getElementById("promise").innerHTML = value;
});
