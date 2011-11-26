$(document).ready(function() {
  $("a.wikiterm").each(function(elem) {
    var url = $(this).data("url") || $(this).html();
    $(this).attr("href", "http://en.wikipedia.org/wiki/" + url);
    $(this).attr("target", "_blank");
  });
});