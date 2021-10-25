import { t } from 'testcafe';
import {setUp} from './setup'
import {Service} from './service'
fixture.only('Test')
.before(async () => {
	await Service.load();
})
	.beforeEach(async t => {
		await setUp();
	})


test('test', async ()=>{
    await t.expect(true).ok();

})