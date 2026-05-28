export function mainFooter() {
  const footer = document.querySelector("#main_footer");
  footer.className = "inner-pd";
  footer.style.cssText =
    "text-align: center; color: var(--medium--gray); font-size: var(--nav--item);";

  footer.innerHTML = `
    <div class="container">
      <p>&copy; 2014. All rights reserved. Questions?</p>
      <p style="margin-top: 10px;">Email us at <a href="mailto:office@product.com" class="text-link" style="color: var(--primary);">office@product.com</a></p>
    </div>
  `;
}
