import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/PublicLayout";

export default function NotFound() {
  return (
    <PublicLayout>
      <div className="notFound flex items-center justify-center flex-col px-4 space-y-4 lg:px-0">
        <h2 className="font-extrabold text-lg lg:text-2xl">
          Dear customer, this page does not exist.
        </h2>
        <Link href="/" className="underline text-green-400 hover:text-black">
          Return Home
        </Link>
      </div>
    </PublicLayout>
  );
}
