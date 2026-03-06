function runTest() {
  if (!document.body) return;

  document.title = 'V5 LOADED';
  document.body.style.background = '#000';
  document.body.style.outline = '12px solid red';
  console.log('V5 LOADED');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runTest);
} else {
  runTest();
}
