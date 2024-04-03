import React, { useEffect } from 'react';
import 'iframe-resizer';


const HoneyBookWidget = () => {
  useEffect(() => {
    // Add script
    (function(h,b,s,n,i,p,e,t) {
      h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
      t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
      e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
    })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","63c87e713ebfde0006dc9ba7");
    
    // Cleanup function
    return () => {
      // Remove script
      const script = document.querySelector('script[src="https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js"]');
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Wait for iFrameResize to be available
    if (window.iFrameResize) {
      // Initialize iFrameResizer
      window.iFrameResize({
        warningTimeout: 0, // Set to zero to suppress the warning
      });
    }
  }, []);

  return(
    <div id="honeybook-widget-container">
      <div className="hb-p-63c87e713ebfde0006dc9ba7-1"></div>
      <img height="1" width="1" style={{display: "none"}} src="https://www.honeybook.com/p.png?pid=63c87e713ebfde0006dc9ba7"/>
    </div>
  );
};

export default HoneyBookWidget;
