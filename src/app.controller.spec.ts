import { Test, TestingModule } from '@nestjs/testing';
import { CatService } from './modules/cats/cat.service';
import { CatGroupService } from './modules/catGroup/catGroup.service';
import { CatController } from './modules/cats/cat.controller';
import { CatGroupController } from './modules/catGroup/catGroup.controller';


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
