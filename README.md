# CFO.ai — Landing page

Landing page para **CFO.ai**, un CFO con inteligencia artificial que apoya al equipo de
finanzas de PyMEs a anticipar problemas de caja, entender su rentabilidad y tomar mejores
decisiones — sin reemplazar el criterio del contador.

Proyecto de Laboratorio de Proyectos Aplicados — Universidad ORT Uruguay.

## Contenido basado en investigación real

El copy de esta landing (problemas, funcionalidades priorizadas, objeciones, rangos de
precio) sale directamente de la encuesta de validación de idea realizada a 9 empresas
uruguayas de distintos sectores (dueños, gerentes, contadores y responsables
administrativos). Ver `Hallazgos de la encuesta de Validación de Idea` y
`Evidencia de Planes de Validación` del anteproyecto para el detalle completo.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Sin dependencias externas de UI: todo hecho a medida.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Formulario de "Agendar demo"

El formulario del CTA principal envía un `POST` a `/api/demo`
(`src/app/api/demo/route.ts`). Hoy esa ruta:

1. Valida los campos obligatorios (nombre, empresa, email).
2. Loguea la solicitud en el servidor (para no perder ningún lead).
3. Si están configuradas `EMAIL_USER` y `EMAIL_APP_PASSWORD`, envía un mail con los datos
   de la solicitud a todo el equipo (ver `NOTIFY_RECIPIENTS` en `route.ts`).
4. Si además existe `DEMO_REQUEST_WEBHOOK_URL`, reenvía la solicitud a esa URL como POST
   con el JSON — útil para sumar un webhook de Slack, un Google Sheet (via Apps Script),
   Zapier/Make, o un CRM, en paralelo al mail.

### Configurar el envío de mails (obligatorio para recibir notificaciones)

El envío usa Gmail vía SMTP con [Nodemailer](https://nodemailer.com), así que no requiere
verificar ningún dominio. Pasos:

1. Elegí qué cuenta de Gmail va a actuar como remitente (puede ser cualquiera de las
   direcciones del equipo, por ejemplo `nicoalvez28@gmail.com`).
2. En esa cuenta, activá la verificación en dos pasos y generá una
   [contraseña de aplicación](https://myaccount.google.com/apppasswords) (App Password).
3. En Vercel: Project Settings → Environment Variables, agregá:
   - `EMAIL_USER`: la dirección de Gmail elegida.
   - `EMAIL_APP_PASSWORD`: la contraseña de aplicación generada (no la contraseña normal
     de la cuenta).
4. Redeployá el proyecto para que tome las nuevas variables.

Mientras esas variables no estén configuradas, las solicitudes se siguen guardando en los
logs del servidor (Vercel → Deployments → Logs) pero no se manda ningún mail.

## Deploy

Pensado para desplegarse en [Vercel](https://vercel.com) conectando este repositorio.
