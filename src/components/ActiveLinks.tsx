import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ActiveLinks({
  children,
  href,
  ...rest
}: ActiveLinkProps) {
  const pathname = usePathname();

  const isCurrentPath = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isCurrentPath
          ? "bg-cyan-500 text-zinc-900 rounded p-2"
          : " transparent hover:bg-cyan-500 hover:text-zinc-900 rounded p-2 transition"
      }`}
    >
      {children}
    </Link>
  );
}
