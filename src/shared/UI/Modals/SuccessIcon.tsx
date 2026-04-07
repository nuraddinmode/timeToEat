const SuccessIcon = () => {
  return (
    <svg
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      style={{
        marginBottom: "20px",
        animation: "pop 0.3s ease",
      }}
    >
      <path
        d="M47 92C71.8528 92 92 71.8528 92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92Z"
        stroke="#4D8F76"
        strokeWidth="4"
        style={{
          strokeDasharray: 283,
          strokeDashoffset: 283,
          animation: "circleDraw 0.6s ease forwards",
        }}
      />

      <path
        d="M29 49.25L42.5 62.75L65 35.75"
        stroke="#4D8F76"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 60,
          strokeDashoffset: 60,
          animation: "checkDraw 0.4s ease forwards",
          animationDelay: "0.6s",
        }}
      />
    </svg>
  );
};

export { SuccessIcon };
