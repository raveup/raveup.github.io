$(function() {

  // Search function
  if ( $( '.search-field' ).length ) $('.search-field').focus().simpleJekyllSearch();

  // To top function
  $().UItoTop({ easingType: 'easeOutQuart' });

  // Link active class on menu
  var perm = $('#pagepermalink').attr('href');
  var listItems = $("header nav ul li");
  listItems.each( function (index,e) {
    var url = $("a",e).attr('href');
    var text = $("a",e).text();
    if ( url == perm ) {
      $(e).addClass('active');
      $(e).html( text );
    }
  });

  // Get md5 for Post (image filename)
  if ($( 'body').hasClass('post')){
    var string = $('article > header > h2').html() + $('article > header > h3').html();
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
