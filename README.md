# reg2str
RegExp to string, the default regexp.toString() will output a different string in nodejs and iojs/chrome.  


reg2str - output all RegExp's string like iojs/chrome in all javascript enviroment.  

io.js & chrome
--------------

```javascript
new RegExp('/').toString() ==> "/\//"
a ＝ '\\'                  ==> string literal: '\'
a.length                   ==> 1
```

nodejs
--------------

```javascript
new RegExp('/').toString() ==> "///"
a ＝ '\\'                  ==> string literal: '\\'
a.length                   ==> 1
```

reg2str
-------------
reg2str(new RegExp('/')) ==> "/\//"
