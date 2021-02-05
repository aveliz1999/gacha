import {Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, DefaultScope, Scopes} from 'sequelize-typescript';

@Table
export default class Character extends Model<Character> {

    @PrimaryKey
    @Column
    id: number;

    @Column
    image_url: string;

    @Column
    mal_id: number;

    @Column
    title: string

    @Column
    url: string

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}