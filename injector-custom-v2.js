(() => {
  'use strict';

  const STYLE_ID = 'sogokagu-injected-style';

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .kb-injector {
        background: #a9cbe0 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans", "Noto Sans JP", sans-serif !important;
      }

      .kb-injector-main {
        max-width: 980px !important;
        margin: 0 auto !important;
        padding: 12px !important;
      }

      .kb-injector-header,
      .kb-injector-body,
      .kb-injector-footer {
        background: #f3f3f3 !important;
        border-radius: 20px !important;
        box-shadow: 0 8px 24px rgba(0,0,0,.08) !important;
      }

      .kb-injector-header {
        padding: 28px 36px !important;
        margin-bottom: 14px !important;
      }

      .kb-injector-body {
        padding: 20px 28px !important;
      }

      .kb-injector-footer {
        padding: 20px 28px !important;
        margin-top: 14px !important;
        text-align: center !important;
      }

      .kb-field {
        margin-bottom: 18px !important;
      }

      .kb-field input,
      .kb-field textarea,
      .kb-field select {
        width: 100% !important;
        min-height: 46px !important;
        padding: 10px 12px !important;
        border: 1px solid #c8d4de !important;
        border-radius: 8px !important;
        background: #ffffff !important;
        color: #24384a !important;
        box-sizing: border-box !important;
        font-size: 15px !important;
      }

      .kb-field input:focus,
      .kb-field textarea:focus,
      .kb-field select:focus {
        border-color: #6ea8cf !important;
        box-shadow: 0 0 0 4px rgba(110,168,207,.18) !important;
        outline: none !important;
      }

      .kb-injector-footer button,
      .kb-injector-footer input[type="submit"],
      .kb-injector-footer input[type="button"] {
        background: #d88b3d !important;
        color: #fff !important;
        border: none !important;
        border-radius: 8px !important;
        min-width: 140px !important;
        height: 48px !important;
        padding: 0 24px !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);
    console.log('style injected');
  }

  function run() {
    injectStyle();
    document.body.style.outline = '6px solid red';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  window.addEventListener('load', () => {
    setTimeout(run, 300);
    setTimeout(run, 1000);
  });
})();
