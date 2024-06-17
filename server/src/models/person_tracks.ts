import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Track } from './track';
import { Person } from './person';

@Table({
    timestamps: false,
    tableName: 'person_tracks'
})
export class PersonTrack extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id!: number;
    @ForeignKey(() => Person)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    person_id!: number;
    @ForeignKey(() => Track)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    track_id!: string;
    @Column({
        type: DataType.STRING(20)
    })
    role_id?: string;

    // Associations

    // @BelongsToMany(() => Track, { through: () => PersonTrack })
    // tracks!: Track;

    @BelongsTo(() => Person, 'person_id')
    person!: Person;
}
