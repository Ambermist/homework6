const { Field } = require('./field');
const { Textarea } = require('./textarea');

class User {
    modelUser() {
        return [
            { name: 'email', type: Field, selector: '#email' },
            { name: 'password', type: Field, selector: '#password' },
            { name: 'Address', type: Field, selector: '#address1' },
            { name: 'Address2', type: Field, selector: '#address2' },
            { name: 'City', type: Field, selector: '#city' },
            { name: 'Zip', type: Field, selector: '#zip' },
            { name: 'Annual', type: Field, selector: '#anual' },
            { name: 'Description', type: Textarea, selector: '#description' },
        ]
    }
    async setValues(formData) {
        for (const elModel of this.modelUser()) {
            const el = new elModel.type(elModel.selector);
            el.set(formData[elModel.name]);
            await browser.pause(200);
        }
        await $('button=Create').click();
        await browser.pause(500);
    }
}

module.exports = { User: new User() };
