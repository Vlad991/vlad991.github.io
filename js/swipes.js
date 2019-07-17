var leftSwipe = function () {
	var portraitFoto1 = doc.getElementById("portrait-foto-1");
	var portraitFoto2 = doc.getElementById("portrait-foto-2");
	var portraitFoto3 = doc.getElementById("portrait-foto-3");
	var lettering1 = doc.getElementById("lettering-1");
	var lettering2 = doc.getElementById("lettering-2");
	var lettering3 = doc.getElementById("lettering-3");
	var control1 = doc.getElementById("controls-item-1");
	var control2 = doc.getElementById("controls-item-2");
	var control3 = doc.getElementById("controls-item-3");

	if (getComputedStyle(portraitFoto2).display != "none") {
		portraitFoto2.classList.add("portrait-foto_hide");
		portraitFoto1.classList.remove("portrait-foto_hide");
		lettering2.classList.add("lettering_hide");
		lettering1.classList.remove("lettering_hide");
		control2.classList.remove("article-controls__item_current");
		control1.classList.add("article-controls__item_current");
	} else if (getComputedStyle(portraitFoto3).display != "none") {
		portraitFoto3.classList.add("portrait-foto_hide");
		portraitFoto2.classList.remove("portrait-foto_hide");
		lettering3.classList.add("lettering_hide");
		lettering2.classList.remove("lettering_hide");
		control3.classList.remove("article-controls__item_current");
		control2.classList.add("article-controls__item_current");
	}
}

var rightSwipe = function () {
	var portraitFoto1 = doc.getElementById("portrait-foto-1");
	var portraitFoto2 = doc.getElementById("portrait-foto-2");
	var portraitFoto3 = doc.getElementById("portrait-foto-3");
	var lettering1 = doc.getElementById("lettering-1");
	var lettering2 = doc.getElementById("lettering-2");
	var lettering3 = doc.getElementById("lettering-3");
	var control1 = doc.getElementById("controls-item-1");
	var control2 = doc.getElementById("controls-item-2");
	var control3 = doc.getElementById("controls-item-3");

	if (getComputedStyle(portraitFoto2).display != "none") {
		portraitFoto2.classList.add("portrait-foto_hide");
		portraitFoto3.classList.remove("portrait-foto_hide");
		lettering2.classList.add("lettering_hide");
		lettering3.classList.remove("lettering_hide");
		control2.classList.remove("article-controls__item_current");
		control3.classList.add("article-controls__item_current");
	} else if (getComputedStyle(portraitFoto1).display != "none") {
		portraitFoto1.classList.add("portrait-foto_hide");
		portraitFoto2.classList.remove("portrait-foto_hide");
		lettering1.classList.add("lettering_hide");
		lettering2.classList.remove("lettering_hide");
		control1.classList.remove("article-controls__item_current");
		control2.classList.add("article-controls__item_current");
	}
}