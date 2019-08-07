export const STEPS = [
    {
        Page: SelectContest,
        caption: "Select contest type",
        title: "START A CONTEST",
        description: "Launching a contest on Squadhelp is very simple. Select the type of contest you would like to launch from the list below. Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!"
    },
    {
        form: "contestNameForm",
        type: "name",
        Page: NameContestForm,
        caption: "Name",
        title: "COMPANY NAME",
        description: "Tell us a bit more about your business as well as your preferences so that creatives get a better idea about what you are looking for",
    },
    {
        form: "contestTagForm",
        type: "tag",
        Page: TaglineContestForm,
        caption: "Tagline",
        title: "TAGLINE",
        nextStepDescription: "Input information about tagline contest in the next step.",
        description: "Tell us a bit more about your business as well as your preferences so that creatives get a better idea about what you are looking for",
    },
    {
        form: "contestLogoForm",
        type: "logo",
        Page: LogoContestForm,
        caption: "Logo",
        title: "LOGO",
        nextStepDescription: "Input information about logo contest in the next step.",
        description: "Tell us a bit more about your business as well as your preferences so that creatives get a better idea about what you are looking for",
    },
    {
        form: "paymentForm",
        Page: PaymentForm,
        caption: "Payment",
        title: "Payment",
        nextStepDescription: "You are almost finished. It remains to pay the package in the next step",
        description: ""
    },
];