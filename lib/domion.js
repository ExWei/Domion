var Domion = function () {

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

    // Return element

    return function (query) {
        return document.querySelector(query);
    };
};
var domion = new Domion();

window.Domion = domion;
window.$ = domion;