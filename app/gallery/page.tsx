"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { GALLERY_IMAGES_QUERY, GALLERY_COUNT_QUERY } from "@/sanity/lib/queries";
import type { GalleryImage } from "@/sanity/lib/types";

const IMAGES_PER_PAGE = 20;


// Function to generate masonry layout spans
const getMasonrySpan = (index: number): string => {
  const patterns = [
    "md:col-span-2 md:row-span-2", // Large
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-2", // Tall
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-2 md:row-span-1", // Wide
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-1", // Small
  ];
  return patterns[index % patterns.length];
};

export default function GalleryPage() {
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Initial load - fetch first batch and total count
  useEffect(() => {
    async function fetchInitialData() {
      setLoading(true);
      try {
        // Fetch total count
        const count = await client.fetch<number>(GALLERY_COUNT_QUERY);
        setTotalCount(count);

        // Fetch first batch
        const start = 0;
        const end = IMAGES_PER_PAGE;
        const query = GALLERY_IMAGES_QUERY.replace('$start', start.toString()).replace('$end', end.toString());
        const images = await client.fetch<GalleryImage[]>(query);

        if (images && images.length > 0) {
          setDisplayedImages(images);
          setHasMore(images.length < count);
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchInitialData();
  }, []);

  // Load more images
  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const start = nextPage * IMAGES_PER_PAGE;
      const end = start + IMAGES_PER_PAGE;

      const query = GALLERY_IMAGES_QUERY.replace('$start', start.toString()).replace('$end', end.toString());
      const newImages = await client.fetch<GalleryImage[]>(query);

      if (newImages && newImages.length > 0) {
        const updatedImages = [...displayedImages, ...newImages];
        setDisplayedImages(updatedImages);
        setCurrentPage(nextPage);
        setHasMore(updatedImages.length < totalCount);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6">
              GALLERY
            </h1>
            <p className="text-xl md:text-2xl text-brown font-light max-w-3xl mx-auto leading-relaxed">
              A Visual Journey from Farm to Cup
            </p>
          </div>

          {/* Masonry Grid Gallery or Empty State */}
          {displayedImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
              {displayedImages.map((image, index) => (
                <div
                  key={image._id}
                  className={`relative overflow-hidden group cursor-pointer ${getMasonrySpan(index)}`}
                  style={{ borderRadius: '30px' }}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.caption || 'Gallery image'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder={image.imageLqip ? 'blur' : 'empty'}
                    blurDataURL={image.imageLqip}
                  />
                  {/* Hover Overlay with Caption */}
                  {image.caption && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                      <p className="text-white font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {image.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto mb-6 text-brown/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-brown mb-2">No Images Yet</h3>
              <p className="text-brown/60 font-light">Our gallery is currently empty. Check back soon for updates!</p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-8 py-4 bg-brown text-white rounded-full font-light text-lg hover:bg-brown/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}

          {/* Loading indicator for initial load */}
          {loading && displayedImages.length === 0 && (
            <div className="flex justify-center py-12">
              <p className="text-brown/60 font-light text-lg">Loading gallery...</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
