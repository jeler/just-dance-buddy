import { Column, DataType, ForeignKey, PrimaryKey, Table, Model, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Song } from './song';
import { Person } from './person';
import { PersonTrack } from './participant';

@Table({
    timestamps: false,
    tableName: 'tracks'
})
export class Track extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    track_id!: number;
    @Column({
        type: DataType.STRING(255)
    })
    mode?: string;
    @Column({
        type: DataType.STRING(255)
    })
    difficulty?: string;
    @Column({
        type: DataType.STRING(255)
    })
    effort?: string;
    @Column({
        type: DataType.BOOLEAN(),
        allowNull: false
    })
    onJDU!: boolean;
    @Column({
        type: DataType.BOOLEAN(),
        allowNull: false
    })
    onJDPlus!: boolean;
    @Column({
        type: DataType.SMALLINT()
    })
    picto_count?: number;
    @Column({
        type: DataType.SMALLINT
    })
    gold_moves?: number;
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    original_game_id!: string;
    @ForeignKey(() => Song)
    @Column({
        type: DataType.STRING(),
        allowNull: false
    })
    song_id!: number;
    @Column({
        type: DataType.STRING(255)
    })
    alternate?: string;

    // Associations

    @BelongsTo(() => Song, 'song_id')
    song!: Song;

    @BelongsToMany(() => Person, { through: () => PersonTrack })
    people?: Person;
}
