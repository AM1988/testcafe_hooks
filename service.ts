export class Service{
    private static data: any;
	private static isLoaded: boolean = false;

	public static async load(): Promise<void> {
        console.log('Loading...')
		if (!Service.isLoaded) {
			const data = {docs:"Docs"};
			Service.data = data;
			this.isLoaded = true;
		}
        console.log('Loaded...')

	}

	public static getTranslationByKey(path: string): string {
		console.log('Service.data', Service.data)
		const result = Service.data[path];
        console.log(result);
        return result;
        
	}
}