///**
// * Created by dey8083 on 4/26/2017.
// */
//
///*
// Number guess game developed by Sridhar Karra
// Date = 1/16/2015
// */
//
//$(document).ready(function() {
//
//
//    var max_tries = 0;
//    var counter = 0;
//    var sum = 0;
//    var guess = 10;
//    var rand_num = Math.floor((Math.random() * 100));
//
//
//    function verifyNumber() {
//        document.getElementById("tries").disabled = true;
//        max_tries = document.getElementById("max_tries").value;
//        document.getElementById("tries").value = (max_tries - counter - 1);
//        document.getElementById("max_tries").disabled = true;
//        var val = document.getElementById('guess').value;
//        check_guess(rand_num, val);
//        //alert(rand_num);
//        console.log(rand_num);
//        if (guess !== 1) {
//            counter++;
//            if (counter >= Math.floor(max_tries / 2))
//                document.getElementById("tries").style.borderColor = 'red';
//            if (counter === max_tries) {
//                document.getElementById('resetBtn').style.visibility = "visible";
//                $('#lost').collapse('toggle');
//                document.getElementById('checkBtn').disabled = true;
//                document.getElementById('guess').disabled = true;
//                resetGame()
//            }
//        } else {
//            document.getElementById('playBtn').style.visibility = "visible";
//            $('#win').collapse('toggle');
//            document.getElementById('checkBtn').disabled = true;
//            document.getElementById('guess').disabled = true;
//        }
//    }
//
//    function check_guess(rand_num, n) {
//        n = parseInt(n);
//        if (rand_num === n) {
//            document.getElementById('guess').value = '';
//            guess = 1;
//        }
//
//        else if (rand_num > n) {
//            document.getElementById('guess').value = '';
//            guess = 0;
//        }
//
//        else if (rand_num < n) {
//            document.getElementById('guess').value = '';
//            guess = 0;
//        }
//    }
//
//    function resetGame() {
//        counter = 0;
//        sum = 0;
//        max_tries = 0;
//        rand_num = Math.floor((Math.random() * 100));
//        document.getElementById('guess').value = '';
//        document.getElementById('guess').disabled = false;
//        document.getElementById('resetBtn').style.visibility = "hidden";
//        document.getElementById('checkBtn').disabled = false;
//        document.getElementById('max_tries').disabled = false;
//        document.getElementById('max_tries').value = "";
//        document.getElementById("tries").value = "";
//        document.getElementById("tries").style.backgroundColor = 'lightgreen';
//        $('#lost').collapse();
//        console.log("reset everything")
//    }
//
//    function playGame() {
//        counter = 0;
//        sum = 0;
//        max_tries = 0;
//        rand_num = Math.floor((Math.random() * 100));
//        document.getElementById('guess').value = '';
//        document.getElementById('guess').disabled = false;
//        document.getElementById('playBtn').style.visibility = "hidden";
//        document.getElementById('checkBtn').disabled = false;
//        document.getElementById('max_tries').disabled = false;
//        document.getElementById('max_tries').value = "";
//        document.getElementById("tries").value = "";
//        document.getElementById("tries").style.backgroundColor = 'lightgreen';
//        $('#win').collapse();
//    }
//
//
//    $("#checkBtn").click(verifyNumber);
//    $("#resetBtn").click(resetGame);
//    $("#playBtn").click(playGame);
//
//
//
//});

/**
 * Created by dey8083 on 4/26/2017.
 */

/*
 Number guess game developed by Sridhar Karra
 Date = 1/16/2015
 */

var max_tries = 0;
var counter = 0;
var sum = 0;
var guess = 10;
var rand_num = Math.floor((Math.random() * 100));


document.getElementById('checkBtn').onclick = function(){
  $(".msg").empty();
  var val = document.getElementById('guess').value;
  max_tries = document.getElementById("max_tries").value;
  if (max_tries && val){
    document.getElementById("tries").disabled = true;
    document.getElementById("tries").value = (max_tries-counter-1);
    document.getElementById("max_tries").disabled = true;
    check_guess(rand_num,val);
    //alert(rand_num);
    console.log(rand_num);
    win_loss(guess);
  }  else {
    /*$('#empty').collapse("toggle");*/
    $('#empty').fadeIn().delay(2000).fadeOut();
  }
}

function win_loss(guess){
  if (guess != 1) {
    counter++;
    if (counter >= Math.floor(max_tries / 2))
      document.getElementById("tries").style.backgroundColor = 'red';
    if (counter == max_tries) {
      $('#lost').collapse("toggle");
      document.getElementById('resetBtn').style.visibility = "visible";
      document.getElementById('checkBtn').disabled = true;
      document.getElementById('guess').disabled = true;
    }
  } else {
    $('#win').collapse("toggle");
    document.getElementById('playBtn').style.visibility = "visible";
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('guess').disabled = true;
  }
}

function check_guess(rand_num,n) {
  n = parseInt(n);
  if (rand_num == n) {
    document.getElementById('guess').value = '';
    guess = 1;
    $(".msg").empty();
  }

  else if (rand_num > n) {
    document.getElementById('guess').value = '';
    guess = 0;
    $( ".msg" ).append( "<p>You entered lower number<p>" );
  }

  else if (rand_num < n) {
    document.getElementById('guess').value = '';
    guess = 0;
    $( ".msg" ).append( "<p>You entered higher number<p>" );
  }
}

document.getElementById('resetBtn').onclick = function(){
  $('#lost').collapse('hide');
  rand_num = Math.floor((Math.random() * 100));
  document.getElementById('guess').value = '';
  document.getElementById('guess').disabled = false;
  document.getElementById('resetBtn').style.visibility = "hidden";
  document.getElementById('checkBtn').disabled = false;
  document.getElementById('max_tries').disabled = false;
  document.getElementById('max_tries').value = "";
  document.getElementById("tries").value = "";
  document.getElementById("tries").style.backgroundColor = 'lightgreen';
  $(".msg").empty();
  counter = 0;
  sum = 0;
  max_tries = 0;
}

document.getElementById('playBtn').onclick = function(){
  counter = 0;
  sum = 0;
  max_tries = 0;
  $('#win').collapse('hide');
  rand_num = Math.floor((Math.random() * 100));
  document.getElementById('guess').value = '';
  document.getElementById('guess').disabled = false;
  document.getElementById('playBtn').style.visibility = "hidden";
  document.getElementById('checkBtn').disabled = false;
  document.getElementById('max_tries').disabled = false;
  document.getElementById('max_tries').value = "";
  document.getElementById("tries").value = "";
  document.getElementById("tries").style.backgroundColor = 'lightgreen';
  $(".msg").empty();
}