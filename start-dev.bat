@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 20.9 or newer.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)

if not exist .env.local copy .env.example .env.local >nul

echo Starting FANCY website at http://localhost:3000
call npm run dev
goto :eof

:error
echo Failed to start the project.
pause
exit /b 1
