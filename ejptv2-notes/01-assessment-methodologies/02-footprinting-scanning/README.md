# 📡 Footprinting & Scanning (Escaneo y Huella Digital)

## 📖 Introducción

Una vez completada la fase de reconocimiento pasivo (Information Gathering), entramos en la fase de **Scanning & Footprinting**. Esta es una fase de **reconocimiento activo** donde interactuamos directamente con los sistemas objetivo para mapear la red, descubrir servicios y sistemas operativos.

**Objetivo:** Identificar sistemas vivos, puertos abiertos, servicios en ejecución y versiones de software para encontrar posibles vectores de entrada.

## 🔑 Conceptos Clave

### Network Scanning
Proceso de identificar hosts activos (vivos) en una red o subred.
- **Ping Sweep:** Enviar paquetes ICMP Echo Request a un rango de IPs para ver quién responde.
- **ARP Scanning:** Usado en redes locales (LAN) para mapear direcciones MAC a IPs.

### Port Scanning
Proceso de conectar a puertos TCP/UDP en los hosts descubiertos para determinar su estado.
- **Open:** El servicio está escuchando y acepta conexiones.
- **Closed:** No hay servicio escuchando, pero el host responde (útil para saber que el host está vivo).
- **Filtered:** Un firewall está bloqueando el puerto; no sabemos si está abierto o cerrado.

### Service Version Detection (Banner Grabbing)
Identificar la aplicación específica y su versión que se ejecuta en un puerto abierto (ej. Apache 2.4.41, OpenSSH 7.6). Fundamental para buscar vulnerabilidades específicas (CVEs).

### OS Fingerprinting
Determinar el sistema operativo del objetivo analizando cómo responde a ciertos paquetes de red (TTL, tamaño de ventana TCP, fragmentación).

## 🛠️ Herramientas

### Nmap (Network Mapper)
La herramienta estándar de facto para escaneo de redes.

**Sintaxis básica:** `nmap [Scan Type] [Options] {target specification}`

#### Tipos de Escaneo
```bash
# TCP Connect Scan (Completa el handshake de 3 vías - Ruidoso)
nmap -sT 192.168.1.10

# SYN Scan (Stealth Scan - No completa la conexión - Default y más rápido)
nmap -sS 192.168.1.10

# UDP Scan (Lento, para servicios como DNS, SNMP, DHCP)
nmap -sU 192.168.1.10
```

#### Descubrimiento y Versiones
```bash
# Detección de Versiones de Servicios
nmap -sV 192.168.1.10

# Detección de Sistema Operativo
nmap -O 192.168.1.10

# Escaneo Agresivo (OS, Versiones, Script scanning y Traceroute)
nmap -A 192.168.1.10
```

#### Nmap Scripting Engine (NSE)
```bash
# Usar scripts por defecto (safe discovery)
nmap -sC 192.168.1.10

# Buscar vulnerabilidades (Cuidado: intrusivo)
nmap --script vuln 192.168.1.10

# Enumeración específica (ej. SMB)
nmap -p 445 --script smb-os-discovery 192.168.1.10
```

#### Optimización y Salida
```bash
# Timing (0-5, T4 es recomendado para redes modernas)
nmap -T4 192.168.1.10

# Escanear todos los puertos (0-65535)
nmap -p- 192.168.1.10

# Guardar en todos los formatos (nmap, gnmap, xml)
nmap -oA nombre_proyecto 192.168.1.10
```

### Masscan
Escáner de puertos masivo, diseñado para velocidad (puede escanear todo internet en minutos).

```bash
# Escanear puerto 80 en un rango
masscan -p80 10.0.0.0/8 --rate=1000

# Escaneo rápido de puertos top
masscan 192.168.1.0/24 -p0-65535 --rate 10000
```
*Nota: Masscan es menos preciso que Nmap para detección de servicios, úsalo para descubrimiento inicial.*

### Hping3
Herramienta de ensamblaje de paquetes. Útil para traceroute avanzado, evasión de firewalls y pruebas de red.

```bash
# Ping TCP SYN al puerto 80 (pasa firewalls que bloquean ICMP)
hping3 -S -p 80 192.168.1.10 -c 3

# Traceroute TCP
hping3 --traceroute -V -1 www.google.com
```

## 📋 Metodología de Escaneo

1.  **Host Discovery (Ping Sweep):**
    *   Identificar qué IPs están vivas en el rango asignado.
    *   `nmap -sn 192.168.1.0/24`

2.  **Port Scanning (Filtrado):**
    *   Escanear los 1000 puertos más comunes o todos los puertos en los hosts vivos.
    *   `nmap -sS -p- -T4 192.168.1.10`

3.  **Service & OS Detection:**
    *   Interrogar los puertos abiertos para obtener versiones y OS.
    *   `nmap -sV -O -p 22,80,443 192.168.1.10`

4.  **Targeted Scripting:**
    *   Usar NSE para obtener más información de servicios específicos (HTTP, SMB, DNS).
    *   `nmap -p 80 --script http-enum 192.168.1.10`

## 🎯 Práctica Recomendada

### Ejercicios
1.  **Laboratorio Local:**
    *   Instala Metasploitable 2 o 3 en una VM.
    *   Realiza un escaneo completo con Nmap.
    *   Identifica todos los servicios y sus versiones.
    *   Intenta adivinar el OS sin usar `-O` (mirando los servicios) y luego confirma con `-O`.

2.  **Análisis de Tráfico:**
    *   Abre Wireshark.
    *   Ejecuta `nmap -sS` (SYN scan) y observa el handshake incompleto (SYN -> SYN/ACK -> RST).
    *   Ejecuta `nmap -sT` (Connect scan) y observa el handshake completo (SYN -> SYN/ACK -> ACK).

3.  **Evasión Simple:**
    *   Intenta escanear tu router o firewall cambiando la velocidad (`-T1`) o fragmentando paquetes (`-f`) para ver si cambian los resultados.

## ⚠️ Consideraciones
*   Los escaneos activos son ruidosos y fácilmente detectables por IDS/IPS.
*   En un entorno real, ajusta la velocidad (`-T`) para evitar saturar la red o bloquear servicios.
*   Siempre ten permiso explícito antes de escanear redes ajenas.

## 📝 Notas Personales

```
[Espacio para tus notas, comandos favoritos, y hallazgos importantes]





```

## 📚 Referencias
- **Nmap Official Book:** https://nmap.org/book/
- **Masscan GitHub:** https://github.com/robertdavidgraham/masscan
- **Hping3 Manual:** https://linux.die.net/man/8/hping3

---

[⬅️ Volver a Information Gathering](../01-information-gathering/README.md) | [➡️ Siguiente: Enumeration](../03-enumeration/README.md)
<br>
<div align="center"><i>Guía creada por jotatito05</i></div>
