import {ClassModel} from "./base.class";

import {Statistics} from "./statistics.class";

export class StatisticsRulesets extends ClassModel {
    private osu: Statistics = new Statistics();
    private taiko: Statistics = new Statistics();
    private fruits: Statistics = new Statistics();
    private mania: Statistics = new Statistics();

    constructor() {
        super();
    }
}