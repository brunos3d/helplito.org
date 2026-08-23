# Como contribuir

[English](CONTRIBUTING.md)

O Help Lito é um site pequeno de interesse público sobre uma pessoa real com uma doença fatal e de progressão rápida. Contribuições são bem-vindas, mas a exigência de precisão e contenção é maior do que em um projeto open source comum. Leia esta página inteira antes de abrir um pull request.

Se você é o Lito, alguém da família dele ou da equipe oficial, ou representa uma instituição mencionada no site, não precisa passar por este processo. Veja [CLAIMS.pt-BR.md](CLAIMS.pt-BR.md).

## O que aceitamos

- Correções de bugs, de acessibilidade e melhorias de desempenho.
- Correções de conteúdo médico, científico ou institucional, com fonte citável.
- Correções de tradução em `en` e `pt-br`, e novos idiomas.
- Novas entradas em `src/data/` (organizações, ensaios clínicos, áreas de pesquisa, fontes) que sigam as regras abaixo.
- Melhorias na varredura de QA em `scripts/qa-sweep.mjs`.

## O que não aceitamos

- Recursos de doação, pagamento, financiamento coletivo, PIX ou criptomoeda de qualquer tipo. Esta é uma regra fixa e não será discutida em pull request.
- Analytics, publicidade, pixels de rastreamento ou embeds de terceiros.
- Comentários, fóruns, diretórios públicos ou qualquer coisa que publique envios de usuários.
- Conteúdo sobre a saúde do Lito além do que a família e a equipe compartilharam publicamente.
- Afirmações de que algum tratamento funciona, ou de que o Lito é elegível para, está inscrito em, ou vai receber alguma terapia.
- Tratamentos não verificados, curas anedóticas, suplementos ou especulação, mesmo apresentados como "só uma sugestão".
- Convocações para envio em massa de mensagens às instituições listadas no site.

## Antes de começar

Para qualquer coisa maior que um erro de digitação, abra uma issue primeiro e descreva a mudança. Isso evita trabalho que não pode ser integrado. Para mudanças de conteúdo ou dados, inclua as fontes na issue.

## Configuração

```bash
pnpm install
pnpm dev
```

Antes de abrir um pull request:

```bash
pnpm lint
pnpm build
```

Para mudanças de interface, rode também a varredura de QA. Ela precisa de um build de produção rodando localmente:

```bash
pnpm dlx playwright install chromium   # uma vez
pnpm build && pnpm start               # terminal 1
pnpm qa                                # terminal 2
```

A varredura verifica todas as rotas nos dois idiomas em doze larguras de viewport. Um pull request que a quebre não será integrado.

## Regras de conteúdo e dados

Estas regras são aplicadas na revisão, e algumas delas pelos tipos em `src/data/types.ts`.

### Fontes

Toda afirmação médica ou científica deve rastrear até uma entrada em `src/data/sources.ts`. Fontes aceitáveis são autoridades de saúde pública (OMS, CDC, NHS, Ministério da Saúde e similares), registros oficiais de ensaios clínicos (ClinicalTrials.gov, EU CTR, ReBEC), literatura revisada por pares e os canais oficiais da equipe do Lito. Cada entrada registra uma data de acesso. Matérias de imprensa podem apoiar a linha do tempo, mas não afirmações médicas.

### Ensaios clínicos

Cada entrada em `src/data/trials.ts` precisa de `status`, `lastVerified` e de um link para o registro oficial. Não copie o status de uma notícia. Abra o registro, leia a ficha, defina `lastVerified` com a data em que você fez isso. Quando a mudança for só atualizar `lastVerified`, diga isso na mensagem do commit.

### Organizações

Cada entrada em `src/data/organizations.ts` precisa de uma URL oficial e de `lastVerified`. Estar listado significa "esta organização trabalha com doenças priônicas", não endosso, parceria ou permissão de contato. Não adicione e-mails pessoais de pesquisadores. Apenas páginas de contato institucionais.

### Linha do tempo

`src/data/timeline.ts` guarda informação pública com precisão de mês. Não adicione datas, locais ou detalhes que a família não compartilhou.

### Fotografias

Não adicione fotografias do Lito, da família ou de qualquer outra pessoa. As imagens existentes vieram de material que a família compartilhou publicamente e aparecem em uma ordem deliberada (veja o README). Trocar ou reordenar as imagens é uma decisão de conteúdo do mantenedor, não um pull request.

## Traduções

`src/messages/en.json` e `src/messages/pt-br.json` precisam ter as mesmas chaves. Os arquivos de dados usam o tipo `Localized`, que exige um valor por idioma, então o TypeScript falha o build se faltar um idioma.

Ao editar o português, use o português do Brasil. Mantenha o tom simples e direto; o site é lido por famílias sob pressão e por profissionais com pouco tempo.

Para adicionar um idioma, siga os passos do README em "Adicionando um idioma" e traduza tanto o arquivo de mensagens quanto todo valor `Localized`. Traduções parciais não são integradas, porque uma página meio traduzida parece quebrada para quem não lê inglês.

## Estilo de código

- TypeScript, modo estrito. Sem `any`, a menos que haja um comentário explicando o motivo.
- Rode `pnpm lint` e corrija tudo que ele apontar.
- Mantenha os componentes pequenos. A página inicial é uma sequência de seções em `src/components/home/`, em ordem narrativa. Não reordene sem discutir em uma issue.
- Não adicione dependências para algo que a biblioteca padrão ou o Next.js já fazem.
- Sem travessões (em dash) em prosa, comentários de código ou arquivos de mensagens.

## Mensagens de commit

Os commits seguem Conventional Commits: `tipo(escopo): descrição`, no imperativo, em minúsculas, sem ponto final. A descrição fica em inglês.

```
fix(form): keep review step focus after validation error
feat(data): add ReBEC registry source
docs(readme): explain moderated submission mode
chore(data): refresh lastVerified on trials
```

Tipos permitidos: `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `build`, `ci`, `chore`, `style`, `revert`.

## Pull requests

- Uma mudança por pull request.
- O título precisa ser um assunto válido de Conventional Commit, porque vira a mensagem do commit de squash-merge.
- Preencha o template. Para mudanças de conteúdo, liste as fontes. Para mudanças de interface, diga quais viewports você verificou.
- Capturas de tela ajudam em mudanças visuais. Inclua os dois idiomas se a mudança afetar texto.

O mantenedor revisa todo pull request pessoalmente. O tempo de resposta depende do que mais estiver acontecendo; este é um projeto voluntário. Pedidos da família ou da equipe do Lito são tratados antes de qualquer outra coisa.

## Contato

Dúvidas sobre contribuição: abra uma issue ou escreva para helplito@brunosilva.io.

Não envie informação científica ou médica pelo GitHub. Isso vai para a equipe oficial do Lito em ajudalito@avioesemusicas.com, usando o formulário do site.
