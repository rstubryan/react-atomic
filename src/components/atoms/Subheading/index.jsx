import { cn } from "@/lib/utils";

export default function SubheadingText({ children, className, ...props }) {
  return (
    <>
      <h2 className={cn(`scroll-m-20 text-xl font-semibold tracking-tight text-secondary`, className)} {...props}>
        {children}
      </h2>
    </>
  );
}
