(async () => {
  const appSelect = document.getElementById('appSelect');
  appSelect.onchange = async (event) => {
    const appName = appSelect.options[appSelect.selectedIndex].value;
    if (appName) {
      await loadApp(appName);
    }
  };
})();

function loadApp(appName) {
  const script = document.createElement('script');
  script.onload = () => {
    console.log(`${appName} loaded`);
  };
  script.src = `${appName}.bundle.js`;
  document.head.appendChild(script);
}
