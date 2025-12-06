# 📡 Footprinting & Scanning: Mapeando el Terreno

## 👋 Introducción

Ya sabemos quién es el objetivo (Information Gathering). Ahora vamos a ver **dónde vive y qué puertas tiene abiertas**.

El **Scanning** es como caminar por un pasillo de hotel probando cada pomo de puerta.
*   ¿Está cerrada con llave? (Closed)
*   ¿Se abre? (Open)
*   ¿Hay un perro guardián detrás? (Filtered/Firewall)

Aquí es donde pasamos de "investigar" a "tocar". Y aquí es donde, si no tienes cuidado, **te detectan**.

---

## 🛠️ Nmap: El Rey Indiscutible

Olvídate de otras herramientas por un momento. En el eJPTv2 (y en la vida real), **Nmap** es tu religión. Si sabes usar Nmap, tienes el 80% de esta fase hecha.

### 1. El Escaneo "Sigiloso" (SYN Scan)
Por defecto, Nmap usa `-sS`. No completa la conexión TCP (no envía el último ACK), por lo que a menudo no queda registrado en los logs de la aplicación.
```bash
nmap -sS 192.168.1.10
```

### 2. El Escaneo "Ruidoso" (Connect Scan)
Si no eres root (o sudo), Nmap tiene que usar `-sT`. Completa la conexión. Es más lento y más fácil de detectar, pero a veces es necesario.
```bash
nmap -sT 192.168.1.10
```

### 3. El "Dámelo Todo" (Aggressive Scan)
¿Quieres versiones, sistema operativo y scripts básicos en un solo comando?
```bash
nmap -A 192.168.1.10
```
> [!WARNING]
> **Cuidado:** `-A` es muy ruidoso y tarda más. En el examen, úsalo con cabeza. Si la red va lenta, mejor hazlo por partes.

---

## 🚦 Estados de Puerto (Lo que Nmap te dice)

Entender esto es vital para saber qué hacer después:

1.  **OPEN:** ¡Bingo! Hay una aplicación escuchando. **Aquí es donde atacaremos.**
2.  **CLOSED:** No hay aplicación, pero el host responde. Significa que la IP está viva (bueno para saber que el host existe), pero no podemos entrar por ahí.
3.  **FILTERED:** El "Coco". Un firewall se está comiendo nuestros paquetes. Nmap no sabe si está abierto o cerrado.
    *   *Truco:* A veces cambiar el tipo de escaneo (de TCP a UDP, o fragmentar paquetes) ayuda a saltarse el firewall.

---

## 🕵️‍♂️ Descubriendo Versiones y SO

Saber que el puerto 80 está abierto no sirve de nada.
Saber que el puerto 80 corre **Apache 2.4.49**... ¡eso es oro! (Porque podemos buscar exploits para esa versión exacta).

```bash
# -sV: Service Version (Dime qué corre ahí)
# -O: Operating System (¿Es Windows o Linux?)
nmap -sV -O 192.168.1.10
```

---

## ⚡ Optimización: No te duermas

En el examen eJPTv2, el tiempo corre. Un escaneo por defecto puede tardar mucho.

*   **Velocidad:** Usa `-T4` (agresivo pero fiable). `-T5` es para locos (pierde paquetes).
*   **Puertos:** Por defecto Nmap escanea los 1000 más comunes.
    *   `nmap -p-` escanea TODOS (65535). Hazlo solo si ya has encontrado lo obvio y necesitas más.

```bash
# Mi comando favorito para empezar:
nmap -sS -sV -T4 192.168.1.10
```

---

## 📝 Mis Notas Personales

```markdown
# Comandos rápidos
- Escaneo rápido de toda la red: nmap -sn 192.168.1.0/24
- Escaneo UDP (lento pero necesario para SNMP/DNS): nmap -sU ...
```

---
[⬅️ Volver a Information Gathering](../01-information-gathering/README.md) | [➡️ Siguiente: Enumeration](../03-enumeration/README.md)
