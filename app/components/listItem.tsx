import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(String(date));
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/post/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1"> {formattedDate}</p>
    </li>
  );
}
