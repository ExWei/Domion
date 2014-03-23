Domion
======

A JavaScript DOM manipulation library.

Domino designed as fast JavaScript library for DOM manipulation with jQuery like syntax.

Installation
============

 1. Download domion.min.js from release folder.
 2. Move it to some folder in in your project (e.g. in js/)
 3. Inject this code to your page in header:
`<script src="js/domino.min.js"></script`

----------

API
===

## $() ##
Return element(s) which matched by selector

Usage:

`$("div span h1")`
## .text() ##
Changes text in element(s)

Usage:

`$("#nav").text("Text here")`
## .html() ##
Changes html in element(s)

Usage:

`$("#nav").html("<h1>H</h1><h2>TML</h2>")`
## .addClass() ##
Adds class to element(s)

Usage:

`$("div").addClass("intro")`
## .hide() ##
Hides element(s)

Usage:

`$(".footer").hide()`
## .show() ##
Shows element(s)

Usage:

`$(".footer").show()`
## .after() ##
Insert html after element

Usage:

`$("body").after("<p>HTML Here</p>")`
## .before() ##
Insert html before element

Usage:

`$("body").before("<p>HTML Here</p>")`
## .append() ##
Append element to selected element

Usage:

`var elem = document.createElement("marquee");
elem.text("Text here");
$("body").append(elem);`
## .children() ##
Returns children of selected element

Usage:

`$("body").children()`
## .clone() ##
Returns clone of selected element

Usage:

`$("body").clone()`
## .empty() ##
Empty selected element(s)

Usage:

`$("body").empty()`
## .attr() ##
Returns attribute value of selected element

Usage:

`$("body").attr("onload")`
## .css() ##
Returns css value of property of selected element

Usage:

`$("body").css("overflow")`
## .each() ##
forEach for elements

Usage:

`$("div").each(function(elem) {
    elem.text("This is a div");
})`

## .toggle() ##
Toggle hide-show for element(s)

Usage:

`$("div").toggle()`

## .last() ##
Return last element from elements list (NodeList)

Usage:

`$("div").last()`
## .first() ##
Return first element from elements list (NodeList)

Usage:

`$("div").first()`
## .size() ##
Return count of elements in NodeList

Usage:

`$("div").size()`
## .removeClass() ##
Removes class from element(s)

Usage:

`$("div").removeClass("intro")`
## .hasClass() ##
Return true if selected element contains specified class, false if not contains.

Usage:

`$("div").first().hasClass("intro")`
## .ajax() ##
Creates Ajax request

Usage:

`$.ajax({
     method: "GET",
     url: "/users.json",
     function (request) {
         var responseText = request.responseText;
         console.log(responseText);
     }
 })`

 ## .get() ##
 Creates Ajax request with GET method

 Usage:

 `$.get({
      url: "/users.json",
      data: {foo: 1, bar: 2}
      function (request) {
          var responseText = request.responseText;
          console.log(responseText);
      }
  })`

 ## .toParam() ##
Creates parameters string from object

 Usage:

`$.toParam({"foo": "bar", "bar":"foo"})`