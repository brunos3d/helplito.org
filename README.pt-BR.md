# helplito.org

[English](README.md)

Site bilíngue de interesse público do Help Lito, uma iniciativa independente que conecta pesquisadores, médicos, equipes de ensaios clínicos e instituições que trabalham com doenças priônicas à equipe oficial de Lito Sousa, diagnosticado com a Doença de Creutzfeldt-Jakob em agosto de 2026.

O site não é uma campanha de arrecadação. Não tem recursos de doação, pagamento ou financiamento coletivo, e nenhum deve ser adicionado.

Site: https://helplito.org

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

Copie `.env.example` para `.env.local` para mudar o modo de envio ou o link do repositório. Nenhuma variável é obrigatória para um build local.

### Varredura de QA

`scripts/qa-sweep.mjs` controla um Chromium headless (Playwright) por todas as rotas nos dois idiomas em doze larguras de viewport, de 320px a 1920px. A varredura falha em overflow horizontal, erros de console, requisições com falha, imagens quebradas, saltos de nível de título, controles sem nome acessível, links ou âncoras internas quebradas, troca de idioma que perde a rota, menu mobile que não fecha com Escape e regressões na validação do formulário.

```bash
pnpm dlx playwright install chromium   # uma vez
pnpm build && pnpm start               # em um terminal
pnpm qa                                # em outro; BASE e WIDTHS podem ser sobrescritos
```

A verificação do formulário para na etapa de revisão e bloqueia toda requisição que não vai para o servidor em teste. Ela nunca abre o link mailto e nunca envia nada para os endereços de contato.

## Estrutura do projeto

```
src/
  app/[locale]/          páginas, layout, opengraph-image
  app/api/submissions/   endpoint opcional de envio moderado
  components/home/       seções narrativas da página inicial, em ordem
  components/research/   card de ensaio clínico, cards de organizações, áreas de pesquisa
  components/help/       formulário estruturado "Você pode ajudar?"
  components/visuals/    diagrama do príon
  config/site.ts         canais oficiais, contato da iniciativa, URL do repositório, modo de envio
  data/                  conteúdo estruturado: organizações, ensaios, áreas de pesquisa, fontes, linha do tempo
  i18n/                  roteamento, navegação, configuração de requisição
  messages/              en.json e pt-br.json
  lib/                   fontes, metadados, helpers de envio, utilitários
  proxy.ts               middleware de idioma do next-intl
scripts/
  qa-sweep.mjs           varredura de QA no navegador (veja acima)
```

## Regras de conteúdo codificadas na camada de dados

- `src/data/trials.ts`: todo ensaio clínico carrega `status` e `lastVerified`. A interface exibe os dois e aponta para o registro oficial. Nunca trate o status de recrutamento como fato permanente. Atualize `lastVerified` sempre que uma pessoa conferir o registro.
- `src/data/organizations.ts`: cada entrada precisa de uma URL oficial e de uma data `lastVerified`. Estar listado não implica endosso.
- `src/data/sources.ts`: toda afirmação médica ou científica do site deve rastrear até uma entrada aqui.
- `src/data/timeline.ts`: somente informação pública, com precisão de mês.

Os tipos ficam em `src/data/types.ts`. O tipo `Localized` guarda uma string por idioma, então os arquivos de dados continuam bilíngues sem mexer nos arquivos de mensagens.

## Canais de contato

Existem dois canais e eles nunca devem ser confundidos. Os dois ficam em `src/config/site.ts`.

- `officialEmail` (ajudalito@avioesemusicas.com): equipe oficial do Lito. Informações científicas, clínicas e institucionais.
- `initiativeEmail` (helplito@brunosilva.io): a pessoa responsável por este site. Correções, remoções, questões jurídicas, propriedade e questões operacionais.

`NEXT_PUBLIC_REPOSITORY_URL` habilita o link do código-fonte na página Sobre e no rodapé. Defina como `https://github.com/brunos3d/helplito.org` no ambiente de hospedagem.

## O formulário "Você pode ajudar?"

`NEXT_PUBLIC_SUBMISSION_MODE` controla a entrega (veja `.env.example`):

- `mailto` (padrão): o formulário monta uma mensagem em texto puro, mostra para revisão e abre o cliente de e-mail do remetente endereçado à equipe oficial. Nada é enviado para este projeto nem armazenado por ele.
- `moderated`: o formulário envia para `/api/submissions`, que valida o payload e encaminha para `SUBMISSION_WEBHOOK_URL` (opcionalmente com `SUBMISSION_WEBHOOK_TOKEN` como bearer token). A rota não armazena nada. Sem o webhook configurado, responde 503.

Envios nunca são publicados. Não há fórum, comentários nem diretório público.

## Adicionando um idioma

1. Adicione o locale em `locales` em `src/i18n/routing.ts` e em `htmlLang` e `ogLocale`.
2. Crie `src/messages/<locale>.json`.
3. Adicione a chave do locale em todo valor `Localized` em `src/data/*.ts`.
4. Adicione um rótulo em `src/components/layout/LanguageSwitcher.tsx`.

## Imagens

`public/lito.jpg` é o retrato principal. `lito-airbus.jpg` aparece na seção "Quem é o Lito", `lito-and-wife.jpg` na seção sobre a família, e `lito-hospitalized.jpg` só depois que o visitante já conheceu o Lito, na seção "Por que o tempo importa". Mantenha essa ordem.

As fotografias mostram pessoas reais e vieram de material que a família e a equipe do Lito compartilharam publicamente. Estão incluídas apenas para identificação. Qualquer pessoa que apareça nelas pode pedir a remoção por meio de [CLAIMS.pt-BR.md](CLAIMS.pt-BR.md).

## Responsabilidade

Este site é criado e mantido por Bruno Silva, de forma independente e com recursos próprios. Não é operado pelo Lito, por sua família, pelo Aviões e Músicas nem por qualquer instituição mencionada no site. Perguntas sobre a iniciativa vão para helplito@brunosilva.io.
