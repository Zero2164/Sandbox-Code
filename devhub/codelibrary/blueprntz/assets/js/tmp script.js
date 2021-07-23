function navbtn () {
    $('#buttOp').on('click', function () {
        $('#opnFoldr').toggleClass('fa-folder-open');
        $('#myCollapsible').slideToggle(100)
    });
};
navbtn ();
