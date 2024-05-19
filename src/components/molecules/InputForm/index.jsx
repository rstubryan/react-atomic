import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputForm({ htmlFor, children, type, id, name, placeholder }) {
  return (
    <>
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input type={type} id={id} name={name} placeholder={placeholder} />
      {/* <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" name="name" placeholder= "Enter your name" />
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" name="email" placeholder= "Enter your email" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" name="password" placeholder= "Enter your password" /> */}
    </>
  );
}
