# Averon Backend

## Install

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run development server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
