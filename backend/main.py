from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title='Averon API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173', 'http://127.0.0.1:5173'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    company: str = Field(min_length=1, max_length=120)
    service_interest: str = Field(min_length=1, max_length=120)
    message: str = Field(min_length=10, max_length=2000)


contact_store: list[ContactRequest] = []


@app.get('/')
def health() -> dict[str, str]:
    return {'status': 'ok', 'service': 'averon-backend'}


@app.post('/api/contact')
def submit_contact(contact: ContactRequest) -> dict[str, object]:
    contact_store.append(contact)
    return {
        'success': True,
        'message': 'Contact request received.',
        'stored_count': len(contact_store),
    }
