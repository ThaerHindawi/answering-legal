import Link from "next/link";

export default function Top() {
  return (
    <div className="hidden lg:flex items-center justify-end gap-8 h-3.5">
      <Link className="text-neutral-gray capitalize text-xl underline" href="/">
        Support
      </Link>
      <div className="text-xl text-brand-primary font-semibold">
        <span>(631) 686-9700</span>
      </div>
    </div>
  );
}
