from datetime import datetime
import json
import time
from typing import List
from pydantic import BaseModel

from fastapi import FastAPI, Request, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from . import crud, models, schemas
from .database import SessionLocal, engine

from sqlalchemy.orm import Session

import requests

from config import WEBHOOK_URL

# from apps.tracking.models.events import EventForm, EventModel, Events

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["https://www.tiktok.com"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def get_status():
    return {"status": True}


#########################
#
# Users w/ Survey (Main)
#
#########################


@app.get("/users", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.post("/users", response_model=schemas.User)
def create_user(user: schemas.UserWithSurveyCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        # If user already exists, return user
        return db_user
    try:
        if WEBHOOK_URL:
            r = requests.post(
                WEBHOOK_URL,
                json={
                    "content": f'Invisible Interventions: User "{user.email}" has started the study!',
                    "embeds": None,
                    "attachments": [],
                },
            )
        return crud.create_user_and_survey_response(db=db, user=user)
    except Exception as e:
        raise HTTPException(
            status_code=404,
            detail="Something went wrong, please contact us via (jaeryang_baek@sfu.ca)!",
        )


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    print(db_user)
    return db_user


#########################
#
# Users (Download)
#
#########################


@app.post("/users/signup")
def create_sign_up_user(form: schemas.SignUpForm, db: Session = Depends(get_db)):

    print(form)
    user_count = crud.get_sign_up_user_count(db)
    print(f"create_sign_up_user {user_count}")

    db_sign_up_user = crud.get_sign_up_user_by_email(db, email=form.email)

    print(form)
    if db_sign_up_user:
        # If user already exists, return user
        return db_sign_up_user
    elif user_count <= 120:
        try:

            if WEBHOOK_URL:
                r = requests.post(
                    WEBHOOK_URL,
                    json={
                        "content": f'Invisible Interventions: User #{user_count} "{form.name}" has signed up!\nEmail: {form.email}\nID: {form.external_id}',
                        "embeds": None,
                        "attachments": [],
                    },
                )
            return crud.create_sign_up_user(
                db,
                date=form.date,
                name=form.name,
                email=form.email,
                external_id=form.external_id,
            )
        except Exception as e:
            raise HTTPException(
                status_code=404,
                detail="Something went wrong, please contact us via (jaeryang_baek@sfu.ca)!",
            )

    else:
        raise HTTPException(
            status_code=404,
            detail="We're sorry! Our research program is at full capacity. Thank you for your interest, but we are unable to accept new participants at this time.",
        )


@app.get("/users/signup/count", response_model=int)
def get_sign_up_user_count(db: Session = Depends(get_db)):
    user_count = crud.get_sign_up_user_count(db)
    return user_count


#########################
#
# Usage Data
#
#########################


@app.post("/usage", response_model=schemas.Usage)
def session_update(form_data: schemas.UsageForm, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=form_data.user_id)
    if not db_user:
        raise HTTPException(status_code=400, detail="User ID not found")

    usage = schemas.UsageCreate(
        user_id=form_data.user_id,
        extension_id=form_data.extension_id,
        session_begin=datetime.now(),
        session_end=datetime.now(),
    )

    return crud.session_update(db=db, usage=usage)


#########################
#
# Exit Survey
#
#########################


@app.post("/survey/exit", response_model=schemas.ExitSurveyResponse)
def create_exit_survey(
    form_data: schemas.ExitSurveyResponseCreate, db: Session = Depends(get_db)
):
    db_user = crud.get_user_by_email(db, email=form_data.email)

    if not db_user:
        raise HTTPException(status_code=400, detail="User ID not found")

    if db_user:
        db_exit_survey_response = crud.get_exit_survey_response_by_user_id(
            db=db, user_id=db_user.id
        )

        if db_exit_survey_response:
            raise HTTPException(status_code=400, detail="Duplicate Response")

        else:

            if WEBHOOK_URL:
                r = requests.post(
                    WEBHOOK_URL,
                    json={
                        "content": f'Invisible Interventions: User "{db_user.email}" has finished the exit survey!',
                        "embeds": None,
                        "attachments": [],
                    },
                )
            return crud.create_exit_survey_response(db=db, survey=form_data)


@app.get("/survey/exit", response_model=List[schemas.ExitSurveyResponse])
def get_exit_survey_responses(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
):
    responses = crud.get_exit_survey_responses(db, skip=skip, limit=limit)
    return responses
