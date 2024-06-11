import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Track } from './track';
import { Person } from './person';

@Table({
    timestamps: false,
    tableName: 'participants'
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

    // @HasOne(() => Person, 'person_id')
    // person!: Person;

    @BelongsTo(() => Person, 'person_id')
    person!: Person;
    // @BelongsTo(() => Track, 'track_id')
    // track!: Track;
    // @BelongsToMany(() => Track, () => Person)
    // people!: Person[];
}
