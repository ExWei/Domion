var Domion = function() {

    // Extensions

    Element.prototype.text = function(text) {
        if (this.innerText !== undefined) {
            this.innerText = text;
        } else {
            this.textContent = text;
        }
    };

    NodeList.prototype.text = function(text) {
        this.each(function (elem) {
            elem.text(text);
        });
    };

    Element.prototype.html = function(html) {
        this.innerHTML = html;
    };

    NodeList.prototype.html = function(html) {
        this.each(function (elem) {
            elem.html(html);
        });
    };

    Element.prototype.addClass = function(_class) {
        if (this.classList) {
            this.classList.add(_class);
        } else {
            this.className += ' ' + _class;
        }
    };

    NodeList.prototype.addClass = function(_class) {
        this.each(function (elem) {
            elem.addClass(_class);
        });
    };

    Element.prototype.hide = function() {
        this.style.display = "none";
    };

    NodeList.prototype.hide = function() {
        this.each(function (elem) {
            elem.hide();
        });
    };

    Element.prototype.show = function() {
        this.style.display = 'inherit';
    };

    NodeList.prototype.show = function() {
        this.each(function (elem) {
            elem.show();
        });
    };

    Element.prototype.after = function(html) {
        this.insertAdjacentHTML('afterend', html);
    };

    Element.prototype.before = function(html) {
        this.insertAdjacentHTML('beforebegin', html);
    };

    Element.prototype.append = function(element) {
        this.appendChild(element);
    };

    Element.prototype.children = function() {
        return this.children;
    };

    Element.prototype.clone = function() {
        return this.cloneNode(true);
    };

    Element.prototype.empty = function() {
        this.html("");
    };

    NodeList.prototype.empty = function() {
        this.each(function (elem) {
            elem.empty();
        });
    };

    Element.prototype.attr = function(attr) {
        return this.getAttribute(attr);
    };

    Element.prototype.css = function(rule) {
        return getComputedStyle(this)[rule];
    };

    NodeList.prototype.each = function(functionForEach) {
        Array.prototype.forEach.call(this, functionForEach);
    };

    Element.prototype.toggle = function () {
        if (this.css("display") == "none") {
            this.show();
        } else {
            this.hide();
        }
    };

    NodeList.prototype.toggle = function () {
        this.each(function (elem) {
            elem.toggle();
        });
    };

    NodeList.prototype.last = function () {
        return this[this.length - 1];
    };

    NodeList.prototype.first = function () {
        return this[0];
    };

    NodeList.prototype.size = function () {
        return this.length;
    };

    Element.prototype.removeClass = function (_class) {
        this.className = this.className.replace(_class, "").replace("  ", " ");
    };

    NodeList.prototype.removeClass = function (_class) {
        this.each(function (elem) {
            elem.removeClass(_class);
        });
    };

    Element.prototype.hasClass = function (_class) {
        return new RegExp(_class).test(this.className);
    };

    // Return element

    Domion = function(query) {
        var selectAll = document.querySelectorAll(query);
        if (selectAll.length == 1) {
            return selectAll[0];
        } else {
            return selectAll;
        }
    };

    Domion.ajax = function (params, callback) {
        function getXmlHttp(){
            var xmlhttp;
            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (E) {
                    xmlhttp = false;
                }
            }
            if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
                xmlhttp = new XMLHttpRequest();
            }
            return xmlhttp;
        }

        var xmlhttp = getXmlHttp();

        xmlhttp.open(params.method, params.url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    callback(xmlhttp)
                }
            }
        };
        xmlhttp.send(null);
    };

    return Domion;
};
var domion = new Domion();

window.Domion = domion;
window.$ = domion;