# helplito.org

[English](README.md)

Site memorial bilíngue de Lito Sousa (25 de janeiro de 1967 a 1º de outubro de 2026), educador de aviação e criador do Aviões e Músicas. O Help Lito começou em agosto de 2026 como uma iniciativa independente para conectar pesquisadores de doenças priônicas à equipe oficial do Lito depois do diagnóstico da doença de Creutzfeldt-Jakob. Depois da morte dele, o site virou um memorial: a história dele, links para o canal no YouTube e um registro público da pesquisa em doenças priônicas para os profissionais que seguem trabalhando nela.

O site não é uma campanha de arrecadação. Não tem recursos de doação, pagamento ou financiamento coletivo, e nenhum deve ser adicionado.

Site: https://helplito.org

O domínio foi registrado em 23 de agosto de 2026, por um ano. O site sai do ar quando ele expirar, em 23 de agosto de 2027.

## Documentos

- [CONTRIBUTING.pt-BR.md](CONTRIBUTING.pt-BR.md): como propor mudanças de código, conteúdo, tradução e dados.
- [CLAIMS.pt-BR.md](CLAIMS.pt-BR.md): correções, remoções, propriedade e transferência, para Lito, sua família, sua equipe oficial ou qualquer pessoa ou instituição mencionada no site.
- [FEEDBACK.pt-BR.md](FEEDBACK.pt-BR.md): como relatar um bug, uma tradução errada ou um problema de usabilidade, e o que esperar.

Cada documento tem uma versão em inglês sem o sufixo `.pt-BR`.

## Stack

- Next.js 16 (App Router, Turbopack, React Compiler)
- TypeScript
- Tailwind CSS 4
- next-intl para as rotas `/en` e `/pt-br` com detecção do idioma do navegador
- Georgia (serifa do sistema) para títulos, `next/font` com IBM Plex Sans (corpo) e IBM Plex Mono (rótulos)

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000. O proxy redireciona `/` para `/en` ou `/pt-br` com base no cabeçalho `Accept-Language`.

```bash
pnpm lint
pnpm build
pnpm start
```

Copie `.env.example` para `.env.local` no desenvolvimento. Ele define `NEXT_PUBLIC_SITE_URL=http://localhost:3000`, que alimenta `metadataBase`, as URLs canônicas e de hreflang, o sitemap e o robots. `.env.production` é versionado e define `https://helplito.org` para builds de produção, inclusive na Vercel. Nenhuma outra variável é obrigatória para um build local.

O Next.js carrega `.env.local` antes de `.env.production`, inclusive durante `pnpm build`. Um build de produção local, portanto, grava a URL de localhost; isso não atrapalha a varredura de QA. Para reproduzir as URLs do deploy localmente, rode `NEXT_PUBLIC_SITE_URL=https://helplito.org pnpm build`.

### Varredura de QA

`scripts/qa-sweep.mjs` controla um Chromium headless (Playwright) por todas as rotas nos dois idiomas em doze larguras de viewport, de 320px a 1920px. A varredura falha em overflow horizontal, erros de console, requisições com falha, imagens quebradas, saltos de nível de título, controles sem nome acessível, links ou âncoras internas quebradas, troca de idioma que perde a rota, menu mobile que não fecha com Escape e regressões na validação do formulário.

```bash
pnpm dlx playwright install chromium   # uma vez
pnpm build && pnpm start               # em um terminal
pnpm qa                                # em outro; BASE e WIDTHS podem ser sobrescritos
```

A verificação do formulário para na etapa de revisão e bloqueia toda requisição que não vai para o servidor em teste. Ela nunca abre o link mailto e nunca envia nada para os endereços de contato.

### Imagens de compartilhamento social

As imagens de Open Graph e de pré-visualização social são arquivos estáticos em `public/og/`, referenciados em `src/lib/social-images.ts`. Elas são capturadas a partir dos templates de desenvolvimento em `/dev/og/[variant]`, com uma composição própria para cada proporção. Para regenerar depois de alterar `src/components/og/SocialCard.tsx`:

```bash
pnpm dev   # em um terminal
pnpm og    # em outro; grava os dois arquivos em public/og/
```

`public/og/README.md` documenta cada arquivo e onde ele é usado.

## Estrutura do projeto

