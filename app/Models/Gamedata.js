export default class Gamedata {
    constructor(data) {
        this.question = data.question;
        this.answer = data.answer;
        this.value = data.value;
        this.category = data.category.title;
    }

    get Template() {
        return `
        <div>${this.question}</div>
        <div>${this.answer}</div>
        <div>${this.value}</div>
        <div>${this.category}</div>
        `
    }
}