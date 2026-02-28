import { Box } from '@/components/atomos/box/box';
import { Button } from '@/components/atomos/button/button';
import { Input } from '@/components/atomos/input/input';
import { Label } from '@/components/atomos/label/label';
import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { InputBox } from '@/components/moleculas/inputBox/inputBox';

export const RegisterForm = () => {
  return (
    <>
      <Box>
        <Heading>Register</Heading>
        <Text>
          Faça seu cadastro e conheça a maior biblioteca de avaliações de
          livros.
        </Text>
        <form action="">
          <InputBox>
            <Label>Email</Label>
            <Input placeholder="Digite seu email" required />
          </InputBox>
          <InputBox>
            <Label>Nome</Label>
            <Input placeholder="Digite seu email" required />
          </InputBox>
          <InputBox>
            <Label>Senha</Label>
            <Input type="password" placeholder="*******" required />
          </InputBox>

          <InputBox>
            <Label>Confirme sua senha</Label>
            <Input type="password" placeholder="*******" required />
          </InputBox>

          <InputBox variant="lateral">
            <input type="checkbox" />
            <Text>Aceito os termos</Text>
          </InputBox>
          <InputBox variant="lateral">
            <input type="checkbox" />
            <Text>REPTCHA</Text>
          </InputBox>

          <Button size="full">Registrar</Button>
        </form>
        <Text>--------- or Sign in with Social Acouts-----</Text>
        <Button variant="social" size="full">
          Register com Google
        </Button>
        <Button variant="social" size="full">
          Register com Facebook
        </Button>
        <Button variant="social" size="full">
          Register com Github
        </Button>
        <Text>
          You have acount? <Link href={'/login'}>Login</Link>
        </Text>
      </Box>
    </>
  );
};
