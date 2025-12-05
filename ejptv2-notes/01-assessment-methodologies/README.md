# 1️⃣ Assessment Methodologies

## 📖 Descripción General del Dominio

El dominio de **Assessment Methodologies** representa aproximadamente el **25% del examen eJPTv2** y cubre las metodologías fundamentales que todo penetration tester debe dominar antes de realizar cualquier ataque.

Este dominio se enfoca en las fases iniciales de un engagement de pentesting: desde la recopilación de información hasta la identificación de vulnerabilidades. Son las bases sobre las que se construye todo el proceso de pentesting.

## 🎯 Importancia en el Examen

Las metodologías de assessment son **críticas** porque:

- Determinan la calidad de la información que obtendrás
- Una buena enumeración es la diferencia entre éxito y fracaso
- El 80% del trabajo de pentesting es recopilación de información
- Sin una metodología sólida, perderás tiempo y oportunidades

## 📚 Subtemas Incluidos

### [🔍 1. Information Gathering](01-information-gathering/README.md)
Aprende técnicas de reconocimiento pasivo y activo, OSINT, y cómo recopilar información sobre tu objetivo sin ser detectado.

**Habilidades clave:**
- Reconocimiento pasivo (OSINT)
- Reconocimiento activo
- Google Dorking
- Recopilación de información de dominios y organizaciones

### [🎯 2. Footprinting & Scanning](02-footprinting-scanning/README.md)
Domina el arte del escaneo de redes, detección de puertos, identificación de servicios y fingerprinting de sistemas operativos.

**Habilidades clave:**
- Escaneo de puertos con Nmap
- Detección de servicios y versiones
- OS fingerprinting
- Técnicas de evasión de firewalls

### [📊 3. Enumeration](03-enumeration/README.md)
Profundiza en la enumeración de servicios específicos como SMB, SNMP, DNS, LDAP y NFS para extraer información valiosa.

**Habilidades clave:**
- Enumeración de SMB/CIFS
- Enumeración de SNMP
- Enumeración de DNS
- Enumeración de servicios de directorio

### [🔐 4. Vulnerability Assessment](04-vulnerability-assessment/README.md)
Aprende a identificar, analizar y priorizar vulnerabilidades utilizando scanners automatizados y técnicas manuales.

**Habilidades clave:**
- Uso de vulnerability scanners
- Análisis de resultados
- Búsqueda de exploits
- Priorización de vulnerabilidades

## 🔄 Flujo de Trabajo Típico

```
Information Gathering
        ↓
Footprinting & Scanning
        ↓
    Enumeration
        ↓
Vulnerability Assessment
        ↓
[Siguiente fase: Exploitation]
```

## 💡 Consejos para Este Dominio

1. **Sé exhaustivo**: No te saltes pasos en la enumeración
2. **Documenta todo**: Cada hallazgo puede ser útil después
3. **Usa múltiples herramientas**: Una herramienta puede fallar donde otra tiene éxito
4. **Piensa como un atacante**: ¿Qué información sería valiosa?
5. **No hagas ruido innecesario**: Aprende técnicas sigilosas

## 🛠️ Herramientas Principales del Dominio

- **Nmap**: El rey del escaneo de puertos
- **Masscan**: Escaneo rápido de grandes rangos
- **enum4linux**: Enumeración de SMB
- **theHarvester**: Recopilación de información OSINT
- **Nessus/OpenVAS**: Vulnerability scanning
- **Nikto**: Web server scanning
- **Wireshark**: Análisis de tráfico

## 📝 Checklist de Assessment

Antes de pasar a la fase de explotación, asegúrate de haber:

- [ ] Recopilado información sobre el objetivo (dominios, IPs, empleados)
- [ ] Escaneado todos los puertos y servicios
- [ ] Identificado versiones de servicios y sistemas operativos
- [ ] Enumerado cada servicio encontrado exhaustivamente
- [ ] Ejecutado vulnerability scans
- [ ] Documentado todos los hallazgos
- [ ] Priorizado objetivos y vulnerabilidades

## 🎓 Recursos de Práctica

- **TryHackMe**: Rooms de "Network Services", "Nmap"
- **HackTheBox**: Máquinas de nivel Easy para practicar enumeración
- **PentesterLab**: Ejercicios de reconnaissance

## 📖 Siguiente Paso

Una vez que domines las metodologías de assessment, estarás listo para pasar al [Dominio 2: Host & Network Penetration Testing](../02-host-network-pentesting/README.md).

---

[⬅️ Volver al Índice Principal](../README.md)
