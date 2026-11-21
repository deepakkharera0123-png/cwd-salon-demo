const menu = document.querySelector('.menu'), nav = document.querySelector('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('.filters button').forEach(btn => btn.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active');
    btn.classList.add('active'); const f = btn.dataset.filter; document.querySelectorAll('.cards article').forEach(card => card.hidden = f !== 'all' && card.dataset.type !== f)
}));
const date = document.querySelector('#date'); date.min = new Date().toISOString().slice(0, 10);
document.querySelector('#booking').addEventListener('submit', e => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    document.querySelector('#status').textContent = 'Thanks — the front-end demo form works. Connect a real booking service or business email before using for a client.';
    e.currentTarget.reset()
});