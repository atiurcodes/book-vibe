import { BookType } from "@/type";
import BookCard from "../BookCard";

export interface BooksProps {
    prop: BookType[];
}

const booksPromise = async (): Promise<BookType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASED_URL}/booksData.json`);
    if (!res.ok) {
        throw new Error('Failed to Books data fatching.')
    }
    const data = res.json();
    return data;
}
const Books = async () => {
    const allBooks = await booksPromise();
    return (
        <section className='container mx-auto px-4 py-20'>
            <h2 className="text-4xl text-neutral font-semibold text-center py-5">Explore Popular Books</h2>
            <div className="grid grid-cols-3 gap-8">
                {
                    allBooks.slice(0, 6).map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </section>
    );
};

export default Books;