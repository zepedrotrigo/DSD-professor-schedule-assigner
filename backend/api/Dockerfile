FROM python:3.9

WORKDIR /backend/api

COPY . .
RUN pip3 install -r requirements.txt

CMD ["uvicorn", "controller:app", "--host", "0.0.0.0", "--port", "8080"]