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

## $(selector) ##
Return element(s) which matched by selector

Usage:

`$("div span h1")`
## .text() ##
Changes text in element

Usage:

`$("#nav").text("Text here")`
## .html() ##
Changes html in element

Usage:

`$("#nav").html("<h1>H</h1><h2>TML</h2>")`
## .hide() ##
Hides element

Usage:

`$(".footer").hide()`
## .show() ##
Shows element

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