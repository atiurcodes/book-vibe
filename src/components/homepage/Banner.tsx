import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-6 md:py-10 lg:py-12">
            <div className="flex flex-col-reverse items-center justify-between gap-10 rounded-3xl bg-base-200 px-6 py-10 sm:px-10 md:px-12 lg:flex-row lg:px-16 lg:py-14">
                {/* Content */}
                <div className="max-w-xl text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Books to freshen up your{" "}
                        <span className="text-success">bookshelf</span>
                    </h1>
                    <Link
                        href="/listed-books"
                        className="btn btn-success mt-7 rounded-xl px-6 text-base font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        View The List
                    </Link>
                </div>
                {/* Modern Hero Image */}
                <div className="flex justify-center">
                    <Image
                        src={bannerImg}
                        alt="Banner Image"
                        className="rounded-4xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
