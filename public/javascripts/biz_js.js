/* Bizr's JS */

/* Count tracker in show issue page, ex: Bug, Q&A, Bug review code, ... */
function countTracker() {
  //trackers allow to count subtasks
  var ticketAllow = ["5", "6", "7", "8", "10", "11"];
  //trackers counted
  var trackerCount = {1: "Bug", 2: "Q&A", 3: "Bug Review Code", 4: "Bug Review TC", 5: "Bug UAT"};

  var trackerId = $("#trackerId").val();
  var staText = [];
  if ($.inArray(trackerId, ticketAllow) > 0) {
    $.each(trackerCount, function(key, value) {
      //var c = $("#issue_tree").find("tr.tracker-" + key).length;//include Rejected status
      var c = countValidStatus(key);//ignore Rejected status
			if (c > 0) {
        staText.push(value + ": " + c);
      }
    });
    if (staText.length > 0) {
    $("#statistical").html("Statistic: " + staText.join(", ")).css({"display":"", "color":"red", "font-weight":"bold"});
    }
  }
}
function countValidStatus(key) {
  var count = 0;
  $($("#issue_tree").find("tr.tracker-" + key)).each(function(index) {
    if ("Rejected" != $(this).find("td.status").html()) {
      count++;
    }
  });
  return count;
}
$(document).ready(function() {
  countTracker();
});