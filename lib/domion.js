var Domion = function() {

    // Extensions

    Element.prototype.text = function(text) {
        if (this.innerText !== undefined) {
            this.innerText = text;
        } else {
            this.textContent = text;
        }
    };

    Element.prototype.html = function(html) {
        this.innerHTML = html;
    };

    Element.prototype.addClass = function(_class) {
        if (this.classList) {
            this.classList.add(_class);
        } else {
            this.className += ' ' + _class;
        }
    };

    Element.prototype.hide = function() {
        this.style.display = "none";
    };

    Element.prototype.show = function() {
        this.style.display = 'inherit';
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
        if (this instanceof NodeList === true) {
            this.each(function (elem) {
                if (elem.css("display") == "none") {
                    elem.show();
                } else {
                    elem.hide();
                }
            })
        } else {
            if (this.css("display") == "none") {
                this.show();
            } else {
                this.hide();
            }
        }
    };

    NodeList.prototype.toggle = Element.prototype.toggle;

    // Return element

    return function(query) {
        return document.querySelectorAll(query);
    };
};
var domion = new Domion();

window.Domion = domion;
window.$ = domion;