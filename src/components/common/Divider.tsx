type DividerProps = {
  className?: string;
};

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`bg-accent-cyan h-0.5 w-full max-w-full rounded-10 ${className}`}
    />
  );
}
