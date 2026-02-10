import { Button } from '@/components/atomos/button/button';
import { Input } from '@/components/atomos/input/input';
import { Label } from '@/components/atomos/label/label';

export const LoginForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <div>
        <Label>Email</Label>
        <Input placeholder="Digite seu email" required />
      </div>
      <div>
        <Label>Senha</Label>
        <Input type="password" placeholder="*******" required />
      </div>
      <Button variant="ghost">Acessar</Button>
    </form>
  );
};
