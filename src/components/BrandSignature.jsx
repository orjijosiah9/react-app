import SiteLogo from "./SiteLogo";

function BrandSignature({ size = "large", title = "Math Arena", contextLabel = "Powered by" }) {
  return (
    <div className={`brand-signature brand-signature-${size}`}>
      <SiteLogo size={size === "small" ? "small" : "large"} />
      <div className="brand-signature-copy">
        <p className="brand-kicker">{contextLabel}</p>
        <strong className="brand-powered">WCCRM Akure District</strong>
        <span className="brand-title">{title}</span>
      </div>
    </div>
  );
}

export default BrandSignature;
