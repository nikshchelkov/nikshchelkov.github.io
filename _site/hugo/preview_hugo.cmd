@echo off
setlocal

rem --- Settings (edit if your paths differ) ---
set "HUGO_DIR=D:\Git\nikshchelkov.github.io\hugo"
set "DART_SASS_DIR=D:\Tools\dart-sass"

rem --- Put Dart Sass first so Hugo can compile SCSS ---
set "PATH=%DART_SASS_DIR%;%PATH%"

rem --- Go to Hugo site directory ---
cd /d "%HUGO_DIR%"
if errorlevel 1 (
  echo Cannot find Hugo folder: %HUGO_DIR%
  pause
  exit /b 1
)

rem --- Optional: ensure submodules are initialized (theme) ---
cd /d "%HUGO_DIR%\.."
git submodule update --init --recursive >nul 2>&1
cd /d "%HUGO_DIR%"

rem --- Start server and open browser ---
start "" http://localhost:1313/
hugo server

endlocal