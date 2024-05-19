import InputForm from "@/components/molecules/InputForm";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  return (
    <>
      <form className="">
        <InputForm />
        {/* <InputForm
          htmlFor="fname"
          children="Your Full Name"
          type="text"
          id="fname"
          name="fname"
          placeholder="John Doe"
        /> */}
        <Button>Register</Button>
      </form>
    </>
  );
}
