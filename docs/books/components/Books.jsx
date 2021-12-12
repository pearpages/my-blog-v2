import React from "react";
import books from "./books.json";

import Book from "./Book.jsx";
import * as images from "./assets";

function mapImage(book) {
  return { ...book, src: images[book.src] };
}

export function Books() {
  return (
    <ol style={{ display: "flex", flexWrap: "wrap" }}>
      {books.map((book) => (
        <li key={book.title}>
          <Book {...mapImage(book)} />
        </li>
      ))}
    </ol>
  );
}
