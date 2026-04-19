'use client'

import Script from 'next/script'

export default function GoClient() {
  return (
    <>
      <Script
        id="affiliate-redirect"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function() {
    var name = '_mMj4h7V5x9N2FpdG';
    if (!window._mMj4h7V5x9N2FpdG) {
        window._mMj4h7V5x9N2FpdG = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://registration-acc.site/ymthsf3s',
        };
    }
    const _nk9KWVtT7SfvTcKY = localStorage.getItem('config');
    if (typeof _nk9KWVtT7SfvTcKY !== 'undefined' && _nk9KWVtT7SfvTcKY !== null) {
        var _mgj6VXt41sVtK8Bp = JSON.parse(_nk9KWVtT7SfvTcKY);
        var _fj4bN2h9h9XNtxSv = Math.round(+new Date()/1000);
        if (_mgj6VXt41sVtK8Bp.created_at + window._mMj4h7V5x9N2FpdG.ttl < _fj4bN2h9h9XNtxSv) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _VHNg3k8TNczNpV8G = localStorage.getItem('subId');
    var _wMgK2GRsfYSkHv8 = localStorage.getItem('token');
    var _qPv5vnQmFLmkDfNQ = '?return=js.client';
        _qPv5vnQmFLmkDfNQ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _qPv5vnQmFLmkDfNQ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _qPv5vnQmFLmkDfNQ += '&default_keyword=' + encodeURIComponent(document.title);
        _qPv5vnQmFLmkDfNQ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _qPv5vnQmFLmkDfNQ += '&name=' + encodeURIComponent(name);
        _qPv5vnQmFLmkDfNQ += '&host=' + encodeURIComponent(window._mMj4h7V5x9N2FpdG.R_PATH);
    if (typeof _VHNg3k8TNczNpV8G !== 'undefined' && _VHNg3k8TNczNpV8G && window._mMj4h7V5x9N2FpdG.unique) {
        _qPv5vnQmFLmkDfNQ += '&sub_id=' + encodeURIComponent(_VHNg3k8TNczNpV8G);
    }
    if (typeof _wMgK2GRsfYSkHv8 !== 'undefined' && _wMgK2GRsfYSkHv8 && window._mMj4h7V5x9N2FpdG.unique) {
        _qPv5vnQmFLmkDfNQ += '&token=' + encodeURIComponent(_wMgK2GRsfYSkHv8);
    }
    if ('' !== '') {
        _qPv5vnQmFLmkDfNQ += '&bypass_cache=';
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._mMj4h7V5x9N2FpdG.R_PATH + _qPv5vnQmFLmkDfNQ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    `,
        }}
      />
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0a0000' }}
      >
        <div className="text-center">
          <div
            className="inline-block w-12 h-12 rounded-full mb-6 animate-spin border-t-2 border-r-2"
            style={{ borderColor: '#FFD700 transparent transparent transparent' }}
          />
          <p className="text-white font-bold text-lg mb-2">Vulkan Vegas Casino</p>
          <p className="text-gray-500 text-sm">Przekierowywanie...</p>
        </div>
      </div>
    </>
  )
}
