import { Typography } from '@/components/atomos/typography/typography';
import { LoginForm } from '@/components/organismos/forms/login-form';

export default function LoginPage() {
  return (
    <main className="container mx-auto min-h-screen">
      <Typography variant="h1">Login</Typography>
      <LoginForm />
    </main>
  );
}
