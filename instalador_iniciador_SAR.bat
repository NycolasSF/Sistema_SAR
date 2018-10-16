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
echo * 1. Instalar MODULOS   *
echo * 2. Executar Sistema_SAR    *
echo * 3. Abrir Diretorio SAR     *
echo * 4. Executar Sistema_SAR COM NODE(caso a opcao 2 nao funcione)    *
echo * 5. Sair                    *
echo  ==================================

set /p opcao= Escolha uma opcao:
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% GEQ 6 goto opcao6


:opcao1
cls
call install_models.bat
echo ==================================
echo *      NODE MODULOS - Instalado com Sucesso          *
echo ==================================
chkdsk c:
pause
goto menu

:opcao2
cls
echo Executando app com nodemon
nodemon app
pause
goto menu

:opcao3
cls
call C:\Windows\System32\cmd.exe /k "C:\Program Files\nodejs\nodevars.bat"
START  %Sistema_SAR%
pause
goto menu


:opcao4
cls
echo Executando app com node
node app
goto menu

:opcao5
cls
exit
pause
goto menu

:opcao6
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu
