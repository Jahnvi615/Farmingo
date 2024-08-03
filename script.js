document.addEventListener("DOMContentLoaded", function () {
  // Function to show specific section
  function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  }

  // Function to show the dashboard
  function showDashboard() {
    showSection("dashboard");
  }

  // Function to toggle options in the dashboard
  function toggleOption(optionId) {
    const option = document.getElementById(optionId);
    option.classList.toggle("hidden");
  }

  // Initial load
  showSection("home");

  // Expose showSection, showDashboard, and toggleOption to the global scope for use in inline event handlers
  window.showSection = showSection;
  window.showDashboard = showDashboard;
  window.toggleOption = toggleOption;
});
