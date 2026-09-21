'use client'

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/type";
import { use } from "react";
import { toast } from "react-toastify";

const Wishlist = ({ book }: { book: BookType }) => {
    const BookContext = use(BooksContext);
    if (!BookContext) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }
    const { wishlist, setWishlist } = BookContext;

    const handleWishlistButton = (book: BookType) => {
        setWishlist([...wishlist, book]);
        toast.success(`You have added ${book.bookName} to your wishlist.`);
    }
    return (
        <div>
            <button className="btn btn-success" onClick={() => handleWishlistButton(book)}>Wishlist</button>
        </div>
    );
};

export default Wishlist;