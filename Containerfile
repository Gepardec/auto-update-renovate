FROM ghcr.io/renovatebot/renovate:latest
USER root
RUN apt update
RUN apt install -y openjdk-17-jre
USER ubuntu