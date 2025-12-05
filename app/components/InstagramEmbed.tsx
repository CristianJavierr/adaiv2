"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface InstagramPost {
    imageUrl: string;
    postUrl: string;
}

interface InstagramEmbedProps {
    posts: InstagramPost[];
}

export default function InstagramEmbed({ posts }: InstagramEmbedProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 3;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const getCurrentPosts = () => {
        const start = currentPage * postsPerPage;
        return posts.slice(start, start + postsPerPage);
    };

    return (
        <div className="w-full">
            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getCurrentPosts().map((post, index) => (
                    <Link
                        key={index}
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-square overflow-hidden hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src={post.imageUrl}
                            alt="Instagram post"
                            fill
                            className="object-cover"
                        />
                    </Link>
                ))}
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentPage === index
                                    ? "bg-red-600"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Ir a página ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
