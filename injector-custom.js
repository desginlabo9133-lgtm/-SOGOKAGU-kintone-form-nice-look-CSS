(() => {
  'use strict';

  const STYLE_ID = 'sogokagu-injector-style';

  function injectStyle() {
    const old = document.getElementById(STYLE_ID);
    if (old) old.remove();

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .kb-injector {
        background: #a9cbe0 !important;
        color: #24384a !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Hiragino Sans", "Noto Sans JP", sans-serif !important;
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

      .kb-field label,
      .kb-field .control-label,
      .kb-field [class*="label"] {
        display: block !important;
        margin-bottom: 8px !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        color: #24384a !important;
      }

      .kb-field input[type="text"],
      .kb-field input[type="email"],
      .kb-field input[type="tel"],
      .kb-field input[type="number"],
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
        box-shadow: none !important;
        appearance: none !important;
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
        box-shadow: 0 6px 18px rgba(216,139,61,.25) !important;
      }

      @media (max-width: 767px) {
        .kb-injector-main {
          padding: 10px !important;
        }

        .kb-injector-header,
        .kb-injector-body,
        .kb-injector-footer {
          padding: 18px !important;
          border-radius: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function runSafe() {
    try {
      injectStyle();
      console.log('[SOGOKAGU] custom style injected');
    } catch (e) {
      console.error('[SOGOKAGU] inject error', e);
    }
  }

  function boot() {
    runSafe();

    const target = document.body;
    if (!target) return;

    const observer = new MutationObserver(() => {
      if (document.querySelector('.kb-injector')) {
        runSafe();
      }
    });

    observer.observe(target, { childList: true, subtree: true });

    setTimeout(runSafe, 300);
    setTimeout(runSafe, 1000);
    setTimeout(runSafe, 2000);
  }

  if (window.kb && kb.event && typeof kb.event.on === 'function') {
    kb.event.on('kb.view.load', (event) => {
      boot();
      return event;
    });
  } else {
    window.addEventListener('load', boot);
  }
})();
