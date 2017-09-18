

"use strict"

exports.Animal = () => {
    this.organs = {
        breast: false,
    },
            this.heallingSpeed = 0,
            this.grovingSpeed = 0,
            this.limits = {
                lifeTime: {
                    minimum: () => {
                        return 0
                    },
                    maximum: () => {
                        return 0
                    },
                    avarge: () => {
                        return 0
                    },
                },
                speed: {
                    minimum: () => {
                        return 0
                    },
                    maximum: () => {
                        return 0
                    },
                    avarge: () => {
                        return 0
                    },
                },
                firstTime: {
                    walk: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    fly: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    swim: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    eat: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    drink: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    urine: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    caulescent: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    }

                },
                partTime: {
                    eat: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    drink: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    urine: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                    caulescent: {
                        minimum: () => {
                            return 0
                        },
                        maximum: () => {
                            return 0
                        },
                        avarge: () => {
                            return 0
                        },
                    },
                }
            }
    this.skills = {
        walk: false,
        swim: false,
        fly: false,
        crawl: false,
        urine: false,
        caulescent: false,
    }
    this.reproduction = {
        fission: false, // https://en.wikipedia.org/wiki/Fission_(biology) 
        sex: false,
        breastFeed: false, // https://en.wikipedia.org/wiki/Breastfeeding
        placental: false, // https://en.wikipedia.org/wiki/Placentalia
        pouched: false, // https://en.wikipedia.org/wiki/Marsupial
        eggs: false,
        liveBirth: false,
        grub: false,
        genderChange: false,
        gender: {
            x: false,
            y: false,
            z: false,
            w: false,
            0: false,
            tsd: false, // Temperature-dependent sex determination https://en.wikipedia.org/wiki/Temperature-dependent_sex_determination
            haplodiploidy: false, // https://en.wikipedia.org/wiki/Haplodiploidy
            x0: false // https://en.wikipedia.org/wiki/X0_sex-determination_system
        }
    }
}
