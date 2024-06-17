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
  3. Navigate to the **server** directory
  4. Add a directory called **database-population** (this can be whatever you want but you MUST update the .sequelizerc with the correct path).
  5. Within **database-population**, add the following subfolders
     -seeders
     -migrations
     -models
  6. Run **npm run create-models** (within server folder)

  - This will create models for each of our database tables (Songs, Tracks, People, PersonTrack) and migrations files in `build`

  7. In each of the migration files in **build/database-population/migrations**, delete the `createdAt` and `updatedAt`objects as these will cause errors when the `up` queries are run (they do not exist in my model definitions in `src/models`)
  8. In each of the model files, within the object containing `modelName`, add `timestamps: false`
  9. Run `npm migrate`
  10. Ensure that your tables are populated correctly
  11. Run `npm run create-seeds` to create files that will populate our database. Seed files should be in `build/database-population/seeders`
  12. TBA: Defining foreign key relationships

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
