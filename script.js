function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle('hidden')
    document.getElementById(collapseID).classList.toggle('block')
  }


AOS.init({
    delay: 200,
    duration: 1200,
    once:false,
})