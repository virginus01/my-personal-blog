import React from "react";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post as {
    id: string;
    title: string;
    date: string;
  };

  //const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/post/${id}`}
      >
        {title}
      </Link>
      <br />
    </li>
  );
}
