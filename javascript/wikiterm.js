$(document).ready(function() {
  var WikiTerms = function() {
    var special = {
      c            : "C_(programming_language)",
      gcc          : "GNU_Compiler_Collection",
      vim          : "vim_(text_editor)",
      program      : "Computer_program",
      instruction  : "Instruction_(computer_science)",
      instructions : "Instruction_(computer_science)",
      preprocessor : "C_preprocessor"
    };

    this.wikify = function() {
      $("a.wikiterm").each(function(elem) {

        var url = $(this).data("url") || $(this).html().replace(" ", "_");

        url = special[url.toLowerCase()] || url;

        $(this).attr("href", "http://en.wikipedia.org/wiki/" + url);
        $(this).attr("target", "_blank");
      });
    };
  };
  
  (new WikiTerms()).wikify();
});