use rocket::serde::{json::Json, Deserialize};
#[macro_use]
extern crate rocket;

#[derive(Deserialize)]
struct Login<'r> {
    code: &'r str,
    state: &'r str,
}

#[post("/login", data = "<login>")]
fn login(login: Json<Login<'_>>) -> &'static str {
    ""
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![login])
}
