export type IconName =
  | "mortar"
  | "leaf"
  | "droplet"
  | "cross"
  | "head"
  | "baby"
  | "sun"
  | "snowflake"
  | "shield"
  | "truck"
  | "mail"
  | "heart"
  | "star"
  | "check"
  | "cart"
  | "menu"
  | "close"
  | "chevron-right"
  | "chevron-down"
  | "clock"
  | "pin"
  | "phone"
  | "lock"
  | "badge-check"
  | "minus"
  | "plus"
  | "arrow-right";

const paths: Record<IconName, React.ReactNode> = {
  mortar: (
    <>
      <path d="M5 12h14" />
      <path d="M5 12c0 4.4 3.1 7.5 7 7.5s7-3.1 7-7.5" />
      <path d="M9.5 12c-.3-2.6 1-4.7 2.5-6.5 1.5 1.8 2.8 3.9 2.5 6.5" />
      <circle cx="12" cy="4.2" r="1" />
    </>
  ),
  leaf: (
    <>
      <path d="M6 19c-1.5-5 1-11 11-13 1 8-3.5 12.5-11 13Z" />
      <path d="M7.5 17.5 17 8" />
    </>
  ),
  droplet: (
    <path d="M12 3.5c3 4 5.5 7.6 5.5 10.8a5.5 5.5 0 1 1-11 0c0-3.2 2.5-6.8 5.5-10.8Z" />
  ),
  cross: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  head: (
    <>
      <path d="M8.5 14.5 6 12l2.5-2.5" />
      <path d="M15.5 9.5 18 12l-2.5 2.5" />
      <path d="M12 4a8 8 0 0 0-8 8c0 3 1.4 4.8 2.6 6.2.6.7 1 1.6 1 2.6v.2h8.8v-.2c0-1 .4-1.9 1-2.6C18.6 16.8 20 15 20 12a8 8 0 0 0-8-8Z" />
    </>
  ),
  baby: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
      <path d="M10 7.5c.5.7 1.5.7 2 0" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2.5v19M4 7.2l16 9.6M20 7.2 4 16.8" />
      <path d="M12 2.5 9.8 4.8M12 2.5l2.2 2.3M12 21.5l-2.2-2.3M12 21.5l2.2-2.3" />
    </>
  ),
  shield: (
    <path d="M12 3.5 5 6v5.5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-2.5Z" />
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10.5h4l3 3V16h-7z" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-9.7-9.4C.7 7.1 2.6 4 5.9 4c2 0 3.4 1.1 4.1 2.3C10.7 5.1 12.1 4 14.1 4c3.3 0 5.2 3.1 3.6 6.6C19.5 15.4 12 20 12 20Z" />
  ),
  star: (
    <path d="m12 3.5 2.5 5.4 5.8.6-4.4 4 1.3 5.8L12 16.4l-5.2 2.9 1.3-5.8-4.4-4 5.8-.6Z" />
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  cart: (
    <>
      <path d="M3.5 4h2l1.6 10.2A2 2 0 0 0 9.1 16h7.8a2 2 0 0 0 2-1.7L20 7H6" />
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </>
  ),
  menu: <path d="M4 6.5h16M4 12h16M4 17.5h16" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  "chevron-right": <path d="m9 5 7 7-7 7" />,
  "chevron-down": <path d="m5 9 7 7 7-7" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.3 4-2 1.5a11 11 0 0 0 5.2 5.2l1.5-2 4 1.3v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 5 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="1.6" />
      <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" />
    </>
  ),
  "badge-check": (
    <>
      <path d="m12 3 2.1 1.2 2.4-.3 1.1 2.1 2.1 1.1-.3 2.4L20.6 12l-1.2 2.1.3 2.4-2.1 1.1-1.1 2.1-2.4-.3L12 21l-2.1-1.2-2.4.3-1.1-2.1-2.1-1.1.3-2.4L3.4 12l1.2-2.1-.3-2.4 2.1-1.1L7.5 4.3l2.4.3Z" />
      <path d="m8.5 12.3 2.3 2.2 4.7-4.8" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  plus: <path d="M12 5v14M5 12h14" />,
  "arrow-right": <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
