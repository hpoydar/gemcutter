$(document).ready(function() {
  var divs = "#flash_success, #flash_notice, #flash_error";
  $(divs).each(function() {
    humanMsg.displayMsg($(this).text());
    return false;
  });

  if(window.location.href.search(/query=/) == -1) {
    $("#query").click(function() {
      $(this).val("");
      $(this).unbind("click");
    });
    $(document).bind('keyup', function(e) {
      if ($(e.target).is(':input')) { return; }
      if (e.keyCode == '186') {
        $('#query').val('').focus();
      }
    });
  }
});
