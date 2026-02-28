import { Box } from '@/components/atomos/box/box';
import { Button } from '@/components/atomos/button/button';
import { Input } from '@/components/atomos/input/input';
import { Label } from '@/components/atomos/label/label';
import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { InputBox } from '@/components/moleculas/inputBox/inputBox';

const LoginForm = () => {
  return (
    <Box>
      <Heading>Login</Heading>
      <Text>See what is going on with your business</Text>
      <form action="" className="flex flex-col gap-4">
        <InputBox>
          <Label>Email</Label>
          <Input placeholder="Digite seu email" required />
        </InputBox>

        <InputBox>
          <Label>Senha</Label>
          <Input type="password" placeholder="*******" required />
        </InputBox>
        <InputBox variant="adicionais">
          <InputBox variant="lateral">
            <input type="checkbox" />
            <Text>Manter logado</Text>
          </InputBox>

          <Link href={'/reset-password'}>Forgot Password?</Link>
        </InputBox>
        <Button size="full">Acessar</Button>
      </form>
      <Text>--------- or Sign in with Social Acouts-----</Text>
      <Button variant="social" size="full">
        Acessar com Google
      </Button>
      <Button variant="social" size="full">
        Acessar com Facebook
      </Button>
      <Button variant="social" size="full">
        Acessar com Github
      </Button>
      <Text>
        Not Registered Yet? <Link href={'/register'}>Create an account</Link>
      </Text>
    </Box>
  );
};

export { LoginForm };
