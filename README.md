# Sitio de Contacto – Universidad Upateco

Sitio web construido con **React + Vite** que incluye:

- Formulario de contacto funcional mediante **EmailJS**
- Mapa embebido de **Google Maps** con la ubicación de la Universidad Upateco (Tartagal, Salta)

---

## 🚀 Instalación y uso

```bash
npm install
npm run dev
```

---

## ✉️ Configurar EmailJS

1. Creá una cuenta en [https://www.emailjs.com](https://www.emailjs.com)
2. Creá un **Service** (Gmail, Outlook, etc.) y copiá el `Service ID`
3. Creá un **Email Template** con las variables:
   - `{{user_name}}` – nombre del remitente
   - `{{user_email}}` – email del remitente
   - `{{subject}}` – asunto
   - `{{message}}` – cuerpo del mensaje
4. Copiá el `Template ID` y tu `Public Key` (en Account → API Keys)
5. Abrí `src/components/ContactForm.jsx` y reemplazá:

```js
const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

---

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos quedan en `/dist`.

---

## 📦 Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | UI |
| Vite 8 | Bundler |
| @emailjs/browser | Envío de emails |
| Google Maps Embed API | Mapa de ubicación |
