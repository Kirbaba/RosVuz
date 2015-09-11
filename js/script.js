/*
 * Created with Sublime Text 2.
 * User: song.chen
 * Date: 2015-09-11
 * Time: 13:37:45
 * Contact: song.chen@qunar.com
 */
/*
 * Created with Sublime Text 2.
 * User: song.chen
 * Date: 2015-09-11
 * Time: 12:52:47
 * Contact: song.chen@qunar.com
 */


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

    $('.audience').click(function() {
      $(".showMap").slideToggle('slow', function(){
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize";
        document.body.appendChild(script);  
      });         
    });

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

/*-------------GOOGLE MAPS-----------------*/

function initialize() {

    var myLatlng = new google.maps.LatLng(55.662561,37.540873);
    var mapOptions = {
        center: new google.maps.LatLng(55.662561,37.540873),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var contentString = '<div id="siteNotice">'+ '<p>г. Москва, ул. Нахимсона д. 65,</br> строение №3, аудитория №103а</p>'
      +'</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);    
    var image = '../img/map_icon.png';
    var myLatLng = new google.maps.LatLng(55.662561,37.540873);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
    beachMarker.addListener('click', function() {
    infowindow.open(map, beachMarker);
  });
}

// function loadScript() {
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
//     document.body.appendChild(script);
// }

window.onload = loadScript;
