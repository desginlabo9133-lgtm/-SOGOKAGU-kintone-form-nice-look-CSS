(() => {
  'use strict';

  const style = document.createElement('style');

  style.textContent = `
    body .kb-injector {
      background: #000000 !important;
    }

    body .kb-injector-header {
      background: #ff0000 !important;
      color: #ffffff !important;
      font-size: 28px !important;
      padding: 40px !important;
    }

    body .kb-injector-body {
      background: #00ff00 !important;
      padding: 40px !important;
    }

    body .kb-field input,
    body .kb-field textarea,
    body .kb-field select {
      background: #ffff00 !important;
      border: 4px solid #000000 !important;
      font-size: 22px !important;
      height: 60px !important;
    }

    body .kb-injector-footer button {
      background: #ff00ff !important;
      font-size: 26px !important;
      height: 70px !important;
      width: 200px !important;
    }
  `;

  document.head.appendChild(style);

  console.log('VISUAL TEST STYLE LOADED');
})();
