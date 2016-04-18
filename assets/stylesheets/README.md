## Stylesheets

Os estilos para aplicação estão separados em três diretórios, sendo estes: [base](https://github.com/gabrielmedina/elo7-test/tree/master/assets/stylesheets/base), [components](https://github.com/gabrielmedina/elo7-test/tree/master/assets/stylesheets/components) e [layout](https://github.com/gabrielmedina/elo7-test/tree/master/assets/stylesheets/layout).

### BEM

Para melhor organização da escrita CSS, a metodologia BEM foi adotada.

> A sigla BEM significa block, element, modifier e segue essas propriedades para definir uma nova metodologia de criação de nomes para classes de folhas de estilo.

[Thaiana Poplade](http://tableless.com.br/bem-um-novo-metodo-para-seu-css/)

Para saber mais sobre essa técnica: http://getbem.com/introduction/

### Organização das regras

As regras foram declaradas seguindo uma ordem definida pelo autor, sendo esta:

```css
.seletor {
  // posicionamento
  position:;
  margin:;
  transform:;
  // ...

  // modelo da caixa
  display:;
  width:;
  height:;
  box-shadow:;
  // ...

  // tipografia
  color:;
  font:;
  text:;
  text-shadow:;
  // ...

  // outros
  cursor:;
  transition:;
  overflow:;
  //...
}
```
