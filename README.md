# Versión de Node

`node v24.14.0` - `pnpm v10.4.0`

**Duración estimada de la prueba:** 4,5 h

---

# Inicio rápido

- Instalar dependencias: `pnpm i`

- Iniciar development: `pnpm dev`

- Iniciar production: `pnpm build | pnpm preview`

> Tengo problemas con las CORS después de probar https://allorigins.win/

---

# Librerías usadas en el proyecto

- **Router:** TanStack Router

- **Queries y gestión de caché:** TanStack Query

- **Estilos:** Tailwind (sin librería de componentes)

- **Fechas:** Dayjs (formatear fechas y tiempos)

- **Biome:** sustituye a ESLint y Prettier. Es necesario instalar la extensión de VS Code.

### ⁉️ No he tipado todo para no perder tiempo (Quicktype)

---

# Explicación


### Mostrar el listado de los 100 podcasts más populares según el listado de Apple

- He usado Query y `fetch` para obtener los datos. Estos están en caché durante 5 minutos.


Lo suyo sería realizar una paginación sobre los podcasts o un infinite scroll.

### Una vez obtenido el listado desde el servicio externo por primera vez se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado más de un día desde la última vez que se solicitó.

- He puesto el PersistQueryClientProvider 24h o basta con cambiar el `staleTime` de la query.

### El usuario podrá filtrar los podcasts mostrados introduciendo una cadena de texto que tendrá en cuenta tanto el título de los podcasts como los nombres de sus autores.

- Como no tengo el endpoint de filtrado, he filtrado sobre los 100 elementos con un `filter`.
- He usado `SearchComponent` para realizarlo.

### El filtrado deberá ser inmediato de manera que reaccione a medida que el usuario vaya introduciendo su texto de filtrado.

- He usado un **debounce de 500 ms** para que no sea molesto.

### Al pulsar sobre un podcast el usuario deberá navegar a la vista con el detalle del mismo.

- He usado `intent` del router para precargar los datos del podcast antes de hacer click.

---

# Detalle

Conveniente crear un layout.

### Se debe mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción.

- He puesto todo lo disponible, ya que no encontraba la descripción en el detalle.

### Se debe mostrar una sección principal donde se visualizará el número de episodios que actualmente tiene el podcast, así como un listado de los mismos indicando su título, fecha de publicación y duración.

- He mostrado un listado de los episodios con skeleton.
Lo suyo sería realizar una paginación sobre los podcasts o un infinite scroll.

### Una vez obtenido el detalle de un podcast desde el servicio externo por primera vez, se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado un día desde la última vez que se solicitó.

- He puesto el PersistQueryClientProvider 24h o basta con cambiar el `staleTime` de la query.

### Al pulsar sobre el título de un episodio se deberá navegar a la vista con el detalle del mismo.

- He usado `intent` del router para precargar los datos del episodio antes de hacer click.

---

# Episodio

### Se debe mostrar la misma barra lateral que en la vista anterior.

Conviene utilizar el layout previamente mencionado.

### Tanto la imagen como el título del podcast y el autor deben ser enlaces a la vista con el detalle del podcast.

- He creado la redirección, con una pequeña transición en la imagen y en el título.

### Se debe mostrar una sección principal donde se visualizará el título del podcast, su descripción y un reproductor de audio básico (nativo HTML5) para reproducir el podcast.

- Creado con el elemento `audio` nativo de HTML5.

### Se deberá tener en cuenta que algunas descripciones de episodios contienen HTML y este se debe mostrar interpretado (no escapado).

- He usado `dangerouslySetInnerHTML`.

> `dangerouslySetInnerHTML` no es muy recomendable si el contenido no procede de una fuente confiable, ya que puede suponer un riesgo de XSS. Lo ideal sería sanitizar previamente el HTML.

---

# Navbar

### El título de la aplicación deberá actuar como enlace a la vista principal de la aplicación.

- El título funciona como enlace hacia la vista principal.

### Cada vez que se inicie una navegación en cliente se debe mostrar algún tipo de indicador visual en la esquina superior derecha de la página para reflejar que el proceso está en marcha. Dicho indicador deberá desaparecer tras finalizar la transición a la nueva vista.
- He utilizado el **state del router** para comprobar si está en estado `loading`.
- También se puede controlar mediante `idle` / `isPending`.