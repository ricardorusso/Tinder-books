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

var book1 = {
    name:'Os Lusiadas',
    img:'livro1.jpg',
    descricao: "Os Lusíadas é uma obra de poesia épica do escritor português Luís Vaz de Camões, considerada a \"epopeia portuguesa por excelência\". Provavelmente concluída em 15512, foi publicada pela primeira vez em 1572 no período literário do classicismo, três anos após o regresso do autor do Oriente.",
    link:{
        text:"Wiki",
        url: 'https://pt.wikipedia.org/wiki/Os_Lus%C3%ADadas'
    } 
  }

var book2 = {
    name:'O Envangelho segundo Jesus Cristo',
    img:'livro2.jpg',
    descricao: "O Evangelho Segundo Jesus Cristo é um romance de José Saramago que, com uma visão moderna e crítica da religião, reconta a história biblica sobre a vida de Jesus Cristo.",
    link:{
        text:"",
        url: 'https://pt.wikipedia.org/wiki/O_Evangelho_segundo_Jesus_Cristo'
    }
}

var book3 = {
    name:'O Mundo de Gelo E Fogo',
    img:'livro3.jpg',
    descricao: "As Crônicas de Gelo e Fogo ou As Crónicas de Gelo e Fogo (no original em inglês: A Song of Ice and Fire) é uma série de livros de alta fantasia escrita pelo romancista e roteirista norte-americano George R. R.",    
    link:{
        text:"link",
        url: 'https://pt.wikipedia.org/wiki/A_Song_of_Ice_and_Fire'
    }
}


class Library{
    constructor(){
        this.books = [book1,book2,book3];
        this.seenBooks = [];
        this.Load(book1);
    }

    Load(book){
        $('.book h1').text(book.name);
        $('.book img').attr("src",book.img);
        $('.book a').attr("href", book.link.url);
        $('.book a').text(book.link.text);
        $('.book p').text(book.descricao);
        // books.links.forEach(function(v,i){
        //     $(".book a").eq(i).text(v.text);
        //     $(".book a").eq(i).attr("href",v.url);
        // })
    }
    NextBook(){
        this.seenBooks.push(this.books[0]);
        this.books.shift(); //ou slice (0,1)
        this.Load(this.books[0]);
    }
}

// passar o livro q acabamos de ver para o seenbooks



var lib = new Library();
$('.book button').click(function(){
    lib.NextBook();
})





