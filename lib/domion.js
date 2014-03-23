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

    // Return element

    return function(query) {
        return document.querySelector(query);
    };
};
var domion = new Domion();

window.Domion = domion;
window.$ = domion;