const template = document.createElement("template");
template.innerHTML = `
<footer>
<div class="banner">
<div class="bano">
  <i class="bx bx-map"></i>
  <h4>497 SAFI, CA 95673</h4>
</div>
<div class="bano">
  <i class="bx bx-mobile"></i>
  <h4>+44 345 678 903</h4>
</div>
<div class="bano">
  <i class="bx bxl-gmail"></i>
  <h4>contact@YouCodeTravel.com</h4>
</div>
</div>
<div class="center">
<h4 class="h4">Subscribe to our newsletter</h3>
<div class="butona">
  <input type="email" class="emaill" placeholder="Email Address" />
  <button class="okk">OK</button>
</div>
</div>
<div class="banner2">
<img src="logo.png" class="logo_" alt="" />
</div>

</footer>
`;
class footre_descktop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template.innerHTML;
  }
}

customElements.define("resume-app", footre_descktop);
