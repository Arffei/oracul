# Oracul

Минимальный прототип веб‑приложения, вдохновлённого Steam. В текущей версии это статическая витрина с брендингом Oracul.

## Быстрый старт

1. Откройте файл `index.html` в браузере (двойной клик в проводнике).
2. Или поднимите локальный сервер (рекомендуется):

   Windows PowerShell:
   
   ```powershell
   cd C:\Users\arffe\Project\oracul
   $port=5173; $h=New-Object Net.HttpListener; $h.Prefixes.Add("http://localhost:$port/"); $h.Start(); Write-Host "Serving http://localhost:$port"; while ($h.IsListening) { $ctx=$h.GetContext(); $req=$ctx.Request; $path = if ($req.Url.LocalPath -eq "/") { "index.html" } else { $req.Url.LocalPath.TrimStart("/") }; if (Test-Path $path) { $bytes=[IO.File]::ReadAllBytes($path); $ctx.Response.OutputStream.Write($bytes,0,$bytes.Length) } else { $ctx.Response.StatusCode=404 }; $ctx.Response.Close() }
   ```

   Либо с Python (если установлен):

   ```bash
   python -m http.server 5173
   ```

   Затем откройте `http://localhost:5173`.

## Структура

- `index.html` — главная страница Oracul
- `assets/styles.css` — стили и тема
- `assets/app.js` — простой рендер карточек «Избранное»

## Дальше

- Перейти на Next.js + TypeScript
- Добавить страницы: магазин, библиотека, профиль
- Реализовать систему аккаунтов и авторизацию
- Интегрировать каталог игр и поиск