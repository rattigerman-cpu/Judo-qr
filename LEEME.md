# Lector QR de asistencia – App Android (APK)

Tu página HTML empaquetada con Capacitor. Cambios respecto al HTML original:
- Las librerías (Excel y QR) viajan dentro de la app: **funciona sin Internet**.
- Permiso de **cámara** declarado en el manifest de Android.
- El botón de descarga ahora genera el .xlsx y abre el menú **Compartir/Guardar** de Android (en un APK la descarga por enlace no funciona).

## Opción A – Sin instalar nada (GitHub Actions)
1. Creá un repositorio en https://github.com (privado está bien) y subí TODO el contenido de esta carpeta.
2. Entrá a la pestaña **Actions** → "Generar APK" → **Run workflow**.
3. A los ~5 minutos, abrí la ejecución y descargá el artefacto **Lector-QR-Asistencia-APK** (zip con `app-debug.apk`).
4. Pasá el APK al celular e instalalo (permití "instalar apps desconocidas" si lo pide).

## Opción B – Con Android Studio
Requisitos: Node.js 18+ y Android Studio (incluye JDK 17).
```
npm install
npm run sync
npx cap open android
```
En Android Studio: **Build › Build Bundle(s)/APK(s) › Build APK(s)**.
El APK queda en `android/app/build/outputs/apk/debug/app-debug.apk`.

## Si cambiás el HTML
Editá `www/index.html` y repetí `npm run sync` (o volvé a subir a GitHub).

## Uso en el celular
1. Abrí la app → "Elegí el Excel" → seleccioná la planilla (Drive, Descargas, etc.).
2. "Iniciar cámara" → aceptá el permiso → escaneá.
3. Al terminar: "Guardar / compartir Excel actualizado" → guardalo en Drive/Archivos o enviátelo por WhatsApp/mail.

## Autoguardado
- Después de **cada lectura** la app guarda la planilla completa en la memoria interna privada del teléfono (no se sube a ningún lado) y también al pasar a segundo plano.
- Si la app se cierra o el celular se apaga, al volver a abrirla aparece el cartel **"Hay una jornada sin cerrar"** con los botones *Restaurar jornada* o *Descartar*.
- Al abrir otra planilla, la app avisa si hay lecturas autoguardadas que se perderían.
- El autoguardado es un respaldo: igual al terminar la jornada usá "Guardar / compartir Excel actualizado" para sacar el archivo del teléfono. Si desinstalás la app, el autoguardado se borra.
