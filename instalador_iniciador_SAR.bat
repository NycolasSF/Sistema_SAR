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
dir %pushd Sistema_SAR%

echo  ==================================
echo          BEM-VINDOS AO SAR
echo              Menu
echo  ==================================
echo * 1. Instalar NPM            *
echo * 2. Instalar nodemon        *
echo * 3. Instalar NODE MODULOS   *
echo * 4. Executar Sistema_SAR    *
echo * 5. Abrir Diretorio SAR     *
echo * 6. Sair                    *
echo  ==================================

set /p opcao= Escolha uma opcao:
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% GEQ 7 goto opcao7

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
npm install -g node-modules
popd
echo ==================================
echo *      NODE MODULOS - Instalado com Sucesso          *
echo ==================================
chkdsk c:
pause
goto menu

:opcao4
cls
nodemon app
pause
goto menu

:opcao5
cls
echo FALTA IMPLEMENTAR
pause
goto menu

:opcao6
cls
exit
pause
goto menu

:opcao7
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu
