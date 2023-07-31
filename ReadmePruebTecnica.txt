--Versiones de las tecnologías q se usaron para el desarrollo de la prueba técnica

    node v18.13.0
    "pinia": "^2.1.4", 
    "vue": "^3.3.4",
    "vue-router": "^4.2.4"
    "typescript": "~5.1.6",
    "vite": "^4.4.6",
    "vitest": "^0.33.0"

-- En la caperta components de la carpeta src se creo los componentes que se utilizarán en diferentes módulos e igual manera los íconos

-- Dentro de src se encuentra una carpeta llamada hotels que hace referencia al módulo de hoteles
En el cual estan las vistas las rutas, los componentes, store y composable, especificos utilizados en el módulo, se realizo de esta manera para tener independencia 
al momento de dar mantenimiento.

-- Se decidio utilizar composable function en el modulo hotels ya que permite el facil acceso de las funciones del store dentro de una vista o componentes


-- Para ejecutar el sistema serealizalos siguientes pasos

    --Descargar delrepositorio de Github
    --Ingresar a la carpeta 
    --Abrir la terminal en la dirección de la carpeta del proyecto
    -- Escribir el siguiente comando npm install y esperar que termine de descargar la carpeta node_modules
    --Escribir el comando npm run dev para ejecutar el sistema
    -- Abrir el navegador con el url que presenta vite en la sección local ejemplo  http://localhost:5173/  

-- Funcionamiento del sistema

El sistema presenta las siguientes características 

- Al iniciar el sistema aparecera un menu con dos opciones 

1. Opción de crear un nuevo hotel

    - Al hacer click en el boton add hotel, nos redirigira a una sección donde podremos crear nuevos hoteles, aumentando la lista 
      que tiene por defecto el ejecicio como son los hoteles de lakewood, bridgewood, ridgewood, sepuede generar otros hoteles con 
      datos, esto se realizo por que en la entrevista se mencionó que se puede agregar un plus al sistema.

2. Opción de reservaciones 

    -Al hacer clic en el boton reservations, nos redirige a la ruta /hotels/reservations en el cual nos permite visualizar en la parte superior
    la botones de navegacion al menú principal y a la sección de poder agregar un nuevo hotel.
    Se presenta en la interfaz el primer componente select que nos permite seleccionar el tipo de cliente Regular, Reward
    esta selección se hace para determinar que precio debera tomar en cuenta al momento de buscar el hotel más barato, 
    a continuación esta un componente personalizado con 3 elementos select que permite escoger día,mes y año y un botón para agregar la fecha seleccionada,
    este botón nos permite ingresar las fechas que deseemos como el problema decia que se puede agregar varias fechas de entrada.

    Al ingresar las fechas, apareceran en forma de un elemnto tag en el lado derecho, estos tag son removibles haciendo click en el icono de X para eliminar la fecha
    en el caso de haberse equivocado, el sistema esta diseñado para realizar la búsqueda del hotel más económico a partir de ingresar laprimer fecha
    y esta busqueda se actualiza a medida que se ingresan más fechas. 

    La búsqueda se realiza a partir delos datos de entrada en el cual envia al store y con un getter realiza el filtro dentro del array de hoteles y presentando
    la mejor opción en pantalla, a través de un card con bordes dorados para destacar de los demas
    este card de resultado presenta la información: Nombre del hotel,estrellas del hotel, tipo de cliente, costo total, y la lista 
    de fechas agregadas para la reservación con su dia correspondiente.

    El problema decia q la salida no debia mostrar los datos de los clientes y dias, por lo cual esta nueva card de resultado presenta la información pedida por el
    problema

    
-------------Cumplimiento de Reglas ------------

    --No se utilizo framwork de css, se realizo los estilos con css puro.
    -- Se subio el proyecto al siguiente repositorio https://github.com/kevleo815/tipti
    -- Se adjunta el presente Readme,el cual explica lo que se utilizo y funcionamiento
    -- El dia viernes 28 de Julio del 2023 a las 5 pm se recibio el docuemnto del problema
        el cual considero que este envio esta dentro de los 3 días de tiempo establecido

-- Se recomienda ver el video adjunto al correo el cual se responde a la prueba técnica el cuál es jorge.martinez@tipti.market

    Url del video de explicación de la funcionalidad del sistema ver hatas el minuto 7
    https://drive.google.com/file/d/1mGyzIKQBUVpE0PXBSb_TQHKJ8nVWfSU2/view?usp=sharing

    Url del video de explicación del código fuente
    https://drive.google.com/file/d/168DPfpTraT0HHDP-9_8nAelFtGDu_4jB/view?usp=sharing
    





