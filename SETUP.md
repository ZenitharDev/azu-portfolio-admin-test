# Cómo publicar este portfolio en GitHub Pages

Esto ya está armado para que lo publiques vos misma. Son 3 pasos, no hace falta tocar código.

## 1. Creá el repositorio en GitHub

Entrá a https://github.com/new y creá un repositorio nuevo.

- **Público** (GitHub Pages gratuito lo requiere).
- Nombre: el que quieras. Si lo llamás exactamente `TUUSUARIO.github.io` (reemplazando TUUSUARIO por tu usuario de GitHub), el sitio queda en la raíz de ese dominio, sin ruta extra. Si le ponés cualquier otro nombre (ej. `portfolio`), también funciona — el sitio detecta solo la ruta correcta, no hay que configurar nada.
- No marques "Add a README" ni ".gitignore" — este proyecto ya los trae.

## 2. Subí este proyecto

Desde una terminal, parada en esta carpeta del proyecto:

```bash
git remote add origin https://github.com/TUUSUARIO/TUREPO.git
git branch -M main
git push -u origin main
```

(Reemplazá `TUUSUARIO/TUREPO` por los datos reales de tu repositorio.)

## 3. Activá GitHub Pages

En GitHub, andá a **Settings → Pages** de tu repositorio, y en **Source** elegí **"GitHub Actions"** (no "Deploy from a branch").

Listo. En GitHub, pestaña **Actions**, vas a ver un workflow corriendo ("Deploy to GitHub Pages"). Cuando termina (1-2 minutos), tu sitio queda publicado en:

- `https://TUUSUARIO.github.io/` si el repo se llama `TUUSUARIO.github.io`
- `https://TUUSUARIO.github.io/TUREPO/` si le pusiste otro nombre

## Cada vez que cambies algo

Cualquier `git push` a la rama `main` vuelve a publicar el sitio automáticamente (no hay que repetir ningún paso).

## Pendiente

- Imágenes reales: hoy los proyectos muestran placeholders grises con el texto "[ Level image ]". Las reales se agregan en `public/uploads/` y se referencian en `src/data/entries.json` (campo `heroImage` / `images`).
- Link de descarga del CV: está en `src/data/about.json`, campo `resumeUrl` — hoy apunta a `"#"`. Reemplazalo por el link de Google Drive cuando lo tengas.
- Backoffice para editar todo esto desde una pantalla (sin tocar archivos): queda pendiente de una próxima etapa.
