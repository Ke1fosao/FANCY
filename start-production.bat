@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 20.9 or newer.
  pause
  exit /b 1
)

call npm install
if errorlevel 1 goto :error
if not exist .env.local copy .env.example .env.local >nul
call npm run build
if errorlevel 1 goto :error
call npm start
goto :eof

:error
echo Production start failed.
pause
exit /b 1
