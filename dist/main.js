(()=>{"use strict";document.getElementById("buttonList").addEventListener("click",(function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){if(t.ok)return t.json();throw new Error("Request failed")})).then((function(t){var e=document.getElementById("result");t.forEach((function(t){var n=document.createElement("li");n.textContent=JSON.stringify(t,null,2),e.appendChild(n)}))})).catch((function(t){console.log(t)}))})),document.getElementById("getPostByIdButton").addEventListener("click",(function(){fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(t){if(t.ok)return t.json();throw new Error("Request failed")})).then((function(t){document.getElementById("result").textContent=JSON.stringify(t)})).catch((function(t){console.log(t)}))})),document.getElementById("createPostButton").addEventListener("click",(function(){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar"}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((t=>t.json())).then((t=>console.log(t)))})),document.getElementById("removePostButton").addEventListener("click",(function(){fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE"})}))})();