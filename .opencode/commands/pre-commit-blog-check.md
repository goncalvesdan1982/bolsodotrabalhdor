# /pre-commit-blog-check

Faça uma validação final antes de commitar alterações em artigos do blog do Bolso do Trabalhador.

## Tarefa

Verificar se o artigo alterado está pronto para commit.

## Checklist obrigatório

1. Slug preservado.
2. Canonical preservado.
3. datePublished preservado.
4. updatedDate correto.
5. Autor preservado.
6. Anúncios preservados.
7. Article/BlogPosting preservado.
8. BreadcrumbList preservado.
9. FAQPage coerente.
10. relatedPosts coerentes.
11. relatedCalculators coerentes.
12. Sem markdown cru.
13. Sem `##` visível.
14. Sem `###` visível.
15. Sem `|---|`.
16. Sem tabelas pipe cruas.
17. Sem listas grudadas.
18. Sem `- [ ]`.
19. Sem FAQ duplicado.
20. Sem FAQ sem resposta.
21. Sem HTML cru em FAQ.
22. Sem promessas de cálculo exato ou valor garantido.
23. Sem "estudo de caso real" sem comprovação.
24. Sem acentuação quebrada.
25. Sem canibalização grave.

## Comandos

Rodar:

npm run build

Rodar, se existir:

npm run audit:posts

## Resposta final

Informar:

* aprovado ou reprovado;
* problemas encontrados;
* arquivos alterados;
* build status;
* audit score;
* se pode commitar;
* sugestão de mensagem de commit.
