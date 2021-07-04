/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

 document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#b2b2b2',
      lineColor: '#b2b2b2',
      density:10000
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - 475 + 'px';
  }, false);
  
  
  /*
  // jQuery plugin example:
  $(document).ready(function() {
    $('#particles').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    $('.intro').css({
      'margin-top': -($('.intro').height() / 2)
    });
  });
  */