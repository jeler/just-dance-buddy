import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Track } from './track';

@Table({
    timestamps: false,
    tableName: 'songs'
})
export class Song extends Model {
    @ForeignKey(() => Track)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    song_id!: number;
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    song_name!: string;
    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    artist!: string;
    @Column({
        type: DataType.STRING(100)
    })
    source?: string;
    @Column({
        type: DataType.STRING(50)
    })
    language?: string;
    @Column({
        type: DataType.STRING(50)
    })
    duration?: string;
    @Column({
        type: DataType.STRING(4)
    })
    year?: string;
}
