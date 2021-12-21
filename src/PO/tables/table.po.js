class Table {
    constructor() {
        this.table = $('.tabulator');
        this.headersSelector = '.tabulator-col-title';
        this.cellSelector = '.tabulator-cell';
        this.rowSelector = '.tabulator-row';
    }

    async headers() {
    	const elements = await this.table.$$(this.headersSelector);
        const result = elements.map(async (header) => {
            return header.getHTML(false) ;
        })
        return Promise.all(result);
    }

    rows() {
        return $$(this.rowSelector);
    }

    async data() {
        const rows = await this.rows();
        const headers = await this.headers();
        const result = rows.map(async (row) => {
                let result = {};
                const cells = await row.$$(this.cellSelector);
                let index = 0;
                for (const cell of cells) {
                    result[headers[index]] = await cell.getText();
                    index += 1;
                }
                if (result['Email'] === 'default@test.com') {return;}
                ['Demo', 'Wait for supervisor', 'Manager type', 'State'].forEach(key => delete result[key])                
                return result;
            }
        )
        return (await Promise.all(result)).filter(function(x) {
            return x !== undefined;
       });
    }
}

module.exports = { Table: new Table() };
