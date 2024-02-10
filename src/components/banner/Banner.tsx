import "./Banner.css";
import React from "react";

interface BannerProps {
  imagem: string;
  alt?: string;
}

function Banner({ imagem, alt }: BannerProps) {
  return (
    <header className="banner">
      <img src={`/images/${imagem}.png`} alt={alt} />
    </header>
  );
}

export default Banner;
