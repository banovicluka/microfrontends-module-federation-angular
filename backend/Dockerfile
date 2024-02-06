FROM openjdk:18

WORKDIR /opt/backendApp

COPY /target/*.jar backendApp.jar

ENV PORT=9000

EXPOSE $PORT

ENTRYPOINT ["java", "-jar", "backendApp.jar"]
