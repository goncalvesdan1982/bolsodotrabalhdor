# /review-blog-render

Revise o render final de um artigo do blog do Bolso do Trabalhador.

Use quando eu informar uma URL ou slug.

## Tarefa

1. Localize o artigo pelo slug ou URL.
2. Verifique o conteúdo no código.
3. Verifique o render final, se possível.
4. Procure sinais de markdown cru.
5. Corrija apenas problemas de renderização e formatação.
6. Não reescreva o artigo inteiro sem pedir confirmação.

## Verificações obrigatórias

Procurar e corrigir:

* `##` visível;
* `###` visível;
* `####` visível;
* tabelas com `|`;
* linhas `|---|`;
* listas grudadas;
* `- [ ]`;
* FAQ duplicado;
* FAQ sem respostas;
* HTML cru;
* `<a href>` em FAQ;
* `<strong>` em FAQ;
* acentuação quebrada.

## Validação

Rodar:

npm run build

Rodar, se existir:

npm run audit:posts

Relatar:

* problemas encontrados;
* arquivos alterados;
* se markdown cru foi removido;
* se tabelas foram corrigidas;
* se listas foram corrigidas;
* se FAQ foi validado;
* status do build;
* commit sugerido.

Não commitar sem minha autorização, a menos que eu peça explicitamente.
