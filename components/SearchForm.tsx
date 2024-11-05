import Form from 'next/form'
import { SearchFormReset } from './SearchFormReset'
import { Search } from 'lucide-react'

export function SearchForm({query}: {query?: string}) {
  return (
    <Form action="/" scroll={false} className="search-form">
        <input name='query' defaultValue={query} placeholder='Search Startups' className="search-input" />
        <div className="flex gap-2">
          {query && <SearchFormReset  />}
        <button type='submit' className='text-white search-btn'>
            <Search className='size-5'/>
        </button>
        </div>
    </Form>
  )
}

