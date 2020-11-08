function loadChange1() {
  var xhr = new XMLHttpRequest();
  var change1 = document.getElementById("change1");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      change1.innerHTML = xhr.responseText;
    }
  };

  xhr.open("get", "change1.html");
  xhr.send();
}

function loadChange2() {
  var xhr = new XMLHttpRequest();
  var change2 = document.getElementById("change2");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      change2.innerHTML = xhr.responseText;
    }
  };

  xhr.open("get", "change2.html");
  xhr.send();
}

function loadChange3() {
  var xhr = new XMLHttpRequest();
  var change3 = document.getElementById("change3");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      change3.innerHTML = xhr.responseText;
    }
  };

  xhr.open("get", "change3.html");
  xhr.send();
}

function loadChange4() {
  var xhr = new XMLHttpRequest();
  var change4 = document.getElementById("change4");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      change4.innerHTML = xhr.responseText;
    }
  };

  xhr.open("get", "change4.html");
  xhr.send();
}
