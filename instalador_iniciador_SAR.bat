@echo off
cls
:menu
~/.bashrc:
pushd Sistema_SAR
title SAR
cls

color 0
date /t
echo Computador: %computername%        Usuario: %username%

cls
echo SEU DIRETORIO:
dir /W %pushd Sistema_SAR%


echo  ==================================
echo          BEM-VINDOS AO SAR
echo              Menu
echo  ==================================
echo * 1. Instalar NPM            *
echo * 2. Instalar nodemon        *
echo * 3. Instalar MODULOS   *
echo * 4. Executar Sistema_SAR    *
echo * 5. Abrir Diretorio SAR     *
echo * 6. Executar Sistema_SAR COM NODE(caso a opcao 4 nao funcione)    *
echo * 7. Sair                    *
echo  ==================================

set /p opcao= Escolha uma opcao:
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% equ 7 goto opcao7
if %opcao% GEQ 8 goto opcao8

:opcao1
cls
npm install npm@latest -g
echo ==================================
echo *      NPM - Instalado com Sucesso          *
echo ==================================
pause
goto menu

:opcao2
cls
npm install -g nodemon
echo ==================================
echo *      NODEMON - Instalado com Sucesso          *
echo ==================================
pause
goto menu

:opcao3
cls
call install_models.bat
echo ==================================
echo *      NODE MODULOS - Instalado com Sucesso          *
echo ==================================
chkdsk c:
pause
goto menu

:opcao4
cls
echo Executando app com nodemon
nodemon app
pause
goto menu

:opcao5
cls
call C:\Windows\System32\cmd.exe /k "C:\Program Files\nodejs\nodevars.bat"
START  %Sistema_SAR%
pause
goto menu


:opcao6
cls
echo Executando app com node
node app
goto menu

:opcao7
cls
exit
pause
goto menu

:opcao8
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu
