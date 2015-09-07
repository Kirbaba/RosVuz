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


