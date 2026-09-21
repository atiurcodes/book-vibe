'use client'
import ListedBooksCards from '@/components/ListedBooksCards';
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/type';
import React, { use, useState } from 'react';

const ListedBookPage = () => {
    const [sortBy, setSortBy] = useState<'pages' | 'ratings' | 'year'>('pages');
    const BookContext = use(BooksContext);
    if (!BookContext) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }
    const { readBooks } = BookContext;
    const { wishlist } = BookContext;
    const sortBooks = (books: BookType[]) => {
        const sortedBooks = [...books];
        if (sortBy === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === 'ratings') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    }
    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlistBooks = sortBooks(wishlist);
    return (
        <section className='container mx-auto px-4'>
            <div className='bg-amber-100 p-7 rounded-xl flex justify-center items-center my-10'>
                <h2 className='text-4xl font-semibold'>Books</h2>
            </div>
            <div className='flex justify-center'>
                <select value={sortBy} onChange={e => setSortBy(e.target.value as 'pages' | 'ratings' | 'year')}
                    className="select select-accent">
                    <option disabled={true}>Sort By</option>
                    <option value={'pages'}>Pages</option>
                    <option value={'ratings'}>Ratings</option>
                    <option value={'year'}>Year</option>
                </select>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`ReadBooks(${readBooks.length})`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {readBooks.length > 0 ? (
                            sortedReadBooks.map(book => <ListedBooksCards key={book.bookId} book={book} />)
                        ) : (
                            <h2 className='text-3xl font-semibold text-center'>No Read Books found</h2>
                        )}
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist(${wishlist.length})`} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {wishlist.length > 0 ? (
                            sortedWishlistBooks.map(book => <ListedBooksCards key={book.bookId} book={book} />)
                        ) : (
                            <h2 className='text-3xl font-semibold text-center'>No wishlist books found</h2>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListedBookPage;