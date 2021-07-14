from app import app
from app.changelog import hydrate_changelog
from flask import Request


@app.post("/hydration")
def handle_hydration():
    # TODO verify origin

    hydrate_changelog()
    return "Ok", 200
