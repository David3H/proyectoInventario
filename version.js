//Versión aplicación
var version = "1.5";

// Actualizar el contenido de la etiqueta span con id "version"
document.getElementById("version").textContent = version;

function toggleSubmenu(submenuId) {
   var submenu = document.getElementById(submenuId);
   var indicator = document.getElementById('indicator-' + submenuId);
   if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
      indicator.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
   } else {
      submenu.style.display = 'block';
      indicator.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
   }
}
