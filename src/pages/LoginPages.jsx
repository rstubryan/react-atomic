import LoginForm from "@/components/organisms/LoginForm";
import AuthLayout from "@/components/templates/AuthLayout";
import ContainerLayout from "@/components/templates/ContainerLayout";

export default function LoginPages() {
  return (
    <>
      <ContainerLayout>
        <AuthLayout label="Login">
          <LoginForm />
        </AuthLayout>
      </ContainerLayout>
    </>
  );
}
