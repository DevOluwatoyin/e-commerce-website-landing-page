import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/PublicLayout";

const page = () => {
  return (
    <PublicLayout>
      <div className="scroll-mt-20">
        Products!!!!!!!!!!!!!!
        <Link href="/"> Go back</Link>
      </div>
    </PublicLayout>
  );
};

export default page;