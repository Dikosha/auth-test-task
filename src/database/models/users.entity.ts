import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
export class Users extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  login: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  provider!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  providerId!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password!: string | null;
}
