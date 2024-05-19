import { cn } from "@/lib/utils";

export default function HeadingText({ children, className, ...props }) {
  return (
    <>
      <h1 className={cn(`scroll-m-20 text-2xl font-semibold tracking-tight text-primary`, className)} {...props}>
        {children}
      </h1>
    </>
  );
}
