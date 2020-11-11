import User from '../infra/typeorm/entities/User';
import ICreateUsersDTO from '../dtos/ICreateUsersDTO';
import IFindAllProviderDTO from '../dtos/IFindAllProviderDTO';

export default interface IUsersRepository {
  findAllProviders(data: IFindAllProviderDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUsersDTO): Promise<User>;
  save(user: User): Promise<User>;
}
