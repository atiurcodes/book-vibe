
import ReadButton from "@/components/bookDetails/ReadButton";
import Wishlist from "@/components/bookDetails/WishlistButton";
import { BookType } from "@/type";
import Image from "next/image";

interface PageProps {
    params: Promise<{ id: string }>;
}

const booksPromise = async (): Promise<BookType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    if (!res.ok) {
        throw new Error('Failed to Books data fatching.')
    }
    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;

    const allBooks = await booksPromise();

    const book = allBooks.find((book) => book.bookId === parseInt(id));

    if (!book) {
        return (
            <section className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold">Book Not Found</h2>
                <p className="mt-2 text-base-content/60">
                    The book you are looking for does not exist.
                </p>
            </section>
        );
    }

    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
        totalPages,
        yearOfPublishing,
    } = book;

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Book Image */}
                <div className="flex justify-center">
                    <div className="bg-base-200 rounded-3xl p-8 shadow-sm">
                        <Image
                            src={image}
                            alt={bookName}
                            width={360}
                            height={360}
                            className="rounded-2xl object-contain shadow-lg"
                        />
                    </div>
                </div>

                {/* Book Details */}
                <div className="space-y-6">


                    {/* Category & ID */}
                    <div className="flex items-center gap-3">
                        <span className="badge badge-primary badge-lg">
                            {category}
                        </span>

                        <span className="text-sm text-base-content/50">
                            Book ID: {bookId}
                        </span>
                    </div>

                    {/* Title */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            {bookName}
                        </h1>

                        <p className="mt-3 text-lg text-base-content/60">
                            By{" "}
                            <span className="font-semibold text-base-content">
                                {author}
                            </span>
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2">
                            <span>⭐</span>
                            <span className="font-bold">{rating}</span>
                        </div>

                        <span className="text-sm text-base-content/50">
                            Reader Rating
                        </span>
                    </div>

                    {/* Book Information */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-base-300 p-4">
                            <p className="text-sm text-base-content/50">
                                Total Pages
                            </p>

                            <p className="mt-1 text-xl font-bold">
                                {totalPages}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-base-300 p-4">
                            <p className="text-sm text-base-content/50">
                                Published
                            </p>

                            <p className="mt-1 text-xl font-bold">
                                {yearOfPublishing}
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <h3 className="mb-3 text-lg font-semibold">
                            Tags
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-base-200 px-4 py-2 text-sm font-medium text-base-content/70"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <ReadButton book={book} />
                        <Wishlist book={book} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetailsPage;