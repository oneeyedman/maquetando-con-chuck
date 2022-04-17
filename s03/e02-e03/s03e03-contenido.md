# s03_e03 - 11ty (2/2)

## Todo list

- [X] Montar el fetch bien v3 -> v2
- [ ] Pintar la lista
- [ ] Usar Eleventy-Fetch
- [ ] Modificar los datos
- [ ] Usar componentes
- [ ] Poner unos estilos básicos
  
  ```javascript
  config.addPassthroughCopy('_src/css');
  config.addPassthroughCopy({'_src/css': '/styles'});
  ```

## Montar un blog con Markdown

- [ ] Crear un post
  - [ ] Con su plantilla
- [ ] Crear una colección  
  
  ```javascript
  config.addCollection('blog', collection => {
    return collection
      .getFilteredByGlob('_src/blog/*/index.md');
  });
  ```

- [ ] Pintarla
