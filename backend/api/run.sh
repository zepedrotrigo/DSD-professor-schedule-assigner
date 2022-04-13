#!/bin/bash
sleep 30
exec uvicorn main:app --host "0.0.0.0" --port "8000"