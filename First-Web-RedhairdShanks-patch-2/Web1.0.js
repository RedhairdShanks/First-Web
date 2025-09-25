const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



/*Burger bar*/

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('show-sidebar');
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show-sidebar');
}

// Close the sidebar when a link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar li a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideSidebar();
  });
});
