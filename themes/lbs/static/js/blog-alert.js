// Auto-scrolling blog alert banner
(function() {
  const alertBanner = document.querySelector('.blog-alert-banner');
  if (!alertBanner) return;
  
  const items = alertBanner.querySelectorAll('.blog-alert-item');
  if (items.length <= 1) return; // Only animate if there are 2+ posts
  
  let currentIndex = 0;
  let intervalId;
  
  function showNext() {
    // Hide current
    items[currentIndex].classList.remove('active');
    
    // Move to next (wrap around)
    currentIndex = (currentIndex + 1) % items.length;
    
    // Show next
    items[currentIndex].classList.add('active');
  }
  
  // Start auto-scroll
  function startAutoScroll() {
    intervalId = setInterval(showNext, 5000);
  }
  
  // Stop auto-scroll
  function stopAutoScroll() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
  
  // Initialize
  startAutoScroll();
  
  // Pause on hover
  alertBanner.addEventListener('mouseenter', stopAutoScroll);
  alertBanner.addEventListener('mouseleave', startAutoScroll);
})();
