'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

const SearchComponent = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault(); 
        console.log('Valor de búsqueda:', search); 
        router.push(`/?query=${search}`); 
        setSearch('');
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log('Valor de búsqueda actualizado:', e.target.value); 
        router.push(`/?query=${e.target.value}`);
    };

    return (
        <div>
            <div className="flex flex-row justify-between items-center p-2 md:m-3">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </div>
    );
};

export default SearchComponent;
