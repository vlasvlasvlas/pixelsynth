# Pixelsynth Paint

**Pixelsynth Paint** es un lienzo de pixel art musical y un emulador interactivo de creación sonora azarosa. Transforma tus dibujos y patrones visuales en secuencias musicales dinámicas dentro de una interfaz retro inspirada en el legendario **MS Paint** de **Windows 3.1**.

Es un instrumento audiovisual autónomo y generativo que corre directamente en tu navegador, diseñado para explorar la relación física entre el espacio, los colores (notas) y las colisiones.

El proyecto es una adaptación fiel y creativa de la idea original en Max for Live, con el beneficio de ser completamente accesible sin necesidad de instalar software adicional.

> Agradecimientos especiales a la versión original de Ableton: [little-scale.breakoutesque.amxd](https://github.com/little-scale/littlescale-max-patches/blob/master/little-scale.breakoutesque.amxd)

## 🎮 Cómo Jugar

Pixelsynth Paint convierte los rebotes e interacciones en la pantalla en notas musicales. 
1. Usa la barra de herramientas para **dibujar** en la cuadrícula (Lápiz, Balde, Línea, Círculo).
2. Selecciona un color en la paleta inferior para cambiar el tono de las notas.
3. Arrastra con la herramienta de **Pelota** (o haz Shift+Drag) para lanzar pelotas rebotonas que al chocar contra las celdas generarán sonidos sintetizados.
4. Experimenta con la **Inteligencia Artificial de los Bichos**, cada uno tiene una personalidad distinta:
   - 🐛 **Errantes (Wanderers):** Caminan aleatoriamente y pintan la grilla al azar.
   - 🏃 **Cobardes (Cowards):** Escapan desesperadamente de las pelotas que les lances.
   - 🤤 **Glotones (Gluttons):** Rastrerán y devorarán todo lo que hayas dibujado, generando música al comer.

## 🛠 Configuración y Audio
En el botón `Configuración` (menú superior) podrás controlar:
* **Generación de Físicas:** Rebote, velocidad, fricción y radio de impacto.
* **Inteligencia Artificial:** Velocidad de movimiento y vida útil de los bichos (golpes necesarios para morir).
* **Motor de Audio:** Presets de sintetizador, volumen, tono y efectos espaciales de Delay o Reverb en tiempo real.
* **Ajustes visuales:** Control del tamaño de la cuadrícula interactiva.

## 🚀 Despliegue

Este proyecto utiliza **GitHub Pages** para que puedas usarlo directamente de forma online, y no requiere servidor backend ya que todas las lógicas y el Web Audio se ejecutan íntegramente en el cliente (tu navegador).

## 📄 Estructura del Código
- `index.html`: Layout y estructura principal, diseñada emulando las ventanas de Windows 3.1 con controles de la época.
- `styles.css`: Hojas de estilo con paletas de color vintage, sombras outset/inset, flexbox responsivo y tipografía clásica.
- `app.js`: Contiene el engine 2D interactivo (colisiones de pelotas, pathfinding básico para IA de bichos, algoritmos de renderizado para herramientas de Paint como Bresenham) y el motor de Web Audio (`AudioContext`).
- `.github/workflows/pages.yml`: Script de automatización (Action) para subir los cambios directamente a GitHub Pages cada vez que se hace push a la rama main.
