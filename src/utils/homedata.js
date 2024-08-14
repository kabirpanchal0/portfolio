const homePageData = {
    data: {
        attributes: {
            HeroSectionDetails: {
                title: `Kabir <span>Panchal</span>`,
                description: `I am a passionate developer who believes in logic instead of magic. That's why I work on my logic every day. Logic is the one thing that will never fail in the future.`,
            },
            AboutMeDetails: {
                title: `Kabir <span>Panchal</span>`,
                description: `I am a passionate developer who believes in logic instead of magic. That's why I work on my logic every day. Logic is the one thing that will never fail in the future.`,
                details: {
                    heading: `Details`,
                    detailsComponent: [
                        {
                            name: `Years Of Experience:`,
                            value: `1 year`
                        },
                        {
                            name: `Position:`,
                            value: `Web Developer`
                        }
                    ]
                },
                skills: {
                    heading: `Skills`,
                    categoryComponent: [
                        {
                            categoryHeading: `Fron-end`,
                            skills: [
                                { name: `HTML` },
                                { name: `CSS, SCSS` },
                                { name: `React JS` },
                                { name: `Next JS` },
                                { name: `Bootstrap` },
                                { name: `Tailwind CSS` }
                            ]
                        },
                        {
                            categoryHeading: `Back-end`,
                            skills: [
                                { name: `My SQL` },
                                { name: `Nest JS` }
                            ]
                        },
                        {
                            categoryHeading: `CMS`,
                            skills: [
                                { name: `Strapi CMS` }
                            ]
                        },
                    ]
                }
            }
        }
    }
}
export default homePageData;