# 🔢 Enumeration (Enumeración)

## 📖 Introducción

La **Enumeración** es el proceso de extraer nombres de usuario, nombres de máquinas, recursos de red, recursos compartidos y servicios de un sistema. A diferencia del escaneo (que nos dice qué puertos están abiertos), la enumeración nos dice **qué hay dentro** de esos servicios y cómo están configurados.

**Objetivo:** Obtener información detallada que nos permita realizar ataques dirigidos (ej. fuerza bruta a usuarios válidos, explotar configuraciones inseguras).

## 🔑 Protocolos y Técnicas

### SMB (Server Message Block) - Puertos 139/445
Protocolo para compartir archivos e impresoras en Windows.
*   **Información a buscar:** Nombres de host, lista de recursos compartidos (shares), usuarios, grupos, políticas de contraseñas, versión del sistema operativo.
*   **Null Session:** Conexión sin usuario ni contraseña. (Cada vez menos común, pero crítico si existe).

### DNS (Domain Name System) - Puerto 53
*   **Zone Transfer (AXFR):** Si está mal configurado, permite descargar toda la base de datos de dominios y subdominios.
*   **Brute Force:** Adivinar subdominios comunes.

### SNMP (Simple Network Management Protocol) - Puerto 161/162 UDP
Protocolo para gestionar dispositivos de red.
*   **Community Strings:** Contraseñas simples (ej. "public", "private"). Si adivinas la cadena "public" (read-only), puedes leer mucha información del sistema (procesos, software instalado, usuarios).

### LDAP (Lightweight Directory Access Protocol) - Puerto 389/636
Directorio de servicios (común en Active Directory).
*   **Información a buscar:** Estructura del dominio, usuarios, computadoras, grupos.

### NFS (Network File System) - Puerto 2049
Protocolo de archivos compartidos en Linux/Unix.
*   **Información a buscar:** Directorios exportados y permisos (¿podemos montar un directorio sin contraseña?).

## 🛠️ Herramientas y Comandos

### Enumeración SMB

**Enum4linux:** Herramienta "todo en uno" para Linux/Samba.
```bash
# Escaneo básico (usuarios, shares, grupos, políticas)
enum4linux -a 192.168.1.10

# Solo usuarios
enum4linux -U 192.168.1.10

# Solo shares
enum4linux -S 192.168.1.10
```

**SMBClient:** Cliente similar a FTP para SMB.
```bash
# Listar shares (pide contraseña, prueba Enter para anónimo)
smbclient -L //192.168.1.10

# Conectar a un share
smbclient //192.168.1.10/share_name -U usuario
```

**Nmap Scripts:**
```bash
nmap -p 445 --script smb-enum-users,smb-enum-shares 192.168.1.10
```

### Enumeración SNMP

**Snmpwalk:** Recorrer el árbol MIB.
```bash
# Enumerar todo con comunidad 'public' versión 1
snmpwalk -c public -v1 192.168.1.10

# Enumerar versión 2c
snmpwalk -c public -v2c 192.168.1.10
```

**Snmp-check:** Herramienta más legible.
```bash
snmp-check 192.168.1.10
```

### Enumeración RPC (Remote Procedure Call)

**Rpcclient:**
```bash
# Conexión anónima (Null Session)
rpcclient -U "" 192.168.1.10

# Comandos dentro de rpcclient:
> enumdomusers  (listar usuarios)
> enumdomgroups (listar grupos)
> querydominfo  (info del dominio)
```

### Enumeración NFS

**Showmount:**
```bash
# Listar exportaciones disponibles
showmount -e 192.168.1.10
```

## 📋 Metodología

1.  **Identificar Servicios:** Usa Nmap para ver qué puertos (139, 445, 161, etc.) están abiertos.
2.  **Seleccionar Herramienta:** Elige la herramienta específica para el protocolo (ej. `enum4linux` para SMB).
3.  **Ejecutar Enumeración:** Lanza los comandos para extraer usuarios, shares, etc.
4.  **Analizar Resultados:** Busca vectores de ataque:
    *   ¿Usuarios válidos? -> Ataque de fuerza bruta.
    *   ¿Shares con escritura? -> Subir malware.
    *   ¿Versiones vulnerables? -> Buscar exploits.

## 🎯 Práctica Recomendada

### Escenario 1: SMB
1.  Encuentra un host con puerto 445 abierto.
2.  Ejecuta `enum4linux -a`.
3.  ¿Ves usuarios? Anótalos.
4.  ¿Ves shares? Intenta conectarte con `smbclient`.

### Escenario 2: SNMP
1.  Encuentra un host con puerto 161 abierto.
2.  Prueba cadenas de comunidad comunes: `public`, `private`, `manager`.
3.  Usa `snmpwalk` para leer la información del sistema.

## ⚠️ Notas Importantes
*   La enumeración puede bloquear cuentas si se configura mal (ej. políticas de bloqueo de cuentas en Active Directory).
*   Muchos de estos tráficos son detectados por IDS.

## 📝 Notas Personales

```
[Espacio para tus notas, comandos favoritos, y hallazgos importantes]





```

## 📚 Referencias
- **HackTricks - Pentesting SMB:** https://book.hacktricks.xyz/network-services-pentesting/pentesting-smb
- **Samba Documentation:** https://www.samba.org/samba/docs/
- **Nmap NSE Documentation:** https://nmap.org/nsedoc/

---

[⬅️ Volver a Footprinting & Scanning](../02-footprinting-scanning/README.md) | [➡️ Siguiente: Vulnerability Assessment](../04-vulnerability-assessment/README.md)
<br>
<div align="center"><i>Guía creada por jotatito05</i></div>
