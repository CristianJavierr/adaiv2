"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface InstagramPost {
    imageUrl: string;
    postUrl: string;
    likes?: number;
    caption?: string;
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
                        className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 p-3 border-b border-gray-100">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5 flex items-center justify-center">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Adai Soluciones"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">adaisoluciones</span>
                            <svg className="w-4 h-4 text-blue-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
                            </svg>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src={post.imageUrl}
                                alt="Instagram post"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Actions */}
                        <div className="p-3">
                            <div className="flex items-center gap-4 mb-2">
                                {/* Like */}
                                <svg className="w-6 h-6 text-gray-800 hover:text-red-500 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                {/* Comment */}
                                <svg className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                                {/* Share */}
                                <svg className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                {/* Bookmark */}
                                <svg className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </div>

                            {/* Likes */}
                            <p className="text-sm font-semibold text-gray-900 mb-1">
                                {post.likes?.toLocaleString() || Math.floor(Math.random() * 500 + 100)} Me gusta
                            </p>

                            {/* Caption */}
                            {post.caption && (
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">adaisoluciones</span> {post.caption}
                                </p>
                            )}
                        </div>
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
