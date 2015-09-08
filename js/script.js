$('#inputDate').DatePicker({ 
  date: $('#inputDate').val(),
  current: $('#inputDate').val(),
  starts: 0,
  onBeforeShow: function(){
    $('#inputDate').DatePickerSetDate($('#inputDate').val(), true);
  },
  onChange: function(formated, dates){
    $('#inputDate').val(formated);
    if ($('#closeOnSelect input').attr('checked')) {
      $('#inputDate').DatePickerHide();
    }
  }
});


$(document).ready(function(){
    $('input.timepicker').timepicker({
        timeFormat: 'HH:mm',
        // year, month, day and seconds are not important
        minTime: new Date(0, 0, 0, 7, 0, 0),
        maxTime: new Date(0, 0, 0, 18, 0, 0),
        // time entries start being generated at 6AM but the plugin 
        // shows only those within the [minTime, maxTime] interval
        startHour: 0,
        // the value of the first item in the dropdown, when the input
        // field is empty. This overrides the startHour and startMinute 
        // options
        startTime: new Date(0, 0, 0, 7, 0, 0),
        // items in the dropdown are separated by at interval minutes
        interval: 5
    });
});
