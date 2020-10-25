import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

class Image {
  @Column()
  id: string;

  @Column()
  filename: string;

  @Column({ default: true })
  isDefault: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Image;
