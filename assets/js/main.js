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
  $('body.post article > figure > img').css('cursor', 'pointer').click(function(e){
    var ele = $(e.target);
    ele.toggleClass('mega');
    // $('body').toggleClass('layer');
  });

});
