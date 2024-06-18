'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('person_tracks', {
            fields: ['person_id'],
            type: 'foreign key',
            name: 'person_tracks_person_id_fkey',
            references: {
                //Required field
                table: 'people',
                field: 'person_id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('person_tracks', 'person_tracks_person_id_fkey');
    }
};
