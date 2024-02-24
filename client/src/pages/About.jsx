import React from "react";

export default function About() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-3 text-center">
          <h1 className="text-3xl font font-semibold text-center my-7">
            Sobre o Blog do Danilo
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Bem vindo ao Blog do Danilo! Este blog foi criado por mim, Danilo
              Mendes como forma de aprendizado para o desenvolvimento web,
              utilizando ReactJs e suas bibliotecas.Criar projetos foi a melhor
              maneira de me encontrar na programação, me motivando e melhorando
              minhas habilidades.
            </p>
            <p>
              Neste blog, é possível se cadastrar em uma conta utilizando nome,
              email e senha, mas também utilizando o cadastro com o Google. Após
              o cadastro será permitido realizar login com o usuário criado. Os
              usuários padrão poderão ver postagens, comentar, editar e deletar
              seu comentário, e dar like em comentários. Também é possível
              editar sua imagem de perfil, nome de usuário, email e senha, além
              de deletar a conta e sair.
            </p>
            <p>
              Contas com permissão de admin poderão criar, editar e excluir
              postagens e os comentários na postagem. Além de terem acesso ao
              painel de administração onde será encontrado o painel principal
              com um resumo das informações de quantidade de usuários, total de
              comentários e total de postagens.
            </p>
            <p>
              Convido a todos a testarem a criação de postagens e comentários no
              blog! Conta de exemplo com permissão de Admin: adminuser@gmail.com
              senha: 123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
