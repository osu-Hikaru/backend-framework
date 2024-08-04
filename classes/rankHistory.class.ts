import {ClassModel} from "./base.class";

export class RankHistory extends ClassModel {
    public data: Array<number> = [];
    public mode: string = "";

    constructor() {
        super()
    }

    getData(): Array<any> {
        return this.data;
    }

    getMode(): string {
        return this.mode;
    }

    setData(data: Array<number>): void {
        this.data = data;
    }

    setMode(mode: string): void {
        this.mode = mode;
    }
}
