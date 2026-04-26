import { useState } from "react";

const LOGO_SRC = "/wccrm-logo.png";

function SiteLogo({ size = "large" }) {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className={`site-logo site-logo-${size}`}>
      {showImage ? (
        <img
          src={LOGO_SRC}
          alt="WCCRM Akure District logo"
          onError={() => setShowImage(false)}
        />
      ) : (
        <div className="site-logo-fallback" aria-label="WCCRM Akure District">
          <span>WCCRM</span>
        </div>
      )}
    </div>
  );
}

export default SiteLogo;
