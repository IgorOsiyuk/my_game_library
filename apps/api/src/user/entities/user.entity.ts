import {
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_data' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_data' })
  updatedAt: string;

  @AfterInsert()
  logInsert() {
    console.log('Insert User', this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log('Removed User', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Update User', this.id);
  }
}
