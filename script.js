document.addEventListener("DOMContentLoaded", () => {
  const journeyContainerDivs = document.querySelectorAll(
    ".journeycontainerdiv"
  );
  const contentDivs = document.querySelectorAll(".content-div");

  journeyContainerDivs.forEach((div) => {
    div.addEventListener("click", () => {
      const targetId = div.getAttribute("data-target");

      // Reset all content divs' z-index and remove active classes
      contentDivs.forEach((contentDiv) => {
        contentDiv.classList.remove("active");
      });

      // Reset all journey container divs' visible class
      journeyContainerDivs.forEach((journeyDiv) => {
        journeyDiv.classList.remove("journeycontainervisible");
      });

      // Set the clicked div's corresponding content div's z-index
      document.getElementById(targetId).classList.add("active");

      // Add the visible class to the clicked journey container div
      div.classList.add("journeycontainervisible");
    });
  });
});
