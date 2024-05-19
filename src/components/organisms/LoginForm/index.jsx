import InputForm from "@/components/molecules/InputForm";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <>
      <form className="">
        <InputForm />
        {/* <InputForm
          htmlFor="email"
          children="Your E-mail here"
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
        /> */}
        <Button>Login</Button>
      </form>
    </>
  );
}
