FROM ghcr.io/renovatebot/renovate:latest
USER root
RUN apt update
RUN apt install -y openjdk-17-jre
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
RUN echo "JAVA_HOME is set to: $JAVA_HOME"
USER ubuntu
