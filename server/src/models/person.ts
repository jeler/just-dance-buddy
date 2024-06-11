import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { PersonTrack } from './participant';

@Table({
    timestamps: false,
    tableName: 'people'
})
export class Person extends Model {
    // @ForeignKey(() => PersonTrack)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    person_id!: number;
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    name?: string;

    // ASSOCIATIONS

    @BelongsTo(() => PersonTrack, 'person_id')
    person!: Person;
}
