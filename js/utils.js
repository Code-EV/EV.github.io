function debounce(t,n,e){let i;return function(){const o=this,a=arguments,c=e&&!i;clearTimeout(i),i=setTimeout(function(){i=null,e||t.apply(o,a)},n),c&&t.apply(o,a)}}function throttle(t,n,e){let i,o,a,c=0;e||(e={});const s=function(){c=!1===e.leading?0:(new Date).getTime(),i=null,t.apply(o,a),i||(o=a=null)};return function(){const l=(new Date).getTime();c||!1!==e.leading||(c=l);const r=n-(l-c);o=this,a=arguments,r<=0||r>n?(i&&(clearTimeout(i),i=null),c=l,t.apply(o,a),i||(o=a=null)):i||!1===e.trailing||(i=setTimeout(s,r))}}function sidebarPaddingR(){const t=window.innerWidth,n=document.body.clientWidth,e=t-n;t!==n&&$("body").css("padding-right",e)}function isIpad(){return"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1}function isTMobile(){const t=navigator.userAgent;return window.screen.width<992&&/iPad|iPhone|iPod|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t)}function isMobile(){return this.isIpad()||this.isTMobile()}function isDesktop(){return!this.isMobile()}function scrollToDest(t,n=0){const e=$(t).offset();$("body,html").animate({scrollTop:e.top-n})}function loadScript(t,n){const e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,n())}:e.onload=function(){n()},e.src=t,document.body.appendChild(e)}function snackbarShow(t,n,e){const i=void 0!==n&&n,o=void 0!==e?e:2e3,a=GLOBAL_CONFIG.Snackbar.position,c="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:t,backgroundColor:c,showAction:i,duration:o,pos:a})}const Cookies={get:function(t){const n=`; ${document.cookie}`.split(`; ${t}=`);if(2===n.length)return n.pop().split(";").shift()},set:function(t,n,e){let i="";if(e){const t=new Date;t.setTime(t.getTime()+24*e*60*60*1e3),i="; expires="+t.toUTCString()}document.cookie=t+"="+(n||"")+i+"; path=/"}},initJustifiedGallery=function(t){t.each(function(t,n){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})};GLOBAL_CONFIG.islazyload&&(window.lazyLoadOptions={elements_selector:"img",threshold:0});