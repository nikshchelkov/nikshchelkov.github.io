@echo off
setlocal

rem 1) Переходим в папку проекта
cd /d D:\Git\nikshchelkov.github.io
if errorlevel 1 (
  echo Ne mogu najti papku proekta: D:\Git\nikshchelkov.github.io
  pause
  exit /b 1
)

rem 2) Гарантируем, что используем Ruby 3.3 и Git
rem Если у вас Ruby 3.3 в другом месте, замените путь D:\Ruby33-x64\bin
set PATH=D:\Ruby33-x64\bin;D:\Program Files\Git\cmd;%PATH%

rem 3) Проверки (не обязательны, но полезны)
ruby -v
git --version

rem 4) Запуск сервера
bundle exec jekyll serve

endlocal