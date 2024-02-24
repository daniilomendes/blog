import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col items-center">
        <h2 className="text-2xl">Quer ver mais projetos como este?</h2>
        <p className="text-gray-500 my-2">Confira esse e muitos outros no meu Portfólio:</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://portifolio-daniilomendes-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danilo Mendes Portfólio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://wallpapercave.com/wp/wp8903914.jpg"
          alt="imagem de propaganda do meu portfólio"
        />
      </div>
    </div>
  );
}
