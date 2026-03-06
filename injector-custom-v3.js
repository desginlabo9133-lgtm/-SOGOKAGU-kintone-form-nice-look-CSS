(() => {
  'use strict';

  const STYLE_ID = 'sogokagu-full-style';

  function injectStyle() {
    const old = document.getElementById(STYLE_ID);
    if (old) old.remove();

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }

      body .kb-injector {
        background: #a9cbe0 !important;
        color: #24384a !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Hiragino Sans", "Noto Sans JP", sans-serif !important;
      }

      body .kb-injector .kb-injector-main {
        max-width: 980px !important;
        margin: 0 auto !important;
        padding: 18px !important;
      }

      body .kb-injector .kb-injector-header,
      body .kb-injector .kb-injector-body,
      body .kb-injector .kb-injector-footer {
        background: #f3f3f3 !important;
        border-radius: 20px !important;
        box-shadow: 0 8px 24px rgba(0,0,0,.08) !important;
      }

      body .kb-injector .kb-injector-header {
        padding: 28px 36px !important;
        margin-bottom: 14px !important;
      }

      body .kb-injector .kb-injector-body {
        padding: 20px 28px !important;
      }

      body .kb-injector .kb-injector-footer {
        padding: 18px 28px !important;
        margin-top: 14px !important;
        text-align: center !important;
      }

      body .kb-injector .kb-field {
        margin-bottom: 18px !important;
        text-align: left !important;
      }

      body .kb-injector .kb-field input,
      body .kb-injector .kb-field textarea,
      body .kb-injector .kb-field select {
        width: 100% !important;
        min-height: 46px !important;
        padding: 10px 12px !important;
        border: 1px solid #c8d4de !important;
        border-radius: 8px !important;
        background: #ffffff !important;
        color: #24384a !important;
        box-sizing: border-box !important;
        font-size: 15px !important;
        box-shadow: none !important;
        appearance: none !important;
      }

      body .kb-injector .kb-field input:focus,
      body .kb-injector .kb-field textarea:focus,
      body .kb-injector .kb-field select:focus {
        border-color: #6ea8cf !important;
        box-shadow: 0 0 0 4px rgba(110,168,207,.18) !important;
        outline: none !important;
      }

      body .kb-injector .kb-injector-footer button,
      body .kb-injector .kb-injector-footer input[type="submit"],
      body .kb-injector .kb-injector-footer input[type="button"] {
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
        box-shadow: 0 6px 18px rgba(216,139,61,.25) !important;
      }

      @media (max-width: 767px) {
        body .kb-injector .kb-injector-main {
          padding: 10px !important;
        }

        body .kb-injector .kb-injector-header,
        body .kb-injector .kb-injector-body,
        body .kb-injector .kb-injector-footer {
          padding: 18px !important;
          border-radius: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);
    console.log('[SOGOKAGU] full style injected');
  }

  function run() {
    injectStyle();
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
