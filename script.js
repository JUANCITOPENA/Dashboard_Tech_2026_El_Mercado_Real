// Configuración global de gráficos
  const commonChartConfig = {
    chart: {
      background: 'transparent',
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif',
      animations: { enabled: true, easing: 'easeinout', speed: 1000 }
    },
    theme: { mode: 'dark' },
    dataLabels: { enabled: true },
    grid: { borderColor: 'rgba(255,255,255,0.05)' },
    tooltip: { theme: 'dark' }
  };

  // --- GRÁFICO 1: LAS 14 ÁREAS ---
  const areasCategories = [
    'Bases de Datos', 'DevOps & Sistemas', 'Desarrollo Web', 'Big Data', 
    'IoT', 'Ciberseguridad', 'Desarrollo Móvil', 'Cloud Computing', 
    'Inteligencia Artificial', 'Robótica', 'Ciencia de Datos', 
    'Arquitectura SW', 'Blockchain', 'Videojuegos'
  ];
  const areasValues = [4671, 3978, 3327, 3253, 2525, 2235, 2098, 1868, 1836, 1703, 1513, 1352, 1240, 1092];

  new ApexCharts(document.querySelector("#chartAreasBar"), {
    ...commonChartConfig,
    chart: { type: 'bar', height: 550, ...commonChartConfig.chart },
    series: [{ name: 'Ofertas Activas', data: areasValues }],
    colors: ['#3b82f6'],
    plotOptions: { 
      bar: { 
        borderRadius: 4, 
        horizontal: true, 
        barHeight: '70%',
        distributed: false
      } 
    },
    xaxis: { 
      categories: areasCategories, 
      labels: { style: { colors: '#94a3b8', fontSize: '11px', fontFamily: 'Inter' } } 
    },
    yaxis: {
      labels: { style: { colors: '#fff', fontWeight: 600 }, maxWidth: 120 }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: { colors: ['#fff'] },
      offsetX: 0,
      formatter: function(val, opt) { return val.toLocaleString() }
    }
  }).render();

  // --- GRÁFICO 3: FRAMEWORKS ---
  const fwCategories = [
    'Node.js', 'React', 'Angular', 'jQuery', 'Bootstrap', 
    '.NET', 'Spring Boot', 'WordPress', 'Django', 'Symfony', 
    'Laravel', 'Vue.js', 'Astro'
  ];
  const fwValues = [3613, 3310, 3182, 2223, 2179, 1772, 1716, 1237, 1154, 1027, 629, 355, 4];
  
  const fwColors = [
    '#8cc84b', '#61dafb', '#dd1b16', '#0769ad', '#7952b3', 
    '#512bd4', '#6db33f', '#21759b', '#092e20', '#f8f9fa', 
    '#ff2d20', '#42b883', '#ff5d01'
  ];

  new ApexCharts(document.querySelector("#chartFrameworks"), {
    ...commonChartConfig,
    chart: { type: 'bar', height: 500, ...commonChartConfig.chart },
    series: [{ name: 'Ofertas Activas', data: fwValues }],
    colors: fwColors,
    plotOptions: { 
      bar: { 
        borderRadius: 4, 
        horizontal: true, 
        barHeight: '75%',
        distributed: true 
      } 
    },
    legend: { show: false },
    xaxis: { 
      categories: fwCategories, 
      labels: { style: { colors: '#94a3b8' } } 
    },
    yaxis: {
      labels: { style: { colors: '#fff', fontWeight: 600, fontSize: '13px' } }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: { colors: ['#fff'], fontSize: '12px' },
      offsetX: 0,
      formatter: function(val) { return val.toLocaleString() }
    }
  }).render();

  // --- GRÁFICO 4: ECOSISTEMAS (DONUT) ---
  const ecoSeries = [12687, 2893, 1772, 1716, 1154];
  const ecoLabels = ['JavaScript Eco', 'PHP Eco', '.NET', 'Java (Spring)', 'Python (Django)'];
  const ecoColors = ['#f7df1e', '#777bb4', '#512bd4', '#e76f00', '#306998'];

  new ApexCharts(document.querySelector("#chartEcosystem"), {
    ...commonChartConfig,
    chart: { type: 'donut', height: 400, ...commonChartConfig.chart },
    series: ecoSeries,
    labels: ecoLabels,
    colors: ecoColors,
    stroke: { show: true, width: 2, colors: ['#1e293b'] },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: { color: '#94a3b8', fontSize: '14px' },
            value: { color: '#fff', fontSize: '24px', fontWeight: 700 },
            total: {
              show: true,
              label: 'Total Muestra',
              color: '#94a3b8',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString()
              }
            }
          }
        }
      }
    },
    legend: { 
      position: 'bottom', 
      labels: { colors: '#cbd5e1' },
      itemMargin: { horizontal: 10, vertical: 5 }
    },
    dataLabels: { enabled: false }
  }).render();
