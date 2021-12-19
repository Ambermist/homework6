const { When, Then, Given } = require('@cucumber/cucumber');
const YAML = require('yaml');
const { Login } = require("../../src/PO/login.po");
const { Table } = require("../../src/PO/tables/table.po");
const { Subscribe } = require('../../src/PO/forms/subscribe.model');
const { User } = require('../../src/PO/forms/user.model');
const { Navigator } = require('../../src/PO/navigator.po');

When(/^I go to "([^"]*)"$/, async function (url) {
    await browser.url(url);
});

When (/^I login as: "([^"]*)", "([^"]*)"$/, async function (user, password){
    const credentials = {username: user, password: password};
    await Login.login(credentials);
});

When('I go to {string} menu item', async function (item) {
    await Navigator.selectItem(item);
});

When(/^I fill user form:$/, async function (formYaml) {
    const formData = YAML.parse(formYaml);
    await User.setValues(formData);
});

When(/^I fill form:$/, async function (formYaml) {
    const formData = YAML.parse(formYaml);
    await Subscribe.setValues(formData);
});

Then(/^I check table:$/, async function (table) {
    const checkData = table.hashes();
    console.log(checkData);
    const resultTable = await Table.data();
    console.log(resultTable);
    expect(resultTable).toEqual(checkData);
})

Then('I log out', async function(){
    await Navigator.logout();
})


