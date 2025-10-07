"use client";

import Image from "next/image";
import Link from "next/link";

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      {/* Thumbnail section with proper aspect ratio */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt="thumbnail"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 290px"
          quality={100}
        />

        {/* Duration overlay */}
        {duration && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {Math.ceil(duration / 60)}min
          </span>
        )}
      </div>

      <article>
        <div className="flex items-center justify-between">
          <figure className="flex items-center gap-2">
            <Image
              src={'/assets/images/jason.png'}
              alt="avatar"
              width={34}
              height={34}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3 className="font-semibold">{username}</h3>
              <p className="text-xs text-gray-500">{visibility}</p>
            </figcaption>
          </figure>

          <aside className="flex items-center gap-1">
            <Image
              src="/assets/icons/eye.svg"
              alt="views"
              width={16}
              height={16}
            />
            <span className="text-sm">{views}</span>
          </aside>
        </div>

        <h2 className="mt-2 text-sm font-medium">
          {title} –{" "}
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>

      <button onClick={() => {}} className="copy-btn">
        <Image src="/assets/icons/link.svg" alt="copy" width={18} height={18} />
      </button>
    </Link>
  );
};

export default VideoCard;
