export function ServiceLogo({
  className = "",
  width = 200,
  height = 29,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      className={className}
      focusable="false"
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 140 40"
    >
      <text
        x="5"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        SERVICE MOBILE
      </text>
    </svg>
  );
}
