@echo off
setlocal
cd /d D:\Git\nikshchelkov.github.io
set PATH=D:\Ruby33-x64\bin;D:\Program Files\Git\cmd;%PATH%
bundle exec jekyll serve --force_polling
endlocal