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
        titulo:"rounded-* shadow-*",
        descripcion:`Estas dos clases las usamos para un estilo mas visual.
      - El rounded-* (rounded-tamaño) se usa con los tamaños predefinidos de Tailwind para redondear bordes.
      - El shadow-* (shadow-tamaño) se usa para aplicar una sombra exterior usando los tamaños predefinidos de Tailwind.
        `,
        clase:"bg-blue-300 rounded-lg shadow-xl",
        informacionClase:"Esto es el ejemplo donde redondeamos el pre y le aplicamos una sombra"
      }}></Card>
      <Card
      informacion={{
        titulo:"flex, justify-*, items-*",
        descripcion:``,
        clase: "",
        informacionClase:""
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
    </div>
  );
}
