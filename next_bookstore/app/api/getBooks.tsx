import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios
    .get("https://d1krvzwx5oquy1.cloudfront.net/books.json")
    .then((res) => res.data);

export default function getBooks() {
  const { data, error, isLoading } = useSWR("/api/getBooks", fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <div>
      <p>{data}</p>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
