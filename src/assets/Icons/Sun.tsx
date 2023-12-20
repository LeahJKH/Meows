interface sunSvgProps {
  onClick: () => void; 
}
export default function SunSvg({ onClick }: sunSvgProps) {
  return (
    <>
      <svg onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
          fill="#363853"
          fillOpacity="0.15"
          stroke="whitesmoke"
          strokeWidth="1.5"
        />
        <path
          d="M18.3117 5.68834L18.4286 5.57143M5.57144 18.4286L5.68832 18.3117M12 3.07394V3M12 21V20.9261M3.07394 12H3M21 12H20.9261M5.68831 5.68834L5.5714 5.57143M18.4286 18.4286L18.3117 18.3117"
          stroke="whitesmoke"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
