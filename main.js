$(function(){
    let chapTer = [
        {
            imgUrl : 'images/space3.png',
            bgUrl: 'images/Ultra.svg'
        },
        {   imgUrl : 'images/space1.png',
            bgUrl : 'images/imperial.svg'
        },
        {   imgUrl : 'images/space2.png',
            bgUrl : 'images/angel.svg'}
    ];

    $('.pager > ul > li').eq(0).click(function(){

        $('figure img')
            .attr('src', chapTer[0].imgUrl);
        $('#title figure').css('background-image',`url(${chapTer[0].bgUrl})`);
        console.log(chapTer[0].bgUrl)

    });
    $('.pager > ul > li').eq(1).click(function(){

         $('figure img')
                .attr('src', chapTer[1].imgUrl);
         $('#title figure').css('background-image',`url(${chapTer[1].bgUrl})`);
            console.log(chapTer[0].bgUrl)

        });

    $('.pager > ul > li').eq(2).click(function(){

         $('figure img')
                    .attr('src', chapTer[2].imgUrl);
        $('#title figure').css('background-image',`url(${chapTer[2].bgUrl})`);
        console.log(chapTer[2].bgUrl);

});

})
