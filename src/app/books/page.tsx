import BookCard from "@/components/BookCard";
import { BookType } from "@/type";

export interface BookPage {
    prop: BookType[];
}

const bookPromise = async (): Promise<BookType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASED_URL}/booksData.json`);
    if (!res.ok) {
        throw new Error('Failed to Books data fatching.')
    }
    const data = await res.json();
    return data;
}
const BookPage = async () => {
    const books = await bookPromise();
    return (
        <section className='container mx-auto px-4 py-20'>
            <h2 className="text-4xl text-neutral font-semibold text-center py-5">Explore All Books</h2>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </section>
    );
};

export default BookPage;