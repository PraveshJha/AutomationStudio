REM //############ Prerequisite ########################################
REM //############ Start Hub ########################################
SET HomePath=F:\Automation_Studio_Practice\Automation_Resources\Selenium_Grid_Configuration\
SET Severname=%HomePath%selenium-server-standalone-3.141.59.jar
start cmd /k Call java -jar %Severname% -role hub -hubConfig %HomePath%HubConfig.json


