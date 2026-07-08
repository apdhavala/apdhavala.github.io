// Fills the title block's REV DATE field with today's date, drafting-style (YYYY-MM-DD).
document.addEventListener('DOMContentLoaded', () => {
  const revDate = document.getElementById('rev-date');
  if (revDate) {
    const d = new Date();
    const iso = d.toISOString().split('T')[0];
    revDate.textContent = iso;
  }
});
