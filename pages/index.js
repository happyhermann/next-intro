import Seo from "@/components/Seo";
import Head from "next/head";
import { useEffect, useState } from "react";

const API_KEY = "54ced1bcd128a05a9903a6fc97efa16e";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// SSR
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000//api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}

// 이건 오직 백엔드에서만 보인다
//  여기 함수는 서버에서만 실행된다,
