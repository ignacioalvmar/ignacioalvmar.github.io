(function () {
  function init() {
    var content = document.querySelector('.page__content');
    if (!content) return;
    var callouts = [].slice.call(content.querySelectorAll('.fg-callout'));
    if (!callouts.length) return;

    var marks = {};
    [].forEach.call(content.querySelectorAll('.fg-mark'), function (m) {
      marks[m.getAttribute('data-ref')] = m;
    });

    function anchorFor(c) {
      return marks[c.getAttribute('data-ref')] || c;
    }

    function layout() {
      var contentRect = content.getBoundingClientRect();
      var avail = window.innerWidth - contentRect.right - 24;
      var marginMode = window.innerWidth >= 1100 && avail >= 220;

      content.classList.toggle('fg-margin', marginMode);
      content.classList.toggle('fg-inline', !marginMode);

      callouts.forEach(function (c) {
        c.style.position = '';
        c.style.left = '';
        c.style.top = '';
        c.style.width = '';
      });

      if (!marginMode) return;

      var noteW = Math.min(Math.max(avail - 8, 220), 300);
      var ordered = callouts.slice().sort(function (a, b) {
        return anchorFor(a).getBoundingClientRect().top -
               anchorFor(b).getBoundingClientRect().top;
      });

      var prevBottom = -99999;
      ordered.forEach(function (c) {
        var aRect = anchorFor(c).getBoundingClientRect();
        var top = aRect.top - contentRect.top;
        if (top < prevBottom + 16) top = prevBottom + 16;
        c.style.position = 'absolute';
        c.style.left = (content.clientWidth + 24) + 'px';
        c.style.top = top + 'px';
        c.style.width = noteW + 'px';
        prevBottom = top + c.offsetHeight;
      });
    }

    // Fade callouts in as they scroll into view (margin mode).
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      callouts.forEach(function (c) { io.observe(c); });
    } else {
      callouts.forEach(function (c) { c.classList.add('is-visible'); });
    }

    // Hover sync + click-to-expand behavior.
    callouts.forEach(function (c) {
      var mark = marks[c.getAttribute('data-ref')];
      if (!mark) return;

      function activate() {
        c.classList.add('is-active');
        mark.classList.add('is-active');
        if (content.classList.contains('fg-inline')) c.classList.add('is-open');
      }
      function deactivate() {
        c.classList.remove('is-active');
        mark.classList.remove('is-active');
      }

      mark.addEventListener('mouseenter', activate);
      mark.addEventListener('mouseleave', deactivate);
      c.addEventListener('mouseenter', function () {
        c.classList.add('is-active');
        mark.classList.add('is-active');
      });
      c.addEventListener('mouseleave', deactivate);

      mark.addEventListener('click', function () {
        if (content.classList.contains('fg-inline')) {
          c.classList.toggle('is-open');
        } else {
          c.classList.add('is-visible', 'is-active');
          c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
      mark.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          mark.click();
        }
      });
    });

    layout();
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(layout, 150);
    });
    window.addEventListener('load', layout);
    // Re-run after fonts/MathJax settle and shift line heights.
    setTimeout(layout, 350);
    setTimeout(layout, 1200);
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
