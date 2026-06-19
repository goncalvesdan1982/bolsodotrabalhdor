# /rewrite-premium-article

Reescreva ou melhore um artigo do blog do Bolso do Trabalhador com padrão premium.

Use quando eu informar uma URL, slug ou título.

## Tarefa

1. Localizar o artigo.
2. Preservar slug, canonical, datePublished, autor e anúncios.
3. Identificar a intenção principal do artigo.
4. Identificar risco de canibalização.
5. Melhorar conteúdo, estrutura, links internos, FAQ e tabelas.
6. Usar linguagem cautelosa.
7. Não deixar markdown cru.
8. Validar render final.

## Regras

Não criar artigo novo.
Não alterar slug.
Não alterar canonical.
Não remover autor.
Não remover anúncios.
Não copiar artigos premium existentes.
Não prometer cálculo exato ou valor garantido.
Não usar estudo de caso real sem fonte.
Não usar HTML em FAQ.
Não deixar tabelas markdown cruas.

## Saída esperada

Relatório com:

* arquivo alterado;
* slug preservado;
* canonical preservado;
* datePublished preservado;
* updatedDate;
* palavras finais;
* tabelas;
* FAQs;
* links internos;
* se markdown cru foi removido;
* se canibalização foi evitada;
* build;
* audit;
* commit sugerido.
