'use strict';

$('#randomArticle').click(function () {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
});

$('#search').click(function () {

  var input = $('#userInput').val();

  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&smaxage=0&callback=?&profile=fuzzy";

  $.ajax({
    type: "GET",
    url: url,
    async: false,
    dataType: "json",
    success: function success(data) {
      $('#results').html("");
      for (var i = 0; i < data[1].length; i++) {
        $('#results').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
      }
    },
    error: function error(errorMsg) {
      alert("Whoops! Something went wrong");
    }
  });
});