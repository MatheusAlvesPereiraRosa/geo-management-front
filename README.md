
# geo-managment-front

Seja bem vindo ao meu projeto, sou Matheus Alves e esse projeto foi feito seguindo alguns especificações técnicas de um desafio que recebe, entretanto, acabei adicionando alguns conteúdos a mais nele seguindo alguns estudos meus na época.

## Navegação

Haverão duas telas:

- Home: serve para visualizar a listagem dos usuários cadastrados na aplicação e visualizar o caminho mais otimizado da sede/fábrica passando por todos os usuários e voltando para o início(de acordo com alguns critérios)

- Formulário: Para cadastrar novos usuários

## Especificações

O Front-End foi dividido de acordo com boas práticas na hora de organizar a aplicação, sendo as pastas principais:

- Components: Pasta utilizada para guardar os componentes reutilizáveis e menores da aplicação

- Templates: As páginas em si, com a parte que sofre alterações sendo representada pelos arquivos desta pasta

- Redux: Os arquivos necessários para organizar os estados globais da aplicação (users, layout e language)

- Utils: Pasta responsável pelos arquivos extras/utilitários que poderão ser reutilizados na aplicação

- Assets: Pasta onde são guardados imagens que são utilizadas na aplicação

## Instalação

Clone o repositório com o comando git clone no github e abra o arquivo com o terminal de sua escolha.

Depois rode o comando:

```bash
  npm install
```

Após isso rode o projeto com o comando npm run dev

```bash
  npm run dev
```

E pronto, o projeto já o Front-End já vai estar rodando. Vale salienter que o Back-End deve ter sido totalmente funcional antes para que as funcionalidades no Front funcionem normalmente.

## Bibliotecas utilizadas

**@reduxjs/toolkit:** Uma biblioteca oficial do Redux que fornece um conjunto de ferramentas e convenções para simplificar o uso do Redux em aplicações React. Inclui utilitários para criar fatias (slices) de estado, gerenciar ações assíncronas e configurar a loja Redux.

**axios:** Uma biblioteca JavaScript popular usada para fazer solicitações HTTP do navegador. Ela fornece uma API simples e consistente para interagir com serviços RESTful.

**framer-motion:** Uma biblioteca de animações para React que permite criar animações complexas e interações de interface de usuário de forma simples e intuitiva. Oferece uma API poderosa para manipulação de transições e estados animados.

**i18next:** Um framework de internacionalização para aplicativos JavaScript. Ele oferece suporte a múltiplos idiomas e permite a tradução de conteúdo, incluindo interpolação, pluralização e suporte a namespaces.

**postcss-cli:** Uma ferramenta de linha de comando para usar PostCSS, um processador CSS que permite a utilização de plugins para transformar o CSS. Pode ser usado para tarefas como autoprefixação, minificação e otimização de CSS.

**react-i18next:** Um adaptador para usar i18next em projetos React. Facilita a integração de internacionalização e localização em componentes React, oferecendo hooks e componentes HOC para acessar as funcionalidades do i18next.

**react-icons:** Uma biblioteca que oferece uma coleção de ícones populares para serem utilizados em projetos React. Permite a inclusão de ícones de diversos conjuntos como Font Awesome, Material Design e outros, de maneira fácil e consistente.

**react-redux:** A biblioteca oficial para integração do Redux com React. Fornece hooks e componentes para conectar componentes React ao estado da loja Redux, facilitando a gestão de estado global na aplicação.

**react-select:** Uma biblioteca para criar inputs de seleção (dropdowns) estilizados e altamente customizáveis em React. Suporta funcionalidades avançadas como busca, seleção múltipla e carregamento assíncrono de opções.

**tailwindcss:** Uma framework CSS utilitária que fornece um conjunto de classes para criar designs personalizados e responsivos rapidamente. Simplifica o desenvolvimento CSS ao permitir a composição de estilos diretamente no HTML.


