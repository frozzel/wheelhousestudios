import React, { useEffect } from 'react';

const HoneyBookWidget = () => {
  useEffect(() => {
    (function(h,b,s,n,i,p,e,t) {
      h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
      t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
      e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
    })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","63c87e713ebfde0006dc9ba7");
  }, []);

  return (
    <div id="honeybook-widget-container">
      <div className="hb-p-63c87e713ebfde0006dc9ba7-1"></div>
      <img height="1" width="1" style={{display: "none"}} src="https://www.honeybook.com/p.png?pid=63c87e713ebfde0006dc9ba7"/>
    </div>
  );
};

export default HoneyBookWidget;
