*** Settings ***
Library     Browser


*** Variables ***
${URL}          https://staging.callsight.tech/login
${PASSWORD}     Pass1234


*** Test Cases ***
Valid Login
    New Browser    chromium    headless=False
    New Page    ${URL}
    Fill Text    id=email    fer@callsight.tech
    Fill Secret    id=password    $PASSWORD
    Click    [type="submit"]
    Get Text    body    contains    Bienvenido
