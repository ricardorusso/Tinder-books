// var a = 1;
// function contar1(){
//     console.log(a++);
// }
// var b = 1;
// function contar2(){
// console.log(b++);
// }

// $('.buttonlike').click(function()
// {
//     contar1();
    
//     $('div').next().css( "display", 'block');
// });

// $('.buttondislike').click(function()
// {
//     contar2();
//     $('div').next().css( "display", "block" );
// });


// 1) Modificar o projecto de forma a que assim que entrarmos na página apenas um livro esteva visível e centrado na página

// 2) Ao clicar no like ou no dislike, o livro visível deverá ser escondido e o próximo deverá ser mostrado.

// deverão utilizar a função next() do jQuery

// $('.book .button').click(function(){

//     var opinion = $(this).attr('data-opinion');
//     $current = $('.book.active');
//     $next = $current.next();

//     $current.removeClass('active');
//     $next.addClass('active');
                                                                                            
// });

                                                           // maneira do andre

$('.book button').click(function(){

    var opinion = $(this).attr('data-opinion');
    $current = $('.book.active');
    $next = $current.next();

    if($next.length == 0){
        // $next = $('.book').first(); outras formas de fazer 
        // $next = $current.next();
        $next = $('.book:first-of-type');

        
    }



    $current.removeClass('active');
    $next.addClass('active');

});

 // $current = $(this).addClass('active');
    // $next = $current.removeClass('active');

                                                            //maneira que eu fiz 

// $('.book').click(function(){
   
//     var opinion = $(this).attr('data-opinion');

//     var $current = $('.book').addClass('active');
//     var $next = $(this).next('.book').removeClass('active');
   
//     // $(this).addClass('active')                         /*$(this) é o objeto onde nos estamos*/
//     // .next('.book').removeClass('active');
    
//     if ($next.length ==  0) {
//         $('.book').first('.book').removeClass('active')

//     }
//    else {
//     $current;   
//     $next;
//    }
//     });


