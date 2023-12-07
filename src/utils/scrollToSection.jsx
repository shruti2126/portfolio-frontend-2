/** @format */

export default function scrollToSection(section) {
  const sectionToScrollTo = document.getElementById(section);
  if (sectionToScrollTo) {
    sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
  }
}
