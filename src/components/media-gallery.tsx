"use client";

import Image from "next/image";

export default function MediaGallery() {
  const images = [
    {
      src: "/airg.png",
      alt: "Project 1",
      title: "AIRG",
    },
    {
      src: "/chat.png",
      alt: "Project 2",
      title: "Chat Application",
    },
    {
      src: "/swapii.png",
      alt: "Project 3",
      title: "Swapii",
    },
  ];

  return (
    <section id="media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-primary">Work</span>
        </h2>

        {/* Video Section */}
        <div className="mb-20">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <video
              width="100%"
              height="auto"
              controls
              className="w-full h-auto"
              poster="/placeholder.jpg"
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Check out my latest project demonstration
          </p>
        </div>

        {/* Images Gallery */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <h4 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
