import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

/**
 * Represents a User in the system.
 */
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true })
  email!: string;
}