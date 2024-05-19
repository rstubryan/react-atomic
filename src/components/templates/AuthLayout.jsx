import HeadingText from "../atoms/Heading";

export default function AuthLayout({ label, children }) {
  return (
    <>
      <div className="">
        <HeadingText>{label}</HeadingText>
        {children}
      </div>
    </>
  );
}
