const primaryHeader = document.querySelector('.primary-header');
const scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    // console.log(entries);
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher)


// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".header").addClass("active");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $(".header").removeClass("active");
//         }
//     });
// });