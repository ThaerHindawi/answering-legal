import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative w-[267px] h-[42px] lg:w-[293px] lg:h-[48px]">
      <Image src="/logo.svg" alt="Answering Legal Logo" loading="lazy" fill />
    </Link>
  );
}
