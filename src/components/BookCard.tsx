import { BookType } from "@/type";
import Image from "next/image";
import Link from "next/link";

export interface BookCardProps {
    book: BookType;
}

export default function BookCard({ book }: BookCardProps) {
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
        <div className="card border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Book Image */}
            <figure className="group bg-base-200 p-6">
                <Image
                    src={image}
                    alt={bookName}
                    width={350}
                    height={450}
                    className="h-72 w-full rounded-xl object-contain transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                />
            </figure>

            {/* Card Content */}
            <div className="card-body">
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
                <h2 className="card-title mt-1 line-clamp-1 text-xl">
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
                    <span>Published {yearOfPublishing}</span>

                    <span className="font-semibold text-warning">
                        ★ {rating}
                    </span>
                </div>

                {/* Action */}
                <div className="card-actions mt-3">
                    <Link href={`/books/${bookId}`}>
                        <button className="btn btn-success w-full">
                            View Details
                        </button></Link>
                </div>
            </div>
        </div>
    );
}