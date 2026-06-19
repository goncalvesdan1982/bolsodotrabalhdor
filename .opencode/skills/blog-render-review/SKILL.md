# Skill: Blog Render Review

Use esta skill sempre que revisar, corrigir ou finalizar um artigo do blog do Bolso do Trabalhador.

## Objetivo

Garantir que o artigo esteja visualmente correto no render final, sem markdown cru, sem tabelas quebradas, sem FAQ duplicado e sem listas grudadas.

## Checklist obrigatório de render

Verificar no render final:

* não aparece `##`;
* não aparece `###`;
* não aparece `####`;
* não aparece `|`;
* não aparece `|---|`;
* não aparece `|------|`;
* não aparece tabela markdown crua;
* não aparece `- [ ]`;
* não aparece lista grudada em uma única linha;
* não aparece FAQ duplicado;
* não aparecem perguntas de FAQ sem resposta;
* não aparece HTML cru;
* não aparece `<a href>` em FAQ;
* não aparece `<strong>` em FAQ;
* não aparece acentuação quebrada;
* não aparece mojibake;
* tabelas aparecem como tabelas reais;
* listas aparecem com um item por linha;
* autor aparece;
* updatedDate aparece corretamente;
* anúncios foram preservados.

## Busca obrigatória no código

Antes de concluir, fazer buscas no conteúdo do artigo por:

* `##`
* `###`
* `####`
* `|`
* `|---`
* `|------`
* `- [ ]`
* `[ ]`
* `<a href`
* `<strong`
* `estudo de caso real`
* `preços atualizados`

Se qualquer um desses itens aparecer dentro do conteúdo renderizado, corrigir antes de finalizar.

## Regra principal

Não declarar que o artigo está pronto se o render final ainda mostrar markdown cru.
