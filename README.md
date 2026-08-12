# Versión de Node 
node v24.14.0 - pnpm v10.4.0
Duración estimada de la prueba 4,5h

## Intalación con pnpm i 

# Librerías usadas en el proyecto
Router - Tanstack Router 
Queries y gestión de cache - Tanstack query 
Estilos - Tailwind (sin librería de componentes)
Fechas - Dayjs (formatear fechas y tiempos)
Biome - sustituye a eslint y a prettier (es necesario instalar la extension de VSC)

### No he tipado todo para no perder tiempo (quicktype)

# Explicación 
Lo suyo sería realizar una paginación sobre los podcast o un infiniteScroll. 
● Mostrar el listado de los 100 podcasts más populares según el listado de Apple (más info al final del documento).
 - He usado query y fetch para obtener los datos estos están en cache durante 5 minutos
● Una vez obtenido el listado desde el servicio externo por primera vez se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado más de un día desde la última vez que se solicitó.
 - Basta con cambiar el staleTime de la query. 
● El usuario podrá filtrar los podcasts mostrados introduciendo una cadena de texto que tendrá en cuenta tanto el título de los podcasts así como los nombres de sus autores.
  - Como no tengo el enpoint de filtrado he filtrado sobre los 100 elementos con un filter. He usado searchComponent para realizarlo.
● El filtrado deberá ser inmediato de manera que reaccione a medida que el usuario vaya introduciendo su texto de filtrado.
 - He usado un debounce que retrasa 500ms la consulta para que no sea molesto
● Al pulsar sobre un podcast el usuario deberá navegar a la vista con el detalle del mismo.
 - He usado intend del router para precargar los podcast antes de hacer click. 

## Detalle
Conveniente crear un layout

● Se debe mostrar una barra lateral con la imagen del podcast, su título, su
autor y su descripción.
- He puesto todo lo disponible ya que no encontraba la descripción en el detalle. 
● Se debe mostrar una sección principal donde se visualizará el número de episodios
que actualmente tiene el podcast así como un listado de los mismos indicando su
título, fecha de publicación y duración.
- He mostrado un listado de los episodios (Lo suyo sería realizar una paginación sobre los podcast o un infiniteScroll.)
● Una vez obtenido el detalle de un podcast desde el servicio externo por primera
vez, se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha
pasado un día desde la última vez que se solicitó.
 - Basta con cambiar el staleTime de la query. (Lo tengo en 5 min para que lo probéis)
● Al pulsar sobre el título de un episodio se deberá navegar a la vista con el
detalle del mismo.
  - He usado intend del router para precargar del episodio antes de hacer click. 

# Episodio 
● Se debe mostrar la misma barra lateral que en la vista anterior.
Conviene el layout previamente mencionado
○ Tanto la imagen como el título del podcast y el autor deben ser enlaces a
la vista con el detalle del podcast (se permite que estos componentes
también tengan los mismos enlaces en la vista anterior).
 - Creada la redirección
● Se debe mostrar una sección principal donde se visualizará el título del
podcast, su descripción y un reproductor de audio básico (nativo HTML5)
para reproducir el podcast.
 - Creado con el audio nativo (está puesto auto)
○ Se deberá tener en cuenta que algunas descripciones de episodios
contienen HTML y este se debe mostrar interpretado (no escapado).
 - dangerouslySetInnerHTML no es muy recomendable 


# Navbar 
 El título de la aplicación deberá actuar como enlace a la vista principal de la
aplicación.
● Cada vez que se inicie una navegación en cliente se debe mostrar algún tipo de
indicador visual en la esquina superior derecha de la página para reflejar que el
proceso está en marcha. Dicho indicador deberá desaparecer tras finalizar la
transición a la nueva vista.
 - Con el state del router. Se revisa si esta loading o no (tambien por idle - isPending)
