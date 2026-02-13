import { FiSearch } from 'react-icons/fi';

import { Button } from '@/components/atomos/button/button';
import { Input } from '@/components/atomos/input/input';

const InputSearch = () => {
  return (
    <div className="flex items-center gap-4">
      <Input
        variant="search"
        placeholder="Pesquise pelo nome"
        leftIcon={<FiSearch size={18} />}
      />

      <Button variant="ghost">Pesquisar</Button>
    </div>
  );
};

export { InputSearch };
