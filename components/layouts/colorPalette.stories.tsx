import '@/styles/globals.css';

export default {
  title: 'Design System/Colors',
};

const colors = [
  {
    name: 'Background',
    var: 'var(--color-background)',
    describe: 'Fundo principal: Papel Off-white',
  },
  {
    name: 'Foreground',
    var: 'var(--color-foreground)',
    describe: 'Texto principal: Marrom profundo para contraste máximo',
  },
  {
    name: 'Primary',
    var: 'var(--color-primary)',
    describe: 'Cor de Marca: Terracota para ações primárias (CTAs)',
  },
  {
    name: 'Muted',
    var: 'var(--color-muted)',
    describe:
      'UI Neutra: Tom sépia para fundos secundários e elementos discretos',
  },
  { name: 'Error', var: 'var(--color-error)', describe: 'Alerta de erro' },
  { name: 'Alert', var: 'var(--color-alert)', describe: 'Alerta de aviso' },
  { name: 'Disable', var: 'var(--color-disable)', describe: 'Desativado' },
];

export const Palette = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {colors.map((color) => (
        <div key={color.name} className="space-y-2">
          <div
            className="h-24 w-full rounded-lg"
            style={{ backgroundColor: color.var }}
          />
          <p className="text-sm font-medium">{color.name}</p>
          <code className="text-xs">{color.var}</code>
          <p>{color.describe}</p>
        </div>
      ))}
    </div>
  );
};
