import clsxm from "@/lib/clsxm";
import Link, { LinkProps } from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "danger";
};

export default function ButtonLink({
  children,
  href,
  className,
  variant = "default",
}: ButtonLinkProps) {
  return (
    <Link href={href}>
      <a
        className={clsxm(
          "border-2 border-gray-900 py-2 px-4 font-bold tracking-wide text-lg transition-colors text-center uppercase",
          [
            variant === "default" && [
              "hover:bg-gray-900 hover:border-gray-900 hover:text-white",
            ],
            variant === "primary" && [
              "bg-green-500 border-green-500 text-white hover:bg-green-700 hover:border-green-700 hover:text-white",
            ],
            variant === "danger" && [
              "bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:text-white",
            ],
          ],
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}
