# 🔢 Enumeration: Interrogando al Enemigo

## 👋 Introducción

Has encontrado el puerto abierto (Scanning). Ahora toca preguntar: **"¿Quién eres y qué me puedes dar?"**.

La **Enumeración** es el proceso de hablar con los servicios para sacarles información. A diferencia del escaneo (que es como tocar el timbre), aquí entras al recibidor y miras los nombres en los buzones.
Buscamos:
*   Usuarios (para fuerza bruta).
*   Carpetas compartidas (para robar archivos o subir malware).
*   Versiones exactas (para buscar exploits).

---

## 👑 El Rey de la Enumeración: SMB (Puerto 445/139)

En el mundo Windows (y en el eJPTv2), **SMB es Dios**. Si ves el puerto 445 abierto, tus ojos deben brillar.

### ¿Qué buscamos en SMB?
1.  **Null Session:** ¿Me deja entrar sin usuario ni contraseña? (El sueño de todo hacker).
2.  **Shares:** ¿Hay carpetas compartidas con permisos de lectura/escritura?
3.  **Usuarios:** ¿Puedo obtener una lista de empleados para luego intentar adivinar sus contraseñas?

### 🛠️ Herramientas Clave para SMB

#### 1. Enum4linux (La Vieja Confiable)
Es fea, tira mucho texto, pero no falla. Lánzala y vete a por un café.
```bash
# -a: Do everything (hazlo todo)
enum4linux -a 192.168.1.10
```
*   *Qué buscar en el output:* Secciones que digan "Listing Users" o "Share Enumeration".

#### 2. SMBClient (El Explorador Manual)
Si quieres navegar por las carpetas como si fuera un FTP.
```bash
# Listar carpetas (Shares)
# Cuando pida password, dale a ENTER (intenta entrar anónimo)
smbclient -L //192.168.1.10

# Conectarse a una carpeta específica
smbclient //192.168.1.10/secret -U ""
```

---

## 🕸️ Otros Protocolos Comunes

### SNMP (Puerto 161 UDP)
Es un protocolo de gestión. Si está mal configurado (comunidad `public`), te cuenta la vida entera del servidor: procesos corriendo, software instalado, etc.
*   **Herramienta:** `snmpwalk` o `snmp-check`.

### RPC (Puerto 111/135)
A veces permite enumerar usuarios sin autenticación.
*   **Herramienta:** `rpcclient -U "" 192.168.1.10`.

---

## 💡 Consejo de Examen (eJPTv2)

> [!TIP]
> **No te compliques.**
> En el examen, la enumeración suele ser sencilla.
> 1.  ¿Ves puerto 445? -> `enum4linux`.
> 2.  ¿Ves puerto 80? -> `nikto` y `gobuster`.
> 3.  ¿Ves puerto 3306 (MySQL)? -> Intenta entrar como `root` sin contraseña.
>
> A veces la respuesta es tan obvia que la ignoramos buscando algo complejo.

---

## 📝 Mis Notas Personales

```markdown
# Comandos que siempre olvido
- Conectar a SMB con usuario específico: smbclient //IP/Share -U usuario
- Enumerar usuarios en RPC: rpcclient -U "" IP -> enumdomusers
```

---
[⬅️ Volver a Footprinting & Scanning](../02-footprinting-scanning/README.md) | [➡️ Siguiente: Vulnerability Assessment](../04-vulnerability-assessment/README.md)
