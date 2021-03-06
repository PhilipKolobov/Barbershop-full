var link = document.querySelector(".login-link");
		var popup = document.querySelector(".modal-login");
		var close = document.querySelector(".modal-close");
		var login = popup.querySelector(".login-icon-user");
		var form = popup.querySelector(".login-form");
		var password = popup.querySelector(".login-icon-password");
		
  
 

		link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		login.focus();
	    });

	    close.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	    });

	    form.addEventListener("submit", function (evt) {
    	if (!login.value || !password.value) {
      	evt.preventDefault();
      	popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      	popup.classList.add("modal-error");
    	} else {
      	localStorage.setItem("login", login.value);
    	}
  		});

  		window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });


  var mapLink = document.querySelector(".contacts-button-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

   mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });