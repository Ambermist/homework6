class Table {
    constructor() {
        this.table = $('.tabulator');
        this.headersSelector = '.tabulator-col';
        this.cellSelector = '.tabulator-cell';
        this.rowSelector = '.tabulator-row';
    }

    async headers() {
        return this.table.$$(this.headersSelector).map(async (header) => {
            return { element: await header, name: await header.getText() };
        })
    }

    rows() {
        return $$(this.rowSelector);
    }

    async data() {
        const rows = await this.rows();
        const result = rows.map(async (row) => {
                let result = {};
                const cells = await row.$$(this.cellSelector);
                let index = 0;
                for (const cell of cells) {
                    result[(await this.headers())[index].name] = await cell.getText();
                    index += 1;
                }
                if (result['Email'] === 'default@test.com') {return;}
                delete result.Demo;
                delete result.State;
                if (result['Role'] === 'user') {delete result[0]};
                return result;
            }
        )
        return (await Promise.all(result)).filter(function(x) {
            return x !== undefined;
       });
    }
}

module.exports = { Table: new Table() };
