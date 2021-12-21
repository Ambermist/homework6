const { Select } = require('./select');
const { Field } = require('./field');
const { Checkbox } = require('./checkbox');
const { Textarea } = require('./textarea');
const { addAttachment } = require('@wdio/allure-reporter').default;

class Subscribe {
    modelSubscribe() {
        return  [
            { name: 'plan', type: Select, selector: '#plan' },
            { name: 'years', type: Field, selector: '#years' },
            { name: 'user', type: Select, selector: '#user' },
            { name: 'suspend', type: Checkbox, selector: '#suspend' },
            { name: 'description', type: Textarea, selector: '#description' }
        ]
    }
    async setValues(formData) {
        for (const elModel of this.modelSubscribe()) {
            const el = new elModel.type(elModel.selector);
            el.set(formData[elModel.name]);
            await browser.pause(200);
        }
        addAttachment('user data', formData, 'application/json');
        await $('button=Create').click();
        await browser.pause(500);
    }
}
module.exports = { Subscribe: new Subscribe() };
