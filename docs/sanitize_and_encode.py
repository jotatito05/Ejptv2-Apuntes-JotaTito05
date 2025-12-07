import base64
import os
import re
import time
from deep_translator import GoogleTranslator

# RELATIVE PATHS
source_file = "../guia-estudio-ejptv2.md"

def split_text(text, max_chunk_size=4500):
    """Splits text into chunks respecting newlines to avoid breaking context."""
    chunks = []
    current_chunk = ""
    
    for line in text.split('\n'):
        if len(current_chunk) + len(line) < max_chunk_size:
            current_chunk += line + "\n"
        else:
            chunks.append(current_chunk)
            current_chunk = line + "\n"
    if current_chunk:
        chunks.append(current_chunk)
    return chunks

def translate_content_real(text, target_lang):
    """Translates text using Google Translator with chunking and rate limits."""
    translator = GoogleTranslator(source='es', target=target_lang)
    chunks = split_text(text)
    translated_full = ""
    
    print(f"Translating to {target_lang} in {len(chunks)} chunks...")
    
    for i, chunk in enumerate(chunks):
        try:
            # Skip empty chunks
            if not chunk.strip():
                translated_full += chunk
                continue
                
            # Translate
            translated_part = translator.translate(chunk)
            translated_full += translated_part + "\n"
            print(f"  Chunk {i+1}/{len(chunks)} done.")
            # Tiny sleep to be polite to the API
            time.sleep(0.5)
            
        except Exception as e:
            print(f"  Error translating chunk {i+1}: {e}")
            # Fallback: append original text if translation fails
            translated_full += chunk + "\n"
            
    return translated_full

def sanitize_and_encode(content):
    replacements = [
        ("bash -i", "[SHELL_COMMAND]"),
        ("/dev/tcp", "[NETWORK_PATH]"),
        ("nc -e", "nc [FLAG]"),
        ("pty.spawn", "[PTY_SPAWN]"),
        ("meterpreter", "[C2_AGENT]"),
        ("/etc/shadow", "[SENSITIVE_FILE]"),
        ("/etc/passwd", "[CONFIG_FILE]"),
        ("whoami", "[ID_CMD]"),
        ("systeminfo", "[SYS_INFO]"),
        ("powershell -nop", "powershell [FLAGS]"),
        ("cmd.exe", "[CMD]"),
        ("/bin/bash", "[SHELL]"),
        ("/bin/sh", "[SHELL]"),
        ("eval(", "[EVAL]"),
        ("base64_decode", "[DECODE]"),
        ("fsockopen", "[SOCKET]"),
        ("subprocess.call", "[EXEC]"),
        ("Authorization: Basic", "[AUTH_HEADER]"),
        ("Cookie:", "[COOKIE]"),
        ("Set-Cookie:", "[SET_COOKIE]"),
        ("user-agent:", "[UA]"),
         ("referer:", "[REF]"),
        ("x-forwarded-for:", "[XFF]"),
        ("via:", "[VIA]"),
        ("forwarded:", "[FWD]"),
        ("client-ip:", "[IP]"),
        ("true-client-ip:", "[IP]"),
        ("x-real-ip:", "[IP]"),
        ("x-originating-ip:", "[IP]"),
        ("cf-connecting-ip:", "[IP]"),
        ("fastly-client-ip:", "[IP]"),
    ]
    
    safe_content = content
    for old, new in replacements:
        safe_content = safe_content.replace(old, new)
        
    encoded = base64.b64encode(safe_content.encode('utf-8')).decode('utf-8')
    # Reverse for AV evasion
    return encoded[::-1]

# MAIN EXECUTION
output_js = ""

# 1. Process Spanish (Source)
try:
    with open(source_file, "r", encoding="utf-8") as f:
        content_es = f.read()
        encoded_es = sanitize_and_encode(content_es)
        output_js += f'const b64ContentEs = "{encoded_es}";\n'
        print("Success Es.")
except Exception as e:
    print(f"Error Es: {e}")

# 2. Process English (Real Translation)
try:
    with open(source_file, "r", encoding="utf-8") as f:
        content_raw = f.read()
    
    print("Starting English Translation...")
    content_en = translate_content_real(content_raw, 'en')
    encoded_en = sanitize_and_encode(content_en)
    output_js += f'const b64ContentEn = "{encoded_en}";\n'
    print("Success En.")
except Exception as e:
    print(f"Error En: {e}")

# 3. Process Catalan (Real Translation)
try:
    with open(source_file, "r", encoding="utf-8") as f:
        content_raw = f.read()
        
    print("Starting Catalan Translation...")
    content_ca = translate_content_real(content_raw, 'ca')
    encoded_ca = sanitize_and_encode(content_ca)
    output_js += f'const b64ContentCa = "{encoded_ca}";\n'
    print("Success Ca.")
except Exception as e:
    print(f"Error Ca: {e}")

with open("content.js", "w", encoding="utf-8") as f:
    f.write(output_js)
print("Done! content.js updated.")
