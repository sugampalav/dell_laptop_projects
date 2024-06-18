import axios from "axios";
import Image from "next/image";
import { Main } from "@/lib";

export default async function Home() {
  let headersList = {
    Accept: "*/*",
  };

  let reqOptions = {
    url: "https://d1krvzwx5oquy1.cloudfront.net/books.json",
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);

  let allBooks = response.data;

  function getYearFromDate(dateString: string | undefined) {
    if (!dateString) {
      return "N/A";
    }
    return new Date(dateString).getFullYear();
  }

  return (
    <main className="container mx-auto text-white">
      <p>Hello and welcome to home page</p>

      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {allBooks.map((items: Main, key: number) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md  duration-300 hover:shadow-sm"
            key={key}
          >
            <a href="#">
              <div className="flex items-center justify-center mt-2 pt-3 ml-2 mr-2 h-1/2">
                {items.volumeInfo.imageLinks?.thumbnail && (
                  <Image
                    src={items.volumeInfo.imageLinks.thumbnail}
                    width={150}
                    height={200}
                    // layout="responsive"
                    className=""
                    alt={
                      (items.volumeInfo.authors[0] &&
                        items.volumeInfo.authors[1]) ||
                      "Author"
                    }
                    key={key}
                  />
                )}
              </div>
              <div className="flex items-center mt-2 pt-3 ml-2 mr-2">
                <div className="ml-3">
                  <span className="block text-white-900">
                    {items.volumeInfo.title}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {getYearFromDate(items.volumeInfo.publishedDate)}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-4 mb-3 truncate">
                <h3 className="text-xl text-white-900">
                  {items.volumeInfo.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 text-justify">
                  {items.volumeInfo.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>

      {allBooks.map((x: any) => (
        <div
          id={x.id}
          className="text-white font-bold font-2xl border-b border-slate-300 my-2"
        >
          <p>{x.id}</p>
          <p>Title : {x.volumeInfo.title}</p>
          <p>Subtitle : {x.volumeInfo.subtitle}</p>
          <p>Publisher : {x.volumeInfo.publisher}</p>
          <p>Published Date : {x.volumeInfo.publishedDate}</p>
          <p>Page Count : {x.volumeInfo.pageCount}</p>
          {x.volumeInfo.imageLinks?.thumbnail && (
            <Image
              src={x.volumeInfo.imageLinks.thumbnail}
              alt={x.volumeInfo.title}
              width={200}
              height={200}
            />
          )}
        </div>
      ))}
    </main>
  );
}
