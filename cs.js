// Computer Science portal — sub-portal cards from portals.json.
// Add a sub-portal by adding an entry there; cards render in file order.
(function () {
  var wrap = document.getElementById('portal-cards');

  function navCard(label, sub, href) {
    var b = document.createElement('button');
    b.className = 'nav-card';
    b.textContent = label;
    var s = document.createElement('small');
    s.textContent = sub;
    b.appendChild(s);
    b.addEventListener('click', function () { location.href = href; });
    return b;
  }

  function render(data) {
    ((data && data.portals) || []).forEach(function (p) {
      wrap.appendChild(navCard(p.label, p.sub, p.href));
    });
  }

  fetch('portals.json', { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(render)
    .catch(function () { render({}); });
})();
