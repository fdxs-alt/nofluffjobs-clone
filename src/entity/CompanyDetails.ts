import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { User } from './User';
import { JobOffer } from './JobOffer';
import { Field, ObjectType } from 'type-graphql';
import { Opinion } from './Opinions';
@ObjectType()
@Entity()
export class Company extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { length: 255 })
  companyName: string;

  @Field()
  @Column('smallint')
  yearOfSetUp: number;

  @Field()
  @Column('smallint')
  sizeOfCompany: number;

  @Field()
  @Column('varchar', { length: 255 })
  localisation: string;

  @Field()
  @Column('text')
  description: string;

  @Field(() => [String])
  @Column('varchar', { array: true })
  technologies: string[];

  @Field(() => [String])
  @Column('varchar', { array: true })
  benefits: string[];

  @Field(() => User)
  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  employer: User;

  @Field(() => [JobOffer])
  @OneToMany(() => JobOffer, (joboffer) => joboffer.company, {
    onDelete: 'CASCADE',
  })
  joboffers: JobOffer;

  @OneToMany(() => Opinion, (opinion) => opinion.company, {
    onDelete: 'CASCADE',
  })
  opinions: Opinion;
}
