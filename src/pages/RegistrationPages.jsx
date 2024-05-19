import RegisterForm from "@/components/organisms/RegisterForm";
import AuthLayout from "@/components/templates/AuthLayout";
import ContainerLayout from "@/components/templates/ContainerLayout";

export default function RegistrationPages() {
  return (
    <>
      <ContainerLayout>
        <AuthLayout label="Register">
          <RegisterForm />
        </AuthLayout>
      </ContainerLayout>
    </>
  );
}
