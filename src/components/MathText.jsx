function MathText({ text, className = "" }) {
  return (
    <span
      className={className ? `math-text ${className}` : "math-text"}
      dangerouslySetInnerHTML={{ __html: toDisplayHtml(text || "") }}
    />
  );
}

function toDisplayHtml(input) {
  let html = escapeHtml(String(input).trim());

  html = html
    .replace(/\\\((.*?)\\\)/g, "$1")
    .replace(/\\\[(.*?)\\\]/g, "$1")
    .replace(/\\,/g, " ")
    .replace(/\\;/g, " ")
    .replace(/\\:/g, " ")
    .replace(/\\\\/g, " ");

  html = replaceFractions(html);
  html = replaceSquareRoots(html);

  const symbolReplacements = [
    [/\\times/g, "×"],
    [/\\cdot/g, "·"],
    [/\\div/g, "÷"],
    [/\\pm/g, "±"],
    [/\\neq/g, "≠"],
    [/\\leq/g, "≤"],
    [/\\geq/g, "≥"],
    [/\\lt/g, "<"],
    [/\\gt/g, ">"],
    [/\\pi/g, "π"],
    [/\\theta/g, "θ"],
    [/\\alpha/g, "α"],
    [/\\beta/g, "β"],
    [/\\gamma/g, "γ"],
    [/\\Delta/g, "Δ"],
    [/\\delta/g, "δ"],
    [/\\sin/g, "sin"],
    [/\\cos/g, "cos"],
    [/\\tan/g, "tan"],
    [/\\log/g, "log"],
    [/\\ln/g, "ln"],
    [/\\infty/g, "∞"],
    [/\\%/g, "%"],
    [/\\left/g, ""],
    [/\\right/g, ""],
    [/\\mathrm\{([^}]+)\}/g, "$1"],
    [/\\text\{([^}]+)\}/g, "$1"],
  ];

  for (const [pattern, replacement] of symbolReplacements) {
    html = html.replace(pattern, replacement);
  }

  html = html
    .replace(/([A-Za-z0-9)\]])_\{([^}]+)\}/g, (_, base, sub) => {
      return `${base}<sub>${formatScriptValue(sub)}</sub>`;
    })
    .replace(/([A-Za-z0-9)\]])\^\{([^}]+)\}/g, (_, base, sup) => {
      return `${base}<sup>${formatScriptValue(sup)}</sup>`;
    })
    .replace(/([A-Za-z0-9)\]])_([A-Za-z0-9+\-]+)/g, (_, base, sub) => {
      return `${base}<sub>${formatScriptValue(sub)}</sub>`;
    })
    .replace(/([A-Za-z0-9)\]])\^([A-Za-z0-9+\-]+)/g, (_, base, sup) => {
      return `${base}<sup>${formatScriptValue(sup)}</sup>`;
    })
    .replace(/\s{2,}/g, " ")
    .trim();

  return html;
}

function replaceFractions(value) {
  let next = value;
  let previous = "";

  while (next !== previous) {
    previous = next;
    next = next.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1/$2)");
  }

  return next;
}

function replaceSquareRoots(value) {
  let next = value;
  let previous = "";

  while (next !== previous) {
    previous = next;
    next = next.replace(/\\sqrt\{([^{}]+)\}/g, "√($1)");
  }

  return next;
}

function formatScriptValue(value) {
  const cleaned = value.trim().toLowerCase();
  const baseNames = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    sixteen: "16",
  };

  return baseNames[cleaned] || value.trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default MathText;
