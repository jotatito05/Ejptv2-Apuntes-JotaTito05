# 🔍 Information Gathering (Recopilación de Información)

## 📖 Introducción

El **Information Gathering** o reconocimiento es la primera y más importante fase de cualquier penetration test. Es el proceso de recopilar la mayor cantidad de información posible sobre el objetivo antes de realizar cualquier ataque.

**Regla de oro**: Cuanta más información tengas, más exitoso será tu ataque.

## 🎯 ¿Por Qué es Importante?

- El 80% del trabajo de pentesting es recopilación de información
- Identifica vectores de ataque potenciales
- Reduce el tiempo de explotación
- Minimiza el riesgo de detección
- Proporciona contexto para ataques dirigidos

## 🔑 Conceptos Clave

### Reconocimiento Pasivo (Passive Reconnaissance)

Recopilación de información **sin interactuar directamente** con el objetivo. No deja rastros en los sistemas del objetivo.

**Características:**
- No genera tráfico hacia el objetivo
- Difícil de detectar
- Usa fuentes públicas (OSINT)
- Legal en la mayoría de casos

**Fuentes comunes:**
- Motores de búsqueda (Google, Bing, Shodan)
- Redes sociales (LinkedIn, Twitter, Facebook)
- Registros públicos (WHOIS, DNS)
- Sitios web archivados (Wayback Machine)
- Repositorios de código (GitHub, GitLab)

### Reconocimiento Activo (Active Reconnaissance)

Recopilación de información **interactuando directamente** con el objetivo. Genera tráfico y puede ser detectado.

**Características:**
- Genera tráfico hacia el objetivo
- Puede ser detectado por IDS/IPS
- Proporciona información más precisa
- Requiere autorización explícita

**Técnicas comunes:**
- Escaneo de puertos
- Consultas DNS directas
- Ping sweeps
- Banner grabbing

### OSINT (Open Source Intelligence)

Inteligencia obtenida de fuentes públicamente disponibles. Es la base del reconocimiento pasivo.

**Tipos de información OSINT:**
- Información de empleados
- Direcciones de correo electrónico
- Números de teléfono
- Estructura organizacional
- Tecnologías utilizadas
- Subdominios y rangos de IP

## 🛠️ Herramientas

### theHarvester

Herramienta para recopilar correos electrónicos, subdominios, IPs y URLs usando múltiples fuentes públicas.

**Instalación:**
```bash
apt-get install theharvester
# o
pip3 install theHarvester
```

**Uso básico:**
```bash
# Buscar información de un dominio
theHarvester -d example.com -b all

# Usar fuente específica (Google)
theHarvester -d example.com -b google

# Limitar resultados
theHarvester -d example.com -b bing -l 200

# Guardar resultados en archivo
theHarvester -d example.com -b all -f output.html
```

**Fuentes disponibles (-b):**
- `google`: Google search
- `bing`: Bing search
- `linkedin`: LinkedIn
- `twitter`: Twitter
- `shodan`: Shodan
- `all`: Todas las fuentes

### Maltego

Herramienta gráfica de OSINT para mapear relaciones entre entidades (personas, dominios, IPs, etc.).

**Características:**
- Interfaz gráfica intuitiva
- Transformaciones automatizadas
- Visualización de relaciones
- Versión Community gratuita

**Uso:**
- Crear nuevo gráfico
- Agregar entidad (dominio, persona, etc.)
- Ejecutar transformaciones
- Analizar relaciones visuales

### Shodan

Motor de búsqueda para dispositivos conectados a Internet. "El Google de los hackers".

**Sitio web:** https://www.shodan.io

**Búsquedas útiles:**
```
# Buscar por organización
org:"Example Corp"

# Buscar por país
country:ES

# Buscar servidores Apache
apache

# Buscar cámaras web
webcam

# Buscar por puerto
port:22

# Buscar por producto
product:MySQL

# Combinar filtros
org:"Example Corp" country:ES port:22
```

### WHOIS

Protocolo para consultar información de registro de dominios e IPs.

**Comandos:**
```bash
# Consultar dominio
whois example.com

# Consultar IP
whois 8.8.8.8

# Guardar resultado
whois example.com > whois_output.txt
```

**Información obtenida:**
- Registrante del dominio
- Fechas de registro y expiración
- Servidores DNS
- Información de contacto
- Rango de IPs

### Google Dorking

Uso de operadores avanzados de Google para encontrar información sensible.

**Operadores útiles:**
```
# Buscar en sitio específico
site:example.com

# Buscar tipo de archivo
filetype:pdf

# Buscar en URL
inurl:admin

# Buscar en título
intitle:"index of"

# Excluir términos
-palabra

# Buscar texto exacto
"texto exacto"

# Combinar operadores
site:example.com filetype:pdf "confidential"
```

**Dorks útiles para pentesting:**
```
# Archivos de configuración
site:example.com filetype:conf

# Archivos de backup
site:example.com filetype:bak

# Directorios expuestos
intitle:"index of" site:example.com

# Paneles de login
inurl:admin site:example.com

# Información sensible
site:example.com filetype:xls "password"

# Errores de aplicaciones
site:example.com "error" | "warning"
```

