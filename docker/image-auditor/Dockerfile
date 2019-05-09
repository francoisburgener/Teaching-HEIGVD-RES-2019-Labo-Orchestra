FROM node:latest
EXPOSE 2205
COPY src /opt/app/
WORKDIR /opt/app/
RUN npm install
ENTRYPOINT [ "node","auditor.js"]