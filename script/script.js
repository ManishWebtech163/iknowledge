
var swiper = new Swiper(".heroSectionLogosSlider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// --- side bar   js code ---


// Get the sidebar and toggle button elements
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('toggleSidebar');

// Function to toggle the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('sidebar-open');
}

// Add click event listener to the toggle button
toggleButton.addEventListener('click', toggleSidebar);