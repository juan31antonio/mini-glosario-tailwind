import Image from "next/image";

export default function Home() {
  return (
   <div>
      <Card informacion={{
          titulo:"bg-green-300, m-4, p-3",
          descripcion: `Estas tres clases son usadas en todos los cards de este glosario.
          - El bg-green-200 es usado para el color de fondo de los div.
          - El m-4 es usado para dar un margen con un tamaño de 4, tamaño que calcula automáticamente Tailwind.
          - El p-3 es usado para dar un padding con un tamaño de 3, tamaño que calcula automáticamente Tailwind.`,
          clase: "",
          informacionClase:"El ejemplo visual es el propio card."}}
          ></Card>
      <Card 
        informacion={{
          titulo:"text-*, text-*, font-*",
          descripcion: `Estas tres clases son usadas para editar el estilo del texto.
                        - El text-* (text-color-valor) se usa con algun color y un valor para el tono del color y aplica este color a la letra.
                        - El text-* (text-tamaño) se usa con un tamaño definido por tailwind y aplica ese tamaño a la letra.
                        - El font-* (font-fuente, font-estilo) es usado para aplicarle una fuente a la letra o tambien estilo, como negrita.   `,
          clase:"text-red-400 text-2xl font-sans font-bold.",
          informacionClase:`
                      Ejemplo de color (text-red-400)
                      Ejemplo de tamaño (text-2xl)
                      Ejemplo de fuente (font-sans)
                      Ejemplo de estilo (font-bold)`
        }}
      ></Card>
      <Card
      informacion={{
        titulo:"rounded-* shadow-*, opacity-*",
        descripcion:`Estas dos clases las usamos para un estilo mas visual.
      - El rounded-* (rounded-tamaño) se usa con los tamaños predefinidos de Tailwind para redondear bordes.
      - El shadow-* (shadow-tamaño) se usa para aplicar una sombra exterior usando los tamaños predefinidos de Tailwind.
      - El opacity-* (opacity-porcentaje) se usa para hacer el elemento opaco
      `,
        clase:"bg-blue-300 rounded-lg shadow-xl opacity-50",
        informacionClase:"Esto es el ejemplo donde redondeamos el p y le aplicamos una sombra"
      }}></Card>
      <Card
      informacion={{
        titulo: "flex, justify-*, items-*",
        descripcion: `Estas clases se usan para controlar el diseño flexible y la alineación de los elementos.
        - El flex se usa para activar el modo de diseño flexible en un contenedor.
        - El justify-* (justify-start, justify-center, justify-end) se usa para alinear los elementos horizontalmente dentro del contenedor flexible.
        - El items-* (items-start, items-center, items-end) se usa para alinear los elementos verticalmente dentro del contenedor flexible.`,
        clase: "flex justify-center items-center bg-yellow-300 h-24",
        informacionClase: "Este ejemplo usa flexbox para centrar los elementos tanto horizontal como verticalmente."
      }}
      ></Card>
      <Card
      informacion={{
        titulo: "border-*, border-color",
        descripcion: `Estas clases se usan para añadir un borde al contenedor y cambiar su color.
        - El border-* (border-numero) se usa para añadir un borde a un contenerdor.
        - El border-* (border-color-valor) se usa para cambiar el color del borde, añadiendole un color y un tono`,
        clase: "border-4 border-yellow-600",
        informacionClase: "Este ejemplo es un p al que agregaremos un borde color amarillo."
      }}
      ></Card>
      <Card
        informacion={{
          titulo: "grid, grid-cols-*, gap-*",
          descripcion: `Estas clases se usan para trabajar con el sistema de cuadricula y los espacios entre los elementos.
          - El grid se usa para activar el sistema de cuadricula en un contenedor.
          - El grid-cols-* (grid-cols-numero) se usa para definir cuantas columnas tendra la cuadricula.
          - El gap-* (gap-tamaño) se usa para agregar un espacio entre los elementos dentro de la cuadrícula o el contenedor flexible.`,
          clase: "grid grid-cols-3 gap-4",
          informacionClase: "Este ejemplo crea una cuadricula con 3 columnas y un espacio de 4 entre los elementos."
        }}
      ></Card>
      <Card
        informacion={{
          titulo: "animate-*",
          descripcion: `El animate-* (animate-nombre) es usado para aplicar animaciones predefinidas en Tailwind.`,
          clase: "animate-bounce bg-purple-300",
          informacionClase: "Este ejemplo aplica una animación de rebote al elemento, haciendo que se mueva hacia arriba y hacia abajo de manera continua."
        }}
      ></Card>
      <Card
        informacion={{
          titulo: "transition-*",
          descripcion: `El transition-* (transition-propiedades-duracion) se usa para añadir transiciones suaves a las propiedades seleccionadas.`,
          clase: "",
          informacionClase: "",
          contenido: (
            <div className="transition duration-500 bg-purple-300 hover:bg-purple-500 p-6 w-40 h-40 text-white text-center">
              Pon el raton sobre mi
            </div>
          )
        }}
      ></Card>
      <Card
        informacion={{
          titulo: "z-*",
          descripcion: `El z-* (z-valor) se usa para controlar el orden en el eje Z (profundidad) de los elementos.`,
          clase: "z-10 bg-purple-300",
          informacionClase: "Este ejemplo establece la profundidad del elemento, poniéndolo por encima de otros elementos con menor valor en el eje Z.",
          contenido: (
            <div className="relative">
              <div className="absolute z-10 bg-purple-300 p-6 w-40 h-40 text-white text-center">
                Se sale del div al estar por encima
              </div>
            </div>
          )
        }}
      ></Card>
   </div>
  );
}

function Card({informacion}){
  return(
    <div className="bg-green-200 m-4 p-3 rounded-lg max-w-5xl">
      <p className="text-2xl font-bold">{informacion.titulo}</p><br/>
      <p className="break-words text-xl whitespace-pre-line">{informacion.descripcion}</p><br/>
      <p className={`mb-1 break-words whitespace-pre-line ${informacion.clase}`}>{informacion.informacionClase}</p>
      {informacion.contenido}    
    </div>
  );
}