# 🔍 Information Gathering: El Arte del Espionaje

## 👋 Introducción

Aquí empieza todo. Si fallas aquí, fallarás en todo lo demás.

El **Information Gathering** (o Reconocimiento) es la fase donde más tiempo pasa un pentester profesional (hasta un 80%). ¿Por qué? Porque **no puedes atacar lo que no sabes que existe**.

Imagina que vas a robar un banco (hipotéticamente, claro 😉).
*   ¿Entras corriendo con una máscara y gritando? (Eso es lo que hacen los novatos).
*   ¿O pasas semanas observando a los guardias, las cámaras, los horarios y las puertas traseras? (Eso es Information Gathering).

En esta fase, tu objetivo es ser un **fantasma**. Queremos saberlo TODO sobre el objetivo antes de lanzar el primer paquete malicioso.

---

## 🧠 Pasivo vs. Activo: Conoce la Diferencia

Es vital que entiendas esto para no meterte en líos legales o alertar al objetivo antes de tiempo.

### 1. Reconocimiento Pasivo (Modo Stalker)
**"Mirar pero no tocar".**
Recopilas información de fuentes públicas sin interactuar jamás con los servidores del objetivo. Ellos **no saben que estás ahí**.
*   **Fuentes:** Google, LinkedIn, Shodan, WHOIS.
*   **Riesgo:** Cero. Es indetectable.

### 2. Reconocimiento Activo (Modo Puerta a Puerta)
**"Tocar el timbre".**
Aquí ya interactúas con sus sistemas. Les envías paquetes y esperas respuesta.
*   **Acciones:** Ping, Nmap, DNS Zone Transfers.
*   **Riesgo:** Alto. Quedarás registrado en sus logs. Si tienen un IDS/IPS, saltará la alarma.

> [!NOTE]
> **Nota para el eJPTv2:** El examen es un entorno controlado, así que el "ruido" no importa tanto. Pero en la vida real, empezar con un escaneo agresivo es la mejor forma de que te bloqueen la IP en 5 minutos.

---

## 🕵️‍♂️ Tu Kit de Espionaje (OSINT)

### 1. Google Dorking (Tu Mejor Amigo)
Google indexa todo, incluso lo que no debería. Usamos "Dorks" (operadores de búsqueda) para encontrar tesoros olvidados.

```text
site:objetivo.com filetype:pdf "confidential"  <-- ¿Documentos confidenciales?
site:objetivo.com inurl:admin                  <-- ¿Paneles de administración?
site:objetivo.com intitle:"index of"           <-- ¿Directorios abiertos?
```

### 2. TheHarvester (El Recolector)
Imagina buscar en Google, Bing, LinkedIn y Twitter a la vez para encontrar emails y subdominios. Eso hace **theHarvester**.

```bash
# Búscame todo lo que sepas de "ine.com" usando todas las fuentes disponibles
theHarvester -d ine.com -b all
```
*   **¿Para qué sirve?** Para encontrar emails (para phishing) y subdominios olvidados (dev.ine.com) que suelen ser más vulnerables.

### 3. Shodan (El Google de los Hackers)
Google indexa webs; **Shodan** indexa *dispositivos*. Cámaras, neveras inteligentes, servidores industriales... si está conectado a internet, Shodan lo ve.
*   **Uso:** Ver qué tecnología usa una IP sin escanearla tú mismo.

---

## 📡 Reconocimiento Activo: "Tocando el Timbre"

Una vez que sabes *quién* es tu objetivo, toca ver *qué* tiene activo.

### 1. DNS Enumeration (El Mapa del Tesoro)
Los servidores DNS son como la guía telefónica de internet. Si les preguntas amablemente, a veces te dan toda la lista de contactos.

**Herramienta clave: `dig`**
```bash
dig ine.com ANY       # ¡Dámelo todo!
dig ine.com MX        # ¿Quién gestiona su correo?
dig ine.com NS        # ¿Quiénes son sus servidores de nombres?
```

**El Santo Grial: Zone Transfer (AXFR)**
A veces, un administrador perezoso configura mal un servidor DNS y permite que *cualquiera* se descargue la lista completa de subdominios.
```bash
# "Oye ns1.ine.com, pásame tu base de datos entera"
dig axfr @ns1.ine.com ine.com
```
> [!TIP]
> **Pro Tip:** Si encuentras una transferencia de zona exitosa en el examen o en una auditoría, repórtalo como **High**. Es una fuga de información masiva.

### 2. Subdomain Enumeration
A veces el dominio principal (`ine.com`) es una fortaleza, pero el subdominio de pruebas (`test.dev.ine.com`) es una chabola de paja.
Herramientas como **Sublist3r** automatizan la búsqueda de estos "eslabones débiles".

```bash
sublist3r -d ine.com
```

---

## 📝 Resumen de Metodología

1.  **Define el objetivo:** ¿Qué tengo permitido atacar? (Scope).
2.  **OSINT (Pasivo):** Google Dorks, TheHarvester, Shodan. Busca emails, subdominios y tecnologías.
3.  **DNS Recon (Activo):** Busca servidores de correo, nombres y (si tienes suerte) transferencias de zona.
4.  **Documenta:** Apunta cada IP y subdominio nuevo que encuentres. Serán tus objetivos para la fase de Escaneo.

---

## 📝 Mis Notas Personales

```markdown
# Mis comandos favoritos
- Dork para buscar contraseñas: ...
- Comando rápido para transferencias de zona: ...
```

---
[⬅️ Volver a Assessment Methodologies](../README.md) | [➡️ Siguiente: Footprinting & Scanning](../02-footprinting-scanning/README.md)
