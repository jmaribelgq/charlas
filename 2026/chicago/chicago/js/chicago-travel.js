/**
 * Chicago Trip 2026 — JavaScript separado
 * Función para cambiar entre días del itinerario
 */

function showDay(dayId) {
  document.querySelectorAll('.day-panel').forEach(function(p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.day-tab').forEach(function(t) {
    t.classList.remove('active');
  });
  document.getElementById(dayId).classList.add('active');
  event.target.classList.add('active');
}
