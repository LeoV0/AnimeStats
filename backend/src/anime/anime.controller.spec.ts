import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';

const mockAnimeService = {
  findAll: jest.fn(),
  findById: jest.fn(),
  getAllEpisodes: jest.fn(),
  getInProgress: jest.fn(),
  getCompleted: jest.fn(),
  getTenLastAnimes: jest.fn(),
  getUserFavorites: jest.fn(),
  addToFavorites: jest.fn(),
  removeFromFavorites: jest.fn(),
  isFavorite: jest.fn(),
};

describe('AnimeController', () => {
  let controller: AnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeController],
      providers: [{ provide: AnimeService, useValue: mockAnimeService }],
    }).compile();

    controller = module.get<AnimeController>(AnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
