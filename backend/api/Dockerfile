FROM python:3.9

WORKDIR /backend/api

COPY . .
RUN pip3 install --no-cache-dir --upgrade -r requirements.txt
RUN chmod a+x run.sh
CMD [ "./run.sh"]
#CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]