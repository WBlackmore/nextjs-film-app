"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  return (
    <div>
      <nav className="flex flex-col p-5 sm:flex-row sm:items-center sm:justify-between bg-blue-900">
        <Link
          className="mx-auto my-2 text-white font-bold text-2xl sm:m-2 "
          href="/"
        >
          Film Database
        </Link>
        <form className="relative me-2" onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="rounded-t w-full sm:rounded-2xl sm:w-auto border p-1"
            type="search"
            placeholder=" Search"
            aria-label="Search"
          />
          <button
            className="rounded-b sm:absolute sm:right-0 sm:top-0 w-full border sm:rounded-2xl sm:w-auto p-1 text-white bg-gradient-to-r from-cyan-500 to-blue-500"
            type="submit"
          >
            <AiOutlineSearch className="mx-auto " size={24} />
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Header;
