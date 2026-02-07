# Iniciando projeto 
padrão de funções PascalCase
Padrão de arquivos e variaveis camelCase

Iniciando ambiente
Instalando next configs basicas

instalando dependencias prisma storybook


# Configurando base 
prisma init 


cofiguração base conexão postgre .env schema  

criando lib/prisma cliente

✔ Evita múltiplas conexões
✔ Funciona com App Router
✔ Funciona com Hot Reload
✔ Funciona com API Routes
✔ Funciona em produção

codigo 
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma



criado banco em postgree

CREATE USER vivioteca WITH PASSWORD '';



preparando merge em utils/cn.ts

O tailwind-merge resolve conflitos de classes do Tailwind, e o clsx lida com condicionais.

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
