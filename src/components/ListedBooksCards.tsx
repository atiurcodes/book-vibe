import { BookType } from "@/type";
import Image from "next/image";
import Link from "next/link";
export interface ListedBooksCardsProps {
    book: BookType;
}

export default function ListedBooksCards({ book }: ListedBooksCardsProps) {
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
        <div className="card flex flex-row border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Left - Image */}
            <figure className="group w-1/3 shrink-0 bg-base-200 p-5">
                <Image
                    src={image}
                    alt={bookName}
                    width={250}
                    height={350}
                    className="h-64 w-full rounded-xl object-contain transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                />
            </figure>

            {/* Right - Information */}
            <div className="card-body w-2/3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="badge badge-success badge-outline"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Name */}
                <h2 className="card-title mt-1 text-xl">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="text-sm text-base-content/60">
                    by {author}
                </p>

                <div className="divider my-1"></div>

                {/* Book Information */}
                <div className="flex items-center justify-between text-sm text-base-content/70">
                    <span>{category}</span>
                    <span>{totalPages} pages</span>
                </div>

                <div className="flex items-center justify-between text-sm text-base-content/70">
                    <span>
                        Published {yearOfPublishing}
                    </span>

                    <span className="font-semibold text-warning">
                        ★ {rating}
                    </span>
                </div>

                {/* Action */}
                <div className="card-actions mt-auto">
                    <Link
                        href={`/books/${bookId}`}
                        className="w-full"
                    >
                        <button className="btn btn-success w-full">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}