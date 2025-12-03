import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  user: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
  },
  user_episode_progression: {
    findMany: jest.fn(),
  },
};

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findById', () => {
    it('Doit retourner un user qui existe', async () => {
      const user = {
        id: 3n,
        name: 'Léo',
        email: 'leo@gmail.com',
        password_hash: 'hashed',
        created_at: new Date(),
        updated_at: new Date(),
      };
      mockPrisma.user.findUnique.mockResolvedValue(user);
      const resultat = await service.findById(3n);

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: 3n },
      });
      expect(resultat).toEqual(user);
    });
    it("Doit lancer une erreur si l'utilisateur n'existe pas", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(service.findById(999n)).rejects.toThrow(NotFoundException);
      await expect(service.findById(999n)).rejects.toThrow(
        'User with this 999 not found',
      );
    });
  });

  describe('getProgressId', () => {
    it('Doit retourner un tableau de progressions', async () => {
      // A finir !!
    });
  });
});
