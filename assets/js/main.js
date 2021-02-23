$(function() {

  // Search function
  if ( $( '.search-field' ).length ) $('.search-field').focus().simpleJekyllSearch();

  // To top function
  $().UItoTop({ easingType: 'easeOutQuart' });

  // Link active class on menu
  var perm = $('#pagepermalink').attr('href');
  var listItems = $("header nav a");
  listItems.each( function (index,e) {
    var url = $(e).attr('href');
    var text = $(e).text();
    if ( url == perm ) {
      $(e).addClass('active');
      $(e).html( text );
    }
  });

  // Get md5 for Post (image filename)
  if ($('body').hasClass('post')){
    var string = $('section > header > h1').html() + $('section > header h3').html();
    var hash = md5(string);
    console.log(string,hash);
  }

  // Image zoom on Posts
  // $('body.post article > figure > img').click(function(e){
  //   // var ele = $(e.target);
  //   // ele.toggleClass('mega');
  //   $('#zoom').attr("open", "");
  // });
  // $('#zoom').click(function(e){
  //   $(e.delegateTarget).removeAttr('open');
  // })

  // MODAL
  // Get the modal
  var modal = document.getElementById("myModal");
  var modal_window = document.querySelector(".modal-content");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  if (btn){
    btn.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  if (modal_window) {
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    modal_window.onclick = function(event) {
      modal.style.display = "none";
    }
  }
});
