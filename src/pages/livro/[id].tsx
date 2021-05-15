import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { findBookById } from "services/ApiFunctions/Book";

const Livro = () => {
  const [book, setBook] = useState<any>();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    findBookById(id as string)
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>Livro</h2>
      {book && <h1>{book.volumeInfo.title}</h1>}
    </div>
  );
};

export default Livro;
