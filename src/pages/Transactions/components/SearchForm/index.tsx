import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from '../../../Transactions/components/SearchForm/styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
