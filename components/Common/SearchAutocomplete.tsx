"use client";
import React, {useState, useEffect, useRef} from "react";
import {X} from "lucide-react";

interface Product {
    id: number;
    title: string;
}

export default function SearchAutocomplete() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setResults([]);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                const data = await res.json();
                setResults(data.products?.slice(0, 4) || []);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <div ref={containerRef} className="relative w-full">
            <input
                type="text"
                placeholder="Search for jewellery..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 bg-black text-white focus:outline-none"
            />

            {query && (
                <X
                    onClick={() => {
                        setQuery("");
                        setResults([]);
                    }}
                    className="absolute right-3 top-2.5 cursor-pointer text-gray-400 hover:text-white"
                    size={18}
                />
            )}

            {loading && (
                <p className="absolute top-12 text-sm text-gray-400">Searching...</p>
            )}

            {results.length > 0 && !loading && (
                <div className="absolute w-full bg-white text-black shadow-lg invert-100 sm:mt-1 mt-3">
                    {results.map((item) => (
                        <div
                            key={item.id}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}

            {query.length >= 2 && !loading && results.length === 0 && (
                <p className="absolute md:top-12 text-sm text-white top-16">No match found</p>
            )}
        </div>
    );
}
