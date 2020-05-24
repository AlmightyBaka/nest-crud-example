import { Test, TestingModule } from '@nestjs/testing';
import { CatService } from './entities/cats/cat.service';
import { CatGroupService } from './entities/catGroup/catGroup.service';
import { CatController } from './entities/cats/cat.controller';
import { CatGroupController } from './entities/catGroup/catGroup.controller';


// TODO: tests
// describe('AppController', () => {

//   beforeEach(async () => {
//     await Test.createTestingModule({
//       controllers: [CatController, CatGroupController],
//       providers: [CatService, CatGroupService],
//     }).compile();
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(appController.getHello()).toBe('Hello World!');
//     });
//   });
// });
