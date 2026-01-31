function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const ctx = document.getElementById("myRadar");
const bgMain=cssVar('--main-bg');
const textMain=cssVar('--main-text');
const bgLight=cssVar('--light-bg');
const textLight=cssVar('--light-text');
const isDark=!document.body.classList.contains('light-mode');

const radarChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["React JS","Laravel","TailwindCSS","Rust","Git","Docker"],
    datasets: [{
      label: "Skill Status",
      data: [80, 95, 80, 75, 90, 60],
      fill: true,
      backgroundColor: cssVar('--chart-fill'),
      borderColor: cssVar('--chart-border'),
      borderWidth: 2,
      pointBackgroundColor: cssVar('--chart-border'),
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 100,
        grid: { color: cssVar('--chart-grid') },
        angleLines: { color: cssVar('--chart-grid') },
        ticks: { display: false },
        pointLabels: { color: cssVar('--chart-label') }
      }
    }
  }
});

document.getElementById('downloadPdf').addEventListener('click',()=>{
  const linkPdf='./documents/Laporan.pdf';
  const link=document.createElement('a');
  link.href=linkPdf;
  link.download='proposed-filename.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
if (window.matchMedia) {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (!localStorage.getItem('theme')) {
    if (prefersDarkScheme.matches) {
      document.body.classList.remove('light-mode');
      themeIcon.textContent = '🌙';
    } else {
      document.body.classList.add('light-mode');
      themeIcon.textContent = '☀️';
    }
  }
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
      } else {
        document.body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
      }
    }
  });
}
      document.addEventListener('DOMContentLoaded', () => {
        const autoTypeElement = document.getElementById('auto-type');
        if (autoTypeElement) {
          var typed = new Typed(autoTypeElement, {
            strings: ["DevOps Engineer","Software Engineer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
          });
        }
      });

