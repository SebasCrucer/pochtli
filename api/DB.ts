import { pyFunc } from "./py_plugin"

interface Product {
    product_code: string,
    warehouse: string,
    date: Date,
    order_demand: number,
    storage: number,
    mu: number,
    mu_a: number,
    pi: number,
    pir: number
}

export class productsDB {
    data: Product[]
    constructor() {
        this.data = [];
    }
    public async init() {
        this.data = await pyFunc('./python_api/query.py', ['./data/csvs/whse_c_final.csv', 'product_code,warehouse,date,order_demand,storage,mu,mu_a,pi,pir,provedor']) as any
    }


    public refresh() {
        this.init()
    }

    public async getIndividuals() {
        await this.init()
        const allProducts = this.data || [];
        const uniqueProductCodes = Array.from(new Set(allProducts.map(product => product.product_code)));
        return uniqueProductCodes;
    }

    public async getProducts() {
        await this.init()
        return this.data
    }

    public async getProduct(id: string) {
        await this.init()
        return this.data!.find((product) => product.product_code === id)
    }

    public async getProductsByWarehouse(warehouse: string) {
        await this.init()
        return this.data!.filter((product) => product.warehouse === warehouse)
    }

    public async getProductsByDate(date: Date) {
        await this.init()
        return this.data!.filter((product) => product.date === date)
    }

    public async getHistoryByProductCode(productCode: string): Promise<Product[]> {
        await this.init()
        return this.data?.filter(product => product.product_code === productCode) || [];
    }

    public async getAllProductHistories(): Promise<{ product_code: string, records: Product[] }[]> {
        await this.init()
        const allProducts = this.data || [];
        const productMap = new Map<string, Product[]>();

        allProducts.forEach(product => {
            if (!productMap.has(product.product_code)) {
                productMap.set(product.product_code, []);
            }
            productMap.get(product.product_code)?.push(product);
        });

        return Array.from(productMap, ([product_code, records]) => ({ product_code, records }));
    }

}