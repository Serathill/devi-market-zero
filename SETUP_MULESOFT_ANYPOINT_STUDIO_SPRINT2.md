# SETUP_MULESOFT_ANYPOINT_STUDIO_SPRINT2.md

# 1. Instalarea MuleSoft Anypoint Studio

- Accesează site-ul oficial MuleSoft:  
  https://www.mulesoft.com/lp/dl/studio

- Descarcă versiunea potrivită pentru sistemul tău de operare.

- Pentru instalare am folosit informațiile despre firmă furnizate de administrator.

- Instalează Anypoint Studio urmând pașii din installer.

- Pornește Anypoint Studio.

---

# 2. Crearea proiectului „Hello World” în MuleSoft

1. În Anypoint Studio, creează un nou proiect Mule:  
   **File > New > Mule Project**  
   Nume proiect: `hello-word-api`

2. În `src/main/mule/hello-word-api.xml` adaugă următorul cod:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<mule xmlns:ee="http://www.mulesoft.org/schema/mule/ee/core" xmlns:http="http://www.mulesoft.org/schema/mule/http"
      xmlns="http://www.mulesoft.org/schema/mule/core"
      xmlns:doc="http://www.mulesoft.org/schema/mule/documentation" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="
          http://www.mulesoft.org/schema/mule/core http://www.mulesoft.org/schema/mule/core/current/mule.xsd
          http://www.mulesoft.org/schema/mule/http http://www.mulesoft.org/schema/mule/http/current/mule-http.xsd
          http://www.mulesoft.org/schema/mule/ee/core http://www.mulesoft.org/schema/mule/ee/core/current/mule-ee.xsd">
  
  <http:listener-config name="HTTP_Listener_config" doc:name="HTTP Listener config">
    <http:listener-connection host="0.0.0.0" port="8081" />
  </http:listener-config>
  
  <flow name="hello-word-apiFlow" doc:id="apiFlow">
    <http:listener doc:name="Listener" config-ref="HTTP_Listener_config" path="/api/hello"/>
    <ee:transform doc:name="Transform Message">
      <ee:message>
        <ee:set-payload><![CDATA[%dw 2.0
output application/json
---
{
  message: "Hello MuleSoft!"
}
]]></ee:set-payload>
      </ee:message>
    </ee:transform>
  </flow>
</mule>
3. Rulează proiectul din Anypoint Studio:
Run As > Mule Application

4. Testează API-ul în browser sau Postman la adresa:
http://localhost:8081/api/hello

Răspunsul trebuie să fie JSON:


{
  "message": "Hello MuleSoft!"
}

