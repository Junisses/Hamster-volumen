# 🐹 Hámster Volumen (Aplicación de Escritorio)

Una simpática aplicación de escritorio desarrollada con **React + Vite + Electron**, donde un hámster corre dentro de una rueda. ¡Tú controlas la velocidad según el volumen de tu computadora!

---

## ⚙️ Tecnologías utilizadas

- ⚛️ **React** – Interfaz de usuario
- ⚡ **Vite** – Empaquetado rápido y moderno
- 🖥️ **Electron** – Plataforma para aplicaciones de escritorio
- 🎨 **Loundless** – Estilo de interfaz accesible y minimalista
- 💅 **CSS** – Animaciones del hámster y la rueda

---

## 🖼️ ¿Qué hace esta aplicación?

- Simula un hámster corriendo dentro de una rueda.
- Ofrece una forma divertida de visualizar el nivel de volumen de tu dispositivo.
- Animaciones fluidas utilizando `@keyframes` de CSS.
- Interfaz sencilla, enfocada en la experiencia visual.

---

## 📦 Requisitos previos

- **Node.js**: `v16.20.2`
- **npm**: `v8.19.4`

> Se recomienda utilizar estas versiones para asegurar compatibilidad con Electron.

---

## 🚀 Instalación y ejecución

1. Clona el proyecto

```
git clone https://github.com/tu-usuario/Hamster-volumen.git
```

2. Instala las dependencias

```
npm install
```

3. Construir el proyecto con Vite

```
npm run build
```

4. Iniciar la aplicación de escritorio con Electron

```
npm start
```

**La aplicación se abrirá como una ventana de escritorio.**

💡 Información adicional
La rueda solo gira cuando el valor del volumen no es 0, y va girando más rapido según la cantidad de volumen que tenga, y si sobrepasa los 95 el hamster se descontrola.
El volumen del equipo sube y baja con el slider de la interfaz de la aplicación, pero, si intentas subir y bajar directamente desde el equipo no cambiará en la aplicación.
Toda la estructura del hámster y su rueda está construida con HTML y CSS, sin imágenes externas.
