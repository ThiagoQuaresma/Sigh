import { NewMedicoModule } from './new-medico.module';

describe('NewMedicoModule', () => {
    let formModule: NewMedicoModule;

    beforeEach(() => {
        formModule = new NewMedicoModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