### Otras Herramientas

**Recon-ng:**
```bash
# Framework de reconocimiento modular
recon-ng
[recon-ng][default] > workspaces create example
[recon-ng][example] > modules search
[recon-ng][example] > modules load recon/domains-hosts/google_site_web
[recon-ng][example] > options set SOURCE example.com
[recon-ng][example] > run
```

**Sublist3r:**
```bash
# Enumeración de subdominios
sublist3r -d example.com

# Con bruteforce
sublist3r -d example.com -b

# Guardar resultados
sublist3r -d example.com -o output.txt
```

**DNSdumpster:**
- Herramienta web: https://dnsdumpster.com
- Mapeo de DNS
- Descubrimiento de subdominios

## 📋 Metodología

### Fase 1: Definir el Alcance

1. Identificar el objetivo principal (dominio, organización, IP)
2. Definir límites del reconocimiento
3. Obtener autorización si es necesario

### Fase 2: Reconocimiento Pasivo

1. **Búsqueda en motores:**
   - Google dorking
   - Bing, DuckDuckGo
   
2. **Información de dominio:**
   - WHOIS lookup
   - Registros DNS públicos
   - Subdominios

3. **OSINT de empleados:**
   - LinkedIn
   - Redes sociales
   - Correos electrónicos

4. **Búsqueda en Shodan:**
   - Dispositivos expuestos
   - Servicios públicos

5. **Repositorios de código:**
   - GitHub
   - GitLab
   - Búsqueda de credenciales

### Fase 3: Reconocimiento Activo

1. **Consultas DNS:**
   - Registros A, MX, NS, TXT
   - Transferencias de zona

2. **Ping sweep:**
   - Identificar hosts activos

3. **Banner grabbing:**
   - Identificar servicios y versiones

### Fase 4: Documentación

1. Organizar información recopilada
2. Crear mapa de la infraestructura
3. Identificar vectores de ataque potenciales
4. Priorizar objetivos

## 💻 Comandos Esenciales

### DNS Enumeration

```bash
# Consultar registros A
dig example.com A

# Consultar registros MX (mail)
dig example.com MX

# Consultar registros NS (nameservers)
dig example.com NS

# Consultar registros TXT
dig example.com TXT

# Consultar todos los registros
dig example.com ANY

# Transferencia de zona (si está mal configurado)
dig axfr @ns1.example.com example.com

# Reverse DNS lookup
dig -x 8.8.8.8

# Usar servidor DNS específico
dig @8.8.8.8 example.com
```

### Host Discovery

```bash
# Ping simple
ping example.com

# Ping con conteo
ping -c 4 example.com

# Host lookup
host example.com

# Reverse lookup
host 8.8.8.8

# nslookup
nslookup example.com
```

### Web Reconnaissance

```bash
# Obtener headers HTTP
curl -I https://example.com

# Seguir redirecciones
curl -L https://example.com

# Ver certificado SSL
openssl s_client -connect example.com:443

# Descargar robots.txt
curl https://example.com/robots.txt

# Descargar sitemap
curl https://example.com/sitemap.xml
```

## 🎯 Práctica Recomendada

### Ejercicios Básicos

1. **OSINT Challenge:**
   - Elige una empresa pública
   - Recopila toda la información posible sin interactuar
   - Documenta: empleados, tecnologías, subdominios, correos

2. **Google Dorking:**
   - Practica con tu propio dominio
   - Busca archivos expuestos
   - Identifica información sensible

3. **Subdomain Enumeration:**
   - Usa theHarvester, Sublist3r y DNSdumpster
   - Compara resultados
   - Identifica subdominios únicos de cada herramienta

### Plataformas de Práctica

- **TryHackMe**: Room "Google Dorking", "OSINT"
- **HackTheBox**: Challenges de OSINT
- **OSINT Framework**: https://osintframework.com
- **IntelTechniques**: https://inteltechniques.com/tools/

### Laboratorios Recomendados

1. Configura tu propio dominio de prueba
2. Practica reconocimiento en máquinas de HackTheBox
3. Participa en CTFs con categoría OSINT
4. Usa Shodan para explorar dispositivos IoT

## ⚠️ Consideraciones Legales y Éticas

- El reconocimiento pasivo generalmente es legal
- El reconocimiento activo requiere autorización
- No accedas a sistemas sin permiso
- Respeta la privacidad de las personas
- Documenta tu autorización por escrito

## 📝 Notas Personales

```
[Espacio para tus notas, comandos favoritos, y hallazgos importantes]





```

## 📚 Referencias

- **OSINT Framework**: https://osintframework.com
- **Google Hacking Database**: https://www.exploit-db.com/google-hacking-database
- **Shodan**: https://www.shodan.io
- **theHarvester GitHub**: https://github.com/laramies/theHarvester
- **PTES - Information Gathering**: http://www.pentest-standard.org/index.php/Intelligence_Gathering

---

[⬅️ Volver a Assessment Methodologies](../README.md) | [➡️ Siguiente: Footprinting & Scanning](../02-footprinting-scanning/README.md)
<br>
<div align="center"><i>Guía creada por jotatito05</i></div>
