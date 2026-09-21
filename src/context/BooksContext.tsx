'use client'
import { BookType } from "@/type";
import { createContext, ReactNode, useState } from "react";

interface BooksContextType {
    readBooks: BookType[];
    setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
    wishlist: BookType[];
    setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks] = useState<BookType[]>([]);
    const [wishlist, setWishlist] = useState<BookType[]>([]);


    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;