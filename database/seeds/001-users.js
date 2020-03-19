exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    { username: "sam", password:"bad password" },
    { username: "frodo", password:"bad password" },
    { username: "pippin", password:"bad password" },
    { username: "merry", password:"bad password" },
  ])
}
