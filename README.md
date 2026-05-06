# NeuroEduca — Charlas Web

Este repositorio contiene las páginas web de las charlas de NeuroEduca.
Cada charla vive en su propia carpeta dentro de `charlas/año/nombre-de-la-charla/`.

---

## Indice

1. [Crear una cuenta de GitHub (solo la primera vez)](#1-crear-una-cuenta-de-github)
2. [Subir el proyecto a GitHub por primera vez](#2-subir-el-proyecto-a-github-por-primera-vez)
3. [Clonar el repositorio si ya existe en GitHub](#3-clonar-el-repositorio-si-ya-existe-en-github)
4. [Agregar una nueva charla](#4-agregar-una-nueva-charla)
5. [Guardar los cambios (commit) y subirlos (push)](#5-guardar-los-cambios-commit-y-subirlos-push)
6. [Activar GitHub Pages para publicar el sitio](#6-activar-github-pages-para-publicar-el-sitio)
7. [Conectar un dominio propio](#7-conectar-un-dominio-propio)

---

## 1. Crear una cuenta de GitHub

> Si ya tienes cuenta, salta al paso 2.

1. Ve a **https://github.com**
2. Haz clic en **Sign up** (esquina superior derecha)
3. Ingresa tu correo, crea una contraseña y elige un nombre de usuario (por ejemplo `neuroeduca`)
4. Verifica tu correo con el código que te llega
5. Selecciona el plan **Free** cuando te pregunte

---

## 2. Subir el proyecto a GitHub por primera vez

### Paso A — Instalar Git en tu computadora

1. Ve a **https://git-scm.com/downloads**
2. Descarga la versión para Windows e instálala con las opciones que vienen por defecto
3. Al terminar, abre el programa **Git Bash** (aparece en el menú de inicio)

### Paso B — Crear el repositorio en GitHub

1. En GitHub, haz clic en el botón verde **New** (o en el ícono `+` arriba a la derecha → **New repository**)
2. Ponle el nombre `neuroeduca-web` (sin espacios, todo minúsculas)
3. Deja **Public** seleccionado (es necesario para publicar gratis con GitHub Pages)
4. **No** marques ninguna casilla de inicialización
5. Haz clic en **Create repository**
6. Copia la URL que aparece, luce así: `https://github.com/tu-usuario/neuroeduca-web.git`

### Paso C — Subir los archivos desde tu computadora

Abre **Git Bash** y ejecuta estos comandos uno por uno (presiona Enter después de cada uno):

```bash
cd "C:/Users/jrrmc/OneDrive/Julio/Documents/Projects/neuroeduca/web"
git init
git add .
git commit -m "primera version del sitio"
git branch -M main
git remote add origin https://github.com/tu-usuario/neuroeduca-web.git
git push -u origin main
```

> Reemplaza `tu-usuario` con tu nombre de usuario de GitHub.
> GitHub te pedirá tu usuario y contraseña la primera vez.

---

## 3. Clonar el repositorio si ya existe en GitHub

> Esto es para cuando quieres trabajar en una computadora nueva o descargar el proyecto.

1. Ve al repositorio en GitHub y copia su URL (botón verde **Code** → copia la URL HTTPS)
2. Abre **Git Bash** y escribe:

```bash
git clone https://github.com/tu-usuario/neuroeduca-web.git
cd neuroeduca-web
```

Ya tendrás todos los archivos en tu computadora listos para editar.

---

## 4. Agregar una nueva charla

Cada charla sigue exactamente la misma estructura de carpetas:

```
charlas/
  2026/
    nombre-de-la-charla/
      index.html        ← copia y edita la página anterior
      img/
        logo-neuroeduca.jpg
        maribel.png
        imagen-principal.jpg
        imagen-secundaria.jpg
```

### Pasos para crear una charla nueva

1. **Copia la carpeta de una charla anterior** (por ejemplo `poder-invisible-mama`) y pégala en la misma ubicación
2. **Renombra la nueva carpeta** con un nombre corto sin espacios ni tildes (usa guiones), por ejemplo: `liderazgo-femenino`
3. **Reemplaza las imágenes** dentro de `img/` con las nuevas (manteniendo los mismos nombres, o actualizándolos en el HTML)
4. **Edita `index.html`** con el contenido de la nueva charla:
   - Cambia el título (`<title>`)
   - Cambia los textos del hero, beneficios, objetivos, etc.
   - Actualiza el mensaje de WhatsApp en los botones (el texto después de `?text=`)
   - Si cambiaste los nombres de las imágenes, actualízalos también en el HTML

La URL final de la nueva charla será:
`https://tu-dominio.com/charlas/2026/liderazgo-femenino/`

---

## 5. Guardar los cambios (commit) y subirlos (push)

Cada vez que termines de editar, haz estos tres pasos en **Git Bash**:

```bash
git add .
git commit -m "agrego charla liderazgo femenino 2026"
git push
```

El texto entre comillas es una descripción de lo que hiciste — escribe algo que tenga sentido para ti.

Después de `git push`, los cambios aparecen en GitHub en segundos y el sitio web se actualiza automáticamente en menos de un minuto.

---

## 6. Activar GitHub Pages para publicar el sitio

Esto solo se hace una vez para activar la publicación automática del sitio.

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (ícono de engranaje, arriba a la derecha del repositorio)
3. En el menú izquierdo, busca **Pages**
4. En **Branch**, selecciona `main` y deja la carpeta en `/ (root)`
5. Haz clic en **Save**

En unos minutos aparecerá un mensaje verde con tu URL:
`https://tu-usuario.github.io/neuroeduca-web/`

Y cada charla estará disponible en:
`https://tu-usuario.github.io/neuroeduca-web/charlas/2026/poder-invisible-mama/`

---

## 7. Conectar un dominio propio

> Por ejemplo, para que el sitio se vea en `charlas.neuroeduca.com.gt` en vez del link largo de GitHub.

### Paso A — En tu proveedor de dominio

Entra al panel donde compraste tu dominio (GoDaddy, Namecheap, etc.) y agrega estos registros DNS:

| Tipo  | Nombre              | Valor                    |
|-------|---------------------|--------------------------|
| CNAME | charlas             | tu-usuario.github.io     |

> Esto hace que `charlas.neuroeduca.com.gt` apunte a GitHub. Puede tardar hasta 24 horas en funcionar.

### Paso B — En GitHub

1. Ve a **Settings → Pages** en tu repositorio
2. En el campo **Custom domain**, escribe tu dominio: `charlas.neuroeduca.com.gt`
3. Haz clic en **Save**
4. Marca la casilla **Enforce HTTPS** (cuando aparezca, puede tardar unos minutos)

Cuando todo esté listo, tu sitio estará en:
`https://charlas.neuroeduca.com.gt/charlas/2026/poder-invisible-mama/`

---

## Estructura del repositorio

```
neuroeduca-web/
├── charlas/
│   └── 2026/
│       └── poder-invisible-mama/
│           ├── index.html
│           └── img/
│               ├── logo-neuroeduca.jpg
│               ├── maribel.png
│               ├── cerebro-infantil.jpg
│               └── madre-hijo.jpg
├── .gitignore
└── README.md
```
