import { FiSearch } from 'react-icons/fi';

import { Button } from '@/components/atomos/button/button';
import { Input } from '@/components/atomos/input/input';

const InputSeach = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <div className=" w-min rounded-lg flex flex-row gap-4 items-center justify-center bg-gray-50 border border-border p-2 ">
          <FiSearch size={25} />
          <Input className="border-none" placeholder="Pesquise pelo nome" />
        </div>
        <Button variant="ghost">Pesquisar</Button>
      </div>
    </>
  );
};

export { InputSeach };
