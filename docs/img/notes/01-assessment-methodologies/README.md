# 1️⃣ Assessment Methodologies

## 🧠 La Base de Todo

Bienvenido al primer dominio. Aquí es donde aprendemos a **pensar** como un pentester antes de aprender a **actuar**.

Muchos estudiantes quieren saltar directo a usar Metasploit y romper cosas. Lo entiendo, es la parte divertida. Pero si no sabes cómo buscar información, cómo enumerar un servicio o cómo evaluar una vulnerabilidad, serás como un francotirador ciego: dispararás mucho, pero no le darás a nada.

Este dominio cubre el **25% del examen**, pero representa el **100% de tu éxito**. Sin una buena metodología, te perderás en el caos.

---

## 🗺️ Mapa del Dominio

Vamos a dividir este bloque en 4 fases lógicas:

### 1. [Information Gathering (Reconocimiento)](01-information-gathering/README.md)
El arte de espiar. Aprenderás a buscar información pública (OSINT) y a mapear la infraestructura del objetivo sin ser detectado (o casi).
*   *Clave:* Google Dorking, Shodan, DNS.

### 2. [Footprinting & Scanning](02-footprinting-scanning/README.md)
Aquí empezamos a hacer ruido. Tocamos cada puerta (puerto) para ver cuál está abierta y qué hay detrás.
*   *Clave:* Nmap, Ping Sweeps.

### 3. [Enumeration](03-enumeration/README.md)
La puerta está abierta, ¿ahora qué? Hablamos con el servicio (SMB, FTP, SSH) para sacarle información: usuarios, versiones, recursos compartidos.
*   *Clave:* Enum4linux, Smbclient, Netcat.

### 4. [Vulnerability Assessment](04-vulnerability-assessment/README.md)
Analizamos todo lo encontrado para identificar debilidades. ¿Esa versión de FTP tiene un exploit conocido? ¿Esa configuración de SMB es insegura?
*   *Clave:* Nessus, Searchsploit, Análisis manual.

---

## 💡 Consejo de Oro

> "Si me dieran 6 horas para cortar un árbol, pasaría las primeras 4 afilando el hacha." — Abraham Lincoln

En pentesting es igual. **Pasa más tiempo enumerando y menos tiempo intentando explotar.** Si enumeras bien, la explotación será un simple comando. Si enumeras mal, estarás horas lanzando exploits que no funcionan.

¡Empecemos a afilar el hacha! 🪓

[➡️ Ir a Information Gathering](01-information-gathering/README.md)
