'use client'

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/type";
import { use } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: BookType }) => {
    const BookContext = use(BooksContext);
    if (!BookContext) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }
    const { readBooks, setReadBooks } = BookContext;

    const handleReadButton = (book: BookType) => {
        setReadBooks([...readBooks, book]);
        toast.success(`You have added ${book.bookName} to your readlist.`);
    }
    return (
        <div>
            <button className="btn btn-soft" onClick={() => handleReadButton(book)}>Read</button>
        </div>
    );
};

export default ReadButton;