# Project Title

Just Dance Buddy helps Just Dancers make and find playlists based on custom filters that are not present in the current game (choreographers for example).

## Description

<!-- An in-depth paragraph about your project and overview of use. -->

## Getting Started

### Dependencies

- PostgresSQL (local or external)
- pgAdmin (optional)

### Seeding your database

- Currently, this app is connected to a local postgres database via a .env file

  1. Create a postgres database called 'just-dance-buddy'

  2. Create your own .env file from my .env.example

  3. Navigate to the **server/build** directory

  4. Add a directory called **database-population** (this can be whatever you want but you MUST update the .sequelizerc with the correct path).

  5. Within **database-population**, add the following subfolders

     - seeders
     - migrations
     - models

  6. Run **npm run create-models**

  - This will create models for each of our database tables (Songs, Tracks, People, PersonTrack) and migrations files in `build`. \*See Notes re: why i am using the `build` dirr

  - In each of the model files
    - Add `timestamps: false`

  7. In each of the migration files in **build/database-population/migrations**

  - Delete the `createdAt` and `updatedAt`objects
  - Delete extraneous ids and move their properties to the `{tableName}_id` column (person_tracks / other junction tables are exempt from this rule)

  9. Run `npm migrate`.

  10. Ensure that your tables are populated correctly.

  11. Run `npm run create-seeds` to create files that will populate our database. Seed files should be in `build/database-population/seeders`.

  12. Run `npm run create-migration-file` and create 3 files for our 3 foreign keys (song_id in tracks, track_id in person_tracks and person_id in person_tracks).

  13. Run `npm migrate`

## Migration FAQ

Q: Why are you generating files in the `build` folder instead of in `src`?
A: I am using build here since these files do not need to be tracked once the entire migrations is run and these generated files are in .js instead of .ts so it makes more sense to have them live where all of the other .js files live.

### Executing program

<!-- - How to run the program
- Step-by-step bullets

```
code blocks for commands
``` -->

## Help

<!-- Any advise for common problems or issues. -->

<!-- ```
command to run if program contains helper info
``` -->

## Authors

Jennifer Eler
https://www.linkedin.com/in/jennifereler/

## Version History

- 0.2
  - Various bug fixes and optimizations
  - See [commit change]() or See [release history]()
- 0.1
  - Initial Release

## License
