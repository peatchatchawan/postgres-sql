import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  room: string;

  @Column()
  onwork: string;

  @Column()
  queue: string;
}
