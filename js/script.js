"use strict"

// Бургер

const menuBurger = document.querySelector('.header_burger');

if (menuBurger) {
    const BurgerBody = document.querySelector('.header_links');
    menuBurger.addEventListener("click", function () {
        document.body.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        BurgerBody.classList.toggle('active');
    });
};

// Календарь

const calendars = document.querySelectorAll('#airdatepicker');

function clndr(element) {
    const calendar = new AirDatepicker(element, {
        locale: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'E, dd MMM yyyy',
            timeFormat: 'hh:mm aa',
            firstDay: 0
        },
        selectedDates: [new Date()],
        isMobile: true,
        autoClose: true
    });
}

calendars.forEach(element => clndr(element));

// Свайпер

const swiper = new Swiper('.main_swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    direction: 'vertical',
    navigation: {
        nextEl: '.main_arrow_R',
        prevEl: '.main_arrow_L'
    },
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    speed: 1400,
    loop: true,
    allowTouchMove: false,
});

const swiperSecond = new Swiper('.popular_swiper', {
    navigation: {
        nextEl: '.popular_nav_R',
        prevEl: '.popular_nav_L'
    },
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 32,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        834: {
            slidesPerView: 1.5,
        },
        1050: {
            slidesPerView: 1.9,
        },
        1200: {
            slidesPerView: 2.2,
        },
        1440: {
            slidesPerView: 2.6,
        },
        1600: {
            slidesPerView: 3,
        },
    }
});

const swiperThird = new Swiper('.price_swiper', {
    navigation: {
        nextEl: '.price_nav_R',
        prevEl: '.price_nav_L'
    },
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 32,
    breakpoints: {
        1095: {
            slidesPerView: 3,
        },
        850: {
            slidesPerView: 2.2,
        },
        769: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    }
});


const swiperFourth = new Swiper('.trip_swiper', {
    grabCursor: true,
    breakpoints: {
        1500: {
            slidesPerView: 3,
        },
        1333: {
            slidesPerView: 2.5,
        },
        1193: {
            slidesPerView: 2.1,
        },
        1023: {
            slidesPerView: 1.9,
        },
        950: {
            slidesPerView: 1.5,
        },
    }
});

const swiperFifth = new Swiper('.gallery_swiper',{
    grabCursor: true,
    navigation: {
        nextEl: '.gallery_nav_R',
        prevEl: '.gallery_nav_L'
    },
    breakpoints: {

        1040: {
            slidesPerView: 3.9,  
        },
        865: {
            slidesPerView: 3.1,
        },
        769: {
            slidesPerView: 2.8,
        },
        320: {
            slidesPerView: 3.6,
            direction: 'vertical',
            navigation: {
                nextEl: '.gallery_nav_R_2',
                prevEl: '.gallery_nav_L_2'
            },
            allowTouchMove: false,
        },
    }
});

const swiperSixth = new Swiper('.experiences_swiper', {
    grabCursor: true,
    navigation: {
        nextEl: '.experiences_nav_R',
        prevEl: '.experiences_nav_L'
    },
    slidesPerView: 2.2,
    spaceBetween: 32,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 1.4,
        },
        1000: {
            slidesPerView: 2.2,
        },
    }
});



// Проявление

const animItems = document.querySelectorAll('.anim_items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim_no')) {
                animItem.classList.remove('active');
                }
            }
        }
        
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}