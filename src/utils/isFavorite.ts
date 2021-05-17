export const isFavorite = (id: string) => {
  let isFavorite = false;

  if (localStorage.getItem("@api-google-books/favoritos")) {
    let favorites = JSON.parse(
      localStorage.getItem("@api-google-books/favoritos") as string
    );

    if (favorites.some((favorite) => favorite.id === id)) {
      isFavorite = true
    }
  }

  return isFavorite
}
