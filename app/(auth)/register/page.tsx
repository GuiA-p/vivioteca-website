import { Typography } from '@/components/atomos/typography/typography';
import { RegisterForm } from '@/components/organismos/forms/register-form';

export default function RegisterPage() {
  return (
    <main className="container mx-auto min-h-screen">
      <Typography variant="h1">Cadastrar</Typography>
      <RegisterForm />
    </main>
  );
}