```
src/
  app/[locale]/          páginas e layout
  app/dev/og/            templates das imagens sociais (404 em produção)
  components/og/         layouts dos cartões sociais, um por proporção
  components/home/       seções narrativas da página inicial, em ordem
  components/research/   card de ensaio clínico, cards de organizações, áreas de pesquisa
  components/visuals/    diagrama do príon
  config/site.ts         canais oficiais, contato da iniciativa, URL do repositório
  data/                  conteúdo estruturado: organizações, ensaios, áreas de pesquisa, fontes, linha do tempo
  i18n/                  roteamento, navegação, configuração de requisição
  messages/              en.json e pt-br.json
  lib/                   fontes, metadados, utilitários
  proxy.ts               middleware de idioma do next-intl
scripts/
  qa-sweep.mjs           varredura de QA no navegador (veja acima)
  generate-og.mjs        captura as imagens de compartilhamento em public/og/
```

## Regras de conteúdo codificadas na camada de dados

- `src/data/trials.ts`: todo ensaio clínico carrega `status` e `lastVerified`. A interface exibe os dois e aponta para o registro oficial. Nunca trate o status de recrutamento como fato permanente. Atualize `lastVerified` sempre que uma pessoa conferir o registro.
- `src/data/organizations.ts`: cada entrada precisa de uma URL oficial e de uma data `lastVerified`. Estar listado não implica endosso.
- `src/data/sources.ts`: toda afirmação médica ou científica do site deve rastrear até uma entrada aqui.
- `src/data/timeline.ts`: a linha do tempo post-mortem da página inicial. Cada entrada é marcada como `lito` (a vida e a doença dele) ou `project` (esta iniciativa), até a expiração do domínio em 23 de agosto de 2027. Somente informação pública.

Os tipos ficam em `src/data/types.ts`. O tipo `Localized` guarda uma string por idioma, então os arquivos de dados continuam bilíngues sem mexer nos arquivos de mensagens.

## Canais de contato

Existem dois canais e eles nunca devem ser confundidos. Os dois ficam em `src/config/site.ts`.

- `officialInstagram` e `avioesEMusicas` (site e YouTube): canais oficiais do Lito, mantidos pela equipe dele.
- `initiativeEmail` (helplito@brunosilva.io): a pessoa responsável por este site. Correções, remoções, questões jurídicas, propriedade e questões operacionais.

`NEXT_PUBLIC_REPOSITORY_URL` habilita o link do código-fonte na página Sobre e no rodapé. Defina como `https://github.com/brunos3d/helplito.org` no ambiente de hospedagem.

## O antigo formulário "Você pode ajudar?"

Até outubro de 2026, `/can-you-help` tinha um formulário estruturado que preparava um e-mail para a equipe do Lito. Ele foi removido junto com a rota `/api/submissions` depois da morte dele. A rota agora serve a página "Para pesquisadores", que aponta para o diretório de organizações e para a página de Pesquisa. O caminho continua o mesmo para que links antigos sigam funcionando.

O e-mail que a equipe divulgou durante a doença (ajudalito@avioesemusicas.com) foi criado para o caso dele e não aparece mais em nenhuma página do site.

## Adicionando um idioma

1. Adicione o locale em `locales` em `src/i18n/routing.ts` e em `htmlLang` e `ogLocale`.
2. Crie `src/messages/<locale>.json`.
3. Adicione a chave do locale em todo valor `Localized` em `src/data/*.ts`.
4. Adicione um rótulo em `src/components/layout/LanguageSwitcher.tsx`.

## Imagens

Todas as fotos aparecem em preto e branco e voltam a ter cor no hover, no foco ou no toque (`src/components/ui/Figure.tsx`); os cards de compartilhamento usam o mesmo tratamento. `public/lito.jpg` é o retrato do memorial, usado no topo da página inicial e nos cards de compartilhamento. `lito-airbus.jpg` aparece na seção "Quem foi o Lito" e na página Sobre o Lito, e `lito-and-wife.jpg` na seção sobre a família. A foto do hospital foi removida quando o site virou memorial; prefira fotos que mostrem o Lito como as pessoas se lembram dele.

As fotografias mostram pessoas reais e vieram de material que a família e a equipe do Lito compartilharam publicamente. Estão incluídas apenas para identificação. Qualquer pessoa que apareça nelas pode pedir a remoção por meio de [CLAIMS.pt-BR.md](CLAIMS.pt-BR.md).

## Responsabilidade

Este site é criado e mantido por Bruno Silva, de forma independente e com recursos próprios. Não é operado pelo Lito, por sua família, pelo Aviões e Músicas nem por qualquer instituição mencionada no site. Perguntas sobre a iniciativa vão para helplito@brunosilva.io.
