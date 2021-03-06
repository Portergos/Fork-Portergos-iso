/*
##
##	Enhancer for YouTube™ | Opera Extension
##	=======================================
##
##	Author: Maxime RF <https://www.mrfdev.com>
##
##	This file is protected by copyright laws and international copyright
##	treaties, as well as other intellectual property laws and treaties.
##
##	All rights not expressly granted to you are retained by the author.
##	Read the license.txt file for more details.
##
##	If it's not enough clear for you Baris Derin, you have no rights to use my work,
##	neither as-is nor modified! Improve your coding logic instead of using others work!
##
##	© MRFDEV.com - All Rights Reserved
##
*/
(function() {
	var h = {
		blur: 0,
		brightness: 100,
		contrast: 100,
		grayscale: 0,
		huerotate: 0,
		invert: 0,
		saturate: 100,
		sepia: 0
	};
	chrome.storage.local.get(h, function(d) {
		function g() {
			clearTimeout(k);
			var a = this.name;
			d[a] = parseInt(this.value, 10);
			this.nextElementSibling.textContent = d[a];
			k = setTimeout(function() {
				var a = [];
				0 < d.blur && a.push("blur(" + d.blur + "px)");
				100 !== d.brightness && a.push("brightness(" + d.brightness + "%)");
				100 !== d.contrast && a.push("contrast(" + d.contrast + "%)");
				0 < d.grayscale && a.push("grayscale(" + d.grayscale + "%)");
				0 < d.huerotate && a.push("hue-rotate(" + d.huerotate + "deg)");
				0 < d.invert && a.push("invert(" + d.invert + "%)");
				100 !== d.saturate && a.push("saturate(" + d.saturate + "%)");
				0 < d.sepia && a.push("sepia(" + d.sepia + "%)");
				d.filter = 0 < a.length ? a.join(" ") : "none";
				chrome.storage.local.set(d)
			}, 50)
		}
		var f = document.createElement("div"),
			b = document.createElement("div"),
			c = document.createElement("button"),
			a, e, k;
		f.id = "enhancer-for-youtube-filters";
		c.className = "close";
		c.addEventListener("click", function() {
			f.classList.add("hidden")
		});
		b.appendChild(c);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "blur");
		c.textContent = chrome.i18n.getMessage("gaussian_blur");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "blur";
		a.min = 0;
		a.max = 50;
		a.step = 1;
		a.dataset["default"] = 0;
		a.value = d.blur;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.blur;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "brightness");
		c.textContent = chrome.i18n.getMessage("brightness");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "brightness";
		a.min = 0;
		a.max = 200;
		a.step = 1;
		a.dataset["default"] = 100;
		a.value = d.brightness;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.brightness;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "contrast");
		c.textContent = chrome.i18n.getMessage("contrast");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "contrast";
		a.min = 0;
		a.max = 200;
		a.step = 1;
		a.dataset["default"] = 100;
		a.value = d.contrast;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.contrast;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "grayscale");
		c.textContent = chrome.i18n.getMessage("grayscale");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "grayscale";
		a.min = 0;
		a.max = 100;
		a.step = 1;
		a.dataset["default"] = 0;
		a.value = d.grayscale;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.grayscale;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "huerotate");
		c.textContent = chrome.i18n.getMessage("hue_rotation");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "huerotate";
		a.min = 0;
		a.max = 360;
		a.step = 1;
		a.dataset["default"] = 0;
		a.value = d.huerotate;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.huerotate;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "invert");
		c.textContent = chrome.i18n.getMessage("color_inversion");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "invert";
		a.min = 0;
		a.max = 100;
		a.step = 1;
		a.dataset["default"] = 0;
		a.value = d.invert;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.invert;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "saturate");
		c.textContent = chrome.i18n.getMessage("saturation");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "saturate";
		a.min = 0;
		a.max = 200;
		a.step = 1;
		a.dataset["default"] = 100;
		a.value = d.saturate;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.saturate;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("label");
		c.setAttribute("for", "sepia");
		c.textContent = chrome.i18n.getMessage("sepia");
		a = document.createElement("input");
		a.type = "range";
		a.id = a.name = "sepia";
		a.min = 0;
		a.max = 100;
		a.step = 1;
		a.dataset["default"] = 0;
		a.value = d.sepia;
		a.addEventListener("input", g);
		e = document.createElement("span");
		e.textContent = d.sepia;
		b = document.createElement("div");
		b.appendChild(c);
		b.appendChild(a);
		b.appendChild(e);
		f.appendChild(b);
		c = document.createElement("a");
		c.className = "reset";
		c.href = "#";
		c.textContent = chrome.i18n.getMessage("reset_filters");
		c.addEventListener("click", function(a) {
			a.preventDefault();
			"#blur #brightness #contrast #grayscale #huerotate #invert #saturate #sepia".split(" ").forEach(function(a) {
				a = f.querySelector(a);
				a.value = a.dataset["default"];
				a.dispatchEvent(new CustomEvent("input"))
			})
		});
		b = document.createElement("div");
		b.appendChild(c);
		f.appendChild(b);
		document.querySelector("#enhancer-for-youtube-filters") || (document.body.appendChild(f), document.querySelector("#enhancer-for-youtube-toolbar i.filters").parentNode.setAttribute("ui", ""), chrome.runtime.onMessage.addListener(function(a, b, c) {
			"enhancerforyoutube:preference-changed" === a.message && "undefined" !== typeof h[a.name] && (b = f.querySelector("#" + a.name), parseInt(b.value, 10) !== a.value && (d[a.name] = a.value, b.value = a.value, b.nextElementSibling.textContent = a.value))
		}))
	})
})();