$("#general_choice").click(function(){
    $("#choice_panel").load('hazard_report.html');
    $('#left_choice_panel').hide();
    var marker_functions = $.getScript('js/marker_functions.js');
    $('#map_functions').append(marker_functions);
     });
