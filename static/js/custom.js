$('#search-input-wrap').click(function () {
    $('.ins-search').addClass('show')
})

document.getElementsByClassName('vpower txt-right')[0].remove();
let $comments = document.getElementById('vcomments');
let $vpanel = document.getElementsByClassName('vpanel')[0];
let $vcards = document.getElementsByClassName('vcards')[0];
let $vcount = document.getElementsByClassName('vcount')[0];
$comments.insertBefore($vcards,$vpanel);
$comments.insertBefore($vcount,$vcards);

document.getElementsByClassName('leancloud-visitors-count')[0].style.fontStyle='normal'