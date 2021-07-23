
function TODOApp() {
    //define variables:
    //backup single array - an array to store memory of recently deleted single list items text content
    var myArr = [];
    //backup bulk array - an array to store memory of recently deleted bulk list items text content
    var bulkArr = [];
    //bulk is selected switch
    var bulkisSelctd = true;
    var undoisSelectd = false;
    var i = -1;
    var b = -1;

    function startFuncz () {
        listItems();
        inputField();
        deleteBtns();
        undoBtns();
        todoMenuBtns();
        exitApp();
    };

    function listItems() {
        //Check off specific Todos by Clicking
        $('.todoItmContain').on('click', 'li', 'listItm', function () {
            $(this).toggleClass('checked')
        });
    };

    function inputField() {
        function mainInputFunc() {
            //detect when "enter" key has been pressed on input
            $('input[type="text"]').on('keypress', function (e) {
                if (e.which === 13) {
                    //display delete all button
                    if ($('.todoItm').length > 0) {
                        //show the delete all button
                        $('.deletAllbtn').show();
                    }
                    //clear input if value is equal to zero, then do nothing
                    if ($('input').val() === "") {
                        $('input').val('');
                        return false;
                    } else {
                        //test if the bulk undo button was not selected,
                        //if true, hide the bulk undo button, clear the backup bulk array, then set bulk selected to true
                        if (!bulkisSelctd) {
                            $('.undoBtnBulk').hide();
                            bulkArr = [];
                            bulkisSelctd = true;
                        }
                        //test if bulk is selected and push the new todo into the backup bulk array, increase the bulk array index count by 1
                        //then console.log the current bulk array
                        if (bulkisSelctd) {
                            bulkArr.push($(this).val());
                            b++;
                            console.log("This is Bulk Arr");
                            console.log(bulkArr);
                        }
                        //test if single undo button is not selected, if true, fade the single undo button out and clear the single backup array
                        //then set the single backup array index count to -1
                        if (!undoisSelectd) {
                            $('.undoBtn').fadeOut(300, function () {
                                myArr = [];
                                i = -1;
                            });
                        };
                        //grabbing new todo text from input
                        var newTodo = $(this).val();
                        //create a new li and add to ul 
                        $('.todoItmContain').append('<li class="todoItm">' + '<button class="delet"><i class="fas fa-trash-alt"></i></button><p class="listItm">' + newTodo + '</p></li>');
                        //clear input once "enter" key is pressed
                        $('input').val('');
                    };
                };
            });
        };

        function clearInput() {
            //clear input on Todo app page load
            $('input').val('');
        };

        clearInput();
        mainInputFunc();
    };

    function deleteBtns() {
        function deleteBulk() {
            $('.deletAllbtn').on('click', function (event) {
                bulkisSelctd = false;
                b = bulkArr.length - 1;
                $('.undoBtn').fadeOut(300, function () {
                    myArr = [];
                    i = -1;
                });
                $('.todoItm').fadeOut(500, function () {
                    $('.todoItm').remove();
                });
                $('.deletAllbtn').fadeOut(600, function () {
                    $(this).hide();
                });
                $('.undoBtnBulk').fadeIn(500, function () {
                    $('.undoBtnBulk').show();
                });
                console.log("This is Bulk Arr");
                console.log(bulkArr);
                event.stopPropagation();
            });
        };

        function deleteSingle() {
            //click trash icon to delete Todo 
            $('.todoItmContain').on('click', '.delet', function (event) {
                undoisSelectd = false;
                $(this).parent().fadeOut(500, function () {
                    $(this).remove();
                });
                $('.undoBtn').fadeIn(500, function () {
                    $('.undoBtn').show();
                });
                if ($('.todoItm').length <= 1) {
                    $('.deletAllbtn').hide();
                }
                myArr.push($(this).parent().text());
                console.log("This is Single Arr");
                console.log(myArr);
                console.log("This is Bulk Arr");
                console.log(bulkArr);
                i++;
                event.stopPropagation();
            });
        };

        deleteBulk();
        deleteSingle();
    };

    function undoBtns() {
        function undobtnBulk() {
            $('.undoBtnBulk').on('click', function () {
                bulkArr.forEach(function () {
                    $('.todoItmContain').append('<li class="todoItm">' + '<button class="delet"><i class="fas fa-trash-alt"></i></button><p class="listItm">' + bulkArr[b] + '</p></li>');
                    b--;
                })
                $('.undoBtnBulk').fadeOut(300, function () {
                    bulkisSelctd = true;
                    console.log(b);
                    console.log(bulkArr);
                });
                $('.deletAllbtn').fadeIn(300);
            });
        };

        function undobtnSingle() {
            function undoBtn() {
                var redo = $('.todoItmContain').append('<li class="todoItm">' + '<button class="delet"><i class="fas fa-trash-alt"></i></button><p class="listItm">' + myArr[i] + '</p></li>');
                redo;
                myArr.pop(i);
                console.log(myArr);
                console.log("This is Bulk Arr");
                console.log(bulkArr);
                i--;
                undoisSelectd = true;
            };
            $('.undoBtn').on('click', function () {
                if (i <= 0) {
                    $('.undoBtn').hide();
                    undoBtn();
                } else {
                    undoBtn();
                    if ($('.todoItm').length > 1) {
                        $('.deletAllbtn').show();
                    };
                };
            });
        };

        undobtnSingle();
        undobtnBulk();
    };

    function todoMenuBtns() {
        function settings() {
            $('.settingz').on('click', function () {
                //show/hide menu bar
                $('#menNav').slideToggle(300, function () {
                    $('#menNav').toggleClass('activedelAll');
                });
            });
        };

        function addNewTodo() {
            $('.addToDo').on('click', function () {
                //show/hide new todo input
                $('input').slideToggle(300, function () {
                    $('input').toggleClass('activedelAll');
                });
            });
        };

        settings();
        addNewTodo();
    };


    function exitApp() {
        $('.exitAppBtn').on('click', function () {
            var yes = confirm('Close TO-DO App?');
            if (yes) {
                location.href='../app-Index.html';
            } else {
                return false;
            };
        });
    };


    startFuncz ();
};
TODOApp();


