(function($) {
    $.fn.simpleJekyllSearch = function(options) {
        var settings = $.extend({
            jsonFile            : '/search.json',
            // template            : '<li><a href="/raveup/{url}" title="{desc}">{title}</a><br><small>{item}</small></li>',
            template            : '<article><figure><img src="/assets/covers/{category}/{image}.jpg" title="{title} – {item}"></figure><header><h2><a href="{url}" title="{title} – {item}">{title}</a></h2><h3>{item}</h3><p>{uppercase} #{volume} ({support})</p></header>{excerpt}</article>',
            searchResults       : '.results',
            searchResultsTitle  : '',
            limit               : '10',
            noResults           : '<article><header><h2>Nothing found...</h2><h3>Try another string</h3></header></article>'
        }, options);

        var jsonData = [],
            origThis = this,
            searchResults = $(settings.searchResults);

        var matches = [];

        if(settings.jsonFile.length && searchResults.length){
            $.ajax({
                type: "GET",
                url: settings.jsonFile,
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    jsonData = data;
                    registerEvent();
                },
                error: function(x,y,z) {
                    console.log("***ERROR in simpleJekyllSearch.js***");
                    console.log(x);
                    console.log(y);
                    console.log(z);
                    // x.responseText should have what's wrong
                }
            });
        }

        function registerEvent(){
            origThis.keyup(function(e){
                if(e.which === 13){
                    if(matches)
                        window.location = matches[0].url;

                    //follow the first link
                    // if(searchResults.children().length)
                }
                if($(this).val().length){
                    writeMatches( performSearch($(this).val()) );
                }else{
                    clearSearchResults();
                }
            });
        }

        function performSearch(str){
            matches = [];

            for (var i = 0; i < jsonData.length; i++) {
                var obj = jsonData[i];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key) && obj[key].toLowerCase().indexOf(str.toLowerCase()) >= 0 &&
                    ( (key == 'title') || (key == 'item') ) ){
                        console.log(key);
                        matches.push(obj);
                        break;
                    }
                }
            }
            return matches;
        }

        function writeMatches(m){
            clearSearchResults();

            searchResults.append( $(settings.searchResultsTitle) );

            if(m && m.length){
                for (var i = 0; i < m.length && i < settings.limit; i++) {
                    var obj = m[i];
                    output = settings.template;
                    output = output.replace(/\{(.*?)\}/g, function(match, property) {
                        return obj[property];
                    });
                    searchResults.append($(output));
                }
            }else{
                searchResults.append( settings.noResults );
            }
        }
        function clearSearchResults(){
            searchResults.children().remove();
        }
    };
}(jQuery));
