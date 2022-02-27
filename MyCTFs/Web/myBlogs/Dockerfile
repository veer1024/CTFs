from alpine:latest

RUN apk add php

WORKDIR /app

COPY . /app

#RUN pip3 --no-cache-dir install -r requirements.txt
#RUN python3 -m http.server --bind 0.0.0.0
EXPOSE 8080
RUN ip addr
ENTRYPOINT ["php"]
CMD ["-S","0.0.0.0:1234","index.php"]
