FROM python:3.11-slim-buster

WORKDIR /back

COPY requirements.txt /back/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /back/requirements.txt

COPY ./app /back/app
COPY ./actions.json /back/

CMD ["uvicorn", "app.api:app", "--host", "0.0.0.0", "--port", "3000"]



