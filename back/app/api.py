import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .utils import load_actions


app = FastAPI()

# XXX: this should go to env through settings 
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "localhost:3000" "localhost:5173",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# XXX: this file address should also go to env through settings 
CODEWORDS, ACTION_IDS = load_actions(
    os.path.join(os.path.dirname(__file__), "..", "actions.json")
)

# XXX: this is not realy needed, and should redirect to /docs
@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}


# XXX: add pydantic models for validation and clearer documentation in Swagger
@app.get("/api/v1/codeword/", status_code=200)
async def fetch_codeword_by_action_id(*, action_id: str) -> dict:
    return dict(codewords=CODEWORDS.get(action_id, []))


@app.get("/api/v1/action/", status_code=200)
async def fetch_action_by_codeword(*, codeword: int) -> dict:
    return dict(action_id=ACTION_IDS.get(codeword, ""))
