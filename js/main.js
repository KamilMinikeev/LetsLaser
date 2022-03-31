$(function () {


    let body = document.querySelector("body");
    //accordion
    body.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('accordion__header')) {
            if (target.classList.contains('is-active')) {
                target.classList.remove('is-active');
                let parentTarget = target.parentElement;
                let itemChildren = parentTarget.children;
                for (let i = 0; i < itemChildren.length; i++) {
                    if (itemChildren[i].classList.contains('accordion__content')) {
                        itemChildren[i].classList.remove('is-active');
                    }
                }
            }
            else {
                target.classList.add('is-active');
                let parentTarget = target.parentElement;
                let itemChildren = parentTarget.children;
                for (let i = 0; i < itemChildren.length; i++) {
                    if (itemChildren[i].classList.contains('accordion__content')) {
                        itemChildren[i].classList.add('is-active');
                    }
                }
            }
        }
        else {
            let parentTarget = target.parentElement;
            if (parentTarget.classList.contains('is-active')) {
                parentTarget.classList.remove('is-active');
                let parentTarget2 = parentTarget.parentElement;
                let itemChildren = parentTarget2.children;
                for (let i = 0; i < itemChildren.length; i++) {
                    if (itemChildren[i].classList.contains('accordion__content')) {
                        console.log(itemChildren[i]);
                        itemChildren[i].classList.remove('is-active');
                    }
                }
            }
            else {
                parentTarget.classList.add('is-active');
                let parentTarget2 = parentTarget.parentElement;
                let itemChildren = parentTarget2.children;
                for (let i = 0; i < itemChildren.length; i++) {
                    if (itemChildren[i].classList.contains('accordion__content')) {
                        itemChildren[i].classList.add('is-active');
                    }
                }
            }
        }
    })


    //slider 
    $('.slider-reviews').slick({
        //dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-reviews2',
        infinite: true,
    });
    $('.slider-reviews2').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-reviews',
        infinite: true,
    })
    $('.slider-photos').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })

    //headerFixed
    let headerMenu = document.querySelector('.header');
    let sectionTop = document.querySelector('.section-top');
    let sectionTopHeight = sectionTop.clientHeight;
    let scrollPos = window.pageYOffset;
    checkScroll(scrollPos, sectionTopHeight);
    window.addEventListener("scroll", headerFixed);
    window.addEventListener("resize", headerFixed);
    function headerFixed() {
        let sectionTopHeight = sectionTop.clientHeight;
        let scrollPos = window.pageYOffset;
        checkScroll(scrollPos, sectionTopHeight);
    }
    function checkScroll(scrollPos, sectionTopHeight) {
        if (scrollPos > sectionTopHeight) {
            headerMenu.classList.add("fixed");
        }
        else {
            headerMenu.classList.remove("fixed");
        }
    }


    //popup

    let btnMenu = document.querySelector('.header__hamburger');
    let popupMenu = document.querySelector('.popup-menu');
    let popupOrder = document.querySelector('.popup-order');
    let popupThanks = document.querySelector('.popup-thanks');
    let messageBtn = document.querySelector('.order-message');
    let orderFormBtn = document.querySelector('.popup-order__form-btn');
    let orderFormBtn2 = document.querySelector('.section-request__form-btn');
    let ThanksBtn = document.querySelector('.popup-thanks__btn');


    btnMenu.addEventListener('click', function () {
        popupMenu.classList.add('is-active');
        headerMenu.classList.remove('fixed');
        body.classList.add('no-scroll');
        if (popupMenu.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupMenu.classList.remove('is-active');
                    headerMenu.classList.add('fixed');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })
    messageBtn.addEventListener('click', function () {
        popupOrder.classList.add('is-active');
        headerMenu.classList.remove('fixed');
        body.classList.add('no-scroll');
        if (popupOrder.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupOrder.classList.remove('is-active');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })
    orderFormBtn.addEventListener('click', function () {
        popupThanks.classList.add('is-active');
        headerMenu.classList.remove('fixed');
        popupOrder.classList.remove('is-active');
        body.classList.add('no-scroll');
        if (popupThanks.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupThanks.classList.remove('is-active');
                    headerMenu.classList.add('fixed');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })
    orderFormBtn2.addEventListener('click', function () {
        popupThanks.classList.add('is-active');
        headerMenu.classList.remove('fixed');
        popupOrder.classList.remove('is-active');
        body.classList.add('no-scroll');
        if (popupThanks.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupThanks.classList.remove('is-active');
                    headerMenu.classList.add('fixed');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })

    ThanksBtn.addEventListener('click', function () {
        popupThanks.classList.remove('is-active');
        headerMenu.classList.remove('fixed');
        popupOrder.classList.add('is-active');
        body.classList.add('no-scroll');
        if (popupMenu.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupThanks.classList.remove('is-active');
                    headerMenu.classList.add('fixed');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })

    body.addEventListener('click', function (a) {
        let target = a.target;
        if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
            popupMenu.classList.remove('is-active');
            popupOrder.classList.remove('is-active');
            popupThanks.classList.remove('is-active');
            // headerMenu.classList.add('fixed');
            body.classList.remove('no-scroll');
        }
    })

    /*scrol to*/
    body.addEventListener("click", function (event) {
        // event.preventDefault();
        let targetW = event.target;
        dataBlock = targetW.getAttribute('data-scroll');
        if (dataBlock) {
            event.preventDefault();
            let dataClass = document.querySelector(`.` + dataBlock);
            dataClass.scrollIntoView({
                behavior: 'smooth',

            })
            popupMenu.classList.remove('is-active');
            headerMenu.classList.add('fixed');
            body.classList.remove('no-scroll');
        }
    })


    //video


    // let toppVideo = document.querySelector('.section-top__video');
    // let secondVideo = document.querySelector('.section-about__video');

    // let toppSection = document.querySelector('.section-top');
    // let secondSection = document.querySelector('.section-about');


    // let sectionToppHeight = toppSection.clientHeight;
    // let sectionSecondHeight = secondSection.clientHeight + toppSection.clientHeight;
    // let scrollPos1 = window.pageYOffset;

    // checkScroll1(scrollPos1, sectionToppHeight);
    // checkScroll2(scrollPos1, sectionSecondHeight);
    // window.addEventListener("scroll", lazyLoad);
    // window.addEventListener("resize", lazyLoad);

    // function lazyLoad() {
    //     let sectionToppHeight = toppSection.clientHeight;
    //     let sectionSecondHeight = secondSection.clientHeight + toppSection.clientHeight;
    //     let scrollPos1 = window.pageYOffset;
    //     checkScroll1(scrollPos1, sectionToppHeight);
    //     checkScroll2(scrollPos1, sectionSecondHeight);
    // }
    // function checkScroll1(scrollPos1, sectionToppHeight) {
    //     if (scrollPos1 > sectionToppHeight) {
    //         toppVideo.autoplay = false;
    //         toppVideo.load();
    //     }
    //     else {
    //         toppVideo.autoplay = true;
    //     }
    // }
    // function checkScroll2(scrollPos1, sectionSecondHeight) {
    //     if (scrollPos1 > sectionSecondHeight) {
    //         secondVideo.autoplay = false;
    //         secondVideo.load();
    //     }
    //     else {
    //         secondVideo.autoplay = true;
    //     }
    // }



    //video
    // $(document).ready(function () {
    //     $(".section-top").hover(function () {
    //         $(".section-top__video")[0].play();
    //         $(".section-about__video")[0].play();
    //         $(".section-reviews__video")[0].autoplay = true;
    //     })
    //     $(".section-about").hover(function () {
    //         $(".section-about__video")[0].play();
    //         $(".section-top__video")[0].play();
    //         $(".section-reviews__video")[0].autoplay = true;
    //     })
    //     $(".section-prices").mouseleave(function () {
    //         $(".section-top__video")[0].load();
    //     })
    //     $(".section-reviews").hover(function () {
    //         $(".section-about__video")[0].load();
    //     })
    // })

    // let secondVideo = document.querySelector('.section-about__video');
    // let secondSection = document.querySelector('.section-about');
    // let toppSection = document.querySelector('.section-top');
    // let sectionSecondHeight = secondSection.clientHeight + toppSection.clientHeight;
    // let scrollPos1 = window.pageYOffset;
    // checkScroll2(scrollPos1, sectionSecondHeight);
    // window.addEventListener("scroll", lazyLoad);
    // window.addEventListener("resize", lazyLoad);
    // function lazyLoad() {
    //     let sectionSecondHeight = secondSection.clientHeight + toppSection.clientHeight;
    //     let scrollPos1 = window.pageYOffset;
    //     checkScroll2(scrollPos1, sectionSecondHeight);
    // }
    // function checkScroll2(scrollPos1, sectionSecondHeight) {
    //     if (scrollPos1 > sectionSecondHeight) {
    //         secondVideo.autoplay = false;
    //     }
    //     else {
    //         secondVideo.autoplay = true;
    //     }
    // }



    //tabs

    let complex1 = document.querySelector(".prices-table__title-complex");
    let complex2 = document.querySelector(".prices-table__title-value");
    let table1 = document.querySelector(".prices-table--one");
    let table2 = document.querySelector(".prices-table--two");

    complex1.addEventListener('click', function () {
        complex1.style.color = "#000";
        complex2.style.color = "#b3b3b3";
        table1.classList.remove('is-active');
        table2.classList.remove('is-active');

    })
    complex2.addEventListener('click', function () {
        table1.classList.add('is-active');
        table2.classList.add('is-active');
        complex1.style.color = "#b3b3b3";
        complex2.style.color = "#000";
    })



    //inst
    var settings = {
        "url": "https://v1.nocodeapi.com/kamil_minikeev/instagram/GOMzsgFuYKXkVtMP",
        "method": "get",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
    };
    let sliderInst = document.querySelectorAll(".slider-photos__img");

    $.ajax(settings).done(function (response) {
        for (let i = 0, j = 0; i < sliderInst.length, j < response.data.length; i++, j++) {
            responseImg();
            function responseImg() {
                if (response.data[j].media_type == "IMAGE") {
                    return response.data[j];
                }
                else {
                    j++;
                    responseImg();
                }
            }
            sliderInst[i].setAttribute('src', response.data[j].media_url);
            sliderInst[i].addEventListener("click", function () {
                let currentParent = sliderInst[i].parentElement;
                currentParent.setAttribute('href', response.data[j].permalink);
            });
        }
    });

    //form

    $(document).ready(function () {
        var oneMoreTime = 1;

        $(document).on('submit', ".form-send", function (e) {
            e.preventDefault();

            var val = $(this).serialize();

            if (oneMoreTime == 1) {
                oneMoreTime = 0;
                $.ajax({
                    type: "POST",
                    url: "/mail.php?do=getMail",
                    data: val,
                    dataType: "json",
                    success: function (result) {
                        // if (result.success) {
                        // }
                        oneMoreTime = 1;
                    }
                });
            }
        });
    });

})







