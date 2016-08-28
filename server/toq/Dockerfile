FROM mono:latest
RUN mkdir /server_app
COPY . /server_app
EXPOSE 8888
CMD ["mono", "/server_app/toq.exe", "-d"]