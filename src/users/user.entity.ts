import { Field, ID, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => Boolean)
  @Column()
  isActive: boolean;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @Field(() => GraphQLISODateTime)
  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt: Date;
}
